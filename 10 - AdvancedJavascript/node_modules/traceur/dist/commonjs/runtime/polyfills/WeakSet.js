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
    setFrozen = $__6.setFrozen;
var $__7 = ($__utils_46_js__ = require("./utils.js"), $__utils_46_js__ && $__utils_46_js__.__esModule && $__utils_46_js__ || {default: $__utils_46_js__}),
    isObject = $__7.isObject,
    registerPolyfill = $__7.registerPolyfill;
var hasNativeSymbol = ($___46__46__47_has_45_native_45_symbols_46_js__ = require("../has-native-symbols.js"), $___46__46__47_has_45_native_45_symbols_46_js__ && $___46__46__47_has_45_native_45_symbols_46_js__.__esModule && $___46__46__47_has_45_native_45_symbols_46_js__ || {default: $___46__46__47_has_45_native_45_symbols_46_js__}).default;
var $__2 = Object,
    defineProperty = $__2.defineProperty,
    isExtensible = $__2.isExtensible;
var $TypeError = TypeError;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var WeakSet = function() {
  function WeakSet() {
    this.name_ = createPrivateSymbol();
    this.frozenData_ = [];
  }
  return ($traceurRuntime.createClass)(WeakSet, {
    add: function(value) {
      if (!isObject(value))
        throw new $TypeError('value must be an object');
      if (!isExtensible(value)) {
        setFrozen(this.frozenData_, value, value);
      } else {
        setPrivate(value, this.name_, true);
      }
      return this;
    },
    delete: function(value) {
      if (!isObject(value))
        return false;
      if (!isExtensible(value)) {
        return deleteFrozen(this.frozenData_, value);
      }
      return deletePrivate(value, this.name_);
    },
    has: function(value) {
      if (!isObject(value))
        return false;
      if (!isExtensible(value)) {
        return getFrozen(this.frozenData_, value) === value;
      }
      return hasPrivate(value, this.name_);
    }
  }, {});
}();
function needsPolyfill(global) {
  var $__4 = global,
      WeakSet = $__4.WeakSet,
      Symbol = $__4.Symbol;
  if (!WeakSet || !hasNativeSymbol()) {
    return true;
  }
  try {
    var o = {};
    var wm = new WeakSet([[o]]);
    return !wm.has(o);
  } catch (e) {
    return false;
  }
}
function polyfillWeakSet(global) {
  if (needsPolyfill(global)) {
    global.WeakSet = WeakSet;
  }
}
registerPolyfill(polyfillWeakSet);
Object.defineProperties(module.exports, {
  WeakSet: {get: function() {
      return WeakSet;
    }},
  polyfillWeakSet: {get: function() {
      return polyfillWeakSet;
    }},
  __esModule: {value: true}
});
