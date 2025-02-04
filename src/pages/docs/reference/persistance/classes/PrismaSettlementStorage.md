---
title: PrismaSettlementStorage
---

[**@proto-kit/persistance**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/persistance](../README.md) / PrismaSettlementStorage

# Class: PrismaSettlementStorage

Defined in: [packages/persistance/src/services/prisma/PrismaSettlementStorage.ts:9](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/persistance/src/services/prisma/PrismaSettlementStorage.ts#L9)

## Implements

- [`SettlementStorage`](../../sequencer/interfaces/SettlementStorage.md)

## Constructors

### new PrismaSettlementStorage()

> **new PrismaSettlementStorage**(`connection`, `settlementMapper`): [`PrismaSettlementStorage`](PrismaSettlementStorage.md)

Defined in: [packages/persistance/src/services/prisma/PrismaSettlementStorage.ts:10](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/persistance/src/services/prisma/PrismaSettlementStorage.ts#L10)

#### Parameters

##### connection

[`PrismaConnection`](../interfaces/PrismaConnection.md)

##### settlementMapper

[`SettlementMapper`](SettlementMapper.md)

#### Returns

[`PrismaSettlementStorage`](PrismaSettlementStorage.md)

## Methods

### pushSettlement()

> **pushSettlement**(`settlement`): `Promise`\<`void`\>

Defined in: [packages/persistance/src/services/prisma/PrismaSettlementStorage.ts:15](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/persistance/src/services/prisma/PrismaSettlementStorage.ts#L15)

#### Parameters

##### settlement

[`Settlement`](../../sequencer/interfaces/Settlement.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`SettlementStorage`](../../sequencer/interfaces/SettlementStorage.md).[`pushSettlement`](../../sequencer/interfaces/SettlementStorage.md#pushsettlement)
