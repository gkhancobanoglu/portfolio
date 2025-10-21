"use client";

import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [tooltip, setTooltip] = useState<string | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-6 pt-10 pb-20 text-slate-200 grid md:grid-cols-2 gap-12">
      {/* İLETİŞİM BİLGİLERİ */}
      <div className="flex flex-col gap-10">
        <div>
          <h3 className="text-lg font-semibold text-emerald-400 mb-4">
            İletişim Bilgileri
          </h3>
          <div className="space-y-6">
            {/* Mail */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 shadow-inner">
                <Mail className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs uppercase text-slate-400 tracking-wide">
                  E-posta
                </p>
                <p className="text-sm text-white">gkhancobanoglu@gmail.com</p>
              </div>
            </div>

            {/* Telefon */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 shadow-inner">
                <Phone className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs uppercase text-slate-400 tracking-wide">
                  Telefon
                </p>
                <p className="text-sm text-white">+90 544 523 9802</p>
              </div>
            </div>

            {/* Konum */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 shadow-inner">
                <MapPin className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs uppercase text-slate-400 tracking-wide">
                  Konum
                </p>
                <p className="text-sm text-white">İstanbul, Türkiye</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sosyal Medya */}
        <div>
          <h3 className="text-lg font-semibold text-emerald-400 mb-4">
            Sosyal Medya
          </h3>
          <div className="flex items-center gap-6">
            {/* LinkedIn */}
            <div
              className="relative"
              onMouseEnter={() => setTooltip("LinkedIn")}
              onMouseLeave={() => setTooltip(null)}
            >
              <a
                href="https://www.linkedin.com/in/gokhan-cobanoglu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-400/30 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-emerald-400" />
              </a>
              {tooltip === "LinkedIn" && (
                <span className="absolute left-1/2 -translate-x-1/2 -top-7 text-xs text-white bg-emerald-500/90 px-2 py-0.5 rounded-md whitespace-nowrap">
                  LinkedIn
                </span>
              )}
            </div>

            {/* GitHub */}
            <div
              className="relative"
              onMouseEnter={() => setTooltip("GitHub")}
              onMouseLeave={() => setTooltip(null)}
            >
              <a
                href="https://github.com/gkhancobanoglu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-400/30 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6 text-emerald-400" />
              </a>
              {tooltip === "GitHub" && (
                <span className="absolute left-1/2 -translate-x-1/2 -top-7 text-xs text-white bg-emerald-500/90 px-2 py-0.5 rounded-md whitespace-nowrap">
                  GitHub
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MESAJ FORMU */}
      <div className="bg-white/5 border border-white/10 rounded-2xl shadow-xl p-8 backdrop-blur-sm">
        <h2 className="text-2xl font-semibold mb-6 text-white">
          Birlikte <span className="text-emerald-400">çalışalım.</span>
        </h2>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const formData = new FormData(form);

            const payload = {
              name: formData.get("name"),
              email: formData.get("email"),
              subject: formData.get("subject"),
              message: formData.get("message"),
            };

            const toastId = toast.loading("Mesajınız gönderiliyor...");

            try {
              const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
              });

              const data = await res.json();
              toast.dismiss(toastId);

              if (data.ok) {
                toast.success("Mesajınız başarıyla gönderildi 🎉");
                form.reset();
              } else {
                toast.error(
                  `Gönderilemedi: ${data.error || "Bilinmeyen hata"}`
                );
              }
            } catch (err) {
              toast.dismiss(toastId);
              toast.error("Sunucu hatası, lütfen tekrar deneyin ❌");
            }
          }}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Ad Soyad *"
            required
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-400 text-slate-200 placeholder-slate-500"
          />
          <input
            type="email"
            name="email"
            placeholder="E-posta *"
            required
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-400 text-slate-200 placeholder-slate-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Konu *"
            required
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-400 text-slate-200 placeholder-slate-500"
          />
          <textarea
            name="message"
            placeholder="Mesajınız..."
            rows={5}
            required
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-400 text-slate-200 placeholder-slate-500"
          ></textarea>

          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.03]"
          >
            Gönder
          </button>
        </form>
      </div>
    </section>
  );
}
