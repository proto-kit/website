---
title: BlockStorageNetworkStateModule
---

[**@proto-kit/sdk**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sdk](../README.md) / BlockStorageNetworkStateModule

# Class: BlockStorageNetworkStateModule

Defined in: [sdk/src/query/BlockStorageNetworkStateModule.ts:17](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sdk/src/query/BlockStorageNetworkStateModule.ts#L17)

Used by various module sub-types that may need to be configured

## Extends

- [`AppChainModule`](AppChainModule.md)\<`Record`\<`string`, `never`\>\>

## Implements

- [`NetworkStateTransportModule`](../../sequencer/interfaces/NetworkStateTransportModule.md)

## Constructors

### new BlockStorageNetworkStateModule()

> **new BlockStorageNetworkStateModule**(`sequencer`): [`BlockStorageNetworkStateModule`](BlockStorageNetworkStateModule.md)

Defined in: [sdk/src/query/BlockStorageNetworkStateModule.ts:21](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sdk/src/query/BlockStorageNetworkStateModule.ts#L21)

#### Parameters

##### sequencer

[`Sequencer`](../../sequencer/classes/Sequencer.md)\<[`SequencerModulesRecord`](../../sequencer/type-aliases/SequencerModulesRecord.md)\>

#### Returns

[`BlockStorageNetworkStateModule`](BlockStorageNetworkStateModule.md)

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

> `protected` **currentConfig**: `undefined` \| `Record`\<`string`, `never`\>

Defined in: common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`AppChainModule`](AppChainModule.md).[`currentConfig`](AppChainModule.md#currentconfig)

***

### presets

> `static` **presets**: [`Presets`](../../common/type-aliases/Presets.md)\<`unknown`\> = `{}`

Defined in: [sdk/src/appChain/AppChainModule.ts:16](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sdk/src/appChain/AppChainModule.ts#L16)

#### Inherited from

[`AppChainModule`](AppChainModule.md).[`presets`](AppChainModule.md#presets)

## Accessors

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

### getProvenNetworkState()

> **getProvenNetworkState**(): `Promise`\<`undefined` \| [`NetworkState`](../../protocol/classes/NetworkState.md)\>

Defined in: [sdk/src/query/BlockStorageNetworkStateModule.ts:58](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sdk/src/query/BlockStorageNetworkStateModule.ts#L58)

#### Returns

`Promise`\<`undefined` \| [`NetworkState`](../../protocol/classes/NetworkState.md)\>

#### Implementation of

[`NetworkStateTransportModule`](../../sequencer/interfaces/NetworkStateTransportModule.md).[`getProvenNetworkState`](../../sequencer/interfaces/NetworkStateTransportModule.md#getprovennetworkstate)

***

### getStagedNetworkState()

> **getStagedNetworkState**(): `Promise`\<`undefined` \| [`NetworkState`](../../protocol/classes/NetworkState.md)\>

Defined in: [sdk/src/query/BlockStorageNetworkStateModule.ts:53](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sdk/src/query/BlockStorageNetworkStateModule.ts#L53)

Staged network state is the networkstate after the latest unproven block
with afterBundle() hooks executed

#### Returns

`Promise`\<`undefined` \| [`NetworkState`](../../protocol/classes/NetworkState.md)\>

#### Implementation of

[`NetworkStateTransportModule`](../../sequencer/interfaces/NetworkStateTransportModule.md).[`getStagedNetworkState`](../../sequencer/interfaces/NetworkStateTransportModule.md#getstagednetworkstate)

***

### getUnprovenNetworkState()

> **getUnprovenNetworkState**(): `Promise`\<`undefined` \| [`NetworkState`](../../protocol/classes/NetworkState.md)\>

Defined in: [sdk/src/query/BlockStorageNetworkStateModule.ts:44](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sdk/src/query/BlockStorageNetworkStateModule.ts#L44)

#### Returns

`Promise`\<`undefined` \| [`NetworkState`](../../protocol/classes/NetworkState.md)\>

#### Implementation of

[`NetworkStateTransportModule`](../../sequencer/interfaces/NetworkStateTransportModule.md).[`getUnprovenNetworkState`](../../sequencer/interfaces/NetworkStateTransportModule.md#getunprovennetworkstate)
