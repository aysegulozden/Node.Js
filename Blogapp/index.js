const express = require ("express");//expressi dahil ediyoruz

const app = express ();//expressi app değişkenine atıyoeuz

app.use(function(req, res , next){
    console.log("middleware 1 çalıştı");
    next();//süreci kaldığı yerden devam ettirmiş oluyoruz.
})

app.use(function(req, res){
    console.log("middleware 2 çalıştı");
    res.end();
})

app.listen(5000,function() {
    console.log("uygulama 5000 portunda yayınlanacak")
})