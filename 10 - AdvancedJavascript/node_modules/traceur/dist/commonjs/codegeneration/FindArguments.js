"use strict";
var $___46__46__47_syntax_47_PredefinedName_46_js__,
    $__FindInFunctionScope_46_js__;
var ARGUMENTS = ($___46__46__47_syntax_47_PredefinedName_46_js__ = require("../syntax/PredefinedName.js"), $___46__46__47_syntax_47_PredefinedName_46_js__ && $___46__46__47_syntax_47_PredefinedName_46_js__.__esModule && $___46__46__47_syntax_47_PredefinedName_46_js__ || {default: $___46__46__47_syntax_47_PredefinedName_46_js__}).ARGUMENTS;
var FindInFunctionScope = ($__FindInFunctionScope_46_js__ = require("./FindInFunctionScope.js"), $__FindInFunctionScope_46_js__ && $__FindInFunctionScope_46_js__.__esModule && $__FindInFunctionScope_46_js__ || {default: $__FindInFunctionScope_46_js__}).FindInFunctionScope;
var FindArguments = function($__super) {
  function FindArguments() {
    $traceurRuntime.superConstructor(FindArguments).apply(this, arguments);
  }
  return ($traceurRuntime.createClass)(FindArguments, {visitIdentifierExpression: function(tree) {
      if (tree.identifierToken.value === ARGUMENTS) {
        this.found = true;
      }
    }}, {}, $__super);
}(FindInFunctionScope);
Object.defineProperties(module.exports, {
  default: {get: function() {
      return FindArguments;
    }},
  __esModule: {value: true}
});
