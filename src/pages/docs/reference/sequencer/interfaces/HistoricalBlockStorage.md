---
title: HistoricalBlockStorage
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / HistoricalBlockStorage

# Interface: HistoricalBlockStorage

Defined in: [packages/sequencer/src/storage/repositories/BlockStorage.ts:22](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/storage/repositories/BlockStorage.ts#L22)

## Properties

### getBlock()

> **getBlock**: (`hash`) => `Promise`\<`undefined` \| [`Block`](Block.md)\>

Defined in: [packages/sequencer/src/storage/repositories/BlockStorage.ts:24](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/storage/repositories/BlockStorage.ts#L24)

#### Parameters

##### hash

`string`

#### Returns

`Promise`\<`undefined` \| [`Block`](Block.md)\>

***

### getBlockAt()

> **getBlockAt**: (`height`) => `Promise`\<`undefined` \| [`Block`](Block.md)\>

Defined in: [packages/sequencer/src/storage/repositories/BlockStorage.ts:23](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/storage/repositories/BlockStorage.ts#L23)

#### Parameters

##### height

`number`

#### Returns

`Promise`\<`undefined` \| [`Block`](Block.md)\>
