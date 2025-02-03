---
title: StateTransitionProverType
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / StateTransitionProverType

# Interface: StateTransitionProverType

Defined in: [packages/protocol/src/protocol/Protocol.ts:43](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/protocol/Protocol.ts#L43)

Used by various module sub-types that may need to be configured

## Extends

- [`ProtocolModule`](../classes/ProtocolModule.md).[`StateTransitionProvable`](StateTransitionProvable.md)

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

> **merge**: (`publicInput`, `proof1`, `proof2`) => `Promise`\<[`StateTransitionProverPublicOutput`](../classes/StateTransitionProverPublicOutput.md)\>

Defined in: [packages/protocol/src/prover/statetransition/StateTransitionProvable.ts:36](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/prover/statetransition/StateTransitionProvable.ts#L36)

#### Parameters

##### publicInput

[`StateTransitionProverPublicInput`](../classes/StateTransitionProverPublicInput.md)

##### proof1

[`StateTransitionProof`](../type-aliases/StateTransitionProof.md)

##### proof2

[`StateTransitionProof`](../type-aliases/StateTransitionProof.md)

#### Returns

`Promise`\<[`StateTransitionProverPublicOutput`](../classes/StateTransitionProverPublicOutput.md)\>

#### Inherited from

[`StateTransitionProvable`](StateTransitionProvable.md).[`merge`](StateTransitionProvable.md#merge)

***

### protocol?

> `optional` **protocol**: [`ProtocolEnvironment`](ProtocolEnvironment.md)

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:14](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/protocol/ProtocolModule.ts#L14)

#### Inherited from

[`ProtocolModule`](../classes/ProtocolModule.md).[`protocol`](../classes/ProtocolModule.md#protocol)

***

### runBatch()

> **runBatch**: (`publicInput`, `batch`) => `Promise`\<[`StateTransitionProverPublicOutput`](../classes/StateTransitionProverPublicOutput.md)\>

Defined in: [packages/protocol/src/prover/statetransition/StateTransitionProvable.ts:31](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/prover/statetransition/StateTransitionProvable.ts#L31)

#### Parameters

##### publicInput

[`StateTransitionProverPublicInput`](../classes/StateTransitionProverPublicInput.md)

##### batch

[`StateTransitionProvableBatch`](../classes/StateTransitionProvableBatch.md)

#### Returns

`Promise`\<[`StateTransitionProverPublicOutput`](../classes/StateTransitionProverPublicOutput.md)\>

#### Inherited from

[`StateTransitionProvable`](StateTransitionProvable.md).[`runBatch`](StateTransitionProvable.md#runbatch)

***

### zkProgrammable

> **zkProgrammable**: [`ZkProgrammable`](../../common/classes/ZkProgrammable.md)\<[`StateTransitionProverPublicInput`](../classes/StateTransitionProverPublicInput.md), [`StateTransitionProverPublicOutput`](../classes/StateTransitionProverPublicOutput.md)\>

Defined in: packages/common/dist/zkProgrammable/ZkProgrammable.d.ts:38

#### Inherited from

[`StateTransitionProvable`](StateTransitionProvable.md).[`zkProgrammable`](StateTransitionProvable.md#zkprogrammable)

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

[`StateTransitionProvable`](StateTransitionProvable.md).[`compile`](StateTransitionProvable.md#compile)

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
