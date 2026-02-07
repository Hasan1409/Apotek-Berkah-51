# 🏥 Apotek Berkah 51 - Website Apotek Online

Website apotek online lengkap dengan sistem login, verifikasi email, challenge voucher, riwayat pembelian, dan konsultasi WhatsApp.

## 🌟 Fitur Lengkap

### 🔐 Authentication
- ✅ Register dengan email & password
- ✅ Verifikasi email dengan kode 6 digit
- ✅ Login dengan validasi
- ✅ Session management
- ✅ Logout

### 💊 Katalog Produk
- ✅ 44 produk obat lengkap
- ✅ 8 kategori: Demam, Batuk & Flu, Pencernaan, Nyeri, Alergi, Vitamin, Kulit, Mata
- ✅ Filter by category
- ✅ Search & browse

### 🛒 Shopping Cart
- ✅ Add/remove produk
- ✅ Update quantity
- ✅ Real-time total calculation
- ✅ Persistent cart (localStorage)

### 🎁 Challenge & Voucher System
- ✅ 6 challenge berbeda
- ✅ Klaim voucher otomatis
- ✅ Voucher diskon produk
- ✅ Voucher diskon/gratis ongkir
- ✅ Progress tracking
- ✅ Voucher tersimpan & reusable

### 🚚 Delivery System
- ✅ 3 opsi pengiriman (Reguler, Express, Instant)
- ✅ Perhitungan ongkir otomatis
- ✅ Diskon ongkir dengan voucher

### 👤 Profile Management
- ✅ Edit nama, email, password
- ✅ Validasi lengkap
- ✅ Update real-time

### 📜 Purchase History
- ✅ Riwayat pembelian lengkap
- ✅ Detail produk & pembayaran
- ✅ Voucher yang digunakan
- ✅ Total hemat
- ✅ Tanggal & waktu transaksi

### 💬 WhatsApp Consultation
- ✅ Floating button
- ✅ Menu navigasi
- ✅ Modal konfirmasi
- ✅ Auto-fill pesan
- ✅ Direct link ke WhatsApp: +62 857-0660-0737

### 📱 Responsive Design
- ✅ Mobile-friendly
- ✅ Tablet-optimized
- ✅ Desktop-ready
- ✅ Cross-browser compatible

## 📁 Struktur File

```
apotek-berkah-51/
├── auth.html              # Halaman login/register
├── auth.js                # Logic authentication
├── apotek.html            # Halaman utama apotek
├── apotek.js              # Logic apotek & shopping
├── index_apotek.html      # Landing page (redirect)
├── SETUP_EMAIL.md         # Panduan setup email verification
├── DEPLOY_GUIDE.md        # Panduan deploy online
└── README.md              # File ini
```

## 🚀 Cara Menggunakan

### Lokal (Testing)

1. **Download semua file**
2. **Buka `auth.html`** di browser
3. **Register** dengan email apapun
4. **Lihat console (F12)** untuk kode verifikasi
5. **Masukkan kode** dan verifikasi
6. **Mulai belanja!**

### Online (Production)

Lihat panduan lengkap di **[DEPLOY_GUIDE.md](DEPLOY_GUIDE.md)**

**Quick Start dengan GitHub Pages:**
1. Upload semua file ke GitHub repository
2. Aktifkan GitHub Pages di Settings
3. Akses: `https://username.github.io/repo-name/auth.html`

## 🎯 Challenge & Voucher

### Challenge Tersedia:

1. **🛒 Belanja Minimal** (Rp 50.000)
   - Reward: Diskon 10% (max Rp 50.000)

2. **📦 Beli Banyak** (3 item berbeda)
   - Reward: Gratis Ongkir (max Rp 20.000)

3. **⚡ Pembeli Pertama** (Otomatis aktif)
   - Reward: Diskon 15% (max Rp 75.000)

