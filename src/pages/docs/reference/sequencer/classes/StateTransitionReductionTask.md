---
title: StateTransitionReductionTask
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / StateTransitionReductionTask

# Class: StateTransitionReductionTask

Defined in: [packages/sequencer/src/protocol/production/tasks/StateTransitionReductionTask.ts:24](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/tasks/StateTransitionReductionTask.ts#L24)

Used by various module sub-types that may need to be configured

## Extends

- [`TaskWorkerModule`](TaskWorkerModule.md)

## Implements

- [`Task`](../interfaces/Task.md)\<[`PairTuple`](../type-aliases/PairTuple.md)\<[`StateTransitionProof`](../../protocol/type-aliases/StateTransitionProof.md)\>, [`StateTransitionProof`](../../protocol/type-aliases/StateTransitionProof.md)\>

## Constructors

### new StateTransitionReductionTask()

> **new StateTransitionReductionTask**(`protocol`, `executionContext`, `compileRegistry`): [`StateTransitionReductionTask`](StateTransitionReductionTask.md)

Defined in: [packages/sequencer/src/protocol/production/tasks/StateTransitionReductionTask.ts:32](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/tasks/StateTransitionReductionTask.ts#L32)

#### Parameters

##### protocol

[`Protocol`](../../protocol/classes/Protocol.md)\<[`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md) & [`ProtocolModulesRecord`](../../protocol/type-aliases/ProtocolModulesRecord.md)\>

##### executionContext

[`ProvableMethodExecutionContext`](../../common/classes/ProvableMethodExecutionContext.md)

##### compileRegistry

[`CompileRegistry`](../../common/classes/CompileRegistry.md)

#### Returns

[`StateTransitionReductionTask`](StateTransitionReductionTask.md)

#### Overrides

[`TaskWorkerModule`](TaskWorkerModule.md).[`constructor`](TaskWorkerModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`NoConfig`](../../common/type-aliases/NoConfig.md)

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`TaskWorkerModule`](TaskWorkerModule.md).[`currentConfig`](TaskWorkerModule.md#currentconfig)

***

### name

> **name**: `string` = `"stateTransitionReduction"`

Defined in: [packages/sequencer/src/protocol/production/tasks/StateTransitionReductionTask.ts:30](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/tasks/StateTransitionReductionTask.ts#L30)

#### Implementation of

[`Task`](../interfaces/Task.md).[`name`](../interfaces/Task.md#name)

***

### stateTransitionProver

> `protected` `readonly` **stateTransitionProver**: [`StateTransitionProvable`](../../protocol/interfaces/StateTransitionProvable.md)

Defined in: [packages/sequencer/src/protocol/production/tasks/StateTransitionReductionTask.ts:28](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/tasks/StateTransitionReductionTask.ts#L28)

## Accessors

### config

#### Get Signature

> **get** **config**(): `Config`

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:18

##### Returns

`Config`

#### Set Signature

> **set** **config**(`config`): `void`

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:19

##### Parameters

###### config

`Config`

##### Returns

`void`

#### Inherited from

[`TaskWorkerModule`](TaskWorkerModule.md).[`config`](TaskWorkerModule.md#config)

## Methods

### compute()

> **compute**(`input`): `Promise`\<[`StateTransitionProof`](../../protocol/type-aliases/StateTransitionProof.md)\>

Defined in: [packages/sequencer/src/protocol/production/tasks/StateTransitionReductionTask.ts:56](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/tasks/StateTransitionReductionTask.ts#L56)

#### Parameters

##### input

[`PairTuple`](../type-aliases/PairTuple.md)\<[`StateTransitionProof`](../../protocol/type-aliases/StateTransitionProof.md)\>

#### Returns

`Promise`\<[`StateTransitionProof`](../../protocol/type-aliases/StateTransitionProof.md)\>

#### Implementation of

[`Task`](../interfaces/Task.md).[`compute`](../interfaces/Task.md#compute)

***

### create()

> **create**(`childContainerProvider`): `void`

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:20

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Inherited from

[`TaskWorkerModule`](TaskWorkerModule.md).[`create`](TaskWorkerModule.md#create)

***

### inputSerializer()

> **inputSerializer**(): [`TaskSerializer`](../interfaces/TaskSerializer.md)\<[`PairTuple`](../type-aliases/PairTuple.md)\<[`StateTransitionProof`](../../protocol/type-aliases/StateTransitionProof.md)\>\>

Defined in: [packages/sequencer/src/protocol/production/tasks/StateTransitionReductionTask.ts:44](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/tasks/StateTransitionReductionTask.ts#L44)

#### Returns

[`TaskSerializer`](../interfaces/TaskSerializer.md)\<[`PairTuple`](../type-aliases/PairTuple.md)\<[`StateTransitionProof`](../../protocol/type-aliases/StateTransitionProof.md)\>\>

#### Implementation of

[`Task`](../interfaces/Task.md).[`inputSerializer`](../interfaces/Task.md#inputserializer)

***

### prepare()

> **prepare**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/protocol/production/tasks/StateTransitionReductionTask.ts:66](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/tasks/StateTransitionReductionTask.ts#L66)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Task`](../interfaces/Task.md).[`prepare`](../interfaces/Task.md#prepare)

***

### resultSerializer()

> **resultSerializer**(): [`TaskSerializer`](../interfaces/TaskSerializer.md)\<[`StateTransitionProof`](../../protocol/type-aliases/StateTransitionProof.md)\>

Defined in: [packages/sequencer/src/protocol/production/tasks/StateTransitionReductionTask.ts:50](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/tasks/StateTransitionReductionTask.ts#L50)

#### Returns

[`TaskSerializer`](../interfaces/TaskSerializer.md)\<[`StateTransitionProof`](../../protocol/type-aliases/StateTransitionProof.md)\>

#### Implementation of

[`Task`](../interfaces/Task.md).[`resultSerializer`](../interfaces/Task.md#resultserializer)
