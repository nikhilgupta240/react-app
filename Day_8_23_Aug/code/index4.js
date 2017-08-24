var http = require("http");
var fs = require("fs");
http.createServer(

    function(req, res){

        // Crude Templates
        res.writeHead(200, {'Content-Type': 'text/html'});

        var template_code = fs.readFileSync(__dirname+"/index.template", "utf8");

        fs.readFile(file, encoding, callback => res.send(html))


        var message = "Dynamic Message From Node";
        var message2 = "Div Content Dynamic From Node"

        var html = template_code.replace("{{Message}}", message);
        var html2 = html.replace("{{DivContent}}", message2 );
        res.end(html2);





    }
).listen(3000, "127.0.0.1");

