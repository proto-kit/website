---
title: BatchStorage
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / BatchStorage

# Interface: BatchStorage

Defined in: [packages/sequencer/src/storage/repositories/BatchStorage.ts:3](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/repositories/BatchStorage.ts#L3)

## Properties

### getCurrentBatchHeight()

> **getCurrentBatchHeight**: () => `Promise`\<`number`\>

Defined in: [packages/sequencer/src/storage/repositories/BatchStorage.ts:5](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/repositories/BatchStorage.ts#L5)

#### Returns

`Promise`\<`number`\>

***

### getLatestBatch()

> **getLatestBatch**: () => `Promise`\<`undefined` \| [`Batch`](Batch.md)\>

Defined in: [packages/sequencer/src/storage/repositories/BatchStorage.ts:6](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/repositories/BatchStorage.ts#L6)

#### Returns

`Promise`\<`undefined` \| [`Batch`](Batch.md)\>

***

### pushBatch()

> **pushBatch**: (`block`) => `Promise`\<`void`\>

Defined in: [packages/sequencer/src/storage/repositories/BatchStorage.ts:7](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/repositories/BatchStorage.ts#L7)

#### Parameters

##### block

[`Batch`](Batch.md)

#### Returns

`Promise`\<`void`\>
