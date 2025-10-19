"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Anasayfa" },
    { href: "/about", label: "Hakkımda" },
    { href: "/projects", label: "Projeler" },
    { href: "/contact", label: "İletişim" },
  ];

  return (
    <nav className="w-full bg-[#0B0F19] fixed top-0 left-0 z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Sol: İmza */}
        <Link
          href="/"
          className="text-2xl italic font-[var(--font-playfair)] tracking-wide text-white transition-transform duration-200 hover:scale-[1.04]"
        >
          Gökhan&nbsp;Çobanoğlu
        </Link>

        {/* Masaüstü Menü */}
        <ul className="hidden md:flex items-center gap-10 text-[1.05rem] font-semibold tracking-wide">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href} className="relative group">
                <Link
                  href={href}
                  className={`transition-colors ${
                    isActive ? "text-white" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-full bg-white"
                      : "w-0 bg-slate-500/50 group-hover:w-full"
                  }`}
                />
              </li>
            );
          })}
        </ul>

        {/* Mobil Menü Butonu */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-300 hover:text-white transition"
          aria-label="Menüyü Aç/Kapat"
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobil Menü */}
      {open && (
        <div className="md:hidden bg-[#0B0F19] border-t border-white/10">
          <ul className="flex flex-col items-center gap-4 py-4 text-[1rem] font-semibold tracking-wide text-slate-300">
            {links.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`block transition-colors ${
                      isActive ? "text-white" : "hover:text-white"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
