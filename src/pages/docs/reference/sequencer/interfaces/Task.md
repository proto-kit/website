---
title: Task
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / Task

# Interface: Task\<Input, Result\>

Defined in: [packages/sequencer/src/worker/flow/Task.ts:1](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/flow/Task.ts#L1)

## Type Parameters

• **Input**

• **Result**

## Properties

### compute()

> **compute**: (`input`) => `Promise`\<`Result`\>

Defined in: [packages/sequencer/src/worker/flow/Task.ts:6](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/flow/Task.ts#L6)

#### Parameters

##### input

`Input`

#### Returns

`Promise`\<`Result`\>

***

### inputSerializer()

> **inputSerializer**: () => [`TaskSerializer`](TaskSerializer.md)\<`Input`\>

Defined in: [packages/sequencer/src/worker/flow/Task.ts:8](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/flow/Task.ts#L8)

#### Returns

[`TaskSerializer`](TaskSerializer.md)\<`Input`\>

***

### name

> **name**: `string`

Defined in: [packages/sequencer/src/worker/flow/Task.ts:2](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/flow/Task.ts#L2)

***

### prepare()

> **prepare**: () => `Promise`\<`void`\>

Defined in: [packages/sequencer/src/worker/flow/Task.ts:4](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/flow/Task.ts#L4)

#### Returns

`Promise`\<`void`\>

***

### resultSerializer()

> **resultSerializer**: () => [`TaskSerializer`](TaskSerializer.md)\<`Result`\>

Defined in: [packages/sequencer/src/worker/flow/Task.ts:9](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/flow/Task.ts#L9)

#### Returns

[`TaskSerializer`](TaskSerializer.md)\<`Result`\>
