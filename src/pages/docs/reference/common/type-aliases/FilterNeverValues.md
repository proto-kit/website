---
title: FilterNeverValues
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / FilterNeverValues

# Type Alias: FilterNeverValues\<Type\>

> **FilterNeverValues**\<`Type`\>: `{ [Key in keyof Type as Type[Key] extends never ? never : Key]: Type[Key] }`

Defined in: [packages/common/src/config/ModuleContainer.ts:125](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/config/ModuleContainer.ts#L125)

## Type Parameters

• **Type** *extends* `Record`\<`string`, `unknown`\>
