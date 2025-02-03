---
title: FlowTaskWorker
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / FlowTaskWorker

# Class: FlowTaskWorker\<Tasks\>

Defined in: [packages/sequencer/src/worker/worker/FlowTaskWorker.ts:15](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/worker/FlowTaskWorker.ts#L15)

## Type Parameters

• **Tasks** *extends* [`Task`](../interfaces/Task.md)\<`any`, `any`\>[]

## Implements

- [`Closeable`](../interfaces/Closeable.md)

## Constructors

### new FlowTaskWorker()

> **new FlowTaskWorker**\<`Tasks`\>(`mq`, `tasks`): [`FlowTaskWorker`](FlowTaskWorker.md)\<`Tasks`\>

Defined in: [packages/sequencer/src/worker/worker/FlowTaskWorker.ts:22](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/worker/FlowTaskWorker.ts#L22)

#### Parameters

##### mq

[`TaskQueue`](../interfaces/TaskQueue.md)

##### tasks

`Tasks`

#### Returns

[`FlowTaskWorker`](FlowTaskWorker.md)\<`Tasks`\>

## Properties

### preparePromise?

> `optional` **preparePromise**: `Promise`\<`void`\>

Defined in: [packages/sequencer/src/worker/worker/FlowTaskWorker.ts:78](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/worker/FlowTaskWorker.ts#L78)

***

### prepareResolve()?

> `optional` **prepareResolve**: () => `void`

Defined in: [packages/sequencer/src/worker/worker/FlowTaskWorker.ts:80](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/worker/FlowTaskWorker.ts#L80)

#### Returns

`void`

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/worker/worker/FlowTaskWorker.ts:165](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/worker/FlowTaskWorker.ts#L165)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Closeable`](../interfaces/Closeable.md).[`close`](../interfaces/Closeable.md#close)

***

### prepareTasks()

> **prepareTasks**(`tasks`): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/worker/worker/FlowTaskWorker.ts:86](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/worker/FlowTaskWorker.ts#L86)

#### Parameters

##### tasks

[`Task`](../interfaces/Task.md)\<`unknown`, `unknown`\>[]

#### Returns

`Promise`\<`void`\>

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/worker/worker/FlowTaskWorker.ts:112](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/worker/FlowTaskWorker.ts#L112)

#### Returns

`Promise`\<`void`\>

***

### waitForPrepared()

> **waitForPrepared**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/worker/worker/FlowTaskWorker.ts:82](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/worker/FlowTaskWorker.ts#L82)

#### Returns

`Promise`\<`void`\>
