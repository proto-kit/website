---
title: SimpleSequencerModules
---

[**@proto-kit/library**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/library](../README.md) / SimpleSequencerModules

# Class: SimpleSequencerModules

Defined in: [packages/library/src/sequencer/SimpleSequencerModules.ts:46](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/library/src/sequencer/SimpleSequencerModules.ts#L46)

## Constructors

### new SimpleSequencerModules()

> **new SimpleSequencerModules**(): [`SimpleSequencerModules`](SimpleSequencerModules.md)

#### Returns

[`SimpleSequencerModules`](SimpleSequencerModules.md)

## Methods

### defaultConfig()

> `static` **defaultConfig**(): `object`

Defined in: [packages/library/src/sequencer/SimpleSequencerModules.ts:97](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/library/src/sequencer/SimpleSequencerModules.ts#L97)

#### Returns

`object`

##### BatchProducerModule

> **BatchProducerModule**: `object` = `{}`

##### BlockProducerModule

> **BlockProducerModule**: `object`

###### BlockProducerModule.allowEmptyBlock

> **BlockProducerModule.allowEmptyBlock**: `true` = `true`

##### Mempool

> **Mempool**: `object` = `{}`

##### SequencerStartupModule

> **SequencerStartupModule**: `object` = `{}`

***

### defaultWorkerConfig()

> `static` **defaultWorkerConfig**(): `object`

Defined in: [packages/library/src/sequencer/SimpleSequencerModules.ts:109](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/library/src/sequencer/SimpleSequencerModules.ts#L109)

#### Returns

`object`

##### LocalTaskWorkerModule

> **LocalTaskWorkerModule**: `object`

###### LocalTaskWorkerModule.BlockBuildingTask

> **LocalTaskWorkerModule.BlockBuildingTask**: `object`

###### LocalTaskWorkerModule.BlockProvingTask

> **LocalTaskWorkerModule.BlockProvingTask**: `object`

###### LocalTaskWorkerModule.BlockReductionTask

> **LocalTaskWorkerModule.BlockReductionTask**: `object`

###### LocalTaskWorkerModule.CircuitCompilerTask

> **LocalTaskWorkerModule.CircuitCompilerTask**: `object`

###### LocalTaskWorkerModule.RuntimeProvingTask

> **LocalTaskWorkerModule.RuntimeProvingTask**: `object`

###### LocalTaskWorkerModule.SettlementProvingTask

> **LocalTaskWorkerModule.SettlementProvingTask**: `object`

###### LocalTaskWorkerModule.StateTransitionReductionTask

> **LocalTaskWorkerModule.StateTransitionReductionTask**: `object`

###### LocalTaskWorkerModule.StateTransitionTask

> **LocalTaskWorkerModule.StateTransitionTask**: `object`

###### LocalTaskWorkerModule.TransactionProvingTask

> **LocalTaskWorkerModule.TransactionProvingTask**: `object`

###### LocalTaskWorkerModule.WorkerRegistrationTask

> **LocalTaskWorkerModule.WorkerRegistrationTask**: `object`

***

### with()

> `static` **with**\<`SequencerModules`\>(`additionalModules`): `object` & `Omit`\<`SequencerModules`, `"Database"` \| `"BlockTrigger"` \| `"TaskQueue"` \| `"BaseLayer"` \| `"DatabasePruneModule"`\> & `object`

Defined in: [packages/library/src/sequencer/SimpleSequencerModules.ts:60](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/library/src/sequencer/SimpleSequencerModules.ts#L60)

#### Type Parameters

• **SequencerModules** *extends* [`AdditionalSequencerModules`](../type-aliases/AdditionalSequencerModules.md)

#### Parameters

##### additionalModules

`SequencerModules`

#### Returns

`object` & `Omit`\<`SequencerModules`, `"Database"` \| `"BlockTrigger"` \| `"TaskQueue"` \| `"BaseLayer"` \| `"DatabasePruneModule"`\> & `object`

***

### worker()

> `static` **worker**\<`QueueModule`, `SequencerModules`\>(`queue`, `additionalModules`): `object` & `SequencerModules`

Defined in: [packages/library/src/sequencer/SimpleSequencerModules.ts:47](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/library/src/sequencer/SimpleSequencerModules.ts#L47)

#### Type Parameters

• **QueueModule** *extends* [`TaskQueue`](../../sequencer/interfaces/TaskQueue.md)

• **SequencerModules** *extends* [`SequencerModulesRecord`](../../sequencer/type-aliases/SequencerModulesRecord.md)

#### Parameters

##### queue

[`TypedClass`](../../common/type-aliases/TypedClass.md)\<`QueueModule`\>

##### additionalModules

`SequencerModules`

#### Returns

`object` & `SequencerModules`
