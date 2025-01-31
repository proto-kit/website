---
title: StateTransitionProvable
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / StateTransitionProvable

# Interface: StateTransitionProvable

Defined in: [packages/protocol/src/prover/statetransition/StateTransitionProvable.ts:25](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/statetransition/StateTransitionProvable.ts#L25)

## Extends

- [`WithZkProgrammable`](../../common/interfaces/WithZkProgrammable.md)\<[`StateTransitionProverPublicInput`](../classes/StateTransitionProverPublicInput.md), [`StateTransitionProverPublicOutput`](../classes/StateTransitionProverPublicOutput.md)\>.[`CompilableModule`](../../common/interfaces/CompilableModule.md)

## Extended by

- [`StateTransitionProverType`](StateTransitionProverType.md)

## Properties

### merge()

> **merge**: (`publicInput`, `proof1`, `proof2`) => `Promise`\<[`StateTransitionProverPublicOutput`](../classes/StateTransitionProverPublicOutput.md)\>

Defined in: [packages/protocol/src/prover/statetransition/StateTransitionProvable.ts:36](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/statetransition/StateTransitionProvable.ts#L36)

#### Parameters

##### publicInput

[`StateTransitionProverPublicInput`](../classes/StateTransitionProverPublicInput.md)

##### proof1

[`StateTransitionProof`](../type-aliases/StateTransitionProof.md)

##### proof2

[`StateTransitionProof`](../type-aliases/StateTransitionProof.md)

#### Returns

`Promise`\<[`StateTransitionProverPublicOutput`](../classes/StateTransitionProverPublicOutput.md)\>

***

### runBatch()

> **runBatch**: (`publicInput`, `batch`) => `Promise`\<[`StateTransitionProverPublicOutput`](../classes/StateTransitionProverPublicOutput.md)\>

Defined in: [packages/protocol/src/prover/statetransition/StateTransitionProvable.ts:31](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/prover/statetransition/StateTransitionProvable.ts#L31)

#### Parameters

##### publicInput

[`StateTransitionProverPublicInput`](../classes/StateTransitionProverPublicInput.md)

##### batch

[`StateTransitionProvableBatch`](../classes/StateTransitionProvableBatch.md)

#### Returns

`Promise`\<[`StateTransitionProverPublicOutput`](../classes/StateTransitionProverPublicOutput.md)\>

***

### zkProgrammable

> **zkProgrammable**: [`ZkProgrammable`](../../common/classes/ZkProgrammable.md)\<[`StateTransitionProverPublicInput`](../classes/StateTransitionProverPublicInput.md), [`StateTransitionProverPublicOutput`](../classes/StateTransitionProverPublicOutput.md)\>

Defined in: packages/common/dist/zkProgrammable/ZkProgrammable.d.ts:38

#### Inherited from

[`WithZkProgrammable`](../../common/interfaces/WithZkProgrammable.md).[`zkProgrammable`](../../common/interfaces/WithZkProgrammable.md#zkprogrammable)

## Methods

### compile()

> **compile**(`registry`): `Promise`\<`void` \| [`ArtifactRecord`](../../common/type-aliases/ArtifactRecord.md)\>

Defined in: packages/common/dist/compiling/CompilableModule.d.ts:4

#### Parameters

##### registry

[`CompileRegistry`](../../common/classes/CompileRegistry.md)

#### Returns

`Promise`\<`void` \| [`ArtifactRecord`](../../common/type-aliases/ArtifactRecord.md)\>

#### Inherited from

[`CompilableModule`](../../common/interfaces/CompilableModule.md).[`compile`](../../common/interfaces/CompilableModule.md#compile)
