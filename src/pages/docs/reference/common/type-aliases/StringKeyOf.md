---
title: StringKeyOf
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / StringKeyOf

# Type Alias: StringKeyOf\<Target\>

> **StringKeyOf**\<`Target`\>: `Extract`\<keyof `Target`, `string`\> & `string`

Defined in: [packages/common/src/types.ts:12](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/types.ts#L12)

Using simple `keyof Target` would result into the key
being `string | number | symbol`, but we want just a `string`

## Type Parameters

• **Target** *extends* `object`
