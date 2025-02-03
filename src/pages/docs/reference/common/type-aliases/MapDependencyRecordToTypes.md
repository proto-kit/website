---
title: MapDependencyRecordToTypes
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / MapDependencyRecordToTypes

# Type Alias: MapDependencyRecordToTypes\<Record\>

> **MapDependencyRecordToTypes**\<`Record`\>: `{ [Key in keyof Record as CapitalizeAny<Key>]: TypedClass<TypeFromDependencyDeclaration<Record[Key]>> }`

Defined in: [packages/common/src/dependencyFactory/DependencyFactory.ts:48](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/dependencyFactory/DependencyFactory.ts#L48)

## Type Parameters

• **Record** *extends* [`DependencyRecord`](DependencyRecord.md)
