const mysql= require("mysql");
const express=require("express");
var bodyParser= require("body-parser");


var app=express();

app.use(bodyParser.json());

app.listen(3000);

var mySqlConnection =mysql.createConnection({    // data connection created
    host:"localhost",
    user:"root",
    password:"password",
    database:"sample",
    multipleStatements: true
});
 mySqlConnection.connect((err)=>{
     if(!err)
     {
         console.log("connected");

     }
     else{
         console.log("connection error");
     }
 });