Structure Folder
product-management-api/
│
├── documentation/
│
├── database/
│   ├── schema.sql
│   └── seed.sql
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── repositories/
│   │   ├── utils/
│   │   └── app.js
│   │
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   ├── .env
│   └── .gitignore
│
└── README.md


src(source) ->kode sumber utama 

config (configuration) menyimpan konfigurasi yang dibutuhkan sistem
----- db.js konfigurasi koneksiserver ke database  

routes
menentukan endpoint api dan mengarahkan request ke controller yang sesuai (GET, POST, dll)

controllers
penanganan request dari client dan menentukan response yang dikirimkan kembali
Menerima request.
Mengambil parameter atau data dari request.
Memanggil service.
Mengirim response dengan status HTTP dan format JSON.

services 
logika bisnis
product.service.js
Memastikan harga produk tidak negatif.
Memastikan stok tidak negatif.
Memastikan data memenuhi aturan sebelum disimpan.
Mengatur proses bisnis yang diperlukan sebelum memanggil repository.

repositories
Tugas repository:
- Menjalankan SELECT.
- Menjalankan INSERT.
- Menjalankan UPDATE.
- Menjalankan DELETE.


Tempat menyimpan fungsi-fungsi umum yang bisa digunakan di beberapa bagian aplikasi.
Contohnya:
- Format response JSON.
- Membuat helper untuk parsing request body.
- Fungsi validasi umum.
- Helper penanganan error.
Bedanya dengan services: utils berisi alat bantu umum, bukan aturan bisnis produk.

app.js
File ini bertugas menggabungkan dan mengatur komponen utama aplikasi.
Contohnya:
- Mengimpor routes.
- Mengatur handler request.
- Menghubungkan routing dengan server HTTP.
Dalam proyek kita yang memakai node:http, nantinya app.js bisa mengekspor handler aplikasi untuk digunakan oleh server.js.