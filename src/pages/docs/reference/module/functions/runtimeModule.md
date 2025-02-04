---
title: runtimeModule
---

[**@proto-kit/module**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/module](../README.md) / runtimeModule

# Function: runtimeModule()

> **runtimeModule**(): (`target`) => `void`

Defined in: [module/src/module/decorator.ts:10](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/module/src/module/decorator.ts#L10)

Marks the decorated class as a runtime module, while also
making it injectable with our dependency injection solution.

## Returns

`Function`

### Parameters

#### target

[`StaticConfigurableModule`](../../common/interfaces/StaticConfigurableModule.md)\<`unknown`\> & [`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`RuntimeModule`](../classes/RuntimeModule.md)\<`unknown`\>\>

Check if the target class extends RuntimeModule, while
also providing static config presets

### Returns

`void`
