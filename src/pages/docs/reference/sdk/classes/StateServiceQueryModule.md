---
title: StateServiceQueryModule
---

[**@proto-kit/sdk**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sdk](../README.md) / StateServiceQueryModule

# Class: StateServiceQueryModule

Defined in: [sdk/src/query/StateServiceQueryModule.ts:16](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sdk/src/query/StateServiceQueryModule.ts#L16)

Used by various module sub-types that may need to be configured

## Extends

- [`AppChainModule`](AppChainModule.md)

## Implements

- [`QueryTransportModule`](../../sequencer/interfaces/QueryTransportModule.md)

## Constructors

### new StateServiceQueryModule()

> **new StateServiceQueryModule**(`sequencer`): [`StateServiceQueryModule`](StateServiceQueryModule.md)

Defined in: [sdk/src/query/StateServiceQueryModule.ts:20](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sdk/src/query/StateServiceQueryModule.ts#L20)

#### Parameters

##### sequencer

[`Sequencer`](../../sequencer/classes/Sequencer.md)\<[`SequencerModulesRecord`](../../sequencer/type-aliases/SequencerModulesRecord.md)\>

#### Returns

[`StateServiceQueryModule`](StateServiceQueryModule.md)

#### Overrides

[`AppChainModule`](AppChainModule.md).[`constructor`](AppChainModule.md#constructors)

## Properties

### appChain?

> `optional` **appChain**: [`AppChain`](AppChain.md)\<[`RuntimeModulesRecord`](../../module/type-aliases/RuntimeModulesRecord.md), [`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md) & [`ProtocolModulesRecord`](../../protocol/type-aliases/ProtocolModulesRecord.md), [`SequencerModulesRecord`](../../sequencer/type-aliases/SequencerModulesRecord.md), [`AppChainModulesRecord`](../type-aliases/AppChainModulesRecord.md)\>

Defined in: [sdk/src/appChain/AppChainModule.ts:18](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sdk/src/appChain/AppChainModule.ts#L18)

#### Inherited from

[`AppChainModule`](AppChainModule.md).[`appChain`](AppChainModule.md#appchain)

***

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`NoConfig`](../../common/type-aliases/NoConfig.md)

Defined in: common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`AppChainModule`](AppChainModule.md).[`currentConfig`](AppChainModule.md#currentconfig)

***

### sequencer

> **sequencer**: [`Sequencer`](../../sequencer/classes/Sequencer.md)\<[`SequencerModulesRecord`](../../sequencer/type-aliases/SequencerModulesRecord.md)\>

Defined in: [sdk/src/query/StateServiceQueryModule.ts:21](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sdk/src/query/StateServiceQueryModule.ts#L21)

***

### presets

> `static` **presets**: [`Presets`](../../common/type-aliases/Presets.md)\<`unknown`\> = `{}`

Defined in: [sdk/src/appChain/AppChainModule.ts:16](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sdk/src/appChain/AppChainModule.ts#L16)

#### Inherited from

[`AppChainModule`](AppChainModule.md).[`presets`](AppChainModule.md#presets)

## Accessors

### asyncStateService

#### Get Signature

> **get** **asyncStateService**(): [`AsyncStateService`](../../sequencer/interfaces/AsyncStateService.md)

Defined in: [sdk/src/query/StateServiceQueryModule.ts:26](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sdk/src/query/StateServiceQueryModule.ts#L26)

##### Returns

[`AsyncStateService`](../../sequencer/interfaces/AsyncStateService.md)

***

### config

#### Get Signature

> **get** **config**(): `Config`

Defined in: common/dist/config/ConfigurableModule.d.ts:18

##### Returns

`Config`

#### Set Signature

> **set** **config**(`config`): `void`

Defined in: common/dist/config/ConfigurableModule.d.ts:19

##### Parameters

###### config

`Config`

##### Returns

`void`

#### Inherited from

[`AppChainModule`](AppChainModule.md).[`config`](AppChainModule.md#config)

***

### treeStore

#### Get Signature

> **get** **treeStore**(): [`AsyncMerkleTreeStore`](../../sequencer/interfaces/AsyncMerkleTreeStore.md)

Defined in: [sdk/src/query/StateServiceQueryModule.ts:32](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sdk/src/query/StateServiceQueryModule.ts#L32)

##### Returns

[`AsyncMerkleTreeStore`](../../sequencer/interfaces/AsyncMerkleTreeStore.md)

## Methods

### create()

> **create**(`childContainerProvider`): `void`

Defined in: common/dist/config/ConfigurableModule.d.ts:20

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Inherited from

[`AppChainModule`](AppChainModule.md).[`create`](AppChainModule.md#create)

***

### get()

> **get**(`key`): `Promise`\<`undefined` \| `Field`[]\>

Defined in: [sdk/src/query/StateServiceQueryModule.ts:36](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sdk/src/query/StateServiceQueryModule.ts#L36)

#### Parameters

##### key

`Field`

#### Returns

`Promise`\<`undefined` \| `Field`[]\>

#### Implementation of

[`QueryTransportModule`](../../sequencer/interfaces/QueryTransportModule.md).[`get`](../../sequencer/interfaces/QueryTransportModule.md#get)

***

### merkleWitness()

> **merkleWitness**(`path`): `Promise`\<`undefined` \| [`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md)\>

Defined in: [sdk/src/query/StateServiceQueryModule.ts:40](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sdk/src/query/StateServiceQueryModule.ts#L40)

#### Parameters

##### path

`Field`

#### Returns

`Promise`\<`undefined` \| [`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md)\>

#### Implementation of

[`QueryTransportModule`](../../sequencer/interfaces/QueryTransportModule.md).[`merkleWitness`](../../sequencer/interfaces/QueryTransportModule.md#merklewitness)
