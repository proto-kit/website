---
title: splitArray
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / splitArray

# Function: splitArray()

> **splitArray**\<`T`, `K`\>(`arr`, `split`): `Record`\<`K`, `T`[] \| `undefined`\>

Defined in: [packages/common/src/utils.ts:26](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/utils.ts#L26)

Utility function to split an array of type T into a record <K, T[]> based on a
function T => K that determines the key of each record

## Type Parameters

• **T**

• **K** *extends* `string` \| `number`

## Parameters

### arr

`T`[]

### split

(`t`) => `K`

## Returns

`Record`\<`K`, `T`[] \| `undefined`\>
