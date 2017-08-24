var  p  = require("http");


p.createServer(

    function(req, res){


        if (req.url == '/api') {

            res.writeHead(  200    ,   {'Content-Type':  'application/json' } );
            var obj = {a:1, b:2};
            var json_string = JSON.stringify(obj); ;
            res.end(json_string);
        }

        if (req.url == '/plain') {

            res.writeHead(  200   ,   {'Content-Type':  'text/plain'} );
            var txt = 'Hello World';
            res.end(txt);
        }

        res.writeHead(404 );


        res.end() ;

    }
).listen( 3000,  "127.0.0.1" );
