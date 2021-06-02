"use strict";
function prependStatements(statements) {
  var $__1;
  for (var statementsToPrepend = [],
      $__0 = 1; $__0 < arguments.length; $__0++)
    statementsToPrepend[$__0 - 1] = arguments[$__0];
  if (!statements.length)
    return statementsToPrepend;
  if (!statementsToPrepend.length)
    return statements;
  var transformed = [];
  var inProlog = true;
  statements.forEach(function(statement) {
    var $__1;
    if (inProlog && !statement.isDirectivePrologue()) {
      ($__1 = transformed).push.apply($__1, $traceurRuntime.spread(statementsToPrepend));
      inProlog = false;
    }
    transformed.push(statement);
  });
  if (inProlog) {
    ($__1 = transformed).push.apply($__1, $traceurRuntime.spread(statementsToPrepend));
  }
  return transformed;
}
Object.defineProperties(module.exports, {
  prependStatements: {get: function() {
      return prependStatements;
    }},
  __esModule: {value: true}
});
