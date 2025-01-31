---
title: SharedDependencyFactory
---

[**@proto-kit/sdk**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sdk](../README.md) / SharedDependencyFactory

# Class: SharedDependencyFactory

Defined in: [sdk/src/appChain/SharedDependencyFactory.ts:14](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/SharedDependencyFactory.ts#L14)

This is an abstract class for creating DependencyFactories, a pattern
to bundle multiple smaller services into one and register them into the
injection context.

This can for example be a StorageDependencyFactory that creates dependencies
like StateService, MerkleWitnessService, etc. So in general, services that
are not ConfigurableModules, but still are their own logical unit.

DependencyFactories are designed to only be used statically for sets of
deps that are necessary for the sequencer to work.

## Implements

- [`DependencyFactory`](../../common/interfaces/DependencyFactory.md)

## Constructors

### new SharedDependencyFactory()

> **new SharedDependencyFactory**(): [`SharedDependencyFactory`](SharedDependencyFactory.md)

#### Returns

[`SharedDependencyFactory`](SharedDependencyFactory.md)

## Methods

### dependencies()

> **dependencies**(): [`SharedDependencyRecord`](../interfaces/SharedDependencyRecord.md)

Defined in: [sdk/src/appChain/SharedDependencyFactory.ts:15](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/SharedDependencyFactory.ts#L15)

#### Returns

[`SharedDependencyRecord`](../interfaces/SharedDependencyRecord.md)

#### Implementation of

[`DependencyFactory`](../../common/interfaces/DependencyFactory.md).[`dependencies`](../../common/interfaces/DependencyFactory.md#dependencies)
