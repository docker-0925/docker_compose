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