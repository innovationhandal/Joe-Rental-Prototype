export const SITE_CONFIG = {
  name: "Joe Rental Mobil",
  phone: "+62 812-2345-6789",
  phoneDisplay: "0812-2345-6789",
  email: "halo@joegarage.id",
  address: "Jl. Terusan Cigadung No.18, Sekeloa, Kecamatan Coblong, Kota Bandung, Jawa Barat 40134",
  telepon: "022-1234-5678",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126744.92468624233!2d107.56126810727584!3d-6.917016855119198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e776da80754b%3A0xbeaa6da3abd6cc34!2sJOE%20Rental%20mobil%20%26%20City%20Tour%20Bandung!5e0!3m2!1sid!2sid!4v1778229769197!5m2!1sid!2sid",
  stats: {
    tahunDiBandung: "12",
    jumlahArmada: "40+",
    rating: "4.9",
    totalUlasan: "320+",
  },
  operasional: {
    senin_minggu: "Buka 24 jam",
    driver_standby: "06.00 – 23.00",
    booking_dini_hari: "Min. 4 jam sebelumnya",
  },
};

export const CONTACT_INFO = [
  {
    label: "WhatsApp",
    value: "+62 812-2345-6789",
    note: "Response time: < 5 menit (jam kerja)",
    link: "https://wa.me/6281223456789",
  },
  {
    label: "Telepon",
    value: "022-1234-5678",
    note: "Senin – Minggu, 06.00 – 23.00",
    link: "tel:+62221234567",
  },
  {
    label: "Email",
    value: "halo@joegarage.id",
    note: "Response time: < 24 jam",
    link: "mailto:halo@joegarage.id",
  },
  {
    label: "Alamat Pool",
    value: "Jl. Pasirkaliki No. 88, Bandung",
    note: "Buka 24 jam, silakan mampir kapan saja",
    link: "#",
  },
];

