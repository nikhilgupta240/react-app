var express = require("express");
var app = express();


var bodyParser = require("body-parser");



//function bodyParser.urlencoded(options){
//    return function(req, res, next){
        // Middleware function
// If it sees a request of the form Content-Type x-www-form-urlencoded
// It will parse it and put it in req.body
//    }
//}


app.use("/", bodyParser.urlencoded({extended:false}) );

app.use("/static", express.static(__dirname+"/public"));


app.post("/submit", function(req, res){

    console.log(req.body);
   res.send("Thanks for submitting the form");


})

app.get("/submit", function(req,res){
    console.log(req.query);
    res.send("Thanks" + req.query.firstname + " for submitting the form");
});

app.get("/", function(req, res){
    res.send("Hello World From / GET Handler");
});

app.listen(3000);