---
title: PlainZkProgram
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / PlainZkProgram

# Interface: PlainZkProgram\<PublicInput, PublicOutput\>

Defined in: [packages/common/src/zkProgrammable/ZkProgrammable.ts:36](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/zkProgrammable/ZkProgrammable.ts#L36)

## Type Parameters

• **PublicInput** = `undefined`

• **PublicOutput** = `void`

## Properties

### analyzeMethods()

> **analyzeMethods**: () => `Promise`\<`Record`\<`string`, \{ `digest`: `string`; `gates`: `Gate`[]; `publicInputSize`: `number`; `rows`: `number`; `print`: `void`; `summary`: `Partial`\<`Record`\<`GateType` \| `"Total rows"`, `number`\>\>; \}\>\>

Defined in: [packages/common/src/zkProgrammable/ZkProgrammable.ts:54](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/zkProgrammable/ZkProgrammable.ts#L54)

#### Returns

`Promise`\<`Record`\<`string`, \{ `digest`: `string`; `gates`: `Gate`[]; `publicInputSize`: `number`; `rows`: `number`; `print`: `void`; `summary`: `Partial`\<`Record`\<`GateType` \| `"Total rows"`, `number`\>\>; \}\>\>

***

### compile

> **compile**: [`Compile`](Compile.md)

Defined in: [packages/common/src/zkProgrammable/ZkProgrammable.ts:38](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/zkProgrammable/ZkProgrammable.ts#L38)

***

### methods

> **methods**: `Record`\<`string`, (...`args`) => `Promise`\<`Proof`\<`PublicInput`, `PublicOutput`\>\> \| (`publicInput`, ...`args`) => `Promise`\<`Proof`\<`PublicInput`, `PublicOutput`\>\>\>

Defined in: [packages/common/src/zkProgrammable/ZkProgrammable.ts:46](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/zkProgrammable/ZkProgrammable.ts#L46)

***

### name

> **name**: `string`

Defined in: [packages/common/src/zkProgrammable/ZkProgrammable.ts:37](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/zkProgrammable/ZkProgrammable.ts#L37)

***

### Proof()

> **Proof**: (`__namedParameters`) => `object`

Defined in: [packages/common/src/zkProgrammable/ZkProgrammable.ts:40](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/zkProgrammable/ZkProgrammable.ts#L40)

#### Parameters

##### \_\_namedParameters

###### maxProofsVerified

`0` \| `1` \| `2`

###### proof

`unknown`

###### publicInput

`PublicInput` \| `StructPure`\<`PublicInput`\> *extends* `GenericProvable`\<`PublicInput`, `any`, `Field`\> ? `PublicInput` : `PublicInput`

###### publicOutput

`PublicOutput` \| `StructPure`\<`PublicOutput`\> *extends* `GenericProvable`\<`PublicOutput`, `any`, `Field`\> ? `PublicOutput` : `PublicOutput`

#### Returns

`object`

##### maxProofsVerified

> **maxProofsVerified**: `0` \| `1` \| `2`

##### proof

> **proof**: `unknown`

##### publicInput

> **publicInput**: `PublicInput` \| `StructPure`\<`PublicInput`\> *extends* `GenericProvable`\<`PublicInput`, `any`, `Field`\> ? `PublicInput` : `PublicInput`

##### publicOutput

> **publicOutput**: `PublicOutput` \| `StructPure`\<`PublicOutput`\> *extends* `GenericProvable`\<`PublicOutput`, `any`, `Field`\> ? `PublicOutput` : `PublicOutput`

##### shouldVerify

> **shouldVerify**: `Bool`

##### toJSON()

###### Returns

`JsonProof`

##### verify()

###### Returns

`void`

##### verifyIf()

###### Parameters

###### condition

`Bool`

###### Returns

`void`

#### publicInputType

> **publicInputType**: `FlexibleProvablePure`\<`PublicInput`\>

#### publicOutputType

> **publicOutputType**: `FlexibleProvablePure`\<`PublicOutput`\>

#### tag()

> **tag**: () => `object`

##### Returns

`object`

###### name

> **name**: `string`

###### publicInputType

> **publicInputType**: `FlexibleProvablePure`\<`PublicInput`\>

###### publicOutputType

> **publicOutputType**: `FlexibleProvablePure`\<`PublicOutput`\>

#### dummy()

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

##### Type Parameters

• **Input**

• **OutPut**

##### Parameters

###### publicInput

`Input`

###### publicOutput

`OutPut`

###### maxProofsVerified

`0` | `1` | `2`

###### domainLog2?

`number`

##### Returns

`Promise`\<`Proof`\<`Input`, `OutPut`\>\>

#### fromJSON()

##### Type Parameters

• **S** *extends* `Subclass`\<*typeof* `Proof`\>

##### Parameters

###### this

`S`

###### \_\_namedParameters

`JsonProof`

##### Returns

`Promise`\<`Proof`\<`InferProvable`\<`S`\[`"publicInputType"`\]\>, `InferProvable`\<`S`\[`"publicOutputType"`\]\>\>\>

***

### verify

> **verify**: [`Verify`](Verify.md)\<`PublicInput`, `PublicOutput`\>

Defined in: [packages/common/src/zkProgrammable/ZkProgrammable.ts:39](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/zkProgrammable/ZkProgrammable.ts#L39)
