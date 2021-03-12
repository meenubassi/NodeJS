var express= require('express');
var app= express();
var BodyParser= require('body-parser');

let people={people:[{name: 'meenu Bassi'}]}

app.use(BodyParser.urlencoded({extended: false}))
app.use(BodyParser.json())

app.get('/people', function(req, res){
    res.json(people);
    res.end();
    

});
app.post("/people", function(req, res){
    if(req.body && req.body.name){
        people.people.push({name:req.body.name})

    }
    
    res.json(people);
    res.end();
    

});
app.delete("/people", function(req, res){
var name= req.params.name;

    

});

app.listen(3000);
