---
title: DependenciesFromModules
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / DependenciesFromModules

# Type Alias: DependenciesFromModules\<Modules\>

> **DependenciesFromModules**\<`Modules`\>: [`FilterNeverValues`](FilterNeverValues.md)\<`{ [Key in keyof Modules]: Modules[Key] extends TypedClass<DependencyFactory> ? InferDependencies<InstanceType<Modules[Key]>> : never }`\>

Defined in: [packages/common/src/config/ModuleContainer.ts:129](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/config/ModuleContainer.ts#L129)

## Type Parameters

• **Modules** *extends* [`ModulesRecord`](../interfaces/ModulesRecord.md)
