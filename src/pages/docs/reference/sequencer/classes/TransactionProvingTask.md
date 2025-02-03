---
title: TransactionProvingTask
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / TransactionProvingTask

# Class: TransactionProvingTask

Defined in: [packages/sequencer/src/protocol/production/tasks/TransactionProvingTask.ts:50](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/TransactionProvingTask.ts#L50)

Used by various module sub-types that may need to be configured

## Extends

- [`TaskWorkerModule`](TaskWorkerModule.md)

## Implements

- [`Task`](../interfaces/Task.md)\<[`TransactionProvingTaskParameters`](../type-aliases/TransactionProvingTaskParameters.md), [`BlockProof`](../../protocol/type-aliases/BlockProof.md)\>

## Constructors

### new TransactionProvingTask()

> **new TransactionProvingTask**(`protocol`, `runtime`, `stateServiceProvider`, `executionContext`, `compileRegistry`): [`TransactionProvingTask`](TransactionProvingTask.md)

Defined in: [packages/sequencer/src/protocol/production/tasks/TransactionProvingTask.ts:63](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/TransactionProvingTask.ts#L63)

#### Parameters

##### protocol

[`Protocol`](../../protocol/classes/Protocol.md)\<[`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md) & [`ProtocolModulesRecord`](../../protocol/type-aliases/ProtocolModulesRecord.md)\>

##### runtime

[`Runtime`](../../module/classes/Runtime.md)\<`never`\>

##### stateServiceProvider

[`StateServiceProvider`](../../protocol/classes/StateServiceProvider.md)

##### executionContext

[`ProvableMethodExecutionContext`](../../common/classes/ProvableMethodExecutionContext.md)

##### compileRegistry

[`CompileRegistry`](../../common/classes/CompileRegistry.md)

#### Returns

[`TransactionProvingTask`](TransactionProvingTask.md)

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

> **name**: `string` = `"block"`

Defined in: [packages/sequencer/src/protocol/production/tasks/TransactionProvingTask.ts:61](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/TransactionProvingTask.ts#L61)

#### Implementation of

[`Task`](../interfaces/Task.md).[`name`](../interfaces/Task.md#name)

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

> **compute**(`input`): `Promise`\<[`BlockProof`](../../protocol/type-aliases/BlockProof.md)\>

Defined in: [packages/sequencer/src/protocol/production/tasks/TransactionProvingTask.ts:114](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/TransactionProvingTask.ts#L114)

#### Parameters

##### input

[`PairingDerivedInput`](../interfaces/PairingDerivedInput.md)\<[`StateTransitionProof`](../../protocol/type-aliases/StateTransitionProof.md), `RuntimeProof`, [`BlockProverParameters`](../interfaces/BlockProverParameters.md)\>

#### Returns

`Promise`\<[`BlockProof`](../../protocol/type-aliases/BlockProof.md)\>

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

> **inputSerializer**(): [`TaskSerializer`](../interfaces/TaskSerializer.md)\<[`TransactionProvingTaskParameters`](../type-aliases/TransactionProvingTaskParameters.md)\>

Defined in: [packages/sequencer/src/protocol/production/tasks/TransactionProvingTask.ts:79](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/TransactionProvingTask.ts#L79)

#### Returns

[`TaskSerializer`](../interfaces/TaskSerializer.md)\<[`TransactionProvingTaskParameters`](../type-aliases/TransactionProvingTaskParameters.md)\>

#### Implementation of

[`Task`](../interfaces/Task.md).[`inputSerializer`](../interfaces/Task.md#inputserializer)

***

### prepare()

> **prepare**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/protocol/production/tasks/TransactionProvingTask.ts:144](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/TransactionProvingTask.ts#L144)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Task`](../interfaces/Task.md).[`prepare`](../interfaces/Task.md#prepare)

***

### resultSerializer()

> **resultSerializer**(): [`TaskSerializer`](../interfaces/TaskSerializer.md)\<[`BlockProof`](../../protocol/type-aliases/BlockProof.md)\>

Defined in: [packages/sequencer/src/protocol/production/tasks/TransactionProvingTask.ts:92](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/TransactionProvingTask.ts#L92)

#### Returns

[`TaskSerializer`](../interfaces/TaskSerializer.md)\<[`BlockProof`](../../protocol/type-aliases/BlockProof.md)\>

#### Implementation of

[`Task`](../interfaces/Task.md).[`resultSerializer`](../interfaces/Task.md#resultserializer)
