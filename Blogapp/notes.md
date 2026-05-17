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