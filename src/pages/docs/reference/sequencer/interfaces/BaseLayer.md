---
title: BaseLayer
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / BaseLayer

# Interface: BaseLayer

Defined in: [packages/sequencer/src/protocol/baselayer/BaseLayer.ts:16](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/baselayer/BaseLayer.ts#L16)

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

## Properties

### dependencies()

> **dependencies**: () => [`BaseLayerDependencyRecord`](BaseLayerDependencyRecord.md)

Defined in: [packages/sequencer/src/protocol/baselayer/BaseLayer.ts:17](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/baselayer/BaseLayer.ts#L17)

#### Returns

[`BaseLayerDependencyRecord`](BaseLayerDependencyRecord.md)

#### Overrides

[`DependencyFactory`](../../common/interfaces/DependencyFactory.md).[`dependencies`](../../common/interfaces/DependencyFactory.md#dependencies)
