---
title: OverwriteObjectType
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / OverwriteObjectType

# Type Alias: OverwriteObjectType\<Base, New\>

> **OverwriteObjectType**\<`Base`, `New`\>: `{ [Key in keyof Base]: Key extends keyof New ? New[Key] : Base[Key] }` & `New`

Defined in: [packages/common/src/types.ts:47](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/types.ts#L47)

## Type Parameters

• **Base**

• **New**
