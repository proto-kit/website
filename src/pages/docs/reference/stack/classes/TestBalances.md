---
title: TestBalances
---

[**@proto-kit/stack**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/stack](../README.md) / TestBalances

# Class: TestBalances

Defined in: [stack/src/scripts/graphql/server.ts:51](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/stack/src/scripts/graphql/server.ts#L51)

Base class for runtime modules providing the necessary utilities.

## Extends

- [`Balances`](../../library/classes/Balances.md)

## Constructors

### new TestBalances()

> **new TestBalances**(): [`TestBalances`](TestBalances.md)

Defined in: module/dist/runtime/RuntimeModule.d.ts:31

#### Returns

[`TestBalances`](TestBalances.md)

#### Inherited from

[`Balances`](../../library/classes/Balances.md).[`constructor`](../../library/classes/Balances.md#constructors)

## Properties

### balances

> **balances**: [`StateMap`](../../protocol/classes/StateMap.md)\<[`BalancesKey`](../../library/classes/BalancesKey.md), [`Balance`](../../library/classes/Balance.md)\>

Defined in: library/dist/runtime/Balances.d.ts:84

#### Inherited from

[`Balances`](../../library/classes/Balances.md).[`balances`](../../library/classes/Balances.md#balances)

***

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`NoConfig`](../../common/type-aliases/NoConfig.md)

Defined in: common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`Balances`](../../library/classes/Balances.md).[`currentConfig`](../../library/classes/Balances.md#currentconfig)

***

### events?

> `optional` **events**: [`RuntimeEvents`](../../module/classes/RuntimeEvents.md)\<`any`\>

Defined in: module/dist/runtime/RuntimeModule.d.ts:30

#### Inherited from

[`Balances`](../../library/classes/Balances.md).[`events`](../../library/classes/Balances.md#events)

***

### isRuntimeModule

> **isRuntimeModule**: `boolean`

Defined in: module/dist/runtime/RuntimeModule.d.ts:27

This property exists only to typecheck that the RuntimeModule
was extended correctly in e.g. a decorator. We need at least
one non-optional property in this class to make the typechecking work.

#### Inherited from

[`Balances`](../../library/classes/Balances.md).[`isRuntimeModule`](../../library/classes/Balances.md#isruntimemodule)

***

### name?

> `optional` **name**: `string`

Defined in: module/dist/runtime/RuntimeModule.d.ts:28

#### Inherited from

[`Balances`](../../library/classes/Balances.md).[`name`](../../library/classes/Balances.md#name)

***

### runtime?

> `optional` **runtime**: [`RuntimeEnvironment`](../../module/interfaces/RuntimeEnvironment.md)

Defined in: module/dist/runtime/RuntimeModule.d.ts:29

#### Inherited from

[`Balances`](../../library/classes/Balances.md).[`runtime`](../../library/classes/Balances.md#runtime)

***

### runtimeMethodNames

> `readonly` **runtimeMethodNames**: `string`[]

Defined in: module/dist/runtime/RuntimeModule.d.ts:21

Holds all method names that are callable throw transactions

#### Inherited from

[`Balances`](../../library/classes/Balances.md).[`runtimeMethodNames`](../../library/classes/Balances.md#runtimemethodnames)

***

### totalSupply

> **totalSupply**: [`State`](../../protocol/classes/State.md)\<[`UInt64`](../../library/classes/UInt64.md)\>

Defined in: [stack/src/scripts/graphql/server.ts:58](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/stack/src/scripts/graphql/server.ts#L58)

We use `satisfies` here in order to be able to access
presets by key in a type safe way.

***

### presets

> `static` **presets**: [`Presets`](../../common/type-aliases/Presets.md)\<`unknown`\>

Defined in: module/dist/runtime/RuntimeModule.d.ts:17

#### Inherited from

[`Balances`](../../library/classes/Balances.md).[`presets`](../../library/classes/Balances.md#presets)

## Accessors

### config

#### Get Signature

> **get** **config**(): `Config`

Defined in: common/dist/config/ConfigurableModule.d.ts:18

##### Returns

`Config`

#### Set Signature

> **set** **config**(`config`): `void`

Defined in: common/dist/config/ConfigurableModule.d.ts:19

##### Parameters

###### config

`Config`

##### Returns

`void`

#### Inherited from

[`Balances`](../../library/classes/Balances.md).[`config`](../../library/classes/Balances.md#config)

***

### network

#### Get Signature

> **get** **network**(): [`NetworkState`](../../protocol/classes/NetworkState.md)

Defined in: module/dist/runtime/RuntimeModule.d.ts:34

##### Returns

[`NetworkState`](../../protocol/classes/NetworkState.md)

#### Inherited from

[`Balances`](../../library/classes/Balances.md).[`network`](../../library/classes/Balances.md#network)

***

### transaction

#### Get Signature

> **get** **transaction**(): [`RuntimeTransaction`](../../protocol/classes/RuntimeTransaction.md)

Defined in: module/dist/runtime/RuntimeModule.d.ts:33

##### Returns

[`RuntimeTransaction`](../../protocol/classes/RuntimeTransaction.md)

#### Inherited from

[`Balances`](../../library/classes/Balances.md).[`transaction`](../../library/classes/Balances.md#transaction)

## Methods

### addBalance()

> **addBalance**(`tokenId`, `address`, `balance`): `Promise`\<`void`\>

Defined in: [stack/src/scripts/graphql/server.ts:69](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/stack/src/scripts/graphql/server.ts#L69)

#### Parameters

##### tokenId

[`TokenId`](../../library/classes/TokenId.md)

##### address

`PublicKey`

##### balance

[`UInt64`](../../library/classes/UInt64.md)

#### Returns

`Promise`\<`void`\>

***

### burn()

> **burn**(`tokenId`, `address`, `amount`): `Promise`\<`void`\>

Defined in: library/dist/runtime/Balances.d.ts:89

#### Parameters

##### tokenId

[`TokenId`](../../library/classes/TokenId.md)

##### address

`PublicKey`

##### amount

[`Balance`](../../library/classes/Balance.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Balances`](../../library/classes/Balances.md).[`burn`](../../library/classes/Balances.md#burn)

***

### create()

> **create**(`childContainerProvider`): `void`

Defined in: common/dist/config/ConfigurableModule.d.ts:20

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Inherited from

[`Balances`](../../library/classes/Balances.md).[`create`](../../library/classes/Balances.md#create)

***

### getBalance()

> **getBalance**(`tokenId`, `address`): `Promise`\<[`Balance`](../../library/classes/Balance.md)\>

Defined in: library/dist/runtime/Balances.d.ts:85

#### Parameters

##### tokenId

[`TokenId`](../../library/classes/TokenId.md)

##### address

`PublicKey`

#### Returns

`Promise`\<[`Balance`](../../library/classes/Balance.md)\>

#### Inherited from

[`Balances`](../../library/classes/Balances.md).[`getBalance`](../../library/classes/Balances.md#getbalance)

***

### getBalanceForUser()

> **getBalanceForUser**(`tokenId`, `address`): `Promise`\<[`Balance`](../../library/classes/Balance.md)\>

Defined in: [stack/src/scripts/graphql/server.ts:61](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/stack/src/scripts/graphql/server.ts#L61)

#### Parameters

##### tokenId

[`TokenId`](../../library/classes/TokenId.md)

##### address

`PublicKey`

#### Returns

`Promise`\<[`Balance`](../../library/classes/Balance.md)\>

***

### getInputs()

> **getInputs**(): [`RuntimeMethodExecutionData`](../../protocol/interfaces/RuntimeMethodExecutionData.md)

Defined in: module/dist/runtime/RuntimeModule.d.ts:32

#### Returns

[`RuntimeMethodExecutionData`](../../protocol/interfaces/RuntimeMethodExecutionData.md)

#### Inherited from

[`Balances`](../../library/classes/Balances.md).[`getInputs`](../../library/classes/Balances.md#getinputs)

***

### mint()

> **mint**(`tokenId`, `address`, `amount`): `Promise`\<`void`\>

Defined in: library/dist/runtime/Balances.d.ts:88

#### Parameters

##### tokenId

[`TokenId`](../../library/classes/TokenId.md)

##### address

`PublicKey`

##### amount

[`Balance`](../../library/classes/Balance.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Balances`](../../library/classes/Balances.md).[`mint`](../../library/classes/Balances.md#mint)

***

### setBalance()

> **setBalance**(`tokenId`, `address`, `amount`): `Promise`\<`void`\>

Defined in: library/dist/runtime/Balances.d.ts:86

#### Parameters

##### tokenId

[`TokenId`](../../library/classes/TokenId.md)

##### address

`PublicKey`

##### amount

[`Balance`](../../library/classes/Balance.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Balances`](../../library/classes/Balances.md).[`setBalance`](../../library/classes/Balances.md#setbalance)

***

### transfer()

> **transfer**(`tokenId`, `from`, `to`, `amount`): `Promise`\<`void`\>

Defined in: library/dist/runtime/Balances.d.ts:87

#### Parameters

##### tokenId

[`TokenId`](../../library/classes/TokenId.md)

##### from

`PublicKey`

##### to

`PublicKey`

##### amount

[`Balance`](../../library/classes/Balance.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Balances`](../../library/classes/Balances.md).[`transfer`](../../library/classes/Balances.md#transfer)

***

### transferSigned()

> **transferSigned**(`tokenId`, `from`, `to`, `amount`): `Promise`\<`void`\>

Defined in: library/dist/runtime/Balances.d.ts:90

#### Parameters

##### tokenId

[`TokenId`](../../library/classes/TokenId.md)

##### from

`PublicKey`

##### to

`PublicKey`

##### amount

[`Balance`](../../library/classes/Balance.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Balances`](../../library/classes/Balances.md).[`transferSigned`](../../library/classes/Balances.md#transfersigned)
