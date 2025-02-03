---
title: RuntimeZkProgrammable
---

[**@proto-kit/module**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/module](../README.md) / RuntimeZkProgrammable

# Class: RuntimeZkProgrammable\<Modules\>

Defined in: [module/src/runtime/Runtime.ts:77](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/module/src/runtime/Runtime.ts#L77)

## Extends

- [`ZkProgrammable`](../../common/classes/ZkProgrammable.md)\<`undefined`, [`MethodPublicOutput`](../../protocol/classes/MethodPublicOutput.md)\>

## Type Parameters

• **Modules** *extends* [`RuntimeModulesRecord`](../type-aliases/RuntimeModulesRecord.md)

## Constructors

### new RuntimeZkProgrammable()

> **new RuntimeZkProgrammable**\<`Modules`\>(`runtime`): [`RuntimeZkProgrammable`](RuntimeZkProgrammable.md)\<`Modules`\>

Defined in: [module/src/runtime/Runtime.ts:80](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/module/src/runtime/Runtime.ts#L80)

#### Parameters

##### runtime

[`Runtime`](Runtime.md)\<`Modules`\>

#### Returns

[`RuntimeZkProgrammable`](RuntimeZkProgrammable.md)\<`Modules`\>

#### Overrides

[`ZkProgrammable`](../../common/classes/ZkProgrammable.md).[`constructor`](../../common/classes/ZkProgrammable.md#constructors)

## Properties

### runtime

> **runtime**: [`Runtime`](Runtime.md)\<`Modules`\>

Defined in: [module/src/runtime/Runtime.ts:80](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/module/src/runtime/Runtime.ts#L80)

## Accessors

### areProofsEnabled

#### Get Signature

> **get** **areProofsEnabled**(): `undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

Defined in: [module/src/runtime/Runtime.ts:84](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/module/src/runtime/Runtime.ts#L84)

##### Returns

`undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

#### Overrides

[`ZkProgrammable`](../../common/classes/ZkProgrammable.md).[`areProofsEnabled`](../../common/classes/ZkProgrammable.md#areproofsenabled)

***

### zkProgram

#### Get Signature

> **get** **zkProgram**(): [`PlainZkProgram`](../../common/interfaces/PlainZkProgram.md)\<`PublicInput`, `PublicOutput`\>[]

Defined in: common/dist/zkProgrammable/ZkProgrammable.d.ts:34

##### Returns

[`PlainZkProgram`](../../common/interfaces/PlainZkProgram.md)\<`PublicInput`, `PublicOutput`\>[]

#### Inherited from

[`ZkProgrammable`](../../common/classes/ZkProgrammable.md).[`zkProgram`](../../common/classes/ZkProgrammable.md#zkprogram)

## Methods

### compile()

> **compile**(`registry`): `Promise`\<`Record`\<`string`, [`CompileArtifact`](../../common/interfaces/CompileArtifact.md)\>\>

Defined in: common/dist/zkProgrammable/ZkProgrammable.d.ts:35

#### Parameters

##### registry

[`CompileRegistry`](../../common/classes/CompileRegistry.md)

#### Returns

`Promise`\<`Record`\<`string`, [`CompileArtifact`](../../common/interfaces/CompileArtifact.md)\>\>

#### Inherited from

[`ZkProgrammable`](../../common/classes/ZkProgrammable.md).[`compile`](../../common/classes/ZkProgrammable.md#compile)

***

### zkProgramFactory()

> **zkProgramFactory**(): [`PlainZkProgram`](../../common/interfaces/PlainZkProgram.md)\<[`MethodPublicOutput`](../../protocol/classes/MethodPublicOutput.md)\>[]

Defined in: [module/src/runtime/Runtime.ts:88](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/module/src/runtime/Runtime.ts#L88)

#### Returns

[`PlainZkProgram`](../../common/interfaces/PlainZkProgram.md)\<[`MethodPublicOutput`](../../protocol/classes/MethodPublicOutput.md)\>[]

#### Overrides

[`ZkProgrammable`](../../common/classes/ZkProgrammable.md).[`zkProgramFactory`](../../common/classes/ZkProgrammable.md#zkprogramfactory)
