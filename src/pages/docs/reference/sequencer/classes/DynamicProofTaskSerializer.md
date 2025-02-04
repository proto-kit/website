---
title: DynamicProofTaskSerializer
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / DynamicProofTaskSerializer

# Class: DynamicProofTaskSerializer\<PublicInputType, PublicOutputType\>

Defined in: [packages/sequencer/src/helpers/utils.ts:130](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/helpers/utils.ts#L130)

## Extends

- `ProofTaskSerializerBase`\<`PublicInputType`, `PublicOutputType`\>

## Type Parameters

• **PublicInputType**

• **PublicOutputType**

## Implements

- [`TaskSerializer`](../interfaces/TaskSerializer.md)\<`DynamicProof`\<`PublicInputType`, `PublicOutputType`\>\>

## Constructors

### new DynamicProofTaskSerializer()

> **new DynamicProofTaskSerializer**\<`PublicInputType`, `PublicOutputType`\>(`proofClass`): [`DynamicProofTaskSerializer`](DynamicProofTaskSerializer.md)\<`PublicInputType`, `PublicOutputType`\>

Defined in: [packages/sequencer/src/helpers/utils.ts:134](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/helpers/utils.ts#L134)

#### Parameters

##### proofClass

[`Subclass`](../../protocol/type-aliases/Subclass.md)\<*typeof* `DynamicProof`\>

#### Returns

[`DynamicProofTaskSerializer`](DynamicProofTaskSerializer.md)\<`PublicInputType`, `PublicOutputType`\>

#### Overrides

`ProofTaskSerializerBase<PublicInputType, PublicOutputType>.constructor`

## Methods

### fromJSON()

> **fromJSON**(`json`): `Promise`\<`DynamicProof`\<`PublicInputType`, `PublicOutputType`\>\>

Defined in: [packages/sequencer/src/helpers/utils.ts:142](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/helpers/utils.ts#L142)

#### Parameters

##### json

`string`

#### Returns

`Promise`\<`DynamicProof`\<`PublicInputType`, `PublicOutputType`\>\>

#### Implementation of

[`TaskSerializer`](../interfaces/TaskSerializer.md).[`fromJSON`](../interfaces/TaskSerializer.md#fromjson)

***

### fromJSONProof()

> **fromJSONProof**(`jsonProof`): `Promise`\<`DynamicProof`\<`PublicInputType`, `PublicOutputType`\>\>

Defined in: [packages/sequencer/src/helpers/utils.ts:149](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/helpers/utils.ts#L149)

#### Parameters

##### jsonProof

`JsonProof`

#### Returns

`Promise`\<`DynamicProof`\<`PublicInputType`, `PublicOutputType`\>\>

***

### getDummy()

> `protected` **getDummy**\<`T`\>(`c`, `jsonProof`): `T`

Defined in: [packages/sequencer/src/helpers/utils.ts:41](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/helpers/utils.ts#L41)

#### Type Parameters

• **T** *extends* `DynamicProof`\<`PublicInputType`, `PublicOutputType`\> \| `Proof`\<`PublicInputType`, `PublicOutputType`\>

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

Defined in: [packages/sequencer/src/helpers/utils.ts:65](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/helpers/utils.ts#L65)

#### Parameters

##### proof

`DynamicProof`\<`PublicInputType`, `PublicOutputType`\> | `Proof`\<`PublicInputType`, `PublicOutputType`\>

#### Returns

`string`

#### Implementation of

[`TaskSerializer`](../interfaces/TaskSerializer.md).[`toJSON`](../interfaces/TaskSerializer.md#tojson)

#### Inherited from

`ProofTaskSerializerBase.toJSON`

***

### toJSONProof()

> **toJSONProof**(`proof`): `JsonProof`

Defined in: [packages/sequencer/src/helpers/utils.ts:73](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/helpers/utils.ts#L73)

#### Parameters

##### proof

`DynamicProof`\<`PublicInputType`, `PublicOutputType`\> | `Proof`\<`PublicInputType`, `PublicOutputType`\>

#### Returns

`JsonProof`

#### Inherited from

`ProofTaskSerializerBase.toJSONProof`
