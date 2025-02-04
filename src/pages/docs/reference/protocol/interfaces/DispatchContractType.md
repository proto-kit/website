---
title: DispatchContractType
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / DispatchContractType

# Interface: DispatchContractType

Defined in: [packages/protocol/src/settlement/contracts/DispatchSmartContract.ts:40](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/contracts/DispatchSmartContract.ts#L40)

## Properties

### enableTokenDeposits()

> **enableTokenDeposits**: (`tokenId`, `bridgeContractAddress`, `settlementContractAddress`) => `Promise`\<`void`\>

Defined in: [packages/protocol/src/settlement/contracts/DispatchSmartContract.ts:46](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/contracts/DispatchSmartContract.ts#L46)

#### Parameters

##### tokenId

`Field`

##### bridgeContractAddress

`PublicKey`

##### settlementContractAddress

`PublicKey`

#### Returns

`Promise`\<`void`\>

***

### initialize()

> **initialize**: (`settlementContract`) => `Promise`\<`void`\>

Defined in: [packages/protocol/src/settlement/contracts/DispatchSmartContract.ts:45](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/contracts/DispatchSmartContract.ts#L45)

#### Parameters

##### settlementContract

`PublicKey`

#### Returns

`Promise`\<`void`\>

***

### promisedMessagesHash

> **promisedMessagesHash**: `State`\<`Field`\>

Defined in: [packages/protocol/src/settlement/contracts/DispatchSmartContract.ts:52](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/contracts/DispatchSmartContract.ts#L52)

***

### updateMessagesHash()

> **updateMessagesHash**: (`executedMessagesHash`, `newPromisedMessagesHash`) => `Promise`\<`void`\>

Defined in: [packages/protocol/src/settlement/contracts/DispatchSmartContract.ts:41](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/contracts/DispatchSmartContract.ts#L41)

#### Parameters

##### executedMessagesHash

`Field`

##### newPromisedMessagesHash

`Field`

#### Returns

`Promise`\<`void`\>
