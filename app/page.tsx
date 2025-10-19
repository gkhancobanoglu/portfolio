"use client";

import {
  FileText,
  Download,
  Linkedin,
  Github,
  Database,
  Code2,
} from "lucide-react";
import {
  SiSpringboot,
  SiPython,
  SiFastapi,
  SiGo,
  SiDocker,
  SiRedis,
  SiRabbitmq,
  SiApachekafka,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-24 min-h-screen flex flex-col justify-between">
        <div>
          {/* Üst satır: Hakkımda + Foto */}
          <div className="grid md:grid-cols-3 gap-6 mt-2">
            {/* Hakkımda Kartı */}
            <div className="group md:col-span-2 rounded-2xl bg-white/5 border border-white/10 p-8 flex flex-col justify-center shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02] transition-all duration-300 ease-out relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-400/20 to-transparent blur-2xl"></div>
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-slate-100">
                  Gökhan Çobanoğlu
                </h1>
                <h2 className="text-lg md:text-xl text-emerald-400 font-medium mt-1">
                  Software Developer
                </h2>
                <p className="mt-4 text-slate-300 text-sm md:text-base leading-relaxed">
                  Kocaeli Üniversitesi Bilgisayar Mühendisliği mezunuyum.
                  Öğrenmeye, üretmeye ve kendimi geliştirmeye her zaman
                  hevesliyim.
                </p>
              </div>
            </div>

            {/* Profil Görseli */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 flex items-center justify-center">
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-xl hover:scale-105 transition-transform duration-300 ease-out">
                <Image
                  src="/images/foto.jpg"
                  alt="Gökhan Çobanoğlu"
                  width={300}
                  height={300}
                  className="object-cover w-60 h-60 md:w-72 md:h-72"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Orta satır: CV + Tech Stack + Profiller */}
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {/* CV Kartı */}
            <div className="group rounded-2xl bg-white/5 border border-white/10 p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02] transition-all duration-300 ease-out relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-400/20 to-transparent blur-2xl"></div>
              <div className="relative flex flex-col items-center z-10">
                <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-400/20 mb-4">
                  <FileText className="text-emerald-400 w-10 h-10" />
                </div>
                <a
                  href="/cv/Gökhan-Çobanoğlu-CV_EN.pdf"
                  download="Gökhan-Çobanoğlu-CV.pdf"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white bg-emerald-500/90 hover:bg-emerald-500 px-6 py-2.5 rounded-lg transition-colors duration-300"
                >
                  <Download className="w-4 h-4" />
                  CV İndir
                </a>
              </div>
            </div>

            {/* Teknolojiler */}
            <div className="group rounded-2xl bg-white/5 border border-white/10 p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02] transition-all duration-300 ease-out relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-400/20 to-transparent blur-2xl"></div>

              <div className="relative z-10 w-full">
                <h3 className="text-slate-200 text-sm uppercase tracking-widest font-medium mb-6">
                  Kullandığım Teknolojiler
                </h3>

                <div className="grid grid-cols-5 gap-6 justify-items-center text-slate-300">
                  {[
                    { icon: <Code2 />, name: "Java" },
                    { icon: <SiSpringboot />, name: "Spring Boot" },
                    { icon: <SiPython />, name: "Python" },
                    { icon: <SiFastapi />, name: "FastAPI" },
                    { icon: <SiGo />, name: "Go" },
                    { icon: <Database />, name: "SQL" },
                    { icon: <SiMongodb />, name: "MongoDB" },
                    { icon: <SiRedis />, name: "Redis" },
                    { icon: <SiRabbitmq />, name: "RabbitMQ" },
                    { icon: <SiApachekafka />, name: "Kafka" },
                    { icon: <SiDocker />, name: "Docker" },
                    { icon: <SiReact />, name: "React" },
                    { icon: <SiNextdotjs />, name: "Next.js" },
                  ].map((tech, index) => (
                    <div
                      key={index}
                      className="relative group/icon flex items-center justify-center"
                    >
                      <span className="absolute -top-8 scale-0 group-hover/icon:scale-100 bg-emerald-500/90 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap transition-all duration-300">
                        {tech.name}
                      </span>
                      <div className="w-8 h-8 text-slate-300 hover:text-emerald-400 transition-colors">
                        {tech.icon}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Profiller */}
            <div className="group rounded-2xl bg-white/5 border border-white/10 p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02] transition-all duration-300 ease-out relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-400/20 to-transparent blur-2xl"></div>
              <div className="relative z-10 flex flex-col items-center">
                <h3 className="text-slate-200 text-sm uppercase tracking-widest font-medium">
                  Profiller
                </h3>
                <div className="mt-4 flex items-center gap-8">
                  {/* LinkedIn */}
                  <div className="relative group/link">
                    <a
                      href="https://www.linkedin.com/in/gokhan-cobanoglu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-emerald-400 transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-8 h-8" />
                    </a>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-emerald-600/90 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover/link:opacity-100 group-hover/link:-translate-y-1 transition-all duration-300 pointer-events-none shadow-md">
                      LinkedIn
                    </span>
                  </div>

                  {/* GitHub */}
                  <div className="relative group/link">
                    <a
                      href="https://github.com/gkhancobanoglu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-emerald-400 transition-colors duration-300"
                      aria-label="GitHub"
                    >
                      <Github className="w-8 h-8" />
                    </a>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-emerald-600/90 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover/link:opacity-100 group-hover/link:-translate-y-1 transition-all duration-300 pointer-events-none shadow-md">
                      GitHub
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Alt satır */}
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="group md:col-span-2 rounded-2xl bg-white/5 border border-white/10 p-8 flex items-center justify-between text-center shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02] transition-all duration-300 ease-out relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-400/20 to-transparent blur-2xl"></div>
              <div className="relative z-10 flex-1">
                <h3 className="text-3xl font-semibold text-slate-100">01</h3>
                <p className="text-sm uppercase tracking-widest text-slate-400 mt-1">
                  Yıl Deneyim
                </p>
              </div>
              <div className="w-px h-12 bg-white/10 relative z-10"></div>
              <div className="relative z-10 flex-1">
                <h3 className="text-3xl font-semibold text-slate-100">+20</h3>
                <p className="text-sm uppercase tracking-widest text-slate-400 mt-1">
                  Toplam Proje
                </p>
              </div>
            </div>
            <div className="group rounded-2xl bg-white/5 border border-white/10 p-8 flex items-center justify-center text-center shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02] transition-all duration-300 ease-out relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-400/20 to-transparent blur-2xl"></div>
              <h3 className="relative text-2xl font-semibold text-slate-100">
                Birlikte <span className="text-emerald-400">çalışalım.</span>
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 py-6 text-center text-slate-500 text-sm">
        © 2025 Gökhan Çobanoğlu. All rights reserved.
      </footer>
    </>
  );
}
