---
title: SettlementProvingTask
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / SettlementProvingTask

# Class: SettlementProvingTask

Defined in: [packages/sequencer/src/settlement/tasks/SettlementProvingTask.ts:72](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/settlement/tasks/SettlementProvingTask.ts#L72)

Implementation of a task to prove any Mina transaction.
The o1js-internal account state is configurable via the task args.
It also dynamically retrieves the proof generation parameters from
the provided AccountUpdate

## Extends

- [`TaskWorkerModule`](TaskWorkerModule.md)

## Implements

- [`Task`](../interfaces/Task.md)\<[`TransactionTaskArgs`](../type-aliases/TransactionTaskArgs.md), [`TransactionTaskResult`](../type-aliases/TransactionTaskResult.md)\>

## Constructors

### new SettlementProvingTask()

> **new SettlementProvingTask**(`protocol`, `compileRegistry`, `areProofsEnabled`): [`SettlementProvingTask`](SettlementProvingTask.md)

Defined in: [packages/sequencer/src/settlement/tasks/SettlementProvingTask.ts:84](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/settlement/tasks/SettlementProvingTask.ts#L84)

#### Parameters

##### protocol

[`Protocol`](../../protocol/classes/Protocol.md)\<[`MandatoryProtocolModulesRecord`](../../protocol/type-aliases/MandatoryProtocolModulesRecord.md)\>

##### compileRegistry

[`CompileRegistry`](../../common/classes/CompileRegistry.md)

##### areProofsEnabled

[`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

#### Returns

[`SettlementProvingTask`](SettlementProvingTask.md)

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

> **name**: `string` = `"settlementTransactions"`

Defined in: [packages/sequencer/src/settlement/tasks/SettlementProvingTask.ts:76](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/settlement/tasks/SettlementProvingTask.ts#L76)

#### Implementation of

[`Task`](../interfaces/Task.md).[`name`](../interfaces/Task.md#name)

***

### settlementContractModule

> **settlementContractModule**: `undefined` \| [`SettlementContractModule`](../../protocol/classes/SettlementContractModule.md)\<[`MandatorySettlementModulesRecord`](../../protocol/type-aliases/MandatorySettlementModulesRecord.md)\> = `undefined`

Defined in: [packages/sequencer/src/settlement/tasks/SettlementProvingTask.ts:78](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/settlement/tasks/SettlementProvingTask.ts#L78)

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

> **compute**(`input`): `Promise`\<[`TransactionTaskResult`](../type-aliases/TransactionTaskResult.md)\>

Defined in: [packages/sequencer/src/settlement/tasks/SettlementProvingTask.ts:125](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/settlement/tasks/SettlementProvingTask.ts#L125)

#### Parameters

##### input

[`TransactionTaskArgs`](../type-aliases/TransactionTaskArgs.md)

#### Returns

`Promise`\<[`TransactionTaskResult`](../type-aliases/TransactionTaskResult.md)\>

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

> **inputSerializer**(): [`TaskSerializer`](../interfaces/TaskSerializer.md)\<[`TransactionTaskArgs`](../type-aliases/TransactionTaskArgs.md)\>

Defined in: [packages/sequencer/src/settlement/tasks/SettlementProvingTask.ts:158](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/settlement/tasks/SettlementProvingTask.ts#L158)

#### Returns

[`TaskSerializer`](../interfaces/TaskSerializer.md)\<[`TransactionTaskArgs`](../type-aliases/TransactionTaskArgs.md)\>

#### Implementation of

[`Task`](../interfaces/Task.md).[`inputSerializer`](../interfaces/Task.md#inputserializer)

***

### prepare()

> **prepare**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/settlement/tasks/SettlementProvingTask.ts:395](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/settlement/tasks/SettlementProvingTask.ts#L395)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Task`](../interfaces/Task.md).[`prepare`](../interfaces/Task.md#prepare)

***

### resultSerializer()

> **resultSerializer**(): [`TaskSerializer`](../interfaces/TaskSerializer.md)\<[`TransactionTaskResult`](../type-aliases/TransactionTaskResult.md)\>

Defined in: [packages/sequencer/src/settlement/tasks/SettlementProvingTask.ts:432](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/settlement/tasks/SettlementProvingTask.ts#L432)

#### Returns

[`TaskSerializer`](../interfaces/TaskSerializer.md)\<[`TransactionTaskResult`](../type-aliases/TransactionTaskResult.md)\>

#### Implementation of

[`Task`](../interfaces/Task.md).[`resultSerializer`](../interfaces/Task.md#resultserializer)
