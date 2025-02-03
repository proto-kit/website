---
title: ProvableMethodExecutionResult
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / ProvableMethodExecutionResult

# Class: ProvableMethodExecutionResult

Defined in: [packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts:16](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts#L16)

## Extended by

- [`RuntimeProvableMethodExecutionResult`](../../protocol/classes/RuntimeProvableMethodExecutionResult.md)

## Constructors

### new ProvableMethodExecutionResult()

> **new ProvableMethodExecutionResult**(): [`ProvableMethodExecutionResult`](ProvableMethodExecutionResult.md)

#### Returns

[`ProvableMethodExecutionResult`](ProvableMethodExecutionResult.md)

## Properties

### args?

> `optional` **args**: [`ArgumentTypes`](../type-aliases/ArgumentTypes.md)

Defined in: [packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts:21](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts#L21)

***

### methodName?

> `optional` **methodName**: `string`

Defined in: [packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts:19](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts#L19)

***

### moduleName?

> `optional` **moduleName**: `string`

Defined in: [packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts:17](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts#L17)

***

### prover()?

> `optional` **prover**: () => `Promise`\<`Proof`\<`unknown`, `unknown`\>\>

Defined in: [packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts:23](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts#L23)

#### Returns

`Promise`\<`Proof`\<`unknown`, `unknown`\>\>

## Methods

### prove()

> **prove**\<`ProofType`\>(): `Promise`\<`ProofType`\>

Defined in: [packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts:25](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/zkProgrammable/ProvableMethodExecutionContext.ts#L25)

#### Type Parameters

• **ProofType** *extends* `Proof`\<`unknown`, `unknown`\>

#### Returns

`Promise`\<`ProofType`\>
