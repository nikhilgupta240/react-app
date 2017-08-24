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


// bodyParser.urlencoded({extended:false})

//bodyParser module
// urlencoded method it accepts some options


function urlencoded(options){
    // Check out the options
    // Do something

    if (extended == true){
    var parse_url_encoded_form_data = "a complicated middleware"}

    if (extended == false){

        var parse_url_encoded_form_data = "a simple middleware"

    }



    return parse_url_encoded_form_data;
}


// HW: extended : true , bodyParser documentation


var parse_url_encoded_form_data = bodyParser.urlencoded(options);

// options : {extended:true} /


app.use("/", parse_url_encoded_form_data));

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