---
title: ModuleContainerErrors
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / ModuleContainerErrors

# Variable: ModuleContainerErrors

> `const` **ModuleContainerErrors**: `object` = `errors`

Defined in: [packages/common/src/config/ModuleContainer.ts:71](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/config/ModuleContainer.ts#L71)

## Type declaration

### configNotSetInContainer()

> **configNotSetInContainer**: (`moduleName`) => `Error`

#### Parameters

##### moduleName

`string`

#### Returns

`Error`

### dependencyContainerNotSet()

> **dependencyContainerNotSet**: (`className`) => `Error`

#### Parameters

##### className

`string`

#### Returns

`Error`

### nonModuleDependency()

> **nonModuleDependency**: (`runtimeModuleName`) => `Error`

#### Parameters

##### runtimeModuleName

`string`

#### Returns

`Error`

### onlyValidModuleNames()

> **onlyValidModuleNames**: (`moduleName`) => `Error`

#### Parameters

##### moduleName

#### Returns

`Error`

### unableToDecorateModule()

> **unableToDecorateModule**: (`moduleName`) => `Error`

#### Parameters

##### moduleName

`InjectionToken`\<`unknown`\>

#### Returns

`Error`

### unknownDependency()

> **unknownDependency**: (`runtimeModuleName`, `name`) => `Error`

#### Parameters

##### runtimeModuleName

`string`

##### name

`string`

#### Returns

`Error`

### validModuleInstance()

> **validModuleInstance**: (`moduleName`, `moduleTypeName`) => `Error`

#### Parameters

##### moduleName

`string`

##### moduleTypeName

`string`

#### Returns

`Error`
