"use strict";
var $___46__46__47_syntax_47_PredefinedName_46_js__,
    $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__,
    $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__,
    $__TempVarTransformer_46_js__,
    $__ParseTreeFactory_46_js__,
    $__PlaceholderParser_46_js__,
    $__PlaceholderParser_46_js__,
    $__PrependStatements_46_js__,
    $___46__46__47_staticsemantics_47_PropName_46_js__,
    $__MemberVariableConstructorTransformer_46_js__;
var CONSTRUCTOR = ($___46__46__47_syntax_47_PredefinedName_46_js__ = require("../syntax/PredefinedName.js"), $___46__46__47_syntax_47_PredefinedName_46_js__ && $___46__46__47_syntax_47_PredefinedName_46_js__.__esModule && $___46__46__47_syntax_47_PredefinedName_46_js__ || {default: $___46__46__47_syntax_47_PredefinedName_46_js__}).CONSTRUCTOR;
var $__5 = ($___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ = require("../syntax/trees/ParseTrees.js"), $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__}),
    AnonBlock = $__5.AnonBlock,
    ClassDeclaration = $__5.ClassDeclaration,
    ClassExpression = $__5.ClassExpression,
    FormalParameterList = $__5.FormalParameterList,
    IdentifierExpression = $__5.IdentifierExpression,
    Method = $__5.Method,
    ReturnStatement = $__5.ReturnStatement;
var $__6 = ($___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ = require("../syntax/trees/ParseTreeType.js"), $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__}),
    GET_ACCESSOR = $__6.GET_ACCESSOR,
    METHOD = $__6.METHOD,
    PROPERTY_VARIABLE_DECLARATION = $__6.PROPERTY_VARIABLE_DECLARATION,
    SET_ACCESSOR = $__6.SET_ACCESSOR;
var TempVarTransformer = ($__TempVarTransformer_46_js__ = require("./TempVarTransformer.js"), $__TempVarTransformer_46_js__ && $__TempVarTransformer_46_js__.__esModule && $__TempVarTransformer_46_js__ || {default: $__TempVarTransformer_46_js__}).TempVarTransformer;
var $__8 = ($__ParseTreeFactory_46_js__ = require("./ParseTreeFactory.js"), $__ParseTreeFactory_46_js__ && $__ParseTreeFactory_46_js__.__esModule && $__ParseTreeFactory_46_js__ || {default: $__ParseTreeFactory_46_js__}),
    createCommaExpression = $__8.createCommaExpression,
    createFunctionBody = $__8.createFunctionBody,
    createIdentifierToken = $__8.createIdentifierToken,
    createImmediatelyInvokedFunctionExpression = $__8.createImmediatelyInvokedFunctionExpression,
    createLiteralPropertyName = $__8.createLiteralPropertyName,
    createRestParameter = $__8.createRestParameter;
var $__9 = ($__PlaceholderParser_46_js__ = require("./PlaceholderParser.js"), $__PlaceholderParser_46_js__ && $__PlaceholderParser_46_js__.__esModule && $__PlaceholderParser_46_js__ || {default: $__PlaceholderParser_46_js__}),
    parsePropertyDefinition = $__9.parsePropertyDefinition,
    parseStatement = $__9.parseStatement;
