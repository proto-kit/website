---
title: isRuntimeMethod
---

[**@proto-kit/module**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/module](../README.md) / isRuntimeMethod

# Function: isRuntimeMethod()

> **isRuntimeMethod**(`target`, `propertyKey`): `boolean`

Defined in: [module/src/method/runtimeMethod.ts:185](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/module/src/method/runtimeMethod.ts#L185)

Checks the metadata of the provided runtime module and its method,
to see if it has been decorated with @runtimeMethod()

## Parameters

### target

[`RuntimeModule`](../classes/RuntimeModule.md)\<`unknown`\>

Runtime module to check

### propertyKey

`string`

Name of the method to check in the prior runtime module

## Returns

`boolean`

- If the provided method name is a runtime method or not
