---
title: RuntimeProvingTask
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / RuntimeProvingTask

# Class: RuntimeProvingTask

Defined in: [packages/sequencer/src/protocol/production/tasks/RuntimeProvingTask.ts:36](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/tasks/RuntimeProvingTask.ts#L36)

Used by various module sub-types that may need to be configured

## Extends

- [`TaskWorkerModule`](TaskWorkerModule.md)

## Implements

- [`Task`](../interfaces/Task.md)\<[`RuntimeProofParameters`](../interfaces/RuntimeProofParameters.md), `RuntimeProof`\>

## Constructors

### new RuntimeProvingTask()

> **new RuntimeProvingTask**(`runtime`, `executionContext`, `compileRegistry`): [`RuntimeProvingTask`](RuntimeProvingTask.md)

Defined in: [packages/sequencer/src/protocol/production/tasks/RuntimeProvingTask.ts:45](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/tasks/RuntimeProvingTask.ts#L45)

#### Parameters

##### runtime

[`Runtime`](../../module/classes/Runtime.md)\<`never`\>

##### executionContext

[`RuntimeMethodExecutionContext`](../../protocol/classes/RuntimeMethodExecutionContext.md)

##### compileRegistry

[`CompileRegistry`](../../common/classes/CompileRegistry.md)

#### Returns

[`RuntimeProvingTask`](RuntimeProvingTask.md)

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

> **name**: `string` = `"runtimeProof"`

Defined in: [packages/sequencer/src/protocol/production/tasks/RuntimeProvingTask.ts:43](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/tasks/RuntimeProvingTask.ts#L43)

#### Implementation of

[`Task`](../interfaces/Task.md).[`name`](../interfaces/Task.md#name)

***

### runtime

> `protected` `readonly` **runtime**: [`Runtime`](../../module/classes/Runtime.md)\<`never`\>

Defined in: [packages/sequencer/src/protocol/production/tasks/RuntimeProvingTask.ts:46](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/tasks/RuntimeProvingTask.ts#L46)

***

### runtimeZkProgrammable

> `protected` `readonly` **runtimeZkProgrammable**: [`PlainZkProgram`](../../common/interfaces/PlainZkProgram.md)\<[`MethodPublicOutput`](../../protocol/classes/MethodPublicOutput.md)\>[]

Defined in: [packages/sequencer/src/protocol/production/tasks/RuntimeProvingTask.ts:40](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/tasks/RuntimeProvingTask.ts#L40)

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

> **compute**(`input`): `Promise`\<`RuntimeProof`\>

Defined in: [packages/sequencer/src/protocol/production/tasks/RuntimeProvingTask.ts:61](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/tasks/RuntimeProvingTask.ts#L61)

#### Parameters

##### input

[`RuntimeProofParameters`](../interfaces/RuntimeProofParameters.md)

#### Returns

`Promise`\<`RuntimeProof`\>

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

> **inputSerializer**(): [`TaskSerializer`](../interfaces/TaskSerializer.md)\<[`RuntimeProofParameters`](../interfaces/RuntimeProofParameters.md)\>

Defined in: [packages/sequencer/src/protocol/production/tasks/RuntimeProvingTask.ts:53](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/tasks/RuntimeProvingTask.ts#L53)

#### Returns

[`TaskSerializer`](../interfaces/TaskSerializer.md)\<[`RuntimeProofParameters`](../interfaces/RuntimeProofParameters.md)\>

#### Implementation of

[`Task`](../interfaces/Task.md).[`inputSerializer`](../interfaces/Task.md#inputserializer)

***

### prepare()

> **prepare**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/protocol/production/tasks/RuntimeProvingTask.ts:107](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/tasks/RuntimeProvingTask.ts#L107)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Task`](../interfaces/Task.md).[`prepare`](../interfaces/Task.md#prepare)

***

### resultSerializer()

> **resultSerializer**(): [`TaskSerializer`](../interfaces/TaskSerializer.md)\<`RuntimeProof`\>

Defined in: [packages/sequencer/src/protocol/production/tasks/RuntimeProvingTask.ts:57](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/protocol/production/tasks/RuntimeProvingTask.ts#L57)

#### Returns

[`TaskSerializer`](../interfaces/TaskSerializer.md)\<`RuntimeProof`\>

#### Implementation of

[`Task`](../interfaces/Task.md).[`resultSerializer`](../interfaces/Task.md#resultserializer)
