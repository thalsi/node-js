const path = require('path');

// 1. path.join([...paths])
const fullpath=path.join('folader', 'subfolader','text.txt');
console.log(fullpath);

// 2. path.resolve([...paths])
const resolve = path.resolve('path', 'readme.md');
console.log(resolve);

// 3. path.basename(path, [ext])
const fileNameBase= path.basename('/path/readme.md');
console.log(fileNameBase);
const fileNameWithoutExBase= path.basename('/path/readme.md','.md');
console.log(fileNameWithoutExBase);

// 4. path.dirname(path)
const dir=path.dirname('/path/readme.md')
console.log(dir);

// 5. path.extname(path)
const ext = path.extname('/path/readme.md');
console.log(ext); // .html

// 6. path.parse(path)
const parsed = path.parse('/path/readme.md');
console.log(parsed);

// 7. path.format(object)
const formatted = path.format({
  dir: '/path',
  name: 'index',
  ext: '.html'
});
console.log(formatted);

// 8. path.isAbsolute(path)

console.log(path.isAbsolute('/path')); // true

console.log(path.isAbsolute('readme.md'));  // false
