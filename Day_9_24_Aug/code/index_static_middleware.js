var express = require("express");
var app = express();

//express.static(


app.use("/static", express.static(__dirname+"/public"));

// GET/public/index.html


// GET /public/script.js


app.get("/", function(req, res){
    res.send("Hello World From / GET Handler");
});

app.get("/api", function(req,res){
    res.json({a:1, b:2})

});

app.get("/product/:id", function(req, res){
    console.log(req.params);
    res.send("You asked for Product : " + req.params.id);

});


app.listen(3000);