---
title: LastStateRootBlockHook
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / LastStateRootBlockHook

# Class: LastStateRootBlockHook

Defined in: [packages/protocol/src/hooks/LastStateRootBlockHook.ts:5](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/hooks/LastStateRootBlockHook.ts#L5)

## Extends

- [`ProvableBlockHook`](ProvableBlockHook.md)\<`Record`\<`string`, `never`\>\>

## Constructors

### new LastStateRootBlockHook()

> **new LastStateRootBlockHook**(): [`LastStateRootBlockHook`](LastStateRootBlockHook.md)

#### Returns

[`LastStateRootBlockHook`](LastStateRootBlockHook.md)

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

Defined in: [packages/protocol/src/protocol/TransitioningProtocolModule.ts:11](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/TransitioningProtocolModule.ts#L11)

#### Inherited from

[`ProvableBlockHook`](ProvableBlockHook.md).[`name`](ProvableBlockHook.md#name)

***

### protocol?

> `optional` **protocol**: [`ProtocolEnvironment`](../interfaces/ProtocolEnvironment.md)

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:14](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/ProtocolModule.ts#L14)

#### Inherited from

[`ProvableBlockHook`](ProvableBlockHook.md).[`protocol`](ProvableBlockHook.md#protocol)

## Accessors

### areProofsEnabled

#### Get Signature

> **get** **areProofsEnabled**(): `undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:16](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/ProtocolModule.ts#L16)

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

> **afterBlock**(`networkState`, `state`): `Promise`\<[`NetworkState`](NetworkState.md)\>

Defined in: [packages/protocol/src/hooks/LastStateRootBlockHook.ts:8](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/hooks/LastStateRootBlockHook.ts#L8)

#### Parameters

##### networkState

[`NetworkState`](NetworkState.md)

##### state

[`BlockProverState`](../interfaces/BlockProverState.md)

#### Returns

`Promise`\<[`NetworkState`](NetworkState.md)\>

#### Overrides

[`ProvableBlockHook`](ProvableBlockHook.md).[`afterBlock`](ProvableBlockHook.md#afterblock)

***

### beforeBlock()

> **beforeBlock**(`networkState`, `state`): `Promise`\<[`NetworkState`](NetworkState.md)\>

Defined in: [packages/protocol/src/hooks/LastStateRootBlockHook.ts:20](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/hooks/LastStateRootBlockHook.ts#L20)

#### Parameters

##### networkState

[`NetworkState`](NetworkState.md)

##### state

[`BlockProverState`](../interfaces/BlockProverState.md)

#### Returns

`Promise`\<[`NetworkState`](NetworkState.md)\>

#### Overrides

[`ProvableBlockHook`](ProvableBlockHook.md).[`beforeBlock`](ProvableBlockHook.md#beforeblock)

***

### create()

> **create**(`childContainerProvider`): `void`

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:20](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/ProtocolModule.ts#L20)

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

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:24](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/ProtocolModule.ts#L24)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`ProvableBlockHook`](ProvableBlockHook.md).[`start`](ProvableBlockHook.md#start)
