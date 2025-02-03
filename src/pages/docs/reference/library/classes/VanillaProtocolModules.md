---
title: VanillaProtocolModules
---

[**@proto-kit/library**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/library](../README.md) / VanillaProtocolModules

# Class: VanillaProtocolModules

Defined in: [packages/library/src/protocol/VanillaProtocolModules.ts:18](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/library/src/protocol/VanillaProtocolModules.ts#L18)

## Constructors

### new VanillaProtocolModules()

> **new VanillaProtocolModules**(): [`VanillaProtocolModules`](VanillaProtocolModules.md)

#### Returns

[`VanillaProtocolModules`](VanillaProtocolModules.md)

## Methods

### defaultConfig()

> `static` **defaultConfig**(): `object`

Defined in: [packages/library/src/protocol/VanillaProtocolModules.ts:51](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/library/src/protocol/VanillaProtocolModules.ts#L51)

#### Returns

`object`

##### AccountState

> **AccountState**: `object` = `{}`

##### BlockHeight

> **BlockHeight**: `object` = `{}`

##### BlockProver

> **BlockProver**: `object` = `{}`

##### LastStateRoot

> **LastStateRoot**: `object` = `{}`

##### StateTransitionProver

> **StateTransitionProver**: `object` = `{}`

##### TransactionFee

> **TransactionFee**: `object`

###### TransactionFee.baseFee

> **TransactionFee.baseFee**: `bigint` = `0n`

###### TransactionFee.feeRecipient

> **TransactionFee.feeRecipient**: `string`

###### TransactionFee.methods

> **TransactionFee.methods**: `object` = `{}`

###### TransactionFee.perWeightUnitFee

> **TransactionFee.perWeightUnitFee**: `bigint` = `0n`

###### TransactionFee.tokenId

> **TransactionFee.tokenId**: `bigint` = `0n`

***

### mandatoryConfig()

> `static` **mandatoryConfig**(): `object`

Defined in: [packages/library/src/protocol/VanillaProtocolModules.ts:41](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/library/src/protocol/VanillaProtocolModules.ts#L41)

#### Returns

`object`

##### AccountState

> **AccountState**: `object` = `{}`

##### BlockHeight

> **BlockHeight**: `object` = `{}`

##### BlockProver

> **BlockProver**: `object` = `{}`

##### LastStateRoot

> **LastStateRoot**: `object` = `{}`

##### StateTransitionProver

> **StateTransitionProver**: `object` = `{}`

***

### mandatoryModules()

> `static` **mandatoryModules**\<`ProtocolModules`\>(`additionalModules`): [`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md) & `ProtocolModules`

Defined in: [packages/library/src/protocol/VanillaProtocolModules.ts:19](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/library/src/protocol/VanillaProtocolModules.ts#L19)

#### Type Parameters

• **ProtocolModules** *extends* [`ProtocolModulesRecord`](../../protocol/type-aliases/ProtocolModulesRecord.md)

#### Parameters

##### additionalModules

`ProtocolModules`

#### Returns

[`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md) & `ProtocolModules`

***

### with()

> `static` **with**\<`ProtocolModules`\>(`additionalModules`): [`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md) & `object` & `ProtocolModules`

Defined in: [packages/library/src/protocol/VanillaProtocolModules.ts:32](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/library/src/protocol/VanillaProtocolModules.ts#L32)

#### Type Parameters

• **ProtocolModules** *extends* [`ProtocolModulesRecord`](../../protocol/type-aliases/ProtocolModulesRecord.md)

#### Parameters

##### additionalModules

`ProtocolModules`

#### Returns

[`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md) & `object` & `ProtocolModules`
