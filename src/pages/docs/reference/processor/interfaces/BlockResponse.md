---
title: BlockResponse
---

[**@proto-kit/processor**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/processor](../README.md) / BlockResponse

# Interface: BlockResponse

Defined in: [packages/processor/src/indexer/BlockFetching.ts:23](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/processor/src/indexer/BlockFetching.ts#L23)

## Properties

### data

> **data**: `object`

Defined in: [packages/processor/src/indexer/BlockFetching.ts:24](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/processor/src/indexer/BlockFetching.ts#L24)

#### findFirstBlock

> **findFirstBlock**: `object` & `object` & `object`

##### Type declaration

###### batchHeight

> **batchHeight**: `null` \| `number`

###### beforeNetworkState

> **beforeNetworkState**: `JsonValue`

###### duringNetworkState

> **duringNetworkState**: `JsonValue`

###### fromBlockHashRoot

> **fromBlockHashRoot**: `string`

###### fromEternalTransactionsHash

> **fromEternalTransactionsHash**: `string`

###### fromMessagesHash

> **fromMessagesHash**: `string`

###### hash

> **hash**: `string`

###### height

> **height**: `number`

###### parentHash

> **parentHash**: `null` \| `string`

###### toEternalTransactionsHash

> **toEternalTransactionsHash**: `string`

###### toMessagesHash

> **toMessagesHash**: `string`

###### transactionsHash

> **transactionsHash**: `string`

##### Type declaration

###### result

> **result**: `object`

###### result.afterNetworkState

> **result.afterNetworkState**: `JsonValue`

###### result.blockHash

> **result.blockHash**: `string`

###### result.blockHashRoot

> **result.blockHashRoot**: `string`

###### result.blockHashWitness

> **result.blockHashWitness**: `JsonValue`

###### result.blockStateTransitions

> **result.blockStateTransitions**: `JsonValue`

###### result.stateRoot

> **result.stateRoot**: `string`

##### Type declaration

###### transactions

> **transactions**: `object` & `object`[]
