---
title: ConfigurableModule
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / ConfigurableModule

# Class: ConfigurableModule\<Config\>

Defined in: [packages/common/src/config/ConfigurableModule.ts:27](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/config/ConfigurableModule.ts#L27)

Used by various module sub-types that may need to be configured

## Extended by

- [`ModuleContainer`](ModuleContainer.md)
- [`GraphqlModule`](../../api/classes/GraphqlModule.md)
- [`IndexerModule`](../../indexer/classes/IndexerModule.md)
- [`RuntimeFeeAnalyzerService`](../../library/classes/RuntimeFeeAnalyzerService.md)
- [`RuntimeModule`](../../module/classes/RuntimeModule.md)
- [`ProcessorModule`](../../processor/classes/ProcessorModule.md)
- [`ContractModule`](../../protocol/classes/ContractModule.md)
- [`ProtocolModule`](../../protocol/classes/ProtocolModule.md)
- [`AppChainModule`](../../sdk/classes/AppChainModule.md)
- [`SequencerModule`](../../sequencer/classes/SequencerModule.md)
- [`TaskWorkerModule`](../../sequencer/classes/TaskWorkerModule.md)

## Type Parameters

• **Config** = [`NoConfig`](../type-aliases/NoConfig.md)

## Implements

- [`BaseModuleInstanceType`](../interfaces/BaseModuleInstanceType.md)

## Constructors

### new ConfigurableModule()

> **new ConfigurableModule**\<`Config`\>(): [`ConfigurableModule`](ConfigurableModule.md)\<`Config`\>

#### Returns

[`ConfigurableModule`](ConfigurableModule.md)\<`Config`\>

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| `Config`

Defined in: [packages/common/src/config/ConfigurableModule.ts:34](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/config/ConfigurableModule.ts#L34)

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

## Accessors

### config

#### Get Signature

> **get** **config**(): `Config`

Defined in: [packages/common/src/config/ConfigurableModule.ts:37](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/config/ConfigurableModule.ts#L37)

##### Returns

`Config`

#### Set Signature

> **set** **config**(`config`): `void`

Defined in: [packages/common/src/config/ConfigurableModule.ts:45](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/config/ConfigurableModule.ts#L45)

##### Parameters

###### config

`Config`

##### Returns

`void`

#### Implementation of

[`BaseModuleInstanceType`](../interfaces/BaseModuleInstanceType.md).[`config`](../interfaces/BaseModuleInstanceType.md#config)

## Methods

### create()

> **create**(`childContainerProvider`): `void`

Defined in: [packages/common/src/config/ConfigurableModule.ts:49](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/config/ConfigurableModule.ts#L49)

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Implementation of

[`BaseModuleInstanceType`](../interfaces/BaseModuleInstanceType.md).[`create`](../interfaces/BaseModuleInstanceType.md#create)
