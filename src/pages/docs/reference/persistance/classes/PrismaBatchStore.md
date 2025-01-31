---
title: PrismaBatchStore
---

[**@proto-kit/persistance**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/persistance](../README.md) / PrismaBatchStore

# Class: PrismaBatchStore

Defined in: [packages/persistance/src/services/prisma/PrismaBatchStore.ts:14](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/PrismaBatchStore.ts#L14)

## Implements

- [`BatchStorage`](../../sequencer/interfaces/BatchStorage.md)
- [`HistoricalBatchStorage`](../../sequencer/interfaces/HistoricalBatchStorage.md)

## Constructors

### new PrismaBatchStore()

> **new PrismaBatchStore**(`connection`, `batchMapper`): [`PrismaBatchStore`](PrismaBatchStore.md)

Defined in: [packages/persistance/src/services/prisma/PrismaBatchStore.ts:15](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/PrismaBatchStore.ts#L15)

#### Parameters

##### connection

[`PrismaConnection`](../interfaces/PrismaConnection.md)

##### batchMapper

[`BatchMapper`](BatchMapper.md)

#### Returns

[`PrismaBatchStore`](PrismaBatchStore.md)

## Methods

### getBatchAt()

> **getBatchAt**(`height`): `Promise`\<`undefined` \| [`Batch`](../../sequencer/interfaces/Batch.md)\>

Defined in: [packages/persistance/src/services/prisma/PrismaBatchStore.ts:20](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/PrismaBatchStore.ts#L20)

#### Parameters

##### height

`number`

#### Returns

`Promise`\<`undefined` \| [`Batch`](../../sequencer/interfaces/Batch.md)\>

#### Implementation of

[`HistoricalBatchStorage`](../../sequencer/interfaces/HistoricalBatchStorage.md).[`getBatchAt`](../../sequencer/interfaces/HistoricalBatchStorage.md#getbatchat)

***

### getCurrentBatchHeight()

> **getCurrentBatchHeight**(): `Promise`\<`number`\>

Defined in: [packages/persistance/src/services/prisma/PrismaBatchStore.ts:42](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/PrismaBatchStore.ts#L42)

#### Returns

`Promise`\<`number`\>

#### Implementation of

[`BatchStorage`](../../sequencer/interfaces/BatchStorage.md).[`getCurrentBatchHeight`](../../sequencer/interfaces/BatchStorage.md#getcurrentbatchheight)

***

### getLatestBatch()

> **getLatestBatch**(): `Promise`\<`undefined` \| [`Batch`](../../sequencer/interfaces/Batch.md)\>

Defined in: [packages/persistance/src/services/prisma/PrismaBatchStore.ts:71](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/PrismaBatchStore.ts#L71)

#### Returns

`Promise`\<`undefined` \| [`Batch`](../../sequencer/interfaces/Batch.md)\>

#### Implementation of

[`BatchStorage`](../../sequencer/interfaces/BatchStorage.md).[`getLatestBatch`](../../sequencer/interfaces/BatchStorage.md#getlatestbatch)

***

### pushBatch()

> **pushBatch**(`batch`): `Promise`\<`void`\>

Defined in: [packages/persistance/src/services/prisma/PrismaBatchStore.ts:51](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/PrismaBatchStore.ts#L51)

#### Parameters

##### batch

[`Batch`](../../sequencer/interfaces/Batch.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`BatchStorage`](../../sequencer/interfaces/BatchStorage.md).[`pushBatch`](../../sequencer/interfaces/BatchStorage.md#pushbatch)
