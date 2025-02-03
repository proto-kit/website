---
title: InMemorySettlementStorage
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / InMemorySettlementStorage

# Class: InMemorySettlementStorage

Defined in: [packages/sequencer/src/storage/inmemory/InMemorySettlementStorage.ts:7](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/inmemory/InMemorySettlementStorage.ts#L7)

## Implements

- [`SettlementStorage`](../interfaces/SettlementStorage.md)

## Constructors

### new InMemorySettlementStorage()

> **new InMemorySettlementStorage**(): [`InMemorySettlementStorage`](InMemorySettlementStorage.md)

#### Returns

[`InMemorySettlementStorage`](InMemorySettlementStorage.md)

## Properties

### settlements

> **settlements**: [`Settlement`](../interfaces/Settlement.md)[] = `[]`

Defined in: [packages/sequencer/src/storage/inmemory/InMemorySettlementStorage.ts:8](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/inmemory/InMemorySettlementStorage.ts#L8)

## Methods

### pushSettlement()

> **pushSettlement**(`settlement`): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/storage/inmemory/InMemorySettlementStorage.ts:10](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/inmemory/InMemorySettlementStorage.ts#L10)

#### Parameters

##### settlement

[`Settlement`](../interfaces/Settlement.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`SettlementStorage`](../interfaces/SettlementStorage.md).[`pushSettlement`](../interfaces/SettlementStorage.md#pushsettlement)
