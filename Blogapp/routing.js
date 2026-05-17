const express = require ("express");//expressi dahil ediyoruz

const app = express ();//expressi app değişkenine atıyoeuz
const path = require("path");//path modülünü dahil ediyoruz

app.use("/blogs/:blogid", function(req, res ){
    console.log(__dirname)
    console.log(__filename)
    res.sendFile(path.join(__dirname,"views","users","blogDetails.html"))
})
app.use("/blogs", function(req, res ){
    res.sendFile(path.join(__dirname,"views","users","blogs.html"))
})

app.use("/", function(req, res ){
    res.sendFile(path.join(__dirname,"views","users","usersindex.html"))
})

app.listen(8000,function() {
    console.log("uygulama 8000 portunda yayınlanacak")
})