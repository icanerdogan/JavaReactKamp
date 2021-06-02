"use strict";
var $__InternalLoader_46_js__;
var InternalLoader = ($__InternalLoader_46_js__ = require("./InternalLoader.js"), $__InternalLoader_46_js__ && $__InternalLoader_46_js__.__esModule && $__InternalLoader_46_js__ || {default: $__InternalLoader_46_js__}).InternalLoader;
function throwAbstractMethod() {
  throw new Error('Unimplemented Loader function, see extended class');
}
var Loader = function() {
  function Loader(loaderCompiler) {
    this.internalLoader_ = new InternalLoader(this, loaderCompiler);
    this.loaderCompiler_ = loaderCompiler;
  }
  return ($traceurRuntime.createClass)(Loader, {
    import: function(name) {
      var $__3 = arguments[1] !== (void 0) ? arguments[1] : {},
          referrerName = $__3.referrerName,
          address = $__3.address,
          metadata = $__3.metadata;
      var $__2 = this;
      return this.internalLoader_.load(name, referrerName, address, metadata).then(function(codeUnit) {
        return $__2.get(codeUnit.normalizedName);
      });
    },
    module: function(source) {
      var $__3 = arguments[1] !== (void 0) ? arguments[1] : {},
          referrerName = $__3.referrerName,
          address = $__3.address,
          metadata = $__3.metadata;
      return this.internalLoader_.module(source, referrerName, address, metadata);
    },
    define: function(normalizedName, source) {
      var $__3 = arguments[2] !== (void 0) ? arguments[2] : {},
          address = $__3.address,
          metadata = $__3.metadata;
      return this.internalLoader_.define(normalizedName, source, address, metadata);
    },
    get: function(normalizedName) {
      throwAbstractMethod();
    },
    set: function(normalizedName, module) {
      throwAbstractMethod();
    },
    normalize: function(name, referrerName, referrerAddress) {
      throwAbstractMethod();
    },
    locate: function(load) {
      throwAbstractMethod();
    },
    fetch: function(load) {
      throwAbstractMethod();
    },
    translate: function(load) {
      throwAbstractMethod();
    },
    instantiate: function(load) {
      throwAbstractMethod();
    }
  }, {});
}();
Object.defineProperties(module.exports, {
  throwAbstractMethod: {get: function() {
      return throwAbstractMethod;
    }},
  Loader: {get: function() {
      return Loader;
    }},
  LoaderCompiler: {get: function() {
      return LoaderCompiler;
    }},
  __esModule: {value: true}
});
