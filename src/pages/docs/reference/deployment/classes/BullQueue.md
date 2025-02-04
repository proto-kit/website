---
title: BullQueue
---

[**@proto-kit/deployment**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/deployment](../README.md) / BullQueue

# Class: BullQueue

Defined in: [deployment/src/queue/BullQueue.ts:29](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/deployment/src/queue/BullQueue.ts#L29)

TaskQueue implementation for BullMQ

## Extends

- [`AbstractTaskQueue`](../../sequencer/classes/AbstractTaskQueue.md)\<[`BullQueueConfig`](../interfaces/BullQueueConfig.md)\>

## Implements

- [`TaskQueue`](../../sequencer/interfaces/TaskQueue.md)
- [`Closeable`](../../sequencer/interfaces/Closeable.md)

## Constructors

### new BullQueue()

> **new BullQueue**(): [`BullQueue`](BullQueue.md)

#### Returns

[`BullQueue`](BullQueue.md)

#### Inherited from

[`AbstractTaskQueue`](../../sequencer/classes/AbstractTaskQueue.md).[`constructor`](../../sequencer/classes/AbstractTaskQueue.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`BullQueueConfig`](../interfaces/BullQueueConfig.md)

Defined in: common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`AbstractTaskQueue`](../../sequencer/classes/AbstractTaskQueue.md).[`currentConfig`](../../sequencer/classes/AbstractTaskQueue.md#currentconfig)

***

### queues

> `protected` **queues**: `Record`\<`string`, [`InstantiatedQueue`](../../sequencer/interfaces/InstantiatedQueue.md)\>

Defined in: sequencer/dist/worker/queue/AbstractTaskQueue.d.ts:4

#### Inherited from

[`AbstractTaskQueue`](../../sequencer/classes/AbstractTaskQueue.md).[`queues`](../../sequencer/classes/AbstractTaskQueue.md#queues)

***

### presets

> `static` **presets**: [`Presets`](../../common/type-aliases/Presets.md)\<`unknown`\>

Defined in: sequencer/dist/sequencer/builder/SequencerModule.d.ts:8

#### Inherited from

[`AbstractTaskQueue`](../../sequencer/classes/AbstractTaskQueue.md).[`presets`](../../sequencer/classes/AbstractTaskQueue.md#presets)

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

[`AbstractTaskQueue`](../../sequencer/classes/AbstractTaskQueue.md).[`config`](../../sequencer/classes/AbstractTaskQueue.md#config)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [deployment/src/queue/BullQueue.ts:107](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/deployment/src/queue/BullQueue.ts#L107)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Closeable`](../../sequencer/interfaces/Closeable.md).[`close`](../../sequencer/interfaces/Closeable.md#close)

***

### closeQueues()

> `protected` **closeQueues**(): `Promise`\<`void`\>

Defined in: sequencer/dist/worker/queue/AbstractTaskQueue.d.ts:6

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`AbstractTaskQueue`](../../sequencer/classes/AbstractTaskQueue.md).[`closeQueues`](../../sequencer/classes/AbstractTaskQueue.md#closequeues)

***

### create()

> **create**(`childContainerProvider`): `void`

Defined in: common/dist/config/ConfigurableModule.d.ts:20

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Inherited from

[`AbstractTaskQueue`](../../sequencer/classes/AbstractTaskQueue.md).[`create`](../../sequencer/classes/AbstractTaskQueue.md#create)

***

### createOrGetQueue()

> `protected` **createOrGetQueue**(`name`, `creator`): [`InstantiatedQueue`](../../sequencer/interfaces/InstantiatedQueue.md)

Defined in: sequencer/dist/worker/queue/AbstractTaskQueue.d.ts:5

#### Parameters

##### name

`string`

##### creator

(`name`) => [`InstantiatedQueue`](../../sequencer/interfaces/InstantiatedQueue.md)

#### Returns

[`InstantiatedQueue`](../../sequencer/interfaces/InstantiatedQueue.md)

#### Inherited from

[`AbstractTaskQueue`](../../sequencer/classes/AbstractTaskQueue.md).[`createOrGetQueue`](../../sequencer/classes/AbstractTaskQueue.md#createorgetqueue)

***

### createWorker()

> **createWorker**(`name`, `executor`, `options`?): [`Closeable`](../../sequencer/interfaces/Closeable.md)

Defined in: [deployment/src/queue/BullQueue.ts:35](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/deployment/src/queue/BullQueue.ts#L35)

#### Parameters

##### name

`string`

##### executor

(`data`) => `Promise`\<[`TaskPayload`](../../sequencer/interfaces/TaskPayload.md)\>

##### options?

###### concurrency

`number`

#### Returns

[`Closeable`](../../sequencer/interfaces/Closeable.md)

#### Implementation of

[`TaskQueue`](../../sequencer/interfaces/TaskQueue.md).[`createWorker`](../../sequencer/interfaces/TaskQueue.md#createworker)

***

### getQueue()

> **getQueue**(`queueName`): `Promise`\<[`InstantiatedQueue`](../../sequencer/interfaces/InstantiatedQueue.md)\>

Defined in: [deployment/src/queue/BullQueue.ts:88](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/deployment/src/queue/BullQueue.ts#L88)

#### Parameters

##### queueName

`string`

#### Returns

`Promise`\<[`InstantiatedQueue`](../../sequencer/interfaces/InstantiatedQueue.md)\>

#### Implementation of

[`TaskQueue`](../../sequencer/interfaces/TaskQueue.md).[`getQueue`](../../sequencer/interfaces/TaskQueue.md#getqueue)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [deployment/src/queue/BullQueue.ts:103](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/deployment/src/queue/BullQueue.ts#L103)

Start the module and all it's functionality.
The returned Promise has to resolve after initialization,
since it will block in the sequencer init.
That means that you mustn't await server.start() for example.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`AbstractTaskQueue`](../../sequencer/classes/AbstractTaskQueue.md).[`start`](../../sequencer/classes/AbstractTaskQueue.md#start)
