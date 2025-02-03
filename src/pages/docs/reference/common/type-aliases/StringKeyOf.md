---
title: StringKeyOf
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / StringKeyOf

# Type Alias: StringKeyOf\<Target\>

> **StringKeyOf**\<`Target`\>: `Extract`\<keyof `Target`, `string`\> & `string`

Defined in: [packages/common/src/types.ts:12](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/types.ts#L12)

Using simple `keyof Target` would result into the key
being `string | number | symbol`, but we want just a `string`

## Type Parameters

• **Target** *extends* `object`
