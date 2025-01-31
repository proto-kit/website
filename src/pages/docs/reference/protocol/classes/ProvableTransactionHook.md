---
title: ProvableTransactionHook
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / ProvableTransactionHook

# Class: `abstract` ProvableTransactionHook\<Config\>

Defined in: [packages/protocol/src/protocol/ProvableTransactionHook.ts:7](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/ProvableTransactionHook.ts#L7)

## Extends

- `TransitioningProtocolModule`\<`Config`\>

## Extended by

- [`AccountStateHook`](AccountStateHook.md)
- [`TransactionFeeHook`](../../library/classes/TransactionFeeHook.md)

## Type Parameters

• **Config** = [`NoConfig`](../../common/type-aliases/NoConfig.md)

## Constructors

### new ProvableTransactionHook()

> **new ProvableTransactionHook**\<`Config`\>(): [`ProvableTransactionHook`](ProvableTransactionHook.md)\<`Config`\>

#### Returns

[`ProvableTransactionHook`](ProvableTransactionHook.md)\<`Config`\>

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

Defined in: [packages/protocol/src/protocol/TransitioningProtocolModule.ts:11](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/TransitioningProtocolModule.ts#L11)

#### Inherited from

`TransitioningProtocolModule.name`

***

### protocol?

> `optional` **protocol**: [`ProtocolEnvironment`](../interfaces/ProtocolEnvironment.md)

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:14](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/ProtocolModule.ts#L14)

#### Inherited from

`TransitioningProtocolModule.protocol`

## Accessors

### areProofsEnabled

#### Get Signature

> **get** **areProofsEnabled**(): `undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:16](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/ProtocolModule.ts#L16)

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

### create()

> **create**(`childContainerProvider`): `void`

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:20](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/ProtocolModule.ts#L20)

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Inherited from

`TransitioningProtocolModule.create`

***

### onTransaction()

> `abstract` **onTransaction**(`executionData`): `Promise`\<`void`\>

Defined in: [packages/protocol/src/protocol/ProvableTransactionHook.ts:10](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/ProvableTransactionHook.ts#L10)

#### Parameters

##### executionData

[`BlockProverExecutionData`](BlockProverExecutionData.md)

#### Returns

`Promise`\<`void`\>

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:24](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/protocol/ProtocolModule.ts#L24)

#### Returns

`Promise`\<`void`\>

#### Inherited from

`TransitioningProtocolModule.start`
