---
title: GraphqlTransactionSender
---

[**@proto-kit/sdk**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sdk](../README.md) / GraphqlTransactionSender

# Class: GraphqlTransactionSender

Defined in: [sdk/src/graphql/GraphqlTransactionSender.ts:11](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/graphql/GraphqlTransactionSender.ts#L11)

Used by various module sub-types that may need to be configured

## Extends

- [`AppChainModule`](AppChainModule.md)

## Implements

- [`TransactionSender`](../interfaces/TransactionSender.md)

## Constructors

### new GraphqlTransactionSender()

> **new GraphqlTransactionSender**(`graphqlClient`): [`GraphqlTransactionSender`](GraphqlTransactionSender.md)

Defined in: [sdk/src/graphql/GraphqlTransactionSender.ts:15](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/graphql/GraphqlTransactionSender.ts#L15)

#### Parameters

##### graphqlClient

[`GraphqlClient`](GraphqlClient.md)

#### Returns

[`GraphqlTransactionSender`](GraphqlTransactionSender.md)

#### Overrides

[`AppChainModule`](AppChainModule.md).[`constructor`](AppChainModule.md#constructors)

## Properties

### appChain?

> `optional` **appChain**: [`AppChain`](AppChain.md)\<[`RuntimeModulesRecord`](../../module/type-aliases/RuntimeModulesRecord.md), [`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md) & [`ProtocolModulesRecord`](../../protocol/type-aliases/ProtocolModulesRecord.md), [`SequencerModulesRecord`](../../sequencer/type-aliases/SequencerModulesRecord.md), [`AppChainModulesRecord`](../type-aliases/AppChainModulesRecord.md)\>

Defined in: [sdk/src/appChain/AppChainModule.ts:18](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/AppChainModule.ts#L18)

#### Implementation of

[`TransactionSender`](../interfaces/TransactionSender.md).[`appChain`](../interfaces/TransactionSender.md#appchain)

#### Inherited from

[`AppChainModule`](AppChainModule.md).[`appChain`](AppChainModule.md#appchain)

***

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`NoConfig`](../../common/type-aliases/NoConfig.md)

Defined in: common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Implementation of

[`TransactionSender`](../interfaces/TransactionSender.md).[`currentConfig`](../interfaces/TransactionSender.md#currentconfig)

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

#### Implementation of

[`TransactionSender`](../interfaces/TransactionSender.md).[`config`](../interfaces/TransactionSender.md#config)

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

#### Implementation of

[`TransactionSender`](../interfaces/TransactionSender.md).[`create`](../interfaces/TransactionSender.md#create)

#### Inherited from

[`AppChainModule`](AppChainModule.md).[`create`](AppChainModule.md#create)

***

### send()

> **send**(`transaction`): `Promise`\<`void`\>

Defined in: [sdk/src/graphql/GraphqlTransactionSender.ts:21](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/graphql/GraphqlTransactionSender.ts#L21)

#### Parameters

##### transaction

[`PendingTransaction`](../../sequencer/classes/PendingTransaction.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`TransactionSender`](../interfaces/TransactionSender.md).[`send`](../interfaces/TransactionSender.md#send)
