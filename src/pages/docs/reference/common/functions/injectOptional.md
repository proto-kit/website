---
title: injectOptional
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / injectOptional

# Function: injectOptional()

> **injectOptional**\<`T`\>(`token`): (`target`, `propertyKey`, `parameterIndex`) => `any`

Defined in: [packages/common/src/dependencyFactory/injectOptional.ts:38](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/dependencyFactory/injectOptional.ts#L38)

This function injects a dependency only if it has been registered, otherwise
injects undefined. This can be useful for having optional dependencies, where
tsyringe would normally error out and not be able to resolve. With this
decorator, we can now do this.

The strategy we employ here is that we inject a dummy into the global
container that is of type UndefinedDisguise. We can't inject undefined
directly, therefore we use this object to disguise itself as undefined.
Then a child container registers something under the same token, it by
default resolves that new dependency. If that doesn't happen, the
resolution hits our disguise, which we then convert into undefined
using the Transform

## Type Parameters

• **T**

## Parameters

### token

`string`

## Returns

`Function`

### Parameters

#### target

`any`

#### propertyKey

`undefined` | `string` | `symbol`

#### parameterIndex

`number`

### Returns

`any`
