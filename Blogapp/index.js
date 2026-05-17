const express = require ("express");//expressi dahil ediyoruz

const app = express ();//expressi app değişkenine atıyoeuz

app.use(function(req, res){
    res.end("Anasayfa");
})


app.listen(5000,function() {
    console.log("uygulama 5000 portunda yayınlanacak")
})