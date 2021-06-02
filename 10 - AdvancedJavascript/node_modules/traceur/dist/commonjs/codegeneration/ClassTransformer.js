"use strict";
var $___46__46__47_syntax_47_PredefinedName_46_js__,
    $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__,
    $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__,
    $__TempVarTransformer_46_js__,
    $___46__46__47_syntax_47_TokenType_46_js__,
    $__MakeStrictTransformer_46_js__,
    $__ParenTrait_46_js__,
    $__ParseTreeFactory_46_js__,
    $___46__46__47_semantics_47_util_46_js__,
    $__PlaceholderParser_46_js__;
var CONSTRUCTOR = ($___46__46__47_syntax_47_PredefinedName_46_js__ = require("../syntax/PredefinedName.js"), $___46__46__47_syntax_47_PredefinedName_46_js__ && $___46__46__47_syntax_47_PredefinedName_46_js__.__esModule && $___46__46__47_syntax_47_PredefinedName_46_js__ || {default: $___46__46__47_syntax_47_PredefinedName_46_js__}).CONSTRUCTOR;
var $__3 = ($___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ = require("../syntax/trees/ParseTrees.js"), $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__}),
    AnonBlock = $__3.AnonBlock,
    ClassExpression = $__3.ClassExpression,
    ExportDeclaration = $__3.ExportDeclaration,
    ExportSpecifier = $__3.ExportSpecifier,
    ExportSpecifierSet = $__3.ExportSpecifierSet,
    FunctionDeclaration = $__3.FunctionDeclaration,
    FunctionExpression = $__3.FunctionExpression,
    GetAccessor = $__3.GetAccessor,
    Method = $__3.Method,
    NamedExport = $__3.NamedExport,
    SetAccessor = $__3.SetAccessor;
var $__4 = ($___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ = require("../syntax/trees/ParseTreeType.js"), $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTreeType_46_js__}),
    CLASS_DECLARATION = $__4.CLASS_DECLARATION,
    COMPUTED_PROPERTY_NAME = $__4.COMPUTED_PROPERTY_NAME,
    EXPORT_DEFAULT = $__4.EXPORT_DEFAULT,
    GET_ACCESSOR = $__4.GET_ACCESSOR,
    LITERAL_PROPERTY_NAME = $__4.LITERAL_PROPERTY_NAME,
    METHOD = $__4.METHOD,
    SET_ACCESSOR = $__4.SET_ACCESSOR;
var TempVarTransformer = ($__TempVarTransformer_46_js__ = require("./TempVarTransformer.js"), $__TempVarTransformer_46_js__ && $__TempVarTransformer_46_js__.__esModule && $__TempVarTransformer_46_js__ || {default: $__TempVarTransformer_46_js__}).TempVarTransformer;
var $__6 = ($___46__46__47_syntax_47_TokenType_46_js__ = require("../syntax/TokenType.js"), $___46__46__47_syntax_47_TokenType_46_js__ && $___46__46__47_syntax_47_TokenType_46_js__.__esModule && $___46__46__47_syntax_47_TokenType_46_js__ || {default: $___46__46__47_syntax_47_TokenType_46_js__}),
    CONST = $__6.CONST,
    LET = $__6.LET,
    VAR = $__6.VAR,
    STRING = $__6.STRING;
var MakeStrictTransformer = ($__MakeStrictTransformer_46_js__ = require("./MakeStrictTransformer.js"), $__MakeStrictTransformer_46_js__ && $__MakeStrictTransformer_46_js__.__esModule && $__MakeStrictTransformer_46_js__ || {default: $__MakeStrictTransformer_46_js__}).MakeStrictTransformer;
var ParenTrait = ($__ParenTrait_46_js__ = require("./ParenTrait.js"), $__ParenTrait_46_js__ && $__ParenTrait_46_js__.__esModule && $__ParenTrait_46_js__ || {default: $__ParenTrait_46_js__}).ParenTrait;
var $__9 = ($__ParseTreeFactory_46_js__ = require("./ParseTreeFactory.js"), $__ParseTreeFactory_46_js__ && $__ParseTreeFactory_46_js__.__esModule && $__ParseTreeFactory_46_js__ || {default: $__ParseTreeFactory_46_js__}),
    createBindingIdentifier = $__9.createBindingIdentifier,
    id = $__9.createIdentifierExpression,
    createIdentifierToken = $__9.createIdentifierToken,
    createObjectLiteral = $__9.createObjectLiteral,
    createVariableStatement = $__9.createVariableStatement;
