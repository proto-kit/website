---
title: SettlementMapper
---

[**@proto-kit/persistance**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/persistance](../README.md) / SettlementMapper

# Class: SettlementMapper

Defined in: [packages/persistance/src/services/prisma/mappers/SettlementMapper.ts:8](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/services/prisma/mappers/SettlementMapper.ts#L8)

## Implements

- `ObjectMapper`\<[`Settlement`](../../sequencer/interfaces/Settlement.md), \[`DBSettlement`, `number`[]\]\>

## Constructors

### new SettlementMapper()

> **new SettlementMapper**(): [`SettlementMapper`](SettlementMapper.md)

#### Returns

[`SettlementMapper`](SettlementMapper.md)

## Methods

### mapIn()

> **mapIn**(`input`): [`Settlement`](../../sequencer/interfaces/Settlement.md)

Defined in: [packages/persistance/src/services/prisma/mappers/SettlementMapper.ts:11](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/services/prisma/mappers/SettlementMapper.ts#L11)

#### Parameters

##### input

\[\{ `promisedMessagesHash`: `string`; `transactionHash`: `string`; \}, `number`[]\]

#### Returns

[`Settlement`](../../sequencer/interfaces/Settlement.md)

#### Implementation of

`ObjectMapper.mapIn`

***

### mapOut()

> **mapOut**(`input`): \[\{ `promisedMessagesHash`: `string`; `transactionHash`: `string`; \}, `number`[]\]

Defined in: [packages/persistance/src/services/prisma/mappers/SettlementMapper.ts:21](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/services/prisma/mappers/SettlementMapper.ts#L21)

#### Parameters

##### input

[`Settlement`](../../sequencer/interfaces/Settlement.md)

#### Returns

\[\{ `promisedMessagesHash`: `string`; `transactionHash`: `string`; \}, `number`[]\]

#### Implementation of

`ObjectMapper.mapOut`
