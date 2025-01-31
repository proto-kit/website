---
title: MempoolResolver
---

[**@proto-kit/api**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/api](../README.md) / MempoolResolver

# Class: MempoolResolver

Defined in: [api/src/graphql/modules/MempoolResolver.ts:121](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/modules/MempoolResolver.ts#L121)

Used by various module sub-types that may need to be configured

## Extends

- [`GraphqlModule`](GraphqlModule.md)

## Constructors

### new MempoolResolver()

> **new MempoolResolver**(`mempool`, `transactionStorage`): [`MempoolResolver`](MempoolResolver.md)

Defined in: [api/src/graphql/modules/MempoolResolver.ts:122](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/modules/MempoolResolver.ts#L122)

#### Parameters

##### mempool

[`Mempool`](../../sequencer/interfaces/Mempool.md)

##### transactionStorage

[`TransactionStorage`](../../sequencer/interfaces/TransactionStorage.md)

#### Returns

[`MempoolResolver`](MempoolResolver.md)

#### Overrides

[`GraphqlModule`](GraphqlModule.md).[`constructor`](GraphqlModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`NoConfig`](../../common/type-aliases/NoConfig.md)

Defined in: common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`GraphqlModule`](GraphqlModule.md).[`currentConfig`](GraphqlModule.md#currentconfig)

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

[`GraphqlModule`](GraphqlModule.md).[`config`](GraphqlModule.md#config)

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

[`GraphqlModule`](GraphqlModule.md).[`create`](GraphqlModule.md#create)

***

### submitTx()

> **submitTx**(`tx`): `Promise`\<`string`\>

Defined in: [api/src/graphql/modules/MempoolResolver.ts:133](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/modules/MempoolResolver.ts#L133)

#### Parameters

##### tx

[`TransactionObject`](TransactionObject.md)

#### Returns

`Promise`\<`string`\>

***

### transactions()

> **transactions**(): `Promise`\<`string`[]\>

Defined in: [api/src/graphql/modules/MempoolResolver.ts:169](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/modules/MempoolResolver.ts#L169)

#### Returns

`Promise`\<`string`[]\>

***

### transactionState()

> **transactionState**(`hash`): `Promise`\<`InclusionStatus`\>

Defined in: [api/src/graphql/modules/MempoolResolver.ts:144](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/modules/MempoolResolver.ts#L144)

#### Parameters

##### hash

`string`

#### Returns

`Promise`\<`InclusionStatus`\>
