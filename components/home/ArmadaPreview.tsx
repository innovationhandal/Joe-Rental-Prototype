"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight, Users, Fuel } from "lucide-react";
import { ARMADA, SITE_CONFIG } from "@/lib/data";

export default function ArmadaPreview() {
  const featuredArmada = ARMADA.slice(0, 3);
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.phone.replace(/[^0-9]/g, "")}?text=Halo%20Joe%20Rental,%20saya%20mau%20booking%20mobil`;

  return (
    <section className="section-py-lg bg-jr-black-2">
      <div className="container-fluid">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="jr-rule-gold" />
            <span className="jr-eyebrow">Armada</span>
          </div>
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <h2 className="jr-h2 text-4xl lg:text-5xl text-white">
                Mobil yang Siap Dipakai,<br />Bukan Sekadar Dipajang
              </h2>
            </div>
            <div className="lg:col-span-5 flex items-end">
              <p className="jr-body text-lg lg:text-xl">
                Setiap unit dicek sebelum keluar pool. Bersih, wangi, dan siap jalan.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Armada Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArmada.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="jr-card h-full">
                {/* Car Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={car.img}
                    alt={car.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Tag */}
                  {car.tag && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="px-4 py-2 rounded-full bg-jr-gold text-jr-black font-head font-bold text-xs tracking-wide backdrop-blur-sm shadow-lg">
                        {car.tag}
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-jr-black-3/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Car Details */}
                <div className="p-6 space-y-5">
                  {/* Type Badge */}
                  <div className="flex items-center justify-between">
                    <div className="px-3 py-1.5 rounded-full bg-jr-gold-softer border border-jr-gold-soft">
                      <span className="font-mono text-[10px] text-jr-gold tracking-[0.16em] uppercase">
                        {car.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-jr-muted-2">
                      <Users size={14} />
                      <span className="font-mono text-xs">{car.seats}</span>
                    </div>
                  </div>
                  
                  {/* Name */}
                  <h3 className="jr-h3 text-xl text-white group-hover:text-jr-gold transition-colors">
                    {car.name}
                  </h3>

                  {/* Divider */}
                  <div className="jr-divider" />

                  {/* Price & CTA */}
                  <div className="space-y-4">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <div className="font-head font-extrabold text-2xl text-white leading-none">
                          {car.price}
                        </div>
                        <div className="font-body text-sm text-jr-muted mt-1">
                          {car.per}
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-jr-muted-2">
                        <Fuel size={14} />
                        <span className="font-mono text-xs">Include</span>
                      </div>
                    </div>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="jr-btn-red h-12 w-full text-sm group/btn"
                    >
                      <MessageCircle size={16} className="group-hover/btn:scale-110 transition-transform" />
                      Booking Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link href="/armada" className="jr-btn-ghost h-14 inline-flex px-8 text-base">
            Lihat Semua Armada
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
