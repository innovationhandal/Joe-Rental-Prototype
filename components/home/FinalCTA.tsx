"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

const BOOKING_STEPS = [
  { title: "Pilih armada", desc: "Lihat ketersediaan & harga" },
  { title: "Chat WhatsApp", desc: "Konfirmasi tanggal & lokasi" },
  { title: "Driver standby", desc: "Tepat waktu, no drama" },
];

export default function FinalCTA() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.phone.replace(/[^0-9]/g, "")}?text=Halo%20Joe%20Rental,%20saya%20mau%20booking%20mobil`;

  return (
    <section className="bg-jr-black-2 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 justify-center mb-6">
              <span className="jr-rule-gold" />
              <span className="jr-eyebrow">Booking</span>
            </div>
            <h2 className="jr-h2 text-4xl lg:text-5xl text-white mb-4">
              Butuh Mobil <span className="text-jr-gold">Sekarang?</span>
            </h2>
            <p className="jr-body text-base lg:text-lg mb-8">
              Chat kami di WhatsApp, biasanya langsung dibalas.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="jr-btn-red h-14 text-base inline-flex"
            >
              <MessageCircle size={16} />
              Booking Sekarang
            </a>
          </motion.div>

          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 bg-jr-black-3 border border-jr-line rounded-lg p-8"
          >
            <div className="font-mono text-[10px] text-jr-gold tracking-[0.16em] mb-6">
              RESPONS RATA-RATA · 5 MENIT
            </div>
            
            <div className="space-y-6">
              {BOOKING_STEPS.map((step, index) => (
                <div
                  key={index}
                  className={`flex gap-4 items-start text-left ${
                    index > 0 ? "pt-6 border-t border-jr-line" : ""
                  }`}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-jr-gold text-jr-gold flex items-center justify-center font-head font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-head font-bold text-white text-base mb-1">
                      {step.title}
                    </div>
                    <div className="jr-body text-sm">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
