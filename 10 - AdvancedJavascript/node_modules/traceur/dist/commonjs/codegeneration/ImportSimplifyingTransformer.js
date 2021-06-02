"use strict";
var $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__,
    $__ParseTreeTransformer_46_js__,
    $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__,
    $__ParseTreeFactory_46_js__;
var $__5 = ($___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ = require("../syntax/trees/ParseTrees.js"), $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__}),
    AnonBlock = $__5.AnonBlock,
    ImportDeclaration = $__5.ImportDeclaration,
    ImportSpecifier = $__5.ImportSpecifier,
    ImportSpecifierSet = $__5.ImportSpecifierSet,
    Module = $__5.Module;
var ParseTreeTransformer = ($__ParseTreeTransformer_46_js__ = require("./ParseTreeTransformer.js"), $__ParseTreeTransformer_46_js__ && $__ParseTreeTransformer_46_js__.__esModule && $__ParseTreeTransformer_46_js__ || {default: $__ParseTreeTransformer_46_js__}).ParseTreeTransformer;
var $__7 = ($___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ = require("../syntax/trees/ParseTreeType.js"), $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__}),
    ANON_BLOCK = $__7.ANON_BLOCK,
    IMPORT_CLAUSE_PAIR = $__7.IMPORT_CLAUSE_PAIR,
    IMPORT_DECLARATION = $__7.IMPORT_DECLARATION,
    IMPORT_SPECIFIER_SET = $__7.IMPORT_SPECIFIER_SET,
    IMPORTED_BINDING = $__7.IMPORTED_BINDING,
    NAME_SPACE_IMPORT = $__7.NAME_SPACE_IMPORT;
var createIdentifierToken = ($__ParseTreeFactory_46_js__ = require("./ParseTreeFactory.js"), $__ParseTreeFactory_46_js__ && $__ParseTreeFactory_46_js__.__esModule && $__ParseTreeFactory_46_js__ || {default: $__ParseTreeFactory_46_js__}).createIdentifierToken;
var ImportSimplifyingTransformer = function($__super) {
  function ImportSimplifyingTransformer() {
    $traceurRuntime.superConstructor(ImportSimplifyingTransformer).apply(this, arguments);
  }
  return ($traceurRuntime.createClass)(ImportSimplifyingTransformer, {
    transformModule: function(tree) {
      var $__2;
      var statements = [];
      for (var i = 0; i < tree.scriptItemList.length; i++) {
        var item = tree.scriptItemList[i];
        switch (item.type) {
          case IMPORT_DECLARATION:
            {
              var transformed = this.transformAny(item);
              if (transformed.type === ANON_BLOCK) {
                ($__2 = statements).push.apply($__2, $traceurRuntime.spread(transformed.statements));
              } else {
                statements.push(transformed);
              }
              break;
            }
          default:
            statements.push(item);
        }
      }
      return new Module(tree.location, statements, tree.moduleName);
    },
    transformImportDeclaration: function(tree) {
      var importClause = tree.importClause;
      if (importClause === null) {
        var set = new ImportSpecifierSet(null, []);
        return new ImportDeclaration(tree.location, set, tree.moduleSpecifier);
      }
      if (importClause.type === NAME_SPACE_IMPORT) {
        return tree;
      }
      if (importClause.type === IMPORTED_BINDING) {
        var specifier = this.transformAny(importClause);
        var set$__3 = new ImportSpecifierSet(null, [specifier]);
        return new ImportDeclaration(tree.location, set$__3, tree.moduleSpecifier);
      }
      if (importClause.type === IMPORT_CLAUSE_PAIR) {
        var $__1 = importClause,
            first = $__1.first,
            second = $__1.second;
        if (second.type === IMPORT_SPECIFIER_SET) {
          var defaultSpecifier = this.transformAny(first);
          var specifiers = $traceurRuntime.spread([defaultSpecifier], second.specifiers);
          var set$__4 = new ImportSpecifierSet(first.location, specifiers);
          return new ImportDeclaration(tree.location, set$__4, tree.moduleSpecifier);
        }
        var firstImport = new ImportDeclaration(tree.location, first, tree.moduleSpecifier);
        firstImport = this.transformAny(firstImport);
        var secondImport = new ImportDeclaration(tree.location, second, tree.moduleSpecifier);
        return new AnonBlock(null, [firstImport, secondImport]);
      }
      return $traceurRuntime.superGet(this, ImportSimplifyingTransformer.prototype, "transformImportDeclaration").call(this, tree);
    },
    transformImportSpecifier: function(tree) {
      return tree;
    },
    transformImportedBinding: function(tree) {
      var name = createIdentifierToken('default');
      return new ImportSpecifier(tree.location, tree, name);
    }
  }, {}, $__super);
}(ParseTreeTransformer);
Object.defineProperties(module.exports, {
  ImportSimplifyingTransformer: {get: function() {
      return ImportSimplifyingTransformer;
    }},
  __esModule: {value: true}
});
