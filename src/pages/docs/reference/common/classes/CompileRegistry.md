---
title: CompileRegistry
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / CompileRegistry

# Class: CompileRegistry

Defined in: [packages/common/src/compiling/CompileRegistry.ts:21](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/compiling/CompileRegistry.ts#L21)

The CompileRegistry compiles "compilable modules"
(i.e. zkprograms, contracts or contractmodules)
while making sure they don't get compiled twice in the same process in parallel.

## Constructors

### new CompileRegistry()

> **new CompileRegistry**(`areProofsEnabled`): [`CompileRegistry`](CompileRegistry.md)

Defined in: [packages/common/src/compiling/CompileRegistry.ts:22](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/compiling/CompileRegistry.ts#L22)

#### Parameters

##### areProofsEnabled

[`AreProofsEnabled`](../interfaces/AreProofsEnabled.md)

#### Returns

[`CompileRegistry`](CompileRegistry.md)

## Methods

### addArtifactsRaw()

> **addArtifactsRaw**(`artifacts`): `void`

Defined in: [packages/common/src/compiling/CompileRegistry.ts:68](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/compiling/CompileRegistry.ts#L68)

#### Parameters

##### artifacts

[`ArtifactRecord`](../type-aliases/ArtifactRecord.md)

#### Returns

`void`

***

### compile()

> **compile**(`target`): `Promise`\<[`CompileArtifact`](../interfaces/CompileArtifact.md)\>

Defined in: [packages/common/src/compiling/CompileRegistry.ts:49](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/compiling/CompileRegistry.ts#L49)

#### Parameters

##### target

[`CompileTarget`](../type-aliases/CompileTarget.md)

#### Returns

`Promise`\<[`CompileArtifact`](../interfaces/CompileArtifact.md)\>

***

### forceProverExists()

> **forceProverExists**(`f`): `Promise`\<`void`\>

Defined in: [packages/common/src/compiling/CompileRegistry.ts:41](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/compiling/CompileRegistry.ts#L41)

This function forces compilation even if the artifact itself is in the registry.
Basically the statement is: The artifact along is not enough, we need to
actually have the prover compiled.
This is true for non-sideloaded circuit dependencies.

#### Parameters

##### f

(`registry`) => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### getAllArtifacts()

> **getAllArtifacts**(): [`ArtifactRecord`](../type-aliases/ArtifactRecord.md)

Defined in: [packages/common/src/compiling/CompileRegistry.ts:75](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/compiling/CompileRegistry.ts#L75)

#### Returns

[`ArtifactRecord`](../type-aliases/ArtifactRecord.md)

***

### getArtifact()

> **getArtifact**(`name`): `undefined` \| [`CompileArtifact`](../interfaces/CompileArtifact.md)

Defined in: [packages/common/src/compiling/CompileRegistry.ts:58](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/compiling/CompileRegistry.ts#L58)

#### Parameters

##### name

`string`

#### Returns

`undefined` \| [`CompileArtifact`](../interfaces/CompileArtifact.md)
