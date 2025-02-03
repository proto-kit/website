---
title: StorageDependencyFactory
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / StorageDependencyFactory

# Interface: StorageDependencyFactory

Defined in: [packages/sequencer/src/storage/StorageDependencyFactory.ts:30](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/StorageDependencyFactory.ts#L30)

This is an abstract class for creating DependencyFactories, a pattern
to bundle multiple smaller services into one and register them into the
injection context.

This can for example be a StorageDependencyFactory that creates dependencies
like StateService, MerkleWitnessService, etc. So in general, services that
are not ConfigurableModules, but still are their own logical unit.

DependencyFactories are designed to only be used statically for sets of
deps that are necessary for the sequencer to work.

## Extends

- [`DependencyFactory`](../../common/interfaces/DependencyFactory.md)

## Extended by

- [`Database`](Database.md)

## Properties

### dependencies()

> **dependencies**: () => [`StorageDependencyMinimumDependencies`](StorageDependencyMinimumDependencies.md)

Defined in: [packages/sequencer/src/storage/StorageDependencyFactory.ts:31](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/StorageDependencyFactory.ts#L31)

#### Returns

[`StorageDependencyMinimumDependencies`](StorageDependencyMinimumDependencies.md)

#### Overrides

[`DependencyFactory`](../../common/interfaces/DependencyFactory.md).[`dependencies`](../../common/interfaces/DependencyFactory.md#dependencies)
