"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle, Mail, MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { CONTACT_INFO, SITE_CONFIG } from "@/lib/data";

export default function KontakPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, integrate with form service or API
    alert("Form submitted! (Integration coming soon)");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="border-b border-jr-line py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-20">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-end">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="jr-rule-gold" />
                  <span className="jr-eyebrow">Kontak</span>
                </div>
                <h1 className="jr-h1 text-5xl lg:text-6xl text-white">
                  Mau Bicara? Kami Siap Bantu.
                </h1>
              </div>
              <p className="jr-body text-base lg:text-lg pb-2">
                Cara tercepat: WhatsApp. Lebih nyaman email atau telepon? Sama saja,
                semua kami pantau.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-20">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16">
              {/* Left Column - Contact Info */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="jr-rule-gold" />
                    <span className="jr-eyebrow">Channel Resmi</span>
                  </div>
                  <h2 className="jr-h2 text-3xl lg:text-4xl text-white mb-8">
                    Pilih Cara yang<br />Paling Pas Buat Kamu
                  </h2>
                </motion.div>

                {/* Contact Methods */}
                <div className="space-y-0">
                  {CONTACT_INFO.map((contact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="grid grid-cols-[48px_1fr_auto] gap-4 items-center py-6 border-t border-jr-line last:border-b"
                    >
                      <div className="w-12 h-12 rounded border border-jr-gold-soft bg-jr-gold-soft/10 flex items-center justify-center">
                        {index === 0 && <MessageCircle size={18} className="text-jr-gold" />}
                        {index === 1 && <Phone size={18} className="text-jr-gold" />}
                        {index === 2 && <Mail size={18} className="text-jr-gold" />}
                        {index === 3 && <MapPin size={18} className="text-jr-gold" />}
                      </div>
                      <div>
                        <div className="font-mono text-[10px] text-jr-muted-2 tracking-[0.16em] mb-1">
                          {contact.label.toUpperCase()}
                        </div>
                        <div className="font-head font-bold text-base text-white mb-1">
                          {contact.value}
                        </div>
                        <div className="jr-body text-xs">{contact.note}</div>
                      </div>
                      {contact.link !== "#" && (
                        <a
                          href={contact.link}
                          target={contact.link.startsWith("http") ? "_blank" : undefined}
                          rel={contact.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="font-mono text-[11px] text-jr-gold tracking-[0.14em] flex items-center gap-2 hover:gap-3 transition-all"
                        >
                          OPEN
                          <ArrowRight size={11} />
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Operating Hours */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-8 bg-jr-black-3 border border-jr-line rounded-lg p-6 flex gap-4"
                >
                  <Clock size={20} className="text-jr-gold flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="font-head font-bold text-white mb-3">
                      Jam Operasional
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between gap-4">
                        <span className="jr-body">Senin – Minggu</span>
                        <span className="text-white font-semibold">
                          {SITE_CONFIG.operasional.senin_minggu}
                        </span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="jr-body">Driver standby</span>
                        <span className="text-white font-semibold">
                          {SITE_CONFIG.operasional.driver_standby}
                        </span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="jr-body">Booking dini hari</span>
                        <span className="text-white font-semibold">
                          {SITE_CONFIG.operasional.booking_dini_hari}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-jr-black-3 border border-jr-line rounded-lg p-8 lg:p-10"
              >
                <div className="font-mono text-[11px] text-jr-gold tracking-[0.16em] mb-2">
                  FORMULIR KONTAK
                </div>
                <h3 className="jr-h3 text-2xl lg:text-3xl text-white mb-2">
                  Mau ditelpon balik?
                </h3>
                <p className="jr-body text-sm mb-8">
                  Isi singkat-singkat saja. Kami akan hubungi sesuai waktu yang kamu pilih.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-sm text-white mb-2">
                        Nama
                      </label>
                      <input
                        type="text"
                        placeholder="Cth. Andi Pratama"
                        required
                        className="w-full h-11 px-4 bg-jr-black-2 border border-jr-line rounded text-white placeholder:text-jr-muted-2 focus:border-jr-gold outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm text-white mb-2">
                        Nomor WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="0812-3456-7890"
                        required
                        className="w-full h-11 px-4 bg-jr-black-2 border border-jr-line rounded text-white placeholder:text-jr-muted-2 focus:border-jr-gold outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-sm text-white mb-2">
                      Layanan yang Diminati
                    </label>
                    <select
                      required
                      className="w-full h-11 px-4 bg-jr-black-2 border border-jr-line rounded text-white focus:border-jr-gold outline-none transition-colors"
                    >
                      <option value="">Pilih layanan</option>
                      <option value="Dengan Driver">Dengan Driver</option>
                      <option value="Lepas Kunci">Lepas Kunci</option>
                      <option value="City Tour">City Tour</option>
                      <option value="Airport Transfer">Airport Transfer</option>
                      <option value="Wedding Car">Wedding Car</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-sm text-white mb-2">
                        Tanggal Mulai
                      </label>
                      <input
                        type="text"
                        placeholder="12 Mei 2026"
                        className="w-full h-11 px-4 bg-jr-black-2 border border-jr-line rounded text-white placeholder:text-jr-muted-2 focus:border-jr-gold outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm text-white mb-2">
                        Durasi
                      </label>
                      <input
                        type="text"
                        placeholder="3 hari"
                        className="w-full h-11 px-4 bg-jr-black-2 border border-jr-line rounded text-white placeholder:text-jr-muted-2 focus:border-jr-gold outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-sm text-white mb-2">
                      Catatan Tambahan (opsional)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Ada kebutuhan khusus? Kasih tau di sini..."
                      className="w-full px-4 py-3 bg-jr-black-2 border border-jr-line rounded text-white placeholder:text-jr-muted-2 focus:border-jr-gold outline-none transition-colors resize-none"
                    />
                  </div>

                  <button type="submit" className="jr-btn-red h-12 w-full">
                    Kirim Pesan
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 lg:py-20 bg-jr-black-2">
          <div className="max-w-7xl mx-auto px-6 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden border border-jr-line"
            >
              <iframe
                src={SITE_CONFIG.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
