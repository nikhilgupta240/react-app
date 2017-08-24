var express = require("express");
var app = express();

// Use the Pug Engine to interpret my views
app.set("view engine", "pug");

// Find the views in this directory
//app.set("views", "./views");


app.get("/", function(req, res){


res.render(
    "index",
    {sometitle: "Nagaro Bootcamp", message: "Hello World"}

);


});


app.listen(3000);


