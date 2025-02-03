---
title: ReductionTaskFlow
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / ReductionTaskFlow

# Class: ReductionTaskFlow\<Input, Output\>

Defined in: [packages/sequencer/src/protocol/production/flow/ReductionTaskFlow.ts:30](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/flow/ReductionTaskFlow.ts#L30)

This class builds and executes a flow that follows the map-reduce pattern.
This works in 2 steps:
1. Mapping: Execute the mappingTask to transform from Input -> Output
2. Reduction: Find suitable pairs and merge them [Output, Output] -> Output

We use this pattern extensively in our pipeline,

## Type Parameters

• **Input**

• **Output**

## Constructors

### new ReductionTaskFlow()

> **new ReductionTaskFlow**\<`Input`, `Output`\>(`options`, `flowCreator`): [`ReductionTaskFlow`](ReductionTaskFlow.md)\<`Input`, `Output`\>

Defined in: [packages/sequencer/src/protocol/production/flow/ReductionTaskFlow.ts:37](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/flow/ReductionTaskFlow.ts#L37)

#### Parameters

##### options

###### inputLength

`number`

###### mappingTask

[`Task`](../interfaces/Task.md)\<`Input`, `Output`\>

###### mergableFunction

(`a`, `b`) => `boolean`

###### name

`string`

###### reductionTask

[`Task`](../interfaces/Task.md)\<[`PairTuple`](../type-aliases/PairTuple.md)\<`Output`\>, `Output`\>

##### flowCreator

[`FlowCreator`](FlowCreator.md)

#### Returns

[`ReductionTaskFlow`](ReductionTaskFlow.md)\<`Input`, `Output`\>

## Methods

### deferErrorsTo()

> **deferErrorsTo**(`flow`): `void`

Defined in: [packages/sequencer/src/protocol/production/flow/ReductionTaskFlow.ts:184](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/flow/ReductionTaskFlow.ts#L184)

To be used in conjunction with onCompletion
It allows errors from this flow to be "defered" to another parent
flow which might be properly awaited and therefore will throw the
error up to the user

#### Parameters

##### flow

[`Flow`](Flow.md)\<`unknown`\>

#### Returns

`void`

***

### execute()

> **execute**(`inputs`): `Promise`\<`Output`\>

Defined in: [packages/sequencer/src/protocol/production/flow/ReductionTaskFlow.ts:193](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/flow/ReductionTaskFlow.ts#L193)

Execute the flow using the returned Promise that resolved when
the flow is finished

#### Parameters

##### inputs

`Input`[] = `[]`

initial inputs - doesnt have to be the complete set of inputs

#### Returns

`Promise`\<`Output`\>

***

### onCompletion()

> **onCompletion**(`callback`): `void`

Defined in: [packages/sequencer/src/protocol/production/flow/ReductionTaskFlow.ts:173](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/flow/ReductionTaskFlow.ts#L173)

Execute the flow using a callback method that is invoked upon
completion of the flow.
Push inputs using pushInput()

#### Parameters

##### callback

(`output`) => `Promise`\<`void`\>

#### Returns

`void`

***

### pushInput()

> **pushInput**(`input`): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/protocol/production/flow/ReductionTaskFlow.ts:205](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/flow/ReductionTaskFlow.ts#L205)

#### Parameters

##### input

`Input`

#### Returns

`Promise`\<`void`\>
