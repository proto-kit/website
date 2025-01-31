---
title: RecursivePartial
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / RecursivePartial

# Type Alias: RecursivePartial\<T\>

> **RecursivePartial**\<`T`\>: `{ [Key in keyof T]?: Partial<T[Key]> }`

Defined in: [packages/common/src/config/ModuleContainer.ts:108](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/config/ModuleContainer.ts#L108)

This type make any config partial (i.e. optional) up to the first level
So { Module: { a: { b: string } } }
will become
{ Module?: { a?: { b: string } } }
Note that b does not become optional, as we don't want nested objects to
become unreasonably partialized (for example Field).

## Type Parameters

• **T**
