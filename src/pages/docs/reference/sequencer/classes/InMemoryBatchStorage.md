---
title: InMemoryBatchStorage
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / InMemoryBatchStorage

# Class: InMemoryBatchStorage

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryBatchStorage.ts:9](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/inmemory/InMemoryBatchStorage.ts#L9)

## Implements

- [`BatchStorage`](../interfaces/BatchStorage.md)
- [`HistoricalBatchStorage`](../interfaces/HistoricalBatchStorage.md)

## Constructors

### new InMemoryBatchStorage()

> **new InMemoryBatchStorage**(): [`InMemoryBatchStorage`](InMemoryBatchStorage.md)

#### Returns

[`InMemoryBatchStorage`](InMemoryBatchStorage.md)

## Methods

### getBatchAt()

> **getBatchAt**(`height`): `Promise`\<`undefined` \| [`Batch`](../interfaces/Batch.md)\>

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryBatchStorage.ts:18](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/inmemory/InMemoryBatchStorage.ts#L18)

#### Parameters

##### height

`number`

#### Returns

`Promise`\<`undefined` \| [`Batch`](../interfaces/Batch.md)\>

#### Implementation of

[`HistoricalBatchStorage`](../interfaces/HistoricalBatchStorage.md).[`getBatchAt`](../interfaces/HistoricalBatchStorage.md#getbatchat)

***

### getCurrentBatchHeight()

> **getCurrentBatchHeight**(): `Promise`\<`number`\>

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryBatchStorage.ts:14](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/inmemory/InMemoryBatchStorage.ts#L14)

#### Returns

`Promise`\<`number`\>

#### Implementation of

[`BatchStorage`](../interfaces/BatchStorage.md).[`getCurrentBatchHeight`](../interfaces/BatchStorage.md#getcurrentbatchheight)

***

### getLatestBatch()

> **getLatestBatch**(): `Promise`\<`undefined` \| [`Batch`](../interfaces/Batch.md)\>

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryBatchStorage.ts:27](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/inmemory/InMemoryBatchStorage.ts#L27)

#### Returns

`Promise`\<`undefined` \| [`Batch`](../interfaces/Batch.md)\>

#### Implementation of

[`BatchStorage`](../interfaces/BatchStorage.md).[`getLatestBatch`](../interfaces/BatchStorage.md#getlatestbatch)

***

### pushBatch()

> **pushBatch**(`batch`): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryBatchStorage.ts:22](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/inmemory/InMemoryBatchStorage.ts#L22)

#### Parameters

##### batch

[`Batch`](../interfaces/Batch.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`BatchStorage`](../interfaces/BatchStorage.md).[`pushBatch`](../interfaces/BatchStorage.md#pushbatch)
