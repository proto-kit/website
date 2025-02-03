---
title: BlockProver
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / BlockProver

# Class: BlockProver

Defined in: [packages/protocol/src/prover/block/BlockProver.ts:907](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/prover/block/BlockProver.ts#L907)

BlockProver class, which aggregates a AppChainProof and
a StateTransitionProof into a single BlockProof, that can
then be merged to be committed to the base-layer contract

## Extends

- [`ProtocolModule`](ProtocolModule.md)

## Implements

- [`BlockProvable`](../interfaces/BlockProvable.md)
- [`CompilableModule`](../../common/interfaces/CompilableModule.md)

## Constructors

### new BlockProver()

> **new BlockProver**(`stateTransitionProver`, `runtime`, `transactionHooks`, `blockHooks`, `verificationKeyService`): [`BlockProver`](BlockProver.md)

Defined in: [packages/protocol/src/prover/block/BlockProver.ts:913](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/prover/block/BlockProver.ts#L913)

#### Parameters

##### stateTransitionProver

[`WithZkProgrammable`](../../common/interfaces/WithZkProgrammable.md)\<[`StateTransitionProverPublicInput`](StateTransitionProverPublicInput.md), [`StateTransitionProverPublicOutput`](StateTransitionProverPublicOutput.md)\> & [`StateTransitionProvable`](../interfaces/StateTransitionProvable.md)

##### runtime

[`WithZkProgrammable`](../../common/interfaces/WithZkProgrammable.md)\<[`MethodPublicOutput`](MethodPublicOutput.md)\> & [`CompilableModule`](../../common/interfaces/CompilableModule.md)

##### transactionHooks

[`ProvableTransactionHook`](ProvableTransactionHook.md)\<`unknown`\>[]

##### blockHooks

[`ProvableBlockHook`](ProvableBlockHook.md)\<`unknown`\>[]

##### verificationKeyService

[`RuntimeVerificationKeyRootService`](RuntimeVerificationKeyRootService.md)

#### Returns

[`BlockProver`](BlockProver.md)

#### Overrides

[`ProtocolModule`](ProtocolModule.md).[`constructor`](ProtocolModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`NoConfig`](../../common/type-aliases/NoConfig.md)

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`ProtocolModule`](ProtocolModule.md).[`currentConfig`](ProtocolModule.md#currentconfig)

***

### protocol?

> `optional` **protocol**: [`ProtocolEnvironment`](../interfaces/ProtocolEnvironment.md)

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:14](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/protocol/ProtocolModule.ts#L14)

#### Inherited from

[`ProtocolModule`](ProtocolModule.md).[`protocol`](ProtocolModule.md#protocol)

***

### runtime

> `readonly` **runtime**: [`WithZkProgrammable`](../../common/interfaces/WithZkProgrammable.md)\<[`MethodPublicOutput`](MethodPublicOutput.md)\> & [`CompilableModule`](../../common/interfaces/CompilableModule.md)

Defined in: [packages/protocol/src/prover/block/BlockProver.ts:921](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/prover/block/BlockProver.ts#L921)

***

### stateTransitionProver

> `readonly` **stateTransitionProver**: [`WithZkProgrammable`](../../common/interfaces/WithZkProgrammable.md)\<[`StateTransitionProverPublicInput`](StateTransitionProverPublicInput.md), [`StateTransitionProverPublicOutput`](StateTransitionProverPublicOutput.md)\> & [`StateTransitionProvable`](../interfaces/StateTransitionProvable.md)

Defined in: [packages/protocol/src/prover/block/BlockProver.ts:915](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/prover/block/BlockProver.ts#L915)

***

### zkProgrammable

> **zkProgrammable**: [`BlockProverProgrammable`](BlockProverProgrammable.md)

Defined in: [packages/protocol/src/prover/block/BlockProver.ts:911](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/prover/block/BlockProver.ts#L911)

#### Implementation of

[`BlockProvable`](../interfaces/BlockProvable.md).[`zkProgrammable`](../interfaces/BlockProvable.md#zkprogrammable)

## Accessors

### areProofsEnabled

#### Get Signature

> **get** **areProofsEnabled**(): `undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:16](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/protocol/ProtocolModule.ts#L16)

##### Returns

`undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

#### Inherited from

[`ProtocolModule`](ProtocolModule.md).[`areProofsEnabled`](ProtocolModule.md#areproofsenabled)

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

[`ProtocolModule`](ProtocolModule.md).[`config`](ProtocolModule.md#config)

## Methods

### compile()

> **compile**(`registry`): `Promise`\<`undefined` \| `Record`\<`string`, [`CompileArtifact`](../../common/interfaces/CompileArtifact.md)\>\>

Defined in: [packages/protocol/src/prover/block/BlockProver.ts:940](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/prover/block/BlockProver.ts#L940)

#### Parameters

##### registry

[`CompileRegistry`](../../common/classes/CompileRegistry.md)

#### Returns

`Promise`\<`undefined` \| `Record`\<`string`, [`CompileArtifact`](../../common/interfaces/CompileArtifact.md)\>\>

#### Implementation of

[`CompilableModule`](../../common/interfaces/CompilableModule.md).[`compile`](../../common/interfaces/CompilableModule.md#compile)

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

[`ProtocolModule`](ProtocolModule.md).[`create`](ProtocolModule.md#create)

***

### merge()

> **merge**(`publicInput`, `proof1`, `proof2`): `Promise`\<[`BlockProverPublicOutput`](BlockProverPublicOutput.md)\>

Defined in: [packages/protocol/src/prover/block/BlockProver.ts:983](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/prover/block/BlockProver.ts#L983)

#### Parameters

##### publicInput

[`BlockProverPublicInput`](BlockProverPublicInput.md)

##### proof1

[`BlockProverProof`](../type-aliases/BlockProverProof.md)

##### proof2

[`BlockProverProof`](../type-aliases/BlockProverProof.md)

#### Returns

`Promise`\<[`BlockProverPublicOutput`](BlockProverPublicOutput.md)\>

#### Implementation of

[`BlockProvable`](../interfaces/BlockProvable.md).[`merge`](../interfaces/BlockProvable.md#merge)

***

### proveBlock()

> **proveBlock**(`publicInput`, `networkState`, `blockWitness`, `transactionProof`): `Promise`\<[`BlockProverPublicOutput`](BlockProverPublicOutput.md)\>

Defined in: [packages/protocol/src/prover/block/BlockProver.ts:967](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/prover/block/BlockProver.ts#L967)

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

#### Implementation of

[`BlockProvable`](../interfaces/BlockProvable.md).[`proveBlock`](../interfaces/BlockProvable.md#proveblock)

***

### proveTransaction()

> **proveTransaction**(`publicInput`, `stateProof`, `appProof`, `executionData`, `verificationKeyAttestation`): `Promise`\<[`BlockProverPublicOutput`](BlockProverPublicOutput.md)\>

Defined in: [packages/protocol/src/prover/block/BlockProver.ts:951](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/prover/block/BlockProver.ts#L951)

#### Parameters

##### publicInput

[`BlockProverPublicInput`](BlockProverPublicInput.md)

##### stateProof

[`StateTransitionProof`](../type-aliases/StateTransitionProof.md)

##### appProof

[`DynamicRuntimeProof`](DynamicRuntimeProof.md)

##### executionData

[`BlockProverExecutionData`](BlockProverExecutionData.md)

##### verificationKeyAttestation

[`RuntimeVerificationKeyAttestation`](RuntimeVerificationKeyAttestation.md)

#### Returns

`Promise`\<[`BlockProverPublicOutput`](BlockProverPublicOutput.md)\>

#### Implementation of

[`BlockProvable`](../interfaces/BlockProvable.md).[`proveTransaction`](../interfaces/BlockProvable.md#provetransaction)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:24](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/protocol/ProtocolModule.ts#L24)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`ProtocolModule`](ProtocolModule.md).[`start`](ProtocolModule.md#start)
