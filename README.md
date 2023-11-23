# API-Rahma

## fiturnya :
-login (/login)
 -jika login sukses dengan akun admin, maka akan ngegenerate token untuk mengakses api.
  token yang dihasilkan akan disimpan ke dalam cookies sekaligus akan ditampilkan dalam bentuk json.
 -jika login sukses dengan akun biasa, maka akan masuk ke halaman index.

-register (/register)
 -seperti register biasa aja, cuma setiap akun yang dibuat secara default bukan akun admin (kolom `admin` pada tabel `data` bernilai 0).
 -akun admin ditandain dengan kolom `admin` pada tabel `data` bernilai 1.
 -kalo pengen buat akun admin:
  -register akun biasa, nanti ubah kolom `admin` pada tabel `data` yang awalnya 0 jadi 1.
  -tanpa register di aplikasi, buat langsung akunnya di databasenya

-index (/)
 -gak ada yang spesial, cuma tulisan "Ini adalah halaman indeks" & dua buttom login/register
 -index nih program utamanya setelah login berhasil, bebas mau diisi apa aja

-userdata (/userdata/:username)
 -ini adalah API yang ngakses tabel `data` pada database, kemudian outputnya adalah JSON yang berisi :
  -username
  -email
  -skor1
  -skor2
  -skor3
 -cara make APInya dengan akses POST `localhost:4000/userdata/:username`. `:username` diisi dengan data username yang akan diambil datanya.
 -api hanya dapat diakses jika memiliki token.
  cara dapet token adalah dengan login menggunakan akun admin (baca penjelasan fitur login)

## fitur coming soon (maybe?)
-halaman admin
 -jadi kalo login menggunakan akun admin, maka akan diarahkan ke halaman khusus admin.
 -halaman khusus admin berisi info token (non json) (kodenya, masa berlakunya, akun siapa yg generate), dan berbagai fitur admin lainnya.
 -halaman yang bisa ngeliat (consume) data yang diberikan oleh API. 
  (mungkin halaman search data by username kali ya, nanti searchboxnya ngarah ke `userdata/:username`)
 -tombol logout, yang dimana akan logout dari halaman admin, sekaligus menghapus token yang berada di cookie.
 
-halaman untuk member (pengembangan index).
 -fitur logout
