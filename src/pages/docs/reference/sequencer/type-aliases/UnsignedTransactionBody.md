---
title: UnsignedTransactionBody
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / UnsignedTransactionBody

# Type Alias: UnsignedTransactionBody

> **UnsignedTransactionBody**: `object`

Defined in: [packages/sequencer/src/mempool/PendingTransaction.ts:17](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/mempool/PendingTransaction.ts#L17)

## Type declaration

### argsFields

> **argsFields**: `Field`[]

### auxiliaryData

> **auxiliaryData**: `string`[]

Used to transport non-provable data, mainly proof data for now
These values will not be part of the signature message or transaction hash

### isMessage

> **isMessage**: `boolean`

### methodId

> **methodId**: `Field`

### nonce

> **nonce**: `UInt64`

### sender

> **sender**: `PublicKey`
