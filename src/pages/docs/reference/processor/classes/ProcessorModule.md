---
title: ProcessorModule
---

[**@proto-kit/processor**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/processor](../README.md) / ProcessorModule

# Class: `abstract` ProcessorModule\<Config\>

Defined in: [packages/processor/src/ProcessorModule.ts:3](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/processor/src/ProcessorModule.ts#L3)

Used by various module sub-types that may need to be configured

## Extends

- [`ConfigurableModule`](../../common/classes/ConfigurableModule.md)\<`Config`\>

## Extended by

- [`HandlersExecutor`](HandlersExecutor.md)
- [`Database`](Database.md)
- [`TimedProcessorTrigger`](TimedProcessorTrigger.md)
- [`BlockFetching`](BlockFetching.md)
- [`DatabasePruneModule`](DatabasePruneModule.md)

## Type Parameters

• **Config**

## Constructors

### new ProcessorModule()

> **new ProcessorModule**\<`Config`\>(): [`ProcessorModule`](ProcessorModule.md)\<`Config`\>

#### Returns

[`ProcessorModule`](ProcessorModule.md)\<`Config`\>

#### Inherited from

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`constructor`](../../common/classes/ConfigurableModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| `Config`

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

***

### start()

> `abstract` **start**(): `Promise`\<`void`\>

Defined in: [packages/processor/src/ProcessorModule.ts:6](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/processor/src/ProcessorModule.ts#L6)

#### Returns

`Promise`\<`void`\>
