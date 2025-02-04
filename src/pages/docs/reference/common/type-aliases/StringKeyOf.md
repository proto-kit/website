---
title: StringKeyOf
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / StringKeyOf

# Type Alias: StringKeyOf\<Target\>

> **StringKeyOf**\<`Target`\>: `Extract`\<keyof `Target`, `string`\> & `string`

Defined in: [packages/common/src/types.ts:12](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/types.ts#L12)

Using simple `keyof Target` would result into the key
being `string | number | symbol`, but we want just a `string`

## Type Parameters

• **Target** *extends* `object`
