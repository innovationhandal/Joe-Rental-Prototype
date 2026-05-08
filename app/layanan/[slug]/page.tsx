"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle, Check } from "lucide-react";
import { SERVICES, SITE_CONFIG } from "@/lib/data";

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.phone.replace(/[^0-9]/g, "")}?text=Halo%20Joe%20Rental,%20saya%20mau%20booking%20layanan%20${service.name}`;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 border-b border-jr-line overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src={service.img}
              alt={service.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-jr-black via-jr-black/95 to-jr-black" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="jr-rule-gold" />
                <span className="jr-eyebrow">{service.eyebrow}</span>
              </div>
              <h1 className="jr-h1 text-5xl lg:text-6xl text-white mb-6">
                {service.name}
              </h1>
              <p className="jr-body text-lg lg:text-xl mb-8">{service.sub}</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="jr-btn-red h-14 text-base inline-flex"
              >
                <MessageCircle size={16} />
                Booking via WhatsApp
              </a>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-20">
            <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16">
              {/* Left Column - Details */}
              <div className="space-y-12">
                {/* Intro */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="jr-h2 text-2xl lg:text-3xl text-white mb-4">
                    Tentang Layanan Ini
                  </h2>
                  <p className="jr-body text-base lg:text-lg">{service.intro}</p>
                </motion.div>

                {/* Included Items */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="jr-h2 text-2xl lg:text-3xl text-white mb-6">
                    Yang Kamu Dapat
                  </h2>
                  <div className="space-y-6">
                    {service.items.map((item, index) => (
                      <div key={index} className="flex gap-4 items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-jr-gold-soft border border-jr-gold flex items-center justify-center mt-0.5">
                          <Check size={14} className="text-jr-gold" />
                        </div>
                        <div>
                          <h3 className="font-head font-bold text-white text-base mb-1">
                            {item.t}
                          </h3>
                          <p className="jr-body text-sm">{item.c}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Process */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="jr-h2 text-2xl lg:text-3xl text-white mb-6">
                    Cara Booking
                  </h2>
                  <div className="space-y-4">
                    {service.process.map((step, index) => (
                      <div
                        key={index}
                        className="flex gap-4 items-start p-4 bg-jr-black-2 border border-jr-line rounded-lg"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full border border-jr-gold text-jr-gold flex items-center justify-center font-head font-bold text-sm">
                          {index + 1}
                        </div>
                        <p className="jr-body text-sm pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* FAQs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="jr-h2 text-2xl lg:text-3xl text-white mb-6">
                    Pertanyaan Sering Diajukan
                  </h2>
                  <div className="space-y-6">
                    {service.faqs.map((faq, index) => (
                      <div key={index} className="pb-6 border-b border-jr-line last:border-b-0">
                        <h3 className="font-head font-bold text-white text-base mb-2">
                          {faq.q}
                        </h3>
                        <p className="jr-body text-sm">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Sticky Sidebar */}
              <div className="lg:sticky lg:top-28 h-fit">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-jr-black-2 border border-jr-line rounded-lg p-6 space-y-6"
                >
                  <div>
                    <div className="font-mono text-[10px] text-jr-muted-2 tracking-[0.14em] mb-2">
                      HARGA MULAI DARI
                    </div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-head font-extrabold text-3xl text-white">
                        {service.starts}
                      </span>
                    </div>
                    <div className="jr-body text-sm">{service.pricePer}</div>
                  </div>

                  <div className="jr-divider" />

                  <div>
                    <div className="font-mono text-[10px] text-jr-gold tracking-[0.14em] mb-4">
                      RESPONS RATA-RATA 5 MENIT
                    </div>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="jr-btn-red h-12 w-full text-sm"
                    >
                      <MessageCircle size={14} />
                      Booking Sekarang
                    </a>
                  </div>

                  <div className="jr-divider" />

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Check size={16} className="text-jr-gold flex-shrink-0" />
                      <span className="jr-body">Konfirmasi instan</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check size={16} className="text-jr-gold flex-shrink-0" />
                      <span className="jr-body">Harga transparan</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check size={16} className="text-jr-gold flex-shrink-0" />
                      <span className="jr-body">Driver profesional</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
