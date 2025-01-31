---
title: Balances
---

[**@proto-kit/library**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/library](../README.md) / Balances

# Class: Balances\<Config\>

Defined in: [packages/library/src/runtime/Balances.ts:45](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/runtime/Balances.ts#L45)

Base class for runtime modules providing the necessary utilities.

## Extends

- [`RuntimeModule`](../../module/classes/RuntimeModule.md)\<`Config`\>

## Extended by

- [`TestBalances`](../../stack/classes/TestBalances.md)

## Type Parameters

• **Config** = [`NoConfig`](../../common/type-aliases/NoConfig.md)

## Implements

- [`MinimalBalances`](../type-aliases/MinimalBalances.md)

## Constructors

### new Balances()

> **new Balances**\<`Config`\>(): [`Balances`](Balances.md)\<`Config`\>

Defined in: packages/module/dist/runtime/RuntimeModule.d.ts:31

#### Returns

[`Balances`](Balances.md)\<`Config`\>

#### Inherited from

[`RuntimeModule`](../../module/classes/RuntimeModule.md).[`constructor`](../../module/classes/RuntimeModule.md#constructors)

## Properties

### balances

> **balances**: [`StateMap`](../../protocol/classes/StateMap.md)\<[`BalancesKey`](BalancesKey.md), [`Balance`](Balance.md)\>

Defined in: [packages/library/src/runtime/Balances.ts:49](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/runtime/Balances.ts#L49)

#### Implementation of

`MinimalBalances.balances`

***

### currentConfig

> `protected` **currentConfig**: `undefined` \| `Config`

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`RuntimeModule`](../../module/classes/RuntimeModule.md).[`currentConfig`](../../module/classes/RuntimeModule.md#currentconfig)

***

### events?

> `optional` **events**: [`RuntimeEvents`](../../module/classes/RuntimeEvents.md)\<`any`\>

Defined in: packages/module/dist/runtime/RuntimeModule.d.ts:30

#### Inherited from

[`RuntimeModule`](../../module/classes/RuntimeModule.md).[`events`](../../module/classes/RuntimeModule.md#events)

***

### isRuntimeModule

> **isRuntimeModule**: `boolean`

Defined in: packages/module/dist/runtime/RuntimeModule.d.ts:27

This property exists only to typecheck that the RuntimeModule
was extended correctly in e.g. a decorator. We need at least
one non-optional property in this class to make the typechecking work.

#### Inherited from

[`RuntimeModule`](../../module/classes/RuntimeModule.md).[`isRuntimeModule`](../../module/classes/RuntimeModule.md#isruntimemodule)

***

### name?

> `optional` **name**: `string`

Defined in: packages/module/dist/runtime/RuntimeModule.d.ts:28

#### Inherited from

[`RuntimeModule`](../../module/classes/RuntimeModule.md).[`name`](../../module/classes/RuntimeModule.md#name)

***

### runtime?

> `optional` **runtime**: [`RuntimeEnvironment`](../../module/interfaces/RuntimeEnvironment.md)

Defined in: packages/module/dist/runtime/RuntimeModule.d.ts:29

#### Inherited from

[`RuntimeModule`](../../module/classes/RuntimeModule.md).[`runtime`](../../module/classes/RuntimeModule.md#runtime)

***

### runtimeMethodNames

> `readonly` **runtimeMethodNames**: `string`[]

Defined in: packages/module/dist/runtime/RuntimeModule.d.ts:21

Holds all method names that are callable throw transactions

#### Inherited from

[`RuntimeModule`](../../module/classes/RuntimeModule.md).[`runtimeMethodNames`](../../module/classes/RuntimeModule.md#runtimemethodnames)

***

### presets

> `static` **presets**: [`Presets`](../../common/type-aliases/Presets.md)\<`unknown`\>

Defined in: packages/module/dist/runtime/RuntimeModule.d.ts:17

#### Inherited from

[`RuntimeModule`](../../module/classes/RuntimeModule.md).[`presets`](../../module/classes/RuntimeModule.md#presets)

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

[`RuntimeModule`](../../module/classes/RuntimeModule.md).[`config`](../../module/classes/RuntimeModule.md#config)

***

### network

#### Get Signature

> **get** **network**(): [`NetworkState`](../../protocol/classes/NetworkState.md)

Defined in: packages/module/dist/runtime/RuntimeModule.d.ts:34

##### Returns

[`NetworkState`](../../protocol/classes/NetworkState.md)

#### Inherited from

[`RuntimeModule`](../../module/classes/RuntimeModule.md).[`network`](../../module/classes/RuntimeModule.md#network)

***

### transaction

#### Get Signature

> **get** **transaction**(): [`RuntimeTransaction`](../../protocol/classes/RuntimeTransaction.md)

Defined in: packages/module/dist/runtime/RuntimeModule.d.ts:33

##### Returns

[`RuntimeTransaction`](../../protocol/classes/RuntimeTransaction.md)

#### Inherited from

[`RuntimeModule`](../../module/classes/RuntimeModule.md).[`transaction`](../../module/classes/RuntimeModule.md#transaction)

## Methods

### burn()

> **burn**(`tokenId`, `address`, `amount`): `Promise`\<`void`\>

Defined in: [packages/library/src/runtime/Balances.ts:99](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/runtime/Balances.ts#L99)

#### Parameters

##### tokenId

[`TokenId`](TokenId.md)

##### address

`PublicKey`

##### amount

[`Balance`](Balance.md)

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

[`RuntimeModule`](../../module/classes/RuntimeModule.md).[`create`](../../module/classes/RuntimeModule.md#create)

***

### getBalance()

> **getBalance**(`tokenId`, `address`): `Promise`\<[`Balance`](Balance.md)\>

Defined in: [packages/library/src/runtime/Balances.ts:54](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/runtime/Balances.ts#L54)

#### Parameters

##### tokenId

[`TokenId`](TokenId.md)

##### address

`PublicKey`

#### Returns

`Promise`\<[`Balance`](Balance.md)\>

***

### getInputs()

> **getInputs**(): [`RuntimeMethodExecutionData`](../../protocol/interfaces/RuntimeMethodExecutionData.md)

Defined in: packages/module/dist/runtime/RuntimeModule.d.ts:32

#### Returns

[`RuntimeMethodExecutionData`](../../protocol/interfaces/RuntimeMethodExecutionData.md)

#### Inherited from

[`RuntimeModule`](../../module/classes/RuntimeModule.md).[`getInputs`](../../module/classes/RuntimeModule.md#getinputs)

***

### mint()

> **mint**(`tokenId`, `address`, `amount`): `Promise`\<`void`\>

Defined in: [packages/library/src/runtime/Balances.ts:93](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/runtime/Balances.ts#L93)

#### Parameters

##### tokenId

[`TokenId`](TokenId.md)

##### address

`PublicKey`

##### amount

[`Balance`](Balance.md)

#### Returns

`Promise`\<`void`\>

***

### setBalance()

> **setBalance**(`tokenId`, `address`, `amount`): `Promise`\<`void`\>

Defined in: [packages/library/src/runtime/Balances.ts:63](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/runtime/Balances.ts#L63)

#### Parameters

##### tokenId

[`TokenId`](TokenId.md)

##### address

`PublicKey`

##### amount

[`Balance`](Balance.md)

#### Returns

`Promise`\<`void`\>

***

### transfer()

> **transfer**(`tokenId`, `from`, `to`, `amount`): `Promise`\<`void`\>

Defined in: [packages/library/src/runtime/Balances.ts:72](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/runtime/Balances.ts#L72)

#### Parameters

##### tokenId

[`TokenId`](TokenId.md)

##### from

`PublicKey`

##### to

`PublicKey`

##### amount

[`Balance`](Balance.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

`MinimalBalances.transfer`

***

### transferSigned()

> **transferSigned**(`tokenId`, `from`, `to`, `amount`): `Promise`\<`void`\>

Defined in: [packages/library/src/runtime/Balances.ts:107](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/library/src/runtime/Balances.ts#L107)

#### Parameters

##### tokenId

[`TokenId`](TokenId.md)

##### from

`PublicKey`

##### to

`PublicKey`

##### amount

[`Balance`](Balance.md)

#### Returns

`Promise`\<`void`\>
