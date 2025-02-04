---
title: CompilableModule
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / CompilableModule

# Interface: CompilableModule

Defined in: [packages/common/src/compiling/CompilableModule.ts:4](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/compiling/CompilableModule.ts#L4)

## Extended by

- [`BlockProvable`](../../protocol/interfaces/BlockProvable.md)
- [`StateTransitionProvable`](../../protocol/interfaces/StateTransitionProvable.md)

## Methods

### compile()

> **compile**(`registry`): `Promise`\<`void` \| [`ArtifactRecord`](../type-aliases/ArtifactRecord.md)\>

Defined in: [packages/common/src/compiling/CompilableModule.ts:5](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/compiling/CompilableModule.ts#L5)

#### Parameters

##### registry

[`CompileRegistry`](../classes/CompileRegistry.md)

#### Returns

`Promise`\<`void` \| [`ArtifactRecord`](../type-aliases/ArtifactRecord.md)\>
