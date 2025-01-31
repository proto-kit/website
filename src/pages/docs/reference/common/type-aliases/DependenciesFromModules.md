---
title: DependenciesFromModules
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / DependenciesFromModules

# Type Alias: DependenciesFromModules\<Modules\>

> **DependenciesFromModules**\<`Modules`\>: [`FilterNeverValues`](FilterNeverValues.md)\<`{ [Key in keyof Modules]: Modules[Key] extends TypedClass<DependencyFactory> ? InferDependencies<InstanceType<Modules[Key]>> : never }`\>

Defined in: [packages/common/src/config/ModuleContainer.ts:129](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/config/ModuleContainer.ts#L129)

## Type Parameters

• **Modules** *extends* [`ModulesRecord`](../interfaces/ModulesRecord.md)
