//! 200 OK : İSTEK BAŞARILI
//! 400 Bad Request : İSTEK HATALI
//! 404 Not Found : İSTEK YAPILAN SAYFA BULUNAMADI
//! 500 Internal Server Error : SUNUCU HATASI

var http = require("http");

//Yapılan url isteğine göre farklı cevaplar verecek şekilde requestListener fonksiyonunu güncelliyoruz
function requestListener (request , response){
    if(request.url == "/"){
        response.writeHead(200 , {"Content-Type" : "text/html"});
        response.write("<h1>Home Page </h1>")
        response.end()
    }

    else if (request.url == "/blogs"){
        response.writeHead(200 , {"Content-Type" : "text/html"});
        response.write("<h1>Blogs Page </h1>")
        response.end()
    }
    else {
        response.writeHead(404 , {"Content-Type" : "text/html"});
        response.write("<h1>Page Not Found</h1>")
        response.end()
    }

}

var server = http.createServer(requestListener) 
server.listen(8000 )
console.log("node.js server at port 8000")