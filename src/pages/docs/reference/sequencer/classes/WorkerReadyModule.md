---
title: WorkerReadyModule
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / WorkerReadyModule

# Class: WorkerReadyModule

Defined in: [packages/sequencer/src/worker/worker/WorkerReadyModule.ts:11](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/worker/WorkerReadyModule.ts#L11)

Module to safely wait for the finish of the worker startup
Behaves like a noop for non-worker appchain configurations

## Constructors

### new WorkerReadyModule()

> **new WorkerReadyModule**(`localTaskWorkerModule`): [`WorkerReadyModule`](WorkerReadyModule.md)

Defined in: [packages/sequencer/src/worker/worker/WorkerReadyModule.ts:12](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/worker/WorkerReadyModule.ts#L12)

#### Parameters

##### localTaskWorkerModule

`undefined` | [`LocalTaskWorkerModule`](LocalTaskWorkerModule.md)\<`any`\>

#### Returns

[`WorkerReadyModule`](WorkerReadyModule.md)

## Methods

### waitForReady()

> **waitForReady**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/worker/worker/WorkerReadyModule.ts:20](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/worker/WorkerReadyModule.ts#L20)

#### Returns

`Promise`\<`void`\>
