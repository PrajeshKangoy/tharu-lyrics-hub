"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Users,
  ChevronRight,
  Mic2,
  Star,
} from "lucide-react";
// import Header from "../components/header/page";
// import Footer from "../components/Footer/page";

/* ---------------- SOCIAL ICONS ---------------- */
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);

/* ---------------- DATA ---------------- */
const categories = ["All", "Vocalist", "Composer", "Folk Legend", "New Generation"];

const artists = [
  {
    id: 1,
    name: "Annu Chaudhary",
    slug: "annu-chaudhary",
    role: "Vocalist",
    songs: 120,
    img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=400&h=400&fit=crop",
    trending: true,
  },
  {
    id: 2,
    name: "RK Tharu",
    slug: "rk-tharu",
    role: "Composer & Singer",
    songs: 85,
    img: "https://images.unsplash.com/photo-1520194160464-1823df2a5a3a?q=80&w=400&h=400&fit=crop",
    trending: true,
  },
  {
    id: 3,
    name: "Dev Krishna Biswas",
    slug: "dev-krishna-biswas",
    role: "Folk Legend",
    songs: 200,
    img: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=400&h=400&fit=crop",
    trending: false,
  },
  {
    id: 4,
    name: "Ganesh Chaudhary",
    slug: "ganesh-chaudhary",
    role: "Vocalist",
    songs: 45,
    img: "https://images.unsplash.com/photo-1534308143481-c5509e24d2ee?q=80&w=400&h=400&fit=crop",
    trending: false,
  },
  {
    id: 5,
    name: "Prabhat Chaudhary",
    slug: "prabhat-chaudhary",
    role: "New Generation",
    songs: 12,
    img: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=400&h=400&fit=crop",
    trending: true,
  },
    {
    id: 6,
    name: "Prajesh Kangoy",
    slug: "prajesh-kangoy",
    role: "New Generation",
    songs: 12,
    img: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=400&h=400&fit=crop",
    trending: true,
  },
];

export default function ArtistsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredArtists = artists.filter((a) => {
    const matchSearch = a.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = activeFilter === "All" || a.role.includes(activeFilter);
    return matchSearch && matchCategory;
  });

  return (
    
    <div className="min-h-screen bg-[#0f0f0f] text-white font-sans selection:bg-[#c5a059] selection:text-black">
    {/* <Header  /> */}

      {/* NAVBAR */}
      {/* <nav className="flex justify-between px-6 py-4 border-b border-white/10">
        <h1 className="text-[#c5a059] font-bold text-xl">THARU LYRICS</h1>

        <div className="hidden md:flex gap-6 text-sm text-gray-300">
          <Link href="/">Home</Link>
          <Link href="/artist" className="text-[#c5a059]">Artists</Link>
        </div>
      </nav> */}



      {/* HEADER */}
      <div className="text-center py-2 px-4">

        {/* SEARCH */}
        <div className="mt-8 max-w-xl mx-auto relative">
          <Search className="absolute left-4 top-4 text-gray-500" />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search artists..."
            className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl py-4 pl-12"
          />
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs border ${
                activeFilter === cat
                  ? "bg-[#c5a059] text-black"
                  : "border-white/10 text-gray-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ARTISTS GRID */}
      <main className="max-w-8xl mx-auto px-10 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtists.map((artist) => (
            <Link
              key={artist.id}
              href={`/artist/${artist.slug}`}
              className="bg-[#141414] border border-white/5 rounded-2xl p-4 hover:border-[#c5a059]/30 transition"
            >
              <div className="relative">
                <img
                  src={artist.img}
                  className="w-full h-60 object-cover rounded-xl"
                />

                {artist.trending && (
                  <span className="absolute top-3 left-3 bg-black/60 px-2 py-1 text-xs rounded-full flex items-center gap-1">
                    <Star size={12} className="text-[#c5a059]" />
                    Trending
                  </span>
                )}
              </div>

              <h3 className="mt-3 font-bold text-lg">{artist.name}</h3>
              <p className="text-gray-500 text-sm">{artist.role}</p>

              <div className="flex justify-between items-center mt-3 text-sm text-gray-400">
                <span>{artist.songs} songs</span>
                <ChevronRight />
              </div>
            </Link>
          ))}
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}