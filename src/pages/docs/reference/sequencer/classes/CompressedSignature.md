---
title: CompressedSignature
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / CompressedSignature

# Class: CompressedSignature

Defined in: [packages/sequencer/src/mempool/CompressedSignature.ts:8](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/mempool/CompressedSignature.ts#L8)

CompressedSignature compresses the s scalar of a Signature
(which is expanded to 256 Fields in snarkyjs) to a single string

## Constructors

### new CompressedSignature()

> **new CompressedSignature**(`r`, `s`): [`CompressedSignature`](CompressedSignature.md)

Defined in: [packages/sequencer/src/mempool/CompressedSignature.ts:15](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/mempool/CompressedSignature.ts#L15)

#### Parameters

##### r

`Field`

##### s

`string`

#### Returns

[`CompressedSignature`](CompressedSignature.md)

## Properties

### r

> `readonly` **r**: `Field`

Defined in: [packages/sequencer/src/mempool/CompressedSignature.ts:16](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/mempool/CompressedSignature.ts#L16)

***

### s

> `readonly` **s**: `string`

Defined in: [packages/sequencer/src/mempool/CompressedSignature.ts:17](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/mempool/CompressedSignature.ts#L17)

## Methods

### toSignature()

> **toSignature**(): `Signature`

Defined in: [packages/sequencer/src/mempool/CompressedSignature.ts:21](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/mempool/CompressedSignature.ts#L21)

#### Returns

`Signature`

***

### fromSignature()

> `static` **fromSignature**(`sig`): [`CompressedSignature`](CompressedSignature.md)

Defined in: [packages/sequencer/src/mempool/CompressedSignature.ts:10](https://github.com/proto-kit/framework/blob/4d6b3b6da51b3edee0fbf25ce72c1f59ec61e891/packages/sequencer/src/mempool/CompressedSignature.ts#L10)

#### Parameters

##### sig

`Signature`

#### Returns

[`CompressedSignature`](CompressedSignature.md)
