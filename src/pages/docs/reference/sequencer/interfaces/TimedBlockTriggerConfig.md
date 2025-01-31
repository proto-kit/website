---
title: TimedBlockTriggerConfig
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / TimedBlockTriggerConfig

# Interface: TimedBlockTriggerConfig

Defined in: [packages/sequencer/src/protocol/production/trigger/TimedBlockTrigger.ts:16](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/trigger/TimedBlockTrigger.ts#L16)

## Properties

### blockInterval

> **blockInterval**: `number`

Defined in: [packages/sequencer/src/protocol/production/trigger/TimedBlockTrigger.ts:26](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/trigger/TimedBlockTrigger.ts#L26)

***

### produceEmptyBlocks?

> `optional` **produceEmptyBlocks**: `boolean`

Defined in: [packages/sequencer/src/protocol/production/trigger/TimedBlockTrigger.ts:27](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/trigger/TimedBlockTrigger.ts#L27)

***

### settlementInterval?

> `optional` **settlementInterval**: `number`

Defined in: [packages/sequencer/src/protocol/production/trigger/TimedBlockTrigger.ts:25](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/trigger/TimedBlockTrigger.ts#L25)

***

### tick?

> `optional` **tick**: `number`

Defined in: [packages/sequencer/src/protocol/production/trigger/TimedBlockTrigger.ts:24](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/trigger/TimedBlockTrigger.ts#L24)

Interval for the tick event to be fired.
The time x of any block trigger time is always guaranteed to be
tick % x == 0.
Value has to be a divisor of gcd(blockInterval, settlementInterval).
If it doesn't satisfy this requirement, this config will not be respected
