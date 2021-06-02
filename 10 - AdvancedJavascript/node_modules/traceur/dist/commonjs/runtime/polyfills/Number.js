"use strict";
var $__utils_46_js__;
var $__1 = ($__utils_46_js__ = require("./utils.js"), $__utils_46_js__ && $__utils_46_js__.__esModule && $__utils_46_js__ || {default: $__utils_46_js__}),
    isNumber = $__1.isNumber,
    maybeAddConsts = $__1.maybeAddConsts,
    maybeAddFunctions = $__1.maybeAddFunctions,
    registerPolyfill = $__1.registerPolyfill,
    toInteger = $__1.toInteger;
var $abs = Math.abs;
var $isFinite = isFinite;
var $isNaN = isNaN;
var MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;
var MIN_SAFE_INTEGER = -Math.pow(2, 53) + 1;
var EPSILON = Math.pow(2, -52);
function NumberIsFinite(number) {
  return isNumber(number) && $isFinite(number);
}
function isInteger(number) {
  return NumberIsFinite(number) && toInteger(number) === number;
}
function NumberIsNaN(number) {
  return isNumber(number) && $isNaN(number);
}
function isSafeInteger(number) {
  if (NumberIsFinite(number)) {
    var integral = toInteger(number);
    if (integral === number)
      return $abs(integral) <= MAX_SAFE_INTEGER;
  }
  return false;
}
function polyfillNumber(global) {
  var Number = global.Number;
  maybeAddConsts(Number, ['MAX_SAFE_INTEGER', MAX_SAFE_INTEGER, 'MIN_SAFE_INTEGER', MIN_SAFE_INTEGER, 'EPSILON', EPSILON]);
  maybeAddFunctions(Number, ['isFinite', NumberIsFinite, 'isInteger', isInteger, 'isNaN', NumberIsNaN, 'isSafeInteger', isSafeInteger]);
}
registerPolyfill(polyfillNumber);
Object.defineProperties(module.exports, {
  MAX_SAFE_INTEGER: {get: function() {
      return MAX_SAFE_INTEGER;
    }},
  MIN_SAFE_INTEGER: {get: function() {
      return MIN_SAFE_INTEGER;
    }},
  EPSILON: {get: function() {
      return EPSILON;
    }},
  isFinite: {get: function() {
      return NumberIsFinite;
    }},
  isInteger: {get: function() {
      return isInteger;
    }},
  isNaN: {get: function() {
      return NumberIsNaN;
    }},
  isSafeInteger: {get: function() {
      return isSafeInteger;
    }},
  polyfillNumber: {get: function() {
      return polyfillNumber;
    }},
  __esModule: {value: true}
});
