---
title: BlockMapper
---

[**@proto-kit/persistance**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/persistance](../README.md) / BlockMapper

# Class: BlockMapper

Defined in: [packages/persistance/src/services/prisma/mappers/BlockMapper.ts:10](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/mappers/BlockMapper.ts#L10)

## Implements

- `ObjectMapper`\<[`Block`](../../sequencer/interfaces/Block.md), `PrismaBlock`\>

## Constructors

### new BlockMapper()

> **new BlockMapper**(): [`BlockMapper`](BlockMapper.md)

#### Returns

[`BlockMapper`](BlockMapper.md)

## Methods

### mapIn()

> **mapIn**(`input`): [`Block`](../../sequencer/interfaces/Block.md)

Defined in: [packages/persistance/src/services/prisma/mappers/BlockMapper.ts:11](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/mappers/BlockMapper.ts#L11)

#### Parameters

##### input

###### batchHeight

`null` \| `number`

###### beforeNetworkState

`JsonValue`

###### duringNetworkState

`JsonValue`

###### fromBlockHashRoot

`string`

###### fromEternalTransactionsHash

`string`

###### fromMessagesHash

`string`

###### hash

`string`

###### height

`number`

###### parentHash

`null` \| `string`

###### toEternalTransactionsHash

`string`

###### toMessagesHash

`string`

###### transactionsHash

`string`

#### Returns

[`Block`](../../sequencer/interfaces/Block.md)

#### Implementation of

`ObjectMapper.mapIn`

***

### mapOut()

> **mapOut**(`input`): `object`

Defined in: [packages/persistance/src/services/prisma/mappers/BlockMapper.ts:40](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/persistance/src/services/prisma/mappers/BlockMapper.ts#L40)

#### Parameters

##### input

[`Block`](../../sequencer/interfaces/Block.md)

#### Returns

`object`

##### batchHeight

> **batchHeight**: `null` \| `number`

##### beforeNetworkState

> **beforeNetworkState**: `JsonValue`

##### duringNetworkState

> **duringNetworkState**: `JsonValue`

##### fromBlockHashRoot

> **fromBlockHashRoot**: `string`

##### fromEternalTransactionsHash

> **fromEternalTransactionsHash**: `string`

##### fromMessagesHash

> **fromMessagesHash**: `string`

##### hash

> **hash**: `string`

##### height

> **height**: `number`

##### parentHash

> **parentHash**: `null` \| `string`

##### toEternalTransactionsHash

> **toEternalTransactionsHash**: `string`

##### toMessagesHash

> **toMessagesHash**: `string`

##### transactionsHash

> **transactionsHash**: `string`

#### Implementation of

`ObjectMapper.mapOut`
