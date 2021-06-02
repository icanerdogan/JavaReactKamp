"use strict";
var $__ParseTreeTransformer_46_js__,
    $__alphaRenameThisAndArguments_46_js__,
    $__PlaceholderParser_46_js__,
    $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__,
    $__ParseTreeFactory_46_js__,
    $___46__46__47_syntax_47_PredefinedName_46_js__,
    $__SkipFunctionsTransformerTrait_46_js__,
    $___46__46__47_util_47_StringSet_46_js__,
    $___46__46__47_syntax_47_Token_46_js__,
    $___46__46__47_syntax_47_TokenType_46_js__;
var ParseTreeTransformer = ($__ParseTreeTransformer_46_js__ = require("./ParseTreeTransformer.js"), $__ParseTreeTransformer_46_js__ && $__ParseTreeTransformer_46_js__.__esModule && $__ParseTreeTransformer_46_js__ || {default: $__ParseTreeTransformer_46_js__}).ParseTreeTransformer;
var alphaRenameThisAndArguments = ($__alphaRenameThisAndArguments_46_js__ = require("./alphaRenameThisAndArguments.js"), $__alphaRenameThisAndArguments_46_js__ && $__alphaRenameThisAndArguments_46_js__.__esModule && $__alphaRenameThisAndArguments_46_js__ || {default: $__alphaRenameThisAndArguments_46_js__}).default;
var parseStatement = ($__PlaceholderParser_46_js__ = require("./PlaceholderParser.js"), $__PlaceholderParser_46_js__ && $__PlaceholderParser_46_js__.__esModule && $__PlaceholderParser_46_js__ || {default: $__PlaceholderParser_46_js__}).parseStatement;
var $__6 = ($___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ = require("../syntax/trees/ParseTrees.js"), $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__.__esModule && $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__ || {default: $___46__46__47_syntax_47_trees_47_ParseTrees_46_js__}),
    AnonBlock = $__6.AnonBlock,
    BreakStatement = $__6.BreakStatement,
    ContinueStatement = $__6.ContinueStatement,
    FormalParameterList = $__6.FormalParameterList,
    FunctionExpression = $__6.FunctionExpression,
    ReturnStatement = $__6.ReturnStatement,
    YieldExpression = $__6.YieldExpression;
var $__7 = ($__ParseTreeFactory_46_js__ = require("./ParseTreeFactory.js"), $__ParseTreeFactory_46_js__ && $__ParseTreeFactory_46_js__.__esModule && $__ParseTreeFactory_46_js__ || {default: $__ParseTreeFactory_46_js__}),
    createArgumentList = $__7.createArgumentList,
    createAssignmentStatement = $__7.createAssignmentStatement,
    createAssignmentExpression = $__7.createAssignmentExpression,
    createBlock = $__7.createBlock,
    createCallExpression = $__7.createCallExpression,
    createCaseClause = $__7.createCaseClause,
    createDefaultClause = $__7.createDefaultClause,
    createExpressionStatement = $__7.createExpressionStatement,
    createFunctionBody = $__7.createFunctionBody,
    createFunctionExpression = $__7.createFunctionExpression,
    createIdentifierExpression = $__7.createIdentifierExpression,
    createNumberLiteral = $__7.createNumberLiteral,
    createObjectLiteralForDescriptor = $__7.createObjectLiteralForDescriptor,
    createSwitchStatement = $__7.createSwitchStatement,
    createThisExpression = $__7.createThisExpression,
    createVariableDeclaration = $__7.createVariableDeclaration,
    createVariableDeclarationList = $__7.createVariableDeclarationList,
    createVariableStatement = $__7.createVariableStatement,
    createVoid0 = $__7.createVoid0;
