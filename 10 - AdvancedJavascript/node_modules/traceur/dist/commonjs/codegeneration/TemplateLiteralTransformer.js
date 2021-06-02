"use strict";
var $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__,
    $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__,
    $___46__46__47_syntax_47_LiteralToken_46_js__,
    $__ParenTrait_46_js__,
    $__ParseTreeTransformer_46_js__,
    $___46__46__47_syntax_47_TokenType_46_js__,
    $__ParseTreeFactory_46_js__;
var $__3 = ($___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ = require("../syntax/trees/ParseTreeType.js"), $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__}),
    BINARY_EXPRESSION = $__3.BINARY_EXPRESSION,
    COMMA_EXPRESSION = $__3.COMMA_EXPRESSION,
    CONDITIONAL_EXPRESSION = $__3.CONDITIONAL_EXPRESSION,
    TEMPLATE_LITERAL_PORTION = $__3.TEMPLATE_LITERAL_PORTION,
    TEMPLATE_LITERAL_EXPRESSION = $__3.TEMPLATE_LITERAL_EXPRESSION;
var $__4 = ($___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ = require("../syntax/trees/ParseTrees.js"), $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__}),
    LiteralExpression = $__4.LiteralExpression,
    NewExpression = $__4.NewExpression;
var LiteralToken = ($___46__46__47_syntax_47_LiteralToken_46_js__ = require("../syntax/LiteralToken.js"), $___46__46__47_syntax_47_LiteralToken_46_js__ && $___46__46__47_syntax_47_LiteralToken_46_js__.__esModule && $___46__46__47_syntax_47_LiteralToken_46_js__ || {default: $___46__46__47_syntax_47_LiteralToken_46_js__}).LiteralToken;
var ParenTrait = ($__ParenTrait_46_js__ = require("./ParenTrait.js"), $__ParenTrait_46_js__ && $__ParenTrait_46_js__.__esModule && $__ParenTrait_46_js__ || {default: $__ParenTrait_46_js__}).ParenTrait;
var ParseTreeTransformer = ($__ParseTreeTransformer_46_js__ = require("./ParseTreeTransformer.js"), $__ParseTreeTransformer_46_js__ && $__ParseTreeTransformer_46_js__.__esModule && $__ParseTreeTransformer_46_js__ || {default: $__ParseTreeTransformer_46_js__}).ParseTreeTransformer;
var $__8 = ($___46__46__47_syntax_47_TokenType_46_js__ = require("../syntax/TokenType.js"), $___46__46__47_syntax_47_TokenType_46_js__ && $___46__46__47_syntax_47_TokenType_46_js__.__esModule && $___46__46__47_syntax_47_TokenType_46_js__ || {default: $___46__46__47_syntax_47_TokenType_46_js__}),
    PERCENT = $__8.PERCENT,
    PLUS = $__8.PLUS,
    SLASH = $__8.SLASH,
    STAR = $__8.STAR,
    STRING = $__8.STRING;
var $__9 = ($__ParseTreeFactory_46_js__ = require("./ParseTreeFactory.js"), $__ParseTreeFactory_46_js__ && $__ParseTreeFactory_46_js__.__esModule && $__ParseTreeFactory_46_js__ || {default: $__ParseTreeFactory_46_js__}),
    createArgumentList = $__9.createArgumentList,
    createArrayLiteral = $__9.createArrayLiteral,
    createBinaryExpression = $__9.createBinaryExpression,
    createCallExpression = $__9.createCallExpression,
    createMemberExpression = $__9.createMemberExpression,
    createOperatorToken = $__9.createOperatorToken,
    createParenExpression = $__9.createParenExpression;
