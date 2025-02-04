---
title: FilterNeverValues
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / FilterNeverValues

# Type Alias: FilterNeverValues\<Type\>

> **FilterNeverValues**\<`Type`\>: `{ [Key in keyof Type as Type[Key] extends never ? never : Key]: Type[Key] }`

Defined in: [packages/common/src/config/ModuleContainer.ts:125](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/config/ModuleContainer.ts#L125)

## Type Parameters

• **Type** *extends* `Record`\<`string`, `unknown`\>
