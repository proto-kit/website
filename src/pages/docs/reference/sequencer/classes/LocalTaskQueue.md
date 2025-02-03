---
title: LocalTaskQueue
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / LocalTaskQueue

# Class: LocalTaskQueue

Defined in: [packages/sequencer/src/worker/queue/LocalTaskQueue.ts:74](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/queue/LocalTaskQueue.ts#L74)

Definition of a connection-object that can generate queues and workers
for a specific connection type (e.g. BullMQ, In-memory)

## Extends

- [`AbstractTaskQueue`](AbstractTaskQueue.md)\<[`LocalTaskQueueConfig`](../interfaces/LocalTaskQueueConfig.md)\>

## Implements

- [`TaskQueue`](../interfaces/TaskQueue.md)

## Constructors

### new LocalTaskQueue()

> **new LocalTaskQueue**(): [`LocalTaskQueue`](LocalTaskQueue.md)

#### Returns

[`LocalTaskQueue`](LocalTaskQueue.md)

#### Inherited from

[`AbstractTaskQueue`](AbstractTaskQueue.md).[`constructor`](AbstractTaskQueue.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`LocalTaskQueueConfig`](../interfaces/LocalTaskQueueConfig.md)

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`AbstractTaskQueue`](AbstractTaskQueue.md).[`currentConfig`](AbstractTaskQueue.md#currentconfig)

***

### listeners

> `readonly` **listeners**: `object` = `{}`

Defined in: [packages/sequencer/src/worker/queue/LocalTaskQueue.ts:92](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/queue/LocalTaskQueue.ts#L92)

#### Index Signature

\[`key`: `string`\]: `undefined` \| `QueueListener`[]

***

### queuedTasks

> **queuedTasks**: `object` = `{}`

Defined in: [packages/sequencer/src/worker/queue/LocalTaskQueue.ts:78](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/queue/LocalTaskQueue.ts#L78)

#### Index Signature

\[`key`: `string`\]: `object`[]

***

### queues

> `protected` **queues**: `Record`\<`string`, [`InstantiatedQueue`](../interfaces/InstantiatedQueue.md)\> = `{}`

Defined in: [packages/sequencer/src/worker/queue/AbstractTaskQueue.ts:8](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/queue/AbstractTaskQueue.ts#L8)

#### Inherited from

[`AbstractTaskQueue`](AbstractTaskQueue.md).[`queues`](AbstractTaskQueue.md#queues)

***

### presets

> `static` **presets**: [`Presets`](../../common/type-aliases/Presets.md)\<`unknown`\> = `{}`

Defined in: [packages/sequencer/src/sequencer/builder/SequencerModule.ts:18](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/sequencer/builder/SequencerModule.ts#L18)

#### Inherited from

[`AbstractTaskQueue`](AbstractTaskQueue.md).[`presets`](AbstractTaskQueue.md#presets)

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

[`AbstractTaskQueue`](AbstractTaskQueue.md).[`config`](AbstractTaskQueue.md#config)

## Methods

### closeQueues()

> `protected` **closeQueues**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/worker/queue/AbstractTaskQueue.ts:20](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/queue/AbstractTaskQueue.ts#L20)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`AbstractTaskQueue`](AbstractTaskQueue.md).[`closeQueues`](AbstractTaskQueue.md#closequeues)

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

[`AbstractTaskQueue`](AbstractTaskQueue.md).[`create`](AbstractTaskQueue.md#create)

***

### createOrGetQueue()

> `protected` **createOrGetQueue**(`name`, `creator`): [`InstantiatedQueue`](../interfaces/InstantiatedQueue.md)

Defined in: [packages/sequencer/src/worker/queue/AbstractTaskQueue.ts:10](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/queue/AbstractTaskQueue.ts#L10)

#### Parameters

##### name

`string`

##### creator

(`name`) => [`InstantiatedQueue`](../interfaces/InstantiatedQueue.md)

#### Returns

[`InstantiatedQueue`](../interfaces/InstantiatedQueue.md)

#### Inherited from

[`AbstractTaskQueue`](AbstractTaskQueue.md).[`createOrGetQueue`](AbstractTaskQueue.md#createorgetqueue)

***

### createWorker()

> **createWorker**(`queueName`, `executor`, `options`?): [`Closeable`](../interfaces/Closeable.md)

Defined in: [packages/sequencer/src/worker/queue/LocalTaskQueue.ts:146](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/queue/LocalTaskQueue.ts#L146)

#### Parameters

##### queueName

`string`

##### executor

(`data`) => `Promise`\<[`TaskPayload`](../interfaces/TaskPayload.md)\>

##### options?

###### concurrency

`number`

###### singleUse

`boolean`

#### Returns

[`Closeable`](../interfaces/Closeable.md)

#### Implementation of

[`TaskQueue`](../interfaces/TaskQueue.md).[`createWorker`](../interfaces/TaskQueue.md#createworker)

***

### getQueue()

> **getQueue**(`queueName`): `Promise`\<[`InstantiatedQueue`](../interfaces/InstantiatedQueue.md)\>

Defined in: [packages/sequencer/src/worker/queue/LocalTaskQueue.ts:186](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/queue/LocalTaskQueue.ts#L186)

#### Parameters

##### queueName

`string`

#### Returns

`Promise`\<[`InstantiatedQueue`](../interfaces/InstantiatedQueue.md)\>

#### Implementation of

[`TaskQueue`](../interfaces/TaskQueue.md).[`getQueue`](../interfaces/TaskQueue.md#getqueue)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/worker/queue/LocalTaskQueue.ts:193](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/queue/LocalTaskQueue.ts#L193)

Start the module and all it's functionality.
The returned Promise has to resolve after initialization,
since it will block in the sequencer init.
That means that you mustn't await server.start() for example.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`AbstractTaskQueue`](AbstractTaskQueue.md).[`start`](AbstractTaskQueue.md#start)

***

### workNextTasks()

> **workNextTasks**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/worker/queue/LocalTaskQueue.ts:98](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/queue/LocalTaskQueue.ts#L98)

#### Returns

`Promise`\<`void`\>
