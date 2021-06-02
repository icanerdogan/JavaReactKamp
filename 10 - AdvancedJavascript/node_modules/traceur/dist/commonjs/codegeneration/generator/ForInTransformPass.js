"use strict";
var $___46__46__47__46__46__47_syntax_47_trees_47_ParseTreeType_46_js__,
    $___46__46__47__46__46__47_syntax_47_PredefinedName_46_js__,
    $___46__46__47_TempVarTransformer_46_js__,
    $___46__46__47__46__46__47_syntax_47_TokenType_46_js__,
    $___46__46__47_ParseTreeFactory_46_js__;
var $__3 = ($___46__46__47__46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ = require("../../syntax/trees/ParseTreeType.js"), $___46__46__47__46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ && $___46__46__47__46__46__47_syntax_47_trees_47_ParseTreeType_46_js__.__esModule && $___46__46__47__46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ || {default: $___46__46__47__46__46__47_syntax_47_trees_47_ParseTreeType_46_js__}),
    BLOCK = $__3.BLOCK,
    VARIABLE_DECLARATION_LIST = $__3.VARIABLE_DECLARATION_LIST,
    IDENTIFIER_EXPRESSION = $__3.IDENTIFIER_EXPRESSION;
var $__4 = ($___46__46__47__46__46__47_syntax_47_PredefinedName_46_js__ = require("../../syntax/PredefinedName.js"), $___46__46__47__46__46__47_syntax_47_PredefinedName_46_js__ && $___46__46__47__46__46__47_syntax_47_PredefinedName_46_js__.__esModule && $___46__46__47__46__46__47_syntax_47_PredefinedName_46_js__ || {default: $___46__46__47__46__46__47_syntax_47_PredefinedName_46_js__}),
    LENGTH = $__4.LENGTH,
    PUSH = $__4.PUSH;
var TempVarTransformer = ($___46__46__47_TempVarTransformer_46_js__ = require("../TempVarTransformer.js"), $___46__46__47_TempVarTransformer_46_js__ && $___46__46__47_TempVarTransformer_46_js__.__esModule && $___46__46__47_TempVarTransformer_46_js__ || {default: $___46__46__47_TempVarTransformer_46_js__}).TempVarTransformer;
var $__6 = ($___46__46__47__46__46__47_syntax_47_TokenType_46_js__ = require("../../syntax/TokenType.js"), $___46__46__47__46__46__47_syntax_47_TokenType_46_js__ && $___46__46__47__46__46__47_syntax_47_TokenType_46_js__.__esModule && $___46__46__47__46__46__47_syntax_47_TokenType_46_js__ || {default: $___46__46__47__46__46__47_syntax_47_TokenType_46_js__}),
    BANG = $__6.BANG,
    IN = $__6.IN,
    OPEN_ANGLE = $__6.OPEN_ANGLE,
    PLUS_PLUS = $__6.PLUS_PLUS,
    VAR = $__6.VAR;
var $__7 = ($___46__46__47_ParseTreeFactory_46_js__ = require("../ParseTreeFactory.js"), $___46__46__47_ParseTreeFactory_46_js__ && $___46__46__47_ParseTreeFactory_46_js__.__esModule && $___46__46__47_ParseTreeFactory_46_js__ || {default: $___46__46__47_ParseTreeFactory_46_js__}),
    createArgumentList = $__7.createArgumentList,
    createAssignmentStatement = $__7.createAssignmentStatement,
    createBinaryExpression = $__7.createBinaryExpression,
    createBlock = $__7.createBlock,
    createCallStatement = $__7.createCallStatement,
    createContinueStatement = $__7.createContinueStatement,
    createEmptyArrayLiteral = $__7.createEmptyArrayLiteral,
    createForInStatement = $__7.createForInStatement,
    createForStatement = $__7.createForStatement,
    createIdentifierExpression = $__7.createIdentifierExpression,
    createIfStatement = $__7.createIfStatement,
    createMemberExpression = $__7.createMemberExpression,
    createMemberLookupExpression = $__7.createMemberLookupExpression,
    createNumberLiteral = $__7.createNumberLiteral,
    createOperatorToken = $__7.createOperatorToken,
    createParenExpression = $__7.createParenExpression,
    createPostfixExpression = $__7.createPostfixExpression,
    createUnaryExpression = $__7.createUnaryExpression,
    createVariableDeclarationList = $__7.createVariableDeclarationList,
    createVariableStatement = $__7.createVariableStatement;
var ForInTransformPass = function($__super) {
  function ForInTransformPass() {
    $traceurRuntime.superConstructor(ForInTransformPass).apply(this, arguments);
  }
  return ($traceurRuntime.createClass)(ForInTransformPass, {transformForInStatement: function(tree) {
      var $__1,
          $__2;
      var bodyStatements = [];
      var body = this.transformAny(tree.body);
      if (body.type === BLOCK) {
        ($__1 = bodyStatements).push.apply($__1, $traceurRuntime.spread(body.statements));
      } else {
        bodyStatements.push(body);
      }
      var elements = [];
      var keys = this.getTempIdentifier();
      elements.push(createVariableStatement(VAR, keys, createEmptyArrayLiteral()));
      var collection = this.getTempIdentifier();
      elements.push(createVariableStatement(VAR, collection, tree.collection));
      var p = this.getTempIdentifier();
      elements.push(createForInStatement(createVariableDeclarationList(VAR, p, null), createIdentifierExpression(collection), createCallStatement(createMemberExpression(keys, PUSH), createArgumentList([createIdentifierExpression(p)]))));
      var i = this.getTempIdentifier();
      var lookup = createMemberLookupExpression(createIdentifierExpression(keys), createIdentifierExpression(i));
      var originalKey,
          assignOriginalKey;
      if (tree.initializer.type === VARIABLE_DECLARATION_LIST) {
        var decList = tree.initializer;
        originalKey = createIdentifierExpression(decList.declarations[0].lvalue);
        assignOriginalKey = createVariableStatement(decList.declarationType, originalKey.identifierToken, lookup);
      } else if (tree.initializer.type === IDENTIFIER_EXPRESSION) {
        originalKey = tree.initializer;
        assignOriginalKey = createAssignmentStatement(tree.initializer, lookup);
      } else {
        throw new Error('Invalid left hand side of for in loop');
      }
      var innerBlock = [];
      innerBlock.push(assignOriginalKey);
      innerBlock.push(createIfStatement(createUnaryExpression(createOperatorToken(BANG), createParenExpression(createBinaryExpression(originalKey, createOperatorToken(IN), createIdentifierExpression(collection)))), createContinueStatement(), null));
      ($__2 = innerBlock).push.apply($__2, $traceurRuntime.spread(bodyStatements));
      elements.push(createForStatement(createVariableDeclarationList(VAR, i, createNumberLiteral(0)), createBinaryExpression(createIdentifierExpression(i), createOperatorToken(OPEN_ANGLE), createMemberExpression(keys, LENGTH)), createPostfixExpression(createIdentifierExpression(i), createOperatorToken(PLUS_PLUS)), createBlock(innerBlock)));
      return createBlock(elements);
    }}, {}, $__super);
}(TempVarTransformer);
Object.defineProperties(module.exports, {
  ForInTransformPass: {get: function() {
      return ForInTransformPass;
    }},
  __esModule: {value: true}
});
