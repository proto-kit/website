---
title: AbstractTaskQueue
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / AbstractTaskQueue

# Class: `abstract` AbstractTaskQueue\<Config\>

Defined in: [packages/sequencer/src/worker/queue/AbstractTaskQueue.ts:5](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/queue/AbstractTaskQueue.ts#L5)

Lifecycle of a SequencerModule

start(): Executed to execute any logic required to start the module

## Extends

- [`SequencerModule`](SequencerModule.md)\<`Config`\>

## Extended by

- [`LocalTaskQueue`](LocalTaskQueue.md)
- [`BullQueue`](../../deployment/classes/BullQueue.md)

## Type Parameters

• **Config**

## Constructors

### new AbstractTaskQueue()

> **new AbstractTaskQueue**\<`Config`\>(): [`AbstractTaskQueue`](AbstractTaskQueue.md)\<`Config`\>

#### Returns

[`AbstractTaskQueue`](AbstractTaskQueue.md)\<`Config`\>

#### Inherited from

[`SequencerModule`](SequencerModule.md).[`constructor`](SequencerModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| `Config`

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`SequencerModule`](SequencerModule.md).[`currentConfig`](SequencerModule.md#currentconfig)

***

### queues

> `protected` **queues**: `Record`\<`string`, [`InstantiatedQueue`](../interfaces/InstantiatedQueue.md)\> = `{}`

Defined in: [packages/sequencer/src/worker/queue/AbstractTaskQueue.ts:8](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/queue/AbstractTaskQueue.ts#L8)

***

### presets

> `static` **presets**: [`Presets`](../../common/type-aliases/Presets.md)\<`unknown`\> = `{}`

Defined in: [packages/sequencer/src/sequencer/builder/SequencerModule.ts:18](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/sequencer/builder/SequencerModule.ts#L18)

#### Inherited from

[`SequencerModule`](SequencerModule.md).[`presets`](SequencerModule.md#presets)

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

[`SequencerModule`](SequencerModule.md).[`config`](SequencerModule.md#config)

## Methods

### closeQueues()

> `protected` **closeQueues**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/worker/queue/AbstractTaskQueue.ts:20](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/queue/AbstractTaskQueue.ts#L20)

#### Returns

`Promise`\<`void`\>

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

[`SequencerModule`](SequencerModule.md).[`create`](SequencerModule.md#create)

***

### createOrGetQueue()

> `protected` **createOrGetQueue**(`name`, `creator`): [`InstantiatedQueue`](../interfaces/InstantiatedQueue.md)

Defined in: [packages/sequencer/src/worker/queue/AbstractTaskQueue.ts:10](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/worker/queue/AbstractTaskQueue.ts#L10)

#### Parameters

##### name

`string`

##### creator

(`name`) => [`InstantiatedQueue`](../interfaces/InstantiatedQueue.md)

#### Returns

[`InstantiatedQueue`](../interfaces/InstantiatedQueue.md)

***

### start()

> `abstract` **start**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/sequencer/builder/SequencerModule.ts:26](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/sequencer/builder/SequencerModule.ts#L26)

Start the module and all it's functionality.
The returned Promise has to resolve after initialization,
since it will block in the sequencer init.
That means that you mustn't await server.start() for example.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`SequencerModule`](SequencerModule.md).[`start`](SequencerModule.md#start)
