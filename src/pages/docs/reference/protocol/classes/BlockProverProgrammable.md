---
title: BlockProverProgrammable
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / BlockProverProgrammable

# Class: BlockProverProgrammable

Defined in: [packages/protocol/src/prover/block/BlockProver.ts:135](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/block/BlockProver.ts#L135)

## Extends

- [`ZkProgrammable`](../../common/classes/ZkProgrammable.md)\<[`BlockProverPublicInput`](BlockProverPublicInput.md), [`BlockProverPublicOutput`](BlockProverPublicOutput.md)\>

## Constructors

### new BlockProverProgrammable()

> **new BlockProverProgrammable**(`prover`, `stateTransitionProver`, `runtime`, `transactionHooks`, `blockHooks`, `verificationKeyService`): [`BlockProverProgrammable`](BlockProverProgrammable.md)

Defined in: [packages/protocol/src/prover/block/BlockProver.ts:139](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/block/BlockProver.ts#L139)

#### Parameters

##### prover

[`BlockProver`](BlockProver.md)

##### stateTransitionProver

[`ZkProgrammable`](../../common/classes/ZkProgrammable.md)\<[`StateTransitionProverPublicInput`](StateTransitionProverPublicInput.md), [`StateTransitionProverPublicOutput`](StateTransitionProverPublicOutput.md)\>

##### runtime

[`ZkProgrammable`](../../common/classes/ZkProgrammable.md)\<[`MethodPublicOutput`](MethodPublicOutput.md)\>

##### transactionHooks

[`ProvableTransactionHook`](ProvableTransactionHook.md)\<`unknown`\>[]

##### blockHooks

[`ProvableBlockHook`](ProvableBlockHook.md)\<`unknown`\>[]

##### verificationKeyService

[`MinimalVKTreeService`](../interfaces/MinimalVKTreeService.md)

#### Returns

[`BlockProverProgrammable`](BlockProverProgrammable.md)

#### Overrides

[`ZkProgrammable`](../../common/classes/ZkProgrammable.md).[`constructor`](../../common/classes/ZkProgrammable.md#constructors)

## Properties

### name

> **name**: `string` = `"BlockProver"`

Defined in: [packages/protocol/src/prover/block/BlockProver.ts:153](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/block/BlockProver.ts#L153)

***

### runtime

> `readonly` **runtime**: [`ZkProgrammable`](../../common/classes/ZkProgrammable.md)\<[`MethodPublicOutput`](MethodPublicOutput.md)\>

Defined in: [packages/protocol/src/prover/block/BlockProver.ts:145](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/block/BlockProver.ts#L145)

***

### stateTransitionProver

> `readonly` **stateTransitionProver**: [`ZkProgrammable`](../../common/classes/ZkProgrammable.md)\<[`StateTransitionProverPublicInput`](StateTransitionProverPublicInput.md), [`StateTransitionProverPublicOutput`](StateTransitionProverPublicOutput.md)\>

Defined in: [packages/protocol/src/prover/block/BlockProver.ts:141](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/block/BlockProver.ts#L141)

## Accessors

### areProofsEnabled

#### Get Signature

> **get** **areProofsEnabled**(): `undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

Defined in: [packages/protocol/src/prover/block/BlockProver.ts:155](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/block/BlockProver.ts#L155)

##### Returns

`undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

#### Overrides

[`ZkProgrammable`](../../common/classes/ZkProgrammable.md).[`areProofsEnabled`](../../common/classes/ZkProgrammable.md#areproofsenabled)

***

### zkProgram

#### Get Signature

> **get** **zkProgram**(): [`PlainZkProgram`](../../common/interfaces/PlainZkProgram.md)\<`PublicInput`, `PublicOutput`\>[]

Defined in: packages/common/dist/zkProgrammable/ZkProgrammable.d.ts:34

##### Returns

[`PlainZkProgram`](../../common/interfaces/PlainZkProgram.md)\<`PublicInput`, `PublicOutput`\>[]

#### Inherited from

[`ZkProgrammable`](../../common/classes/ZkProgrammable.md).[`zkProgram`](../../common/classes/ZkProgrammable.md#zkprogram)

## Methods

### applyTransaction()

> **applyTransaction**(`state`, `stateTransitionProof`, `runtimeProof`, `executionData`, `verificationKey`): `Promise`\<[`BlockProverState`](../interfaces/BlockProverState.md)\>

Defined in: [packages/protocol/src/prover/block/BlockProver.ts:170](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/block/BlockProver.ts#L170)

Applies and checks the two proofs and applies the corresponding state
changes to the given state

#### Parameters

##### state

[`BlockProverState`](../interfaces/BlockProverState.md)

The from-state of the BlockProver

##### stateTransitionProof

`Proof`\<[`StateTransitionProverPublicInput`](StateTransitionProverPublicInput.md), [`StateTransitionProverPublicOutput`](StateTransitionProverPublicOutput.md)\>

##### runtimeProof

[`DynamicRuntimeProof`](DynamicRuntimeProof.md)

##### executionData

[`BlockProverExecutionData`](BlockProverExecutionData.md)

##### verificationKey

`VerificationKey`

#### Returns

`Promise`\<[`BlockProverState`](../interfaces/BlockProverState.md)\>

The new BlockProver-state to be used as public output

***

### assertProtocolTransitions()

> **assertProtocolTransitions**(`stateTransitionProof`, `executionData`, `runtimeProof`): `Promise`\<`void`\>

Defined in: [packages/protocol/src/prover/block/BlockProver.ts:264](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/block/BlockProver.ts#L264)

#### Parameters

##### stateTransitionProof

`Proof`\<[`StateTransitionProverPublicInput`](StateTransitionProverPublicInput.md), [`StateTransitionProverPublicOutput`](StateTransitionProverPublicOutput.md)\>

##### executionData

[`BlockProverExecutionData`](BlockProverExecutionData.md)

##### runtimeProof

`DynamicProof`\<`void`, [`MethodPublicOutput`](MethodPublicOutput.md)\>

#### Returns

`Promise`\<`void`\>

***

### compile()

> **compile**(`registry`): `Promise`\<`Record`\<`string`, [`CompileArtifact`](../../common/interfaces/CompileArtifact.md)\>\>

Defined in: packages/common/dist/zkProgrammable/ZkProgrammable.d.ts:35

#### Parameters

##### registry

[`CompileRegistry`](../../common/classes/CompileRegistry.md)

#### Returns

`Promise`\<`Record`\<`string`, [`CompileArtifact`](../../common/interfaces/CompileArtifact.md)\>\>

#### Inherited from

[`ZkProgrammable`](../../common/classes/ZkProgrammable.md).[`compile`](../../common/classes/ZkProgrammable.md#compile)

***

### merge()

> **merge**(`publicInput`, `proof1`, `proof2`): `Promise`\<[`BlockProverPublicOutput`](BlockProverPublicOutput.md)\>

Defined in: [packages/protocol/src/prover/block/BlockProver.ts:656](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/block/BlockProver.ts#L656)

#### Parameters

##### publicInput

[`BlockProverPublicInput`](BlockProverPublicInput.md)

##### proof1

[`BlockProverProof`](../type-aliases/BlockProverProof.md)

##### proof2

[`BlockProverProof`](../type-aliases/BlockProverProof.md)

#### Returns

`Promise`\<[`BlockProverPublicOutput`](BlockProverPublicOutput.md)\>

***

### proveBlock()

> **proveBlock**(`publicInput`, `networkState`, `blockWitness`, `transactionProof`): `Promise`\<[`BlockProverPublicOutput`](BlockProverPublicOutput.md)\>

Defined in: [packages/protocol/src/prover/block/BlockProver.ts:482](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/block/BlockProver.ts#L482)

#### Parameters

##### publicInput

[`BlockProverPublicInput`](BlockProverPublicInput.md)

##### networkState

[`NetworkState`](NetworkState.md)

##### blockWitness

[`BlockHashMerkleTreeWitness`](BlockHashMerkleTreeWitness.md)

##### transactionProof

[`BlockProverProof`](../type-aliases/BlockProverProof.md)

#### Returns

`Promise`\<[`BlockProverPublicOutput`](BlockProverPublicOutput.md)\>

***

### proveTransaction()

> **proveTransaction**(`publicInput`, `stateProof`, `runtimeProof`, `executionData`, `verificationKeyWitness`): `Promise`\<[`BlockProverPublicOutput`](BlockProverPublicOutput.md)\>

Defined in: [packages/protocol/src/prover/block/BlockProver.ts:406](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/block/BlockProver.ts#L406)

#### Parameters

##### publicInput

[`BlockProverPublicInput`](BlockProverPublicInput.md)

##### stateProof

[`StateTransitionProof`](../type-aliases/StateTransitionProof.md)

##### runtimeProof

[`DynamicRuntimeProof`](DynamicRuntimeProof.md)

##### executionData

[`BlockProverExecutionData`](BlockProverExecutionData.md)

##### verificationKeyWitness

[`RuntimeVerificationKeyAttestation`](RuntimeVerificationKeyAttestation.md)

#### Returns

`Promise`\<[`BlockProverPublicOutput`](BlockProverPublicOutput.md)\>

***

### zkProgramFactory()

> **zkProgramFactory**(): [`PlainZkProgram`](../../common/interfaces/PlainZkProgram.md)\<[`BlockProverPublicInput`](BlockProverPublicInput.md), [`BlockProverPublicOutput`](BlockProverPublicOutput.md)\>[]

Defined in: [packages/protocol/src/prover/block/BlockProver.ts:798](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/block/BlockProver.ts#L798)

Creates the BlockProver ZkProgram.
Recursive linking of proofs is done via the previously
injected StateTransitionProver and the required AppChainProof class

#### Returns

[`PlainZkProgram`](../../common/interfaces/PlainZkProgram.md)\<[`BlockProverPublicInput`](BlockProverPublicInput.md), [`BlockProverPublicOutput`](BlockProverPublicOutput.md)\>[]

#### Overrides

[`ZkProgrammable`](../../common/classes/ZkProgrammable.md).[`zkProgramFactory`](../../common/classes/ZkProgrammable.md#zkprogramfactory)
