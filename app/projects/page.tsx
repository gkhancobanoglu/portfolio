"use client";

import Image from "next/image";
import { Github } from "lucide-react";

const projects = [
  {
    title: "BrainStorm – Dijital Eğitim Platformu",
    description: `
BrainStorm, kullanıcıların çevrim içi kurslar oluşturup katılabildiği web tabanlı bir dijital eğitim platformudur.
Java Spring Boot, HTML/CSS/JavaScript ve MySQL kullanılarak geliştirildi; Google Meets API entegrasyonu sayesinde öğretmen ve öğrenciler arasında gerçek zamanlı etkileşim sağlanmaktadır.

Platform; kullanıcı ve öğretmen hesapları, ders oluşturma, satın alma, inceleme, bildirim ve takvim entegrasyonu gibi özellikler sunar.
Bu proje, ölçeklenebilir ve kullanıcı odaklı sistemler geliştirirken üçüncü parti API entegrasyonları konusundaki yetkinliğimi artırdı.`,
    image: "/projects/brainstorm.png",
    tech: [
      "Java",
      "Spring Boot",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
      "Google Meets API",
    ],
    github: "https://github.com/gkhancobanoglu/BrainStorm",
  },
  {
    title: "English Spelling App – Backend API",
    description: `
Eğitim odaklı bir İngilizce kelime uygulamasının backend’ini geliştirdim. 
Rol tabanlı kullanıcı sistemi, ödev yönetimi, skor hesaplama ve PDF raporlama gibi işlevleri olan ölçeklenebilir bir API tasarladım.
JWT tabanlı kimlik doğrulama, PostgreSQL ve MongoDB entegrasyonlarıyla güvenli ve esnek bir yapı kurdum.`,
    image: "/projects/spellingapp.png",
    tech: ["Python", "FastAPI", "PostgreSQL", "MongoDB", "Docker", "JWT"],
  },
  {
    title: "Aktüelimde – İndirimli Ürün Takip Sistemi",
    description: `
BİM, A101, ŞOK, Migros ve CarrefourSA marketlerindeki indirimli ürünleri toplayan bir fiyat takip platformu. 
FastAPI tabanlı backend, PostgreSQL veri tabanı ve Next.js arayüzüyle modern bir mimari kurdum.
Ürün, marka, kampanya ve kategori yönetimi admin paneli üzerinden yapılabiliyor.`,
    image: "/projects/aktuelimde.png",
    tech: [
      "Python",
      "FastAPI",
      "Next.js",
      "React",
      "PostgreSQL",
      "Docker",
      "Celery",
    ],
  },
  {
    title: "Bebek Ürünleri Fiyat Takip Uygulaması – Backend API",
    description: `
Büyük marketlerdeki bebek bezi ve mama fiyatlarını otomatik olarak toplayan bir fiyat karşılaştırma ve takip sistemi geliştirdim.
Selenium tabanlı web scraping altyapısı sayesinde veriler düzenli aralıklarla güncelleniyor ve farklı markalar, gramajlar ve kampanya dönemleri arasında fiyat analizi yapılabiliyor.
Sistem, FastAPI ile geliştirilen backend üzerinden JSON formatında API olarak sunulmakta ve gelecekte mobil uygulamayla entegre olacak şekilde tasarlandı.`,
    image: "/projects/babytracker.png",
    tech: ["Python", "FastAPI", "Selenium", "PostgreSQL", "Docker", "Pandas"],
  },
  {
    title: "Survenic – Kurumsal Anket Platformu",
    description: `
Kurumsal anket yönetimi ve veri otomasyonu için geliştirilmiş modern bir platform. 
LimeSurvey altyapısı üzerinde özelleştirilmiş eklentiler, webhook entegrasyonları ve CI/CD süreçleriyle 
kurumlara özel bir otomasyon sistemi tasarladım.`,
    image: "/projects/survenic.png",
    tech: ["PHP", "LimeSurvey", "PostgreSQL", "Docker", "Jenkins"],
  },
  {
    title: "İstanbulSkor – Kentsel Kalite Puanlama ve Analiz Sistemi",
    description: `
İstanbul’un ilçelerini çevresel ve demografik göstergelere göre analiz edip “yaşam kalitesi skoru”na dönüştüren veri analizi projesi geliştirdim.
Python tabanlı bu sistem; hava kirliliği, nüfus yoğunluğu ve yaşam koşulları gibi açık veri setlerini birleştirip Min-Max normalizasyonu ile tek bir kalite skoruna indirger.
Proje; veri temizleme, entegrasyon, ağırlıklı skor hesaplama ve görselleştirme aşamalarını içerir.`,
    image: "/projects/istanbulskor.png",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Data Analysis",
    ],
    github: "https://github.com/gkhancobanoglu/istanbulskor",
  },
  {
    title: "Real-Time Air Quality Platform",
    description: `
Gerçek zamanlı hava kalitesi verilerini izlemek, analiz etmek ve anomalileri tespit etmek için mikroservis tabanlı bir sistem geliştirdim.
Platform; Kafka tabanlı veri akışı, Spring Boot servisleri, PostgreSQL veri depolama ve React arayüzüyle uçtan uca bir çözüm sunar.
Kullanıcılar, canlı bildirimler ve görselleştirmeler aracılığıyla hava kalitesi değişimlerini anlık olarak takip edebilir.`,
    image: "/projects/airquality.png",
    tech: [
      "Java",
      "Spring Boot",
      "Kafka",
      "PostgreSQL",
      "React",
      "Ant Design",
      "Docker",
      "Leaflet.js",
      "Recharts",
    ],
    github: "https://github.com/gkhancobanoglu/real-time-air-quality-platform",
  },
  {
    title: "CRM Microservices Project",
    description: `
Mikroservis mimarisiyle modüler bir CRM sistemi tasarlayıp geliştirdim. 
Her biri kendi PostgreSQL veritabanına sahip bağımsız servisler (kullanıcı yönetimi, müşteri takibi, satış işlemleri) olarak yapılandırıldı. 
Spring Security ile JWT tabanlı kimlik doğrulama, Kafka tabanlı asenkron iletişim ve Spring Cloud Gateway üzerinden merkezi yönlendirme sağlandı.`,
    image: "/projects/crm.png",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Kafka",
      "PostgreSQL",
      "Docker",
      "Spring Cloud Gateway",
      "Swagger",
    ],
    github: "https://github.com/gkhancobanoglu/crm-microservices",
  },
  {
    title:
      "Commit Dashboard – GitHub & GitLab Commit Tracker with Thymeleaf UI",
    description: `
Java tabanlı bu uygulama, GitHub ve GitLab üzerindeki commit verilerini otomatik olarak çekip veritabanında saklayan bir izleme sistemidir. 
Spring Boot ve cronjob yapısı ile commit verileri düzenli aralıklarla güncellenir, Thymeleaf tabanlı arayüzde geliştirici bilgileri ve commit geçmişi görselleştirilir.
Commit filtreleme, sayfalama ve hata yönetimi gibi özelliklerle kullanıcı dostu bir arayüz sunar.`,
    image: "/projects/commitdashboard.png",
    tech: [
      "Java",
      "Spring Boot",
      "Thymeleaf",
      "MySQL",
      "Hibernate/JPA",
      "REST API",
      "Cronjob",
    ],
    github: "https://github.com/gkhancobanoglu/commit-dashboard",
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-6 pb-20 text-slate-200 flex flex-col gap-10">
      {projects.map((project, i) => (
        <div
          key={i}
          className="group flex flex-col md:flex-row items-center gap-8 rounded-2xl bg-white/5 border border-white/10 p-8 shadow-lg hover:border-emerald-400/20 hover:shadow-emerald-500/10 transition-all duration-300"
        >
          {/* Görsel */}
          <div className="md:w-1/3 w-full overflow-hidden rounded-xl">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* İçerik */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line mb-4">
                {project.description}
              </p>

              {/* Teknolojiler */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-emerald-500/10 text-emerald-300 px-2 py-1 rounded-md border border-emerald-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub Linki */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            )}
          </div>
        </div>
      ))}

      {/* Daha fazla proje CTA */}
      <div className="text-center mt-12">
        <p className="text-slate-400 mb-3">
          Daha fazla proje için GitHub profilimi ziyaret edebilirsin 👇
        </p>
        <a
          href="https://github.com/gkhancobanoglu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-500/90 hover:bg-emerald-500 text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 hover:scale-[1.03]"
        >
          <Github className="w-5 h-5" />
          GitHub Profilime Git
        </a>
      </div>
    </section>
  );
}
