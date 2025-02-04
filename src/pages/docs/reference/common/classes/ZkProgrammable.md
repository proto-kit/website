---
title: ZkProgrammable
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / ZkProgrammable

# Class: `abstract` ZkProgrammable\<PublicInput, PublicOutput\>

Defined in: [packages/common/src/zkProgrammable/ZkProgrammable.ts:99](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/zkProgrammable/ZkProgrammable.ts#L99)

## Extended by

- [`RuntimeZkProgrammable`](../../module/classes/RuntimeZkProgrammable.md)
- [`BlockProverProgrammable`](../../protocol/classes/BlockProverProgrammable.md)
- [`StateTransitionProverProgrammable`](../../protocol/classes/StateTransitionProverProgrammable.md)

## Type Parameters

• **PublicInput** = `undefined`

• **PublicOutput** = `void`

## Constructors

### new ZkProgrammable()

> **new ZkProgrammable**\<`PublicInput`, `PublicOutput`\>(): [`ZkProgrammable`](ZkProgrammable.md)\<`PublicInput`, `PublicOutput`\>

#### Returns

[`ZkProgrammable`](ZkProgrammable.md)\<`PublicInput`, `PublicOutput`\>

## Accessors

### areProofsEnabled

#### Get Signature

> **get** `abstract` **areProofsEnabled**(): `undefined` \| [`AreProofsEnabled`](../interfaces/AreProofsEnabled.md)

Defined in: [packages/common/src/zkProgrammable/ZkProgrammable.ts:103](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/zkProgrammable/ZkProgrammable.ts#L103)

##### Returns

`undefined` \| [`AreProofsEnabled`](../interfaces/AreProofsEnabled.md)

***

### zkProgram

#### Get Signature

> **get** **zkProgram**(): [`PlainZkProgram`](../interfaces/PlainZkProgram.md)\<`PublicInput`, `PublicOutput`\>[]

Defined in: [packages/common/src/zkProgrammable/ZkProgrammable.ts:113](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/zkProgrammable/ZkProgrammable.ts#L113)

##### Returns

[`PlainZkProgram`](../interfaces/PlainZkProgram.md)\<`PublicInput`, `PublicOutput`\>[]

## Methods

### compile()

> **compile**(`registry`): `Promise`\<`Record`\<`string`, [`CompileArtifact`](../interfaces/CompileArtifact.md)\>\>

Defined in: [packages/common/src/zkProgrammable/ZkProgrammable.ts:130](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/zkProgrammable/ZkProgrammable.ts#L130)

#### Parameters

##### registry

[`CompileRegistry`](CompileRegistry.md)

#### Returns

`Promise`\<`Record`\<`string`, [`CompileArtifact`](../interfaces/CompileArtifact.md)\>\>

***

### zkProgramFactory()

> `abstract` **zkProgramFactory**(): [`PlainZkProgram`](../interfaces/PlainZkProgram.md)\<`PublicInput`, `PublicOutput`\>[]

Defined in: [packages/common/src/zkProgrammable/ZkProgrammable.ts:105](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/zkProgrammable/ZkProgrammable.ts#L105)

#### Returns

[`PlainZkProgram`](../interfaces/PlainZkProgram.md)\<`PublicInput`, `PublicOutput`\>[]
