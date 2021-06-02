"use strict";
var $___46__46__47_syntax_47_PredefinedName_46_js__,
    $__FindArguments_46_js__,
    $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__,
    $__ParenTrait_46_js__,
    $__PlaceholderParser_46_js__,
    $__TempVarTransformer_46_js__,
    $__ParseTreeFactory_46_js__;
var ARGUMENTS = ($___46__46__47_syntax_47_PredefinedName_46_js__ = require("../syntax/PredefinedName.js"), $___46__46__47_syntax_47_PredefinedName_46_js__ && $___46__46__47_syntax_47_PredefinedName_46_js__.__esModule && $___46__46__47_syntax_47_PredefinedName_46_js__ || {default: $___46__46__47_syntax_47_PredefinedName_46_js__}).ARGUMENTS;
var FindArguments = ($__FindArguments_46_js__ = require("./FindArguments.js"), $__FindArguments_46_js__ && $__FindArguments_46_js__.__esModule && $__FindArguments_46_js__ || {default: $__FindArguments_46_js__}).default;
var $__3 = ($___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ = require("../syntax/trees/ParseTrees.js"), $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__}),
    FunctionBody = $__3.FunctionBody,
    FunctionDeclaration = $__3.FunctionDeclaration,
    FunctionExpression = $__3.FunctionExpression,
    Method = $__3.Method,
    YieldExpression = $__3.YieldExpression;
var ParenTrait = ($__ParenTrait_46_js__ = require("./ParenTrait.js"), $__ParenTrait_46_js__ && $__ParenTrait_46_js__.__esModule && $__ParenTrait_46_js__ || {default: $__ParenTrait_46_js__}).ParenTrait;
var parseStatement = ($__PlaceholderParser_46_js__ = require("./PlaceholderParser.js"), $__PlaceholderParser_46_js__ && $__PlaceholderParser_46_js__.__esModule && $__PlaceholderParser_46_js__ || {default: $__PlaceholderParser_46_js__}).parseStatement;
var TempVarTransformer = ($__TempVarTransformer_46_js__ = require("./TempVarTransformer.js"), $__TempVarTransformer_46_js__ && $__TempVarTransformer_46_js__.__esModule && $__TempVarTransformer_46_js__ || {default: $__TempVarTransformer_46_js__}).TempVarTransformer;
var $__7 = ($__ParseTreeFactory_46_js__ = require("./ParseTreeFactory.js"), $__ParseTreeFactory_46_js__ && $__ParseTreeFactory_46_js__.__esModule && $__ParseTreeFactory_46_js__ || {default: $__ParseTreeFactory_46_js__}),
    createIdentifierExpression = $__7.createIdentifierExpression,
    createNullLiteral = $__7.createNullLiteral;
var AsyncToGeneratorTransformer = function($__super) {
  function AsyncToGeneratorTransformer(identifierGenerator, reporter, options) {
    $traceurRuntime.superConstructor(AsyncToGeneratorTransformer).call(this, identifierGenerator, reporter, options);
    this.inAsyncFunction_ = false;
  }
  return ($traceurRuntime.createClass)(AsyncToGeneratorTransformer, {
    transformFunctionDeclaration: function(tree) {
      if (tree.isAsyncFunction()) {
        return this.transformFunctionShared_(tree, FunctionDeclaration);
      }
      return $traceurRuntime.superGet(this, AsyncToGeneratorTransformer.prototype, "transformFunctionDeclaration").call(this, tree);
    },
    transformFunctionExpression: function(tree) {
      if (tree.isAsyncFunction()) {
        return this.transformFunctionShared_(tree, FunctionExpression);
      }
      return $traceurRuntime.superGet(this, AsyncToGeneratorTransformer.prototype, "transformFunctionExpression").call(this, tree);
    },
    transformFunctionShared_: function(tree, ctor) {
      var parameterList = this.transformAny(tree.parameterList);
      var typeAnnotation = this.transformAny(tree.typeAnnotation);
      var annotations = this.transformList(tree.annotations);
      var body = this.transformAsyncBody_(tree.body);
      return new ctor(tree.location, tree.name, null, parameterList, typeAnnotation, annotations, body);
    },
    transformAsyncBody_: function(body) {
      var inAsyncFunction = this.inAsyncFunction_;
      this.inAsyncFunction_ = true;
      body = this.transformFunctionBody(body);
      body = wrapBodyInSpawn(body);
      this.inAsyncFunction_ = inAsyncFunction;
      return body;
    },
    transformMethod: function(tree) {
      if (tree.isAsyncFunction()) {
        var name = this.transformAny(tree.name);
        var parameterList = this.transformAny(tree.parameterList);
        var typeAnnotation = this.transformAny(tree.typeAnnotation);
        var annotations = this.transformList(tree.annotations);
        var body = this.transformAsyncBody_(tree.body);
        return new Method(tree.location, tree.isStatic, null, name, parameterList, typeAnnotation, annotations, body, tree.debugName);
      }
      return $traceurRuntime.superGet(this, AsyncToGeneratorTransformer.prototype, "transformMethod").call(this, tree);
    },
    transformAwaitExpression: function(tree) {
      if (this.inAsyncFunction_) {
        var expression = this.transformAny(tree.expression);
        return new YieldExpression(tree.location, expression, false);
      }
      return $traceurRuntime.superGet(this, AsyncToGeneratorTransformer.prototype, "transformAwaitExpression").call(this, tree);
    }
  }, {}, $__super);
}(ParenTrait(TempVarTransformer));
function wrapBodyInSpawn(body) {
  var visitor = new FindArguments();
  visitor.visitAny(body);
  var argExpr = visitor.found ? createIdentifierExpression(ARGUMENTS) : createNullLiteral();
  var statement = parseStatement($traceurRuntime.getTemplateObject(["return $traceurRuntime.spawn(this, ", ", function*() { ", " });"]), argExpr, body);
  return new FunctionBody(body.location, [statement]);
}
Object.defineProperties(module.exports, {
  AsyncToGeneratorTransformer: {get: function() {
      return AsyncToGeneratorTransformer;
    }},
  __esModule: {value: true}
});
