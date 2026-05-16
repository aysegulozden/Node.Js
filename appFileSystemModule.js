var http = require("http");
var fs = require("fs"); // fs modülü import ettik

function requestListener (request , response){
    if(request.url == "/"){
    // readFile ilk parametresi okunacak olan dosyanın adı , ikinci parametre olarakta fonksiyon, bu fonksiyonun iki parametresi var 
   fs.readFile("index.html", (error , html)=>{
    response.writeHead(200 , {"Content-Type" : "text/html"});
    response.write(html);
    response.end()
   })
    }
    else if (request.url == "/blogs"){
        fs.readFile ("blogs.html",(error , html)=>{
            response.writeHead(200 , {"Content-Type" : "text/html"});
            response.write(html);
            response.end()
        })
       
    }
    else {
        fs.readFile("404.html", (error, html) => {
            response.writeHead(404, {"Content-Type": "text/html"});
            response.write(html);
            response.end();
        });
    }
    }


var server = http.createServer(requestListener) 
server.listen(8000 )
console.log("node.js server at port 8000")