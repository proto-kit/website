---
title: SomeProofSubclass
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / SomeProofSubclass

# Class: SomeProofSubclass

Defined in: [packages/sequencer/src/settlement/tasks/SettlementProvingTask.ts:58](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/settlement/tasks/SettlementProvingTask.ts#L58)

## Extends

- `Proof`\<`Field`, `Void`\>

## Constructors

### new SomeProofSubclass()

> **new SomeProofSubclass**(`__namedParameters`): [`SomeProofSubclass`](SomeProofSubclass.md)

Defined in: node\_modules/o1js/dist/node/lib/proof-system/zkprogram.d.ts:94

#### Parameters

##### \_\_namedParameters

###### maxProofsVerified

`0` \| `1` \| `2`

###### proof

`unknown`

###### publicInput

`Field`

###### publicOutput

`undefined`

#### Returns

[`SomeProofSubclass`](SomeProofSubclass.md)

#### Inherited from

`Proof<Field, Void>.constructor`

## Properties

### maxProofsVerified

> **maxProofsVerified**: `0` \| `1` \| `2`

Defined in: node\_modules/o1js/dist/node/lib/proof-system/zkprogram.d.ts:91

#### Inherited from

`Proof.maxProofsVerified`

***

### proof

> **proof**: `unknown`

Defined in: node\_modules/o1js/dist/node/lib/proof-system/zkprogram.d.ts:90

#### Inherited from

`Proof.proof`

***

### publicInput

> **publicInput**: `Field`

Defined in: node\_modules/o1js/dist/node/lib/proof-system/zkprogram.d.ts:88

#### Inherited from

`Proof.publicInput`

***

### publicOutput

> **publicOutput**: `undefined`

Defined in: node\_modules/o1js/dist/node/lib/proof-system/zkprogram.d.ts:89

#### Inherited from

`Proof.publicOutput`

***

### shouldVerify

> **shouldVerify**: `Bool`

Defined in: node\_modules/o1js/dist/node/lib/proof-system/zkprogram.d.ts:92

#### Inherited from

`Proof.shouldVerify`

***

### publicInputType

> `static` **publicInputType**: *typeof* `Field` & (`x`) => `Field` = `Field`

Defined in: [packages/sequencer/src/settlement/tasks/SettlementProvingTask.ts:59](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/settlement/tasks/SettlementProvingTask.ts#L59)

#### Overrides

`Proof.publicInputType`

***

### publicOutputType

> `static` **publicOutputType**: `ProvablePureExtended`\<`void`, `void`, `null`\> = `Void`

Defined in: [packages/sequencer/src/settlement/tasks/SettlementProvingTask.ts:61](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/settlement/tasks/SettlementProvingTask.ts#L61)

#### Overrides

`Proof.publicOutputType`

***

### tag()

> `static` **tag**: () => `object`

Defined in: node\_modules/o1js/dist/node/lib/proof-system/zkprogram.d.ts:85

#### Returns

`object`

##### name

> **name**: `string`

#### Inherited from

`Proof.tag`

## Methods

### toJSON()

> **toJSON**(): `JsonProof`

Defined in: node\_modules/o1js/dist/node/lib/proof-system/zkprogram.d.ts:93

#### Returns

`JsonProof`

#### Inherited from

`Proof.toJSON`

***

### verify()

> **verify**(): `void`

Defined in: node\_modules/o1js/dist/node/lib/proof-system/zkprogram.d.ts:102

#### Returns

`void`

#### Inherited from

`Proof.verify`

***

### verifyIf()

> **verifyIf**(`condition`): `void`

Defined in: node\_modules/o1js/dist/node/lib/proof-system/zkprogram.d.ts:103

#### Parameters

##### condition

`Bool`

#### Returns

`void`

#### Inherited from

`Proof.verifyIf`

***

### dummy()

> `static` **dummy**\<`Input`, `OutPut`\>(`publicInput`, `publicOutput`, `maxProofsVerified`, `domainLog2`?): `Promise`\<`Proof`\<`Input`, `OutPut`\>\>

Defined in: node\_modules/o1js/dist/node/lib/proof-system/zkprogram.d.ts:126

Dummy proof. This can be useful for ZkPrograms that handle the base case in the same
method as the inductive case, using a pattern like this:

```ts
method(proof: SelfProof<I, O>, isRecursive: Bool) {
  proof.verifyIf(isRecursive);
  // ...
}
```

To use such a method in the base case, you need a dummy proof:

```ts
let dummy = await MyProof.dummy(publicInput, publicOutput, 1);
await myProgram.myMethod(dummy, Bool(false));
```

**Note**: The types of `publicInput` and `publicOutput`, as well as the `maxProofsVerified` parameter,
must match your ZkProgram. `maxProofsVerified` is the maximum number of proofs that any of your methods take as arguments.

#### Type Parameters

• **Input**

• **OutPut**

#### Parameters

##### publicInput

`Input`

##### publicOutput

`OutPut`

##### maxProofsVerified

`0` | `1` | `2`

##### domainLog2?

`number`

#### Returns

`Promise`\<`Proof`\<`Input`, `OutPut`\>\>

#### Inherited from

`Proof.dummy`

***

### fromJSON()

> `static` **fromJSON**\<`S`\>(`this`, `__namedParameters`): `Promise`\<`Proof`\<`InferProvable`\<`S`\[`"publicInputType"`\]\>, `InferProvable`\<`S`\[`"publicOutputType"`\]\>\>\>

Defined in: node\_modules/o1js/dist/node/lib/proof-system/zkprogram.d.ts:104

#### Type Parameters

• **S** *extends* `Subclass`\<*typeof* `Proof`\>

#### Parameters

##### this

`S`

##### \_\_namedParameters

`JsonProof`

#### Returns

`Promise`\<`Proof`\<`InferProvable`\<`S`\[`"publicInputType"`\]\>, `InferProvable`\<`S`\[`"publicOutputType"`\]\>\>\>

#### Inherited from

`Proof.fromJSON`
