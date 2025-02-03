---
title: NewBlockTask
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / NewBlockTask

# Class: NewBlockTask

Defined in: [packages/sequencer/src/protocol/production/tasks/NewBlockTask.ts:45](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/NewBlockTask.ts#L45)

Used by various module sub-types that may need to be configured

## Extends

- [`TaskWorkerModule`](TaskWorkerModule.md)

## Implements

- [`Task`](../interfaces/Task.md)\<[`NewBlockProvingParameters`](../type-aliases/NewBlockProvingParameters.md), `BlockProof`\>

## Constructors

### new NewBlockTask()

> **new NewBlockTask**(`protocol`, `executionContext`, `compileRegistry`): [`NewBlockTask`](NewBlockTask.md)

Defined in: [packages/sequencer/src/protocol/production/tasks/NewBlockTask.ts:55](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/NewBlockTask.ts#L55)

#### Parameters

##### protocol

[`Protocol`](../../protocol/classes/Protocol.md)\<[`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md)\>

##### executionContext

[`ProvableMethodExecutionContext`](../../common/classes/ProvableMethodExecutionContext.md)

##### compileRegistry

[`CompileRegistry`](../../common/classes/CompileRegistry.md)

#### Returns

[`NewBlockTask`](NewBlockTask.md)

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

> `readonly` **name**: `"newBlock"` = `"newBlock"`

Defined in: [packages/sequencer/src/protocol/production/tasks/NewBlockTask.ts:53](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/NewBlockTask.ts#L53)

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

> **compute**(`input`): `Promise`\<`BlockProof`\>

Defined in: [packages/sequencer/src/protocol/production/tasks/NewBlockTask.ts:105](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/NewBlockTask.ts#L105)

#### Parameters

##### input

[`NewBlockProvingParameters`](../type-aliases/NewBlockProvingParameters.md)

#### Returns

`Promise`\<`BlockProof`\>

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

> **inputSerializer**(): [`TaskSerializer`](../interfaces/TaskSerializer.md)\<[`NewBlockProvingParameters`](../type-aliases/NewBlockProvingParameters.md)\>

Defined in: [packages/sequencer/src/protocol/production/tasks/NewBlockTask.ts:66](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/NewBlockTask.ts#L66)

#### Returns

[`TaskSerializer`](../interfaces/TaskSerializer.md)\<[`NewBlockProvingParameters`](../type-aliases/NewBlockProvingParameters.md)\>

#### Implementation of

[`Task`](../interfaces/Task.md).[`inputSerializer`](../interfaces/Task.md#inputserializer)

***

### prepare()

> **prepare**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/protocol/production/tasks/NewBlockTask.ts:129](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/NewBlockTask.ts#L129)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Task`](../interfaces/Task.md).[`prepare`](../interfaces/Task.md#prepare)

***

### resultSerializer()

> **resultSerializer**(): [`TaskSerializer`](../interfaces/TaskSerializer.md)\<`BlockProof`\>

Defined in: [packages/sequencer/src/protocol/production/tasks/NewBlockTask.ts:81](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/protocol/production/tasks/NewBlockTask.ts#L81)

#### Returns

[`TaskSerializer`](../interfaces/TaskSerializer.md)\<`BlockProof`\>

#### Implementation of

[`Task`](../interfaces/Task.md).[`resultSerializer`](../interfaces/Task.md#resultserializer)
