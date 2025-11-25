# ✅ EventEmitter Pattern 

## 1. What is EventEmitter?
- In Node.js, EventEmitter is a core pattern used to:
listen for events
emit (trigger) events
handle asynchronous actions cleanly

- EventEmitter is like WhatsApp:
You subscribe to a group (listener)
Someone sends a message (emit)
You receive the message (handler)

## ⭐ 2. Basic Steps

Import EventEmitter
Create an emitter
Register an event listener
Emit the event

## 3. Basic Example

```
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// Listener
myEmitter.on('greet', () => {
    console.log("Hello, welcome!");
});

// Emit
myEmitter.emit('greet');

```
Output:
```
Hello, welcome!

```

## 4. Event with Parameters

```
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('order', (item, quantity) => {
    console.log(`Order received: ${item}, Quantity: ${quantity}`);
});

emitter.emit('order', 'Chicken Biryani', 2);

```

## 5. Multiple Listeners for One Event
```
emitter.on('login', () => {
    console.log("User logged in!");
});

emitter.on('login', () => {
    console.log("Send login email...");
});

emitter.emit('login');

```

## 6. Listen Only Once (one-time events)
```
emitter.once('start', () => {
    console.log("This will run only once");
});

emitter.emit('start');
emitter.emit('start');

```
Output
```
This will run only once
```
## 7. Remove Listener

```
function greet() {
    console.log("Hello user!");
}

emitter.on('hello', greet);

emitter.removeListener('hello', greet);
// OR emitter.off('hello', greet);

emitter.emit('hello'); // No output

```

## 8. Check Listener Count

```
console.log(emitter.listenerCount('login'));

```

## 9. Inherit EventEmitter (OOP pattern)

```
const EventEmitter = require('events');

class Server extends EventEmitter {
    start() {
        console.log("Server starting...");
        this.emit('ready', 200);
    }
}

const s = new Server();

s.on('ready', (port) => {
    console.log(`Server running on port ${port}`);
});

s.start();
```

## 10. Real-Life Project Example
Example: Order Processing System
orderService.js
```
const EventEmitter = require('events');

class OrderService extends EventEmitter {
    createOrder(order) {
        console.log("Order created:", order);
        this.emit('orderCreated', order);
    }
}

module.exports = OrderService;

```
app.js
```
const OrderService = require('./orderService');

const orderService = new OrderService();

orderService.on('orderCreated', (order) => {
    console.log("Send email to customer:", order.customer);
});

orderService.on('orderCreated', (order) => {
    console.log("Update stock for:", order.item);
});

orderService.createOrder({
    item: 'Laptop',
    customer: 'Thasleeh',
});
```

