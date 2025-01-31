---
title: toWrappedMethod
---

[**@proto-kit/module**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/module](../README.md) / toWrappedMethod

# Function: toWrappedMethod()

> **toWrappedMethod**(`this`, `methodName`, `moduleMethod`, `options`): [`AsyncWrappedMethod`](../type-aliases/AsyncWrappedMethod.md)

Defined in: [module/src/method/runtimeMethod.ts:76](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/module/src/method/runtimeMethod.ts#L76)

## Parameters

### this

[`RuntimeModule`](../classes/RuntimeModule.md)\<`unknown`\>

### methodName

`string`

### moduleMethod

(...`args`) => `Promise`\<`any`\>

### options

#### invocationType

[`RuntimeMethodInvocationType`](../type-aliases/RuntimeMethodInvocationType.md)

## Returns

[`AsyncWrappedMethod`](../type-aliases/AsyncWrappedMethod.md)
