"use strict";
function spawn(self, args, gen) {
  return new Promise(function(resolve, reject) {
    function fulfill(v) {
      try {
        step(gen.next(v));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(v) {
      try {
        step(gen.throw(v));
      } catch (e) {
        reject(e);
      }
    }
    function step(res) {
      if (res.done) {
        resolve(res.value);
      } else {
        Promise.resolve(res.value).then(fulfill, rejected);
      }
    }
    step((gen = gen.apply(self, args)).next());
  });
}
var $__default = spawn;
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
