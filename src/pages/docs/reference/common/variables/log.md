---
title: log
---

[**@proto-kit/common**](../README.md)

***

[Documentation](../../../README.md) / [@proto-kit/common](../README.md) / log

# Variable: log

> `const` **log**: `object`

Defined in: [packages/common/src/log.ts:53](https://github.com/proto-kit/framework/blob/b953c754e500c62f01fbbd6d09adfb2f5577269d/packages/common/src/log.ts#L53)

## Type declaration

### debug()

> **debug**: (...`args`) => `void`

#### Parameters

##### args

...`unknown`[]

#### Returns

`void`

### error()

> **error**: (...`args`) => `void`

#### Parameters

##### args

...`unknown`[]

#### Returns

`void`

### getLevel()

> **getLevel**: () => `0` \| `1` \| `2` \| `3` \| `4` \| `5`

#### Returns

`0` \| `1` \| `2` \| `3` \| `4` \| `5`

### info()

> **info**: (...`args`) => `void`

#### Parameters

##### args

...`unknown`[]

#### Returns

`void`

### provable

> **provable**: `object`

#### provable.debug()

> **provable.debug**: (...`args`) => `void`

##### Parameters

###### args

...`unknown`[]

##### Returns

`void`

#### provable.error()

> **provable.error**: (...`args`) => `void`

##### Parameters

###### args

...`unknown`[]

##### Returns

`void`

#### provable.info()

> **provable.info**: (...`args`) => `void`

##### Parameters

###### args

...`unknown`[]

##### Returns

`void`

#### provable.trace()

> **provable.trace**: (...`args`) => `void`

##### Parameters

###### args

...`unknown`[]

##### Returns

`void`

#### provable.warn()

> **provable.warn**: (...`args`) => `void`

##### Parameters

###### args

...`unknown`[]

##### Returns

`void`

### setLevel()

> **setLevel**: (`level`) => `void`

#### Parameters

##### level

`LogLevelDesc`

#### Returns

`void`

### time()

> **time**: (`label`) => `void`

#### Parameters

##### label

`string` = `"time"`

#### Returns

`void`

### timeEnd

> **timeEnd**: `object`

#### timeEnd.debug()

> **timeEnd.debug**: (`label`?) => `void`

##### Parameters

###### label?

`string`

##### Returns

`void`

#### timeEnd.error()

> **timeEnd.error**: (`label`?) => `void`

##### Parameters

###### label?

`string`

##### Returns

`void`

#### timeEnd.info()

> **timeEnd.info**: (`label`?) => `void`

##### Parameters

###### label?

`string`

##### Returns

`void`

#### timeEnd.trace()

> **timeEnd.trace**: (`label`?) => `void`

##### Parameters

###### label?

`string`

##### Returns

`void`

#### timeEnd.warn()

> **timeEnd.warn**: (`label`?) => `void`

##### Parameters

###### label?

`string`

##### Returns

`void`

### timeLog

> **timeLog**: `object`

#### timeLog.debug()

> **timeLog.debug**: (`label`?) => `void`

##### Parameters

###### label?

`string`

##### Returns

`void`

#### timeLog.error()

> **timeLog.error**: (`label`?) => `void`

##### Parameters

###### label?

`string`

##### Returns

`void`

#### timeLog.info()

> **timeLog.info**: (`label`?) => `void`

##### Parameters

###### label?

`string`

##### Returns

`void`

#### timeLog.trace()

> **timeLog.trace**: (`label`?) => `void`

##### Parameters

###### label?

`string`

##### Returns

`void`

#### timeLog.warn()

> **timeLog.warn**: (`label`?) => `void`

##### Parameters

###### label?

`string`

##### Returns

`void`

### trace()

> **trace**: (...`args`) => `void`

#### Parameters

##### args

...`unknown`[]

#### Returns

`void`

### warn()

> **warn**: (...`args`) => `void`

#### Parameters

##### args

...`unknown`[]

#### Returns

`void`

### levels

#### Get Signature

> **get** **levels**(): `LogLevel`

##### Returns

`LogLevel`
