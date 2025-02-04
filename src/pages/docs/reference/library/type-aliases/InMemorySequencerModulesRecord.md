---
title: InMemorySequencerModulesRecord
---

[**@proto-kit/library**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/library](../README.md) / InMemorySequencerModulesRecord

# Type Alias: InMemorySequencerModulesRecord

> **InMemorySequencerModulesRecord**: `object`

Defined in: [packages/library/src/sequencer/InMemorySequencerModules.ts:18](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/library/src/sequencer/InMemorySequencerModules.ts#L18)

## Type declaration

### BaseLayer

> **BaseLayer**: *typeof* [`NoopBaseLayer`](../../sequencer/classes/NoopBaseLayer.md)

### BatchProducerModule

> **BatchProducerModule**: *typeof* [`BatchProducerModule`](../../sequencer/classes/BatchProducerModule.md)

### BlockProducerModule

> **BlockProducerModule**: *typeof* [`BlockProducerModule`](../../sequencer/classes/BlockProducerModule.md)

### BlockTrigger

> **BlockTrigger**: *typeof* [`ManualBlockTrigger`](../../sequencer/classes/ManualBlockTrigger.md)

### Database

> **Database**: *typeof* [`InMemoryDatabase`](../../sequencer/classes/InMemoryDatabase.md)

### LocalTaskWorkerModule

> **LocalTaskWorkerModule**: [`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`LocalTaskWorkerModule`](../../sequencer/classes/LocalTaskWorkerModule.md)\<[`TaskWorkerModulesWithoutSettlement`](../../sequencer/type-aliases/TaskWorkerModulesWithoutSettlement.md)\>\>

### Mempool

> **Mempool**: *typeof* [`PrivateMempool`](../../sequencer/classes/PrivateMempool.md)

### TaskQueue

> **TaskQueue**: *typeof* [`LocalTaskQueue`](../../sequencer/classes/LocalTaskQueue.md)
