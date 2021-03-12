var fs= require('fs');
var event= require('events');//import events module

const mtyemmiter= new event.EventEmitter(); //create object for event emitter

fs.readFile('text.txt',(err,data) =>
{
console.log(data.toString());
mtyemmiter.emit('readFile');//emit event
});
mtyemmiter.on('readFile',()=>
{
    console.log('reading file event');
});