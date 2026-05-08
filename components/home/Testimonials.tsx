"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function Testimonials() {
  return (
    <section className="section-py-lg bg-jr-black-2">
      <div className="container-fluid">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Testimonial"
          title="Kata Mereka yang Sudah Pakai"
          description="Pengalaman nyata dari pelanggan kami yang puas dengan layanan Joe Rental."
        />

        {/* Testimonials Grid */}
        <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="jr-card h-full group cursor-default">
                <div className="p-8 lg:p-10 flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-xl bg-jr-gold-softer border border-jr-gold-soft flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Quote size={20} className="text-jr-gold" />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={16} fill="#D5A651" className="text-jr-gold" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="flex-1 mb-6">
                    <p className="font-body text-base lg:text-lg text-white leading-relaxed">
                      "{testimonial.q}"
                    </p>
                  </blockquote>

                  {/* Author */}
                  <div className="pt-6 border-t border-jr-line-strong">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-head font-bold text-base text-white mb-1">
                          {testimonial.who}
                        </div>
                        <div className="font-mono text-[10px] text-jr-muted-2 tracking-[0.14em] uppercase">
                          {testimonial.ctx}
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-jr-gold-softer border border-jr-gold-soft flex items-center justify-center">
                        <Star size={16} fill="#D5A651" className="text-jr-gold" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
