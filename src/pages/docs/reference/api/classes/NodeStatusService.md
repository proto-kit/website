---
title: NodeStatusService
---

[**@proto-kit/api**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/api](../README.md) / NodeStatusService

# Class: NodeStatusService

Defined in: [api/src/graphql/services/NodeStatusService.ts:27](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/services/NodeStatusService.ts#L27)

## Constructors

### new NodeStatusService()

> **new NodeStatusService**(`blockStorage`, `batchStorage`, `settlementStorage`): [`NodeStatusService`](NodeStatusService.md)

Defined in: [api/src/graphql/services/NodeStatusService.ts:28](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/services/NodeStatusService.ts#L28)

#### Parameters

##### blockStorage

[`BlockStorage`](../../sequencer/interfaces/BlockStorage.md)

##### batchStorage

[`BatchStorage`](../../sequencer/interfaces/BatchStorage.md)

##### settlementStorage

[`SettlementStorage`](../../sequencer/interfaces/SettlementStorage.md)

#### Returns

[`NodeStatusService`](NodeStatusService.md)

## Methods

### getNodeInformation()

> **getNodeInformation**(): `Promise`\<[`NodeInformation`](../interfaces/NodeInformation.md)\>

Defined in: [api/src/graphql/services/NodeStatusService.ts:56](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/services/NodeStatusService.ts#L56)

#### Returns

`Promise`\<[`NodeInformation`](../interfaces/NodeInformation.md)\>

***

### getProcessInfo()

> **getProcessInfo**(): [`ProcessInformation`](../interfaces/ProcessInformation.md)

Defined in: [api/src/graphql/services/NodeStatusService.ts:36](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/api/src/graphql/services/NodeStatusService.ts#L36)

#### Returns

[`ProcessInformation`](../interfaces/ProcessInformation.md)
