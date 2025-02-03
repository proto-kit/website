---
title: DynamicBlockProof
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / DynamicBlockProof

# Class: DynamicBlockProof

Defined in: [packages/protocol/src/settlement/contracts/SettlementSmartContract.ts:49](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/contracts/SettlementSmartContract.ts#L49)

## Extends

- `DynamicProof`\<[`BlockProverPublicInput`](BlockProverPublicInput.md), [`BlockProverPublicOutput`](BlockProverPublicOutput.md)\>

## Constructors

### new DynamicBlockProof()

> **new DynamicBlockProof**(`__namedParameters`): [`DynamicBlockProof`](DynamicBlockProof.md)

Defined in: node\_modules/o1js/dist/node/lib/proof-system/zkprogram.d.ts:94

#### Parameters

##### \_\_namedParameters

###### maxProofsVerified

`0` \| `1` \| `2`

###### proof

`unknown`

###### publicInput

[`BlockProverPublicInput`](BlockProverPublicInput.md)

###### publicOutput

[`BlockProverPublicOutput`](BlockProverPublicOutput.md)

#### Returns

[`DynamicBlockProof`](DynamicBlockProof.md)

#### Inherited from

`DynamicProof< BlockProverPublicInput, BlockProverPublicOutput >.constructor`

## Properties

### maxProofsVerified

> **maxProofsVerified**: `0` \| `1` \| `2`

Defined in: node\_modules/o1js/dist/node/lib/proof-system/zkprogram.d.ts:91

#### Inherited from

`DynamicProof.maxProofsVerified`

***

### proof

> **proof**: `unknown`

Defined in: node\_modules/o1js/dist/node/lib/proof-system/zkprogram.d.ts:90

#### Inherited from

`DynamicProof.proof`

***

### publicInput

> **publicInput**: [`BlockProverPublicInput`](BlockProverPublicInput.md)

Defined in: node\_modules/o1js/dist/node/lib/proof-system/zkprogram.d.ts:88

#### Inherited from

`DynamicProof.publicInput`

***

### publicOutput

> **publicOutput**: [`BlockProverPublicOutput`](BlockProverPublicOutput.md)

Defined in: node\_modules/o1js/dist/node/lib/proof-system/zkprogram.d.ts:89

#### Inherited from

`DynamicProof.publicOutput`

***

### shouldVerify

> **shouldVerify**: `Bool`

Defined in: node\_modules/o1js/dist/node/lib/proof-system/zkprogram.d.ts:92

#### Inherited from

`DynamicProof.shouldVerify`

***

### usedVerificationKey?

> `optional` **usedVerificationKey**: `VerificationKey`

Defined in: node\_modules/o1js/dist/node/lib/proof-system/zkprogram.d.ts:180

#### Inherited from

`DynamicProof.usedVerificationKey`

***

### featureFlags

> `static` **featureFlags**: `FeatureFlags`

Defined in: node\_modules/o1js/dist/node/lib/proof-system/zkprogram.d.ts:176

As the name indicates, feature flags are features of the proof system.

If we want to side load proofs and verification keys, we first have to tell Pickles what _shape_ of proofs it should expect.

For example, if we want to side load proofs that use foreign field arithmetic custom gates, we have to make Pickles aware of that by defining
these custom gates.

_Note:_ Only proofs that use the exact same composition of custom gates which were expected by Pickles can be verified using side loading.
If you want to verify _any_ proof, no matter what custom gates it uses, you can use FeatureFlags.allMaybe. Please note that this might incur a significant overhead.

You can also toggle specific feature flags manually by specifying them here.
Alternatively, you can use {@FeatureFlags.fromZkProgram} to compute the set of feature flags that are compatible with a given program.

#### Inherited from

`DynamicProof.featureFlags`

***

### maxProofsVerified

> `static` **maxProofsVerified**: `2`

Defined in: [packages/protocol/src/settlement/contracts/SettlementSmartContract.ts:57](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/contracts/SettlementSmartContract.ts#L57)

#### Overrides

`DynamicProof.maxProofsVerified`

***

### publicInputType

> `static` **publicInputType**: *typeof* [`BlockProverPublicInput`](BlockProverPublicInput.md) = `BlockProverPublicInput`

Defined in: [packages/protocol/src/settlement/contracts/SettlementSmartContract.ts:53](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/contracts/SettlementSmartContract.ts#L53)

#### Overrides

`DynamicProof.publicInputType`

***

### publicOutputType

> `static` **publicOutputType**: *typeof* [`BlockProverPublicOutput`](BlockProverPublicOutput.md) = `BlockProverPublicOutput`

Defined in: [packages/protocol/src/settlement/contracts/SettlementSmartContract.ts:55](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/contracts/SettlementSmartContract.ts#L55)

#### Overrides

`DynamicProof.publicOutputType`

## Methods

### toJSON()

> **toJSON**(): `JsonProof`

Defined in: node\_modules/o1js/dist/node/lib/proof-system/zkprogram.d.ts:93

#### Returns

`JsonProof`

#### Inherited from

`DynamicProof.toJSON`

***

### verify()

> **verify**(`vk`): `void`

Defined in: node\_modules/o1js/dist/node/lib/proof-system/zkprogram.d.ts:185

Verifies this DynamicProof using a given verification key

#### Parameters

##### vk

`VerificationKey`

The verification key this proof will be verified against

#### Returns

`void`

#### Inherited from

`DynamicProof.verify`

***

### verifyIf()

> **verifyIf**(`vk`, `condition`): `void`

Defined in: node\_modules/o1js/dist/node/lib/proof-system/zkprogram.d.ts:186

#### Parameters

##### vk

`VerificationKey`

##### condition

`Bool`

#### Returns

`void`

#### Inherited from

`DynamicProof.verifyIf`

***

### dummy()

> `static` **dummy**\<`S`\>(`this`, `publicInput`, `publicOutput`, `maxProofsVerified`, `domainLog2`?): `Promise`\<`InstanceType`\<`S`\>\>

Defined in: node\_modules/o1js/dist/node/lib/proof-system/zkprogram.d.ts:188

#### Type Parameters

• **S** *extends* `Subclass`\<*typeof* `DynamicProof`\>

#### Parameters

##### this

`S`

##### publicInput

`InferProvable`\<`S`\[`"publicInputType"`\]\>

##### publicOutput

`InferProvable`\<`S`\[`"publicOutputType"`\]\>

##### maxProofsVerified

`0` | `1` | `2`

##### domainLog2?

`number`

#### Returns

`Promise`\<`InstanceType`\<`S`\>\>

#### Inherited from

`DynamicProof.dummy`

***

### fromJSON()

> `static` **fromJSON**\<`S`\>(`this`, `__namedParameters`): `Promise`\<`DynamicProof`\<`InferProvable`\<`S`\[`"publicInputType"`\]\>, `InferProvable`\<`S`\[`"publicOutputType"`\]\>\>\>

Defined in: node\_modules/o1js/dist/node/lib/proof-system/zkprogram.d.ts:187

#### Type Parameters

• **S** *extends* `Subclass`\<*typeof* `DynamicProof`\>

#### Parameters

##### this

`S`

##### \_\_namedParameters

`JsonProof`

#### Returns

`Promise`\<`DynamicProof`\<`InferProvable`\<`S`\[`"publicInputType"`\]\>, `InferProvable`\<`S`\[`"publicOutputType"`\]\>\>\>

#### Inherited from

`DynamicProof.fromJSON`

***

### fromProof()

> `static` **fromProof**\<`S`\>(`this`, `proof`): `InstanceType`\<`S`\>

Defined in: node\_modules/o1js/dist/node/lib/proof-system/zkprogram.d.ts:194

Converts a Proof into a DynamicProof carrying over all relevant data.
This method can be used to convert a Proof computed by a ZkProgram
into a DynamicProof that is accepted in a circuit that accepts DynamicProofs

#### Type Parameters

• **S** *extends* `Subclass`\<*typeof* `DynamicProof`\>

#### Parameters

##### this

`S`

##### proof

`Proof`\<`InferProvable`\<`S`\[`"publicInputType"`\]\>, `InferProvable`\<`S`\[`"publicOutputType"`\]\>\>

#### Returns

`InstanceType`\<`S`\>

#### Inherited from

`DynamicProof.fromProof`

***

### tag()

> `static` **tag**(): `object`

Defined in: node\_modules/o1js/dist/node/lib/proof-system/zkprogram.d.ts:177

#### Returns

`object`

##### name

> **name**: `string`

#### Inherited from

`DynamicProof.tag`
