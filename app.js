
var express= require('express');
var routes=require('./routes');
var path= require('path');
var http= require('http');
var urlencoded= require('url');
var bodyparser= require('body-parser');
var json= require('json');
var logger= require('logger');
var methodoverride= require('method-override');

var nano= require('nano')('http://localhost:5984');


var db= nano.use('address');

var app= express();



app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine','jade');

app.use(bodyparser.json());
app.use(express.urlencoded({express: true}));
app.use(methodoverride());
app.use(express.static(path.join(__dirname+ 'public')));
app.get('/',routes.index);

app.post('/createdb', function(req, res){
    nano.db.create(req.body.dbnanme, function(err){
        if(err)
        {http.request.send("error creating database", req.body.dbnanme);
    return;}
    
    res.send("databse"+ req.body.dbname +"created suceesflly");});

}
);
app.post('/new_contact', function(req,res)
{
    var name=req.body.name;
    var phone= req.body.phone;
    db.insert({name:name, phone:phone, crazy:true}, phone,function(err,body,header){
        if(err)
        {res.send("error creating contacts");}
        res.send("contacts created sucessfully");

    });

});
app.post('/view_contact', function(req,res)
{
    var alldoc="following are the documents";
    
    db.get(req.body.phone, {revs_info:true},function(err,body){
        if(err)
        {console.log(body);}
        if(body)
        {
            alldoc += "Name="+body.name+"<br/> Phone number: "+body.phone;

        }
        else{
            alldoc="no records found";
        }
res.send(alldoc);
       
    });

});

app.post('/Delete_contact', function(req,res)
{
    
    db.get(req.body.phone, {revs_info:true},function(err,body){
        if(!err)
        {db.destroy(req.body.phone,body._rev, function(err,body){
            if(err)
        {

        res.send("error in deleting contacts");}
        else{
            res.send("deleted data");
        }  });
    
}
});

});
http.createServer(app).listen(app.get('port'),function(){
console.log("express server"+app.get('port'));
});


//