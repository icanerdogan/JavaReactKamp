"use strict";
var $__ParseTreeTransformer_46_js__,
    $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__;
var ParseTreeTransformer = ($__ParseTreeTransformer_46_js__ = require("./ParseTreeTransformer.js"), $__ParseTreeTransformer_46_js__ && $__ParseTreeTransformer_46_js__.__esModule && $__ParseTreeTransformer_46_js__ || {default: $__ParseTreeTransformer_46_js__}).ParseTreeTransformer;
var $__2 = ($___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ = require("../syntax/trees/ParseTrees.js"), $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__}),
    BindingIdentifier = $__2.BindingIdentifier,
    BreakStatement = $__2.BreakStatement,
    ContinueStatement = $__2.ContinueStatement,
    DebuggerStatement = $__2.DebuggerStatement,
    EmptyStatement = $__2.EmptyStatement,
    ExportSpecifier = $__2.ExportSpecifier,
    ExportStar = $__2.ExportStar,
    IdentifierExpression = $__2.IdentifierExpression,
    LiteralExpression = $__2.LiteralExpression,
    ModuleSpecifier = $__2.ModuleSpecifier,
    PredefinedType = $__2.PredefinedType,
    PropertyNameShorthand = $__2.PropertyNameShorthand,
    TemplateLiteralPortion = $__2.TemplateLiteralPortion,
    SuperExpression = $__2.SuperExpression,
    ThisExpression = $__2.ThisExpression;
var CloneTreeTransformer = function($__super) {
  function CloneTreeTransformer() {
    $traceurRuntime.superConstructor(CloneTreeTransformer).apply(this, arguments);
  }
  return ($traceurRuntime.createClass)(CloneTreeTransformer, {
    transformBindingIdentifier: function(tree) {
      return new BindingIdentifier(tree.location, tree.identifierToken);
    },
    transformBreakStatement: function(tree) {
      return new BreakStatement(tree.location, tree.name);
    },
    transformContinueStatement: function(tree) {
      return new ContinueStatement(tree.location, tree.name);
    },
    transformDebuggerStatement: function(tree) {
      return new DebuggerStatement(tree.location);
    },
    transformEmptyStatement: function(tree) {
      return new EmptyStatement(tree.location);
    },
    transformExportSpecifier: function(tree) {
      return new ExportSpecifier(tree.location, tree.lhs, tree.rhs);
    },
    transformExportStar: function(tree) {
      return new ExportStar(tree.location);
    },
    transformIdentifierExpression: function(tree) {
      return new IdentifierExpression(tree.location, tree.identifierToken);
    },
    transformList: function(list) {
      if (!list) {
        return null;
      } else if (list.length === 0) {
        return [];
      } else {
        return $traceurRuntime.superGet(this, CloneTreeTransformer.prototype, "transformList").call(this, list);
      }
    },
    transformLiteralExpression: function(tree) {
      return new LiteralExpression(tree.location, tree.literalToken);
    },
    transformModuleSpecifier: function(tree) {
      return new ModuleSpecifier(tree.location, tree.token);
    },
    transformPredefinedType: function(tree) {
      return new PredefinedType(tree.location, tree.typeToken);
    },
    transformPropertyNameShorthand: function(tree) {
      return new PropertyNameShorthand(tree.location, tree.name);
    },
    transformTemplateLiteralPortion: function(tree) {
      return new TemplateLiteralPortion(tree.location, tree.value);
    },
    transformSuperExpression: function(tree) {
      return new SuperExpression(tree.location);
    },
    transformThisExpression: function(tree) {
      return new ThisExpression(tree.location);
    }
  }, {}, $__super);
}(ParseTreeTransformer);
CloneTreeTransformer.cloneTree = function(tree) {
  return new CloneTreeTransformer().transformAny(tree);
};
Object.defineProperties(module.exports, {
  CloneTreeTransformer: {get: function() {
      return CloneTreeTransformer;
    }},
  __esModule: {value: true}
});
