# Joe Rental Mobil - Website Company Profile

Website company profile untuk Joe Rental Mobil Bandung yang dibuat dengan Next.js 14, TypeScript, Tailwind CSS, dan Framer Motion.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📋 Sebelum Deploy

### Langkah Penting - Update Data Anda!

Buka file `lib/data.ts` dan ganti placeh older berikut dengan data Anda yang sebenarnya:

```typescript
export const SITE_CONFIG = {
  phone: "+62 812-2345-6789", // ⚠️ GANTI dengan nomor WhatsApp aktual Anda
  phoneDisplay: "0812-2345-6789", // ⚠️ GANTI dengan format display
  email: "halo@joegarage.id", // ⚠️ GANTI dengan email aktual
  address: "Jl. Pasirkaliki No. 88, Bandung", // ⚠️ GANTI dengan alamat pool
  telepon: "022-1234-5678", // ⚠️ GANTI dengan nomor telepon
  
  // ⚠️ GANTI dengan URL Google Maps Embed lokasi pool Anda
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=...",
};
```

**Cara Mendapatkan Google Maps Embed URL:**
1. Buka Google Maps
2. Cari lokasi pool Anda
3. Klik "Share" > "Embed a map"
4. Copy URL yang ada di `src="..."` dan paste ke `mapsEmbedUrl`

## 💻 Development Local

### Install Dependencies

```bash
npm install
```

### Jalankan Development Server

```bash
npm run dev
```

Website akan berjalan di `http://localhost:3000`

### Build untuk Production

```bash
npm run build
npm start
```

## 🌐 Deploy ke Vercel (Recommended)

### Opsi 1: Deploy via GitHub

1. **Push ke GitHub Repository Anda:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Joe Rental website"
   git branch -M main
   git remote add origin https://github.com/username/joe-rental.git
   git push -u origin main
   ```

2. **Deploy di Vercel:**
   - Buka [vercel.com](https://vercel.com)
   - Login dengan GitHub
   - Klik "New Project"
   - Import repository joe-rental Anda
   - Vercel akan otomatis detect Next.js dan deploy

### Opsi 2: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

## 📁 Struktur Folder

```
joe-rental/
├── app/
│   ├── armada/          # Halaman daftar armada
│   ├── layanan/         # Halaman daftar layanan
│   │   └── [slug]/      # Detail layanan (dynamic route)
│   ├── kontak/          # Halaman kontak
│   ├── layout.tsx       # Root layout dengan fonts
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/
│   ├── home/            # Komponen untuk homepage
│   ├── Header.tsx       # Navigation header
│   └── Footer.tsx       # Footer
├── lib/
│   └── data.ts          # ⚠️ Data website (EDIT INI!)
├── public/
│   └── images/          # Logo dan gambar statis
└── package.json
```

## 🎨 Customization

### Menambah Armada Baru

Edit `lib/data.ts` di bagian `ARMADA`:

```typescript
{
  id: 13,
  name: "Toyota Fortuner VRZ",
  type: "SUV",
  seats: "7 seats",
  price: "Rp 1.5jt",
  per: "/ hari + driver",
  tag: "Populer",
  img: "https://images.unsplash.com/photo-xxx", // URL dari Unsplash
}
```

### Menambah Layanan Baru

Edit `lib/data.ts` di bagian `SERVICES` dengan struktur yang sama.

### Mengubah Warna

Edit `tailwind.config.ts` di bagian `colors`:

```typescript
colors: {
  jr: {
    gold: "#D5A651", // Ganti dengan warna yang Anda mau
    red: "#D71920",   // Ganti dengan warna CTA Anda
    // ...
  }
}
```

## 📱 Features

- ✅ Fully responsive (mobile & desktop)
- ✅ Smooth animations dengan Framer Motion
- ✅ SEO optimized
- ✅ Fast page loads dengan Next.js 14
- ✅ Google Maps integration
- ✅ WhatsApp direct booking
- ✅ Dynamic service pages
- ✅ Filter armada by type
- ✅ Contact form ready

## 🔧 Environment Variables (Optional)

Jika Anda ingin menambahkan Google Analytics atau tracking:

Buat file `.env.local`:

```
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
```

Kemudian tambahkan script di `app/layout.tsx`.

## 📞 Support

Jika ada pertanyaan atau butuh bantuan, silakan hubungi developer.

## 📝 License

© 2026 Joe Rental Mobil. All rights reserved.
