
const  http = require("http");
const routes = require("./routes")

var server = http.createServer(routes) 

server.listen(8000 )
console.log("node.js server at port 8000")