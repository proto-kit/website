---
title: InMemorySequencerModulesRecord
---

[**@proto-kit/library**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/library](../README.md) / InMemorySequencerModulesRecord

# Type Alias: InMemorySequencerModulesRecord

> **InMemorySequencerModulesRecord**: `object`

Defined in: [packages/library/src/sequencer/InMemorySequencerModules.ts:16](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/sequencer/InMemorySequencerModules.ts#L16)

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
