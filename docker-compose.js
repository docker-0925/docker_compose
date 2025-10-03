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