var ARGUMENTS = ($___46__46__47_syntax_47_PredefinedName_46_js__ = require("../syntax/PredefinedName.js"), $___46__46__47_syntax_47_PredefinedName_46_js__ && $___46__46__47_syntax_47_PredefinedName_46_js__.__esModule && $___46__46__47_syntax_47_PredefinedName_46_js__ || {default: $___46__46__47_syntax_47_PredefinedName_46_js__}).ARGUMENTS;
var SkipFunctionsTransformerTrait = ($__SkipFunctionsTransformerTrait_46_js__ = require("./SkipFunctionsTransformerTrait.js"), $__SkipFunctionsTransformerTrait_46_js__ && $__SkipFunctionsTransformerTrait_46_js__.__esModule && $__SkipFunctionsTransformerTrait_46_js__ || {default: $__SkipFunctionsTransformerTrait_46_js__}).default;
var StringSet = ($___46__46__47_util_47_StringSet_46_js__ = require("../util/StringSet.js"), $___46__46__47_util_47_StringSet_46_js__ && $___46__46__47_util_47_StringSet_46_js__.__esModule && $___46__46__47_util_47_StringSet_46_js__ || {default: $___46__46__47_util_47_StringSet_46_js__}).StringSet;
var Token = ($___46__46__47_syntax_47_Token_46_js__ = require("../syntax/Token.js"), $___46__46__47_syntax_47_Token_46_js__ && $___46__46__47_syntax_47_Token_46_js__.__esModule && $___46__46__47_syntax_47_Token_46_js__ || {default: $___46__46__47_syntax_47_Token_46_js__}).Token;
var $__12 = ($___46__46__47_syntax_47_TokenType_46_js__ = require("../syntax/TokenType.js"), $___46__46__47_syntax_47_TokenType_46_js__ && $___46__46__47_syntax_47_TokenType_46_js__.__esModule && $___46__46__47_syntax_47_TokenType_46_js__ || {default: $___46__46__47_syntax_47_TokenType_46_js__}),
    STAR = $__12.STAR,
    VAR = $__12.VAR;
