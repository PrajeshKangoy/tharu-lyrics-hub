"use client";

import Link from "next/link";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 md:px-12 bg-black/20 backdrop-blur-sm sticky top-0 z-50">

      {/* Logo */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold tracking-widest text-[#c5a059] leading-none font-serif">
          THARU
        </h1>
        <span className="text-[10px] tracking-[0.3em] font-light text-gray-400">
          LYRICS HUB
        </span>
      </div>

      {/* Menu */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <Link href="/" className="hover:text-[#c5a059] transition-colors">
          Home
        </Link>

        <Link href="/artist" className="hover:text-[#c5a059] transition-colors">
          Artists
        </Link>

        <Link href="/Genres" className="hover:text-[#c5a059] transition-colors">Genres</Link>


        <a href="#" className="hover:text-[#c5a059] transition-colors">
          Folk Traditions
        </a>

        <a href="#" className="hover:text-[#c5a059] transition-colors">
          Top Charts
        </a>
      </div>

      {/* Login Button */}
      <button className="bg-[#333] hover:bg-[#444] text-gray-200 px-6 py-1.5 rounded-full text-sm font-medium transition-all border border-white/10 shadow-lg">
        Log in
      </button>
    </nav>
  );
}