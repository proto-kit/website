---
title: RuntimeVerificationKeyAttestationSerializer
---

[**@proto-kit/sequencer**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/sequencer](../README.md) / RuntimeVerificationKeyAttestationSerializer

# Class: RuntimeVerificationKeyAttestationSerializer

Defined in: [packages/sequencer/src/protocol/production/tasks/serializers/RuntimeVerificationKeyAttestationSerializer.ts:9](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/tasks/serializers/RuntimeVerificationKeyAttestationSerializer.ts#L9)

## Constructors

### new RuntimeVerificationKeyAttestationSerializer()

> **new RuntimeVerificationKeyAttestationSerializer**(): [`RuntimeVerificationKeyAttestationSerializer`](RuntimeVerificationKeyAttestationSerializer.md)

#### Returns

[`RuntimeVerificationKeyAttestationSerializer`](RuntimeVerificationKeyAttestationSerializer.md)

## Methods

### fromJSON()

> `static` **fromJSON**(`json`): [`RuntimeVerificationKeyAttestation`](../../protocol/classes/RuntimeVerificationKeyAttestation.md)

Defined in: [packages/sequencer/src/protocol/production/tasks/serializers/RuntimeVerificationKeyAttestationSerializer.ts:10](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/tasks/serializers/RuntimeVerificationKeyAttestationSerializer.ts#L10)

#### Parameters

##### json

###### verificationKey

\{ `data`: `string`; `hash`: `string`; \}

###### verificationKey.data

`string`

###### verificationKey.hash

`string`

###### witness

\{ `isLeft`: `boolean`[]; `path`: `string`[]; \}

###### witness.isLeft

`boolean`[]

###### witness.path

`string`[]

#### Returns

[`RuntimeVerificationKeyAttestation`](../../protocol/classes/RuntimeVerificationKeyAttestation.md)

***

### toJSON()

> `static` **toJSON**(`attestation`): `object`

Defined in: [packages/sequencer/src/protocol/production/tasks/serializers/RuntimeVerificationKeyAttestationSerializer.ts:20](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/sequencer/src/protocol/production/tasks/serializers/RuntimeVerificationKeyAttestationSerializer.ts#L20)

#### Parameters

##### attestation

[`RuntimeVerificationKeyAttestation`](../../protocol/classes/RuntimeVerificationKeyAttestation.md)

#### Returns

`object`

##### verificationKey

> **verificationKey**: [`VerificationKeyJSON`](../type-aliases/VerificationKeyJSON.md)

##### witness

> **witness**: `object`

###### witness.isLeft

> **witness.isLeft**: `boolean`[]

###### witness.path

> **witness.path**: `string`[]
