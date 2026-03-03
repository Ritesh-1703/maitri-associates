// app/projects/page.tsx
import AnimatedWrapper from "@/components/AnimatedWrapper";
import { projects } from "@/data/projects";
import Image from "next/image";
import { MapPin, Calendar, Building2 } from "lucide-react";

export default function ProjectsPage() {
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
            Our Projects
          </h1>
          <p className="text-xl text-white/80">
            Successfully Completed & Ongoing Works
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white">
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
                Delivering excellence across Maharashtra
              </p>
            </div>
          </AnimatedWrapper>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedWrapper key={index}>
                <div className="group relative h-96 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={`https://placehold.co/800x600/1e3a5f/ffffff/png?text=${project.title.replace(/ /g, "+")}`}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent opacity-90"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-center gap-2 text-accent text-sm mb-2">
                      <Calendar size={14} />
                      <span>2023-2024</span>
                      <MapPin size={14} className="ml-2" />
                      <span>Pune Region</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 font-playfair">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-4">
                      Completed with excellence and client satisfaction
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <Building2 size={16} />
                      <span>Maitri Associates</span>
                    </div>
                  </div>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
