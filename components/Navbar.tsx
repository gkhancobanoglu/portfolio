"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Anasayfa" },
    { href: "/about", label: "Hakkımda" },
    { href: "/projects", label: "Projeler" },
    { href: "/contact", label: "İletişim" },
  ];

  return (
    <nav className="w-full bg-[#0B0F19]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Sol: İmza */}
        <Link
          href="/"
          className="text-2xl italic font-[var(--font-playfair)] tracking-wide text-white transition-transform duration-200 hover:scale-[1.04]"
        >
          Gökhan&nbsp;Çobanoğlu
        </Link>

        {/* Orta: Menü */}
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
      </div>
    </nav>
  );
}
