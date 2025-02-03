---
title: RuntimeEnvironment
---

[**@proto-kit/module**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/module](../README.md) / RuntimeEnvironment

# Interface: RuntimeEnvironment

Defined in: [module/src/runtime/RuntimeEnvironment.ts:10](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/module/src/runtime/RuntimeEnvironment.ts#L10)

## Extends

- [`WithZkProgrammable`](../../common/interfaces/WithZkProgrammable.md)\<`undefined`, [`MethodPublicOutput`](../../protocol/classes/MethodPublicOutput.md)\>

## Properties

### zkProgrammable

> **zkProgrammable**: [`ZkProgrammable`](../../common/classes/ZkProgrammable.md)\<[`MethodPublicOutput`](../../protocol/classes/MethodPublicOutput.md)\>

Defined in: common/dist/zkProgrammable/ZkProgrammable.d.ts:38

#### Inherited from

[`WithZkProgrammable`](../../common/interfaces/WithZkProgrammable.md).[`zkProgrammable`](../../common/interfaces/WithZkProgrammable.md#zkprogrammable)

## Accessors

### areProofsEnabled

#### Get Signature

> **get** **areProofsEnabled**(): `undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

Defined in: [module/src/runtime/RuntimeEnvironment.ts:12](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/module/src/runtime/RuntimeEnvironment.ts#L12)

##### Returns

`undefined` \| [`AreProofsEnabled`](../../common/interfaces/AreProofsEnabled.md)

***

### methodIdResolver

#### Get Signature

> **get** **methodIdResolver**(): [`MethodIdResolver`](../classes/MethodIdResolver.md)

Defined in: [module/src/runtime/RuntimeEnvironment.ts:15](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/module/src/runtime/RuntimeEnvironment.ts#L15)

##### Returns

[`MethodIdResolver`](../classes/MethodIdResolver.md)

***

### stateService

#### Get Signature

> **get** **stateService**(): [`SimpleAsyncStateService`](../../protocol/interfaces/SimpleAsyncStateService.md)

Defined in: [module/src/runtime/RuntimeEnvironment.ts:13](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/module/src/runtime/RuntimeEnvironment.ts#L13)

##### Returns

[`SimpleAsyncStateService`](../../protocol/interfaces/SimpleAsyncStateService.md)

***

### stateServiceProvider

#### Get Signature

> **get** **stateServiceProvider**(): [`StateServiceProvider`](../../protocol/classes/StateServiceProvider.md)

Defined in: [module/src/runtime/RuntimeEnvironment.ts:14](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/module/src/runtime/RuntimeEnvironment.ts#L14)

##### Returns

[`StateServiceProvider`](../../protocol/classes/StateServiceProvider.md)
