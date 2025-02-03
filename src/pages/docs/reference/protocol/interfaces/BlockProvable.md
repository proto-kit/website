---
title: BlockProvable
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / BlockProvable

# Interface: BlockProvable

Defined in: [packages/protocol/src/prover/block/BlockProvable.ts:75](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/prover/block/BlockProvable.ts#L75)

## Extends

- [`WithZkProgrammable`](../../common/interfaces/WithZkProgrammable.md)\<[`BlockProverPublicInput`](../classes/BlockProverPublicInput.md), [`BlockProverPublicOutput`](../classes/BlockProverPublicOutput.md)\>.[`CompilableModule`](../../common/interfaces/CompilableModule.md)

## Extended by

- [`BlockProverType`](BlockProverType.md)

## Properties

### merge()

> **merge**: (`publicInput`, `proof1`, `proof2`) => `Promise`\<[`BlockProverPublicOutput`](../classes/BlockProverPublicOutput.md)\>

Defined in: [packages/protocol/src/prover/block/BlockProvable.ts:94](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/prover/block/BlockProvable.ts#L94)

#### Parameters

##### publicInput

[`BlockProverPublicInput`](../classes/BlockProverPublicInput.md)

##### proof1

[`BlockProverProof`](../type-aliases/BlockProverProof.md)

##### proof2

[`BlockProverProof`](../type-aliases/BlockProverProof.md)

#### Returns

`Promise`\<[`BlockProverPublicOutput`](../classes/BlockProverPublicOutput.md)\>

***

### proveBlock()

> **proveBlock**: (`publicInput`, `networkState`, `blockWitness`, `transactionProof`) => `Promise`\<[`BlockProverPublicOutput`](../classes/BlockProverPublicOutput.md)\>

Defined in: [packages/protocol/src/prover/block/BlockProvable.ts:86](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/prover/block/BlockProvable.ts#L86)

#### Parameters

##### publicInput

[`BlockProverPublicInput`](../classes/BlockProverPublicInput.md)

##### networkState

[`NetworkState`](../classes/NetworkState.md)

##### blockWitness

[`BlockHashMerkleTreeWitness`](../classes/BlockHashMerkleTreeWitness.md)

##### transactionProof

[`BlockProverProof`](../type-aliases/BlockProverProof.md)

#### Returns

`Promise`\<[`BlockProverPublicOutput`](../classes/BlockProverPublicOutput.md)\>

***

### proveTransaction()

> **proveTransaction**: (`publicInput`, `stateProof`, `appProof`, `executionData`, `verificationKeyAttestation`) => `Promise`\<[`BlockProverPublicOutput`](../classes/BlockProverPublicOutput.md)\>

Defined in: [packages/protocol/src/prover/block/BlockProvable.ts:78](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/prover/block/BlockProvable.ts#L78)

#### Parameters

##### publicInput

[`BlockProverPublicInput`](../classes/BlockProverPublicInput.md)

##### stateProof

[`StateTransitionProof`](../type-aliases/StateTransitionProof.md)

##### appProof

[`DynamicRuntimeProof`](../classes/DynamicRuntimeProof.md)

##### executionData

[`BlockProverExecutionData`](../classes/BlockProverExecutionData.md)

##### verificationKeyAttestation

[`RuntimeVerificationKeyAttestation`](../classes/RuntimeVerificationKeyAttestation.md)

#### Returns

`Promise`\<[`BlockProverPublicOutput`](../classes/BlockProverPublicOutput.md)\>

***

### zkProgrammable

> **zkProgrammable**: [`ZkProgrammable`](../../common/classes/ZkProgrammable.md)\<[`BlockProverPublicInput`](../classes/BlockProverPublicInput.md), [`BlockProverPublicOutput`](../classes/BlockProverPublicOutput.md)\>

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
