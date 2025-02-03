---
title: MethodIdFactory
---

[**@proto-kit/module**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/module](../README.md) / MethodIdFactory

# Class: MethodIdFactory

Defined in: [module/src/factories/MethodIdFactory.ts:5](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/module/src/factories/MethodIdFactory.ts#L5)

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

### new MethodIdFactory()

> **new MethodIdFactory**(): [`MethodIdFactory`](MethodIdFactory.md)

#### Returns

[`MethodIdFactory`](MethodIdFactory.md)

## Methods

### dependencies()

> **dependencies**(): `object`

Defined in: [module/src/factories/MethodIdFactory.ts:6](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/module/src/factories/MethodIdFactory.ts#L6)

#### Returns

`object`

##### methodIdResolver

> **methodIdResolver**: `object`

###### methodIdResolver.useClass

> **methodIdResolver.useClass**: *typeof* [`MethodIdResolver`](MethodIdResolver.md) = `MethodIdResolver`

#### Implementation of

[`DependencyFactory`](../../common/interfaces/DependencyFactory.md).[`dependencies`](../../common/interfaces/DependencyFactory.md#dependencies)
