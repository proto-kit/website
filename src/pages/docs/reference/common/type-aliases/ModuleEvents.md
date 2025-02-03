---
title: ModuleEvents
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / ModuleEvents

# Type Alias: ModuleEvents\<ModuleType\>

> **ModuleEvents**\<`ModuleType`\>: `InstanceType`\<`ModuleType`\> *extends* [`EventEmittingComponent`](../interfaces/EventEmittingComponent.md)\<infer Events\> ? `Events` : `InstanceType`\<`ModuleType`\> *extends* [`ModuleContainer`](../classes/ModuleContainer.md)\<infer NestedModules\> ? [`CastToEventsRecord`](CastToEventsRecord.md)\<[`ContainerEvents`](ContainerEvents.md)\<`NestedModules`\>\> : [`EventsRecord`](EventsRecord.md)

Defined in: [packages/common/src/events/EventEmitterProxy.ts:19](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/events/EventEmitterProxy.ts#L19)

## Type Parameters

• **ModuleType** *extends* [`BaseModuleType`](BaseModuleType.md)
