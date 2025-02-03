---
title: Database
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / Database

# Interface: Database

Defined in: [packages/sequencer/src/storage/Database.ts:5](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/Database.ts#L5)

This is an abstract class for creating DependencyFactories, a pattern
to bundle multiple smaller services into one and register them into the
injection context.

This can for example be a StorageDependencyFactory that creates dependencies
like StateService, MerkleWitnessService, etc. So in general, services that
are not ConfigurableModules, but still are their own logical unit.

DependencyFactories are designed to only be used statically for sets of
deps that are necessary for the sequencer to work.

## Extends

- [`StorageDependencyFactory`](StorageDependencyFactory.md).[`Closeable`](Closeable.md)

## Properties

### close()

> **close**: () => `Promise`\<`void`\>

Defined in: [packages/sequencer/src/sequencer/builder/Closeable.ts:4](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/sequencer/builder/Closeable.ts#L4)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Closeable`](Closeable.md).[`close`](Closeable.md#close)

***

### dependencies()

> **dependencies**: () => [`StorageDependencyMinimumDependencies`](StorageDependencyMinimumDependencies.md)

Defined in: [packages/sequencer/src/storage/StorageDependencyFactory.ts:31](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/StorageDependencyFactory.ts#L31)

#### Returns

[`StorageDependencyMinimumDependencies`](StorageDependencyMinimumDependencies.md)

#### Inherited from

[`StorageDependencyFactory`](StorageDependencyFactory.md).[`dependencies`](StorageDependencyFactory.md#dependencies)

## Methods

### executeInTransaction()

> **executeInTransaction**(`f`): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/storage/Database.ts:13](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/Database.ts#L13)

#### Parameters

##### f

() => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### pruneDatabase()

> **pruneDatabase**(): `Promise`\<`void`\>

Defined in: [packages/sequencer/src/storage/Database.ts:11](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/Database.ts#L11)

Prunes all data from the database connection.
Note: This function should only be called immediately at startup,
everything else will lead to unexpected behaviour and errors

#### Returns

`Promise`\<`void`\>
