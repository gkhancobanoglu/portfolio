"use client";

import Image from "next/image";
import { Linkedin, Github, Mail, FileText } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-20 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-slate-200">
      {/* Sol panel */}
      <aside className="md:col-span-1 md:sticky md:top-12 self-start flex flex-col items-center bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/20">
        <div className="relative group">
          <Image
            src="/images/foto.jpg"
            alt="Gökhan Çobanoğlu"
            width={220}
            height={220}
            className="rounded-2xl object-cover border border-white/10 shadow-xl transition-transform duration-300 group-hover:scale-[1.03] w-40 h-40 sm:w-56 sm:h-56"
            priority
          />
        </div>

        <h2 className="text-xl sm:text-2xl font-semibold text-white mt-5 sm:mt-6">
          Gökhan Çobanoğlu
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm">@gkhancobanoglu</p>

        {/* Sosyal ikonlar */}
        <div className="flex items-center gap-5 sm:gap-6 mt-5 sm:mt-6 text-slate-300">
          {[
            {
              href: "https://www.linkedin.com/in/gokhan-cobanoglu",
              icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
              label: "LinkedIn",
            },
            {
              href: "https://github.com/gkhancobanoglu",
              icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
              label: "GitHub",
            },
            {
              href: "mailto:gkhancobanoglu@gmail.com",
              icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
              label: "Mail",
              type: "mail",
            },
            {
              href: "/cv/Gökhan-Çobanoğlu-CV_EN.pdf",
              icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" />,
              label: "CV",
            },
          ].map(({ href, icon, label, type }, i) => (
            <div key={i} className="relative group">
              <a
                href={href}
                {...(type !== "mail" && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                onClick={(e) => {
                  if (type === "mail") {
                    e.preventDefault();
                    window.location.href = href;
                  }
                }}
                className="hover:text-emerald-400 transition-all duration-300 hover:scale-110 flex items-center justify-center"
              >
                {icon}
              </a>

              <span className="absolute -bottom-7 sm:-bottom-8 left-1/2 -translate-x-1/2 bg-emerald-600/90 text-white text-[10px] sm:text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 pointer-events-none shadow-lg whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* İletişime Geç butonu */}
        <a
          href="/contact"
          className="mt-6 sm:mt-8 bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-white font-semibold text-sm sm:text-base px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.03]"
        >
          İletişime Geç
        </a>
      </aside>

      {/* Sağ içerik */}
      <main className="md:col-span-2 flex flex-col gap-10 sm:gap-12 leading-relaxed">
        {/* Hakkımda */}
        <section>
          <h3 className="text-lg sm:text-xl font-semibold text-emerald-400 mb-3 sm:mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-16 after:h-[2px] after:bg-emerald-400/70">
            Hakkımda
          </h3>
          <p className="text-slate-300 text-[0.9rem] sm:text-[0.95rem] leading-relaxed">
            Kocaeli Üniversitesi Bilgisayar Mühendisliği mezunuyum. Temiz ve
            sürdürülebilir kod anlayışıyla, ölçeklenebilir ve kullanıcı odaklı
            uygulamalar geliştiriyorum. Teknolojiye tutkulu, kendini sürekli
            geliştirmeye ve güncel kalmaya odaklı biriyim. Yazılım geliştirme
            sürecinde verimlilik, sürdürülebilirlik ve sürekli iyileştirmeyi ön
            planda tutuyorum.
          </p>
        </section>

        {/* Eğitim */}
        <section>
          <h3 className="text-lg sm:text-xl font-semibold text-emerald-400 mb-3 sm:mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-16 after:h-[2px] after:bg-emerald-400/70">
            Eğitim
          </h3>
          <ul className="space-y-1 text-slate-300 text-sm sm:text-[0.95rem]">
            <li>
              🎓 <strong>Kocaeli Üniversitesi</strong> — Bilgisayar Mühendisliği
            </li>
            <li>GANO: 3.33 / 4.00</li>
            <li>📅 09/2020 – 09/2024</li>
          </ul>
        </section>

        {/* Deneyim */}
        <section>
          <h3 className="text-lg sm:text-xl font-semibold text-emerald-400 mb-4 sm:mb-5 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-16 after:h-[2px] after:bg-emerald-400/70">
            Deneyim
          </h3>
          <div className="flex flex-col gap-5 sm:gap-6">
            {[
              {
                title: "Software Developer Intern — Kartaca",
                date: "07/2025 – 09/2025",
                desc: `Kartaca’da kurumsal kimliğe uygun modern ve gelişmiş bir anket platformu geliştirdim. PHP, HTML, CSS ve JavaScript kullanarak kullanıcı dostu bir sistem oluşturdum. Backend entegrasyonlarını optimize ederek performansı artırdım.`,
                tech: "PHP • JavaScript • MySQL • HTML • CSS • Docker",
              },
              {
                title: "Software Developer — Larsca",
                date: "03/2025 – 06/2025",
                desc: `Larsca’da backend geliştirme süreçlerinde aktif rol aldım. Python ve FastAPI ile ölçeklenebilir RESTful servisler geliştirdim. React ve Next.js tarafında UI/UX akışlarını destekledim.`,
                tech: "Python • FastAPI • React • Next.js • Docker • PostgreSQL",
              },
              {
                title: "Backend Developer Intern — Haratres Teknoloji",
                date: "11/2023 – 01/2024",
                desc: `Java Spring Boot ile e-ticaret platformu geliştirdim. SAP CX üzerinde özel cron job’lar tasarlayarak otomasyon süreçlerini optimize ettim.`,
                tech: "Java • Spring Boot • SAP CX • PostgreSQL • Docker",
              },
            ].map(({ title, date, desc, tech }, i) => (
              <div
                key={i}
                className="group bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-emerald-500/10 hover:scale-[1.01] transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h4 className="text-base sm:text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 sm:mt-0">
                    {date}
                  </p>
                </div>
                <p className="text-slate-300 mt-3 leading-relaxed text-sm sm:text-[0.95rem]">
                  {desc}
                </p>
                <p className="text-xs sm:text-sm text-emerald-400 mt-3 italic">
                  {tech}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Yetenekler */}
        <section>
          <h3 className="text-lg sm:text-xl font-semibold text-emerald-400 mb-3 sm:mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-16 after:h-[2px] after:bg-emerald-400/70">
            Yetenekler
          </h3>
          <div className="text-slate-300 text-sm sm:text-[0.95rem] space-y-2">
            <p>
              <strong>Programlama Dilleri:</strong> Python • Java • Go •
              JavaScript • TypeScript • SQL
            </p>
            <p>
              <strong>Teknolojiler & Frameworks:</strong> FastAPI • Spring Boot
              • Docker • Git • MongoDB • PostgreSQL • Redis • RabbitMQ • Kafka •
              React • Next.js
            </p>
          </div>
        </section>

        {/* İlgi Alanları */}
        <section>
          <h3 className="text-lg sm:text-xl font-semibold text-emerald-400 mb-3 sm:mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-16 after:h-[2px] after:bg-emerald-400/70">
            İlgi Alanları
          </h3>
          <p className="text-slate-300 text-sm sm:text-[0.95rem]">
            Yeni teknolojileri keşfetmek, sistem verimliliğini artırmak ve kod
            kalitesini sürekli iyileştirmekten keyif alıyorum.
          </p>
        </section>

        {/* Sertifikalar */}
        <section>
          <h3 className="text-lg sm:text-xl font-semibold text-emerald-400 mb-3 sm:mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-16 after:h-[2px] after:bg-emerald-400/70">
            Sertifikalar
          </h3>
          <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm sm:text-[0.95rem]">
            <li>EF Set English Certificate — C1</li>
            <li>Java 101 / 201 / 301 — Turkcell Geleceği Yazanlar</li>
            <li>Java ile Programlamaya Giriş — BTK Akademi</li>
            <li>İleri Seviye Java — BTK Akademi</li>
            <li>Sıfırdan Komple Java Geliştirici Kursu — Udemy</li>
          </ul>
        </section>

        {/* Diller */}
        <section>
          <h3 className="text-lg sm:text-xl font-semibold text-emerald-400 mb-3 sm:mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-16 after:h-[2px] after:bg-emerald-400/70">
            Diller
          </h3>
          <ul className="space-y-1 text-slate-300 text-sm sm:text-[0.95rem]">
            <li>Türkçe — Ana Dil</li>
            <li>İngilizce — Çalışma Düzeyinde</li>
          </ul>
        </section>
      </main>
    </section>
  );
}
