---
title: BlockQueue
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / BlockQueue

# Interface: BlockQueue

Defined in: [packages/sequencer/src/storage/repositories/BlockStorage.ts:9](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/repositories/BlockStorage.ts#L9)

## Properties

### getLatestBlockAndResult()

> **getLatestBlockAndResult**: () => `Promise`\<`undefined` \| [`BlockWithMaybeResult`](BlockWithMaybeResult.md)\>

Defined in: [packages/sequencer/src/storage/repositories/BlockStorage.ts:13](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/repositories/BlockStorage.ts#L13)

#### Returns

`Promise`\<`undefined` \| [`BlockWithMaybeResult`](BlockWithMaybeResult.md)\>

***

### getNewBlocks()

> **getNewBlocks**: () => `Promise`\<[`BlockWithPreviousResult`](BlockWithPreviousResult.md)[]\>

Defined in: [packages/sequencer/src/storage/repositories/BlockStorage.ts:12](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/repositories/BlockStorage.ts#L12)

#### Returns

`Promise`\<[`BlockWithPreviousResult`](BlockWithPreviousResult.md)[]\>

***

### pushBlock()

> **pushBlock**: (`block`) => `Promise`\<`void`\>

Defined in: [packages/sequencer/src/storage/repositories/BlockStorage.ts:10](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/repositories/BlockStorage.ts#L10)

#### Parameters

##### block

[`Block`](Block.md)

#### Returns

`Promise`\<`void`\>

***

### pushResult()

> **pushResult**: (`result`) => `Promise`\<`void`\>

Defined in: [packages/sequencer/src/storage/repositories/BlockStorage.ts:11](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/repositories/BlockStorage.ts#L11)

#### Parameters

##### result

[`BlockResult`](BlockResult.md)

#### Returns

`Promise`\<`void`\>
