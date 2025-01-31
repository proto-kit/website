---
title: InstantiatedQueue
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / InstantiatedQueue

# Interface: InstantiatedQueue

Defined in: [packages/sequencer/src/worker/queue/TaskQueue.ts:20](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/queue/TaskQueue.ts#L20)

Object that abstracts a concrete connection to a queue instance.

## Extends

- [`Closeable`](Closeable.md)

## Properties

### addTask()

> **addTask**: (`payload`, `taskId`?) => `Promise`\<\{ `taskId`: `string`; \}\>

Defined in: [packages/sequencer/src/worker/queue/TaskQueue.ts:26](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/queue/TaskQueue.ts#L26)

Adds a specific payload to the queue and returns a unique jobId

#### Parameters

##### payload

[`TaskPayload`](TaskPayload.md)

##### taskId?

`string`

#### Returns

`Promise`\<\{ `taskId`: `string`; \}\>

***

### close()

> **close**: () => `Promise`\<`void`\>

Defined in: [packages/sequencer/src/sequencer/builder/Closeable.ts:4](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/sequencer/builder/Closeable.ts#L4)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Closeable`](Closeable.md).[`close`](Closeable.md#close)

***

### name

> **name**: `string`

Defined in: [packages/sequencer/src/worker/queue/TaskQueue.ts:21](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/queue/TaskQueue.ts#L21)

***

### offCompleted()

> **offCompleted**: (`listenerId`) => `void`

Defined in: [packages/sequencer/src/worker/queue/TaskQueue.ts:38](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/queue/TaskQueue.ts#L38)

#### Parameters

##### listenerId

`number`

#### Returns

`void`

***

### onCompleted()

> **onCompleted**: (`listener`) => `Promise`\<`number`\>

Defined in: [packages/sequencer/src/worker/queue/TaskQueue.ts:34](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/queue/TaskQueue.ts#L34)

Registers a listener for the completion of jobs

#### Parameters

##### listener

(`payload`) => `Promise`\<`void`\>

#### Returns

`Promise`\<`number`\>
