"use client";

import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  TikTokIcon,
  TwitterIcon,
  MusicIcon,
} from "../Icons/SocialIcons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 backdrop-blur-xl mt-20 pt-10 pb-5">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 text-[11px] text-gray-400 font-bold uppercase tracking-widest">
          <Link href="/about" className="hover:text-[#c5a059] transition-colors">About Us</Link>
          <Link href="/Genres" className="hover:text-[#c5a059] transition-colors">Genres</Link>

          <Link href="/policies" className="hover:text-white transition-colors">Policies</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
        </div>

{/* Social Icons */}
<div className="flex items-center gap-6 text-gray-400">

  <a href="#" className="hover:text-white transition-all transform hover:scale-110">
    <FacebookIcon size={18} />
  </a>

  <a href="#" className="hover:text-white transition-all transform hover:scale-110">
    <InstagramIcon size={18} />
  </a>

  <a href="#" className="hover:text-white transition-all transform hover:scale-110">
    <TwitterIcon size={18} />
  </a>

  <a href="#" className="hover:text-white transition-all transform hover:scale-110">
    <YoutubeIcon size={18} />
  </a>

  <a href="#" className="hover:text-white transition-all transform hover:scale-110">
    <TikTokIcon size={18} />
  </a>

</div>

      </div>

      {/* Bottom Text */}
      <div className="text-center mt-12 text-[10px] text-gray-400 uppercase tracking-[0.4em] font-medium">
        © 2024 Tharu Lyrics Hub. All Rights Reserved.
      </div>

    </footer>
  );
}