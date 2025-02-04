---
title: DependencyFactory
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / DependencyFactory

# Interface: DependencyFactory

Defined in: [packages/common/src/dependencyFactory/DependencyFactory.ts:34](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/dependencyFactory/DependencyFactory.ts#L34)

This is an abstract class for creating DependencyFactories, a pattern
to bundle multiple smaller services into one and register them into the
injection context.

This can for example be a StorageDependencyFactory that creates dependencies
like StateService, MerkleWitnessService, etc. So in general, services that
are not ConfigurableModules, but still are their own logical unit.

DependencyFactories are designed to only be used statically for sets of
deps that are necessary for the sequencer to work.

## Extended by

- [`BaseLayer`](../../sequencer/interfaces/BaseLayer.md)
- [`StorageDependencyFactory`](../../sequencer/interfaces/StorageDependencyFactory.md)

## Properties

### dependencies()

> **dependencies**: () => [`DependencyRecord`](../type-aliases/DependencyRecord.md)

Defined in: [packages/common/src/dependencyFactory/DependencyFactory.ts:35](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/dependencyFactory/DependencyFactory.ts#L35)

#### Returns

[`DependencyRecord`](../type-aliases/DependencyRecord.md)
