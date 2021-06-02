"use strict";
function iteratorToArray(iter) {
  var rv = [];
  var i = 0;
  var tmp;
  while (!(tmp = iter.next()).done) {
    rv[i++] = tmp.value;
  }
  return rv;
}
$traceurRuntime.iteratorToArray = iteratorToArray;
