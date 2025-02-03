---
title: OmitKeys
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / OmitKeys

# Type Alias: OmitKeys\<Record, Keys\>

> **OmitKeys**\<`Record`, `Keys`\>: `{ [Key in keyof Record as Key extends Keys ? never : Key]: Record[Key] }`

Defined in: [packages/common/src/types.ts:33](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/types.ts#L33)

## Type Parameters

• **Record**

• **Keys**
