---
title: PrivateMempool
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / PrivateMempool

# Class: PrivateMempool

Defined in: [packages/sequencer/src/mempool/private/PrivateMempool.ts:36](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/mempool/private/PrivateMempool.ts#L36)

Lifecycle of a SequencerModule

start(): Executed to execute any logic required to start the module

## Extends

- [`SequencerModule`](SequencerModule.md)

## Implements

- [`Mempool`](../interfaces/Mempool.md)

## Constructors

### new PrivateMempool()

> **new PrivateMempool**(`transactionValidator`, `transactionStorage`, `protocol`, `sequencer`, `stateService`): [`PrivateMempool`](PrivateMempool.md)

Defined in: [packages/sequencer/src/mempool/private/PrivateMempool.ts:41](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/mempool/private/PrivateMempool.ts#L41)

#### Parameters

##### transactionValidator

`TransactionValidator`

##### transactionStorage

[`TransactionStorage`](../interfaces/TransactionStorage.md)

##### protocol

[`Protocol`](../../protocol/classes/Protocol.md)\<[`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md)\>

##### sequencer

[`Sequencer`](Sequencer.md)\<[`SequencerModulesRecord`](../type-aliases/SequencerModulesRecord.md)\>

##### stateService

[`AsyncStateService`](../interfaces/AsyncStateService.md)

#### Returns

[`PrivateMempool`](PrivateMempool.md)

#### Overrides

[`SequencerModule`](SequencerModule.md).[`constructor`](SequencerModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`NoConfig`](../../common/type-aliases/NoConfig.md)

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`SequencerModule`](SequencerModule.md).[`currentConfig`](SequencerModule.md#currentconfig)

***

### events

> `readonly` **events**: [`EventEmitter`](../../common/classes/EventEmitter.md)\<[`MempoolEvents`](../type-aliases/MempoolEvents.md)\>

Defined in: [packages/sequencer/src/mempool/private/PrivateMempool.ts:37](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/mempool/private/PrivateMempool.ts#L37)

#### Implementation of

[`Mempool`](../interfaces/Mempool.md).[`events`](../interfaces/Mempool.md#events)

***

### presets

> `static` **presets**: [`Presets`](../../common/type-aliases/Presets.md)\<`unknown`\> = `{}`

Defined in: [packages/sequencer/src/sequencer/builder/SequencerModule.ts:18](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/sequencer/builder/SequencerModule.ts#L18)

#### Inherited from

[`SequencerModule`](SequencerModule.md).[`presets`](SequencerModule.md#presets)

## Accessors

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

[`SequencerModule`](SequencerModule.md).[`config`](SequencerModule.md#config)

## Methods

### add()

> **add**(`tx`): `Promise`\<`boolean`\>

Defined in: [packages/sequencer/src/mempool/private/PrivateMempool.ts:57](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/mempool/private/PrivateMempool.ts#L57)

Add a transaction to the mempool

#### Parameters

##### tx

[`PendingTransaction`](PendingTransaction.md)

#### Returns

`Promise`\<`boolean`\>

The new commitment to the mempool

#### Implementation of

[`Mempool`](../interfaces/Mempool.md).[`add`](../interfaces/Mempool.md#add)

***

### create()

> **create**(`childContainerProvider`): `void`

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:20

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Inherited from

[`SequencerModule`](SequencerModule.md).[`create`](SequencerModule.md#create)

***

### getStagedNetworkState()

> **getStagedNetworkState**(): `Promise`\<`undefined` \| [`NetworkState`](../../protocol/classes/NetworkState.md)\>

Defined in: [packages/sequencer/src/mempool/private/PrivateMempool.ts:91](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/mempool/private/PrivateMempool.ts#L91)

#### Returns

`Promise`\<`undefined` \| [`NetworkState`](../../protocol/classes/NetworkState.md)\>

***

### getTxs()

> **getTxs**(`limit`?): `Promise`\<[`PendingTransaction`](PendingTransaction.md)[]\>

Defined in: [packages/sequencer/src/mempool/private/PrivateMempool.ts:96](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/mempool/private/PrivateMempool.ts#L96)

Retrieve all transactions that are currently in the mempool

#### Parameters

##### limit?

`number`

#### Returns

`Promise`\<[`PendingTransaction`](PendingTransaction.md)[]\>

#### Implementation of

[`Mempool`](../interfaces/Mempool.md).[`getTxs`](../interfaces/Mempool.md#gettxs)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/mempool/private/PrivateMempool.ts:200](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/mempool/private/PrivateMempool.ts#L200)

Start the module and all it's functionality.
The returned Promise has to resolve after initialization,
since it will block in the sequencer init.
That means that you mustn't await server.start() for example.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`SequencerModule`](SequencerModule.md).[`start`](SequencerModule.md#start)
