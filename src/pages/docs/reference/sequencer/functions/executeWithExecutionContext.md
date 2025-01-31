---
title: executeWithExecutionContext
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / executeWithExecutionContext

# Function: executeWithExecutionContext()

> **executeWithExecutionContext**\<`MethodResult`\>(`method`, `contextInputs`, `runSimulated`): `Promise`\<[`RuntimeContextReducedExecutionResult`](../type-aliases/RuntimeContextReducedExecutionResult.md) & `object`\>

Defined in: [packages/sequencer/src/protocol/production/sequencing/TransactionExecutionService.ts:109](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/sequencing/TransactionExecutionService.ts#L109)

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
