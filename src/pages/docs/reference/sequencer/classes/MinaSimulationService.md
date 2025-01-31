---
title: MinaSimulationService
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / MinaSimulationService

# Class: MinaSimulationService

Defined in: [packages/sequencer/src/settlement/transactions/MinaSimulationService.ts:17](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/settlement/transactions/MinaSimulationService.ts#L17)

## Constructors

### new MinaSimulationService()

> **new MinaSimulationService**(`baseLayer`): [`MinaSimulationService`](MinaSimulationService.md)

Defined in: [packages/sequencer/src/settlement/transactions/MinaSimulationService.ts:18](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/settlement/transactions/MinaSimulationService.ts#L18)

#### Parameters

##### baseLayer

[`MinaBaseLayer`](MinaBaseLayer.md)

#### Returns

[`MinaSimulationService`](MinaSimulationService.md)

## Methods

### applyTransaction()

> **applyTransaction**(`tx`): `void`

Defined in: [packages/sequencer/src/settlement/transactions/MinaSimulationService.ts:65](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/settlement/transactions/MinaSimulationService.ts#L65)

#### Parameters

##### tx

`Transaction`\<`boolean`, `boolean`\>

#### Returns

`void`

***

### updateAccount()

> **updateAccount**(`publicKey`, `tokenId`?): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/settlement/transactions/MinaSimulationService.ts:41](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/settlement/transactions/MinaSimulationService.ts#L41)

#### Parameters

##### publicKey

`PublicKey`

##### tokenId?

`Field`

#### Returns

`Promise`\<`void`\>

***

### updateNetworkState()

> **updateNetworkState**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/settlement/transactions/MinaSimulationService.ts:36](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/settlement/transactions/MinaSimulationService.ts#L36)

#### Returns

`Promise`\<`void`\>
