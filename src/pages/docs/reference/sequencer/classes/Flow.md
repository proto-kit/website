---
title: Flow
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / Flow

# Class: Flow\<State\>

Defined in: [packages/sequencer/src/worker/flow/Flow.ts:20](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/flow/Flow.ts#L20)

## Type Parameters

• **State**

## Implements

- [`Closeable`](../interfaces/Closeable.md)

## Constructors

### new Flow()

> **new Flow**\<`State`\>(`queueImpl`, `flowId`, `state`): [`Flow`](Flow.md)\<`State`\>

Defined in: [packages/sequencer/src/worker/flow/Flow.ts:42](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/flow/Flow.ts#L42)

#### Parameters

##### queueImpl

[`TaskQueue`](../interfaces/TaskQueue.md)

##### flowId

`string`

##### state

`State`

#### Returns

[`Flow`](Flow.md)\<`State`\>

## Properties

### flowId

> `readonly` **flowId**: `string`

Defined in: [packages/sequencer/src/worker/flow/Flow.ts:44](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/flow/Flow.ts#L44)

***

### state

> **state**: `State`

Defined in: [packages/sequencer/src/worker/flow/Flow.ts:45](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/flow/Flow.ts#L45)

***

### tasksInProgress

> **tasksInProgress**: `number` = `0`

Defined in: [packages/sequencer/src/worker/flow/Flow.ts:40](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/flow/Flow.ts#L40)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/worker/flow/Flow.ts:166](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/flow/Flow.ts#L166)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Closeable`](../interfaces/Closeable.md).[`close`](../interfaces/Closeable.md#close)

***

### forEach()

> **forEach**\<`Type`\>(`inputs`, `fun`): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/worker/flow/Flow.ts:145](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/flow/Flow.ts#L145)

#### Type Parameters

• **Type**

#### Parameters

##### inputs

`Type`[]

##### fun

(`input`, `index`, `array`) => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### pushTask()

> **pushTask**\<`Input`, `Result`\>(`task`, `input`, `completed`?, `overrides`?): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/worker/flow/Flow.ts:102](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/flow/Flow.ts#L102)

#### Type Parameters

• **Input**

• **Result**

#### Parameters

##### task

[`Task`](../interfaces/Task.md)\<`Input`, `Result`\>

##### input

`Input`

##### completed?

`CompletedCallback`\<`Input`, `Result`\>

##### overrides?

###### taskName

`string`

#### Returns

`Promise`\<`void`\>

***

### reject()

> **reject**(`error`): `void`

Defined in: [packages/sequencer/src/worker/flow/Flow.ts:75](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/flow/Flow.ts#L75)

#### Parameters

##### error

`Error`

#### Returns

`void`

***

### resolve()

> **resolve**\<`Result`\>(`result`): `void`

Defined in: [packages/sequencer/src/worker/flow/Flow.ts:68](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/flow/Flow.ts#L68)

#### Type Parameters

• **Result**

#### Parameters

##### result

`Result`

#### Returns

`void`

***

### withFlow()

> **withFlow**\<`Result`\>(`executor`): `Promise`\<`Result`\>

Defined in: [packages/sequencer/src/worker/flow/Flow.ts:153](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/flow/Flow.ts#L153)

#### Type Parameters

• **Result**

#### Parameters

##### executor

(`resolve`, `reject`) => `Promise`\<`void`\>

#### Returns

`Promise`\<`Result`\>
