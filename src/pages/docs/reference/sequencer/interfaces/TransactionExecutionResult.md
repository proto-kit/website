---
title: TransactionExecutionResult
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / TransactionExecutionResult

# Interface: TransactionExecutionResult

Defined in: [packages/sequencer/src/storage/model/Block.ts:13](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/model/Block.ts#L13)

## Properties

### events

> **events**: `object`[]

Defined in: [packages/sequencer/src/storage/model/Block.ts:19](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/model/Block.ts#L19)

#### data

> **data**: `Field`[]

#### eventName

> **eventName**: `string`

***

### protocolTransitions

> **protocolTransitions**: [`UntypedStateTransition`](../classes/UntypedStateTransition.md)[]

Defined in: [packages/sequencer/src/storage/model/Block.ts:16](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/model/Block.ts#L16)

***

### stateTransitions

> **stateTransitions**: [`UntypedStateTransition`](../classes/UntypedStateTransition.md)[]

Defined in: [packages/sequencer/src/storage/model/Block.ts:15](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/model/Block.ts#L15)

***

### status

> **status**: `Bool`

Defined in: [packages/sequencer/src/storage/model/Block.ts:17](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/model/Block.ts#L17)

***

### statusMessage?

> `optional` **statusMessage**: `string`

Defined in: [packages/sequencer/src/storage/model/Block.ts:18](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/model/Block.ts#L18)

***

### tx

> **tx**: [`PendingTransaction`](../classes/PendingTransaction.md)

Defined in: [packages/sequencer/src/storage/model/Block.ts:14](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/sequencer/src/storage/model/Block.ts#L14)
