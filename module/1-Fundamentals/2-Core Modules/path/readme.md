## 2. path — File and Directory Paths (Full Explanation)

## What is the path Module?

The path module in Node.js provides utilities for working with file and directory paths — such as joining, resolving, normalizing, or extracting file names, extensions, and directories.

It helps you write OS-independent code, because Windows uses \ and Linux/macOS uses /.

You import it like this:
```
const path = require('path');
```

## Why We Need the path Module

Without path, we would have to manually handle different directory separators:
- Windows → \
- Linux / macOS → /

path automatically handles these differences — making your code cross-platform safe.

## Commonly Used Methods

Let’s go one by one

1. path.join([...paths])

👉 Joins all given path segments using the correct separator (/ or \).
```
const path = require('path');

const fullPath = path.join('folder', 'subfolder', 'file.txt');
console.log(fullPath); 
// Output (Windows): folder\subfolder\file.txt
// Output (Linux/Mac): folder/subfolder/file.txt

```
It automatically removes extra slashes.

2. path.resolve([...paths])
👉 Resolves a sequence of paths or path segments into an absolute path.
```
const absolute = path.resolve('folder', 'file.txt');
console.log(absolute); 
// Output example: C:\Users\Name\project\folder\file.txt

```
Think of resolve() as:
“Start from current working directory and go deeper to build a full absolute path.”


3. path.basename(path, [ext])
👉 Returns the last portion of a path — usually the filename.

```
const fileName = path.basename('/user/home/app/index.html');
console.log(fileName); // index.html

const nameWithoutExt = path.basename('/user/home/app/index.html', '.html');
console.log(nameWithoutExt); // index

```


4. path.dirname(path)

👉 Returns the directory name (folder path) of a file.

```
const dir = path.dirname('/user/home/app/index.html');
console.log(dir); // /user/home/app

```

5. path.extname(path)

👉 Returns the file extension.
```
const ext = path.extname('index.html');
console.log(ext); // .html

```

6. path.parse(path)

👉 Returns an object with detailed parts of a file path.
```
const parsed = path.parse('/user/home/app/index.html');
console.log(parsed);

/* Output:
{
  root: '/',
  dir: '/user/home/app',
  base: 'index.html',
  ext: '.html',
  name: 'index'
}
*/

```

7. path.format(object)

👉 Opposite of path.parse() — it creates a path string from an object.
```
const formatted = path.format({
  dir: '/user/home/app',
  name: 'index',
  ext: '.html'
});
console.log(formatted); // /user/home/app/index.html

```

8. path.isAbsolute(path)

👉 Checks if a path is absolute or relative.
```
console.log(path.isAbsolute('/user/app')); // true
console.log(path.isAbsolute('file.txt'));  // false

```

9. path.normalize(path)

👉 Normalizes (fixes) a given path by removing extra . and .. or slashes.
```
const fixed = path.normalize('/user/home/../app//file.txt');
console.log(fixed); // /user/app/file.txt

```

10. path.sep

👉 Returns the path separator used by the OS:

Windows → \
POSIX (Linux/Mac) → /
```
console.log(path.sep);
// On Windows: \
// On Linux/Mac: /

```

11. path.delimiter

👉 Used in environment variable paths:

Windows → ;
POSIX → :
```
console.log(path.delimiter);
// Windows: ;
// Linux/Mac: :

```

Example:
```
console.log(process.env.PATH.split(path.delimiter));

```


| Method         | Description             | Example                        |
| -------------- | ----------------------- | ------------------------------ |
| `join()`       | Joins paths safely      | `path.join('a','b') → 'a/b'`   |
| `resolve()`    | Gives absolute path     | `path.resolve('folder')`       |
| `basename()`   | File name               | `'index.html'`                 |
| `dirname()`    | Folder path             | `'/user/home'`                 |
| `extname()`    | File extension          | `'.txt'`                       |
| `parse()`      | Returns path parts      | `{root, dir, base, ext, name}` |
| `format()`     | Builds path from object | `'/dir/name.ext'`              |
| `isAbsolute()` | Checks absolute         | `true / false`                 |
| `normalize()`  | Fixes invalid path      | `path.normalize()`             |
| `sep`          | OS separator            | `/` or `\`                     |
| `delimiter`    | OS path delimiter       | `:` or `;`                     |
