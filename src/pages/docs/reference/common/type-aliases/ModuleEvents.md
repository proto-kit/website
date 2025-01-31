---
title: ModuleEvents
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / ModuleEvents

# Type Alias: ModuleEvents\<ModuleType\>

> **ModuleEvents**\<`ModuleType`\>: `InstanceType`\<`ModuleType`\> *extends* [`EventEmittingComponent`](../interfaces/EventEmittingComponent.md)\<infer Events\> ? `Events` : `InstanceType`\<`ModuleType`\> *extends* [`ModuleContainer`](../classes/ModuleContainer.md)\<infer NestedModules\> ? [`CastToEventsRecord`](CastToEventsRecord.md)\<[`ContainerEvents`](ContainerEvents.md)\<`NestedModules`\>\> : [`EventsRecord`](EventsRecord.md)

Defined in: [packages/common/src/events/EventEmitterProxy.ts:19](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/common/src/events/EventEmitterProxy.ts#L19)

## Type Parameters

• **ModuleType** *extends* [`BaseModuleType`](BaseModuleType.md)
