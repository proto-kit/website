---
title: ProtocolModule
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / ProtocolModule

# Class: `abstract` ProtocolModule\<Config\>

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:11](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/protocol/ProtocolModule.ts#L11)

Used by various module sub-types that may need to be configured

## Extends

- [`ConfigurableModule`](../../common/classes/ConfigurableModule.md)\<`Config`\>

## Extended by

- [`BlockProver`](BlockProver.md)
- [`StateTransitionProver`](StateTransitionProver.md)
- [`BlockProverType`](../interfaces/BlockProverType.md)
- [`StateTransitionProverType`](../interfaces/StateTransitionProverType.md)
- [`ProvableSettlementHook`](ProvableSettlementHook.md)

## Type Parameters

• **Config** = [`NoConfig`](../../common/type-aliases/NoConfig.md)

## Constructors

### new ProtocolModule()

> **new ProtocolModule**\<`Config`\>(): [`ProtocolModule`](ProtocolModule.md)\<`Config`\>

#### Returns

[`ProtocolModule`](ProtocolModule.md)\<`Config`\>

#### Inherited from

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`constructor`](../../common/classes/ConfigurableModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| `Config`

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`currentConfig`](../../common/classes/ConfigurableModule.md#currentconfig)

***

### protocol?

> `optional` **protocol**: [`ProtocolEnvironment`](../interfaces/ProtocolEnvironment.md)

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:14](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/protocol/ProtocolModule.ts#L14)

## Accessors

### areProofsEnabled

#### Get Signature

> **get** **areProofsEnabled**(): `undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:16](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/protocol/ProtocolModule.ts#L16)

##### Returns

`undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

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

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`config`](../../common/classes/ConfigurableModule.md#config)

## Methods

### create()

> **create**(`childContainerProvider`): `void`

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:20](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/protocol/ProtocolModule.ts#L20)

#### Parameters

##### childContainerProvider

[`ChildContainerProvider`](../../common/interfaces/ChildContainerProvider.md)

#### Returns

`void`

#### Overrides

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`create`](../../common/classes/ConfigurableModule.md#create)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/protocol/src/protocol/ProtocolModule.ts:24](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/protocol/src/protocol/ProtocolModule.ts#L24)

#### Returns

`Promise`\<`void`\>
