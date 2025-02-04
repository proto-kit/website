---
title: MinimalBalances
---

[**@proto-kit/library**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/library](../README.md) / MinimalBalances

# Type Alias: MinimalBalances

> **MinimalBalances**: `object`

Defined in: [packages/library/src/runtime/Balances.ts:34](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/library/src/runtime/Balances.ts#L34)

## Type declaration

### balances

> **balances**: [`StateMap`](../../protocol/classes/StateMap.md)\<[`BalancesKey`](../classes/BalancesKey.md), [`Balance`](../classes/Balance.md)\>

### transfer()

> **transfer**: (`tokenId`, `from`, `to`, `amount`) => `void`

#### Parameters

##### tokenId

[`TokenId`](../classes/TokenId.md)

##### from

`PublicKey`

##### to

`PublicKey`

##### amount

[`Balance`](../classes/Balance.md)

#### Returns

`void`
