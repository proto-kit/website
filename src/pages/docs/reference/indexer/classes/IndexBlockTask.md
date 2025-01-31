---
title: IndexBlockTask
---

[**@proto-kit/indexer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/indexer](../README.md) / IndexBlockTask

# Class: IndexBlockTask

Defined in: [indexer/src/tasks/IndexBlockTask.ts:16](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/indexer/src/tasks/IndexBlockTask.ts#L16)

Used by various module sub-types that may need to be configured

## Extends

- [`TaskWorkerModule`](../../sequencer/classes/TaskWorkerModule.md)

## Implements

- [`Task`](../../sequencer/interfaces/Task.md)\<[`IndexBlockTaskParameters`](../interfaces/IndexBlockTaskParameters.md), `void`\>

## Constructors

### new IndexBlockTask()

> **new IndexBlockTask**(`taskSerializer`, `blockStorage`): [`IndexBlockTask`](IndexBlockTask.md)

Defined in: [indexer/src/tasks/IndexBlockTask.ts:22](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/indexer/src/tasks/IndexBlockTask.ts#L22)

#### Parameters

##### taskSerializer

[`IndexBlockTaskParametersSerializer`](IndexBlockTaskParametersSerializer.md)

##### blockStorage

[`BlockQueue`](../../sequencer/interfaces/BlockQueue.md)

#### Returns

[`IndexBlockTask`](IndexBlockTask.md)

#### Overrides

[`TaskWorkerModule`](../../sequencer/classes/TaskWorkerModule.md).[`constructor`](../../sequencer/classes/TaskWorkerModule.md#constructors)

## Properties

### blockStorage

> **blockStorage**: [`BlockQueue`](../../sequencer/interfaces/BlockQueue.md)

Defined in: [indexer/src/tasks/IndexBlockTask.ts:25](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/indexer/src/tasks/IndexBlockTask.ts#L25)

***

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`NoConfig`](../../common/type-aliases/NoConfig.md)

Defined in: common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`TaskWorkerModule`](../../sequencer/classes/TaskWorkerModule.md).[`currentConfig`](../../sequencer/classes/TaskWorkerModule.md#currentconfig)

***

### name

> **name**: `string` = `"index-block"`

Defined in: [indexer/src/tasks/IndexBlockTask.ts:20](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/indexer/src/tasks/IndexBlockTask.ts#L20)

#### Implementation of

[`Task`](../../sequencer/interfaces/Task.md).[`name`](../../sequencer/interfaces/Task.md#name)

***

### taskSerializer

> **taskSerializer**: [`IndexBlockTaskParametersSerializer`](IndexBlockTaskParametersSerializer.md)

Defined in: [indexer/src/tasks/IndexBlockTask.ts:23](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/indexer/src/tasks/IndexBlockTask.ts#L23)

## Accessors

### config

#### Get Signature

> **get** **config**(): `Config`

Defined in: common/dist/config/ConfigurableModule.d.ts:18

##### Returns

`Config`

#### Set Signature

> **set** **config**(`config`): `void`

Defined in: common/dist/config/ConfigurableModule.d.ts:19

##### Parameters

###### config

`Config`

##### Returns

`void`

#### Inherited from

[`TaskWorkerModule`](../../sequencer/classes/TaskWorkerModule.md).[`config`](../../sequencer/classes/TaskWorkerModule.md#config)

## Methods

### compute()

> **compute**(`input`): `Promise`\<`void`\>

Defined in: [indexer/src/tasks/IndexBlockTask.ts:33](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/indexer/src/tasks/IndexBlockTask.ts#L33)

#### Parameters

##### input

[`IndexBlockTaskParameters`](../interfaces/IndexBlockTaskParameters.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Task`](../../sequencer/interfaces/Task.md).[`compute`](../../sequencer/interfaces/Task.md#compute)

***

### create()

> **create**(`childContainerProvider`): `void`

Defined in: common/dist/config/ConfigurableModule.d.ts:20

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Inherited from

[`TaskWorkerModule`](../../sequencer/classes/TaskWorkerModule.md).[`create`](../../sequencer/classes/TaskWorkerModule.md#create)

***

### inputSerializer()

> **inputSerializer**(): [`TaskSerializer`](../../sequencer/interfaces/TaskSerializer.md)\<[`IndexBlockTaskParameters`](../interfaces/IndexBlockTaskParameters.md)\>

Defined in: [indexer/src/tasks/IndexBlockTask.ts:45](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/indexer/src/tasks/IndexBlockTask.ts#L45)

#### Returns

[`TaskSerializer`](../../sequencer/interfaces/TaskSerializer.md)\<[`IndexBlockTaskParameters`](../interfaces/IndexBlockTaskParameters.md)\>

#### Implementation of

[`Task`](../../sequencer/interfaces/Task.md).[`inputSerializer`](../../sequencer/interfaces/Task.md#inputserializer)

***

### prepare()

> **prepare**(): `Promise`\<`void`\>

Defined in: [indexer/src/tasks/IndexBlockTask.ts:31](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/indexer/src/tasks/IndexBlockTask.ts#L31)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Task`](../../sequencer/interfaces/Task.md).[`prepare`](../../sequencer/interfaces/Task.md#prepare)

***

### resultSerializer()

> **resultSerializer**(): [`TaskSerializer`](../../sequencer/interfaces/TaskSerializer.md)\<`void`\>

Defined in: [indexer/src/tasks/IndexBlockTask.ts:49](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/indexer/src/tasks/IndexBlockTask.ts#L49)

#### Returns

[`TaskSerializer`](../../sequencer/interfaces/TaskSerializer.md)\<`void`\>

#### Implementation of

[`Task`](../../sequencer/interfaces/Task.md).[`resultSerializer`](../../sequencer/interfaces/Task.md#resultserializer)
