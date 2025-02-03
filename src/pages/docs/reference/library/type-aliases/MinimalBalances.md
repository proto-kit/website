---
title: MinimalBalances
---

[**@proto-kit/library**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/library](../README.md) / MinimalBalances

# Type Alias: MinimalBalances

> **MinimalBalances**: `object`

Defined in: [packages/library/src/runtime/Balances.ts:34](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/library/src/runtime/Balances.ts#L34)

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
