---
title: AreProofsEnabledFactory
---

[**@proto-kit/sdk**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sdk](../README.md) / AreProofsEnabledFactory

# Class: AreProofsEnabledFactory

Defined in: [sdk/src/appChain/AreProofsEnabledFactory.ts:21](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/AreProofsEnabledFactory.ts#L21)

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

### new AreProofsEnabledFactory()

> **new AreProofsEnabledFactory**(): [`AreProofsEnabledFactory`](AreProofsEnabledFactory.md)

#### Returns

[`AreProofsEnabledFactory`](AreProofsEnabledFactory.md)

## Methods

### dependencies()

> **dependencies**(): `object`

Defined in: [sdk/src/appChain/AreProofsEnabledFactory.ts:22](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sdk/src/appChain/AreProofsEnabledFactory.ts#L22)

#### Returns

`object`

##### areProofsEnabled

> **areProofsEnabled**: `object`

###### areProofsEnabled.useClass

> **areProofsEnabled.useClass**: *typeof* [`InMemoryAreProofsEnabled`](InMemoryAreProofsEnabled.md) = `InMemoryAreProofsEnabled`

#### Implementation of

[`DependencyFactory`](../../common/interfaces/DependencyFactory.md).[`dependencies`](../../common/interfaces/DependencyFactory.md#dependencies)
