---
title: RuntimeModulesRecord
---

[**@proto-kit/module**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/module](../README.md) / RuntimeModulesRecord

# Type Alias: RuntimeModulesRecord

> **RuntimeModulesRecord**: [`ModulesRecord`](../../common/interfaces/ModulesRecord.md)\<[`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`RuntimeModule`](../classes/RuntimeModule.md)\<`unknown`\>\>\>

Defined in: [module/src/runtime/Runtime.ts:60](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/module/src/runtime/Runtime.ts#L60)

Record of modules accepted by the Runtime module container.

We have to use TypedClass since RuntimeModule
is an abstract class
