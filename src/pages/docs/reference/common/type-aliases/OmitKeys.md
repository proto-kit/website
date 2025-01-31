---
title: OmitKeys
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / OmitKeys

# Type Alias: OmitKeys\<Record, Keys\>

> **OmitKeys**\<`Record`, `Keys`\>: `{ [Key in keyof Record as Key extends Keys ? never : Key]: Record[Key] }`

Defined in: [packages/common/src/types.ts:33](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/types.ts#L33)

## Type Parameters

• **Record**

• **Keys**
