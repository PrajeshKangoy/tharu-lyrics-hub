"use client";

import React, { useState, useEffect } from "react";
import { Search, Music, Play } from "lucide-react";
import Link from "next/link";
import axios from "axios";

/* -------------------------------- */
/* TYPES & INTERFACES */
/* -------------------------------- */

interface SearchItem {
  type: "song" | "artist";
  title: string;
  slug: string;
  artist?: string;
}

interface ApiSongItem {
  id: number;
  title: string;
  singer: string[];
  slug: string;
}

interface TrendingSong {
  id: number;
  title: string;
  artist: string;
  img: string;
  slug: string;
}

interface ArtistItem {
  name: string;
  slug: string;
  img: string;
}

/* -------------------------------- */
/* CONSTANTS & FALLBACKS */
/* -------------------------------- */

const DEFAULT_SONG_IMAGE = "https://images.unsplash.com/photo-1514525253348-8d980f49a5f1?q=80&w=400&h=400&fit=crop";

const recommendationArtists: ArtistItem[] = [
  { name: "Prajesh Kangoy", slug: "prajesh-kangoy", img: "https://i.pravatar.cc/150?img=1" },
  { name: "RK Tharu", slug: "rk-tharu", img: "https://i.pravatar.cc/150?img=2" },
  { name: "Annu Chaudhary", slug: "annu-chaudhary", img: "https://i.pravatar.cc/150?img=3" },
  { name: "Dev Krishna Biswas", slug: "dev-krishna-biswas", img: "https://i.pravatar.cc/150?img=4" },
  { name: "Ganesh Chaudhary", slug: "ganesh-chaudhary", img: "https://i.pravatar.cc/150?img=5" },
  { name: "Prabhat Chaudhary", slug: "prabhat-chaudhary", img: "https://i.pravatar.cc/150?img=6" },
];

/* -------------------------------- */
/* MAIN COMPONENT */
/* -------------------------------- */

export default function Homepage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [trendingSongs, setTrendingSongs] = useState<TrendingSong[]>([]);
  const [searchableData, setSearchableData] = useState<SearchItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Fetch data directly from your local FastAPI backend
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get<ApiSongItem[]>("http://localhost:8000/api/v1/lyrics/titles");
        
        if (response.data && Array.isArray(response.data)) {
          // 1. Map API structures to match TrendingSong layout
          const mappedTrending: TrendingSong[] = response.data.map((item) => ({
            id: item.id,
            title: item.title,
            artist: item.singer ? item.singer.join(", ") : "Unknown Artist",
            img: DEFAULT_SONG_IMAGE, // Temporary default image fallback
            slug: item.slug
          }));

          // 2. Map API structures into SearchableData items
          const mappedSearchable: SearchItem[] = response.data.map((item) => ({
            type: "song",
            title: item.title,
            slug: item.slug,
            artist: item.singer ? item.singer.join(", ") : undefined
          }));

          setTrendingSongs(mappedTrending);
          setSearchableData(mappedSearchable);
        }
      } catch (error) {
        console.error("Error fetching data from API:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSongs();
  }, []);

  const filteredResults = searchableData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* HERO */}
      <header className="relative mx-auto mt-6 w-full max-w-[1800px] px-4">
        <div className="relative h-[320px] overflow-hidden rounded-[2.5rem]">
          {/* COVER */}
          <img
            src="/images/cover_image.png"
            alt="cover"
            className="h-full w-full object-cover brightness-[0.7]"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#0f0f0f]" />

          {/* SEARCH */}
          <div className="absolute bottom-[68px] left-1/2 z-20 w-full max-w-2xl -translate-x-1/2 px-6">
            <div className="relative">
              {/* INPUT */}
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search songs, artists, lyrics..."
                className="w-full rounded-2xl border border-white/10 bg-[#1e1e1e]/60 py-5 px-7 text-gray-200 shadow-2xl backdrop-blur-2xl transition-all placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#c5a059]/30"
              />

              {/* ICON */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 rounded-xl border border-[#c5a059]/30 bg-[#c5a059]/20 p-2.5">
                <Search size={20} className="text-[#c5a059]" />
              </div>

              {/* SEARCH RESULTS */}
              {searchQuery.trim() !== "" && (
                <div className="absolute mt-3 max-h-80 w-full overflow-y-auto rounded-2xl border border-white/10 bg-[#161616]/95 shadow-2xl backdrop-blur-2xl">
                  {filteredResults.length > 0 ? (
                    filteredResults.map((item, index) => (
                      <Link
                        key={index}
                        href={
                          item.type === "song"
                            ? `/lyrics/${item.slug}`
                            : `/artist/${item.slug}`
                        }
                        className="flex items-center justify-between border-b border-white/5 px-5 py-4 transition hover:bg-white/5"
                      >
                        <div>
                          <p className="font-medium text-white">{item.title}</p>
                          <p className="text-xs uppercase tracking-widest text-zinc-500">
                            {item.type}
                            {item.artist && ` • ${item.artist}`}
                          </p>
                        </div>
                        <Music size={16} className="text-zinc-500" />
                      </Link>
                    ))
                  ) : (
                    <div className="px-5 py-6 text-sm text-zinc-500">
                      No results found.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-[1800px] px-6 pt-24 pb-12">
        {/* TRENDING */}
        <section>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-xl font-bold uppercase tracking-wider text-[#c5a059]">
              Most Searched Songs
            </h2>
          </div>

          {isLoading ? (
            <div className="flex h-40 items-center justify-center text-zinc-400">
              Loading latest content...
            </div>
          ) : trendingSongs.length > 0 ? (
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {trendingSongs.map((song) => (
                <Link
                  href={`/lyrics/${song.slug}`}
                  key={song.id}
                  className="group cursor-pointer"
                >
                  <div className="relative mb-4 aspect-square overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 group-hover:scale-[1.03]">
                    <img
                      src={song.img}
                      alt={song.title}
                      className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                      <div className="rounded-full bg-[#c5a059] p-4 text-black shadow-xl">
                        <Play fill="black" size={24} />
                      </div>
                    </div>
                  </div>

                  <h3 className="truncate text-[15px] font-bold leading-snug text-gray-100 transition-colors group-hover:text-[#c5a059]">
                    {song.title}
                  </h3>

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-gray-500 opacity-80">
                    {song.artist}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-sm text-zinc-500">No tracks available right now.</div>
          )}
        </section>

        {/* ARTISTS */}
        <section className="mt-20">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold uppercase tracking-wider text-[#c5a059]">
              Artists You May Like
            </h2>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4">
            {recommendationArtists.map((artist, i) => (
              <Link
                href={`/artist/${artist.slug}`}
                key={i}
                className="group flex min-w-[100px] flex-col items-center"
              >
                <div className="h-20 w-20 overflow-hidden rounded-full border border-white/10 transition-transform group-hover:scale-110">
                  <img
                    src={artist.img}
                    alt={artist.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <p className="mt-2 text-center text-xs text-gray-400 transition-colors group-hover:text-[#c5a059]">
                  {artist.name}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}