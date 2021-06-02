"use strict";
var $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__,
    $__TempVarTransformer_46_js__,
    $__ParseTreeFactory_46_js__,
    $__PlaceholderParser_46_js__,
    $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__;
var $__1 = ($___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ = require("../syntax/trees/ParseTreeType.js"), $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__}),
    FOR_OF_STATEMENT = $__1.FOR_OF_STATEMENT,
    VARIABLE_DECLARATION_LIST = $__1.VARIABLE_DECLARATION_LIST,
    LABELLED_STATEMENT = $__1.LABELLED_STATEMENT;
var TempVarTransformer = ($__TempVarTransformer_46_js__ = require("./TempVarTransformer.js"), $__TempVarTransformer_46_js__ && $__TempVarTransformer_46_js__.__esModule && $__TempVarTransformer_46_js__ || {default: $__TempVarTransformer_46_js__}).TempVarTransformer;
var $__3 = ($__ParseTreeFactory_46_js__ = require("./ParseTreeFactory.js"), $__ParseTreeFactory_46_js__ && $__ParseTreeFactory_46_js__.__esModule && $__ParseTreeFactory_46_js__ || {default: $__ParseTreeFactory_46_js__}),
    id = $__3.createIdentifierExpression,
    createMemberExpression = $__3.createMemberExpression,
    createVariableStatement = $__3.createVariableStatement;
var $__4 = ($__PlaceholderParser_46_js__ = require("./PlaceholderParser.js"), $__PlaceholderParser_46_js__ && $__PlaceholderParser_46_js__.__esModule && $__PlaceholderParser_46_js__ || {default: $__PlaceholderParser_46_js__}),
    parseStatement = $__4.parseStatement,
    parseStatements = $__4.parseStatements;
var $__5 = ($___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ = require("../syntax/trees/ParseTrees.js"), $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__}),
    AnonBlock = $__5.AnonBlock,
    LabelledStatement = $__5.LabelledStatement;
var ForOfTransformer = function($__super) {
  function ForOfTransformer() {
    $traceurRuntime.superConstructor(ForOfTransformer).apply(this, arguments);
  }
  return ($traceurRuntime.createClass)(ForOfTransformer, {
    transformForOfStatement: function(original) {
      return this.transformForOfStatement_(original, []);
    },
    transformForOfStatement_: function(original, labelSet) {
      var tree = $traceurRuntime.superGet(this, ForOfTransformer.prototype, "transformForOfStatement").call(this, original);
      var iter = id(this.getTempIdentifier());
      var result = id(this.getTempIdentifier());
      var label = id(this.getTempIdentifier());
      var normalCompletion = id(this.getTempIdentifier());
      var throwCompletion = id(this.getTempIdentifier());
      var exception = id(this.getTempIdentifier());
      var ex = id(this.getTempIdentifier());
      var labelledStatement;
      var innerStatement;
      var assignment;
      if (tree.initializer.type === VARIABLE_DECLARATION_LIST) {
        assignment = createVariableStatement(tree.initializer.declarationType, tree.initializer.declarations[0].lvalue, createMemberExpression(result, 'value'));
      } else {
        assignment = parseStatement($traceurRuntime.getTemplateObject(["", " = ", ".value;"]), tree.initializer, result);
      }
      innerStatement = parseStatement($traceurRuntime.getTemplateObject(["\n        for (var ", ",\n                 ", " = (", ")[Symbol.iterator]();\n             !(", " = (", " = ", ".next()).done);\n             ", " = true) {\n          ", "\n          ", "\n        }"]), result, iter, tree.collection, normalCompletion, result, iter, normalCompletion, assignment, tree.body);
      while (labelledStatement = labelSet.pop()) {
        innerStatement = new LabelledStatement(labelledStatement.location, labelledStatement.name, innerStatement);
      }
      return new AnonBlock(null, parseStatements($traceurRuntime.getTemplateObject(["\n        var ", " = true;\n        var ", " = false;\n        var ", " = undefined;\n        try {\n          ", "\n        } catch (", ") {\n          ", " = true;\n          ", " = ", ";\n        } finally {\n          try {\n            if (!", " && ", ".return != null) {\n              ", ".return();\n            }\n          } finally {\n            if (", ") {\n              throw ", ";\n            }\n          }\n        }"]), normalCompletion, throwCompletion, exception, innerStatement, ex, throwCompletion, exception, ex, normalCompletion, iter, iter, throwCompletion, exception));
    },
    transformLabelledStatement: function(tree) {
      var labelSet = [tree];
      var statement = tree.statement;
      while (statement.type === LABELLED_STATEMENT) {
        labelSet.push(statement);
        statement = statement.statement;
      }
      if (statement.type !== FOR_OF_STATEMENT) {
        return $traceurRuntime.superGet(this, ForOfTransformer.prototype, "transformLabelledStatement").call(this, tree);
      }
      return this.transformForOfStatement_(statement, labelSet);
    }
  }, {}, $__super);
}(TempVarTransformer);
Object.defineProperties(module.exports, {
  ForOfTransformer: {get: function() {
      return ForOfTransformer;
    }},
  __esModule: {value: true}
});
