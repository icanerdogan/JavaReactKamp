"use strict";
var $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__,
    $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__,
    $__ParseTreeTransformer_46_js__,
    $___46__46__47_syntax_47_TokenType_46_js__,
    $__PlaceholderParser_46_js__;
var $__3 = ($___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ = require("../syntax/trees/ParseTrees.js"), $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__}),
    BinaryExpression = $__3.BinaryExpression,
    UnaryExpression = $__3.UnaryExpression;
var $__4 = ($___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ = require("../syntax/trees/ParseTreeType.js"), $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__}),
    IDENTIFIER_EXPRESSION = $__4.IDENTIFIER_EXPRESSION,
    LITERAL_EXPRESSION = $__4.LITERAL_EXPRESSION,
    UNARY_EXPRESSION = $__4.UNARY_EXPRESSION;
var ParseTreeTransformer = ($__ParseTreeTransformer_46_js__ = require("./ParseTreeTransformer.js"), $__ParseTreeTransformer_46_js__ && $__ParseTreeTransformer_46_js__.__esModule && $__ParseTreeTransformer_46_js__ || {default: $__ParseTreeTransformer_46_js__}).ParseTreeTransformer;
var $__6 = ($___46__46__47_syntax_47_TokenType_46_js__ = require("../syntax/TokenType.js"), $___46__46__47_syntax_47_TokenType_46_js__ && $___46__46__47_syntax_47_TokenType_46_js__.__esModule && $___46__46__47_syntax_47_TokenType_46_js__ || {default: $___46__46__47_syntax_47_TokenType_46_js__}),
    EQUAL_EQUAL = $__6.EQUAL_EQUAL,
    EQUAL_EQUAL_EQUAL = $__6.EQUAL_EQUAL_EQUAL,
    NOT_EQUAL = $__6.NOT_EQUAL,
    NOT_EQUAL_EQUAL = $__6.NOT_EQUAL_EQUAL,
    TYPEOF = $__6.TYPEOF;
var parseExpression = ($__PlaceholderParser_46_js__ = require("./PlaceholderParser.js"), $__PlaceholderParser_46_js__ && $__PlaceholderParser_46_js__.__esModule && $__PlaceholderParser_46_js__ || {default: $__PlaceholderParser_46_js__}).parseExpression;
function isEqualityExpression(tree) {
  switch (tree.operator.type) {
    case EQUAL_EQUAL:
    case EQUAL_EQUAL_EQUAL:
    case NOT_EQUAL:
    case NOT_EQUAL_EQUAL:
      return true;
  }
  return false;
}
function isTypeof(tree) {
  return tree.type === UNARY_EXPRESSION && tree.operator.type === TYPEOF;
}
function isSafeTypeofString(tree) {
  if (tree.type !== LITERAL_EXPRESSION)
    return false;
  var value = tree.literalToken.processedValue;
  switch (value) {
    case 'symbol':
    case 'object':
      return false;
  }
  return true;
}
var SymbolTransformer = function($__super) {
  function SymbolTransformer() {
    $traceurRuntime.superConstructor(SymbolTransformer).apply(this, arguments);
  }
  return ($traceurRuntime.createClass)(SymbolTransformer, {
    transformTypeofOperand_: function(tree) {
      var operand = this.transformAny(tree.operand);
      return new UnaryExpression(tree.location, tree.operator, operand);
    },
    transformBinaryExpression: function(tree) {
      if (isEqualityExpression(tree)) {
        if (isTypeof(tree.left) && isSafeTypeofString(tree.right)) {
          var left = this.transformTypeofOperand_(tree.left);
          var right = tree.right;
          return new BinaryExpression(tree.location, left, tree.operator, right);
        }
        if (isTypeof(tree.right) && isSafeTypeofString(tree.left)) {
          var left$__1 = tree.left;
          var right$__2 = this.transformTypeofOperand_(tree.right);
          return new BinaryExpression(tree.location, left$__1, tree.operator, right$__2);
        }
      }
      return $traceurRuntime.superGet(this, SymbolTransformer.prototype, "transformBinaryExpression").call(this, tree);
    },
    transformUnaryExpression: function(tree) {
      if (tree.operator.type !== TYPEOF)
        return $traceurRuntime.superGet(this, SymbolTransformer.prototype, "transformUnaryExpression").call(this, tree);
      var operand = this.transformAny(tree.operand);
      var expression = this.getRuntimeTypeof(operand);
      if (operand.type === IDENTIFIER_EXPRESSION) {
        return parseExpression($traceurRuntime.getTemplateObject(["(typeof ", " === 'undefined' ?\n          'undefined' : ", ")"]), operand, expression);
      }
      return expression;
    },
    getRuntimeTypeof: function(operand) {
      return parseExpression($traceurRuntime.getTemplateObject(["$traceurRuntime.typeof(", ")"]), operand);
    }
  }, {}, $__super);
}(ParseTreeTransformer);
Object.defineProperties(module.exports, {
  SymbolTransformer: {get: function() {
      return SymbolTransformer;
    }},
  __esModule: {value: true}
});
