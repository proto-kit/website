---
title: TaskWorkerModule
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / TaskWorkerModule

# Class: `abstract` TaskWorkerModule

Defined in: [packages/sequencer/src/worker/worker/TaskWorkerModule.ts:3](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/worker/worker/TaskWorkerModule.ts#L3)

Used by various module sub-types that may need to be configured

## Extends

- [`ConfigurableModule`](../../common/classes/ConfigurableModule.md)\<[`NoConfig`](../../common/type-aliases/NoConfig.md)\>

## Extended by

- [`TransactionProvingTask`](TransactionProvingTask.md)
- [`RuntimeProvingTask`](RuntimeProvingTask.md)
- [`StateTransitionTask`](StateTransitionTask.md)
- [`StateTransitionReductionTask`](StateTransitionReductionTask.md)
- [`NewBlockTask`](NewBlockTask.md)
- [`SettlementProvingTask`](SettlementProvingTask.md)
- [`IndexBlockTask`](../../indexer/classes/IndexBlockTask.md)

## Constructors

### new TaskWorkerModule()

> **new TaskWorkerModule**(): [`TaskWorkerModule`](TaskWorkerModule.md)

#### Returns

[`TaskWorkerModule`](TaskWorkerModule.md)

#### Inherited from

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`constructor`](../../common/classes/ConfigurableModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`NoConfig`](../../common/type-aliases/NoConfig.md)

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`currentConfig`](../../common/classes/ConfigurableModule.md#currentconfig)

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

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`config`](../../common/classes/ConfigurableModule.md#config)

## Methods

### create()

> **create**(`childContainerProvider`): `void`

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:20

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Inherited from

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`create`](../../common/classes/ConfigurableModule.md#create)
