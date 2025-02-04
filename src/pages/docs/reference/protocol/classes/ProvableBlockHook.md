---
title: ProvableBlockHook
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / ProvableBlockHook

# Class: `abstract` ProvableBlockHook\<Config\>

Defined in: [packages/protocol/src/protocol/ProvableBlockHook.ts:7](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/protocol/ProvableBlockHook.ts#L7)

## Extends

- `TransitioningProtocolModule`\<`Config`\>

## Extended by

- [`BlockHeightHook`](BlockHeightHook.md)
- [`LastStateRootBlockHook`](LastStateRootBlockHook.md)

## Type Parameters

• **Config**

## Constructors

### new ProvableBlockHook()

> **new ProvableBlockHook**\<`Config`\>(): [`ProvableBlockHook`](ProvableBlockHook.md)\<`Config`\>

#### Returns

[`ProvableBlockHook`](ProvableBlockHook.md)\<`Config`\>

#### Inherited from

`TransitioningProtocolModule<Config>.constructor`

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| `Config`

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

`TransitioningProtocolModule.currentConfig`

***

### name?

> `optional` **name**: `string`

Defined in: [packages/protocol/src/protocol/TransitioningProtocolModule.ts:11](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/protocol/TransitioningProtocolModule.ts#L11)

#### Inherited from

`TransitioningProtocolModule.name`

***

### protocol?

> `optional` **protocol**: [`ProtocolEnvironment`](../interfaces/ProtocolEnvironment.md)

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:14](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/protocol/ProtocolModule.ts#L14)

#### Inherited from

`TransitioningProtocolModule.protocol`

## Accessors

### areProofsEnabled

#### Get Signature

> **get** **areProofsEnabled**(): `undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:16](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/protocol/ProtocolModule.ts#L16)

##### Returns

`undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

#### Inherited from

`TransitioningProtocolModule.areProofsEnabled`

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

`TransitioningProtocolModule.config`

## Methods

### afterBlock()

> `abstract` **afterBlock**(`networkState`, `state`): `Promise`\<[`NetworkState`](NetworkState.md)\>

Defined in: [packages/protocol/src/protocol/ProvableBlockHook.ts:15](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/protocol/ProvableBlockHook.ts#L15)

#### Parameters

##### networkState

[`NetworkState`](NetworkState.md)

##### state

[`BlockProverState`](../interfaces/BlockProverState.md)

#### Returns

`Promise`\<[`NetworkState`](NetworkState.md)\>

***

### beforeBlock()

> `abstract` **beforeBlock**(`networkState`, `state`): `Promise`\<[`NetworkState`](NetworkState.md)\>

Defined in: [packages/protocol/src/protocol/ProvableBlockHook.ts:10](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/protocol/ProvableBlockHook.ts#L10)

#### Parameters

##### networkState

[`NetworkState`](NetworkState.md)

##### state

[`BlockProverState`](../interfaces/BlockProverState.md)

#### Returns

`Promise`\<[`NetworkState`](NetworkState.md)\>

***

### create()

> **create**(`childContainerProvider`): `void`

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:20](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/protocol/ProtocolModule.ts#L20)

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Inherited from

`TransitioningProtocolModule.create`

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:24](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/protocol/ProtocolModule.ts#L24)

#### Returns

`Promise`\<`void`\>

#### Inherited from

`TransitioningProtocolModule.start`
