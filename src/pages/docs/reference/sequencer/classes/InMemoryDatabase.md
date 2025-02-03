---
title: InMemoryDatabase
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / InMemoryDatabase

# Class: InMemoryDatabase

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryDatabase.ts:21](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/inmemory/InMemoryDatabase.ts#L21)

Lifecycle of a SequencerModule

start(): Executed to execute any logic required to start the module

## Extends

- [`SequencerModule`](SequencerModule.md)

## Implements

- [`Database`](../interfaces/Database.md)

## Constructors

### new InMemoryDatabase()

> **new InMemoryDatabase**(): [`InMemoryDatabase`](InMemoryDatabase.md)

#### Returns

[`InMemoryDatabase`](InMemoryDatabase.md)

#### Inherited from

[`SequencerModule`](SequencerModule.md).[`constructor`](SequencerModule.md#constructors)

## Properties

### currentConfig

> `protected` **currentConfig**: `undefined` \| [`NoConfig`](../../common/type-aliases/NoConfig.md)

Defined in: packages/common/dist/config/ConfigurableModule.d.ts:17

Store the config separately, so that we can apply additional
checks when retrieving it via the getter

#### Inherited from

[`SequencerModule`](SequencerModule.md).[`currentConfig`](SequencerModule.md#currentconfig)

***

### presets

> `static` **presets**: [`Presets`](../../common/type-aliases/Presets.md)\<`unknown`\> = `{}`

Defined in: [packages/sequencer/src/sequencer/builder/SequencerModule.ts:18](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/sequencer/builder/SequencerModule.ts#L18)

#### Inherited from

[`SequencerModule`](SequencerModule.md).[`presets`](SequencerModule.md#presets)

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

[`SequencerModule`](SequencerModule.md).[`config`](SequencerModule.md#config)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryDatabase.ts:64](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/inmemory/InMemoryDatabase.ts#L64)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Database`](../interfaces/Database.md).[`close`](../interfaces/Database.md#close)

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

[`SequencerModule`](SequencerModule.md).[`create`](SequencerModule.md#create)

***

### dependencies()

> **dependencies**(): [`StorageDependencyMinimumDependencies`](../interfaces/StorageDependencyMinimumDependencies.md)

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryDatabase.ts:22](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/inmemory/InMemoryDatabase.ts#L22)

#### Returns

[`StorageDependencyMinimumDependencies`](../interfaces/StorageDependencyMinimumDependencies.md)

#### Implementation of

[`Database`](../interfaces/Database.md).[`dependencies`](../interfaces/Database.md#dependencies)

***

### executeInTransaction()

> **executeInTransaction**(`f`): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryDatabase.ts:75](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/inmemory/InMemoryDatabase.ts#L75)

#### Parameters

##### f

() => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Database`](../interfaces/Database.md).[`executeInTransaction`](../interfaces/Database.md#executeintransaction)

***

### pruneDatabase()

> **pruneDatabase**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryDatabase.ts:68](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/inmemory/InMemoryDatabase.ts#L68)

Prunes all data from the database connection.
Note: This function should only be called immediately at startup,
everything else will lead to unexpected behaviour and errors

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Database`](../interfaces/Database.md).[`pruneDatabase`](../interfaces/Database.md#prunedatabase)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/storage/inmemory/InMemoryDatabase.ts:60](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/inmemory/InMemoryDatabase.ts#L60)

Start the module and all it's functionality.
The returned Promise has to resolve after initialization,
since it will block in the sequencer init.
That means that you mustn't await server.start() for example.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`SequencerModule`](SequencerModule.md).[`start`](SequencerModule.md#start)
