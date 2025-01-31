---
title: RuntimeModule
---

[**@proto-kit/module**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/module](../README.md) / RuntimeModule

# Class: RuntimeModule\<Config\>

Defined in: [module/src/runtime/RuntimeModule.ts:59](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/module/src/runtime/RuntimeModule.ts#L59)

Base class for runtime modules providing the necessary utilities.

## Extends

- [`ConfigurableModule`](../../common/classes/ConfigurableModule.md)\<`Config`\>

## Extended by

- [`Balances`](../../library/classes/Balances.md)
- [`Withdrawals`](../../library/classes/Withdrawals.md)

## Type Parameters

• **Config** = [`NoConfig`](../../common/type-aliases/NoConfig.md)

## Constructors

### new RuntimeModule()

> **new RuntimeModule**\<`Config`\>(): [`RuntimeModule`](RuntimeModule.md)\<`Config`\>

Defined in: [module/src/runtime/RuntimeModule.ts:82](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/module/src/runtime/RuntimeModule.ts#L82)

#### Returns

[`RuntimeModule`](RuntimeModule.md)\<`Config`\>

#### Overrides

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`constructor`](../../common/classes/ConfigurableModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| `Config`

Defined in: common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`currentConfig`](../../common/classes/ConfigurableModule.md#currentconfig)

***

### events?

> `optional` **events**: [`RuntimeEvents`](RuntimeEvents.md)\<`any`\> = `undefined`

Defined in: [module/src/runtime/RuntimeModule.ts:80](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/module/src/runtime/RuntimeModule.ts#L80)

***

### isRuntimeModule

> **isRuntimeModule**: `boolean` = `true`

Defined in: [module/src/runtime/RuntimeModule.ts:74](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/module/src/runtime/RuntimeModule.ts#L74)

This property exists only to typecheck that the RuntimeModule
was extended correctly in e.g. a decorator. We need at least
one non-optional property in this class to make the typechecking work.

***

### name?

> `optional` **name**: `string`

Defined in: [module/src/runtime/RuntimeModule.ts:76](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/module/src/runtime/RuntimeModule.ts#L76)

***

### runtime?

> `optional` **runtime**: [`RuntimeEnvironment`](../interfaces/RuntimeEnvironment.md)

Defined in: [module/src/runtime/RuntimeModule.ts:78](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/module/src/runtime/RuntimeModule.ts#L78)

***

### runtimeMethodNames

> `readonly` **runtimeMethodNames**: `string`[] = `[]`

Defined in: [module/src/runtime/RuntimeModule.ts:67](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/module/src/runtime/RuntimeModule.ts#L67)

Holds all method names that are callable throw transactions

***

### presets

> `static` **presets**: [`Presets`](../../common/type-aliases/Presets.md)\<`unknown`\> = `{}`

Defined in: [module/src/runtime/RuntimeModule.ts:62](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/module/src/runtime/RuntimeModule.ts#L62)

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

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`config`](../../common/classes/ConfigurableModule.md#config)

***

### network

#### Get Signature

> **get** **network**(): [`NetworkState`](../../protocol/classes/NetworkState.md)

Defined in: [module/src/runtime/RuntimeModule.ts:109](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/module/src/runtime/RuntimeModule.ts#L109)

##### Returns

[`NetworkState`](../../protocol/classes/NetworkState.md)

***

### transaction

#### Get Signature

> **get** **transaction**(): [`RuntimeTransaction`](../../protocol/classes/RuntimeTransaction.md)

Defined in: [module/src/runtime/RuntimeModule.ts:105](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/module/src/runtime/RuntimeModule.ts#L105)

##### Returns

[`RuntimeTransaction`](../../protocol/classes/RuntimeTransaction.md)

## Methods

### create()

> **create**(`childContainerProvider`): `void`

Defined in: common/dist/config/ConfigurableModule.d.ts:20

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Inherited from

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`create`](../../common/classes/ConfigurableModule.md#create)

***

### getInputs()

> **getInputs**(): [`RuntimeMethodExecutionData`](../../protocol/interfaces/RuntimeMethodExecutionData.md)

Defined in: [module/src/runtime/RuntimeModule.ts:92](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/module/src/runtime/RuntimeModule.ts#L92)

#### Returns

[`RuntimeMethodExecutionData`](../../protocol/interfaces/RuntimeMethodExecutionData.md)
