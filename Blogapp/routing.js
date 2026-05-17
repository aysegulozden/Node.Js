const express = require ("express");//expressi dahil ediyoruz

const app = express ();//expressi app değişkenine atıyoeuz

app.use("/blogs/:blogid", function(req, res ){
    res.send("Blog dashboard")
})
app.use("/blogs", function(req, res ){
    res.send("Blog sayfası")
})

app.use("/", function(req, res ){
    res.send("Ana sayfa")
})

app.listen(8000,function() {
    console.log("uygulama 8000 portunda yayınlanacak")
})