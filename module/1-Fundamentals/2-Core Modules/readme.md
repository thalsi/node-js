# 2. Node.js Core Modules


fs — File System
path — File and directory paths
os — System information
url — Parse and format URLs
http — Create servers and handle requests
events — EventEmitter pattern


## 1. fs — File System Module
Purpose:
The fs (File System) module allows you to work with files and directories — read, write, update, delete, etc.

You can perform file operations in two ways:
| Type                            | Description                                                                  | Example             |
| ------------------------------- | ---------------------------------------------------------------------------- | ------------------- |
| **Synchronous (Blocking)**      | The program waits until the file operation completes.                        | `fs.readFileSync()` |
| **Asynchronous (Non-Blocking)** | The program continues executing while file operation runs in the background. | `fs.readFile()`     |


## 2. Importing fs Module
```
const fs = require('fs');

```

## 3. Common File Operations with Examples

Let’s explore all major functions — with examples 👇

| Encoding                 | Description             | Example Use                |
| ------------------------ | ----------------------- | -------------------------- |
| `'utf8'`                 | Standard Unicode text   | Most text files            |
| `'ascii'`                | Basic English only      | Legacy systems             |
| `'utf16le'`              | UTF-16 Little Endian    | Windows Unicode text       |
| `'latin1'` or `'binary'` | ISO-8859-1 Western text | Old files                  |
| `'base64'`               | Encoded binary → text   | Images, JSON data transfer |
| `'hex'`                  | Hexadecimal string      | Debugging binary           |
| *(none)*                 | Raw Buffer              | Images, binary operations  |


### 1. Reading Files

1. Asynchronous Read
```
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

```
Explanation:

- 'utf8' → ensures the file is read as text (not raw bytes).
- callback → executed after reading completes.

#### 2. Synchronous Read
```
const fs = require('fs');

try {
  const data = fs.readFileSync('example.txt', 'utf8');
  console.log('File content:', data);
} catch (err) {
  console.error('Error reading file:', err);
}

```
The script pauses until the file is completely read.

#### 2. Writing Files

1. Asynchronous Write
```
const fs = require('fs');

fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
  if (err) throw err;
  console.log('File written successfully!');
});

```
👉 If file doesn’t exist → it will be created.
👉 If it exists → content is replaced.

2. Append Data to File
```
fs.appendFile('example.txt', '\nNew line added!', (err) => {
  if (err) throw err;
  console.log('Data appended!');
});

```
This adds new data to the end of the file.


3. Synchronous Write
```
fs.writeFileSync('example.txt', 'Synchronous write example.');
console.log('Write complete!');

```
##### Check if File Exists

Old (but works):
```
if (fs.existsSync('example.txt')) {
  console.log('File exists!');
} else {
  console.log('File not found!');
}

```
#### Deleting Files

```
fs.unlink('example.txt', (err) => {
  if (err) throw err;
  console.log('File deleted!');
});

```

#### Working with Directories
1. Create a Folder
```
fs.mkdir('myFolder', (err) => {
  if (err) throw err;
  console.log('Folder created!');
});

```
To create nested folders:
```
fs.mkdir('parent/child', { recursive: true }, (err) => {
  if (err) throw err;
  console.log('Nested folder created!');
});

```

2. Read Folder Contents
```
fs.readdir('myFolder', (err, files) => {
  if (err) throw err;
  console.log('Files inside:', files);
});

```
Output example:
```
Files inside: [ 'file1.txt', 'file2.txt', 'subfolder' ]

```

3. Remove Folder
```
fs.rmdir('myFolder', (err) => {
  if (err) throw err;
  console.log('Folder removed!');
});

```
To remove a non-empty folder (Node 12+):
```
fs.rm('myFolder', { recursive: true, force: true }, (err) => {
  if (err) throw err;
  console.log('Folder and contents removed!');
});

```

4. Rename Files or Folders

```
fs.rename('oldName.txt', 'newName.txt', (err) => {
  if (err) throw err;
  console.log('File renamed!');
});

```
5. File Information (Stats)
You can get file details like size, creation date, etc.
```
fs.stat('example.txt', (err, stats) => {
  if (err) throw err;
  console.log(stats);
  console.log('Is File:', stats.isFile());
  console.log('Is Directory:', stats.isDirectory());
  console.log('File size (bytes):', stats.size);
});

```
Example output:
```
Stats {
  dev: 16777220,
  mode: 33188,
  size: 56,
  atime: 2025-11-08T15:00:00.000Z,
  mtime: 2025-11-08T15:01:00.000Z,
  ...
}

```

6. Streams (for Large Files)

For big files, instead of reading the entire file into memory, use streams.

1. Read Stream
```
const readStream = fs.createReadStream('largefile.txt', 'utf8');

readStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

readStream.on('end', () => {
  console.log('File reading completed!');
});

```

2. Write Stream
```
const writeStream = fs.createWriteStream('output.txt');
writeStream.write('First line\n');
writeStream.write('Second line\n');
writeStream.end('End of file.');

```

3. Pipe (Copy File)
```
const readStream = fs.createReadStream('source.txt');
const writeStream = fs.createWriteStream('copy.txt');

readStream.pipe(writeStream);

```
Efficiently copies large files without loading into memory.

| Operation     | Method                                  | Description                    |
| ------------- | --------------------------------------- | ------------------------------ |
| Read file     | `readFile`, `readFileSync`              | Get file content               |
| Write file    | `writeFile`, `writeFileSync`            | Create or overwrite            |
| Append        | `appendFile`, `appendFileSync`          | Add data to file               |
| Delete file   | `unlink`, `unlinkSync`                  | Remove file                    |
| Create folder | `mkdir`, `mkdirSync`                    | Make directory                 |
| Delete folder | `rmdir`, `rm`                           | Remove directory               |
| Rename        | `rename`, `renameSync`                  | Rename file/folder             |
| File info     | `stat`, `statSync`                      | Metadata                       |
| Streams       | `createReadStream`, `createWriteStream` | Handle large files efficiently |

