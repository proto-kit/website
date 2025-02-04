---
title: WorkerReadyModule
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / WorkerReadyModule

# Class: WorkerReadyModule

Defined in: [packages/sequencer/src/worker/worker/WorkerReadyModule.ts:11](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/worker/worker/WorkerReadyModule.ts#L11)

Module to safely wait for the finish of the worker startup
Behaves like a noop for non-worker appchain configurations

## Constructors

### new WorkerReadyModule()

> **new WorkerReadyModule**(`localTaskWorkerModule`): [`WorkerReadyModule`](WorkerReadyModule.md)

Defined in: [packages/sequencer/src/worker/worker/WorkerReadyModule.ts:12](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/worker/worker/WorkerReadyModule.ts#L12)

#### Parameters

##### localTaskWorkerModule

`undefined` | [`LocalTaskWorkerModule`](LocalTaskWorkerModule.md)\<`any`\>

#### Returns

[`WorkerReadyModule`](WorkerReadyModule.md)

## Methods

### waitForReady()

> **waitForReady**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/worker/worker/WorkerReadyModule.ts:20](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/worker/worker/WorkerReadyModule.ts#L20)

#### Returns

`Promise`\<`void`\>
