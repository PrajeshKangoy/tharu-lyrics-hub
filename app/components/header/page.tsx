"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import AuthButton from "../../components/AuthButton/page";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">

      <div className="flex items-center justify-between px-6 py-4 md:px-12">

        {/* LOGO */}
        <Link href="/" className="flex flex-col">
          <h1 className="text-2xl font-bold tracking-widest text-[#c5a059] leading-none font-serif">
            THARU
          </h1>
          <span className="text-[10px] tracking-[0.3em] font-light text-gray-400">
            LYRICS HUB
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="/artist" className="hover:text-[#c5a059]">Artists</Link>
          <Link href="/Genres" className="hover:text-[#c5a059]">Genres</Link>
          <a href="#" className="hover:text-[#c5a059]">Folk Traditions</a>
          <a href="#" className="hover:text-[#c5a059]">Top Charts</a>
        </div>

        {/* LOGIN (DESKTOP) */}
        <div className="hidden md:block">
          <AuthButton />
        </div>

        {/* MOBILE BUTTON (FIXED VISIBILITY) */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md bg-white/10 text-white z-50"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden absolute left-0 right-0 top-full bg-black/95 backdrop-blur-md border-t border-white/10 px-6 py-5 space-y-4 text-gray-300 z-40">

          <Link href="/artist" onClick={() => setOpen(false)} className="block">
            Artists
          </Link>

          <Link href="/Genres" onClick={() => setOpen(false)} className="block">
            Genres
          </Link>

          <a href="#" onClick={() => setOpen(false)} className="block">
            Folk Traditions
          </a>

          <a href="#" onClick={() => setOpen(false)} className="block">
            Top Charts
          </a>

          <div className="pt-4 border-t border-white/10">
            <AuthButton />
          </div>
        </div>
      )}

    </nav>
  );
}