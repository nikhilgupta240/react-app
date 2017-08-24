var http = require("http");
var fs = require("fs");
http.createServer(

    function(req, res){


        // / -> Hello World
        // /api -> return a JSON object


        if (req.url=="/"){
            res.writeHead(200,
                {'Content-Type': 'text/plain'}
            );
            res.end("Hello World / Routing");
            // return Hello World
        }
        if (req.url =="/api"){
            // return a JSON object
            res.writeHead(200,
                {'Content-Type': 'application/json'}
            );

            var js_obj = {a:1, b:2};
            res.end(JSON.stringify(js_obj));

        }

        res.writeHead(404);
        res.end("Not Recognised")



    }
).listen(3000, "127.0.0.1");

