# API-Rahma

## Fiturnya:

### Login (`/login`)

- Jika login sukses dengan akun admin, maka akan menghasilkan token untuk mengakses API.
  Token yang dihasilkan akan disimpan dalam cookies dan ditampilkan dalam format JSON.
  
- Jika login sukses dengan akun biasa, maka akan masuk ke halaman index.

### Register (`/register`)

- Proses register biasa, setiap akun yang dibuat secara default bukan akun admin (kolom `admin` pada tabel `data` bernilai 0).

- Akun admin ditandai dengan kolom `admin` pada tabel `data` bernilai 1.

- Untuk membuat akun admin:
  - Daftarkan akun biasa, kemudian ubah kolom `admin` pada tabel `data` dari 0 menjadi 1.
  - Jika ingin membuat langsung akun admin di database, lakukan tanpa mendaftar di aplikasi.

### Index (`/`)

- Halaman utama setelah login berhasil dengan tulisan "Ini adalah halaman indeks" dan dua tombol login/register.

### Userdata (`/userdata/:username`)

- API yang mengakses tabel `data` pada database, outputnya dalam format JSON:
  - Username
  - Email
  - Skor1
  - Skor2
  - Skor3
  
- Mengakses API dengan metode POST ke `localhost:4000/userdata/:username`. 
  Gantilah `:username` dengan data username yang ingin diambil.

- API hanya dapat diakses dengan token yang didapatkan dari login menggunakan akun admin.

## Fitur Coming Soon (Maybe?)

### Halaman Admin

- Jika login menggunakan akun admin, diarahkan ke halaman khusus admin.
  
- Halaman admin berisi info token (non-JSON) seperti kode, masa berlaku, dan akun yang menghasilkan.

- Berbagai fitur admin lainnya termasuk melihat data dari API, mungkin dengan fitur pencarian berdasarkan username.

- Tombol logout untuk keluar dari halaman admin dan menghapus token dari cookie.

### Halaman Member (Pengembangan Index)

- Fitur logout.

Teks ini adalah ringkasan README GitHub API-Rahma yang telah diperbaiki. Semoga membantu!
