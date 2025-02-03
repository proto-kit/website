---
title: Withdrawals
---

[**@proto-kit/library**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/library](../README.md) / Withdrawals

# Class: Withdrawals

Defined in: [packages/library/src/runtime/Withdrawals.ts:26](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/library/src/runtime/Withdrawals.ts#L26)

Base class for runtime modules providing the necessary utilities.

## Extends

- [`RuntimeModule`](../../module/classes/RuntimeModule.md)

## Constructors

### new Withdrawals()

> **new Withdrawals**(`balances`): [`Withdrawals`](Withdrawals.md)

Defined in: [packages/library/src/runtime/Withdrawals.ts:38](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/library/src/runtime/Withdrawals.ts#L38)

#### Parameters

##### balances

[`Balances`](Balances.md)

#### Returns

[`Withdrawals`](Withdrawals.md)

#### Overrides

[`RuntimeModule`](../../module/classes/RuntimeModule.md).[`constructor`](../../module/classes/RuntimeModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`NoConfig`](../../common/type-aliases/NoConfig.md)

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`RuntimeModule`](../../module/classes/RuntimeModule.md).[`currentConfig`](../../module/classes/RuntimeModule.md#currentconfig)

***

### events

> **events**: [`RuntimeEvents`](../../module/classes/RuntimeEvents.md)\<\{ `withdrawal`: *typeof* [`WithdrawalEvent`](WithdrawalEvent.md); \}\>

Defined in: [packages/library/src/runtime/Withdrawals.ts:27](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/library/src/runtime/Withdrawals.ts#L27)

#### Overrides

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

### withdrawalCounters

> **withdrawalCounters**: [`StateMap`](../../protocol/classes/StateMap.md)\<`Field`, `Field`\>

Defined in: [packages/library/src/runtime/Withdrawals.ts:31](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/library/src/runtime/Withdrawals.ts#L31)

***

### withdrawals

> **withdrawals**: [`StateMap`](../../protocol/classes/StateMap.md)\<[`WithdrawalKey`](WithdrawalKey.md), [`Withdrawal`](../../protocol/classes/Withdrawal.md)\>

Defined in: [packages/library/src/runtime/Withdrawals.ts:33](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/library/src/runtime/Withdrawals.ts#L33)

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

### getInputs()

> **getInputs**(): [`RuntimeMethodExecutionData`](../../protocol/interfaces/RuntimeMethodExecutionData.md)

Defined in: packages/module/dist/runtime/RuntimeModule.d.ts:32

#### Returns

[`RuntimeMethodExecutionData`](../../protocol/interfaces/RuntimeMethodExecutionData.md)

#### Inherited from

[`RuntimeModule`](../../module/classes/RuntimeModule.md).[`getInputs`](../../module/classes/RuntimeModule.md#getinputs)

***

### queueWithdrawal()

> `protected` **queueWithdrawal**(`withdrawal`): `Promise`\<`void`\>

Defined in: [packages/library/src/runtime/Withdrawals.ts:42](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/library/src/runtime/Withdrawals.ts#L42)

#### Parameters

##### withdrawal

[`Withdrawal`](../../protocol/classes/Withdrawal.md)

#### Returns

`Promise`\<`void`\>

***

### withdraw()

> **withdraw**(`address`, `amount`, `tokenId`): `Promise`\<`void`\>

Defined in: [packages/library/src/runtime/Withdrawals.ts:59](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/library/src/runtime/Withdrawals.ts#L59)

#### Parameters

##### address

`PublicKey`

##### amount

[`UInt64`](UInt64.md)

##### tokenId

`Field`

#### Returns

`Promise`\<`void`\>
