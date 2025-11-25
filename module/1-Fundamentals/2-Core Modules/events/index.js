const EventEmitter= require('events');

const myEvent=new EventEmitter();

// basic
myEvent.on('run', ()=>{
    console.log('hello.. Event..');
    
});
myEvent.emit('run');

// paramenter
myEvent.on('parameter', (item, item2)=>{
    console.log('item 1:-', item, 'item 2:-', item2);
    
});
myEvent.emit('parameter', 'Look item 1', 'Look item 2');

// Multiple Listeners for One Event

myEvent.on('multi',()=>{
    console.log('User logined...');
});
myEvent.on('multi',()=>{
    console.log('Sent Login mail to user');
});
myEvent.emit('multi');

// Listen Only Once (one-time events)
myEvent.once('once',()=>{
    console.log('This is will once only..');
});

myEvent.emit('once');
myEvent.emit('once');
myEvent.emit('once');

// Remove Listener

function greet() {
    console.log("Hello user!");
}


myEvent.on('hello', greet);

myEvent.removeListener('hello', greet);

myEvent.emit('hello'); 

// listenerCount
console.log(emitter.listenerCount('login'));
