# 4. Node.js REPL & CLI — Full Explanation

## 1. Node.js REPL (Read–Eval–Print Loop)

REPL is an interactive environment where you can type JavaScript code and get instant results.

🔹 How to open REPL

Just type:
```
node

```
You will enter an interactive shell.

Example 1: Simple Math
```
> 10 + 5
15

```

Example 2: Variables
```
> let x = 20
undefined
> x * 2
40

```

Example 3: Functions
```
> function greet(name){ return "Hello " + name }
undefined
> greet("Thasleeh")
'Hello Thasleeh'

```

.help — show commands
```
> .help
```

Useful REPL commands:
| Command          | Use                |
| ---------------- | ------------------ |
| `.help`          | Show all commands  |
| `.exit`          | Exit REPL          |
| `.clear`         | Clear REPL context |
| `.load file.js`  | Load JS file       |
| `.save file.txt` | Save REPL session  |


## 2. Running Node.js Scripts (CLI)

- Basic

Create a file app.js:
```
console.log("Hello Node.js");

```

Run it:
```
node app.js

```

## 3. Passing Arguments to Node.js Scripts

Node gives your script arguments in:
```
process.argv

```
Example: args.js
```
console.log(process.argv);

```

Run:
```
node args.js hello 123

```

Output:
```
[
  '/usr/local/bin/node',
  '/path/args.js',
  'hello',
  '123'
]

```

Access only your arguments

(Starting from index 2)
```
const args = process.argv.slice(2);
console.log(args);
```

Run:
```
node args.js apple mango coconut

```

Output:
```
[ 'apple', 'mango', 'coconut' ]

```

Practical Example: Calculator

calc.js
```
let [a, b] = process.argv.slice(2);
a = Number(a);
b = Number(b);

console.log("Sum =", a + b);

```

Run:
```
node calc.js 10 20
```

Output:
```
Sum = 30
```


## 4. Environment Variables

Environment variables give extra dynamic information to your script.

🔹 How to set env variable (Linux/Mac)
```
PORT=4000 node app.js

```

Windows (CMD)
```
set PORT=4000 && node app.js

```

Access environment variable in Node
```
console.log(process.env.PORT);

```

Example:

server.js
```
const port = process.env.PORT || 3000;
console.log("Server running on port", port);

```

Run:
```
PORT=5000 node server.js

```

Output:
```
Server running on port 5000

```


## 5. The process Object

process is built-in and gives information about the running program.

✅ Process ID
```
console.log(process.pid);

```

✅ Current Directory
```
console.log(process.cwd());

```

✅ Platform
```
console.log(process.platform);

```

✔ Output Example:
```
win32

```

✔ Process Exit
```
process.exit(0);    // Normal exit
process.exit(1);    // Force exit with error

```

## 6. Full Example: CLI Tool
```
const name = process.argv[2] || "Guest";
const mode = process.env.MODE || "simple";

if (mode === "simple") {
    console.log("Hello " + name);
} else {
    console.log(`Hi ${name}, welcome to Node.js CLI tool!`);
}

```
Run:
```
MODE=pro node greet.js Thasleeh

```
output:
```
Hi Thasleeh, welcome to Node.js CLI tool!

```