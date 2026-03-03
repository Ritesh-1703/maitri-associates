// app/page.tsx
import AnimatedWrapper from "@/components/AnimatedWrapper";
import { companyInfo } from "@/data/company";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Building2,
  Users,
  Wrench,
  CheckCircle,
  Clock,
  Target,
  Shield,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark overflow-hidden pt-24">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              backgroundRepeat: "repeat",
            }}
          ></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <AnimatedWrapper>
            {/* Logo */}
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl"></div>
              <Image
                src="/logo.png"
                alt="Maitri Associates"
                width={228}
                height={228}
                className="object-contain relative z-10"
                priority
              />
            </div>

            {/* Established badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-sm tracking-wider text-white/90">
                ESTABLISHED 2015
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight">
              Building{" "}
              <span className="text-accent relative">
                Excellence
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="0"
                    y1="4"
                    x2="100"
                    y2="4"
                    stroke="#c49a6c"
                    strokeWidth="4"
                    strokeDasharray="2 6"
                  />
                </svg>
              </span>
              <br />
              Since 2015
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 font-light">
              {companyInfo.tagline} delivering premium construction solutions
              across Maharashtra with precision and integrity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link
                href="/contact"
                className="group bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-all hover:scale-105 shadow-xl hover:shadow-accent/25 inline-flex items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowRight
                  className="group-hover:translate-x-1 transition"
                  size={20}
                />
              </Link>
              <Link
                href="/projects"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center"
              >
                View Portfolio
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { number: "8+", label: "Years Experience", icon: Clock },
                { number: "50+", label: "Projects Completed", icon: Target },
                {
                  number: "100%",
                  label: "Client Satisfaction",
                  icon: CheckCircle,
                },
                { number: "10+", label: "Expert Engineers", icon: Users },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl font-bold text-accent mb-1 group-hover:scale-110 transition">
                    {stat.number}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-white/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedWrapper>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <AnimatedWrapper>
              <div className="relative">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop"
                    alt="Construction site"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                </div>

                {/* Experience Badge */}
                <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-3xl font-bold">8+</div>
                  <div className="text-sm">
                    Years of
                    <br />
                    Excellence
                  </div>
                </div>
              </div>
            </AnimatedWrapper>

            {/* Content Side */}
            <AnimatedWrapper>
              <div>
                <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                  About Us
                </span>
                <h2 className="text-4xl font-bold text-primary mt-2 mb-6 font-playfair">
                  Engineering Trust,
                  <br />
                  Building Futures
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {companyInfo.mission}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Award, label: "ISO Certified" },
                    { icon: Users, label: "Expert Team" },
                    { icon: Building2, label: "Govt. Approved" },
                    { icon: Shield, label: "Safety First" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition"
                    >
                      <item.icon className="text-accent" size={20} />
                      <span className="text-sm font-medium text-primary">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-light transition group"
                >
                  Discover Our Story
                  <ArrowRight
                    className="group-hover:translate-x-1 transition"
                    size={18}
                  />
                </Link>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedWrapper>
            <div className="text-center mb-16">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Our Expertise
              </span>
              <h2 className="text-4xl font-bold text-primary mt-2 font-playfair">
                What We Do Best
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                Comprehensive construction and engineering services tailored to
                your needs
              </p>
            </div>
          </AnimatedWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, index) => (
              <AnimatedWrapper key={index}>
                <div className="bg-bg-light p-6 rounded-xl hover:shadow-xl transition-all duration-300 group border border-gray-100">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                    <Wrench
                      className="text-accent group-hover:text-white transition-colors"
                      size={24}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2 font-playfair">
                    {service}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Expert {service.toLowerCase()} solutions with precision
                    engineering and quality materials.
                  </p>
                </div>
              </AnimatedWrapper>
            ))}
          </div>

          <AnimatedWrapper>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition group"
              >
                Explore All Services
                <ArrowRight
                  className="group-hover:translate-x-1 transition"
                  size={18}
                />
              </Link>
            </div>
          </AnimatedWrapper>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedWrapper>
            <div className="text-center mb-16">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Our Portfolio
              </span>
              <h2 className="text-4xl font-bold text-primary mt-2 font-playfair">
                Featured Projects
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                Delivering excellence across Maharashtra with every project
              </p>
            </div>
          </AnimatedWrapper>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(0, 4).map((project, index) => (
              <AnimatedWrapper key={index}>
                <div className="group relative h-80 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={`https://placehold.co/800x600/1e3a5f/ffffff/png?text=${project.title.replace(/ /g, "+")}`}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2 font-playfair">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/80">Pune Region</p>
                  </div>

                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      href="/projects"
                      className="bg-white text-primary px-6 py-3 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </AnimatedWrapper>
            ))}
          </div>

          <AnimatedWrapper>
            <div className="text-center mt-12">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition shadow-md hover:shadow-lg"
              >
                View All Projects
                <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedWrapper>
        </div>
      </section>

      {/* CLIENTS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedWrapper>
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              Trusted By
            </span>
            <h2 className="text-3xl font-bold text-primary mt-2 mb-12 font-playfair">
              Our Valued Clients
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="h-16 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm"
                >
                  Client Logo
                </div>
              ))}
            </div>

            <p className="mt-12 text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Public Sector / Government Bodies, State & Central Government
              Agencies, Urban Development Authorities, Leading Automobile
              Manufacturers, Select Private Developers & Contractors.
            </p>
          </AnimatedWrapper>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&auto=format&fit=crop"
            alt="Construction site"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark opacity-95"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedWrapper>
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-playfair">
              Ready to Build Your{" "}
              <span className="text-accent">Dream Project?</span>
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Let's discuss your requirements and create something extraordinary
              together.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-accent text-white px-10 py-5 rounded-lg text-lg font-bold hover:bg-accent/90 transition-all hover:scale-105 shadow-2xl"
            >
              Get Free Consultation
              <ArrowRight
                className="group-hover:translate-x-1 transition"
                size={22}
              />
            </Link>
            <p className="mt-6 text-sm text-white/60">
              Or call us directly:{" "}
              <span className="font-bold text-white">
                {companyInfo.contact.phone}
              </span>
            </p>
          </AnimatedWrapper>
        </div>
      </section>
    </>
  );
}
