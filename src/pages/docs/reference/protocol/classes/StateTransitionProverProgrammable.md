---
title: StateTransitionProverProgrammable
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / StateTransitionProverProgrammable

# Class: StateTransitionProverProgrammable

Defined in: [packages/protocol/src/prover/statetransition/StateTransitionProver.ts:74](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/statetransition/StateTransitionProver.ts#L74)

StateTransitionProver is the prover that proves the application of some state
transitions and checks and updates their merkle-tree entries

## Extends

- [`ZkProgrammable`](../../common/classes/ZkProgrammable.md)\<[`StateTransitionProverPublicInput`](StateTransitionProverPublicInput.md), [`StateTransitionProverPublicOutput`](StateTransitionProverPublicOutput.md)\>

## Constructors

### new StateTransitionProverProgrammable()

> **new StateTransitionProverProgrammable**(`stateTransitionProver`): [`StateTransitionProverProgrammable`](StateTransitionProverProgrammable.md)

Defined in: [packages/protocol/src/prover/statetransition/StateTransitionProver.ts:78](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/statetransition/StateTransitionProver.ts#L78)

#### Parameters

##### stateTransitionProver

[`StateTransitionProver`](StateTransitionProver.md)

#### Returns

[`StateTransitionProverProgrammable`](StateTransitionProverProgrammable.md)

#### Overrides

[`ZkProgrammable`](../../common/classes/ZkProgrammable.md).[`constructor`](../../common/classes/ZkProgrammable.md#constructors)

## Accessors

### areProofsEnabled

#### Get Signature

> **get** **areProofsEnabled**(): `undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

Defined in: [packages/protocol/src/prover/statetransition/StateTransitionProver.ts:84](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/statetransition/StateTransitionProver.ts#L84)

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

### applyTransition()

> **applyTransition**(`state`, `transition`, `type`, `merkleWitness`, `index`): `void`

Defined in: [packages/protocol/src/prover/statetransition/StateTransitionProver.ts:197](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/statetransition/StateTransitionProver.ts#L197)

Applies a single state transition to the given state
and mutates it in place

#### Parameters

##### state

`StateTransitionProverExecutionState`

##### transition

[`ProvableStateTransition`](ProvableStateTransition.md)

##### type

[`ProvableStateTransitionType`](ProvableStateTransitionType.md)

##### merkleWitness

[`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md)

##### index

`number` = `0`

#### Returns

`void`

***

### applyTransitions()

> **applyTransitions**(`stateRoot`, `protocolStateRoot`, `stateTransitionCommitmentFrom`, `protocolTransitionCommitmentFrom`, `transitionBatch`): `StateTransitionProverExecutionState`

Defined in: [packages/protocol/src/prover/statetransition/StateTransitionProver.ts:151](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/statetransition/StateTransitionProver.ts#L151)

Applies the state transitions to the current stateRoot
and returns the new prover state

#### Parameters

##### stateRoot

`Field`

##### protocolStateRoot

`Field`

##### stateTransitionCommitmentFrom

`Field`

##### protocolTransitionCommitmentFrom

`Field`

##### transitionBatch

[`StateTransitionProvableBatch`](StateTransitionProvableBatch.md)

#### Returns

`StateTransitionProverExecutionState`

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

> **merge**(`publicInput`, `proof1`, `proof2`): `Promise`\<[`StateTransitionProverPublicOutput`](StateTransitionProverPublicOutput.md)\>

Defined in: [packages/protocol/src/prover/statetransition/StateTransitionProver.ts:267](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/statetransition/StateTransitionProver.ts#L267)

#### Parameters

##### publicInput

[`StateTransitionProverPublicInput`](StateTransitionProverPublicInput.md)

##### proof1

[`StateTransitionProof`](../type-aliases/StateTransitionProof.md)

##### proof2

[`StateTransitionProof`](../type-aliases/StateTransitionProof.md)

#### Returns

`Promise`\<[`StateTransitionProverPublicOutput`](StateTransitionProverPublicOutput.md)\>

***

### runBatch()

> **runBatch**(`publicInput`, `batch`): `Promise`\<[`StateTransitionProverPublicOutput`](StateTransitionProverPublicOutput.md)\>

Defined in: [packages/protocol/src/prover/statetransition/StateTransitionProver.ts:246](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/statetransition/StateTransitionProver.ts#L246)

Applies a whole batch of StateTransitions at once

#### Parameters

##### publicInput

[`StateTransitionProverPublicInput`](StateTransitionProverPublicInput.md)

##### batch

[`StateTransitionProvableBatch`](StateTransitionProvableBatch.md)

#### Returns

`Promise`\<[`StateTransitionProverPublicOutput`](StateTransitionProverPublicOutput.md)\>

***

### zkProgramFactory()

> **zkProgramFactory**(): [`PlainZkProgram`](../../common/interfaces/PlainZkProgram.md)\<[`StateTransitionProverPublicInput`](StateTransitionProverPublicInput.md), [`StateTransitionProverPublicOutput`](StateTransitionProverPublicOutput.md)\>[]

Defined in: [packages/protocol/src/prover/statetransition/StateTransitionProver.ts:88](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/statetransition/StateTransitionProver.ts#L88)

#### Returns

[`PlainZkProgram`](../../common/interfaces/PlainZkProgram.md)\<[`StateTransitionProverPublicInput`](StateTransitionProverPublicInput.md), [`StateTransitionProverPublicOutput`](StateTransitionProverPublicOutput.md)\>[]

#### Overrides

[`ZkProgrammable`](../../common/classes/ZkProgrammable.md).[`zkProgramFactory`](../../common/classes/ZkProgrammable.md#zkprogramfactory)
