"use strict";
var $__utils_46_js__;
var $__3 = ($__utils_46_js__ = require("./utils.js"), $__utils_46_js__ && $__utils_46_js__.__esModule && $__utils_46_js__ || {default: $__utils_46_js__}),
    createIteratorResultObject = $__3.createIteratorResultObject,
    isObject = $__3.isObject;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var iteratedString = Symbol('iteratedString');
var stringIteratorNextIndex = Symbol('stringIteratorNextIndex');
var StringIterator = function() {
  var $__1;
  function StringIterator() {}
  return ($traceurRuntime.createClass)(StringIterator, ($__1 = {}, Object.defineProperty($__1, "next", {
    value: function() {
      var o = this;
      if (!isObject(o) || !hasOwnProperty.call(o, iteratedString)) {
        throw new TypeError('this must be a StringIterator object');
      }
      var s = o[iteratedString];
      if (s === undefined) {
        return createIteratorResultObject(undefined, true);
      }
      var position = o[stringIteratorNextIndex];
      var len = s.length;
      if (position >= len) {
        o[iteratedString] = undefined;
        return createIteratorResultObject(undefined, true);
      }
      var first = s.charCodeAt(position);
      var resultString;
      if (first < 0xD800 || first > 0xDBFF || position + 1 === len) {
        resultString = String.fromCharCode(first);
      } else {
        var second = s.charCodeAt(position + 1);
        if (second < 0xDC00 || second > 0xDFFF) {
          resultString = String.fromCharCode(first);
        } else {
          resultString = String.fromCharCode(first) + String.fromCharCode(second);
        }
      }
      o[stringIteratorNextIndex] = position + resultString.length;
      return createIteratorResultObject(resultString, false);
    },
    configurable: true,
    enumerable: true,
    writable: true
  }), Object.defineProperty($__1, Symbol.iterator, {
    value: function() {
      return this;
    },
    configurable: true,
    enumerable: true,
    writable: true
  }), $__1), {});
}();
function createStringIterator(string) {
  var s = String(string);
  var iterator = Object.create(StringIterator.prototype);
  iterator[iteratedString] = s;
  iterator[stringIteratorNextIndex] = 0;
  return iterator;
}
Object.defineProperties(module.exports, {
  createStringIterator: {get: function() {
      return createStringIterator;
    }},
  __esModule: {value: true}
});
