import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gökhan Çobanoğlu | Portfolio",
  description: "Personal portfolio of Gökhan Çobanoğlu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="antialiased bg-black text-slate-100">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Analytics />
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
