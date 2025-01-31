---
title: BlockTaskFlowService
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / BlockTaskFlowService

# Class: BlockTaskFlowService

Defined in: [packages/sequencer/src/protocol/production/BlockTaskFlowService.ts:56](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/BlockTaskFlowService.ts#L56)

We could rename this into BlockCreationStrategy and enable the injection of
different creation strategies.

## Constructors

### new BlockTaskFlowService()

> **new BlockTaskFlowService**(`taskQueue`, `flowCreator`, `stateTransitionTask`, `stateTransitionReductionTask`, `runtimeProvingTask`, `transactionProvingTask`, `blockProvingTask`, `blockReductionTask`, `protocol`): [`BlockTaskFlowService`](BlockTaskFlowService.md)

Defined in: [packages/sequencer/src/protocol/production/BlockTaskFlowService.ts:57](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/BlockTaskFlowService.ts#L57)

#### Parameters

##### taskQueue

[`TaskQueue`](../interfaces/TaskQueue.md)

##### flowCreator

[`FlowCreator`](FlowCreator.md)

##### stateTransitionTask

[`StateTransitionTask`](StateTransitionTask.md)

##### stateTransitionReductionTask

[`StateTransitionReductionTask`](StateTransitionReductionTask.md)

##### runtimeProvingTask

[`RuntimeProvingTask`](RuntimeProvingTask.md)

##### transactionProvingTask

[`TransactionProvingTask`](TransactionProvingTask.md)

##### blockProvingTask

[`NewBlockTask`](NewBlockTask.md)

##### blockReductionTask

`BlockReductionTask`

##### protocol

[`Protocol`](../../protocol/classes/Protocol.md)\<[`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md)\>

#### Returns

[`BlockTaskFlowService`](BlockTaskFlowService.md)

## Methods

### executeFlow()

> **executeFlow**(`blockTraces`, `batchId`): `Promise`\<[`BlockProof`](../../protocol/type-aliases/BlockProof.md)\>

Defined in: [packages/sequencer/src/protocol/production/BlockTaskFlowService.ts:142](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/BlockTaskFlowService.ts#L142)

#### Parameters

##### blockTraces

[`BlockTrace`](../interfaces/BlockTrace.md)[]

##### batchId

`number`

#### Returns

`Promise`\<[`BlockProof`](../../protocol/type-aliases/BlockProof.md)\>

***

### pushBlockPairing()

> **pushBlockPairing**(`flow`, `blockReductionTask`, `index`): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/protocol/production/BlockTaskFlowService.ts:93](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/BlockTaskFlowService.ts#L93)

#### Parameters

##### flow

[`Flow`](Flow.md)\<`BlockProductionFlowState`\>

##### blockReductionTask

[`ReductionTaskFlow`](ReductionTaskFlow.md)\<[`NewBlockProvingParameters`](../type-aliases/NewBlockProvingParameters.md), [`BlockProof`](../../protocol/type-aliases/BlockProof.md)\>

##### index

`number`

#### Returns

`Promise`\<`void`\>

***

### pushPairing()

> **pushPairing**(`flow`, `transactionReductionTask`, `blockIndex`, `transactionIndex`): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/protocol/production/BlockTaskFlowService.ts:70](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/BlockTaskFlowService.ts#L70)

#### Parameters

##### flow

[`Flow`](Flow.md)\<`BlockProductionFlowState`\>

##### transactionReductionTask

[`ReductionTaskFlow`](ReductionTaskFlow.md)\<[`TransactionProvingTaskParameters`](../type-aliases/TransactionProvingTaskParameters.md), [`BlockProof`](../../protocol/type-aliases/BlockProof.md)\>

##### blockIndex

`number`

##### transactionIndex

`number`

#### Returns

`Promise`\<`void`\>
