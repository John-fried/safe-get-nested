# safe-get-nested

A minimalist utility to fetch values from deeply nested objects without the risk of throwing `Cannot read property of undefined` error.

## install 

```bash
npm i safe-get-nested
```

## Usage

Supports both [ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) (import) and [CommonJs](https://en.wikipedia.org/wiki/CommonJS) (require).

### 1. ESM (Modern)
```javascript
import { safeGet } from 'safe-get-nested';

const user = { profile: { address: { city: 'San Francisco' } } };
console.log(safeGet(user, 'profile.address.city')); // 'San Francisco'
```

### 2. CommonJS (Legacy)
```javascript
const safeGet = require('safe-get-nested');

const user = { profile: null };
console.log(safeGet(user, 'profile.address.city')); // undefined (No Error!)
```

## Quick test / Examples
```
const data = {
    a: {
        b: {
            c: 42
        }
    }
};

// Valid path
safeGet(data, 'a.b.c');    // Result: 42 ✅

// Broken path
safeGet(data, 'a.z.c');    // Result: undefined ✅

// Null middle-man
const nullData = { a: null };
safeGet(nullData, 'a.b');  // Result: undefined ✅
```

## Why? 🤔

Standard JS throws errors when accessing properties of `null` or `undefined`. This utility acts as a safe **Parsing** layer that traverses the object tree and returns `undefined` as soon as it hits a dead end.
