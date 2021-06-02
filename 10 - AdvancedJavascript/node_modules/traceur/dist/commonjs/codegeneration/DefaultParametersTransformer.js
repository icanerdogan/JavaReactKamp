"use strict";
var $___46__46__47_semantics_47_util_46_js__,
    $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__,
    $__ParameterTransformer_46_js__,
    $___46__46__47_syntax_47_PredefinedName_46_js__,
    $___46__46__47_syntax_47_TokenType_46_js__,
    $__ParseTreeFactory_46_js__;
var $__1 = ($___46__46__47_semantics_47_util_46_js__ = require("../semantics/util.js"), $___46__46__47_semantics_47_util_46_js__ && $___46__46__47_semantics_47_util_46_js__.__esModule && $___46__46__47_semantics_47_util_46_js__ || {default: $___46__46__47_semantics_47_util_46_js__}),
    isUndefined = $__1.isUndefined,
    isVoidExpression = $__1.isVoidExpression;
var FormalParameterList = ($___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ = require("../syntax/trees/ParseTrees.js"), $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__}).FormalParameterList;
var ParameterTransformer = ($__ParameterTransformer_46_js__ = require("./ParameterTransformer.js"), $__ParameterTransformer_46_js__ && $__ParameterTransformer_46_js__.__esModule && $__ParameterTransformer_46_js__ || {default: $__ParameterTransformer_46_js__}).ParameterTransformer;
var ARGUMENTS = ($___46__46__47_syntax_47_PredefinedName_46_js__ = require("../syntax/PredefinedName.js"), $___46__46__47_syntax_47_PredefinedName_46_js__ && $___46__46__47_syntax_47_PredefinedName_46_js__.__esModule && $___46__46__47_syntax_47_PredefinedName_46_js__ || {default: $___46__46__47_syntax_47_PredefinedName_46_js__}).ARGUMENTS;
var $__5 = ($___46__46__47_syntax_47_TokenType_46_js__ = require("../syntax/TokenType.js"), $___46__46__47_syntax_47_TokenType_46_js__ && $___46__46__47_syntax_47_TokenType_46_js__.__esModule && $___46__46__47_syntax_47_TokenType_46_js__ || {default: $___46__46__47_syntax_47_TokenType_46_js__}),
    NOT_EQUAL_EQUAL = $__5.NOT_EQUAL_EQUAL,
    VAR = $__5.VAR;
var $__6 = ($__ParseTreeFactory_46_js__ = require("./ParseTreeFactory.js"), $__ParseTreeFactory_46_js__ && $__ParseTreeFactory_46_js__.__esModule && $__ParseTreeFactory_46_js__ || {default: $__ParseTreeFactory_46_js__}),
    createBinaryExpression = $__6.createBinaryExpression,
    createConditionalExpression = $__6.createConditionalExpression,
    createIdentifierExpression = $__6.createIdentifierExpression,
    createMemberLookupExpression = $__6.createMemberLookupExpression,
    createNumberLiteral = $__6.createNumberLiteral,
    createOperatorToken = $__6.createOperatorToken,
    createVariableStatement = $__6.createVariableStatement,
    createVoid0 = $__6.createVoid0;
function createDefaultAssignment(index, binding, initializer) {
  var argumentsExpression = createMemberLookupExpression(createIdentifierExpression(ARGUMENTS), createNumberLiteral(index));
  var assignmentExpression;
  if (initializer === null || isUndefined(initializer) || isVoidExpression(initializer)) {
    assignmentExpression = argumentsExpression;
  } else {
    assignmentExpression = createConditionalExpression(createBinaryExpression(argumentsExpression, createOperatorToken(NOT_EQUAL_EQUAL), createVoid0()), argumentsExpression, initializer);
  }
  return createVariableStatement(VAR, binding, assignmentExpression);
}
var DefaultParametersTransformer = function($__super) {
  function DefaultParametersTransformer() {
    $traceurRuntime.superConstructor(DefaultParametersTransformer).apply(this, arguments);
  }
  return ($traceurRuntime.createClass)(DefaultParametersTransformer, {transformFormalParameterList: function(tree) {
      var parameters = [];
      var changed = false;
      var defaultToUndefined = false;
      for (var i = 0; i < tree.parameters.length; i++) {
        var param = this.transformAny(tree.parameters[i]);
        if (param !== tree.parameters[i])
          changed = true;
        if (param.isRestParameter() || !param.parameter.initializer && !defaultToUndefined) {
          parameters.push(param);
        } else {
          defaultToUndefined = true;
          changed = true;
          this.parameterStatements.push(createDefaultAssignment(i, param.parameter.binding, param.parameter.initializer));
        }
      }
      if (!changed)
        return tree;
      return new FormalParameterList(tree.location, parameters);
    }}, {}, $__super);
}(ParameterTransformer);
Object.defineProperties(module.exports, {
  DefaultParametersTransformer: {get: function() {
      return DefaultParametersTransformer;
    }},
  __esModule: {value: true}
});
