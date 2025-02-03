---
title: OverwriteObjectType
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / OverwriteObjectType

# Type Alias: OverwriteObjectType\<Base, New\>

> **OverwriteObjectType**\<`Base`, `New`\>: `{ [Key in keyof Base]: Key extends keyof New ? New[Key] : Base[Key] }` & `New`

Defined in: [packages/common/src/types.ts:47](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/types.ts#L47)

## Type Parameters

• **Base**

• **New**
