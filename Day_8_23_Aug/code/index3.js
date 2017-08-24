var http = require("http");
var fs = require("fs");
http.createServer(

    function(req, res){

        //res.writeHead(200,
        // {'Content-Type': 'text/plain'});
        //res.end("Hello");

        // res.writeHead(200, {'Content-Type': 'text/html'});
        // var html = "<html><head></head><body>Hello World</body></html>";

        console.log("Request! ");

        res.writeHead(200, {'Content-Type': 'text/html'});
        // fs.readFileSync is a synchronous function
        var html = fs.readFileSync(__dirname+"/index.template", "utf8");
        // "." : Path is where you run node from
        // "__dirname" : Path is the folder of this file

        res.end(html);





    }
).listen(3000, "127.0.0.1");

