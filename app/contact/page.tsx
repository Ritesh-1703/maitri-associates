// app/contact/page.tsx
import AnimatedWrapper from "@/components/AnimatedWrapper";
import { companyInfo } from "@/data/company";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Send, Building2 } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-32 bg-gradient-to-r from-primary to-primary-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              backgroundRepeat: "repeat",
            }}
          ></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-black mb-4 font-playfair">
            Contact Us
          </h1>
          <p className="text-xl text-white/80">Get in Touch with Our Team</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <AnimatedWrapper>
              <div>
                <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                  Get in Touch
                </span>
                <h2 className="text-4xl font-bold text-primary mt-2 mb-6 font-playfair">
                  Let's Discuss Your Project
                </h2>
                <p className="text-gray-600 leading-relaxed mb-10">
                  Have a project in mind? We're here to help. Reach out to us
                  through any of the following channels, and our team will get
                  back to you promptly.
                </p>

                {/* Office Cards */}
                <div className="space-y-6">
                  {/* Main Office */}
                  <div className="bg-bg-light p-6 rounded-xl hover:shadow-lg transition border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <MapPin className="text-accent" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-primary">
                        Head Office
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed ml-13">
                      Flat No A-14, Sahyashram Co Op Hsg Soc Ltd,
                      <br />
                      S No 54b Mp 1, Wellesley Road,
                      <br />
                      Behind Nabard Bank, Shivajinagar,
                      <br />
                      Pune – 411030, Maharashtra, India
                    </p>
                  </div>

                  {/* Branch Office */}
                  <div className="bg-bg-light p-6 rounded-xl hover:shadow-lg transition border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Building2 className="text-accent" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-primary">
                        Branch Office
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed ml-13">
                      A/P Kadadhe, Tal-Khed,
                      <br />
                      Dist-Pune – 410513, Maharashtra, India
                    </p>
                  </div>

                  {/* Contact Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-bg-light p-6 rounded-xl hover:shadow-lg transition border border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                        <Phone className="text-accent" size={18} />
                        <h4 className="font-semibold text-primary">Phone</h4>
                      </div>
                      <a
                        href={`tel:${companyInfo.contact.phone}`}
                        className="text-accent hover:underline text-sm ml-8"
                      >
                        {companyInfo.contact.phone}
                      </a>
                    </div>

                    <div className="bg-bg-light p-6 rounded-xl hover:shadow-lg transition border border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                        <Mail className="text-accent" size={18} />
                        <h4 className="font-semibold text-primary">Email</h4>
                      </div>
                      <div className="ml-8 space-y-1">
                        {companyInfo.contact.emails.map((email, index) => (
                          <a
                            key={index}
                            href={`mailto:${email}`}
                            className="text-accent hover:underline text-sm block"
                          >
                            {email}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="bg-bg-light p-6 rounded-xl hover:shadow-lg transition border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="text-accent" size={18} />
                      <h4 className="font-semibold text-primary">
                        Business Hours
                      </h4>
                    </div>
                    <div className="ml-8 text-sm text-gray-600">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>

            {/* Right Side - Contact Form & Map */}
            <AnimatedWrapper>
              <div className="space-y-8">
                {/* Contact Form */}
                <div className="bg-bg-light p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-primary mb-6 font-playfair">
                    Send Us a Message
                  </h3>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent transition"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent transition"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent transition"
                    />
                    <textarea
                      rows={5}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent transition"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition flex items-center justify-center gap-2"
                    >
                      Send Message
                      <Send size={18} />
                    </button>
                  </form>
                </div>

                {/* Map */}
                <div className="bg-bg-light p-4 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-primary mb-4 font-playfair">
                    Find Us on Map
                  </h3>
                  <div className="rounded-xl overflow-hidden h-[300px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2433678657997!2d73.849089!3d18.526850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0a0a0a0a0a0%3A0x0!2zMTjCsDMxJzM2LjYiTiA3M8KwNTAnNTYuNyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                  <Link
                    href="https://maps.google.com/?q=Flat+No+A-14+Sahyashram+Co+Op+Hsg+Soc+Ltd+Wellesley+Road+Shivajinagar+Pune+411030"
                    target="_blank"
                    className="inline-block mt-4 text-accent hover:underline text-sm font-medium"
                  >
                    Open in Google Maps →
                  </Link>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </section>
    </>
  );
}
