---
title: SettlementContractType
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / SettlementContractType

# Interface: SettlementContractType

Defined in: [packages/protocol/src/settlement/contracts/SettlementSmartContract.ts:65](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/SettlementSmartContract.ts#L65)

## Properties

### addTokenBridge()

> **addTokenBridge**: (`tokenId`, `address`, `dispatchContract`) => `Promise`\<`void`\>

Defined in: [packages/protocol/src/settlement/contracts/SettlementSmartContract.ts:84](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/SettlementSmartContract.ts#L84)

#### Parameters

##### tokenId

`Field`

##### address

`PublicKey`

##### dispatchContract

`PublicKey`

#### Returns

`Promise`\<`void`\>

***

### assertStateRoot()

> **assertStateRoot**: (`root`) => `AccountUpdate`

Defined in: [packages/protocol/src/settlement/contracts/SettlementSmartContract.ts:74](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/SettlementSmartContract.ts#L74)

#### Parameters

##### root

`Field`

#### Returns

`AccountUpdate`

***

### authorizationField

> **authorizationField**: `State`\<`Field`\>

Defined in: [packages/protocol/src/settlement/contracts/SettlementSmartContract.ts:66](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/SettlementSmartContract.ts#L66)

***

### initialize()

> **initialize**: (`sequencer`, `dispatchContract`, `bridgeContract`, `contractKey`) => `Promise`\<`void`\>

Defined in: [packages/protocol/src/settlement/contracts/SettlementSmartContract.ts:68](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/SettlementSmartContract.ts#L68)

#### Parameters

##### sequencer

`PublicKey`

##### dispatchContract

`PublicKey`

##### bridgeContract

`PublicKey`

##### contractKey

`PrivateKey`

#### Returns

`Promise`\<`void`\>

***

### settle()

> **settle**: (`blockProof`, `signature`, `dispatchContractAddress`, `publicKey`, `inputNetworkState`, `outputNetworkState`, `newPromisedMessagesHash`) => `Promise`\<`void`\>

Defined in: [packages/protocol/src/settlement/contracts/SettlementSmartContract.ts:75](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/SettlementSmartContract.ts#L75)

#### Parameters

##### blockProof

[`DynamicBlockProof`](../classes/DynamicBlockProof.md)

##### signature

`Signature`

##### dispatchContractAddress

`PublicKey`

##### publicKey

`PublicKey`

##### inputNetworkState

[`NetworkState`](../classes/NetworkState.md)

##### outputNetworkState

[`NetworkState`](../classes/NetworkState.md)

##### newPromisedMessagesHash

`Field`

#### Returns

`Promise`\<`void`\>
