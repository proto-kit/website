---
title: UnionToIntersection
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / UnionToIntersection

# Type Alias: UnionToIntersection\<Union\>

> **UnionToIntersection**\<`Union`\>: `Union` *extends* `any` ? (`x`) => `void` : `never` *extends* (`x`) => `void` ? `Intersection` : `never`

Defined in: [packages/common/src/types.ts:24](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/types.ts#L24)

Transforms X | Y => X & Y

## Type Parameters

• **Union**
