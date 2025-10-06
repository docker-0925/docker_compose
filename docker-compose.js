//Docker Compose
//Adalah tool yg digunakan untuk mendefinisikan & menjalankan multiple Docker Container secara sekaligus
//Dengan docker compose bisa menggunakan file YAML untuk melakukan konfigurasi docker container
//Melalui sebuah perintah bisa membuat dan menjalankan beberapa docker container sekaligus dari konfigurasi di file YAML
//Dengan begitu, tidak perlu mengetikan perintah docker create manual untuk buat container
//Fitur di docker compose :
//1. Memiliki multiple isolated env dalam satu docker host/server/dibilang projek. Memungkinkan membuat banyak
//jenis env untuk docker compose. Secara default nama projek akan menggunakan nama folder konfigurasi
//2. Hanya membuat container yg berubah, dapat mendeteksi container mana yang harus dibuat & tidak perlu dibuat ulang dari perubahan konfigurasi
//Kapan harus menggunakan docker compose :
//1. Membuat developmen env, ketika develop app sering butuh tool tool berbeda untuk tiap projek. Bisa dgn compose untuk setupnya
//2. Automated test, kadang butuh banyak yg harus dijalankan manual sebelum automation test. Compose bisa bantu untuk otomatisasi proses setupnya
//3. Development. Compose jg bisa digunakan untuk kasus develop app, jadi tidak perlu start manual app di server cukup dari compose

//Install Docker Compose
//Dulu docker compose terpisah dgn aplikasi docker, perlu dgn perintah docker-compose untuk menggunakannya
//Sekarang sudah otomatis berada di dalam Docker, tidak perlu install manual
docker compose version //untuk melihat versi docker compose

//Configuration File
Docker compose menyimpan konfigurasinya dalam bentuk file YAML : https://yaml.org/ , file YAML mirip JSON tapi lebih sederhana
File konfigurasi ini biasanya disimpan di file bernama docker-compose.yaml , dan nama projek akan default menggunakan nama folder lokasi konfigurasi ini disimpan

//Yaml
//Sebuah jenis file yang biasa digunakan untuk menyimpan konfigurasi
//Mirip seperti JSON, tapi tidak menggunakan kurung kurawal. Yaml memiliki atribut dan value {firstName : Hasan}
https://yaml.org/

//Membuat Container
//Sebelumnya untuk membuat container harus menggunakan perintah docker create
//Dengan compose bisa menggunakan configuration file di file yaml
//Bisa menambahkan bagian services untuk menentukan container name, image docker container, dan spesifikasi lainnya
docker compose create //untuk create container, jalankan di dalam folder konfigurasi yaml berada
//Bisa membuat beberapa container sekaligus, namun docker bisa deteksi container mana yang belum dibuat itu yg dieksekusi

//Menjalankan Container
//Container yang dibuat dengan docker compose, perlu dijalankan secara manual
//Sebelumnya bisa menjalankan container dengan perintah docker container start
docker compose start //jalankan container dengan docker compose, semua container di file yaml akan dijalankan

//Melihat Container
//Sebelumnya bisa melihat container dengan perintah docker container ls
//Namun perintah tsb akan menampilkan semua container baik dibuat manual atau dengan docker compose
//Dengan docker compose bisa melihat status container yang hanya terdapat di konfigurasi file yaml tersebut
docker compose ps //menampilkan container yang hanya ada di file yaml tsb

//Menghentikan Container
//Di docker compose ketika menghentikan container hanya akan men-stop container, tidak menghapus containernya
docker compose stop //stop container dengan docker compose, akan menghentikan semua container di file yaml tsb

//Menghapus Container
//Bisa menghapus container di file konfigurasi dengan perintah docker container rm atau dengan docker compose
//Jika dengan docker compose, akan otomatis menghapus semua container, network, dan volume yang digunakan container di file yaml
docker compose down //hapus container di docker compose, jika posisi container running akan di stop dulu kemudian dihapus

//Project Name
//Seperti diinfo diawal, saat menggunakan docker compose, informasi konfi compose akan disimpan dalam project
//Dan secara default nama projectnya adalah nama folder lokasi file yaml berada
docker compose ls //melihat daftar project yang sedang berjalan, container harus dalam posisi running

