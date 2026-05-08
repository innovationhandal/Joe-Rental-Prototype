"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Services() {
  return (
    <section className="section-py-lg bg-jr-black">
      <div className="container-fluid">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="jr-rule-gold" />
            <span className="jr-eyebrow">Layanan</span>
          </div>
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <h2 className="jr-h2 text-4xl lg:text-5xl text-white">
                Tinggal Pilih,<br />Kita Siapkan Perjalanannya
              </h2>
            </div>
            <div className="lg:col-span-5 flex items-end">
              <p className="jr-body text-lg lg:text-xl">
                Dari trip santai sampai acara formal. Semua dengan harga transparan
                dan driver yang profesional.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services Grid - 12 Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-6"
        >
          {SERVICES.map((service, index) => {
            // First 2 cards span 6 cols, rest span 4
            const spanClass = index < 2 ? "lg:col-span-6" : "lg:col-span-4";

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={spanClass}
              >
                <Link
                  href={`/layanan/${service.slug}`}
                  className="jr-card-interactive block h-full min-h-[360px] lg:min-h-[400px] group"
                >
                  {/* Image Background */}
                  <div className="relative h-full rounded-lg overflow-hidden">
                    <Image
                      src={service.img}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-[800ms] ease-out"
                    />
                    
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-jr-black via-jr-black/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
                    
                    {/* Content */}
                    <div className="relative h-full p-8 flex flex-col justify-between">
                      {/* Top */}
                      <div className="flex items-start justify-between">
                        <div className="px-3 py-1.5 rounded-full bg-jr-gold-softer border border-jr-gold-soft backdrop-blur-sm">
                          <span className="font-mono text-[10px] text-jr-gold tracking-[0.2em]">
                            {service.num}
                          </span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-jr-gold-softer border border-jr-gold-soft backdrop-blur-sm flex items-center justify-center group-hover:bg-jr-gold group-hover:border-jr-gold transition-all duration-300">
                          <ArrowUpRight
                            size={18}
                            className="text-jr-gold group-hover:text-jr-black transition-colors"
                          />
                        </div>
                      </div>

                      {/* Bottom */}
                      <div className="space-y-3">
                        <h3 className="jr-h3 text-2xl lg:text-3xl text-white group-hover:text-jr-gold transition-colors duration-300">
                          {service.name}
                        </h3>
                        <p className="jr-body text-base text-white/95 leading-relaxed">
                          {service.copy}
                        </p>
                        
                        {/* Price Tag */}
                        <div className="pt-4 border-t border-white/10 group-hover:border-jr-gold/30 transition-colors">
                          <div className="flex items-baseline gap-2">
                            <span className="font-head font-bold text-sm text-jr-gold">
                              Mulai
                            </span>
                            <span className="font-head font-extrabold text-xl text-white">
                              {service.starts}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/layanan"
            className="inline-flex items-center gap-2 font-head font-semibold text-jr-gold hover:text-jr-gold-hover transition-colors group"
          >
            Lihat Semua Layanan
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
