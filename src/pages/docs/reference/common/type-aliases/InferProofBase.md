---
title: InferProofBase
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / InferProofBase

# Type Alias: InferProofBase\<ProofType\>

> **InferProofBase**\<`ProofType`\>: `ProofType` *extends* `Proof`\<infer PI, infer PO\> ? `ProofBase`\<`PI`, `PO`\> : `ProofType` *extends* `DynamicProof`\<infer PI, infer PO\> ? `ProofBase`\<`PI`, `PO`\> : `undefined`

Defined in: [packages/common/src/types.ts:51](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/types.ts#L51)

## Type Parameters

• **ProofType** *extends* `Proof`\<`any`, `any`\> \| `DynamicProof`\<`any`, `any`\>