//Service
//Dalam konfig docker compose, container disimpan dalam konfigurasi bernama services
//Disana dapat menambahkan satu atau lebih services dalam konfigurasi filenya
https://docs.docker.com/reference/compose-file/services/

//Komentar
//Keunggulan Yaml daripada Json salah satunya adalah dapat menambahkan komentar (#)
//Pada Yaml komentar akan otomatis diharakan oleh docker compose

//Port
//Ketika membuat container bisa mengekspose port keluar ke host dengan Port Forwarding
//Hal ini juga bisa dikonfigurasi di file docker compose dengan atribute ports yang berisi array object port
//1. Short Syntax : berisi string port <HOST>:<CONTAINER> -> 8080:80 = 8080 di host untuk diforward ke 80 di container
//2. Long Syntax : dalam bentuk object yang berisi :
//target : port di container, published : port di host, protocol : protokol port (tcp/udp), mode : host untuk port ditiap note cukup gunakan nilai host

//Environment Variable
//Saat membuat container bisa menambahkan environment variable untuk digunakan di dalam container
//Dengan docker compose juga bisa menambahkan env variable dengan menggunakan attribute environment

//Bind Mount
//Docker compose juga bisa melakukan bindmount dengan atribut volumes di services
//Bisa menambahkan satu atau lebih bind mount jika mau
//1. Short Syntax : menggunakan nilai SOURCE:TARGET:MODE
//SOURCE: lokasi host (relative/absolute path), TARGET: lokasi container, MODE: mode bindmount = ro:readonly, rw:readwrite (default)
//2. Long Syntax : dibuat dalam nested object di volumes dengan atribute :
//type: type mount (volume/bind), source: sumber path di host, target: path di container, read_only: flag rd, defaultnya false

//Volume
//Selain bisa untuk membuat container, docker compose juga bisa untuk membuat volume
//Menggunakan atribut volumes pada konfigurasi file
//Tidak bisa menjalankan docker compose create jika pada file yaml hanya ada konfigurasi volumes tanpa container
//Untuk menggunakan volume ke container bisa seperti menggunakan bind mount dengan ketentuan :
//Short syntax: ganti SOURCE dengan nama volume
//Long syntax: ganti type menjadi volume, dan source menjadi nama volume
//Jika sudah terdapat volume dan digunakan container, ketika dijalankan akan menunjukkan pembuat volume sebelum container
docker volume ls //akan tertera volume tadi
docker compose down //tidak akan menghapus volume, hanya menghapus container dan network saja
docker volume rm <nama-volume> //jika ingin menghapus volume
//Dengan begitu, ketika menjalankan lagi container2 yang sudah dihapus tadi, akan otomatis menggunakan volume yang sudah ada & tidak membuat ulang volume lagi

//Network
//Selain membuat container & volume, docker compose juga bisa membuat nework secara otomatis
//Saat menjalankan file dengan docker compose, secara default semua container akan dihubungkan dalam sebuah network bernama <nama-project>_default
//Jadi tidak perlu membuat network secara manual, hal ini bisa dilihat dengan inspect container yang sudah berjalan akan tertera pada bagian network
//Namun tetap bisa jika ingin membuat network manual dengan docker compose sejumlah satu atau lebih dgn atribute neworks dengan :
//name: nama network, driver: driver network yaitu: bridge, host atau none
//Sama dengan volume, network perlu digunakan container akan bisa dibuat dan dijalankan
//Dan ketika dibuat dan dijalankan maka akan tertera nama network yang kita buat manual, bukan otomatis network dengan nama default seperti sebelumnya
docker network ls //akan tertera network yang dibuat tadi
//Berbeda dengan volume yang jika menghapus container tidak ikut terhapus, network akan terhapus jika dihapus/down

//Depends On
//Terkadang dalam membuat banyak container di docker compose ingin membuat container yang butuh container lain sebelum berjalan
//Atau gampangnya ingin ada urutan container berjalan, dimana defaultnya container berjalan bersama tanpa urutan pasti
//Bisa membuat urutan menjalankan container dengan atribute depends_on
//Dengan sebutkan bahwa container ini hanya bisa jalan kalo container lain sudah berjalan, bisa sebutkan satu/lebih container
