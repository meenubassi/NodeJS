var express= require('express')
var server= express();   //create server

server.get('/', function(req, res){            //'/' is like route
    res.send('<h1>express working</h1>');
    
});
server.get('/task', function(req, res){            //'/task' is 2nd route, type localhost3000/task

    res.send('<h1>express working</h1>');
    
});


server.listen(3000, function(){

    console.log('server works');
});