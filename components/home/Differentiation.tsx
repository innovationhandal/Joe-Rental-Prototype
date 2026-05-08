"use client";

import { motion } from "framer-motion";
import { MapPin, CheckCircle2, MessageCircle } from "lucide-react";

const DIFFERENTIATORS = [
  {
    icon: MapPin,
    title: "Driver Ngerti Jalan",
    copy: "Tahu shortcut Bandung, tahu jam macet, tahu tempat makan enak. Lebih dari sekadar sopir, mereka juga navigator lokal yang handal.",
  },
  {
    icon: CheckCircle2,
    title: "Mobil Selalu Dicek",
    copy: "Tiap unit lewat checklist 12 poin sebelum keluar pool. Kebersihan, mesin, AC, audio — semua dipastikan oke.",
  },
  {
    icon: MessageCircle,
    title: "Respon Cepat",
    copy: "Chat masuk dibalas dalam 5 menit. Booking konfirmasi langsung. No waiting, no drama. Tim kami standby untuk Anda.",
  },
];

export default function Differentiation() {
  return (
    <section className="section-py-lg bg-jr-black">
      <div className="container-fluid">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="jr-rule-gold" />
              <span className="jr-eyebrow">Kenapa Joe</span>
            </div>
            <h2 className="jr-h2 text-4xl lg:text-5xl text-white mb-6">
              Kenapa Banyak yang Balik Lagi ke Kami?
            </h2>
            <p className="jr-body text-lg lg:text-xl">
              Bukan sekadar sewa mobil. Kami pastikan perjalanan Anda lancar dari
              awal sampai selesai — dengan detail yang kami perhatikan.
            </p>
          </motion.div>

          {/* Right Column - Differentiators */}
          <div className="lg:col-span-7 space-y-6">
            {DIFFERENTIATORS.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="jr-card group cursor-default">
                    <div className="p-8 lg:p-10 grid grid-cols-[60px_1fr] gap-6 items-start">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-xl bg-jr-gold-softer border border-jr-gold-soft flex items-center justify-center flex-shrink-0 group-hover:bg-jr-gold-soft group-hover:scale-110 transition-all duration-300">
                        <Icon size={24} className="text-jr-gold" />
                      </div>

                      {/* Content */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-4">
                          <div className="font-mono text-xs text-jr-gold tracking-[0.2em]">
                            0{index + 1}
                          </div>
                          <div className="flex-1 h-px bg-jr-line-strong" />
                        </div>
                        <h3 className="jr-h3 text-2xl text-white group-hover:text-jr-gold transition-colors">
                          {point.title}
                        </h3>
                        <p className="jr-body text-base lg:text-lg leading-relaxed">
                          {point.copy}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
