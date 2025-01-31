---
title: GraphqlQueryTransportModule
---

[**@proto-kit/sdk**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sdk](../README.md) / GraphqlQueryTransportModule

# Class: GraphqlQueryTransportModule

Defined in: [sdk/src/graphql/GraphqlQueryTransportModule.ts:30](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/graphql/GraphqlQueryTransportModule.ts#L30)

Used by various module sub-types that may need to be configured

## Extends

- [`AppChainModule`](AppChainModule.md)

## Implements

- [`QueryTransportModule`](../../sequencer/interfaces/QueryTransportModule.md)

## Constructors

### new GraphqlQueryTransportModule()

> **new GraphqlQueryTransportModule**(`graphqlClient`): [`GraphqlQueryTransportModule`](GraphqlQueryTransportModule.md)

Defined in: [sdk/src/graphql/GraphqlQueryTransportModule.ts:34](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/graphql/GraphqlQueryTransportModule.ts#L34)

#### Parameters

##### graphqlClient

[`GraphqlClient`](GraphqlClient.md)

#### Returns

[`GraphqlQueryTransportModule`](GraphqlQueryTransportModule.md)

#### Overrides

[`AppChainModule`](AppChainModule.md).[`constructor`](AppChainModule.md#constructors)

## Properties

### appChain?

> `optional` **appChain**: [`AppChain`](AppChain.md)\<[`RuntimeModulesRecord`](../../module/type-aliases/RuntimeModulesRecord.md), [`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md) & [`ProtocolModulesRecord`](../../protocol/type-aliases/ProtocolModulesRecord.md), [`SequencerModulesRecord`](../../sequencer/type-aliases/SequencerModulesRecord.md), [`AppChainModulesRecord`](../type-aliases/AppChainModulesRecord.md)\>

Defined in: [sdk/src/appChain/AppChainModule.ts:18](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/AppChainModule.ts#L18)

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

### presets

> `static` **presets**: [`Presets`](../../common/type-aliases/Presets.md)\<`unknown`\> = `{}`

Defined in: [sdk/src/appChain/AppChainModule.ts:16](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/AppChainModule.ts#L16)

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

### get()

> **get**(`key`): `Promise`\<`undefined` \| `Field`[]\>

Defined in: [sdk/src/graphql/GraphqlQueryTransportModule.ts:40](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/graphql/GraphqlQueryTransportModule.ts#L40)

#### Parameters

##### key

`Field`

#### Returns

`Promise`\<`undefined` \| `Field`[]\>

#### Implementation of

[`QueryTransportModule`](../../sequencer/interfaces/QueryTransportModule.md).[`get`](../../sequencer/interfaces/QueryTransportModule.md#get)

***

### merkleWitness()

> **merkleWitness**(`key`): `Promise`\<`undefined` \| [`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md)\>

Defined in: [sdk/src/graphql/GraphqlQueryTransportModule.ts:65](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/graphql/GraphqlQueryTransportModule.ts#L65)

#### Parameters

##### key

`Field`

#### Returns

`Promise`\<`undefined` \| [`RollupMerkleTreeWitness`](../../common/classes/RollupMerkleTreeWitness.md)\>

#### Implementation of

[`QueryTransportModule`](../../sequencer/interfaces/QueryTransportModule.md).[`merkleWitness`](../../sequencer/interfaces/QueryTransportModule.md#merklewitness)
