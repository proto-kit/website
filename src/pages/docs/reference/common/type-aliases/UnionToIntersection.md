---
title: UnionToIntersection
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / UnionToIntersection

# Type Alias: UnionToIntersection\<Union\>

> **UnionToIntersection**\<`Union`\>: `Union` *extends* `any` ? (`x`) => `void` : `never` *extends* (`x`) => `void` ? `Intersection` : `never`

Defined in: [packages/common/src/types.ts:24](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/types.ts#L24)

Transforms X | Y => X & Y

## Type Parameters

• **Union**
