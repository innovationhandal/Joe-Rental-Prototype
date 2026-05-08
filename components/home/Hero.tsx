"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight, Star, TrendingUp, Shield, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

const TRUST_BADGES = [
  { icon: TrendingUp, label: "12 Tahun Beroperasi" },
  { icon: Shield, label: "Asuransi All-Risk" },
  { icon: Clock, label: "Respon 5 Menit" },
];

export default function Hero() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.phone.replace(/[^0-9]/g, "")}?text=Halo%20Joe%20Rental,%20saya%20mau%20booking%20mobil`;

  return (
    <section className="relative section-py-xl border-b border-jr-line-strong overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-jr-black via-jr-black-2/50 to-jr-black pointer-events-none" />
      
      <div className="container-fluid relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text (lg:col-span-6) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <span className="jr-rule-gold" />
              <span className="jr-eyebrow">Rental Mobil · Bandung</span>
            </motion.div>
            
            {/* Heading */}
            <h1 className="jr-h1 text-5xl md:text-6xl lg:text-7xl text-white">
              Rental Mobil Bandung<br />
              yang <span className="text-gradient-gold">Nggak Bikin Ribet</span>
            </h1>
            
            {/* Description */}
            <p className="jr-body text-lg lg:text-xl max-w-2xl leading-relaxed">
              Mau jalan santai, urusan kerja, atau acara spesial — semua kami handle
              dengan mobil bersih & driver yang ngerti Bandung.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="jr-btn-red h-14 text-base group"
              >
                <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                Booking via WhatsApp
              </a>
              <Link href="/armada" className="jr-btn-ghost h-14 text-base group">
                Lihat Armada
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-8 border-t border-jr-line-strong"
            >
              <div className="grid grid-cols-3 gap-6">
                {TRUST_BADGES.map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-jr-gold-softer border border-jr-gold-soft flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-jr-gold" />
                      </div>
                      <div className="font-mono text-[10px] lg:text-[11px] text-jr-muted-2 tracking-wider uppercase leading-tight">
                        {badge.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-8 lg:gap-12 pt-6"
            >
              <div className="space-y-2">
                <div className="font-head font-extrabold text-4xl lg:text-5xl text-white leading-none">
                  {SITE_CONFIG.stats.tahunDiBandung}
                  <span className="text-jr-gold">.</span>
                </div>
                <div className="font-mono text-[10px] lg:text-[11px] text-jr-muted-2 tracking-[0.14em] uppercase">
                  Tahun di Bandung
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-head font-extrabold text-4xl lg:text-5xl text-white leading-none">
                  {SITE_CONFIG.stats.jumlahArmada}
                  <span className="text-jr-gold">.</span>
                </div>
                <div className="font-mono text-[10px] lg:text-[11px] text-jr-muted-2 tracking-[0.14em] uppercase">
                  Armada siap
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-head font-extrabold text-4xl lg:text-5xl text-white leading-none">
                  {SITE_CONFIG.stats.rating}
                  <span className="text-jr-gold">.</span>
                </div>
                <div className="font-mono text-[10px] lg:text-[11px] text-jr-muted-2 tracking-[0.14em] uppercase">
                  Rating pelanggan
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image (lg:col-span-6) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[4/3] lg:aspect-[5/4]">
              {/* Main Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-jr-line-strong shadow-card group">
                <Image
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80"
                  alt="Luxury car for rent in Bandung"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Floating elements */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Top left badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="absolute top-6 left-6"
                  >
                    <div className="jr-glass rounded-xl px-4 py-2.5 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="font-mono text-xs text-white tracking-wide">
                        AVAILABLE NOW
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Rating Badge - Enhanced */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -left-4 lg:-left-6 bottom-8"
              >
                <div className="jr-glass rounded-2xl p-5 flex gap-4 items-center shadow-card-hover glow-gold">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={16} fill="#D5A651" className="text-jr-gold" />
                    ))}
                  </div>
                  <div className="border-l border-jr-line-strong pl-4">
                    <div className="font-head font-extrabold text-xl text-white leading-none mb-1">
                      {SITE_CONFIG.stats.rating} / 5.0
                    </div>
                    <div className="font-mono text-[10px] text-jr-muted-2 tracking-[0.12em]">
                      {SITE_CONFIG.stats.totalUlasan} ULASAN
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative glow */}
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-jr-gold/10 rounded-full blur-3xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
