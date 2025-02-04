---
title: HandlersExecutor
---

[**@proto-kit/processor**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/processor](../README.md) / HandlersExecutor

# Class: HandlersExecutor\<PrismaClient, Handlers\>

Defined in: [packages/processor/src/handlers/HandlersExecutor.ts:28](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/processor/src/handlers/HandlersExecutor.ts#L28)

Used by various module sub-types that may need to be configured

## Extends

- [`ProcessorModule`](ProcessorModule.md)\<[`HandlersExecutorConfig`](../interfaces/HandlersExecutorConfig.md)\>

## Type Parameters

• **PrismaClient** *extends* `BasePrismaClient`

• **Handlers** *extends* [`HandlersRecord`](../interfaces/HandlersRecord.md)\<`PrismaClient`\>

## Constructors

### new HandlersExecutor()

> **new HandlersExecutor**\<`PrismaClient`, `Handlers`\>(): [`HandlersExecutor`](HandlersExecutor.md)\<`PrismaClient`, `Handlers`\>

#### Returns

[`HandlersExecutor`](HandlersExecutor.md)\<`PrismaClient`, `Handlers`\>

#### Inherited from

[`ProcessorModule`](ProcessorModule.md).[`constructor`](ProcessorModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`HandlersExecutorConfig`](../interfaces/HandlersExecutorConfig.md)

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`ProcessorModule`](ProcessorModule.md).[`currentConfig`](ProcessorModule.md#currentconfig)

***

### database

> **database**: `undefined` \| `PrismaDatabaseConnection`\<`PrismaClient`\>

Defined in: [packages/processor/src/handlers/HandlersExecutor.ts:36](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/processor/src/handlers/HandlersExecutor.ts#L36)

***

### handlers

> **handlers**: `undefined` \| `Handlers`

Defined in: [packages/processor/src/handlers/HandlersExecutor.ts:34](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/processor/src/handlers/HandlersExecutor.ts#L34)

***

### isExecuting

> **isExecuting**: `boolean` = `false`

Defined in: [packages/processor/src/handlers/HandlersExecutor.ts:32](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/processor/src/handlers/HandlersExecutor.ts#L32)

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

### create()

> **create**(`childContainerProvider`): `void`

Defined in: [packages/processor/src/handlers/HandlersExecutor.ts:38](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/processor/src/handlers/HandlersExecutor.ts#L38)

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Overrides

[`ProcessorModule`](ProcessorModule.md).[`create`](ProcessorModule.md#create)

***

### execute()

> **execute**(`block`): `Promise`\<`void`\>

Defined in: [packages/processor/src/handlers/HandlersExecutor.ts:83](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/processor/src/handlers/HandlersExecutor.ts#L83)

#### Parameters

##### block

[`BlockWithResult`](../../sequencer/interfaces/BlockWithResult.md)

#### Returns

`Promise`\<`void`\>

***

### onAfterHandlers()

> **onAfterHandlers**(`client`, `block`): `Promise`\<`void`\>

Defined in: [packages/processor/src/handlers/HandlersExecutor.ts:72](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/processor/src/handlers/HandlersExecutor.ts#L72)

#### Parameters

##### client

[`ClientTransaction`](../type-aliases/ClientTransaction.md)\<`PrismaClient`\>

##### block

[`BlockWithResult`](../../sequencer/interfaces/BlockWithResult.md)

#### Returns

`Promise`\<`void`\>

***

### onBlock()

> **onBlock**(`client`, `block`): `Promise`\<`void`\>

Defined in: [packages/processor/src/handlers/HandlersExecutor.ts:60](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/processor/src/handlers/HandlersExecutor.ts#L60)

#### Parameters

##### client

[`ClientTransaction`](../type-aliases/ClientTransaction.md)\<`PrismaClient`\>

##### block

[`BlockWithResult`](../../sequencer/interfaces/BlockWithResult.md)

#### Returns

`Promise`\<`void`\>

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/processor/src/handlers/HandlersExecutor.ts:46](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/processor/src/handlers/HandlersExecutor.ts#L46)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`ProcessorModule`](ProcessorModule.md).[`start`](ProcessorModule.md#start)

***

### from()

> `static` **from**\<`PrismaClient`, `Handlers`\>(`handlers`): [`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`HandlersExecutor`](HandlersExecutor.md)\<`PrismaClient`, `Handlers`\>\>

Defined in: [packages/processor/src/handlers/HandlersExecutor.ts:48](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/processor/src/handlers/HandlersExecutor.ts#L48)

#### Type Parameters

• **PrismaClient** *extends* `BasePrismaClient`

• **Handlers** *extends* [`HandlersRecord`](../interfaces/HandlersRecord.md)\<`PrismaClient`\>

#### Parameters

##### handlers

`Handlers`

#### Returns

[`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`HandlersExecutor`](HandlersExecutor.md)\<`PrismaClient`, `Handlers`\>\>
