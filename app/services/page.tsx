// app/services/page.tsx
import AnimatedWrapper from "@/components/AnimatedWrapper";
import { services } from "@/data/services";
import Image from "next/image";
import {
  Wrench,
  Building2,
  Home,
  Warehouse,
  Paintbrush,
  Ruler,
  Factory,
  Construction, // ✅ Add this
} from "lucide-react";

// Map icons to services (customize as needed)
const getIconForService = (service: string) => {
  const iconMap: { [key: string]: any } = {
    Infrastructure: Building2,
    Buildings: Home,
    Bridges: Construction,
    "Industrial Projects": Factory,
    "Road Construction": Construction,
    "Industrial & Residential Buildings": Building2,
    "Warehouse & Factory Constructions": Warehouse,
    "Architectural Interiors & Exteriors": Paintbrush,
    "Structural Works": Ruler,
    "Land Development": Ruler,
  };
  return iconMap[service] || Wrench;
};

export default function ServicesPage() {
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
            Our Services
          </h1>
          <p className="text-xl text-white/80">
            Comprehensive Engineering & Construction Solutions
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedWrapper>
            <div className="text-center mb-16">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                What We Offer
              </span>
              <h2 className="text-4xl font-bold text-primary mt-2 font-playfair">
                Our Expertise
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                From concept to completion, we deliver excellence across all
                construction domains
              </p>
            </div>
          </AnimatedWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = getIconForService(service);
              return (
                <AnimatedWrapper key={index}>
                  <div className="bg-bg-light p-8 rounded-xl hover:shadow-2xl transition-all duration-300 group border border-gray-100">
                    <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                      <Icon
                        className="text-accent group-hover:text-white transition-colors"
                        size={32}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                      {service}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Professional {service.toLowerCase()} services with
                      precision engineering, quality materials, and expert
                      project management.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-accent text-sm font-semibold">
                      <span>Learn more</span>
                      <span className="group-hover:translate-x-1 transition">
                        →
                      </span>
                    </div>
                  </div>
                </AnimatedWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              Our Approach
            </span>
            <h2 className="text-4xl font-bold text-primary mt-2 font-playfair">
              How We Work
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "Understanding your requirements and vision",
              },
              {
                step: "02",
                title: "Planning",
                desc: "Detailed project planning and resource allocation",
              },
              {
                step: "03",
                title: "Execution",
                desc: "Precision execution with quality control",
              },
              {
                step: "04",
                title: "Delivery",
                desc: "Timely delivery with client satisfaction",
              },
            ].map((item, index) => (
              <AnimatedWrapper key={index}>
                <div className="text-center">
                  <div className="text-5xl font-black text-accent/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
