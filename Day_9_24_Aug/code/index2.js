var express = require("express");
var app = express();


// app.use : The URL has to begin with the following parameter

// localhost:3000/api
// localhost:3000/anything/anything/anything

app.use("/", function(req, res, next){

    console.log(" A Request Was Made");

    next();

});

// Make a note of every request that begins with
//api

app.use("/api", function(req, res,next)
    {

        console.log("An API Call was made");
        next();
    }

)


// app.getThe URL has to match the exact pattern

// URL /
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