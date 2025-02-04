---
title: OverwriteObjectType
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / OverwriteObjectType

# Type Alias: OverwriteObjectType\<Base, New\>

> **OverwriteObjectType**\<`Base`, `New`\>: `{ [Key in keyof Base]: Key extends keyof New ? New[Key] : Base[Key] }` & `New`

Defined in: [packages/common/src/types.ts:47](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/types.ts#L47)

## Type Parameters

• **Base**

• **New**
