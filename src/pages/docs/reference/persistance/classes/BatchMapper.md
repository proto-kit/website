---
title: BatchMapper
---

[**@proto-kit/persistance**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/persistance](../README.md) / BatchMapper

# Class: BatchMapper

Defined in: [packages/persistance/src/services/prisma/mappers/BatchMapper.ts:9](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/services/prisma/mappers/BatchMapper.ts#L9)

## Implements

- `ObjectMapper`\<[`Batch`](../../sequencer/interfaces/Batch.md), \[`PrismaBatch`, `string`[]\]\>

## Constructors

### new BatchMapper()

> **new BatchMapper**(): [`BatchMapper`](BatchMapper.md)

#### Returns

[`BatchMapper`](BatchMapper.md)

## Methods

### mapIn()

> **mapIn**(`input`): [`Batch`](../../sequencer/interfaces/Batch.md)

Defined in: [packages/persistance/src/services/prisma/mappers/BatchMapper.ts:12](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/services/prisma/mappers/BatchMapper.ts#L12)

#### Parameters

##### input

\[\{ `height`: `number`; `proof`: `JsonValue`; `settlementTransactionHash`: `null` \| `string`; \}, `string`[]\]

#### Returns

[`Batch`](../../sequencer/interfaces/Batch.md)

#### Implementation of

`ObjectMapper.mapIn`

***

### mapOut()

> **mapOut**(`input`): \[\{ `height`: `number`; `proof`: `JsonValue`; `settlementTransactionHash`: `null` \| `string`; \}, `string`[]\]

Defined in: [packages/persistance/src/services/prisma/mappers/BatchMapper.ts:20](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/services/prisma/mappers/BatchMapper.ts#L20)

#### Parameters

##### input

[`Batch`](../../sequencer/interfaces/Batch.md)

#### Returns

\[\{ `height`: `number`; `proof`: `JsonValue`; `settlementTransactionHash`: `null` \| `string`; \}, `string`[]\]

#### Implementation of

`ObjectMapper.mapOut`
