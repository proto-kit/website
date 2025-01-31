---
title: isRuntimeMethod
---

[**@proto-kit/module**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/module](../README.md) / isRuntimeMethod

# Function: isRuntimeMethod()

> **isRuntimeMethod**(`target`, `propertyKey`): `boolean`

Defined in: [module/src/method/runtimeMethod.ts:182](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/module/src/method/runtimeMethod.ts#L182)

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
