---
title: PrismaBlockStorage
---

[**@proto-kit/persistance**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/persistance](../README.md) / PrismaBlockStorage

# Class: PrismaBlockStorage

Defined in: [packages/persistance/src/services/prisma/PrismaBlockStorage.ts:30](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/PrismaBlockStorage.ts#L30)

## Implements

- [`BlockQueue`](../../sequencer/interfaces/BlockQueue.md)
- [`BlockStorage`](../../sequencer/interfaces/BlockStorage.md)
- [`HistoricalBlockStorage`](../../sequencer/interfaces/HistoricalBlockStorage.md)

## Constructors

### new PrismaBlockStorage()

> **new PrismaBlockStorage**(`connection`, `transactionResultMapper`, `transactionMapper`, `blockResultMapper`, `blockMapper`): [`PrismaBlockStorage`](PrismaBlockStorage.md)

Defined in: [packages/persistance/src/services/prisma/PrismaBlockStorage.ts:33](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/PrismaBlockStorage.ts#L33)

#### Parameters

##### connection

[`PrismaConnection`](../interfaces/PrismaConnection.md)

##### transactionResultMapper

[`TransactionExecutionResultMapper`](TransactionExecutionResultMapper.md)

##### transactionMapper

[`TransactionMapper`](TransactionMapper.md)

##### blockResultMapper

[`BlockResultMapper`](BlockResultMapper.md)

##### blockMapper

[`BlockMapper`](BlockMapper.md)

#### Returns

[`PrismaBlockStorage`](PrismaBlockStorage.md)

## Methods

### getBlock()

> **getBlock**(`hash`): `Promise`\<`undefined` \| [`Block`](../../sequencer/interfaces/Block.md)\>

Defined in: [packages/persistance/src/services/prisma/PrismaBlockStorage.ts:77](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/PrismaBlockStorage.ts#L77)

#### Parameters

##### hash

`string`

#### Returns

`Promise`\<`undefined` \| [`Block`](../../sequencer/interfaces/Block.md)\>

#### Implementation of

[`HistoricalBlockStorage`](../../sequencer/interfaces/HistoricalBlockStorage.md).[`getBlock`](../../sequencer/interfaces/HistoricalBlockStorage.md#getblock)

***

### getBlockAt()

> **getBlockAt**(`height`): `Promise`\<`undefined` \| [`Block`](../../sequencer/interfaces/Block.md)\>

Defined in: [packages/persistance/src/services/prisma/PrismaBlockStorage.ts:73](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/PrismaBlockStorage.ts#L73)

#### Parameters

##### height

`number`

#### Returns

`Promise`\<`undefined` \| [`Block`](../../sequencer/interfaces/Block.md)\>

#### Implementation of

[`HistoricalBlockStorage`](../../sequencer/interfaces/HistoricalBlockStorage.md).[`getBlockAt`](../../sequencer/interfaces/HistoricalBlockStorage.md#getblockat)

***

### getCurrentBlockHeight()

> **getCurrentBlockHeight**(): `Promise`\<`number`\>

Defined in: [packages/persistance/src/services/prisma/PrismaBlockStorage.ts:157](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/PrismaBlockStorage.ts#L157)

#### Returns

`Promise`\<`number`\>

#### Implementation of

[`BlockStorage`](../../sequencer/interfaces/BlockStorage.md).[`getCurrentBlockHeight`](../../sequencer/interfaces/BlockStorage.md#getcurrentblockheight)

***

### getLatestBlock()

> **getLatestBlock**(): `Promise`\<`undefined` \| [`BlockWithResult`](../../sequencer/interfaces/BlockWithResult.md)\>

Defined in: [packages/persistance/src/services/prisma/PrismaBlockStorage.ts:185](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/PrismaBlockStorage.ts#L185)

#### Returns

`Promise`\<`undefined` \| [`BlockWithResult`](../../sequencer/interfaces/BlockWithResult.md)\>

#### Implementation of

[`BlockStorage`](../../sequencer/interfaces/BlockStorage.md).[`getLatestBlock`](../../sequencer/interfaces/BlockStorage.md#getlatestblock)

***

### getLatestBlockAndResult()

> **getLatestBlockAndResult**(): `Promise`\<`undefined` \| [`BlockWithMaybeResult`](../../sequencer/interfaces/BlockWithMaybeResult.md)\>

Defined in: [packages/persistance/src/services/prisma/PrismaBlockStorage.ts:167](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/PrismaBlockStorage.ts#L167)

#### Returns

`Promise`\<`undefined` \| [`BlockWithMaybeResult`](../../sequencer/interfaces/BlockWithMaybeResult.md)\>

#### Implementation of

[`BlockQueue`](../../sequencer/interfaces/BlockQueue.md).[`getLatestBlockAndResult`](../../sequencer/interfaces/BlockQueue.md#getlatestblockandresult)

***

### getNewBlocks()

> **getNewBlocks**(): `Promise`\<[`BlockWithPreviousResult`](../../sequencer/interfaces/BlockWithPreviousResult.md)[]\>

Defined in: [packages/persistance/src/services/prisma/PrismaBlockStorage.ts:201](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/PrismaBlockStorage.ts#L201)

#### Returns

`Promise`\<[`BlockWithPreviousResult`](../../sequencer/interfaces/BlockWithPreviousResult.md)[]\>

#### Implementation of

[`BlockQueue`](../../sequencer/interfaces/BlockQueue.md).[`getNewBlocks`](../../sequencer/interfaces/BlockQueue.md#getnewblocks)

***

### pushBlock()

> **pushBlock**(`block`): `Promise`\<`void`\>

Defined in: [packages/persistance/src/services/prisma/PrismaBlockStorage.ts:81](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/PrismaBlockStorage.ts#L81)

#### Parameters

##### block

[`Block`](../../sequencer/interfaces/Block.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`BlockStorage`](../../sequencer/interfaces/BlockStorage.md).[`pushBlock`](../../sequencer/interfaces/BlockStorage.md#pushblock)

***

### pushResult()

> **pushResult**(`result`): `Promise`\<`void`\>

Defined in: [packages/persistance/src/services/prisma/PrismaBlockStorage.ts:139](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/PrismaBlockStorage.ts#L139)

#### Parameters

##### result

[`BlockResult`](../../sequencer/interfaces/BlockResult.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`BlockQueue`](../../sequencer/interfaces/BlockQueue.md).[`pushResult`](../../sequencer/interfaces/BlockQueue.md#pushresult)
