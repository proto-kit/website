---
title: InMemorySequencerModulesRecord
---

[**@proto-kit/library**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/library](../README.md) / InMemorySequencerModulesRecord

# Type Alias: InMemorySequencerModulesRecord

> **InMemorySequencerModulesRecord**: `object`

Defined in: [packages/library/src/sequencer/InMemorySequencerModules.ts:16](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/library/src/sequencer/InMemorySequencerModules.ts#L16)

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
