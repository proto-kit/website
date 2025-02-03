---
title: toWrappedMethod
---

[**@proto-kit/module**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/module](../README.md) / toWrappedMethod

# Function: toWrappedMethod()

> **toWrappedMethod**(`this`, `methodName`, `moduleMethod`, `options`): [`AsyncWrappedMethod`](../type-aliases/AsyncWrappedMethod.md)

Defined in: [module/src/method/runtimeMethod.ts:76](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/module/src/method/runtimeMethod.ts#L76)

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
