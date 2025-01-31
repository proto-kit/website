---
title: MinaBaseLayer
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / MinaBaseLayer

# Class: MinaBaseLayer

Defined in: [packages/sequencer/src/protocol/baselayer/MinaBaseLayer.ts:35](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/baselayer/MinaBaseLayer.ts#L35)

Lifecycle of a SequencerModule

start(): Executed to execute any logic required to start the module

## Extends

- [`SequencerModule`](SequencerModule.md)\<[`MinaBaseLayerConfig`](../interfaces/MinaBaseLayerConfig.md)\>

## Implements

- [`BaseLayer`](../interfaces/BaseLayer.md)
- [`DependencyFactory`](../../common/interfaces/DependencyFactory.md)

## Constructors

### new MinaBaseLayer()

> **new MinaBaseLayer**(`areProofsEnabled`): [`MinaBaseLayer`](MinaBaseLayer.md)

Defined in: [packages/sequencer/src/protocol/baselayer/MinaBaseLayer.ts:43](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/baselayer/MinaBaseLayer.ts#L43)

#### Parameters

##### areProofsEnabled

[`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

#### Returns

[`MinaBaseLayer`](MinaBaseLayer.md)

#### Overrides

[`SequencerModule`](SequencerModule.md).[`constructor`](SequencerModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`MinaBaseLayerConfig`](../interfaces/MinaBaseLayerConfig.md)

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`SequencerModule`](SequencerModule.md).[`currentConfig`](SequencerModule.md#currentconfig)

***

### network?

> `optional` **network**: `Mina`

Defined in: [packages/sequencer/src/protocol/baselayer/MinaBaseLayer.ts:39](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/baselayer/MinaBaseLayer.ts#L39)

***

### originalNetwork?

> `optional` **originalNetwork**: `Mina`

Defined in: [packages/sequencer/src/protocol/baselayer/MinaBaseLayer.ts:41](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/baselayer/MinaBaseLayer.ts#L41)

***

### presets

> `static` **presets**: [`Presets`](../../common/type-aliases/Presets.md)\<`unknown`\> = `{}`

Defined in: [packages/sequencer/src/sequencer/builder/SequencerModule.ts:18](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/sequencer/builder/SequencerModule.ts#L18)

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

### dependencies()

> **dependencies**(): `object`

Defined in: [packages/sequencer/src/protocol/baselayer/MinaBaseLayer.ts:50](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/baselayer/MinaBaseLayer.ts#L50)

#### Returns

`object`

##### IncomingMessageAdapter

> **IncomingMessageAdapter**: `object`

###### IncomingMessageAdapter.useClass

> **IncomingMessageAdapter.useClass**: *typeof* [`MinaIncomingMessageAdapter`](MinaIncomingMessageAdapter.md) = `MinaIncomingMessageAdapter`

##### OutgoingMessageQueue

> **OutgoingMessageQueue**: `object`

###### OutgoingMessageQueue.useClass

> **OutgoingMessageQueue.useClass**: *typeof* [`WithdrawalQueue`](WithdrawalQueue.md) = `WithdrawalQueue`

##### TransactionSender

> **TransactionSender**: `object`

###### TransactionSender.useClass

> **TransactionSender.useClass**: *typeof* [`MinaTransactionSender`](MinaTransactionSender.md) = `MinaTransactionSender`

#### Implementation of

[`DependencyFactory`](../../common/interfaces/DependencyFactory.md).[`dependencies`](../../common/interfaces/DependencyFactory.md#dependencies)

***

### isLocalBlockChain()

> **isLocalBlockChain**(): `boolean`

Defined in: [packages/sequencer/src/protocol/baselayer/MinaBaseLayer.ts:66](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/baselayer/MinaBaseLayer.ts#L66)

#### Returns

`boolean`

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/protocol/baselayer/MinaBaseLayer.ts:70](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/baselayer/MinaBaseLayer.ts#L70)

Start the module and all it's functionality.
The returned Promise has to resolve after initialization,
since it will block in the sequencer init.
That means that you mustn't await server.start() for example.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`SequencerModule`](SequencerModule.md).[`start`](SequencerModule.md#start)
