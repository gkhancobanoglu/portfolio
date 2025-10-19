"use client";

import { useState, useEffect } from "react";
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
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [currentText, setCurrentText] = useState(0);

  const sliderTexts = ["🟢 Available for work", "💼 Open to new opportunities"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % sliderTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20 sm:pb-24 min-h-screen flex flex-col justify-between">
        <div>
          {/* Üst satır: Hakkımda + Foto */}
          <div className="grid md:grid-cols-3 gap-6 mt-4">
            {/* Hakkımda Kartı */}
            <div className="group md:col-span-2 rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 flex flex-col justify-center shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 ease-out relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-400/20 to-transparent blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-slate-100">
                      Gökhan Çobanoğlu
                    </h1>
                    <h2 className="text-base sm:text-lg md:text-xl text-emerald-400 font-medium mt-1">
                      Software Developer
                    </h2>

                    {/* Availability Slider */}
                    <div className="mt-3 h-6 overflow-hidden">
                      <div
                        key={currentText}
                        className="animate-fadeSlide text-xs sm:text-sm text-slate-300"
                      >
                        {sliderTexts[currentText]}
                      </div>
                    </div>
                  </div>

                  {/* Mobil Profil Fotoğrafı */}
                  <div className="md:hidden ml-4 flex-shrink-0">
                    <div className="overflow-hidden rounded-full border-2 border-emerald-400/40 shadow-md">
                      <Image
                        src="/images/foto.jpg"
                        alt="Gökhan Çobanoğlu"
                        width={120}
                        height={120}
                        className="object-cover w-24 h-24 sm:w-28 sm:h-28 rounded-full"
                      />
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  Kocaeli Üniversitesi Bilgisayar Mühendisliği mezunuyum.
                  Öğrenmeye, üretmeye ve kendimi geliştirmeye her zaman
                  hevesliyim.
                </p>
              </div>
            </div>

            {/* Masaüstü Fotoğraf */}
            <div className="hidden md:flex rounded-2xl bg-white/5 border border-white/10 p-4 items-center justify-center">
              <div className="overflow-hidden rounded-full border border-white/10 shadow-lg">
                <Image
                  src="/images/foto.jpg"
                  alt="Gökhan Çobanoğlu"
                  width={300}
                  height={300}
                  className="object-cover w-64 h-64 rounded-full"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Orta satır: CV + Teknolojiler + Profiller */}
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {/* CV Kartı */}
            <div className="group rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 ease-out relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-400/20 to-transparent blur-2xl"></div>
              <div className="relative flex flex-col items-center z-10">
                <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-500/10 border border-emerald-400/20 mb-4">
                  <FileText className="text-emerald-400 w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <a
                  href="/cv/Gökhan-Çobanoğlu-CV_EN.pdf"
                  download="Gökhan-Çobanoğlu-CV.pdf"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white bg-emerald-500/90 hover:bg-emerald-500 px-5 py-2 rounded-lg transition-colors duration-300"
                >
                  <Download className="w-4 h-4" />
                  CV İndir
                </a>
              </div>
            </div>

            {/* Teknolojiler */}
            <div className="group rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 ease-out relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-400/20 to-transparent blur-2xl"></div>
              <div className="relative z-10 w-full">
                <h3 className="text-slate-200 text-xs sm:text-sm uppercase tracking-widest font-medium mb-5">
                  Kullandığım Teknolojiler
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 justify-items-center text-slate-300">
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
                      className="relative group/icon flex flex-col items-center justify-center"
                      onClick={() =>
                        setActiveTech(
                          activeTech === tech.name ? null : tech.name
                        )
                      }
                    >
                      <span
                        className={`absolute -top-8 bg-emerald-500/90 text-white text-[10px] sm:text-xs px-2 py-1 rounded-md whitespace-nowrap transition-all duration-300 ${
                          activeTech === tech.name
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-0 group-hover/icon:opacity-100 group-hover/icon:scale-100"
                        }`}
                      >
                        {tech.name}
                      </span>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 text-slate-300 hover:text-emerald-400 transition-colors">
                        {tech.icon}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Profiller */}
            <div className="group rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 ease-out relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-400/20 to-transparent blur-2xl"></div>
              <div className="relative z-10 flex flex-col items-center">
                <h3 className="text-slate-200 text-xs sm:text-sm uppercase tracking-widest font-medium">
                  Profiller
                </h3>
                <div className="mt-4 flex items-center gap-6 sm:gap-8">
                  <a
                    href="https://www.linkedin.com/in/gokhan-cobanoglu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    <Linkedin className="w-7 h-7 sm:w-8 sm:h-8" />
                  </a>
                  <a
                    href="https://github.com/gkhancobanoglu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    <Github className="w-7 h-7 sm:w-8 sm:h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Alt satır */}
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="group md:col-span-2 rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between text-center shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 ease-out relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-400/20 to-transparent blur-2xl"></div>
              <div className="relative z-10 flex-1 mb-4 sm:mb-0">
                <h3 className="text-3xl font-semibold text-slate-100">01</h3>
                <p className="text-xs sm:text-sm uppercase tracking-widest text-slate-400 mt-1">
                  Yıl Deneyim
                </p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/10 relative z-10"></div>
              <div className="relative z-10 flex-1">
                <h3 className="text-3xl font-semibold text-slate-100">+20</h3>
                <p className="text-xs sm:text-sm uppercase tracking-widest text-slate-400 mt-1">
                  Toplam Proje
                </p>
              </div>
            </div>

            {/* Birlikte Çalışalım */}
            <div
              onClick={() => router.push("/contact")}
              className="group rounded-2xl cursor-pointer bg-white/5 border border-white/10 p-6 sm:p-8 flex items-center justify-center text-center shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.03] transition-all duration-300 ease-out relative overflow-hidden"
            >
              <h3 className="relative text-xl sm:text-2xl font-semibold text-slate-100">
                Birlikte <span className="text-emerald-400">çalışalım.</span>
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 py-6 text-center text-slate-500 text-xs sm:text-sm">
        © 2025 Gökhan Çobanoğlu. All rights reserved.
      </footer>

      {/* Animasyon tanımı */}
      <style jsx>{`
        @keyframes fadeSlide {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          20% {
            opacity: 1;
            transform: translateY(0);
          }
          80% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
        .animate-fadeSlide {
          animation: fadeSlide 3s ease-in-out;
        }
      `}</style>
    </>
  );
}