var FnExtractAbruptCompletions = function($__super) {
  function FnExtractAbruptCompletions(idGenerator, requestParentLabel) {
    $traceurRuntime.superConstructor(FnExtractAbruptCompletions).call(this);
    this.idGenerator_ = idGenerator;
    this.inLoop_ = 0;
    this.inBreakble_ = 0;
    this.variableDeclarations_ = [];
    this.extractedStatements_ = [];
    this.requestParentLabel_ = requestParentLabel;
    this.labelledStatements_ = new StringSet();
  }
  return ($traceurRuntime.createClass)(FnExtractAbruptCompletions, {
    createIIFE: function(body, paramList, argsList, inGenerator) {
      body = this.transformAny(body);
      body = alphaRenameThisAndArguments(this, body);
      var tmpFnName = this.idGenerator_.generateUniqueIdentifier();
      var functionKind = inGenerator ? new Token(STAR, null) : null;
      var functionExpression = new FunctionExpression(null, null, functionKind, new FormalParameterList(null, paramList), null, [], createFunctionBody(body.statements || [body]));
      this.variableDeclarations_.push(createVariableDeclaration(tmpFnName, functionExpression));
      var functionCall = createCallExpression(createIdentifierExpression(tmpFnName), createArgumentList(argsList));
      if (inGenerator) {
        functionCall = new YieldExpression(null, functionCall, true);
      }
      var loopBody = null;
      if (this.extractedStatements_.length || this.hasReturns) {
        var tmpVarName = createIdentifierExpression(this.idGenerator_.generateUniqueIdentifier());
        this.variableDeclarations_.push(createVariableDeclaration(tmpVarName, null));
        var maybeReturn;
        if (this.hasReturns) {
          maybeReturn = parseStatement($traceurRuntime.getTemplateObject(["if (typeof ", " === \"object\")\n            return ", ".v;"]), tmpVarName, tmpVarName);
        }
        if (this.extractedStatements_.length) {
          var caseClauses = this.extractedStatements_.map(function(statement, index) {
            return createCaseClause(createNumberLiteral(index), [statement]);
          });
          if (maybeReturn) {
            caseClauses.push(createDefaultClause([maybeReturn]));
          }
          loopBody = createBlock([createExpressionStatement(createAssignmentExpression(tmpVarName, functionCall)), createSwitchStatement(tmpVarName, caseClauses)]);
        } else {
          loopBody = createBlock([createExpressionStatement(createAssignmentExpression(tmpVarName, functionCall)), maybeReturn]);
        }
      } else {
        loopBody = createBlock([createExpressionStatement(functionCall)]);
      }
      return {
        variableStatements: createVariableStatement(createVariableDeclarationList(VAR, this.variableDeclarations_)),
        loopBody: loopBody
      };
    },
    addTempVarForArguments: function() {
      var tmpVarName = this.idGenerator_.generateUniqueIdentifier();
      this.variableDeclarations_.push(createVariableDeclaration(tmpVarName, createIdentifierExpression(ARGUMENTS)));
      return tmpVarName;
    },
    addTempVarForThis: function() {
      var tmpVarName = this.idGenerator_.generateUniqueIdentifier();
      this.variableDeclarations_.push(createVariableDeclaration(tmpVarName, createThisExpression()));
      return tmpVarName;
    },
    transformAny: function(tree) {
      if (tree) {
        if (tree.isBreakableStatement())
          this.inBreakble_++;
        if (tree.isIterationStatement())
          this.inLoop_++;
        tree = $traceurRuntime.superGet(this, FnExtractAbruptCompletions.prototype, "transformAny").call(this, tree);
        if (tree.isBreakableStatement())
          this.inBreakble_--;
        if (tree.isIterationStatement())
          this.inLoop_--;
      }
      return tree;
    },
    transformReturnStatement: function(tree) {
      this.hasReturns = true;
      return new ReturnStatement(tree.location, createObjectLiteralForDescriptor({v: tree.expression || createVoid0()}));
    },
    transformAbruptCompletion_: function(tree) {
      this.extractedStatements_.push(tree);
      var index = this.extractedStatements_.length - 1;
      return parseStatement($traceurRuntime.getTemplateObject(["return ", ";"]), index);
    },
    transformBreakStatement: function(tree) {
      if (!tree.name) {
        if (this.inBreakble_) {
          return $traceurRuntime.superGet(this, FnExtractAbruptCompletions.prototype, "transformBreakStatement").call(this, tree);
        } else {
          tree = new BreakStatement(tree.location, this.requestParentLabel_());
        }
      } else if (this.labelledStatements_.has(tree.name.value)) {
        return $traceurRuntime.superGet(this, FnExtractAbruptCompletions.prototype, "transformBreakStatement").call(this, tree);
      }
      return this.transformAbruptCompletion_(tree);
    },
    transformContinueStatement: function(tree) {
      if (!tree.name) {
        if (this.inLoop_) {
          return $traceurRuntime.superGet(this, FnExtractAbruptCompletions.prototype, "transformContinueStatement").call(this, tree);
        } else {
          tree = new ContinueStatement(tree.location, this.requestParentLabel_());
        }
      } else if (this.labelledStatements_.has(tree.name.value)) {
        return $traceurRuntime.superGet(this, FnExtractAbruptCompletions.prototype, "transformContinueStatement").call(this, tree);
      }
      return this.transformAbruptCompletion_(tree);
    },
    transformLabelledStatement: function(tree) {
      this.labelledStatements_.add(tree.name.value);
      return $traceurRuntime.superGet(this, FnExtractAbruptCompletions.prototype, "transformLabelledStatement").call(this, tree);
    },
    transformVariableStatement: function(tree) {
      var $__2 = this;
      if (tree.declarations.declarationType === VAR) {
        var assignments = [];
        tree.declarations.declarations.forEach(function(variableDeclaration) {
          var variableName = variableDeclaration.lvalue.getStringValue();
          var initializer = $traceurRuntime.superGet($__2, FnExtractAbruptCompletions.prototype, "transformAny").call($__2, variableDeclaration.initializer);
          $__2.variableDeclarations_.push(createVariableDeclaration(variableName, null));
          assignments.push(createAssignmentStatement(createIdentifierExpression(variableName), initializer));
        });
        return new AnonBlock(null, assignments);
      }
      return $traceurRuntime.superGet(this, FnExtractAbruptCompletions.prototype, "transformVariableStatement").call(this, tree);
    }
  }, {createIIFE: function(idGenerator, body, paramList, argsList, requestParentLabel, inGenerator) {
      return new FnExtractAbruptCompletions(idGenerator, requestParentLabel).createIIFE(body, paramList, argsList, inGenerator);
    }}, $__super);
}(SkipFunctionsTransformerTrait(ParseTreeTransformer));
Object.defineProperties(module.exports, {
  FnExtractAbruptCompletions: {get: function() {
      return FnExtractAbruptCompletions;
    }},
  __esModule: {value: true}
});
