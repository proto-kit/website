---
title: InMemoryBlockStorage
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / InMemoryBlockStorage

# Class: InMemoryBlockStorage

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryBlockStorage.ts:18](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/inmemory/InMemoryBlockStorage.ts#L18)

## Implements

- [`BlockStorage`](../interfaces/BlockStorage.md)
- [`HistoricalBlockStorage`](../interfaces/HistoricalBlockStorage.md)
- [`BlockQueue`](../interfaces/BlockQueue.md)

## Constructors

### new InMemoryBlockStorage()

> **new InMemoryBlockStorage**(`batchStorage`): [`InMemoryBlockStorage`](InMemoryBlockStorage.md)

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryBlockStorage.ts:21](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/inmemory/InMemoryBlockStorage.ts#L21)

#### Parameters

##### batchStorage

[`BatchStorage`](../interfaces/BatchStorage.md)

#### Returns

[`InMemoryBlockStorage`](InMemoryBlockStorage.md)

## Methods

### getBlock()

> **getBlock**(`hash`): `Promise`\<`undefined` \| [`Block`](../interfaces/Block.md)\>

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryBlockStorage.ts:112](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/inmemory/InMemoryBlockStorage.ts#L112)

#### Parameters

##### hash

`string`

#### Returns

`Promise`\<`undefined` \| [`Block`](../interfaces/Block.md)\>

#### Implementation of

[`HistoricalBlockStorage`](../interfaces/HistoricalBlockStorage.md).[`getBlock`](../interfaces/HistoricalBlockStorage.md#getblock)

***

### getBlockAt()

> **getBlockAt**(`height`): `Promise`\<`undefined` \| [`Block`](../interfaces/Block.md)\>

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryBlockStorage.ts:29](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/inmemory/InMemoryBlockStorage.ts#L29)

#### Parameters

##### height

`number`

#### Returns

`Promise`\<`undefined` \| [`Block`](../interfaces/Block.md)\>

#### Implementation of

[`HistoricalBlockStorage`](../interfaces/HistoricalBlockStorage.md).[`getBlockAt`](../interfaces/HistoricalBlockStorage.md#getblockat)

***

### getCurrentBlockHeight()

> **getCurrentBlockHeight**(): `Promise`\<`number`\>

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryBlockStorage.ts:33](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/inmemory/InMemoryBlockStorage.ts#L33)

#### Returns

`Promise`\<`number`\>

#### Implementation of

[`BlockStorage`](../interfaces/BlockStorage.md).[`getCurrentBlockHeight`](../interfaces/BlockStorage.md#getcurrentblockheight)

***

### getLatestBlock()

> **getLatestBlock**(): `Promise`\<`undefined` \| [`BlockWithResult`](../interfaces/BlockWithResult.md)\>

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryBlockStorage.ts:52](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/inmemory/InMemoryBlockStorage.ts#L52)

#### Returns

`Promise`\<`undefined` \| [`BlockWithResult`](../interfaces/BlockWithResult.md)\>

#### Implementation of

[`BlockStorage`](../interfaces/BlockStorage.md).[`getLatestBlock`](../interfaces/BlockStorage.md#getlatestblock)

***

### getLatestBlockAndResult()

> **getLatestBlockAndResult**(): `Promise`\<`undefined` \| [`BlockWithMaybeResult`](../interfaces/BlockWithMaybeResult.md)\>

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryBlockStorage.ts:37](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/inmemory/InMemoryBlockStorage.ts#L37)

#### Returns

`Promise`\<`undefined` \| [`BlockWithMaybeResult`](../interfaces/BlockWithMaybeResult.md)\>

#### Implementation of

[`BlockQueue`](../interfaces/BlockQueue.md).[`getLatestBlockAndResult`](../interfaces/BlockQueue.md#getlatestblockandresult)

***

### getNewBlocks()

> **getNewBlocks**(): `Promise`\<[`BlockWithPreviousResult`](../interfaces/BlockWithPreviousResult.md)[]\>

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryBlockStorage.ts:68](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/inmemory/InMemoryBlockStorage.ts#L68)

#### Returns

`Promise`\<[`BlockWithPreviousResult`](../interfaces/BlockWithPreviousResult.md)[]\>

#### Implementation of

[`BlockQueue`](../interfaces/BlockQueue.md).[`getNewBlocks`](../interfaces/BlockQueue.md#getnewblocks)

***

### getNewestResult()

> **getNewestResult**(): `Promise`\<`undefined` \| [`BlockResult`](../interfaces/BlockResult.md)\>

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryBlockStorage.ts:104](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/inmemory/InMemoryBlockStorage.ts#L104)

#### Returns

`Promise`\<`undefined` \| [`BlockResult`](../interfaces/BlockResult.md)\>

***

### pushBlock()

> **pushBlock**(`block`): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryBlockStorage.ts:100](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/inmemory/InMemoryBlockStorage.ts#L100)

#### Parameters

##### block

[`Block`](../interfaces/Block.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`BlockQueue`](../interfaces/BlockQueue.md).[`pushBlock`](../interfaces/BlockQueue.md#pushblock)

***

### pushResult()

> **pushResult**(`result`): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryBlockStorage.ts:108](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/inmemory/InMemoryBlockStorage.ts#L108)

#### Parameters

##### result

[`BlockResult`](../interfaces/BlockResult.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`BlockQueue`](../interfaces/BlockQueue.md).[`pushResult`](../interfaces/BlockQueue.md#pushresult)
