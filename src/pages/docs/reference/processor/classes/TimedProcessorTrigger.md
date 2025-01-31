---
title: TimedProcessorTrigger
---

[**@proto-kit/processor**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/processor](../README.md) / TimedProcessorTrigger

# Class: TimedProcessorTrigger

Defined in: [packages/processor/src/triggers/TimedProcessorTrigger.ts:15](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/processor/src/triggers/TimedProcessorTrigger.ts#L15)

Used by various module sub-types that may need to be configured

## Extends

- [`ProcessorModule`](ProcessorModule.md)\<[`TimedProcessorTriggerConfig`](../interfaces/TimedProcessorTriggerConfig.md)\>

## Constructors

### new TimedProcessorTrigger()

> **new TimedProcessorTrigger**(`blockStorage`, `blockFetching`, `handlersExecutor`): [`TimedProcessorTrigger`](TimedProcessorTrigger.md)

Defined in: [packages/processor/src/triggers/TimedProcessorTrigger.ts:18](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/processor/src/triggers/TimedProcessorTrigger.ts#L18)

#### Parameters

##### blockStorage

`BlockStorage`

##### blockFetching

[`BlockFetching`](BlockFetching.md)

##### handlersExecutor

[`HandlersExecutor`](HandlersExecutor.md)\<`BasePrismaClient`, [`HandlersRecord`](../interfaces/HandlersRecord.md)\<`BasePrismaClient`\>\>

#### Returns

[`TimedProcessorTrigger`](TimedProcessorTrigger.md)

#### Overrides

[`ProcessorModule`](ProcessorModule.md).[`constructor`](ProcessorModule.md#constructors)

## Properties

### blockFetching

> **blockFetching**: [`BlockFetching`](BlockFetching.md)

Defined in: [packages/processor/src/triggers/TimedProcessorTrigger.ts:20](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/processor/src/triggers/TimedProcessorTrigger.ts#L20)

***

### blockStorage

> **blockStorage**: `BlockStorage`

Defined in: [packages/processor/src/triggers/TimedProcessorTrigger.ts:19](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/processor/src/triggers/TimedProcessorTrigger.ts#L19)

***

### catchingUp

> **catchingUp**: `boolean` = `false`

Defined in: [packages/processor/src/triggers/TimedProcessorTrigger.ts:16](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/processor/src/triggers/TimedProcessorTrigger.ts#L16)

***

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`TimedProcessorTriggerConfig`](../interfaces/TimedProcessorTriggerConfig.md)

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`ProcessorModule`](ProcessorModule.md).[`currentConfig`](ProcessorModule.md#currentconfig)

***

### handlersExecutor

> **handlersExecutor**: [`HandlersExecutor`](HandlersExecutor.md)\<`BasePrismaClient`, [`HandlersRecord`](../interfaces/HandlersRecord.md)\<`BasePrismaClient`\>\>

Defined in: [packages/processor/src/triggers/TimedProcessorTrigger.ts:22](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/processor/src/triggers/TimedProcessorTrigger.ts#L22)

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

[`ProcessorModule`](ProcessorModule.md).[`config`](ProcessorModule.md#config)

## Methods

### catchUp()

> **catchUp**(): `Promise`\<`void`\>

Defined in: [packages/processor/src/triggers/TimedProcessorTrigger.ts:61](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/processor/src/triggers/TimedProcessorTrigger.ts#L61)

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

[`ProcessorModule`](ProcessorModule.md).[`create`](ProcessorModule.md#create)

***

### processNextBlock()

> **processNextBlock**(): `Promise`\<`boolean`\>

Defined in: [packages/processor/src/triggers/TimedProcessorTrigger.ts:30](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/processor/src/triggers/TimedProcessorTrigger.ts#L30)

#### Returns

`Promise`\<`boolean`\>

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/processor/src/triggers/TimedProcessorTrigger.ts:77](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/processor/src/triggers/TimedProcessorTrigger.ts#L77)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`ProcessorModule`](ProcessorModule.md).[`start`](ProcessorModule.md#start)
