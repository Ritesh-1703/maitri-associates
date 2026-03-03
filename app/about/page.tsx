// app/about/page.tsx
import AnimatedWrapper from "@/components/AnimatedWrapper";
import { companyInfo } from "@/data/company";
import Image from "next/image";
import {
  Award,
  Target,
  Eye,
  Users,
  Building2,
  CheckCircle,
  Shield,
} from "lucide-react";

export default function AboutPage() {
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
            About Us
          </h1>
          <p className="text-xl text-white/80">
            Engineering Excellence Since 2015
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedWrapper>
              <div>
                <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                  Who We Are
                </span>
                <h2 className="text-4xl font-bold text-primary mt-2 mb-6 font-playfair">
                  {companyInfo.fullName}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Established in{" "}
                  <span className="font-bold text-primary">
                    {companyInfo.established}
                  </span>
                  , Maitri Associates has grown to become a trusted name in the
                  construction and engineering industry across Maharashtra.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Led by experienced civil engineers and contractors, we bring
                  precision, integrity, and innovation to every project we
                  undertake.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-bg-light p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-accent">8+</div>
                    <div className="text-sm text-gray-600">
                      Years Experience
                    </div>
                  </div>
                  <div className="bg-bg-light p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-accent">50+</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                  <div className="bg-bg-light p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-accent">100%</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                  <div className="bg-bg-light p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-accent">10+</div>
                    <div className="text-sm text-gray-600">Experts</div>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=80"
                  alt="Engineering team"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              Our Purpose
            </span>
            <h2 className="text-4xl font-bold text-primary mt-2 font-playfair">
              Vision & Mission
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedWrapper>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Eye className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 font-playfair">
                  Our Vision
                </h3>
                <ul className="space-y-4">
                  {companyInfo.vision.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <CheckCircle
                        className="text-accent shrink-0 mt-1"
                        size={18}
                      />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 font-playfair">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {companyInfo.mission}
                </p>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              What Drives Us
            </span>
            <h2 className="text-4xl font-bold text-primary mt-2 font-playfair">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "Quality First",
                desc: "We never compromise on quality, ensuring every project meets the highest standards.",
              },
              {
                icon: Users,
                title: "Client Partnership",
                desc: "We work closely with clients, treating their vision as our own.",
              },
              {
                icon: Building2,
                title: "Innovation",
                desc: "Constantly adopting new technologies and methods for better results.",
              },
              {
                icon: Shield,
                title: "Safety",
                desc: "Safety of our team and stakeholders is paramount in every project.",
              },
              {
                icon: Target,
                title: "Timely Delivery",
                desc: "We respect deadlines and deliver projects on schedule.",
              },
              {
                icon: CheckCircle,
                title: "Integrity",
                desc: "Honest, transparent, and ethical in all our dealings.",
              },
            ].map((value, index) => (
              <AnimatedWrapper key={index}>
                <div className="bg-bg-light p-6 rounded-xl hover:shadow-lg transition border border-gray-100">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="text-accent" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