4. **💊 Koleksi Vitamin** (2 produk vitamin)
   - Reward: Diskon Ongkir 50% (max Rp 10.000)

5. **🎁 Belanja Hemat** (Rp 100.000)
   - Reward: Gratis Ongkir (max Rp 20.000)

6. **🌟 Mix & Match** (2 kategori berbeda)
   - Reward: Diskon 12% (max Rp 60.000)

## 📧 Email Verification

### Mode Demo (Default)
- Kode verifikasi muncul di console browser
- Notifikasi menampilkan kode
- Tidak perlu setup apapun

### Mode Production
Lihat panduan lengkap di **[SETUP_EMAIL.md](SETUP_EMAIL.md)**

**Opsi:**
- ElasticEmail (Gratis 100 email/hari)
- Gmail SMTP (Dengan App Password)

## 💬 WhatsApp Consultation

**Nomor:** +62 857-0660-0737

**Jam Operasional:** Senin - Minggu, 08:00 - 21:00

**3 Cara Akses:**
1. Floating button (pojok kanan bawah)
2. Menu "Konsultasi" di navigasi
3. Card "Konsultasi Gratis" di beranda

## 🎨 Teknologi

- **HTML5** - Struktur
- **Tailwind CSS** - Styling (via CDN)
- **JavaScript (Vanilla)** - Logic
- **Font Awesome** - Icons
- **LocalStorage** - Data persistence
- **SMTP.js** - Email sending (opsional)

## 📱 Browser Support

- ✅ Chrome (Desktop & Mobile)
- ✅ Firefox
- ✅ Safari (Desktop & iOS)
- ✅ Edge
- ✅ Opera
- ✅ Samsung Internet

## 🔒 Keamanan

⚠️ **PENTING:** Ini adalah demo untuk pembelajaran.

**Untuk Production:**
- Gunakan backend server (Node.js, PHP, Python)
- Hash password dengan bcrypt/argon2
- Implementasi JWT atau session
- Rate limiting
- Input validation & sanitization
- HTTPS wajib
- Environment variables untuk API keys

## 📊 Data Storage

**LocalStorage Keys:**
- `apotekCurrentUser` - User yang sedang login
- `apotekUsers` - Database user (array)
- `apotekCart` - Keranjang belanja
- `apotekVouchers` - Voucher user
- `apotekPurchases` - Riwayat pembelian

## 🎯 Roadmap

### Future Features:
- [ ] Backend API (Node.js/Express)
- [ ] Database (MongoDB/PostgreSQL)
- [ ] Payment gateway integration
- [ ] Real-time order tracking
- [ ] Push notifications
- [ ] Admin dashboard
- [ ] Product reviews & ratings
- [ ] Wishlist
- [ ] Multiple addresses
- [ ] Prescription upload

## 🐛 Known Issues

- Email verification memerlukan setup SMTP (gunakan demo mode)
- Data tersimpan di localStorage (hilang jika clear browser data)
- Tidak ada backend (semua di frontend)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📄 License

MIT License - Free to use for personal and commercial projects

## 👨‍💻 Developer

Dibuat dengan ❤️ untuk Apotek Berkah 51

## 📞 Support

**WhatsApp:** +62 857-0660-0737

**Email:** aseasemam4@gmail.com

---

## 🎉 Quick Start Guide

### 1. Clone/Download
```bash
git clone https://github.com/username/apotek-berkah-51.git
cd apotek-berkah-51
```

### 2. Open in Browser
```bash
# Buka auth.html di browser
# Atau gunakan live server
```

### 3. Test Features
- Register akun baru
- Verifikasi email (lihat console)
- Belanja produk
- Selesaikan challenge
- Klaim voucher
- Checkout
- Lihat riwayat
- Edit profil
- Konsultasi WhatsApp

### 4. Deploy Online
Lihat **[DEPLOY_GUIDE.md](DEPLOY_GUIDE.md)** untuk panduan lengkap

---

**Happy Coding! 🚀**
