# ✅ 1. CommonJS vs ES Modules

Node.js supports two module systems:

A) CommonJS (CJS)

➡️ Default module system in older Node.js
➡️ Uses require() and module.exports
➡️ Files end with .js

Syntax
1. Import:
```
const myFunc = require('./myFunc');

```

2. Export:
```
module.exports = myFunc;

```

B) ES Modules (ESM)

➡️ Modern JavaScript standard
➡️ Uses import and export
➡️ Files usually end with .mjs or "type": "module" in package.json

Syntax
1. Import:
```
import myFunc from './myFunc.js';

```

2. Export:
```
export default myFunc;
```

Key Differences
| Topic           | CommonJS         | ES Modules                  |
| --------------- | ---------------- | --------------------------- |
| Syntax          | `require()`      | `import`                    |
| Export          | `module.exports` | `export` / `export default` |
| File Loading    | Synchronous      | Asynchronous                |
| Support         | Older Node.js    | Modern Node.js              |
| Browser Support | ❌ No             | ✅ Yes                       |
| Extensibility   | Less             | More modern + tree shaking  |

When to Use What?
| Use                        | Best Module Type         |
| -------------------------- | ------------------------ |
| Older Node.js projects     | CommonJS                 |
| Modern Node.js / frontend  | ES Modules               |
| TypeScript, React, Angular | ES Modules               |
| NPM libraries              | ES Modules (recommended) |

