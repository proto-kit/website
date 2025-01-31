---
title: TaskSerializer
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / TaskSerializer

# Interface: TaskSerializer\<Type\>

Defined in: [packages/sequencer/src/worker/flow/Task.ts:12](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/flow/Task.ts#L12)

## Type Parameters

• **Type**

## Properties

### fromJSON()

> **fromJSON**: (`json`) => `Type` \| `Promise`\<`Type`\>

Defined in: [packages/sequencer/src/worker/flow/Task.ts:14](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/flow/Task.ts#L14)

#### Parameters

##### json

`string`

#### Returns

`Type` \| `Promise`\<`Type`\>

***

### toJSON()

> **toJSON**: (`input`) => `string` \| `Promise`\<`string`\>

Defined in: [packages/sequencer/src/worker/flow/Task.ts:13](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/flow/Task.ts#L13)

#### Parameters

##### input

`Type`

#### Returns

`string` \| `Promise`\<`string`\>
