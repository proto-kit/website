---
title: ContractModule
---

[**@proto-kit/protocol**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/protocol](../README.md) / ContractModule

# Class: `abstract` ContractModule\<ContractType, Config\>

Defined in: [packages/protocol/src/settlement/ContractModule.ts:22](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/ContractModule.ts#L22)

This module type is used to define a contract module that can be used to
construct and inject smart contract instances.
It defines a method contractFactory, whose arguments can be configured via
the Argument generic. It returns a smart contract class that is a subclass
of SmartContract and implements a certain interface as specified by the
ContractType generic.

## Extends

- [`ConfigurableModule`](../../common/classes/ConfigurableModule.md)\<`Config`\>

## Extended by

- [`SettlementContractProtocolModule`](SettlementContractProtocolModule.md)
- [`DispatchContractProtocolModule`](DispatchContractProtocolModule.md)
- [`BridgeContractProtocolModule`](BridgeContractProtocolModule.md)

## Type Parameters

• **ContractType**

• **Config** = [`NoConfig`](../../common/type-aliases/NoConfig.md)

## Implements

- [`CompilableModule`](../../common/interfaces/CompilableModule.md)

## Constructors

### new ContractModule()

> **new ContractModule**\<`ContractType`, `Config`\>(): [`ContractModule`](ContractModule.md)\<`ContractType`, `Config`\>

#### Returns

[`ContractModule`](ContractModule.md)\<`ContractType`, `Config`\>

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

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`config`](../../common/classes/ConfigurableModule.md#config)

## Methods

### compile()

> `abstract` **compile**(`registry`): `Promise`\<`undefined` \| [`ArtifactRecord`](../../common/type-aliases/ArtifactRecord.md)\>

Defined in: [packages/protocol/src/settlement/ContractModule.ts:28](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/ContractModule.ts#L28)

#### Parameters

##### registry

[`CompileRegistry`](../../common/classes/CompileRegistry.md)

#### Returns

`Promise`\<`undefined` \| [`ArtifactRecord`](../../common/type-aliases/ArtifactRecord.md)\>

#### Implementation of

[`CompilableModule`](../../common/interfaces/CompilableModule.md).[`compile`](../../common/interfaces/CompilableModule.md#compile)

***

### contractFactory()

> `abstract` **contractFactory**(): [`SmartContractClassFromInterface`](../type-aliases/SmartContractClassFromInterface.md)\<`ContractType`\>

Defined in: [packages/protocol/src/settlement/ContractModule.ts:26](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/protocol/src/settlement/ContractModule.ts#L26)

#### Returns

[`SmartContractClassFromInterface`](../type-aliases/SmartContractClassFromInterface.md)\<`ContractType`\>

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

[`ConfigurableModule`](../../common/classes/ConfigurableModule.md).[`create`](../../common/classes/ConfigurableModule.md#create)
