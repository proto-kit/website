---
title: implement
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / implement

# Function: implement()

> **implement**\<`T`\>(`name`): (`target`) => `void`

Defined in: [packages/common/src/config/injectAlias.ts:51](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/config/injectAlias.ts#L51)

Marks the class to implement a certain interface T, while also attaching
a DI-injection alias as metadata, that will be picked up by the ModuleContainer
to allow resolving by that interface name

## Type Parameters

• **T**

## Parameters

### name

`string`

The name of the injection alias, convention is to use the same as the name of T

## Returns

`Function`

### Parameters

#### target

[`TypedClass`](../type-aliases/TypedClass.md)\<`T`\>

Check if the target class extends RuntimeModule, while
also providing static config presets

### Returns

`void`
