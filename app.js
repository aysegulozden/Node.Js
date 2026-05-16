
//Node.j hazır "http" modülünü dahil ediyoruz
var http = require("http");

//requst = talep , response=cevap
function requestListener (request , response){

    response.setHeader ("contenr-Type" , "text/html")
    response.statusCode= 200;
    response.statusMessage="OK";
    response.write ("<h1>Ekranda Gorunecek Olan Metin</h1>")

   response.end()//bağlantıyı kapatır

}

//http modülünün cretaeServer() fonksiyonu ile server oluşturuyoruz
var server = http.createServer(requestListener) // 
server.listen(8000 )// server 8000 portunda çalışır
console.log("node.js server at port 8000")