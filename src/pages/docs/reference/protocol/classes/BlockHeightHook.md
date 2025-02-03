---
title: BlockHeightHook
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / BlockHeightHook

# Class: BlockHeightHook

Defined in: [packages/protocol/src/hooks/BlockHeightHook.ts:4](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/hooks/BlockHeightHook.ts#L4)

## Extends

- [`ProvableBlockHook`](ProvableBlockHook.md)\<`Record`\<`string`, `never`\>\>

## Constructors

### new BlockHeightHook()

> **new BlockHeightHook**(): [`BlockHeightHook`](BlockHeightHook.md)

#### Returns

[`BlockHeightHook`](BlockHeightHook.md)

#### Inherited from

[`ProvableBlockHook`](ProvableBlockHook.md).[`constructor`](ProvableBlockHook.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| `Record`\<`string`, `never`\>

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`ProvableBlockHook`](ProvableBlockHook.md).[`currentConfig`](ProvableBlockHook.md#currentconfig)

***

### name?

> `optional` **name**: `string`

Defined in: [packages/protocol/src/protocol/TransitioningProtocolModule.ts:11](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/protocol/TransitioningProtocolModule.ts#L11)

#### Inherited from

[`ProvableBlockHook`](ProvableBlockHook.md).[`name`](ProvableBlockHook.md#name)

***

### protocol?

> `optional` **protocol**: [`ProtocolEnvironment`](../interfaces/ProtocolEnvironment.md)

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:14](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/protocol/ProtocolModule.ts#L14)

#### Inherited from

[`ProvableBlockHook`](ProvableBlockHook.md).[`protocol`](ProvableBlockHook.md#protocol)

## Accessors

### areProofsEnabled

#### Get Signature

> **get** **areProofsEnabled**(): `undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:16](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/protocol/ProtocolModule.ts#L16)

##### Returns

`undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

#### Inherited from

[`ProvableBlockHook`](ProvableBlockHook.md).[`areProofsEnabled`](ProvableBlockHook.md#areproofsenabled)

***

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

[`ProvableBlockHook`](ProvableBlockHook.md).[`config`](ProvableBlockHook.md#config)

## Methods

### afterBlock()

> **afterBlock**(`networkState`): `Promise`\<[`NetworkState`](NetworkState.md)\>

Defined in: [packages/protocol/src/hooks/BlockHeightHook.ts:5](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/hooks/BlockHeightHook.ts#L5)

#### Parameters

##### networkState

[`NetworkState`](NetworkState.md)

#### Returns

`Promise`\<[`NetworkState`](NetworkState.md)\>

#### Overrides

[`ProvableBlockHook`](ProvableBlockHook.md).[`afterBlock`](ProvableBlockHook.md#afterblock)

***

### beforeBlock()

> **beforeBlock**(`networkState`): `Promise`\<[`NetworkState`](NetworkState.md)\>

Defined in: [packages/protocol/src/hooks/BlockHeightHook.ts:14](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/hooks/BlockHeightHook.ts#L14)

#### Parameters

##### networkState

[`NetworkState`](NetworkState.md)

#### Returns

`Promise`\<[`NetworkState`](NetworkState.md)\>

#### Overrides

[`ProvableBlockHook`](ProvableBlockHook.md).[`beforeBlock`](ProvableBlockHook.md#beforeblock)

***

### create()

> **create**(`childContainerProvider`): `void`

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:20](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/protocol/ProtocolModule.ts#L20)

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Inherited from

[`ProvableBlockHook`](ProvableBlockHook.md).[`create`](ProvableBlockHook.md#create)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:24](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/protocol/ProtocolModule.ts#L24)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`ProvableBlockHook`](ProvableBlockHook.md).[`start`](ProvableBlockHook.md#start)
