"use client";

import React, { useState } from 'react';
import { Search, Music, Play } from 'lucide-react';
import Link from "next/link";



// Custom SVG Social Icons to avoid library export issues
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
);

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
);

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const trendingSongs = [
    { id: 1, title: 'Banijo Hamar Mann Ke Meet Ge', artist: 'Kashin Chaudhary, Anuma Chaudhaey', img: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=400&h=400&fit=crop' },
    { id: 2, title: 'Pogadi', artist: 'Dev Krishna Biswas', img: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=400&h=400&fit=crop' },
    { id: 3, title: 'Tohar Kurti Me (Remix)', artist: 'Annu Chaudhary', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&h=400&fit=crop' },
    { id: 4, title: 'Maan Lenu Sathi Toh', artist: 'Ganesh Chaudhary', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&h=400&fit=crop' },
    { id: 5, title: 'Ka yehe ho maya', artist: 'RK Tharu', img: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=400&h=400&fit=crop' },
    { id: 6, title: 'Ahile Bela Bhaxaina', artist: 'Prabhat Chaudhary', img: 'https://images.unsplash.com/photo-1514525253348-8d980f49a5f1?q=80&w=400&h=400&fit=crop' },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-sans selection:bg-[#c5a059] selection:text-black">
      
      {/* Header / Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 bg-black/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold tracking-widest text-[#c5a059] leading-none font-serif">THARU</h1>
          <span className="text-[10px] tracking-[0.3em] font-light text-gray-400">LYRICS HUB</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="/artist" className="hover:text-[#c5a059] transition-colors">Artists</Link>
          <Link href="/Genres" className="hover:text-[#c5a059] transition-colors">Genres</Link>

          <a href="#" className="hover:text-[#c5a059] transition-colors">Folk Traditions</a>
          <a href="#" className="hover:text-[#c5a059] transition-colors">Top Charts</a>
        </div>

        <button className="bg-[#333] hover:bg-[#444] text-gray-200 px-6 py-1.5 rounded-full text-sm font-medium transition-all border border-white/10 shadow-lg">
          Log in
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative w-full max-w-10xl mx-auto px-4 mt-6">
        <div className="relative h-[270px] w-full overflow-hidden rounded-[2.5rem]">
          {/* Main Cover Image */}
            <img 
              src="/images/cover_image.png" 
              alt="cover image" 
              className="w-full h-[290px] object-cover brightness-[0.7]"
            />
          {/* Darker gradient overlay to match image */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#0f0f0f]"></div>
          
          
          {/* Central Search Bar (Glassmorphic) */}
          <div className="absolute bottom-[68px] left-1/2 -translate-x-1/2 w-full max-w-2xl px-6 z-20">
            <div className="relative">
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for Tharu lyrics, artists, and songs..."
                className="w-full bg-[#1e1e1e]/60 backdrop-blur-2xl border border-white/10 rounded-2xl py-5 px-7 text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#c5a059]/30 shadow-2xl transition-all"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#c5a059]/20 p-2.5 rounded-xl border border-[#c5a059]/30 hover:bg-[#c5a059]/40 transition-all cursor-pointer">
                <Search size={20} className="text-[#c5a059]" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-10xl mx-auto px-6 pt-24 pb-12 ml-15">
        
        {/* Trending Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold tracking-wider text-[#c5a059] uppercase">TRENDING THARU HITS</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {trendingSongs.map((song) => (
              <Link
  href={`/lyrics/${song.title
    .toLowerCase()
    .replace(/\s+/g, "-")}`}
  key={song.id}
  className="group cursor-pointer"
>
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 border border-white/10 transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                  <img 
                    src={song.img} 
                    alt={song.title} 
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-[#c5a059] p-4 rounded-full text-black shadow-xl">
                      <Play fill="black" size={24} />
                    </div>
                  </div>
                </div>
                <h3 className="text-[15px] font-bold text-gray-100 truncate group-hover:text-[#c5a059] transition-colors leading-snug">{song.title}</h3>
                <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider font-semibold opacity-80">{song.artist}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

{/* Artists You May Like Section */}
<section className="mt-16 ml-15">
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-xl font-bold tracking-wider text-[#c5a059] uppercase">
      Artists You May Like
    </h2>
  </div>

  <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
    
    {[
      {
        name: "Prajesh Kangoy",
        slug: "prajesh-kangoy",
        img: "https://i.pravatar.cc/150?img=1",
      },
      {
        name: "RK Tharu",
        slug: "rk-tharu",
        img: "https://i.pravatar.cc/150?img=2",
      },
      {
        name: "Annu Chaudhary",
        slug: "annu-chaudhary",
        img: "https://i.pravatar.cc/150?img=3",
      },
      {
        name: "Dev Krishna Biswas",
        slug: "dev-krishna-biswas",
        img: "https://i.pravatar.cc/150?img=4",
      },
      {
        name: "Ganesh Chaudhary",
        slug: "ganesh-chaudhary",
        img: "https://i.pravatar.cc/150?img=5",
      },
      {
        name: "Prabhat Chaudhary",
        slug: "prabhat-chaudhary",
        img: "https://i.pravatar.cc/150?img=6",
      },
    ].map((artist, i) => (
      
      <Link
        href={`/artist/${artist.slug}`}
        key={i}
        className="flex flex-col items-center cursor-pointer min-w-[100px] group"
      >
        
        <div className="w-20 h-20 rounded-full overflow-hidden border border-white/10 group-hover:scale-110 transition-transform">
          <img
            src={artist.img}
            alt={artist.name}
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-xs text-gray-400 mt-2 text-center group-hover:text-[#c5a059]">
          {artist.name}
        </p>

      </Link>
    ))}

  </div>
</section>

      {/* Footer Navigation */}
      <footer className="border-t border-white/10 bg-black/60 backdrop-blur-xl mt-20 pt-10 pb-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          
          <div className="flex flex-wrap justify-center gap-8 text-[11px] text-gray-400 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">My lyrics</a>
          <Link href="/genre" className="hover:text-[#c5a059] transition-colors">Genres</Link>
            <a href="#" className="hover:text-white transition-colors">Folk Traditions</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
              <FacebookIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
              <InstagramIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
              <XIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
              <YoutubeIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
              <TikTokIcon />
            </a>
          </div>
          
        </div>
        <div className="text-center mt-12 text-[10px] text-gray-700 uppercase tracking-[0.4em] font-medium">
          &copy; 2024 Tharu Lyrics Hub. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Homepage;