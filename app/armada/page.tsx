"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";
import { ARMADA, SITE_CONFIG } from "@/lib/data";

const FILTERS = ["Semua", "MPV", "SUV", "City Car", "Premium", "Mini-bus"];

export default function ArmadaPage() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.phone.replace(/[^0-9]/g, "")}?text=Halo%20Joe%20Rental,%20saya%20mau%20booking%20mobil`;

  // Filter armada berdasarkan type
  const filteredArmada = activeFilter === "Semua" 
    ? ARMADA 
    : ARMADA.filter(car => {
        if (activeFilter === "Premium") return car.type.includes("Premium");
        return car.type === activeFilter;
      });

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
                  <span className="jr-eyebrow">Armada</span>
                </div>
                <h1 className="jr-h1 text-5xl lg:text-6xl text-white">
                  Mobil yang Siap Dipakai
                </h1>
              </div>
              <p className="jr-body text-base lg:text-lg pb-2">
                Semua armada dicek tiap kali keluar pool. Bersih, wangi, dan
                dilengkapi driver yang ngerti Bandung.
              </p>
            </div>
          </div>
        </section>

        {/* Filters & Grid */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-20">
            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-jr-line mb-8 lg:mb-12">
              <div className="flex flex-wrap gap-2">
                {FILTERS.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`h-9 px-4 rounded-full font-body text-sm font-semibold transition-all ${
                      activeFilter === filter
                        ? "bg-white text-jr-black border border-white"
                        : "bg-transparent text-white/85 border border-jr-line-strong hover:border-jr-gold"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-jr-muted tracking-[0.12em]">
                  {filteredArmada.length} UNIT TERSEDIA
                </span>
              </div>
            </div>

            {/* Armada Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArmada.map((car, index) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-jr-black-3 border border-jr-line rounded-lg overflow-hidden hover:border-jr-gold transition-all duration-300"
                >
                  {/* Car Image */}
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={car.img}
                      alt={car.name}
                      fill
                      className="object-cover"
                    />
                    {car.tag && (
                      <div className="absolute top-3 left-3 bg-jr-gold/90 text-jr-black px-3 py-1.5 rounded text-xs font-head font-bold">
                        {car.tag}
                      </div>
                    )}
                  </div>

                  {/* Car Details */}
                  <div className="p-5 space-y-4">
                    <div>
                      <div className="font-mono text-[10px] text-jr-gold tracking-[0.14em] mb-2">
                        {car.type.toUpperCase()} · {car.seats.toUpperCase()}
                      </div>
                      <h3 className="jr-h3 text-lg text-white mb-1">{car.name}</h3>
                    </div>

                    <div className="flex items-baseline gap-1.5">
                      <span className="font-head font-extrabold text-xl text-white">
                        {car.price}
                      </span>
                      <span className="font-body text-xs text-jr-muted">{car.per}</span>
                    </div>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="jr-btn-red h-11 w-full text-sm"
                    >
                      <MessageCircle size={14} />
                      Booking
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
