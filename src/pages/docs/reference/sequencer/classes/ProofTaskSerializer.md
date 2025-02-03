---
title: ProofTaskSerializer
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / ProofTaskSerializer

# Class: ProofTaskSerializer\<PublicInputType, PublicOutputType\>

Defined in: [packages/sequencer/src/helpers/utils.ts:100](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/helpers/utils.ts#L100)

## Extends

- `ProofTaskSerializerBase`\<`PublicInputType`, `PublicOutputType`\>

## Type Parameters

• **PublicInputType**

• **PublicOutputType**

## Implements

- [`TaskSerializer`](../interfaces/TaskSerializer.md)\<`Proof`\<`PublicInputType`, `PublicOutputType`\>\>

## Constructors

### new ProofTaskSerializer()

> **new ProofTaskSerializer**\<`PublicInputType`, `PublicOutputType`\>(`proofClass`): [`ProofTaskSerializer`](ProofTaskSerializer.md)\<`PublicInputType`, `PublicOutputType`\>

Defined in: [packages/sequencer/src/helpers/utils.ts:104](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/helpers/utils.ts#L104)

#### Parameters

##### proofClass

[`Subclass`](../../protocol/type-aliases/Subclass.md)\<*typeof* `Proof`\>

#### Returns

[`ProofTaskSerializer`](ProofTaskSerializer.md)\<`PublicInputType`, `PublicOutputType`\>

#### Overrides

`ProofTaskSerializerBase<PublicInputType, PublicOutputType>.constructor`

## Methods

### fromJSON()

> **fromJSON**(`json`): `Promise`\<`Proof`\<`PublicInputType`, `PublicOutputType`\>\>

Defined in: [packages/sequencer/src/helpers/utils.ts:112](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/helpers/utils.ts#L112)

#### Parameters

##### json

`string`

#### Returns

`Promise`\<`Proof`\<`PublicInputType`, `PublicOutputType`\>\>

#### Implementation of

[`TaskSerializer`](../interfaces/TaskSerializer.md).[`fromJSON`](../interfaces/TaskSerializer.md#fromjson)

***

### fromJSONProof()

> **fromJSONProof**(`jsonProof`): `Promise`\<`Proof`\<`PublicInputType`, `PublicOutputType`\>\>

Defined in: [packages/sequencer/src/helpers/utils.ts:119](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/helpers/utils.ts#L119)

#### Parameters

##### jsonProof

`JsonProof`

#### Returns

`Promise`\<`Proof`\<`PublicInputType`, `PublicOutputType`\>\>

***

### getDummy()

> `protected` **getDummy**\<`T`\>(`c`, `jsonProof`): `T`

Defined in: [packages/sequencer/src/helpers/utils.ts:41](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/helpers/utils.ts#L41)

#### Type Parameters

• **T** *extends* `Proof`\<`PublicInputType`, `PublicOutputType`\> \| `DynamicProof`\<`PublicInputType`, `PublicOutputType`\>

#### Parameters

##### c

[`TypedClass`](../type-aliases/TypedClass.md)\<`T`\>

##### jsonProof

`JsonProof`

#### Returns

`T`

#### Inherited from

`ProofTaskSerializerBase.getDummy`

***

### toJSON()

> **toJSON**(`proof`): `string`

Defined in: [packages/sequencer/src/helpers/utils.ts:65](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/helpers/utils.ts#L65)

#### Parameters

##### proof

`Proof`\<`PublicInputType`, `PublicOutputType`\> | `DynamicProof`\<`PublicInputType`, `PublicOutputType`\>

#### Returns

`string`

#### Implementation of

[`TaskSerializer`](../interfaces/TaskSerializer.md).[`toJSON`](../interfaces/TaskSerializer.md#tojson)

#### Inherited from

`ProofTaskSerializerBase.toJSON`

***

### toJSONProof()

> **toJSONProof**(`proof`): `JsonProof`

Defined in: [packages/sequencer/src/helpers/utils.ts:73](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/helpers/utils.ts#L73)

#### Parameters

##### proof

`Proof`\<`PublicInputType`, `PublicOutputType`\> | `DynamicProof`\<`PublicInputType`, `PublicOutputType`\>

#### Returns

`JsonProof`

#### Inherited from

`ProofTaskSerializerBase.toJSONProof`
