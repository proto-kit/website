---
title: RuntimeModulesRecord
---

[**@proto-kit/module**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/module](../README.md) / RuntimeModulesRecord

# Type Alias: RuntimeModulesRecord

> **RuntimeModulesRecord**: [`ModulesRecord`](../../common/interfaces/ModulesRecord.md)\<[`TypedClass`](../../common/type-aliases/TypedClass.md)\<[`RuntimeModule`](../classes/RuntimeModule.md)\<`unknown`\>\>\>

Defined in: [module/src/runtime/Runtime.ts:60](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/module/src/runtime/Runtime.ts#L60)

Record of modules accepted by the Runtime module container.

We have to use TypedClass since RuntimeModule
is an abstract class