export const ARMADA = [
  { id: 1, name: "Toyota Innova Reborn", type: "MPV", seats: "7 seats", price: "Rp 750k", per: "/ hari + driver", tag: "Populer", img: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80" },
  { id: 2, name: "Toyota Alphard", type: "Premium MPV", seats: "6 seats", price: "Rp 2.4jt", per: "/ hari + driver", tag: "Wedding", img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80" },
  { id: 3, name: "Toyota Fortuner", type: "SUV", seats: "7 seats", price: "Rp 1.2jt", per: "/ hari + driver", tag: null, img: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80" },
  { id: 4, name: "Mitsubishi Pajero Sport", type: "SUV", seats: "7 seats", price: "Rp 1.3jt", per: "/ hari + driver", tag: null, img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80" },
  { id: 5, name: "Honda Brio", type: "City Car", seats: "5 seats", price: "Rp 350k", per: "/ hari (lepas kunci)", tag: "Lepas Kunci", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80" },
  { id: 6, name: "Toyota Hiace Premio", type: "Mini-bus", seats: "14 seats", price: "Rp 1.5jt", per: "/ hari + driver", tag: null, img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80" },
  { id: 7, name: "Toyota Avanza", type: "MPV", seats: "7 seats", price: "Rp 450k", per: "/ hari + driver", tag: null, img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80" },
  { id: 8, name: "Daihatsu Xenia", type: "MPV", seats: "7 seats", price: "Rp 400k", per: "/ hari (lepas kunci)", tag: "Lepas Kunci", img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80" },
  { id: 9, name: "Toyota Voxy", type: "Premium MPV", seats: "8 seats", price: "Rp 1.8jt", per: "/ hari + driver", tag: null, img: "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80" },
  { id: 10, name: "Honda HR-V", type: "Crossover", seats: "5 seats", price: "Rp 650k", per: "/ hari + driver", tag: null, img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80" },
  { id: 11, name: "Toyota Rush", type: "SUV", seats: "7 seats", price: "Rp 600k", per: "/ hari + driver", tag: null, img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80" },
  { id: 12, name: "Daihatsu Sigra", type: "MPV", seats: "7 seats", price: "Rp 380k", per: "/ hari (lepas kunci)", tag: "Lepas Kunci", img: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80" },
];

export const SERVICES = [
  {
    id: "driver", num: "01", name: "Dengan Driver", slug: "dengan-driver", 
    copy: "Duduk santai, biar kami yang urus jalan.", img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    eyebrow: "Layanan · 01", sub: "Duduk santai, biar kami yang urus jalan. Driver berpengalaman, ngerti Bandung luar-dalam.",
    intro: "Cocok kalau kamu mau fokus ke tujuan — entah trip keluarga, urusan kantor, atau jemputan tamu. Driver kami bukan sekedar nyetir; mereka tahu shortcut, jam macet, dan tempat parkir tiap area di Bandung.",
    starts: "Rp 750.000", pricePer: "/ hari (8 jam)",
    items: [
      { t: "BBM include 100 km/hari", c: "Lebih dari itu? Tinggal top-up sesuai pemakaian." },
      { t: "Driver siap dari pagi", c: "Standby jam berapapun yang kamu butuhkan, sesuai kesepakatan." },
      { t: "Air mineral free", c: "Selalu ada di setiap unit, tanpa charge tambahan." },
      { t: "Asuransi all-risk", c: "Tenang, semua mobil kami diasuransi penuh." },
    ],
    process: ["Chat WhatsApp, kasih tau tanggal & rute", "Kami konfirmasi unit & driver dalam 15 menit", "Driver standby di lokasi pickup, tepat waktu", "Selesai trip, bayar via transfer atau cash"],
    faqs: [
      { q: "Apakah harga sudah termasuk BBM?", a: "Sudah, sampai 100 km/hari. Lebih dari itu, top-up bensin saja." },
      { q: "Bisa untuk luar kota?", a: "Bisa. Ada penyesuaian harga + uang makan driver. Chat untuk hitung detail." },
      { q: "Berapa jam minimum sewa?", a: "Minimum 8 jam (1 hari kerja). Kalau perlu lebih singkat, bisa bicarain langsung." },
    ],
  },
  {
    id: "selfdrive", num: "02", name: "Lepas Kunci", slug: "lepas-kunci",
    copy: "Butuh fleksibel? Jalan sendiri.", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    eyebrow: "Layanan · 02", sub: "Butuh fleksibel? Bawa sendiri. Kami siapkan unit, kamu bawa kemana saja.",
    intro: "Buat yang mau bebas atur waktu sendiri. Persyaratannya simpel: KTP, SIM A aktif, dan jaminan. Mobil dalam kondisi prima, bensin penuh, siap jalan begitu kamu pegang kunci.",
    starts: "Rp 350.000", pricePer: "/ hari (24 jam)",
    items: [
      { t: "Tanpa driver, bebas atur jadwal", c: "Pickup pagi, balikin pagi keesokan harinya." },
      { t: "Mobil bensin penuh saat ambil", c: "Saat balik, isi bensin sesuai kondisi awal." },
      { t: "Persyaratan: KTP + SIM A", c: "Plus jaminan (KTP/passport/jaminan lain sesuai kesepakatan)." },
      { t: "Asuransi sudah include", c: "Tenang kalau ada hal-hal di luar dugaan di jalan." },
    ],
    process: ["Chat, sebutkan tipe mobil & tanggal", "Kirim foto KTP + SIM A untuk verifikasi", "Datang ke pool, isi form, bayar DP", "Kunci di tangan, mobil siap jalan"],
    faqs: [
      { q: "Apa saja syarat sewa lepas kunci?", a: "KTP, SIM A aktif, dan jaminan (bisa KTP keluarga, kartu kerja, atau jaminan lain)." },
      { q: "Boleh bawa keluar kota?", a: "Boleh, asal disampaikan saat booking. Untuk wilayah tertentu ada penyesuaian." },
      { q: "Kalau mobil lecet?", a: "Asuransi cover kerusakan major. Untuk lecet kecil, ada deposit yang akan dievaluasi saat balik." },
    ],
  },
  {
    id: "tour", num: "03", name: "City Tour", slug: "city-tour",
    copy: "Nggak perlu mikir rute.", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    eyebrow: "Layanan · 03", sub: "Nggak perlu mikir rute. Kami siapkan paket wisata Bandung — kamu tinggal nikmatin.",
    intro: "Buat yang baru pertama atau mau eksplor Bandung lebih dalam. Driver kami juga jadi tour guide — kasih rekomendasi tempat makan, kapan ke Lembang, kapan turun ke kota. Tinggal pilih paket, sisanya kami yang atur.",
    starts: "Rp 850.000", pricePer: "/ hari (10 jam)",
    items: [
      { t: "Rute fleksibel", c: "Bisa custom sesuai keinginan, atau pakai rute populer kami." },
      { t: "Driver merangkap guide", c: "Tahu cerita & sejarah tempat-tempat ikonik Bandung." },
      { t: "Sudah include parkir", c: "Tiket masuk wisata terpisah — kami bantu booking." },
      { t: "Snack & air gratis", c: "Cocok untuk trip sambil ngemil tipis-tipis." },
    ],
    process: ["Pilih paket: Lembang · Kota Tua · Selatan · Custom", "Diskusi tanggal & jumlah orang via WhatsApp", "Mobil + driver standby di hotel/lokasi", "Tinggal nikmatin, kami yang atur logistik"],
    faqs: [
      { q: "Paket apa saja yang ada?", a: "Lembang & Sekitarnya, Bandung Kota Tua, Selatan (Pengalengan/Ciwidey), atau Custom Sesuai Permintaan." },
      { q: "Berapa lama biasanya?", a: "Paket standar 10 jam (08.00–18.00). Bisa diperpanjang dengan tambahan biaya per jam." },
      { q: "Tiket masuk wisata gimana?", a: "Tiket masuk lokasi terpisah dari biaya rental. Kami bantu booking di awal." },
    ],
  },
  {
    id: "airport", num: "04", name: "Airport Transfer", slug: "airport-transfer",
    copy: "Ke bandara tanpa deg-degan.", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    eyebrow: "Layanan · 04", sub: "Ke bandara tanpa deg-degan. Driver standby tepat waktu — Husein atau BDO.",
    intro: "Penerbangan pagi yang bikin tegang? Atau baru landing dan capek banget? Kami jemput tepat waktu, bawa ke hotel atau rumah, tanpa drama. Sekali jalan, harga flat, no kejutan.",
    starts: "Rp 350.000", pricePer: "/ trip (one-way)",
    items: [
      { t: "Harga flat, no surge", c: "Tarif tetap entah jam berapa, weekday atau weekend." },
      { t: "Driver standby 30 menit sebelum", c: "Kalau pesawatmu delay, kami juga nunggu — gratis." },
      { t: "Husein atau BDO (Kertajati)", c: "Kedua bandara, kami bisa bantu antar/jemput." },
      { t: "24 jam, termasuk dini hari", c: "Booking minimal 4 jam sebelumnya untuk slot dini hari." },
    ],
    process: ["Chat, kasih detail penerbangan (tanggal, jam, no. flight)", "Konfirmasi harga & lokasi pickup/drop", "Driver kirim foto & nomor mobil H-1", "Driver standby di titik jemput, on time"],
    faqs: [
      { q: "Kalo pesawat delay gimana?", a: "Driver nunggu tanpa charge tambahan. Kabar aja kalau delay, kami monitor flight status." },
      { q: "Biaya tol & parkir gimana?", a: "Semua sudah include dalam harga flat." },
      { q: "Bisa booking H-1 atau dadakan?", a: "Bisa, selama ada slot. Tapi untuk dini hari, usahakan minimal 4 jam sebelumnya." },
    ],
  },
  {
    id: "wedding", num: "05", name: "Wedding Car", slug: "wedding-car",
    copy: "Tampil elegan.", img: "https://images.unsplash.com/photo-1519167758481-83f29da8ea07?w=800&q=80",
    eyebrow: "Layanan · 05", sub: "Tampil elegan di hari spesial. Alphard & Vellfire yang kami poles khusus buat wedding.",
    intro: "Hari pernikahanmu cuma sekali (hopefully). Kami siapkan mobil yang bersih, wangi, dan berkelas — dengan driver yang rapi dan pengalaman handle acara. Termasuk dekorasi basic (pita, bunga), atau bisa custom sesuai tema.",
    starts: "Rp 2.500.000", pricePer: "/ paket (6 jam)",
    items: [
      { t: "Unit premium: Alphard / Vellfire", c: "Dicuci & dipoles khusus pagi harinya." },
      { t: "Dekorasi basic included", c: "Pita & rangkaian bunga. Custom? Bicarain aja." },
      { t: "Driver rapi & experienced", c: "Paham flow acara, tahu kapan foto, kapan bergerak." },
      { t: "Dokumentasi di dalam mobil", c: "Gratis foto beberapa angle dari driver (informal)." },
    ],
    process: ["Chat, kasih detail tanggal & lokasi acara", "Pilih unit & konfirmasi dekorasi", "Survey lokasi 1 hari sebelumnya (opsional)", "Mobil standby di pagi akad, siap bergerak"],
    faqs: [
      { q: "Bisa custom dekorasi?", a: "Bisa, tapi perlu koordinasi dengan dekorator. Biaya terpisah." },
      { q: "Durasi lebih dari 6 jam?", a: "Bisa, ada biaya tambahan per jam. Diskusi pas booking." },
      { q: "Boleh untuk gedung atau outdoor?", a: "Bisa keduanya. Kalau outdoor, kita cek akses kendaraan dulu." },
    ],
  },
];

export const TESTIMONIALS = [
  { id: 1, name: "Rina Permatasari", role: "Family Trip · Lembang", text: "Kami rent Innova buat acara keluarga ke Lembang. Mobilnya bersih, driver ramah dan ngasih rekomendasi tempat makan enak. Harga juga oke, nggak nyesel.", rating: 5 },
  { id: 2, name: "Budi Santoso", role: "Airport Transfer · Husein", text: "Flight pagi jam 5, driver udah standby dari jam 3. Langsung berangkat tepat waktu, sampe bandara 45 menit sebelum boarding. Rekomen!", rating: 5 },
  { id: 3, name: "Maya & Rizki", role: "Wedding Car · Alphard", text: "Terima kasih Joe Rental! Alphard nya keren, drivernya pengalaman banget handle wedding. Dekorasi bunga juga cantik. Foto-fotonya bagus semua.", rating: 5 },
];
