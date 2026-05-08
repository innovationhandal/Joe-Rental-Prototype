"use client";

import { motion } from "framer-motion";
import { Star, Check } from "lucide-react";

const TRUST_ITEMS = [
  { icon: <Star size={16} className="text-jr-gold" fill="#D5A651" />, text: "4.9 dari pelanggan" },
  { icon: <Check size={16} className="text-jr-gold" />, text: "Driver berpengalaman" },
  { icon: <Check size={16} className="text-jr-gold" />, text: "Mobil bersih & wangi" },
  { icon: <Check size={16} className="text-jr-gold" />, text: "Tepat waktu, no drama" },
];

export default function TrustStrip() {
  return (
    <section className="bg-jr-black-2 border-b border-jr-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TRUST_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              {item.icon}
              <span className="font-body text-sm text-white font-medium">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
