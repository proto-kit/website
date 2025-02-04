---
title: TaskQueue
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / TaskQueue

# Interface: TaskQueue

Defined in: [packages/sequencer/src/worker/queue/TaskQueue.ts:8](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/worker/queue/TaskQueue.ts#L8)

Definition of a connection-object that can generate queues and workers
for a specific connection type (e.g. BullMQ, In-memory)

## Properties

### createWorker()

> **createWorker**: (`name`, `executor`, `options`?) => [`Closeable`](Closeable.md)

Defined in: [packages/sequencer/src/worker/queue/TaskQueue.ts:11](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/worker/queue/TaskQueue.ts#L11)

#### Parameters

##### name

`string`

##### executor

(`data`) => `Promise`\<[`TaskPayload`](TaskPayload.md)\>

##### options?

###### concurrency

`number`

#### Returns

[`Closeable`](Closeable.md)

***

### getQueue()

> **getQueue**: (`name`) => `Promise`\<[`InstantiatedQueue`](InstantiatedQueue.md)\>

Defined in: [packages/sequencer/src/worker/queue/TaskQueue.ts:9](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/worker/queue/TaskQueue.ts#L9)

#### Parameters

##### name

`string`

#### Returns

`Promise`\<[`InstantiatedQueue`](InstantiatedQueue.md)\>
