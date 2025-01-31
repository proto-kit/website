---
title: FlowCreator
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / FlowCreator

# Class: FlowCreator

Defined in: [packages/sequencer/src/worker/flow/Flow.ts:178](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/flow/Flow.ts#L178)

## Constructors

### new FlowCreator()

> **new FlowCreator**(`queueImpl`): [`FlowCreator`](FlowCreator.md)

Defined in: [packages/sequencer/src/worker/flow/Flow.ts:179](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/flow/Flow.ts#L179)

#### Parameters

##### queueImpl

[`TaskQueue`](../interfaces/TaskQueue.md)

#### Returns

[`FlowCreator`](FlowCreator.md)

## Methods

### createFlow()

> **createFlow**\<`State`\>(`flowId`, `state`): [`Flow`](Flow.md)\<`State`\>

Defined in: [packages/sequencer/src/worker/flow/Flow.ts:183](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/flow/Flow.ts#L183)

#### Type Parameters

• **State**

#### Parameters

##### flowId

`string`

##### state

`State`

#### Returns

[`Flow`](Flow.md)\<`State`\>
