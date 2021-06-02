"use strict";
var $___46__46__47_syntax_47_ParseTreeVisitor_46_js__,
    $___46__46__47_util_47_StringSet_46_js__;
var ParseTreeVisitor = ($___46__46__47_syntax_47_ParseTreeVisitor_46_js__ = require("../syntax/ParseTreeVisitor.js"), $___46__46__47_syntax_47_ParseTreeVisitor_46_js__ && $___46__46__47_syntax_47_ParseTreeVisitor_46_js__.__esModule && $___46__46__47_syntax_47_ParseTreeVisitor_46_js__ || {default: $___46__46__47_syntax_47_ParseTreeVisitor_46_js__}).ParseTreeVisitor;
var StringSet = ($___46__46__47_util_47_StringSet_46_js__ = require("../util/StringSet.js"), $___46__46__47_util_47_StringSet_46_js__ && $___46__46__47_util_47_StringSet_46_js__.__esModule && $___46__46__47_util_47_StringSet_46_js__ || {default: $___46__46__47_util_47_StringSet_46_js__}).StringSet;
var BindingsInDestructuringPatternVisitor = function($__super) {
  function BindingsInDestructuringPatternVisitor() {
    $traceurRuntime.superConstructor(BindingsInDestructuringPatternVisitor).call(this);
    this.bindings = new StringSet();
  }
  return ($traceurRuntime.createClass)(BindingsInDestructuringPatternVisitor, {
    visitBindingIdentifier: function(tree) {
      this.bindings.add(tree.getStringValue());
    },
    visitBindingElement: function(tree) {
      this.visitAny(tree.binding);
    },
    visitVariableDeclaration: function(tree) {
      this.visitAny(tree.lvalue);
    }
  }, {}, $__super);
}(ParseTreeVisitor);
function bindingsInDestructuringPattern(tree) {
  var v = new BindingsInDestructuringPatternVisitor();
  v.visitAny(tree);
  return v.bindings;
}
var $__default = bindingsInDestructuringPattern;
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
