"use strict";
var $__ErrorReporter_46_js__;
var $__1 = ($__ErrorReporter_46_js__ = require("./ErrorReporter.js"), $__ErrorReporter_46_js__ && $__ErrorReporter_46_js__.__esModule && $__ErrorReporter_46_js__ || {default: $__ErrorReporter_46_js__}),
    ErrorReporter = $__1.ErrorReporter,
    format = $__1.format;
var SyntaxErrorReporter = function($__super) {
  function SyntaxErrorReporter() {
    $traceurRuntime.superConstructor(SyntaxErrorReporter).apply(this, arguments);
  }
  return ($traceurRuntime.createClass)(SyntaxErrorReporter, {reportMessageInternal: function(location, message) {
      var s = format(location, message);
      throw new SyntaxError(s);
    }}, {}, $__super);
}(ErrorReporter);
Object.defineProperties(module.exports, {
  SyntaxErrorReporter: {get: function() {
      return SyntaxErrorReporter;
    }},
  __esModule: {value: true}
});
