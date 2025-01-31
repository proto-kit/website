---
title: MapDependencyRecordToTypes
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / MapDependencyRecordToTypes

# Type Alias: MapDependencyRecordToTypes\<Record\>

> **MapDependencyRecordToTypes**\<`Record`\>: `{ [Key in keyof Record as CapitalizeAny<Key>]: TypedClass<TypeFromDependencyDeclaration<Record[Key]>> }`

Defined in: [packages/common/src/dependencyFactory/DependencyFactory.ts:48](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/dependencyFactory/DependencyFactory.ts#L48)

## Type Parameters

• **Record** *extends* [`DependencyRecord`](DependencyRecord.md)
