var express= require('express');
var http= require('http');
var fs= require('fs');


var app= express();
var server= http.createServer(app);


app.get('/', function(req, res){
    res.send('<h1>Express Working</h1>');

});
app.get('/task', function(req, res){
    fs.readFile('./dbs.json', function(err,data){
        var tasks= JSON.parse(data.toString()).tasks;
        res.json(tasks);
    })

});
app.post('/task', function(req,res){
    fs.writeFile('./dbs.json',function(req,res){

    var datas={datas: [{tasks: "angular10"}]}
    
    res.json(datas);
    })
    


});

server.listen(3000, function(){
    console.log("server works");

});