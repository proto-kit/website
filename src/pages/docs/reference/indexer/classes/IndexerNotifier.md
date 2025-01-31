---
title: IndexerNotifier
---

[**@proto-kit/indexer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/indexer](../README.md) / IndexerNotifier

# Class: IndexerNotifier

Defined in: [indexer/src/IndexerNotifier.ts:19](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/indexer/src/IndexerNotifier.ts#L19)

Lifecycle of a SequencerModule

start(): Executed to execute any logic required to start the module

## Extends

- [`SequencerModule`](../../sequencer/classes/SequencerModule.md)\<`Record`\<`never`, `never`\>\>

## Constructors

### new IndexerNotifier()

> **new IndexerNotifier**(`sequencer`, `taskQueue`, `indexBlockTask`): [`IndexerNotifier`](IndexerNotifier.md)

Defined in: [indexer/src/IndexerNotifier.ts:20](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/indexer/src/IndexerNotifier.ts#L20)

#### Parameters

##### sequencer

[`Sequencer`](../../sequencer/classes/Sequencer.md)\<[`NotifierMandatorySequencerModules`](../type-aliases/NotifierMandatorySequencerModules.md)\>

##### taskQueue

[`TaskQueue`](../../sequencer/interfaces/TaskQueue.md)

##### indexBlockTask

[`IndexBlockTask`](IndexBlockTask.md)

#### Returns

[`IndexerNotifier`](IndexerNotifier.md)

#### Overrides

[`SequencerModule`](../../sequencer/classes/SequencerModule.md).[`constructor`](../../sequencer/classes/SequencerModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| `Record`\<`never`, `never`\>

Defined in: common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`SequencerModule`](../../sequencer/classes/SequencerModule.md).[`currentConfig`](../../sequencer/classes/SequencerModule.md#currentconfig)

***

### indexBlockTask

> **indexBlockTask**: [`IndexBlockTask`](IndexBlockTask.md)

Defined in: [indexer/src/IndexerNotifier.ts:25](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/indexer/src/IndexerNotifier.ts#L25)

***

### sequencer

> **sequencer**: [`Sequencer`](../../sequencer/classes/Sequencer.md)\<[`NotifierMandatorySequencerModules`](../type-aliases/NotifierMandatorySequencerModules.md)\>

Defined in: [indexer/src/IndexerNotifier.ts:22](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/indexer/src/IndexerNotifier.ts#L22)

***

### taskQueue

> **taskQueue**: [`TaskQueue`](../../sequencer/interfaces/TaskQueue.md)

Defined in: [indexer/src/IndexerNotifier.ts:24](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/indexer/src/IndexerNotifier.ts#L24)

***

### presets

> `static` **presets**: [`Presets`](../../common/type-aliases/Presets.md)\<`unknown`\>

Defined in: sequencer/dist/sequencer/builder/SequencerModule.d.ts:8

#### Inherited from

[`SequencerModule`](../../sequencer/classes/SequencerModule.md).[`presets`](../../sequencer/classes/SequencerModule.md#presets)

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

[`SequencerModule`](../../sequencer/classes/SequencerModule.md).[`config`](../../sequencer/classes/SequencerModule.md#config)

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

[`SequencerModule`](../../sequencer/classes/SequencerModule.md).[`create`](../../sequencer/classes/SequencerModule.md#create)

***

### propagateEventsAsTasks()

> **propagateEventsAsTasks**(): `Promise`\<`void`\>

Defined in: [indexer/src/IndexerNotifier.ts:30](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/indexer/src/IndexerNotifier.ts#L30)

#### Returns

`Promise`\<`void`\>

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [indexer/src/IndexerNotifier.ts:51](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/indexer/src/IndexerNotifier.ts#L51)

Start the module and all it's functionality.
The returned Promise has to resolve after initialization,
since it will block in the sequencer init.
That means that you mustn't await server.start() for example.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`SequencerModule`](../../sequencer/classes/SequencerModule.md).[`start`](../../sequencer/classes/SequencerModule.md#start)
