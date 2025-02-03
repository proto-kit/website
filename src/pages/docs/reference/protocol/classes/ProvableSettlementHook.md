---
title: ProvableSettlementHook
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / ProvableSettlementHook

# Class: `abstract` ProvableSettlementHook\<Config\>

Defined in: [packages/protocol/src/settlement/modularity/ProvableSettlementHook.ts:29](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/modularity/ProvableSettlementHook.ts#L29)

Used by various module sub-types that may need to be configured

## Extends

- [`ProtocolModule`](ProtocolModule.md)\<`Config`\>

## Extended by

- [`NetworkStateSettlementModule`](NetworkStateSettlementModule.md)

## Type Parameters

• **Config**

## Constructors

### new ProvableSettlementHook()

> **new ProvableSettlementHook**\<`Config`\>(): [`ProvableSettlementHook`](ProvableSettlementHook.md)\<`Config`\>

#### Returns

[`ProvableSettlementHook`](ProvableSettlementHook.md)\<`Config`\>

#### Inherited from

[`ProtocolModule`](ProtocolModule.md).[`constructor`](ProtocolModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| `Config`

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`ProtocolModule`](ProtocolModule.md).[`currentConfig`](ProtocolModule.md#currentconfig)

***

### protocol?

> `optional` **protocol**: [`ProtocolEnvironment`](../interfaces/ProtocolEnvironment.md)

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:14](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/protocol/ProtocolModule.ts#L14)

#### Inherited from

[`ProtocolModule`](ProtocolModule.md).[`protocol`](ProtocolModule.md#protocol)

## Accessors

### areProofsEnabled

#### Get Signature

> **get** **areProofsEnabled**(): `undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:16](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/protocol/ProtocolModule.ts#L16)

##### Returns

`undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

#### Inherited from

[`ProtocolModule`](ProtocolModule.md).[`areProofsEnabled`](ProtocolModule.md#areproofsenabled)

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

[`ProtocolModule`](ProtocolModule.md).[`config`](ProtocolModule.md#config)

## Methods

### beforeSettlement()

> `abstract` **beforeSettlement**(`smartContract`, `inputs`): `Promise`\<`void`\>

Defined in: [packages/protocol/src/settlement/modularity/ProvableSettlementHook.ts:32](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/settlement/modularity/ProvableSettlementHook.ts#L32)

#### Parameters

##### smartContract

[`SettlementSmartContractBase`](SettlementSmartContractBase.md)

##### inputs

[`SettlementHookInputs`](../type-aliases/SettlementHookInputs.md)

#### Returns

`Promise`\<`void`\>

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

[`ProtocolModule`](ProtocolModule.md).[`create`](ProtocolModule.md#create)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:24](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/protocol/ProtocolModule.ts#L24)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`ProtocolModule`](ProtocolModule.md).[`start`](ProtocolModule.md#start)
