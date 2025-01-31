---
title: VanillaGraphqlModules
---

[**@proto-kit/api**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/api](../README.md) / VanillaGraphqlModules

# Class: VanillaGraphqlModules

Defined in: [api/src/graphql/VanillaGraphqlModules.ts:20](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/VanillaGraphqlModules.ts#L20)

## Constructors

### new VanillaGraphqlModules()

> **new VanillaGraphqlModules**(): [`VanillaGraphqlModules`](VanillaGraphqlModules.md)

#### Returns

[`VanillaGraphqlModules`](VanillaGraphqlModules.md)

## Methods

### defaultConfig()

> `static` **defaultConfig**(): `object`

Defined in: [api/src/graphql/VanillaGraphqlModules.ts:35](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/VanillaGraphqlModules.ts#L35)

#### Returns

`object`

##### BatchStorageResolver

> **BatchStorageResolver**: `object` = `{}`

##### BlockResolver

> **BlockResolver**: `object` = `{}`

##### MempoolResolver

> **MempoolResolver**: `object` = `{}`

##### MerkleWitnessResolver

> **MerkleWitnessResolver**: `object` = `{}`

##### NodeStatusResolver

> **NodeStatusResolver**: `object` = `{}`

##### QueryGraphqlModule

> **QueryGraphqlModule**: `object` = `{}`

***

### with()

> `static` **with**\<`AdditionalModules`\>(`additionalModules`): `object` & `AdditionalModules`

Defined in: [api/src/graphql/VanillaGraphqlModules.ts:21](https://github.com/proto-kit/framework/blob/28efa802e3737fc3b77339148b307ef7246f3ef1/packages/api/src/graphql/VanillaGraphqlModules.ts#L21)

#### Type Parameters

• **AdditionalModules** *extends* [`GraphqlModulesRecord`](../type-aliases/GraphqlModulesRecord.md)

#### Parameters

##### additionalModules

`AdditionalModules`

#### Returns

`object` & `AdditionalModules`
