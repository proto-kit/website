---
title: PrismaDatabaseConnection
---

[**@proto-kit/persistance**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/persistance](../README.md) / PrismaDatabaseConnection

# Class: PrismaDatabaseConnection

Defined in: [packages/persistance/src/PrismaDatabaseConnection.ts:37](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/PrismaDatabaseConnection.ts#L37)

This is an abstract class for creating DependencyFactories, a pattern
to bundle multiple smaller services into one and register them into the
injection context.

This can for example be a StorageDependencyFactory that creates dependencies
like StateService, MerkleWitnessService, etc. So in general, services that
are not ConfigurableModules, but still are their own logical unit.

DependencyFactories are designed to only be used statically for sets of
deps that are necessary for the sequencer to work.

## Extends

- [`SequencerModule`](../../sequencer/classes/SequencerModule.md)\<[`PrismaDatabaseConfig`](../interfaces/PrismaDatabaseConfig.md)\>

## Implements

- [`DependencyFactory`](../../common/interfaces/DependencyFactory.md)
- [`PrismaConnection`](../interfaces/PrismaConnection.md)

## Constructors

### new PrismaDatabaseConnection()

> **new PrismaDatabaseConnection**(): [`PrismaDatabaseConnection`](PrismaDatabaseConnection.md)

#### Returns

[`PrismaDatabaseConnection`](PrismaDatabaseConnection.md)

#### Inherited from

[`SequencerModule`](../../sequencer/classes/SequencerModule.md).[`constructor`](../../sequencer/classes/SequencerModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`PrismaDatabaseConfig`](../interfaces/PrismaDatabaseConfig.md)

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`SequencerModule`](../../sequencer/classes/SequencerModule.md).[`currentConfig`](../../sequencer/classes/SequencerModule.md#currentconfig)

***

### presets

> `static` **presets**: [`Presets`](../../common/type-aliases/Presets.md)\<`unknown`\>

Defined in: packages/sequencer/dist/sequencer/builder/SequencerModule.d.ts:8

#### Inherited from

[`SequencerModule`](../../sequencer/classes/SequencerModule.md).[`presets`](../../sequencer/classes/SequencerModule.md#presets)

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

[`SequencerModule`](../../sequencer/classes/SequencerModule.md).[`config`](../../sequencer/classes/SequencerModule.md#config)

***

### prismaClient

#### Get Signature

> **get** **prismaClient**(): `PrismaClient`\<`never`\>

Defined in: [packages/persistance/src/PrismaDatabaseConnection.ts:43](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/PrismaDatabaseConnection.ts#L43)

##### Returns

`PrismaClient`\<`never`\>

#### Implementation of

[`PrismaConnection`](../interfaces/PrismaConnection.md).[`prismaClient`](../interfaces/PrismaConnection.md#prismaclient)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [packages/persistance/src/PrismaDatabaseConnection.ts:137](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/PrismaDatabaseConnection.ts#L137)

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

[`SequencerModule`](../../sequencer/classes/SequencerModule.md).[`create`](../../sequencer/classes/SequencerModule.md#create)

***

### dependencies()

> **dependencies**(): [`OmitKeys`](../../common/type-aliases/OmitKeys.md)\<[`StorageDependencyMinimumDependencies`](../../sequencer/interfaces/StorageDependencyMinimumDependencies.md), `"asyncMerkleStore"` \| `"blockTreeStore"` \| `"unprovenMerkleStore"`\>

Defined in: [packages/persistance/src/PrismaDatabaseConnection.ts:50](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/PrismaDatabaseConnection.ts#L50)

#### Returns

[`OmitKeys`](../../common/type-aliases/OmitKeys.md)\<[`StorageDependencyMinimumDependencies`](../../sequencer/interfaces/StorageDependencyMinimumDependencies.md), `"asyncMerkleStore"` \| `"blockTreeStore"` \| `"unprovenMerkleStore"`\>

#### Implementation of

[`DependencyFactory`](../../common/interfaces/DependencyFactory.md).[`dependencies`](../../common/interfaces/DependencyFactory.md#dependencies)

***

### executeInTransaction()

> **executeInTransaction**(`f`): `Promise`\<`void`\>

Defined in: [packages/persistance/src/PrismaDatabaseConnection.ts:141](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/PrismaDatabaseConnection.ts#L141)

#### Parameters

##### f

() => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### pruneDatabase()

> **pruneDatabase**(): `Promise`\<`void`\>

Defined in: [packages/persistance/src/PrismaDatabaseConnection.ts:82](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/PrismaDatabaseConnection.ts#L82)

#### Returns

`Promise`\<`void`\>

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/persistance/src/PrismaDatabaseConnection.ts:117](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/persistance/src/PrismaDatabaseConnection.ts#L117)

Start the module and all it's functionality.
The returned Promise has to resolve after initialization,
since it will block in the sequencer init.
That means that you mustn't await server.start() for example.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`SequencerModule`](../../sequencer/classes/SequencerModule.md).[`start`](../../sequencer/classes/SequencerModule.md#start)
