"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import AuthButton from "../AuthButton/page";

export default function Header() {
  const [open, setOpen] = useState(false);

  // 🔒 Prevent background scroll on mobile menu
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">

        <div className="flex items-center justify-between px-6 py-4 md:px-12">

          {/* LOGO */}
          <Link href="/" className="flex flex-col">
            <h1 className="text-2xl font-bold tracking-widest text-[#c5a059] font-serif">
              THARU
            </h1>
            <span className="text-[10px] tracking-[0.3em] text-gray-400">
              LYRICS HUB
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <Link href="/artist">Artists</Link>
            <Link href="/Genres">Genres</Link>
            <a href="#">Folk Traditions</a>
            <a href="#">Top Charts</a>
          </div>

          {/* LOGIN */}
          <div className="hidden md:block">
            <AuthButton />
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-md bg-white/10 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </header>

      {/* MOBILE MENU (INSIDE SAME FLOW — FIXES CHROME BUG) */}
      {open && (
        <div className="fixed top-0 left-0 w-full h-full z-50 bg-black/95 flex flex-col px-6 pt-24 space-y-6 text-gray-300">

          <Link href="/artist" onClick={() => setOpen(false)} className="text-lg">
            Artists
          </Link>

          <Link href="/Genres" onClick={() => setOpen(false)} className="text-lg">
            Genres
          </Link>

          <a href="#" onClick={() => setOpen(false)} className="text-lg">
            Folk Traditions
          </a>

          <a href="#" onClick={() => setOpen(false)} className="text-lg">
            Top Charts
          </a>

          <div className="pt-6 border-t border-white/10">
            <AuthButton />
          </div>

        </div>
      )}
    </>
  );
}