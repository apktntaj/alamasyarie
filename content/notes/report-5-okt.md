## Laporan Pekerjaan Hari Ini

### 1. Koneksi dan pemulihan database

- Memulihkan implementasi database Supabase PostgreSQL yang sebelumnya sudah dikembangkan.
- Menghubungkan aplikasi Next.js ke Supabase.
- Mengaktifkan kembali penyimpanan data event, job, pengguna, dan attachment.
- Memastikan autentikasi menggunakan akun dari database, bukan akun demo.
- Memperbaiki script pembuatan user agar sesuai dengan struktur database terbaru.
- Membuat dan memverifikasi akun administrator.
- Mengamankan kredensial agar tidak ikut tersimpan di repository.
- Memastikan aplikasi berhasil melewati type checking, domain test, dan production build.
- Memastikan aplikasi berhasil dijalankan di Vercel dan dapat login menggunakan akun database.

### 2. Riset infrastruktur

Mengevaluasi beberapa pilihan infrastruktur untuk aplikasi internal perusahaan:

- Vercel;
- VPS;
- Tailscale;
- WireGuard;
- Cloudflare Tunnel dan Cloudflare Access;
- penggunaan hostname/domain dibandingkan raw IP;
- rencana PostgreSQL self-hosted di masa depan.

### 3. Kesimpulan

Untuk tahap validasi workflow saat ini:

```text
Next.js di Vercel
+ Supabase PostgreSQL dan Storage
```

Untuk tahap selanjutnya yang lebih hemat dan sesuai kebutuhan internal:

```text
Next.js di VPS
+ Cloudflare Tunnel
+ Cloudflare Access
+ Supabase PostgreSQL dan Storage
```

Database dan Storage belum perlu dipindahkan dari Supabase. Fokus berikutnya adalah memvalidasi workflow aplikasi sebelum melakukan migrasi database atau menambah kompleksitas infrastruktur.
