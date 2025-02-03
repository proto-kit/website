---
title: StateTransitionTask
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / StateTransitionTask

# Class: StateTransitionTask

Defined in: [packages/sequencer/src/protocol/production/tasks/StateTransitionTask.ts:38](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/StateTransitionTask.ts#L38)

Used by various module sub-types that may need to be configured

## Extends

- [`TaskWorkerModule`](TaskWorkerModule.md)

## Implements

- [`Task`](../interfaces/Task.md)\<[`StateTransitionProofParameters`](../interfaces/StateTransitionProofParameters.md), [`StateTransitionProof`](../../protocol/type-aliases/StateTransitionProof.md)\>

## Constructors

### new StateTransitionTask()

> **new StateTransitionTask**(`protocol`, `executionContext`, `compileRegistry`): [`StateTransitionTask`](StateTransitionTask.md)

Defined in: [packages/sequencer/src/protocol/production/tasks/StateTransitionTask.ts:46](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/StateTransitionTask.ts#L46)

#### Parameters

##### protocol

[`Protocol`](../../protocol/classes/Protocol.md)\<[`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md) & [`ProtocolModulesRecord`](../../protocol/type-aliases/ProtocolModulesRecord.md)\>

##### executionContext

[`ProvableMethodExecutionContext`](../../common/classes/ProvableMethodExecutionContext.md)

##### compileRegistry

[`CompileRegistry`](../../common/classes/CompileRegistry.md)

#### Returns

[`StateTransitionTask`](StateTransitionTask.md)

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

> **name**: `string` = `"stateTransitionProof"`

Defined in: [packages/sequencer/src/protocol/production/tasks/StateTransitionTask.ts:44](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/StateTransitionTask.ts#L44)

#### Implementation of

[`Task`](../interfaces/Task.md).[`name`](../interfaces/Task.md#name)

***

### stateTransitionProver

> `protected` `readonly` **stateTransitionProver**: [`StateTransitionProvable`](../../protocol/interfaces/StateTransitionProvable.md)

Defined in: [packages/sequencer/src/protocol/production/tasks/StateTransitionTask.ts:42](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/StateTransitionTask.ts#L42)

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

Defined in: [packages/sequencer/src/protocol/production/tasks/StateTransitionTask.ts:68](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/StateTransitionTask.ts#L68)

#### Parameters

##### input

[`StateTransitionProofParameters`](../interfaces/StateTransitionProofParameters.md)

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

> **inputSerializer**(): [`TaskSerializer`](../interfaces/TaskSerializer.md)\<[`StateTransitionProofParameters`](../interfaces/StateTransitionProofParameters.md)\>

Defined in: [packages/sequencer/src/protocol/production/tasks/StateTransitionTask.ts:58](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/StateTransitionTask.ts#L58)

#### Returns

[`TaskSerializer`](../interfaces/TaskSerializer.md)\<[`StateTransitionProofParameters`](../interfaces/StateTransitionProofParameters.md)\>

#### Implementation of

[`Task`](../interfaces/Task.md).[`inputSerializer`](../interfaces/Task.md#inputserializer)

***

### prepare()

> **prepare**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/protocol/production/tasks/StateTransitionTask.ts:88](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/StateTransitionTask.ts#L88)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Task`](../interfaces/Task.md).[`prepare`](../interfaces/Task.md#prepare)

***

### resultSerializer()

> **resultSerializer**(): [`TaskSerializer`](../interfaces/TaskSerializer.md)\<[`StateTransitionProof`](../../protocol/type-aliases/StateTransitionProof.md)\>

Defined in: [packages/sequencer/src/protocol/production/tasks/StateTransitionTask.ts:62](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/StateTransitionTask.ts#L62)

#### Returns

[`TaskSerializer`](../interfaces/TaskSerializer.md)\<[`StateTransitionProof`](../../protocol/type-aliases/StateTransitionProof.md)\>

#### Implementation of

[`Task`](../interfaces/Task.md).[`resultSerializer`](../interfaces/Task.md#resultserializer)
