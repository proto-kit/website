---
title: BlockProverType
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / BlockProverType

# Interface: BlockProverType

Defined in: [packages/protocol/src/protocol/Protocol.ts:41](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/protocol/Protocol.ts#L41)

Used by various module sub-types that may need to be configured

## Extends

- [`ProtocolModule`](../classes/ProtocolModule.md).[`BlockProvable`](BlockProvable.md)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`NoConfig`](../../common/type-aliases/NoConfig.md)

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`ProtocolModule`](../classes/ProtocolModule.md).[`currentConfig`](../classes/ProtocolModule.md#currentconfig)

***

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

#### Inherited from

[`BlockProvable`](BlockProvable.md).[`merge`](BlockProvable.md#merge)

***

### protocol?

> `optional` **protocol**: [`ProtocolEnvironment`](ProtocolEnvironment.md)

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:14](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/protocol/ProtocolModule.ts#L14)

#### Inherited from

[`ProtocolModule`](../classes/ProtocolModule.md).[`protocol`](../classes/ProtocolModule.md#protocol)

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

#### Inherited from

[`BlockProvable`](BlockProvable.md).[`proveBlock`](BlockProvable.md#proveblock)

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

#### Inherited from

[`BlockProvable`](BlockProvable.md).[`proveTransaction`](BlockProvable.md#provetransaction)

***

### zkProgrammable

> **zkProgrammable**: [`ZkProgrammable`](../../common/classes/ZkProgrammable.md)\<[`BlockProverPublicInput`](../classes/BlockProverPublicInput.md), [`BlockProverPublicOutput`](../classes/BlockProverPublicOutput.md)\>

Defined in: packages/common/dist/zkProgrammable/ZkProgrammable.d.ts:38

#### Inherited from

[`BlockProvable`](BlockProvable.md).[`zkProgrammable`](BlockProvable.md#zkprogrammable)

## Accessors

### areProofsEnabled

#### Get Signature

> **get** **areProofsEnabled**(): `undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:16](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/protocol/ProtocolModule.ts#L16)

##### Returns

`undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

#### Inherited from

[`ProtocolModule`](../classes/ProtocolModule.md).[`areProofsEnabled`](../classes/ProtocolModule.md#areproofsenabled)

***

### config

#### Get Signature

> **get** **config**(): `Config`

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:18

##### Returns

`Config`

#### Set Signature

> **set** **config**(`config`): `void`

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:19

##### Parameters

###### config

`Config`

##### Returns

`void`

#### Inherited from

[`ProtocolModule`](../classes/ProtocolModule.md).[`config`](../classes/ProtocolModule.md#config)

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

[`BlockProvable`](BlockProvable.md).[`compile`](BlockProvable.md#compile)

***

### create()

> **create**(`childContainerProvider`): `void`

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:20](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/protocol/ProtocolModule.ts#L20)

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Inherited from

[`ProtocolModule`](../classes/ProtocolModule.md).[`create`](../classes/ProtocolModule.md#create)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:24](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/protocol/ProtocolModule.ts#L24)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`ProtocolModule`](../classes/ProtocolModule.md).[`start`](../classes/ProtocolModule.md#start)
