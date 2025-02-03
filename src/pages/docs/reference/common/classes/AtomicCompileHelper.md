---
title: AtomicCompileHelper
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / AtomicCompileHelper

# Class: AtomicCompileHelper

Defined in: [packages/common/src/compiling/AtomicCompileHelper.ts:17](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/compiling/AtomicCompileHelper.ts#L17)

## Constructors

### new AtomicCompileHelper()

> **new AtomicCompileHelper**(`areProofsEnabled`): [`AtomicCompileHelper`](AtomicCompileHelper.md)

Defined in: [packages/common/src/compiling/AtomicCompileHelper.ts:18](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/compiling/AtomicCompileHelper.ts#L18)

#### Parameters

##### areProofsEnabled

[`AreProofsEnabled`](../interfaces/AreProofsEnabled.md)

#### Returns

[`AtomicCompileHelper`](AtomicCompileHelper.md)

## Methods

### compileContract()

> **compileContract**(`contract`, `overrideProofsEnabled`?): `Promise`\<[`CompileArtifact`](../interfaces/CompileArtifact.md)\>

Defined in: [packages/common/src/compiling/AtomicCompileHelper.ts:24](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/compiling/AtomicCompileHelper.ts#L24)

#### Parameters

##### contract

[`CompileTarget`](../type-aliases/CompileTarget.md)

##### overrideProofsEnabled?

`boolean`

#### Returns

`Promise`\<[`CompileArtifact`](../interfaces/CompileArtifact.md)\>
