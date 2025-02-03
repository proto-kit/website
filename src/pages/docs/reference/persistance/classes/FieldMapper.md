---
title: FieldMapper
---

[**@proto-kit/persistance**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/persistance](../README.md) / FieldMapper

# Class: FieldMapper

Defined in: [packages/persistance/src/services/prisma/mappers/FieldMapper.ts:7](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/services/prisma/mappers/FieldMapper.ts#L7)

## Implements

- `ObjectMapper`\<`Field`[], `string`\>

## Constructors

### new FieldMapper()

> **new FieldMapper**(): [`FieldMapper`](FieldMapper.md)

#### Returns

[`FieldMapper`](FieldMapper.md)

## Methods

### mapIn()

> **mapIn**(`input`): `Field`[]

Defined in: [packages/persistance/src/services/prisma/mappers/FieldMapper.ts:8](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/services/prisma/mappers/FieldMapper.ts#L8)

#### Parameters

##### input

`string`

#### Returns

`Field`[]

#### Implementation of

`ObjectMapper.mapIn`

***

### mapOut()

> **mapOut**(`input`): `string`

Defined in: [packages/persistance/src/services/prisma/mappers/FieldMapper.ts:12](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/services/prisma/mappers/FieldMapper.ts#L12)

#### Parameters

##### input

`Field`[]

#### Returns

`string`

#### Implementation of

`ObjectMapper.mapOut`
