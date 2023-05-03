proje gereklilikler:  

- flatlist kullanarak görevler listelenecek.
- useState ile görevler güncellenecek. 
- sağ üst kısımda aktif görev sayısı yazacak. 
- göreve dokunulduğunda styleı değişecek. 
- kulanıcıdan aldığın texti al, flatlistteki array'e pushla
- app.js ekranında kaydete basınca flatliste pushlama fonksiyonun yaz prop olarak addDuty'de al



// Görevlerin listelendiği flatliste görev ekleme
1- useState'e state oluştur
2- kullanıcının yazdığı veriye ulaşmak için text setText useState'i oluştur,
3- setListi güncellerken ([...list ile önceki görevleri, text ile de eklenen görevi bas])
4- flatlistte data olarak list tut
5- renderItemda item ve index params gönder, 
6- renderItem içinde todo card componentini al, props olarak text={item} gönder
7- görevi kaydet componentini çağır, value olarak text'i gönder 
8- onChangeText olarak setText gönder,
9- onPress olarak addTodo fonksiyonunu gönder
10- görevi kaydet componenti içinde propla verileri al, touchable'a onpress olarak fonk yolla 