---
title: OmitKeys
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / OmitKeys

# Type Alias: OmitKeys\<Record, Keys\>

> **OmitKeys**\<`Record`, `Keys`\>: `{ [Key in keyof Record as Key extends Keys ? never : Key]: Record[Key] }`

Defined in: [packages/common/src/types.ts:33](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/types.ts#L33)

## Type Parameters

• **Record**

• **Keys**
