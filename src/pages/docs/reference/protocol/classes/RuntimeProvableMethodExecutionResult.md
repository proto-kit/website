---
title: RuntimeProvableMethodExecutionResult
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / RuntimeProvableMethodExecutionResult

# Class: RuntimeProvableMethodExecutionResult

Defined in: [packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts:19](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts#L19)

## Extends

- [`ProvableMethodExecutionResult`](../../common/classes/ProvableMethodExecutionResult.md)

## Constructors

### new RuntimeProvableMethodExecutionResult()

> **new RuntimeProvableMethodExecutionResult**(): [`RuntimeProvableMethodExecutionResult`](RuntimeProvableMethodExecutionResult.md)

#### Returns

[`RuntimeProvableMethodExecutionResult`](RuntimeProvableMethodExecutionResult.md)

#### Inherited from

[`ProvableMethodExecutionResult`](../../common/classes/ProvableMethodExecutionResult.md).[`constructor`](../../common/classes/ProvableMethodExecutionResult.md#constructors)

## Properties

### args?

> `optional` **args**: [`ArgumentTypes`](../../common/type-aliases/ArgumentTypes.md)

Defined in: packages/common/dist/zkProgrammable/ProvableMethodExecutionContext.d.ts:6

#### Inherited from

[`ProvableMethodExecutionResult`](../../common/classes/ProvableMethodExecutionResult.md).[`args`](../../common/classes/ProvableMethodExecutionResult.md#args)

***

### events

> **events**: `object`[] = `[]`

Defined in: [packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts:28](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts#L28)

#### condition

> **condition**: `Bool`

#### event

> **event**: `any`

#### eventName

> **eventName**: `string`

#### eventType

> **eventType**: `FlexibleProvablePure`\<`any`\>

***

### methodName?

> `optional` **methodName**: `string`

Defined in: packages/common/dist/zkProgrammable/ProvableMethodExecutionContext.d.ts:5

#### Inherited from

[`ProvableMethodExecutionResult`](../../common/classes/ProvableMethodExecutionResult.md).[`methodName`](../../common/classes/ProvableMethodExecutionResult.md#methodname)

***

### moduleName?

> `optional` **moduleName**: `string`

Defined in: packages/common/dist/zkProgrammable/ProvableMethodExecutionContext.d.ts:4

#### Inherited from

[`ProvableMethodExecutionResult`](../../common/classes/ProvableMethodExecutionResult.md).[`moduleName`](../../common/classes/ProvableMethodExecutionResult.md#modulename)

***

### prover()?

> `optional` **prover**: () => `Promise`\<`Proof`\<`unknown`, `unknown`\>\>

Defined in: packages/common/dist/zkProgrammable/ProvableMethodExecutionContext.d.ts:7

#### Returns

`Promise`\<`Proof`\<`unknown`, `unknown`\>\>

#### Inherited from

[`ProvableMethodExecutionResult`](../../common/classes/ProvableMethodExecutionResult.md).[`prover`](../../common/classes/ProvableMethodExecutionResult.md#prover)

***

### stackTrace?

> `optional` **stackTrace**: `string`

Defined in: [packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts:26](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts#L26)

***

### stateTransitions

> **stateTransitions**: [`StateTransition`](StateTransition.md)\<`any`\>[] = `[]`

Defined in: [packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts:20](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts#L20)

***

### status

> **status**: `Bool`

Defined in: [packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts:22](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts#L22)

***

### statusMessage?

> `optional` **statusMessage**: `string`

Defined in: [packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts:24](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/state/context/RuntimeMethodExecutionContext.ts#L24)

## Methods

### prove()

> **prove**\<`ProofType`\>(): `Promise`\<`ProofType`\>

Defined in: packages/common/dist/zkProgrammable/ProvableMethodExecutionContext.d.ts:8

#### Type Parameters

• **ProofType** *extends* `Proof`\<`unknown`, `unknown`\>

#### Returns

`Promise`\<`ProofType`\>

#### Inherited from

[`ProvableMethodExecutionResult`](../../common/classes/ProvableMethodExecutionResult.md).[`prove`](../../common/classes/ProvableMethodExecutionResult.md#prove)
