---
title: TransactionExecutionResult
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / TransactionExecutionResult

# Interface: TransactionExecutionResult

Defined in: [packages/sequencer/src/storage/model/Block.ts:13](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/model/Block.ts#L13)

## Properties

### events

> **events**: `object`[]

Defined in: [packages/sequencer/src/storage/model/Block.ts:19](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/model/Block.ts#L19)

#### data

> **data**: `Field`[]

#### eventName

> **eventName**: `string`

***

### protocolTransitions

> **protocolTransitions**: [`UntypedStateTransition`](../classes/UntypedStateTransition.md)[]

Defined in: [packages/sequencer/src/storage/model/Block.ts:16](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/model/Block.ts#L16)

***

### stateTransitions

> **stateTransitions**: [`UntypedStateTransition`](../classes/UntypedStateTransition.md)[]

Defined in: [packages/sequencer/src/storage/model/Block.ts:15](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/model/Block.ts#L15)

***

### status

> **status**: `Bool`

Defined in: [packages/sequencer/src/storage/model/Block.ts:17](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/model/Block.ts#L17)

***

### statusMessage?

> `optional` **statusMessage**: `string`

Defined in: [packages/sequencer/src/storage/model/Block.ts:18](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/model/Block.ts#L18)

***

### tx

> **tx**: [`PendingTransaction`](../classes/PendingTransaction.md)

Defined in: [packages/sequencer/src/storage/model/Block.ts:14](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/storage/model/Block.ts#L14)
