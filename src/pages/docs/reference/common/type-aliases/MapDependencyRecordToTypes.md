---
title: MapDependencyRecordToTypes
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / MapDependencyRecordToTypes

# Type Alias: MapDependencyRecordToTypes\<Record\>

> **MapDependencyRecordToTypes**\<`Record`\>: `{ [Key in keyof Record as CapitalizeAny<Key>]: TypedClass<TypeFromDependencyDeclaration<Record[Key]>> }`

Defined in: [packages/common/src/dependencyFactory/DependencyFactory.ts:48](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/dependencyFactory/DependencyFactory.ts#L48)

## Type Parameters

• **Record** *extends* [`DependencyRecord`](DependencyRecord.md)
