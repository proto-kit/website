---
title: executeWithExecutionContext
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / executeWithExecutionContext

# Function: executeWithExecutionContext()

> **executeWithExecutionContext**\<`MethodResult`\>(`method`, `contextInputs`, `runSimulated`): `Promise`\<[`RuntimeContextReducedExecutionResult`](../type-aliases/RuntimeContextReducedExecutionResult.md) & `object`\>

Defined in: [packages/sequencer/src/protocol/production/sequencing/TransactionExecutionService.ts:109](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/sequencing/TransactionExecutionService.ts#L109)

## Type Parameters

• **MethodResult**

## Parameters

### method

() => `Promise`\<`MethodResult`\>

### contextInputs

[`RuntimeMethodExecutionData`](../../protocol/interfaces/RuntimeMethodExecutionData.md)

### runSimulated

`boolean` = `false`

## Returns

`Promise`\<[`RuntimeContextReducedExecutionResult`](../type-aliases/RuntimeContextReducedExecutionResult.md) & `object`\>