var hasUseStrict = ($___46__46__47_semantics_47_util_46_js__ = require("../semantics/util.js"), $___46__46__47_semantics_47_util_46_js__ && $___46__46__47_semantics_47_util_46_js__.__esModule && $___46__46__47_semantics_47_util_46_js__ || {default: $___46__46__47_semantics_47_util_46_js__}).hasUseStrict;
var $__11 = ($__PlaceholderParser_46_js__ = require("./PlaceholderParser.js"), $__PlaceholderParser_46_js__ && $__PlaceholderParser_46_js__.__esModule && $__PlaceholderParser_46_js__ || {default: $__PlaceholderParser_46_js__}),
    parseExpression = $__11.parseExpression,
    parsePropertyDefinition = $__11.parsePropertyDefinition,
    parseStatement = $__11.parseStatement;
function classCall(func, object, staticObject, superClass) {
  if (superClass) {
    return parseExpression($traceurRuntime.getTemplateObject(["($traceurRuntime.createClass)(", ", ", ", ", ",\n                                       ", ")"]), func, object, staticObject, superClass);
  }
  return parseExpression($traceurRuntime.getTemplateObject(["($traceurRuntime.createClass)(", ", ", ", ", ")"]), func, object, staticObject);
}
function methodNameFromTree(tree) {
  if (tree.type === COMPUTED_PROPERTY_NAME) {
    return '';
  }
  if (tree.literalToken && tree.literalToken.type === STRING) {
    return tree.getStringValue().substr(1, -1);
  }
  return tree.getStringValue();
}
function classMethodDebugName(className, methodName, isStatic) {
  if (isStatic) {
    return createBindingIdentifier('$__' + className + '_' + methodName);
  }
  return createBindingIdentifier('$__' + className + '_prototype_' + methodName);
}
function functionExpressionToDeclaration(tree, name) {
  if (tree.name === null) {
    name = createBindingIdentifier(name);
  } else {
    name = tree.name;
  }
  return new FunctionDeclaration(tree.location, name, tree.functionKind, tree.parameterList, tree.typeAnnotation, tree.annotations, tree.body);
}
function removeStaticModifier(tree) {
  switch (tree.type) {
    case GET_ACCESSOR:
      return new GetAccessor(tree.location, false, tree.name, tree.typeAnnotation, tree.annotations, tree.body);
    case SET_ACCESSOR:
      return new SetAccessor(tree.location, false, tree.name, tree.parameterList, tree.annotations, tree.body);
    case METHOD:
      return new Method(tree.location, false, tree.functionKind, tree.name, tree.parameterList, tree.typeAnnotation, tree.annotations, tree.body, tree.debugName);
    default:
      throw new Error('unreachable');
  }
}
function isConstructor(tree) {
  if (tree.type !== METHOD || tree.isStatic || tree.functionKind !== null) {
    return false;
  }
  var name = tree.name;
  return name.type === LITERAL_PROPERTY_NAME && name.literalToken.value === CONSTRUCTOR;
}
var $__default = isConstructor;
var ClassTransformer = function($__super) {
  function ClassTransformer(identifierGenerator, reporter, options) {
    $traceurRuntime.superConstructor(ClassTransformer).call(this, identifierGenerator, reporter, options);
    this.strictCount_ = 0;
    this.state_ = null;
  }
  return ($traceurRuntime.createClass)(ClassTransformer, {
    transformModule: function(tree) {
      this.strictCount_ = 1;
      return $traceurRuntime.superGet(this, ClassTransformer.prototype, "transformModule").call(this, tree);
    },
    transformScript: function(tree) {
      this.strictCount_ = hasUseStrict(tree.scriptItemList) ? 1 : 0;
      return $traceurRuntime.superGet(this, ClassTransformer.prototype, "transformScript").call(this, tree);
    },
    transformFunctionBody: function(tree) {
      var useStrict = hasUseStrict(tree.statements) ? 1 : 0;
      this.strictCount_ += useStrict;
      var result = $traceurRuntime.superGet(this, ClassTransformer.prototype, "transformFunctionBody").call(this, tree);
      this.strictCount_ -= useStrict;
      return result;
    },
    makeStrict_: function(tree) {
      if (this.strictCount_)
        return tree;
      return MakeStrictTransformer.transformTree(tree);
    },
    transformClassDeclaration: function(tree) {
      var classExpression = new ClassExpression(tree.location, tree.name, tree.superClass, tree.elements, tree.annotations, tree.typeParameters);
      var transformed = this.transformClassExpression(classExpression);
      var useLet = !this.options.transformOptions.blockBinding && this.options.parseOptions.blockBinding;
      return createVariableStatement(useLet ? LET : VAR, tree.name, transformed);
    },
    transformClassExpression: function(tree) {
      var superClass = this.transformAny(tree.superClass);
      var elements = this.transformList(tree.elements);
      var annotations = this.transformList(tree.annotations);
      var constructor = null;
      var protoElements = elements.filter(function(tree) {
        if (tree.isStatic)
          return false;
        if (isConstructor(tree)) {
          constructor = tree;
          return false;
        }
        return true;
      });
      var staticElements = elements.filter(function(tree) {
        return tree.isStatic;
      }).map(removeStaticModifier);
      var protoObject = createObjectLiteral(protoElements);
      var staticObject = createObjectLiteral(staticElements);
      if (!constructor) {
        constructor = this.getDefaultConstructor_(tree);
      }
      var func = new FunctionExpression(tree.location, tree.name, null, constructor.parameterList, null, annotations, constructor.body);
      var expression;
      if (tree.name) {
        var functionStatement;
        var name = tree.name.identifierToken;
        var nameId = id(("" + name));
        if (!this.options.transformOptions.blockBinding && this.options.parseOptions.blockBinding) {
          functionStatement = createVariableStatement(CONST, tree.name, func);
        } else {
          functionStatement = functionExpressionToDeclaration(func, name);
        }
        if (superClass) {
          expression = parseExpression($traceurRuntime.getTemplateObject(["function($__super) {\n          ", ";\n          return ($traceurRuntime.createClass)(", ", ", ",\n                                               ", ", $__super);\n        }(", ")"]), functionStatement, nameId, protoObject, staticObject, superClass);
        } else {
          expression = parseExpression($traceurRuntime.getTemplateObject(["function() {\n          ", ";\n          return ($traceurRuntime.createClass)(", ", ", ",\n                                               ", ");\n        }()"]), functionStatement, nameId, protoObject, staticObject);
        }
      } else {
        expression = classCall(func, protoObject, staticObject, superClass);
      }
      return this.makeStrict_(expression);
    },
    transformExportDeclaration: function(tree) {
      if (tree.declaration.type === EXPORT_DEFAULT && tree.declaration.expression.type === CLASS_DECLARATION) {
        return this.transformExportDefaultClass_(tree.declaration);
      }
      return $traceurRuntime.superGet(this, ClassTransformer.prototype, "transformExportDeclaration").call(this, tree);
    },
    transformExportDefaultClass_: function(tree) {
      var name = tree.expression.name.identifierToken;
      var specifier = new ExportSpecifier(name.location, name, createIdentifierToken('default'));
      var exportTree = new ExportSpecifierSet(name.location, [specifier]);
      var named = new NamedExport(name.location, exportTree, null);
      var exp = new ExportDeclaration(name.location, named, []);
      var classTree = this.transformAny(tree.expression);
      return new AnonBlock(null, [classTree, exp]);
    },
    getDefaultConstructor_: function(tree) {
      if (tree.superClass) {
        var name = id(tree.name.identifierToken);
        return parsePropertyDefinition($traceurRuntime.getTemplateObject(["constructor() {\n        $traceurRuntime.superConstructor(", ").apply(this, arguments)\n      }"]), name);
      }
      return parsePropertyDefinition($traceurRuntime.getTemplateObject(["constructor() {}"]));
    }
  }, {}, $__super);
}(ParenTrait(TempVarTransformer));
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  ClassTransformer: {get: function() {
      return ClassTransformer;
    }},
  __esModule: {value: true}
});
