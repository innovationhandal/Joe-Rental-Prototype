import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { SITE_CONFIG, SERVICES } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.phone.replace(/[^0-9]/g, "")}`;

  return (
    <footer className="bg-jr-black-2 border-t border-jr-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.jpg"
                  alt="Joe Rental Logo"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <span className="font-head font-bold text-xl text-white">
                Joe Rental
              </span>
            </div>
            <p className="jr-body text-sm mb-6">
              Rental mobil Bandung yang nggak bikin ribet. Armada bersih, driver
              berpengalaman, harga transparan.
            </p>
            <div className="flex items-center gap-2">
              <div className="jr-rule-gold" />
              <span className="jr-eyebrow text-[10px]">{SITE_CONFIG.stats.tahunDiBandung} tahun di Bandung</span>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="font-head font-bold text-white mb-6">Layanan</h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/layanan/${service.slug}`}
                    className="jr-body text-sm hover:text-jr-gold transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-head font-bold text-white mb-6">Menu</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="jr-body text-sm hover:text-jr-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/armada" className="jr-body text-sm hover:text-jr-gold transition-colors">
                  Armada
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="jr-body text-sm hover:text-jr-gold transition-colors">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="jr-body text-sm hover:text-jr-gold transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-head font-bold text-white mb-6">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MessageCircle size={18} className="text-jr-gold mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="jr-body text-sm hover:text-jr-gold transition-colors"
                  >
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                  <div className="text-jr-muted-2 text-xs mt-1">WhatsApp</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-jr-gold mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="jr-body text-sm hover:text-jr-gold transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                  <div className="text-jr-muted-2 text-xs mt-1">Email</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-jr-gold mt-0.5 flex-shrink-0" />
                <div>
                  <span className="jr-body text-sm">{SITE_CONFIG.address}</span>
                  <div className="text-jr-muted-2 text-xs mt-1">Pool & Office</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-jr-line flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="jr-body text-sm text-center md:text-left">
            © {currentYear} Joe Rental Mobil. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} className="text-jr-muted hover:text-jr-gold transition-colors" />
            </a>
            <a href={`mailto:${SITE_CONFIG.email}`}>
              <Mail size={20} className="text-jr-muted hover:text-jr-gold transition-colors" />
            </a>
            <a href={`tel:${SITE_CONFIG.phone}`}>
              <Phone size={20} className="text-jr-muted hover:text-jr-gold transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
