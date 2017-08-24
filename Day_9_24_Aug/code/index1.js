var express = require("express");
var app = express();

// Now write a middleware
// Request of the form GET/product/:id
// it prints out the ID





app.use("/", function(req, res, next){
    console.log("Middleware 1");
    console.log(req.myownparameter);

    req.myownparameter = "something";
    next();


})






app.use("/", function(req, res, next){

    console.log("Middleware 2");
    console.log(req.myownparameter);

})
app.get("/", function(req, res, next ){
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