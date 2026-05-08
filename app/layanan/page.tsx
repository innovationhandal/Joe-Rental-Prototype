"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/data";

export default function LayananPage() {
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
                  <span className="jr-eyebrow">Layanan</span>
                </div>
                <h1 className="jr-h1 text-5xl lg:text-6xl text-white">
                  Tinggal Pilih yang Sesuai Kebutuhan
                </h1>
              </div>
              <p className="jr-body text-base lg:text-lg pb-2">
                Dari trip santai sampai acara formal, kami punya solusinya. Semua
                dengan harga transparan dan driver yang profesional.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {SERVICES.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`/layanan/${service.slug}`}
                    className="group block bg-jr-black-3 border border-jr-line rounded-lg overflow-hidden hover:border-jr-gold transition-all duration-300"
                  >
                    {/* Service Image */}
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={service.img}
                        alt={service.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                      
                      {/* Number Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="font-mono text-[10px] text-jr-gold tracking-[0.16em]">
                          {service.num}
                        </span>
                      </div>
                      
                      {/* Arrow Icon */}
                      <div className="absolute top-4 right-4">
                        <ArrowRight
                          size={16}
                          className="text-white opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                        />
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className="p-6">
                      <h3 className="jr-h3 text-xl text-white mb-2 group-hover:text-jr-gold transition-colors">
                        {service.name}
                      </h3>
                      <p className="jr-body text-sm mb-4">{service.sub}</p>
                      
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-head font-extrabold text-lg text-white">
                          Mulai {service.starts}
                        </span>
                        <span className="font-body text-xs text-jr-muted">
                          {service.pricePer}
                        </span>
                      </div>
                    </div>
                  </Link>
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
