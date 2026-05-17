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
## Routing

Express’te routing, gelen isteğin hangi URL’e gittiğine göre hangi kodun çalışacağını belirler.

Önceden yönlendirme yaparken URL bilgisini ayrı şekilde yazıyorduk.  
Express ile birlikte URL’i doğrudan route tanımında belirtiriz.

### Kullanım

```js
app.use("/", function(req, res) {
    res.send("Ana sayfa");
});
```

### Önemli Nokta

Route tanımlarında **sıralama çok önemlidir.**

Express yukarıdan aşağıya doğru çalışır ve ilk eşleşen route’u kullanır.

Bu yüzden routing yapısı genellikle:

> **en özel route → en genel route**

şeklinde yazılmalıdır.

### Örnek Sıralama

```js
app.use("/blogs/dash", function(req, res) {
    res.send("Blog Dashboard");
});

app.use("/blogs", function(req, res) {
    res.send("Blog Sayfası");
});

app.use("/", function(req, res) {
    res.send("Ana Sayfa");
});
```

### Neden önemli?

Eğer daha genel bir route (örneğin `/`) önce yazılırsa,  
diğer route’lar çalışmayabilir çünkü Express ilk eşleşmeyi kullanır.

### Özet

- Route’lar URL’e göre çalışır
- Express yukarıdan aşağı okur
- En özel route önce yazılmalıdır
- Yanlış sıralama routing problemlerine yol açar


