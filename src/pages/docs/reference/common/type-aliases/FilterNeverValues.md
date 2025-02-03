---
title: FilterNeverValues
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / FilterNeverValues

# Type Alias: FilterNeverValues\<Type\>

> **FilterNeverValues**\<`Type`\>: `{ [Key in keyof Type as Type[Key] extends never ? never : Key]: Type[Key] }`

Defined in: [packages/common/src/config/ModuleContainer.ts:125](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/config/ModuleContainer.ts#L125)

## Type Parameters

• **Type** *extends* `Record`\<`string`, `unknown`\>
