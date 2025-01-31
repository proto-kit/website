---
title: splitArray
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / splitArray

# Function: splitArray()

> **splitArray**\<`T`, `K`\>(`arr`, `split`): `Record`\<`K`, `T`[] \| `undefined`\>

Defined in: [packages/common/src/utils.ts:26](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/utils.ts#L26)

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
