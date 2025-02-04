---
title: NetworkStateSettlementModule
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / NetworkStateSettlementModule

# Class: NetworkStateSettlementModule

Defined in: [packages/protocol/src/settlement/modules/NetworkStateSettlementModule.ts:14](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/modules/NetworkStateSettlementModule.ts#L14)

Used by various module sub-types that may need to be configured

## Extends

- [`ProvableSettlementHook`](ProvableSettlementHook.md)\<`NetworkStateSettlementModuleConfig`\>

## Constructors

### new NetworkStateSettlementModule()

> **new NetworkStateSettlementModule**(): [`NetworkStateSettlementModule`](NetworkStateSettlementModule.md)

#### Returns

[`NetworkStateSettlementModule`](NetworkStateSettlementModule.md)

#### Inherited from

[`ProvableSettlementHook`](ProvableSettlementHook.md).[`constructor`](ProvableSettlementHook.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| `NetworkStateSettlementModuleConfig`

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`ProvableSettlementHook`](ProvableSettlementHook.md).[`currentConfig`](ProvableSettlementHook.md#currentconfig)

***

### protocol?

> `optional` **protocol**: [`ProtocolEnvironment`](../interfaces/ProtocolEnvironment.md)

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:14](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/protocol/ProtocolModule.ts#L14)

#### Inherited from

[`ProvableSettlementHook`](ProvableSettlementHook.md).[`protocol`](ProvableSettlementHook.md#protocol)

## Accessors

### areProofsEnabled

#### Get Signature

> **get** **areProofsEnabled**(): `undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:16](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/protocol/ProtocolModule.ts#L16)

##### Returns

`undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

#### Inherited from

[`ProvableSettlementHook`](ProvableSettlementHook.md).[`areProofsEnabled`](ProvableSettlementHook.md#areproofsenabled)

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

[`ProvableSettlementHook`](ProvableSettlementHook.md).[`config`](ProvableSettlementHook.md#config)

## Methods

### beforeSettlement()

> **beforeSettlement**(`smartContract`, `__namedParameters`): `Promise`\<`void`\>

Defined in: [packages/protocol/src/settlement/modules/NetworkStateSettlementModule.ts:15](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/modules/NetworkStateSettlementModule.ts#L15)

#### Parameters

##### smartContract

[`SettlementSmartContract`](SettlementSmartContract.md)

##### \_\_namedParameters

[`SettlementHookInputs`](../type-aliases/SettlementHookInputs.md)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`ProvableSettlementHook`](ProvableSettlementHook.md).[`beforeSettlement`](ProvableSettlementHook.md#beforesettlement)

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

[`ProvableSettlementHook`](ProvableSettlementHook.md).[`create`](ProvableSettlementHook.md#create)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:24](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/protocol/ProtocolModule.ts#L24)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`ProvableSettlementHook`](ProvableSettlementHook.md).[`start`](ProvableSettlementHook.md#start)
