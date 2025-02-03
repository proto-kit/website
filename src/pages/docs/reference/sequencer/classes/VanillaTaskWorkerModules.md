---
title: VanillaTaskWorkerModules
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / VanillaTaskWorkerModules

# Class: VanillaTaskWorkerModules

Defined in: [packages/sequencer/src/worker/worker/LocalTaskWorkerModule.ts:131](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/worker/LocalTaskWorkerModule.ts#L131)

## Constructors

### new VanillaTaskWorkerModules()

> **new VanillaTaskWorkerModules**(): [`VanillaTaskWorkerModules`](VanillaTaskWorkerModules.md)

#### Returns

[`VanillaTaskWorkerModules`](VanillaTaskWorkerModules.md)

## Methods

### allTasks()

> `static` **allTasks**(): `object`

Defined in: [packages/sequencer/src/worker/worker/LocalTaskWorkerModule.ts:145](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/worker/LocalTaskWorkerModule.ts#L145)

#### Returns

`object`

##### BlockBuildingTask

> **BlockBuildingTask**: *typeof* [`NewBlockTask`](NewBlockTask.md) = `NewBlockTask`

##### BlockReductionTask

> **BlockReductionTask**: *typeof* `BlockReductionTask`

##### CircuitCompilerTask

> **CircuitCompilerTask**: *typeof* `CircuitCompilerTask`

##### RuntimeProvingTask

> **RuntimeProvingTask**: *typeof* [`RuntimeProvingTask`](RuntimeProvingTask.md)

##### SettlementProvingTask

> **SettlementProvingTask**: *typeof* [`SettlementProvingTask`](SettlementProvingTask.md)

##### StateTransitionReductionTask

> **StateTransitionReductionTask**: *typeof* [`StateTransitionReductionTask`](StateTransitionReductionTask.md)

##### StateTransitionTask

> **StateTransitionTask**: *typeof* [`StateTransitionTask`](StateTransitionTask.md)

##### TransactionProvingTask

> **TransactionProvingTask**: *typeof* [`TransactionProvingTask`](TransactionProvingTask.md)

##### WorkerRegistrationTask

> **WorkerRegistrationTask**: *typeof* `WorkerRegistrationTask`

***

### defaultConfig()

> `static` **defaultConfig**(): `object`

Defined in: [packages/sequencer/src/worker/worker/LocalTaskWorkerModule.ts:152](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/worker/LocalTaskWorkerModule.ts#L152)

#### Returns

`object`

##### BlockBuildingTask

> **BlockBuildingTask**: `object` = `{}`

##### BlockProvingTask

> **BlockProvingTask**: `object` = `{}`

##### BlockReductionTask

> **BlockReductionTask**: `object` = `{}`

##### CircuitCompilerTask

> **CircuitCompilerTask**: `object` = `{}`

##### RuntimeProvingTask

> **RuntimeProvingTask**: `object` = `{}`

##### SettlementProvingTask

> **SettlementProvingTask**: `object` = `{}`

##### StateTransitionReductionTask

> **StateTransitionReductionTask**: `object` = `{}`

##### StateTransitionTask

> **StateTransitionTask**: `object` = `{}`

##### TransactionProvingTask

> **TransactionProvingTask**: `object` = `{}`

##### WorkerRegistrationTask

> **WorkerRegistrationTask**: `object` = `{}`

***

### withoutSettlement()

> `static` **withoutSettlement**(): `object`

Defined in: [packages/sequencer/src/worker/worker/LocalTaskWorkerModule.ts:132](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/worker/LocalTaskWorkerModule.ts#L132)

#### Returns

`object`

##### BlockBuildingTask

> **BlockBuildingTask**: *typeof* [`NewBlockTask`](NewBlockTask.md) = `NewBlockTask`

##### BlockReductionTask

> **BlockReductionTask**: *typeof* `BlockReductionTask`

##### CircuitCompilerTask

> **CircuitCompilerTask**: *typeof* `CircuitCompilerTask`

##### RuntimeProvingTask

> **RuntimeProvingTask**: *typeof* [`RuntimeProvingTask`](RuntimeProvingTask.md)

##### StateTransitionReductionTask

> **StateTransitionReductionTask**: *typeof* [`StateTransitionReductionTask`](StateTransitionReductionTask.md)

##### StateTransitionTask

> **StateTransitionTask**: *typeof* [`StateTransitionTask`](StateTransitionTask.md)

##### TransactionProvingTask

> **TransactionProvingTask**: *typeof* [`TransactionProvingTask`](TransactionProvingTask.md)

##### WorkerRegistrationTask

> **WorkerRegistrationTask**: *typeof* `WorkerRegistrationTask`
