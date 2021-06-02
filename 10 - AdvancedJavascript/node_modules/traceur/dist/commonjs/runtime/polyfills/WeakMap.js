"use strict";
var $___46__46__47_private_46_js__,
    $___46__46__47_frozen_45_data_46_js__,
    $__utils_46_js__,
    $___46__46__47_has_45_native_45_symbols_46_js__;
var $__5 = ($___46__46__47_private_46_js__ = require("../private.js"), $___46__46__47_private_46_js__ && $___46__46__47_private_46_js__.__esModule && $___46__46__47_private_46_js__ || {default: $___46__46__47_private_46_js__}),
    createPrivateSymbol = $__5.createPrivateSymbol,
    deletePrivate = $__5.deletePrivate,
    getPrivate = $__5.getPrivate,
    hasPrivate = $__5.hasPrivate,
    setPrivate = $__5.setPrivate;
var $__6 = ($___46__46__47_frozen_45_data_46_js__ = require("../frozen-data.js"), $___46__46__47_frozen_45_data_46_js__ && $___46__46__47_frozen_45_data_46_js__.__esModule && $___46__46__47_frozen_45_data_46_js__ || {default: $___46__46__47_frozen_45_data_46_js__}),
    deleteFrozen = $__6.deleteFrozen,
    getFrozen = $__6.getFrozen,
    hasFrozen = $__6.hasFrozen,
    setFrozen = $__6.setFrozen;
var $__7 = ($__utils_46_js__ = require("./utils.js"), $__utils_46_js__ && $__utils_46_js__.__esModule && $__utils_46_js__ || {default: $__utils_46_js__}),
    isObject = $__7.isObject,
    registerPolyfill = $__7.registerPolyfill;
var hasNativeSymbol = ($___46__46__47_has_45_native_45_symbols_46_js__ = require("../has-native-symbols.js"), $___46__46__47_has_45_native_45_symbols_46_js__ && $___46__46__47_has_45_native_45_symbols_46_js__.__esModule && $___46__46__47_has_45_native_45_symbols_46_js__ || {default: $___46__46__47_has_45_native_45_symbols_46_js__}).default;
var $__2 = Object,
    defineProperty = $__2.defineProperty,
    getOwnPropertyDescriptor = $__2.getOwnPropertyDescriptor,
    isExtensible = $__2.isExtensible;
var $TypeError = TypeError;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var sentinel = {};
var WeakMap = function() {
  function WeakMap() {
    this.name_ = createPrivateSymbol();
    this.frozenData_ = [];
  }
  return ($traceurRuntime.createClass)(WeakMap, {
    set: function(key, value) {
      if (!isObject(key))
        throw new $TypeError('key must be an object');
      if (!isExtensible(key)) {
        setFrozen(this.frozenData_, key, value);
      } else {
        setPrivate(key, this.name_, value);
      }
      return this;
    },
    get: function(key) {
      if (!isObject(key))
        return undefined;
      if (!isExtensible(key)) {
        return getFrozen(this.frozenData_, key);
      }
      return getPrivate(key, this.name_);
    },
    delete: function(key) {
      if (!isObject(key))
        return false;
      if (!isExtensible(key)) {
        return deleteFrozen(this.frozenData_, key);
      }
      return deletePrivate(key, this.name_);
    },
    has: function(key) {
      if (!isObject(key))
        return false;
      if (!isExtensible(key)) {
        return hasFrozen(this.frozenData_, key);
      }
      return hasPrivate(key, this.name_);
    }
  }, {});
}();
function needsPolyfill(global) {
  var $__4 = global,
      WeakMap = $__4.WeakMap,
      Symbol = $__4.Symbol;
  if (!WeakMap || !hasNativeSymbol()) {
    return true;
  }
  try {
    var o = {};
    var wm = new WeakMap([[o, false]]);
    return wm.get(o);
  } catch (e) {
    return false;
  }
}
function polyfillWeakMap(global) {
  if (needsPolyfill(global)) {
    global.WeakMap = WeakMap;
  }
}
registerPolyfill(polyfillWeakMap);
Object.defineProperties(module.exports, {
  WeakMap: {get: function() {
      return WeakMap;
    }},
  polyfillWeakMap: {get: function() {
      return polyfillWeakMap;
    }},
  __esModule: {value: true}
});
