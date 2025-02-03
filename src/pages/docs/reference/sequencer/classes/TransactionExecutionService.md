---
title: TransactionExecutionService
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / TransactionExecutionService

# Class: TransactionExecutionService

Defined in: [packages/sequencer/src/protocol/production/sequencing/TransactionExecutionService.ts:153](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/sequencing/TransactionExecutionService.ts#L153)

## Constructors

### new TransactionExecutionService()

> **new TransactionExecutionService**(`runtime`, `protocol`, `stateServiceProvider`): [`TransactionExecutionService`](TransactionExecutionService.md)

Defined in: [packages/sequencer/src/protocol/production/sequencing/TransactionExecutionService.ts:156](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/sequencing/TransactionExecutionService.ts#L156)

#### Parameters

##### runtime

[`Runtime`](../../module/classes/Runtime.md)\<[`RuntimeModulesRecord`](../../module/type-aliases/RuntimeModulesRecord.md)\>

##### protocol

[`Protocol`](../../protocol/classes/Protocol.md)\<[`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md) & [`ProtocolModulesRecord`](../../protocol/type-aliases/ProtocolModulesRecord.md)\>

##### stateServiceProvider

[`StateServiceProvider`](../../protocol/classes/StateServiceProvider.md)

#### Returns

[`TransactionExecutionService`](TransactionExecutionService.md)

## Methods

### createExecutionTrace()

> **createExecutionTrace**(`asyncStateService`, `tx`, `networkState`): `Promise`\<[`TransactionExecutionResult`](../interfaces/TransactionExecutionResult.md)\>

Defined in: [packages/sequencer/src/protocol/production/sequencing/TransactionExecutionService.ts:209](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/sequencing/TransactionExecutionService.ts#L209)

#### Parameters

##### asyncStateService

[`CachedStateService`](CachedStateService.md)

##### tx

[`PendingTransaction`](PendingTransaction.md)

##### networkState

[`NetworkState`](../../protocol/classes/NetworkState.md)

#### Returns

`Promise`\<[`TransactionExecutionResult`](../interfaces/TransactionExecutionResult.md)\>
