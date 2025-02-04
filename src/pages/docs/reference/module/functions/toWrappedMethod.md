---
title: toWrappedMethod
---

[**@proto-kit/module**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/module](../README.md) / toWrappedMethod

# Function: toWrappedMethod()

> **toWrappedMethod**(`this`, `methodName`, `moduleMethod`, `options`): [`AsyncWrappedMethod`](../type-aliases/AsyncWrappedMethod.md)

Defined in: [module/src/method/runtimeMethod.ts:79](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/module/src/method/runtimeMethod.ts#L79)

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
