---
title: GraphqlNetworkStateTransportModule
---

[**@proto-kit/sdk**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sdk](../README.md) / GraphqlNetworkStateTransportModule

# Class: GraphqlNetworkStateTransportModule

Defined in: [sdk/src/graphql/GraphqlNetworkStateTransportModule.ts:20](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sdk/src/graphql/GraphqlNetworkStateTransportModule.ts#L20)

Used by various module sub-types that may need to be configured

## Extends

- [`AppChainModule`](AppChainModule.md)\<`Record`\<`string`, `never`\>\>

## Implements

- [`NetworkStateTransportModule`](../../sequencer/interfaces/NetworkStateTransportModule.md)

## Constructors

### new GraphqlNetworkStateTransportModule()

> **new GraphqlNetworkStateTransportModule**(`graphqlClient`): [`GraphqlNetworkStateTransportModule`](GraphqlNetworkStateTransportModule.md)

Defined in: [sdk/src/graphql/GraphqlNetworkStateTransportModule.ts:24](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sdk/src/graphql/GraphqlNetworkStateTransportModule.ts#L24)

#### Parameters

##### graphqlClient

[`GraphqlClient`](GraphqlClient.md)

#### Returns

[`GraphqlNetworkStateTransportModule`](GraphqlNetworkStateTransportModule.md)

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

> **getProvenNetworkState**(): `Promise`\<[`NetworkState`](../../protocol/classes/NetworkState.md)\>

Defined in: [sdk/src/graphql/GraphqlNetworkStateTransportModule.ts:71](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sdk/src/graphql/GraphqlNetworkStateTransportModule.ts#L71)

#### Returns

`Promise`\<[`NetworkState`](../../protocol/classes/NetworkState.md)\>

#### Implementation of

[`NetworkStateTransportModule`](../../sequencer/interfaces/NetworkStateTransportModule.md).[`getProvenNetworkState`](../../sequencer/interfaces/NetworkStateTransportModule.md#getprovennetworkstate)

***

### getStagedNetworkState()

> **getStagedNetworkState**(): `Promise`\<[`NetworkState`](../../protocol/classes/NetworkState.md)\>

Defined in: [sdk/src/graphql/GraphqlNetworkStateTransportModule.ts:75](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sdk/src/graphql/GraphqlNetworkStateTransportModule.ts#L75)

#### Returns

`Promise`\<[`NetworkState`](../../protocol/classes/NetworkState.md)\>

#### Implementation of

[`NetworkStateTransportModule`](../../sequencer/interfaces/NetworkStateTransportModule.md).[`getStagedNetworkState`](../../sequencer/interfaces/NetworkStateTransportModule.md#getstagednetworkstate)

***

### getUnprovenNetworkState()

> **getUnprovenNetworkState**(): `Promise`\<[`NetworkState`](../../protocol/classes/NetworkState.md)\>

Defined in: [sdk/src/graphql/GraphqlNetworkStateTransportModule.ts:79](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sdk/src/graphql/GraphqlNetworkStateTransportModule.ts#L79)

#### Returns

`Promise`\<[`NetworkState`](../../protocol/classes/NetworkState.md)\>

#### Implementation of

[`NetworkStateTransportModule`](../../sequencer/interfaces/NetworkStateTransportModule.md).[`getUnprovenNetworkState`](../../sequencer/interfaces/NetworkStateTransportModule.md#getunprovennetworkstate)
