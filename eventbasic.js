var http= require('http');
var event= require('events');// import Event module
var myevent=new  event.EventEmitter();
var server= http.createServer(function(req, res){
    myevent.emit('server activity','test');   //event trigger
    

    res.end("server works");
});
myevent.on('server activity', function(data){     //event Listener

    console.log("event emiiter functionality", data);
});

server.listen(3000,'localhost', function(){

    console.log("server works on port 3000");
});