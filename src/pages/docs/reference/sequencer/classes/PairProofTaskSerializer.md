---
title: PairProofTaskSerializer
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / PairProofTaskSerializer

# Class: PairProofTaskSerializer\<PublicInputType, PublicOutputType\>

Defined in: [packages/sequencer/src/helpers/utils.ts:164](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/helpers/utils.ts#L164)

## Type Parameters

• **PublicInputType**

• **PublicOutputType**

## Implements

- [`TaskSerializer`](../interfaces/TaskSerializer.md)\<[`PairTuple`](../type-aliases/PairTuple.md)\<`Proof`\<`PublicInputType`, `PublicOutputType`\>\>\>

## Constructors

### new PairProofTaskSerializer()

> **new PairProofTaskSerializer**\<`PublicInputType`, `PublicOutputType`\>(`proofClass`): [`PairProofTaskSerializer`](PairProofTaskSerializer.md)\<`PublicInputType`, `PublicOutputType`\>

Defined in: [packages/sequencer/src/helpers/utils.ts:170](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/helpers/utils.ts#L170)

#### Parameters

##### proofClass

[`Subclass`](../../protocol/type-aliases/Subclass.md)\<*typeof* `Proof`\>

#### Returns

[`PairProofTaskSerializer`](PairProofTaskSerializer.md)\<`PublicInputType`, `PublicOutputType`\>

## Methods

### fromJSON()

> **fromJSON**(`json`): `Promise`\<[`PairTuple`](../type-aliases/PairTuple.md)\<`Proof`\<`PublicInputType`, `PublicOutputType`\>\>\>

Defined in: [packages/sequencer/src/helpers/utils.ts:176](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/helpers/utils.ts#L176)

#### Parameters

##### json

`string`

#### Returns

`Promise`\<[`PairTuple`](../type-aliases/PairTuple.md)\<`Proof`\<`PublicInputType`, `PublicOutputType`\>\>\>

#### Implementation of

[`TaskSerializer`](../interfaces/TaskSerializer.md).[`fromJSON`](../interfaces/TaskSerializer.md#fromjson)

***

### toJSON()

> **toJSON**(`input`): `string`

Defined in: [packages/sequencer/src/helpers/utils.ts:187](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/helpers/utils.ts#L187)

#### Parameters

##### input

[`PairTuple`](../type-aliases/PairTuple.md)\<`Proof`\<`PublicInputType`, `PublicOutputType`\>\>

#### Returns

`string`

#### Implementation of

[`TaskSerializer`](../interfaces/TaskSerializer.md).[`toJSON`](../interfaces/TaskSerializer.md#tojson)
