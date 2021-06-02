"use strict";
var $__toSource_46_js__;
var toSource = ($__toSource_46_js__ = require("./toSource.js"), $__toSource_46_js__ && $__toSource_46_js__.__esModule && $__toSource_46_js__ || {default: $__toSource_46_js__}).toSource;
function write(tree) {
  var $__2,
      $__3;
  var options = arguments[1];
  var outputName = arguments[2] !== (void 0) ? arguments[2] : '<TreeWriter-output>';
  var sourceRoot = arguments[3];
  var $__1 = toSource(tree, options, outputName, sourceRoot),
      result = ($__2 = $__1[Symbol.iterator](), ($__3 = $__2.next()).done ? void 0 : $__3.value),
      sourceMap = ($__3 = $__2.next()).done ? void 0 : $__3.value;
  if (sourceMap)
    options.generatedSourceMap = sourceMap;
  return result;
}
var TreeWriter = function() {
  function TreeWriter() {}
  return ($traceurRuntime.createClass)(TreeWriter, {}, {});
}();
TreeWriter.write = write;
Object.defineProperties(module.exports, {
  write: {get: function() {
      return write;
    }},
  TreeWriter: {get: function() {
      return TreeWriter;
    }},
  __esModule: {value: true}
});
