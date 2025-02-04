---
title: BlockStorage
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / BlockStorage

# Interface: BlockStorage

Defined in: [packages/sequencer/src/storage/repositories/BlockStorage.ts:16](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/repositories/BlockStorage.ts#L16)

## Properties

### getCurrentBlockHeight()

> **getCurrentBlockHeight**: () => `Promise`\<`number`\>

Defined in: [packages/sequencer/src/storage/repositories/BlockStorage.ts:17](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/repositories/BlockStorage.ts#L17)

#### Returns

`Promise`\<`number`\>

***

### getLatestBlock()

> **getLatestBlock**: () => `Promise`\<`undefined` \| [`BlockWithResult`](BlockWithResult.md)\>

Defined in: [packages/sequencer/src/storage/repositories/BlockStorage.ts:18](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/repositories/BlockStorage.ts#L18)

#### Returns

`Promise`\<`undefined` \| [`BlockWithResult`](BlockWithResult.md)\>

***

### pushBlock()

> **pushBlock**: (`block`) => `Promise`\<`void`\>

Defined in: [packages/sequencer/src/storage/repositories/BlockStorage.ts:19](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/repositories/BlockStorage.ts#L19)

#### Parameters

##### block

[`Block`](Block.md)

#### Returns

`Promise`\<`void`\>
