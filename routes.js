var fs = require("fs"); 

const routeHandler = (request , response)=>{
    if(request.url == "/"){
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
     else if (request.url == "/create" && request.method == "POST"){

        const data =  [];
        request.on("data" , (chunk)=>{
           data.push (chunk)
        request.on("end",()=>{
            const result = Buffer.concat(data).toString();//stringe çevirme işlemi
            const parsedData= result.split("=")[1]//split() fonksiyonu ile gelen veriyi "=" işaretinden bölüyoruz ve ikinci elemanı alıyoruz yani blogun adını almış oluyoruz
            //appendFile () : ilk parametre dosyanın adı ikinci parametre dosyaya ekelenecek olan metin 
            
        //* blogs.txt dosyası varsa sonuna parsedData bilgisini ekliyoruz ama eğer dosya yoksa dosya oluşturup içine parsedData verisini ekliyoruz
       fs.appendFile("blogs.txt" , parsedData , (error) =>{
        if (error){
            console.log(error)
        }
        else {
            response.statusCode = 302; //geçici olarak başka bir sayfaya yönlendirme yapacağımızı belirtiyoruz
            response.setHeader("Location", "/");//yönlendirme yapacağımız sayfa
            response.end()
        }

       })
          })
        })

      
    } 
    else if (request.url == "/create"){
        fs.readFile ("create.html",(error , html)=>{
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

    //Diğer sayfalardan erişebimek için 
    module.exports= routeHandler;