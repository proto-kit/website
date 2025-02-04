---
title: StateTransitionProver
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / StateTransitionProver

# Class: StateTransitionProver

Defined in: [packages/protocol/src/prover/statetransition/StateTransitionProver.ts:343](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/prover/statetransition/StateTransitionProver.ts#L343)

Used by various module sub-types that may need to be configured

## Extends

- [`ProtocolModule`](ProtocolModule.md)

## Implements

- [`StateTransitionProvable`](../interfaces/StateTransitionProvable.md)
- [`StateTransitionProverType`](../interfaces/StateTransitionProverType.md)
- [`CompilableModule`](../../common/interfaces/CompilableModule.md)

## Constructors

### new StateTransitionProver()

> **new StateTransitionProver**(): [`StateTransitionProver`](StateTransitionProver.md)

Defined in: [packages/protocol/src/prover/statetransition/StateTransitionProver.ts:352](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/prover/statetransition/StateTransitionProver.ts#L352)

#### Returns

[`StateTransitionProver`](StateTransitionProver.md)

#### Overrides

[`ProtocolModule`](ProtocolModule.md).[`constructor`](ProtocolModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`NoConfig`](../../common/type-aliases/NoConfig.md)

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Implementation of

[`StateTransitionProverType`](../interfaces/StateTransitionProverType.md).[`currentConfig`](../interfaces/StateTransitionProverType.md#currentconfig)

#### Inherited from

[`ProtocolModule`](ProtocolModule.md).[`currentConfig`](ProtocolModule.md#currentconfig)

***

### protocol?

> `optional` **protocol**: [`ProtocolEnvironment`](../interfaces/ProtocolEnvironment.md)

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:14](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/protocol/ProtocolModule.ts#L14)

#### Implementation of

[`StateTransitionProverType`](../interfaces/StateTransitionProverType.md).[`protocol`](../interfaces/StateTransitionProverType.md#protocol)

#### Inherited from

[`ProtocolModule`](ProtocolModule.md).[`protocol`](ProtocolModule.md#protocol)

***

### zkProgrammable

> **zkProgrammable**: [`StateTransitionProverProgrammable`](StateTransitionProverProgrammable.md)

Defined in: [packages/protocol/src/prover/statetransition/StateTransitionProver.ts:350](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/prover/statetransition/StateTransitionProver.ts#L350)

#### Implementation of

[`StateTransitionProverType`](../interfaces/StateTransitionProverType.md).[`zkProgrammable`](../interfaces/StateTransitionProverType.md#zkprogrammable)

## Accessors

### areProofsEnabled

#### Get Signature

> **get** **areProofsEnabled**(): `undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:16](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/protocol/ProtocolModule.ts#L16)

##### Returns

`undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

#### Implementation of

[`StateTransitionProverType`](../interfaces/StateTransitionProverType.md).[`areProofsEnabled`](../interfaces/StateTransitionProverType.md#areproofsenabled)

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

#### Implementation of

[`StateTransitionProverType`](../interfaces/StateTransitionProverType.md).[`config`](../interfaces/StateTransitionProverType.md#config)

#### Inherited from

[`ProtocolModule`](ProtocolModule.md).[`config`](ProtocolModule.md#config)

## Methods

### compile()

> **compile**(`registry`): `Promise`\<`void` \| [`ArtifactRecord`](../../common/type-aliases/ArtifactRecord.md)\>

Defined in: [packages/protocol/src/prover/statetransition/StateTransitionProver.ts:357](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/prover/statetransition/StateTransitionProver.ts#L357)

#### Parameters

##### registry

[`CompileRegistry`](../../common/classes/CompileRegistry.md)

#### Returns

`Promise`\<`void` \| [`ArtifactRecord`](../../common/type-aliases/ArtifactRecord.md)\>

#### Implementation of

[`CompilableModule`](../../common/interfaces/CompilableModule.md).[`compile`](../../common/interfaces/CompilableModule.md#compile)

***

### create()

> **create**(`childContainerProvider`): `void`

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:20](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/protocol/ProtocolModule.ts#L20)

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Implementation of

[`StateTransitionProverType`](../interfaces/StateTransitionProverType.md).[`create`](../interfaces/StateTransitionProverType.md#create)

#### Inherited from

[`ProtocolModule`](ProtocolModule.md).[`create`](ProtocolModule.md#create)

***

### merge()

> **merge**(`publicInput`, `proof1`, `proof2`): `Promise`\<[`StateTransitionProverPublicOutput`](StateTransitionProverPublicOutput.md)\>

Defined in: [packages/protocol/src/prover/statetransition/StateTransitionProver.ts:370](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/prover/statetransition/StateTransitionProver.ts#L370)

#### Parameters

##### publicInput

[`StateTransitionProverPublicInput`](StateTransitionProverPublicInput.md)

##### proof1

[`StateTransitionProof`](../type-aliases/StateTransitionProof.md)

##### proof2

[`StateTransitionProof`](../type-aliases/StateTransitionProof.md)

#### Returns

`Promise`\<[`StateTransitionProverPublicOutput`](StateTransitionProverPublicOutput.md)\>

#### Implementation of

[`StateTransitionProverType`](../interfaces/StateTransitionProverType.md).[`merge`](../interfaces/StateTransitionProverType.md#merge)

***

### runBatch()

> **runBatch**(`publicInput`, `batch`): `Promise`\<[`StateTransitionProverPublicOutput`](StateTransitionProverPublicOutput.md)\>

Defined in: [packages/protocol/src/prover/statetransition/StateTransitionProver.ts:363](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/prover/statetransition/StateTransitionProver.ts#L363)

#### Parameters

##### publicInput

[`StateTransitionProverPublicInput`](StateTransitionProverPublicInput.md)

##### batch

[`StateTransitionProvableBatch`](StateTransitionProvableBatch.md)

#### Returns

`Promise`\<[`StateTransitionProverPublicOutput`](StateTransitionProverPublicOutput.md)\>

#### Implementation of

[`StateTransitionProverType`](../interfaces/StateTransitionProverType.md).[`runBatch`](../interfaces/StateTransitionProverType.md#runbatch)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:24](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/protocol/ProtocolModule.ts#L24)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`StateTransitionProverType`](../interfaces/StateTransitionProverType.md).[`start`](../interfaces/StateTransitionProverType.md#start)

#### Inherited from

[`ProtocolModule`](ProtocolModule.md).[`start`](ProtocolModule.md#start)
