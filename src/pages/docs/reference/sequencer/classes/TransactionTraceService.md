---
title: TransactionTraceService
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / TransactionTraceService

# Class: TransactionTraceService

Defined in: [packages/sequencer/src/protocol/production/TransactionTraceService.ts:36](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/TransactionTraceService.ts#L36)

## Constructors

### new TransactionTraceService()

> **new TransactionTraceService**(): [`TransactionTraceService`](TransactionTraceService.md)

#### Returns

[`TransactionTraceService`](TransactionTraceService.md)

## Methods

### createBlockTrace()

> **createBlockTrace**(`traces`, `stateServices`, `blockHashTreeStore`, `beforeBlockStateRoot`, `block`): `Promise`\<[`BlockTrace`](../interfaces/BlockTrace.md)\>

Defined in: [packages/sequencer/src/protocol/production/TransactionTraceService.ts:78](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/TransactionTraceService.ts#L78)

#### Parameters

##### traces

[`TransactionTrace`](../interfaces/TransactionTrace.md)[]

##### stateServices

###### merkleStore

[`CachedMerkleTreeStore`](CachedMerkleTreeStore.md)

###### stateService

[`CachedStateService`](CachedStateService.md)

##### blockHashTreeStore

[`AsyncMerkleTreeStore`](../interfaces/AsyncMerkleTreeStore.md)

##### beforeBlockStateRoot

`Field`

##### block

[`BlockWithResult`](../interfaces/BlockWithResult.md)

#### Returns

`Promise`\<[`BlockTrace`](../interfaces/BlockTrace.md)\>

***

### createTransactionTrace()

> **createTransactionTrace**(`executionResult`, `stateServices`, `verificationKeyService`, `networkState`, `bundleTracker`, `eternalBundleTracker`, `messageTracker`): `Promise`\<[`TransactionTrace`](../interfaces/TransactionTrace.md)\>

Defined in: [packages/sequencer/src/protocol/production/TransactionTraceService.ts:172](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/TransactionTraceService.ts#L172)

What is in a trace?
A trace has two parts:
1. start values of storage keys accessed by all state transitions
2. Merkle Witnesses of the keys accessed by the state transitions

How do we create a trace?

1. We execute the transaction and create the stateTransitions
The first execution is done with a DummyStateService to find out the
accessed keys that can then be cached for the actual run, which generates
the correct state transitions and  has to be done for the next
transactions to be based on the correct state.

2. We extract the accessed keys, download the state and put it into
AppChainProveParams

3. We retrieve merkle witnesses for each step and put them into
StateTransitionProveParams

#### Parameters

##### executionResult

[`TransactionExecutionResult`](../interfaces/TransactionExecutionResult.md)

##### stateServices

###### merkleStore

[`CachedMerkleTreeStore`](CachedMerkleTreeStore.md)

###### stateService

[`CachedStateService`](CachedStateService.md)

##### verificationKeyService

`VerificationKeyService`

##### networkState

[`NetworkState`](../../protocol/classes/NetworkState.md)

##### bundleTracker

[`ProvableHashList`](../../protocol/classes/ProvableHashList.md)\<`Field`\>

##### eternalBundleTracker

[`ProvableHashList`](../../protocol/classes/ProvableHashList.md)\<`Field`\>

##### messageTracker

[`ProvableHashList`](../../protocol/classes/ProvableHashList.md)\<`Field`\>

#### Returns

`Promise`\<[`TransactionTrace`](../interfaces/TransactionTrace.md)\>