function createStringLiteralExpression(loc, str) {
  return new LiteralExpression(loc, new LiteralToken(STRING, str, loc));
}
function createGetTemplateObject(elements) {
  var cooked = [];
  var raw = [];
  var same = true;
  for (var i = 0; i < elements.length; i += 2) {
    var loc = elements[i].location;
    var str = elements[i].value.value;
    var cookedStr = toCookedString(str);
    var rawStr = toRawString(str);
    var cookedLiteral$__1 = createStringLiteralExpression(loc, cookedStr);
    cooked.push(cookedLiteral$__1);
    if (cookedStr !== rawStr) {
      same = false;
      var rawLiteral = createStringLiteralExpression(loc, rawStr);
      raw.push(rawLiteral);
    } else {
      raw.push(cookedLiteral$__1);
    }
  }
  maybeAddEmptyStringAtEnd(elements, cooked);
  var cookedLiteral = createArrayLiteral(cooked);
  var args = [cookedLiteral];
  if (!same) {
    maybeAddEmptyStringAtEnd(elements, raw);
    var rawLiteral$__2 = createArrayLiteral(raw);
    args.unshift(rawLiteral$__2);
  }
  return createCallExpression(createMemberExpression('$traceurRuntime', 'getTemplateObject'), createArgumentList(args));
}
function maybeAddEmptyStringAtEnd(elements, items) {
  var length = elements.length;
  if (!length || elements[length - 1].type !== TEMPLATE_LITERAL_PORTION) {
    items.push(createStringLiteralExpression(null, '""'));
  }
}
function toRawString(str) {
  str = str.replace(/\r\n?/g, '\n');
  str = JSON.stringify(str);
  return str.replace(/\u2028|\u2029/g, function(c) {
    switch (c) {
      case '\u2028':
        return '\\u2028';
      case '\u2029':
        return '\\u2029';
      default:
        throw Error('Not reachable');
    }
  });
}
function toCookedString(s) {
  var sb = ['"'];
  var i = 0,
      k = 1,
      c,
      c2;
  while (i < s.length) {
    c = s[i++];
    switch (c) {
      case '\\':
        c2 = s[i++];
        switch (c2) {
          case '\n':
          case '\u2028':
          case '\u2029':
            break;
          case '\r':
            if (s[i + 1] === '\n') {
              i++;
            }
            break;
          default:
            sb[k++] = c;
            sb[k++] = c2;
        }
        break;
      case '"':
        sb[k++] = '\\"';
        break;
      case '\n':
        sb[k++] = '\\n';
        break;
      case '\r':
        if (s[i] === '\n')
          i++;
        sb[k++] = '\\n';
        break;
      case '\t':
        sb[k++] = '\\t';
        break;
      case '\f':
        sb[k++] = '\\f';
        break;
      case '\b':
        sb[k++] = '\\b';
        break;
      case '\u2028':
        sb[k++] = '\\u2028';
        break;
      case '\u2029':
        sb[k++] = '\\u2029';
        break;
      default:
        sb[k++] = c;
    }
  }
  sb[k++] = '"';
  return sb.join('');
}
var TemplateLiteralTransformer = function($__super) {
  function TemplateLiteralTransformer() {
    $traceurRuntime.superConstructor(TemplateLiteralTransformer).apply(this, arguments);
  }
  return ($traceurRuntime.createClass)(TemplateLiteralTransformer, {
    transformTemplateLiteralExpression: function(tree) {
      if (!tree.operand) {
        return this.createDefaultTemplateLiteral(tree);
      }
      var operand = this.transformAny(tree.operand);
      var elements = tree.elements;
      var args = [createGetTemplateObject(tree.elements)];
      for (var i = 1; i < elements.length; i += 2) {
        args.push(this.transformAny(elements[i]));
      }
      return createCallExpression(operand, createArgumentList(args));
    },
    transformTemplateSubstitution: function(tree) {
      var transformedTree = this.transformAny(tree.expression);
      switch (transformedTree.type) {
        case BINARY_EXPRESSION:
          switch (transformedTree.operator.type) {
            case STAR:
            case PERCENT:
            case SLASH:
              return transformedTree;
          }
          return createParenExpression(transformedTree);
        case COMMA_EXPRESSION:
        case CONDITIONAL_EXPRESSION:
          return createParenExpression(transformedTree);
      }
      return transformedTree;
    },
    transformTemplateLiteralPortion: function(tree) {
      var str = toCookedString(tree.value.value);
      return createStringLiteralExpression(tree.location, str);
    },
    createDefaultTemplateLiteral: function(tree) {
      var elements = tree.elements;
      var length = elements.length;
      if (length === 0) {
        return createStringLiteralExpression(tree.location, '""');
      }
      var firstNonEmpty = elements[0].value.value === '';
      var binaryExpression = this.transformAny(elements[0]);
      if (length === 1)
        return binaryExpression;
      var plusToken = createOperatorToken(PLUS);
      for (var i = 1; i < length; i++) {
        var element = elements[i];
        if (element.type === TEMPLATE_LITERAL_PORTION) {
          if (element.value.value === '') {
            continue;
          }
          if (firstNonEmpty && i === 2) {
            binaryExpression = binaryExpression.right;
          }
        }
        var transformedTree = this.transformAny(elements[i]);
        binaryExpression = createBinaryExpression(binaryExpression, plusToken, transformedTree);
      }
      return new createParenExpression(binaryExpression);
    }
  }, {}, $__super);
}(ParenTrait(ParseTreeTransformer));
Object.defineProperties(module.exports, {
  TemplateLiteralTransformer: {get: function() {
      return TemplateLiteralTransformer;
    }},
  __esModule: {value: true}
});
