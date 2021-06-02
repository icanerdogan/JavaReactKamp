"use strict";
var $__0 = Object,
    getOwnPropertyDescriptor = $__0.getOwnPropertyDescriptor,
    getPrototypeOf = $__0.getPrototypeOf;
function superDescriptor(homeObject, name) {
  var proto = getPrototypeOf(homeObject);
  do {
    var result = getOwnPropertyDescriptor(proto, name);
    if (result)
      return result;
    proto = getPrototypeOf(proto);
  } while (proto);
  return undefined;
}
var $__default = superDescriptor;
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
