---
title: AccountStateHook
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / AccountStateHook

# Class: AccountStateHook

Defined in: [packages/protocol/src/hooks/AccountStateHook.ts:15](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/hooks/AccountStateHook.ts#L15)

## Extends

- [`ProvableTransactionHook`](ProvableTransactionHook.md)

## Constructors

### new AccountStateHook()

> **new AccountStateHook**(): [`AccountStateHook`](AccountStateHook.md)

#### Returns

[`AccountStateHook`](AccountStateHook.md)

#### Inherited from

[`ProvableTransactionHook`](ProvableTransactionHook.md).[`constructor`](ProvableTransactionHook.md#constructors)

## Properties

### accountState

> **accountState**: [`StateMap`](StateMap.md)\<`PublicKey`, [`AccountState`](AccountState.md)\>

Defined in: [packages/protocol/src/hooks/AccountStateHook.ts:16](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/hooks/AccountStateHook.ts#L16)

***

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`NoConfig`](../../common/type-aliases/NoConfig.md)

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`ProvableTransactionHook`](ProvableTransactionHook.md).[`currentConfig`](ProvableTransactionHook.md#currentconfig)

***

### name?

> `optional` **name**: `string`

Defined in: [packages/protocol/src/protocol/TransitioningProtocolModule.ts:11](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/TransitioningProtocolModule.ts#L11)

#### Inherited from

[`ProvableTransactionHook`](ProvableTransactionHook.md).[`name`](ProvableTransactionHook.md#name)

***

### protocol?

> `optional` **protocol**: [`ProtocolEnvironment`](../interfaces/ProtocolEnvironment.md)

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:14](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/ProtocolModule.ts#L14)

#### Inherited from

[`ProvableTransactionHook`](ProvableTransactionHook.md).[`protocol`](ProvableTransactionHook.md#protocol)

## Accessors

### areProofsEnabled

#### Get Signature

> **get** **areProofsEnabled**(): `undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:16](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/ProtocolModule.ts#L16)

##### Returns

`undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

#### Inherited from

[`ProvableTransactionHook`](ProvableTransactionHook.md).[`areProofsEnabled`](ProvableTransactionHook.md#areproofsenabled)

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

[`ProvableTransactionHook`](ProvableTransactionHook.md).[`config`](ProvableTransactionHook.md#config)

## Methods

### create()

> **create**(`childContainerProvider`): `void`

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:20](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/ProtocolModule.ts#L20)

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Inherited from

[`ProvableTransactionHook`](ProvableTransactionHook.md).[`create`](ProvableTransactionHook.md#create)

***

### onTransaction()

> **onTransaction**(`__namedParameters`): `Promise`\<`void`\>

Defined in: [packages/protocol/src/hooks/AccountStateHook.ts:21](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/hooks/AccountStateHook.ts#L21)

#### Parameters

##### \_\_namedParameters

[`BlockProverExecutionData`](BlockProverExecutionData.md)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`ProvableTransactionHook`](ProvableTransactionHook.md).[`onTransaction`](ProvableTransactionHook.md#ontransaction)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:24](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/ProtocolModule.ts#L24)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`ProvableTransactionHook`](ProvableTransactionHook.md).[`start`](ProvableTransactionHook.md#start)
