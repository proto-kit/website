---
title: DependenciesFromModules
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / DependenciesFromModules

# Type Alias: DependenciesFromModules\<Modules\>

> **DependenciesFromModules**\<`Modules`\>: [`FilterNeverValues`](FilterNeverValues.md)\<`{ [Key in keyof Modules]: Modules[Key] extends TypedClass<DependencyFactory> ? InferDependencies<InstanceType<Modules[Key]>> : never }`\>

Defined in: [packages/common/src/config/ModuleContainer.ts:129](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/common/src/config/ModuleContainer.ts#L129)

## Type Parameters

• **Modules** *extends* [`ModulesRecord`](../interfaces/ModulesRecord.md)
