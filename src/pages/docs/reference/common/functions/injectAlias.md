---
title: injectAlias
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / injectAlias

# Function: injectAlias()

> **injectAlias**(`aliases`): (`target`) => `void`

Defined in: [packages/common/src/config/injectAlias.ts:11](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/config/injectAlias.ts#L11)

Attaches metadata to the class that the ModuleContainer can pick up
and inject this class in the DI container under the specified aliases.
This method supports inheritance, therefore also gets aliases defined
on superclasses

## Parameters

### aliases

`string`[]

## Returns

`Function`

### Parameters

#### target

[`TypedClass`](../type-aliases/TypedClass.md)\<`unknown`\>

### Returns

`void`
