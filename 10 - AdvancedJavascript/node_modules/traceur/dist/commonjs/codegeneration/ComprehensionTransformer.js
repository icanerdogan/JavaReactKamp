"use strict";
var $__alphaRenameThisAndArguments_46_js__,
    $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__,
    $__TempVarTransformer_46_js__,
    $___46__46__47_syntax_47_TokenType_46_js__,
    $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__,
    $___46__46__47_syntax_47_Token_46_js__,
    $__ParseTreeFactory_46_js__;
var alphaRenameThisAndArguments = ($__alphaRenameThisAndArguments_46_js__ = require("./alphaRenameThisAndArguments.js"), $__alphaRenameThisAndArguments_46_js__ && $__alphaRenameThisAndArguments_46_js__.__esModule && $__alphaRenameThisAndArguments_46_js__ || {default: $__alphaRenameThisAndArguments_46_js__}).default;
var FunctionExpression = ($___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ = require("../syntax/trees/ParseTrees.js"), $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__}).FunctionExpression;
var TempVarTransformer = ($__TempVarTransformer_46_js__ = require("./TempVarTransformer.js"), $__TempVarTransformer_46_js__ && $__TempVarTransformer_46_js__.__esModule && $__TempVarTransformer_46_js__ || {default: $__TempVarTransformer_46_js__}).TempVarTransformer;
var $__4 = ($___46__46__47_syntax_47_TokenType_46_js__ = require("../syntax/TokenType.js"), $___46__46__47_syntax_47_TokenType_46_js__ && $___46__46__47_syntax_47_TokenType_46_js__.__esModule && $___46__46__47_syntax_47_TokenType_46_js__ || {default: $___46__46__47_syntax_47_TokenType_46_js__}),
    LET = $__4.LET,
    STAR = $__4.STAR,
    VAR = $__4.VAR;
var $__5 = ($___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ = require("../syntax/trees/ParseTreeType.js"), $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__}),
    COMPREHENSION_FOR = $__5.COMPREHENSION_FOR,
    COMPREHENSION_IF = $__5.COMPREHENSION_IF;
var Token = ($___46__46__47_syntax_47_Token_46_js__ = require("../syntax/Token.js"), $___46__46__47_syntax_47_Token_46_js__ && $___46__46__47_syntax_47_Token_46_js__.__esModule && $___46__46__47_syntax_47_Token_46_js__ || {default: $___46__46__47_syntax_47_Token_46_js__}).Token;
var $__7 = ($__ParseTreeFactory_46_js__ = require("./ParseTreeFactory.js"), $__ParseTreeFactory_46_js__ && $__ParseTreeFactory_46_js__.__esModule && $__ParseTreeFactory_46_js__ || {default: $__ParseTreeFactory_46_js__}),
    createCallExpression = $__7.createCallExpression,
    createEmptyParameterList = $__7.createEmptyParameterList,
    createForOfStatement = $__7.createForOfStatement,
    createFunctionBody = $__7.createFunctionBody,
    createIfStatement = $__7.createIfStatement,
    createParenExpression = $__7.createParenExpression,
    createVariableDeclarationList = $__7.createVariableDeclarationList;
var ComprehensionTransformer = function($__super) {
  function ComprehensionTransformer() {
    $traceurRuntime.superConstructor(ComprehensionTransformer).apply(this, arguments);
  }
  return ($traceurRuntime.createClass)(ComprehensionTransformer, {transformComprehension: function(tree, statement, isGenerator) {
      var prefix = arguments[3];
      var suffix = arguments[4];
      var bindingKind = isGenerator || !this.options.blockBinding ? VAR : LET;
      var statements = prefix ? [prefix] : [];
      for (var i = tree.comprehensionList.length - 1; i >= 0; i--) {
        var item = tree.comprehensionList[i];
        switch (item.type) {
          case COMPREHENSION_IF:
            {
              var expression = this.transformAny(item.expression);
              statement = createIfStatement(expression, statement);
              break;
            }
          case COMPREHENSION_FOR:
            {
              var left = this.transformAny(item.left);
              var iterator = this.transformAny(item.iterator);
              var initializer = createVariableDeclarationList(bindingKind, left, null);
              statement = createForOfStatement(initializer, iterator, statement);
              break;
            }
          default:
            throw new Error('Unreachable.');
        }
      }
      statement = alphaRenameThisAndArguments(this, statement);
      statements.push(statement);
      if (suffix)
        statements.push(suffix);
      var functionKind = isGenerator ? new Token(STAR, null) : null;
      var func = new FunctionExpression(null, null, functionKind, createEmptyParameterList(), null, [], createFunctionBody(statements));
      return createParenExpression(createCallExpression(func));
    }}, {}, $__super);
}(TempVarTransformer);
Object.defineProperties(module.exports, {
  ComprehensionTransformer: {get: function() {
      return ComprehensionTransformer;
    }},
  __esModule: {value: true}
});
