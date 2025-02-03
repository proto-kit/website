---
title: BridgeContractType
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / BridgeContractType

# Type Alias: BridgeContractType

> **BridgeContractType**: `object`

Defined in: [packages/protocol/src/settlement/contracts/BridgeContract.ts:29](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/contracts/BridgeContract.ts#L29)

## Type declaration

### deployProvable()

> **deployProvable**: (`args`, `signedSettlement`, `permissions`, `settlementContractAddress`) => `Promise`\<`AccountUpdate`\>

#### Parameters

##### args

`VerificationKey` | `undefined`

##### signedSettlement

`boolean`

##### permissions

`Permissions`

##### settlementContractAddress

`PublicKey`

#### Returns

`Promise`\<`AccountUpdate`\>

### outgoingMessageCursor

> **outgoingMessageCursor**: `State`\<`Field`\>

### redeem()

> **redeem**: (`additionUpdate`) => `Promise`\<`void`\>

#### Parameters

##### additionUpdate

`AccountUpdate`

#### Returns

`Promise`\<`void`\>

### rollupOutgoingMessages()

> **rollupOutgoingMessages**: (`batch`) => `Promise`\<`Field`\>

#### Parameters

##### batch

[`OutgoingMessageArgumentBatch`](../classes/OutgoingMessageArgumentBatch.md)

#### Returns

`Promise`\<`Field`\>

### stateRoot

> **stateRoot**: `State`\<`Field`\>

### updateStateRoot()

> **updateStateRoot**: (`root`) => `Promise`\<`void`\>

#### Parameters

##### root

`Field`

#### Returns

`Promise`\<`void`\>
