# Asynchronous Programming in Node.js

Node.js is single-threaded, but can do many tasks at the same time using asynchronous operations — such as reading files, database calls, API calls, timers, etc.

To understand async programming, we need to learn:

Callbacks
Promises
async/await
Error handling in async
Event loop

# 1. Callbacks

A callback is a function passed as an argument to another function.
Node.js uses callbacks heavily for asynchronous work.

Example: Reading a file (async callback)
```
const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, result) => {
    if (err) {
        console.log("Error:", err);
        return;
    }
    console.log("File content:", result);
});

console.log("This runs first!");

```

❌ Callback Hell (problem)

Nested callbacks become hard to read.
```
getUser(1, (user) => {
    getOrders(user, (orders) => {
        getPayment(orders, (payment) => {
            console.log(payment);
        });
    });
});

```
This is where Promises solve the problem.

2. Promises

A Promise represents a value that will be available in the future.
```
let fetchData = new Promise((resolve, reject) => {
    let success = true;

    setTimeout(() => {
        if(success) resolve("Data received");
        else reject("Failed");
    }, 1000);
});

fetchData
    .then(result => console.log(result))
    .catch(error => console.log(error));

```
Output
```
Data received

```


3. async / await

async/await is just a cleaner way to use Promises.

```
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data received"), 1000);
    });
}

async function start() {
    const result = await fetchData();
    console.log(result);
}

start();

Output
```
Data received

```

```

4. Error handling in async code
Using Promises
```
fetchData()
    .then(data => console.log(data))
    .catch(err => console.log("Error:", err));

```

Using async/await + try/catch
```
function fetchData() {
    return new Promise((resolve, reject) => {
        reject("Server error");
    });
}

async function start() {
    try {
        let data = await fetchData();
        console.log(data);
    } catch (err) {
        console.log("Error:", err);
    }
}

start();

```

Output
```
Error: Server error

```

5. Event Loop & Task Queue

Node.js runs single-thread JavaScript, but handles async tasks using:

Call Stack
Event Loop
Callback Queue
Microtask Queue

Flow:

JS executes line-by-line in call stack.
Async tasks (setTimeout, file read, promises) go to Node APIs.
When complete, callbacks go to:
Microtask Queue → Promises
Callback Queue → setTimeout, file I/O
Event loop pushes them back to call stack.

```
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");

```

Output order:
```
A
D
C
B
```