var parseExpression = ($__PlaceholderParser_46_js__ = require("./PlaceholderParser.js"), $__PlaceholderParser_46_js__ && $__PlaceholderParser_46_js__.__esModule && $__PlaceholderParser_46_js__ || {default: $__PlaceholderParser_46_js__}).parseExpression;
var prependStatements = ($__PrependStatements_46_js__ = require("./PrependStatements.js"), $__PrependStatements_46_js__ && $__PrependStatements_46_js__.__esModule && $__PrependStatements_46_js__ || {default: $__PrependStatements_46_js__}).prependStatements;
var propName = ($___46__46__47_staticsemantics_47_PropName_46_js__ = require("../staticsemantics/PropName.js"), $___46__46__47_staticsemantics_47_PropName_46_js__ && $___46__46__47_staticsemantics_47_PropName_46_js__.__esModule && $___46__46__47_staticsemantics_47_PropName_46_js__ || {default: $___46__46__47_staticsemantics_47_PropName_46_js__}).propName;
var transformConstructor = ($__MemberVariableConstructorTransformer_46_js__ = require("./MemberVariableConstructorTransformer.js"), $__MemberVariableConstructorTransformer_46_js__ && $__MemberVariableConstructorTransformer_46_js__.__esModule && $__MemberVariableConstructorTransformer_46_js__ || {default: $__MemberVariableConstructorTransformer_46_js__}).transformConstructor;
var MemberVariableTransformer = function($__super) {
  function MemberVariableTransformer() {
    $traceurRuntime.superConstructor(MemberVariableTransformer).apply(this, arguments);
  }
  return ($traceurRuntime.createClass)(MemberVariableTransformer, {
    transformClassElements_: function(tree) {
      var $__2 = this;
      var elements = [];
      var initInstanceVars = [],
          initStaticVars = [];
      var constructor;
      var constructorIndex = 0;
      tree.elements.forEach(function(tree) {
        var initVars;
        if (tree.isStatic) {
          initVars = initStaticVars;
        } else {
          initVars = initInstanceVars;
        }
        switch (tree.type) {
          case GET_ACCESSOR:
          case SET_ACCESSOR:
            elements.push($__2.transformAny(tree));
            break;
          case METHOD:
            if (!tree.isStatic && propName(tree) === CONSTRUCTOR) {
              constructor = tree;
              constructorIndex = elements.length;
            } else {
              elements.push($__2.transformAny(tree));
            }
            break;
          case PROPERTY_VARIABLE_DECLARATION:
            tree = $__2.transformAny(tree);
            if (tree.initializer !== null) {
              initVars.push(tree);
            }
            break;
          default:
            throw new Error(("Unexpected class element: " + tree.type));
        }
      });
      if (initInstanceVars.length > 0) {
        var initExpression = getInstanceInitExpression(initInstanceVars);
        if (!constructor) {
          constructor = this.getDefaultConstructor_(tree);
        }
        constructor = transformConstructor(constructor, initExpression, tree.superClass);
      }
      if (constructor) {
        elements.splice(constructorIndex, 0, constructor);
      }
      return {
        elements: elements,
        initStaticVars: initStaticVars
      };
    },
    transformClassDeclaration: function(tree) {
      var $__3 = this.transformClassElements_(tree),
          elements = $__3.elements,
          initStaticVars = $__3.initStaticVars;
      var superClass = this.transformAny(tree.superClass);
      var classDecl = new ClassDeclaration(tree.location, tree.name, superClass, elements, tree.annotations, tree.typeParameters);
      if (initStaticVars.length === 0) {
        return classDecl;
      }
      var statements = createStaticInitializerStatements(tree.name.identifierToken, initStaticVars);
      statements = prependStatements(statements, classDecl);
      return new AnonBlock(null, statements);
    },
    transformClassExpression: function(tree) {
      var $__3 = this.transformClassElements_(tree),
          elements = $__3.elements,
          initStaticVars = $__3.initStaticVars;
      var superClass = this.transformAny(tree.superClass);
      var classExpression = new ClassExpression(tree.location, tree.name, superClass, elements, tree.annotations, tree.typeParameters);
      if (initStaticVars.length === 0) {
        return classExpression;
      }
      this.pushTempScope();
      var id = this.getTempIdentifier();
      var idToken = createIdentifierToken(id);
      var idExpression = new IdentifierExpression(idToken.location, idToken);
      var statements = $traceurRuntime.spread([parseStatement($traceurRuntime.getTemplateObject(["let ", " = ", ""]), id, classExpression)], createStaticInitializerStatements(idToken, initStaticVars), [new ReturnStatement(null, idExpression)]);
      var body = createFunctionBody(statements);
      this.popTempScope();
      return createImmediatelyInvokedFunctionExpression(body);
    },
    getDefaultConstructor_: function(tree) {
      if (tree.superClass) {
        var param = createRestParameter(createIdentifierToken('args'));
        var paramList = new FormalParameterList(null, [param]);
        var body = createFunctionBody([parseStatement($traceurRuntime.getTemplateObject(["super(...args)"]))]);
        var name = createLiteralPropertyName(CONSTRUCTOR);
        return new Method(tree.location, false, null, name, paramList, null, [], body, null);
      }
      return parsePropertyDefinition($traceurRuntime.getTemplateObject(["constructor() {}"]));
    }
  }, {}, $__super);
}(TempVarTransformer);
function createStaticInitializerStatements(idToken, initStaticMemberVars) {
  var className = new IdentifierExpression(idToken.location, idToken);
  return initStaticMemberVars.map(function(mv) {
    var propName = mv.name.literalToken.value;
    return parseStatement($traceurRuntime.getTemplateObject(["Object.defineProperty(", ", ", ", {enumerable: true,\n        configurable: true, value: ", ", writable: true})"]), className, propName, mv.initializer);
  });
}
function getInstanceInitExpression(initInstanceVars) {
  var expressions = initInstanceVars.map(function(mv) {
    var name = mv.name.literalToken;
    return parseExpression($traceurRuntime.getTemplateObject(["this.", " = ", ""]), name, mv.initializer);
  });
  return createCommaExpression(expressions);
}
Object.defineProperties(module.exports, {
  MemberVariableTransformer: {get: function() {
      return MemberVariableTransformer;
    }},
  __esModule: {value: true}
});
