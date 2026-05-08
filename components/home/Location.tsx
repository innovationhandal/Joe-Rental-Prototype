"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

export default function Location() {
  return (
    <section className="bg-jr-black py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="jr-rule-gold" />
            <span className="jr-eyebrow">Lokasi</span>
          </div>
          <h2 className="jr-h2 text-3xl lg:text-4xl text-white">
            Lokasi Kami Jelas, Bukan Fiktif
          </h2>
        </motion.div>

        <div className="mt-12 lg:mt-16 grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-96 lg:h-[400px] rounded-lg overflow-hidden border border-jr-line"
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

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-jr-gold-soft border border-jr-gold-soft flex items-center justify-center">
                <MapPin size={20} className="text-jr-gold" />
              </div>
              <div>
                <div className="font-mono text-[10px] text-jr-muted-2 tracking-[0.16em] mb-2">
                  POOL & OFFICE
                </div>
                <div className="font-head font-bold text-lg text-white mb-1">
                  {SITE_CONFIG.address}
                </div>
                <p className="jr-body text-sm">
                  Buka 24 jam, silakan mampir kapan saja
                </p>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-jr-gold-soft border border-jr-gold-soft flex items-center justify-center">
                <Clock size={20} className="text-jr-gold" />
              </div>
              <div>
                <div className="font-mono text-[10px] text-jr-muted-2 tracking-[0.16em] mb-2">
                  JAM OPERASIONAL
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="jr-body">Senin – Minggu</span>
                    <span className="font-head font-semibold text-white">
                      {SITE_CONFIG.operasional.senin_minggu}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="jr-body">Driver standby</span>
                    <span className="font-head font-semibold text-white">
                      {SITE_CONFIG.operasional.driver_standby}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="jr-body">Booking dini hari</span>
                    <span className="font-head font-semibold text-white">
                      {SITE_CONFIG.operasional.booking_dini_hari}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-jr-gold-soft border border-jr-gold-soft flex items-center justify-center">
                <Phone size={20} className="text-jr-gold" />
              </div>
              <div>
                <div className="font-mono text-[10px] text-jr-muted-2 tracking-[0.16em] mb-2">
                  WHATSAPP
                </div>
                <a
                  href={`https://wa.me/${SITE_CONFIG.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-head font-bold text-lg text-jr-gold hover:text-jr-gold/80 transition-colors"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
                <p className="jr-body text-sm mt-1">
                  Respons rata-rata 5 menit
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
