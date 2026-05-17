# EXPRESS

## package.json

Bu dosya projede yüklü olan kütüphaneleri ve sürümlerini içerir.

Eğer projeyi başka birine göndereceksek `node_modules` klasörünü silebiliriz. Çünkü bu klasör; yüklediğimiz paketleri ve onların bağımlılıklarını içerdiği için çok fazla yer kaplar.

Sorun oluşmaz çünkü gerekli paket bilgileri `package.json` dosyasında kayıtlıdır.

Projeyi tekrar çalıştırmak için terminalde aşağıdaki komutu yazmamız yeterlidir:

```bash
npm install
```

Bu komut silinen `node_modules` klasörünü yeniden eksiksiz şekilde oluşturur.

## nodemon 

Biz kodumuzda bir değişiklik yaptığımız zaman bunu ekranda görmek için `ctrl+c` komutu ile terminali durdurup kodu tekrardan çalıştırmak zorundaydık .

 Ama `nodemon ` sayesinde buna gerek kalmıyor . terminale 
 ```bash
  `npm i nodemon --save-dev`
  ```
   yazıp yükleme yapmamız yeterli kurulumu için . 

 Bu paket geliştirme yaparken sunucyu otomatik başlatmak için kurulur. 

 terminalde çalıştırırken de 

  ```bash
 `npx nodemon dosyanızın_adı`
  ```

  komutunu çalıştırmalısınız

Bu işlemin daha kolay bir yolu da var . `package.json` dosyasında scripts kısmına `"start": "npx nodemon dosyanızın_adı"` artık çalıştırmak için sadece terminale; 

 ```bash
`npm start `
```
 yazmanız yeterli olucak 

 ## middleware 

 Express uygulamasında istek (req) ile cevap (res) arasına giren fonksiyon.

 Yani bir isteğin sunucuya gelip cevap dönmeden arada çaışır.

## Temel yapı

```js
app.use(function(req, res, next){
    console.log("Middleware çalıştı");
    next();
});
```

next komutu bir sonraki middleware'nin çalışması için gerekli olan bir komut.

