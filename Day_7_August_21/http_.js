var http = require("http");

// http module
// Docs - Easy Method
// Dig down code - Advanced

// createServer
// input : callback function of some form
// callback function should have two parameters
// function(req,res)
// req - would correspond to request object
// res - would correspond to response object

function callback(req, res){
    // every time a request is made
    // req will point to the request object
    // res will point to the response object

    // Parse Understand req

    // Generate response
    // Put response in res

    // Request, Response and see its methods

    // req is an instance of Request object
    // res is an instance of Response object

    // Doc : Request, Response
    console.log(req);
    res.end("Hello");


}


var app = http.createServer(callback);



    // create a server object
    // whenever you get a request on server
    // createserver  : two objects
    // a request object
    // call the callback_function on it












// Register this server to "listen" to port 3000

// The server object has a method called listen

//app.listen(portnumber, "IP");

app.listen(3000, "127.0.0.1");  // localhost



