---
title: DispatchContractProtocolModule
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / DispatchContractProtocolModule

# Class: DispatchContractProtocolModule

Defined in: [packages/protocol/src/settlement/contracts/DispatchContractProtocolModule.ts:22](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/DispatchContractProtocolModule.ts#L22)

This module type is used to define a contract module that can be used to
construct and inject smart contract instances.
It defines a method contractFactory, whose arguments can be configured via
the Argument generic. It returns a smart contract class that is a subclass
of SmartContract and implements a certain interface as specified by the
ContractType generic.

## Extends

- [`ContractModule`](ContractModule.md)\<[`DispatchContractType`](../interfaces/DispatchContractType.md), [`DispatchContractConfig`](../type-aliases/DispatchContractConfig.md)\>

## Constructors

### new DispatchContractProtocolModule()

> **new DispatchContractProtocolModule**(`runtime`): [`DispatchContractProtocolModule`](DispatchContractProtocolModule.md)

Defined in: [packages/protocol/src/settlement/contracts/DispatchContractProtocolModule.ts:26](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/DispatchContractProtocolModule.ts#L26)

#### Parameters

##### runtime

[`RuntimeLike`](../interfaces/RuntimeLike.md)

#### Returns

[`DispatchContractProtocolModule`](DispatchContractProtocolModule.md)

#### Overrides

[`ContractModule`](ContractModule.md).[`constructor`](ContractModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`DispatchContractConfig`](../type-aliases/DispatchContractConfig.md)

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`ContractModule`](ContractModule.md).[`currentConfig`](ContractModule.md#currentconfig)

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

[`ContractModule`](ContractModule.md).[`config`](ContractModule.md#config)

## Methods

### compile()

> **compile**(`registry`): `Promise`\<\{ `DispatchSmartContract`: [`CompileArtifact`](../../common/interfaces/CompileArtifact.md); \}\>

Defined in: [packages/protocol/src/settlement/contracts/DispatchContractProtocolModule.ts:65](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/DispatchContractProtocolModule.ts#L65)

#### Parameters

##### registry

[`CompileRegistry`](../../common/classes/CompileRegistry.md)

#### Returns

`Promise`\<\{ `DispatchSmartContract`: [`CompileArtifact`](../../common/interfaces/CompileArtifact.md); \}\>

#### Overrides

[`ContractModule`](ContractModule.md).[`compile`](ContractModule.md#compile)

***

### contractFactory()

> **contractFactory**(): [`SmartContractClassFromInterface`](../type-aliases/SmartContractClassFromInterface.md)\<[`DispatchContractType`](../interfaces/DispatchContractType.md)\>

Defined in: [packages/protocol/src/settlement/contracts/DispatchContractProtocolModule.ts:49](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/DispatchContractProtocolModule.ts#L49)

#### Returns

[`SmartContractClassFromInterface`](../type-aliases/SmartContractClassFromInterface.md)\<[`DispatchContractType`](../interfaces/DispatchContractType.md)\>

#### Overrides

[`ContractModule`](ContractModule.md).[`contractFactory`](ContractModule.md#contractfactory)

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

[`ContractModule`](ContractModule.md).[`create`](ContractModule.md#create)

***

### eventsDefinition()

> **eventsDefinition**(): `object`

Defined in: [packages/protocol/src/settlement/contracts/DispatchContractProtocolModule.ts:30](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/protocol/src/settlement/contracts/DispatchContractProtocolModule.ts#L30)

#### Returns

`object`

##### incoming-message-placeholder

> **incoming-message-placeholder**: *typeof* `Field` & (`x`) => `Field` = `Field`

##### token-bridge-added

> **token-bridge-added**: *typeof* [`TokenBridgeTreeAddition`](TokenBridgeTreeAddition.md) = `TokenBridgeTreeAddition`
