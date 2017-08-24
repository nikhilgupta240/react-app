var http = require("http");
var fs = require("fs");
http.createServer(

    function(req, res){

        // JSON
        res.writeHead(200,
            {'Content-Type': 'application/json'}

            );


        // JavaScript object
        var obj = {a:1, b:2};
        // JS Objects
        // JS Object literals
        // JSON

        // JSON is a string { "key" : "value", "key...}


        // JSON

        // JSON.parse
        // JSON string -> JS object

        // JSON.stringify
        // JS objects -> JSON string


        var json_string = JSON.stringify(obj);

        res.end(json_string);



    }
).listen(3000, "127.0.0.1");

