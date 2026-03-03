// components/Footer.tsx
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Facebook,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-white/90">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Maitri Associates"
                width={50}
                height={50}
                className="rounded-lg bg-white/10 p-1"
              />
              <div>
                <h3 className="text-xl font-bold font-playfair">
                  Maitri Associates
                </h3>
                <p className="text-sm text-white/60">Engineering Services</p>
              </div>
            </div>

            <p className="text-sm text-white/70 leading-relaxed">
              Civil Engineer & Contractor delivering quality construction
              solutions since 2015.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-5">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-[#1877F2] hover:scale-110"
              >
                <Facebook size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-[#0A66C2] hover:scale-110"
              >
                <Linkedin size={18} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918669991085"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-[#25D366] hover:scale-110"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-playfair">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-sm text-white/70 hover:text-accent transition flex items-center gap-2 group"
                    >
                      <ArrowRight
                        size={12}
                        className="text-accent group-hover:translate-x-1 transition"
                      />
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-playfair">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+918669991085"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-accent transition"
              >
                <Phone size={14} className="text-accent" />
                +91 8669991085
              </a>

              <a
                href="mailto:Nilesh.naikade@gmail.com"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-accent transition"
              >
                <Mail size={14} className="text-accent" />
                Nilesh.naikade@gmail.com
              </a>

              <a
                href="mailto:Maitriassociates7@gmail.com"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-accent transition"
              >
                <Mail size={14} className="text-accent" />
                Maitriassociates7@gmail.com
              </a>
            </div>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-playfair">
              Offices
            </h4>

            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-accent shrink-0 mt-1" />
                <p className="text-sm text-white/70">
                  Flat No A-14, Sahyashram Soc,
                  <br />
                  Wellesley Road, Shivajinagar,
                  <br />
                  Pune - 411030
                </p>
              </div>

              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-accent shrink-0 mt-1" />
                <p className="text-sm text-white/70">
                  A/P Kadadhe, Tal-Khed,
                  <br />
                  Dist-Pune - 410513
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-center text-sm text-white/50">
            © {new Date().getFullYear()} Maitri Associates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
