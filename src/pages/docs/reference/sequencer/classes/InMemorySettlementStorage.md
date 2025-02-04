---
title: InMemorySettlementStorage
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / InMemorySettlementStorage

# Class: InMemorySettlementStorage

Defined in: [packages/sequencer/src/storage/inmemory/InMemorySettlementStorage.ts:7](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/inmemory/InMemorySettlementStorage.ts#L7)

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

Defined in: [packages/sequencer/src/storage/inmemory/InMemorySettlementStorage.ts:8](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/inmemory/InMemorySettlementStorage.ts#L8)

## Methods

### pushSettlement()

> **pushSettlement**(`settlement`): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/storage/inmemory/InMemorySettlementStorage.ts:10](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/inmemory/InMemorySettlementStorage.ts#L10)

#### Parameters

##### settlement

[`Settlement`](../interfaces/Settlement.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`SettlementStorage`](../interfaces/SettlementStorage.md).[`pushSettlement`](../interfaces/SettlementStorage.md#pushsettlement)
