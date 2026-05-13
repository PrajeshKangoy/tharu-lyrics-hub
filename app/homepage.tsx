"use client";

import React, { useState } from "react";
import { Search, Music, Play } from "lucide-react";
import Link from "next/link";

/* -------------------------------- */
/* HELPERS */
/* -------------------------------- */

const createSlug = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

/* -------------------------------- */
/* SEARCH DATA */
/* -------------------------------- */

const searchableData = [
  {
    type: "song",
    title: "Banijo Hamar Mann Ke Meet Ge",
    slug: "banijo-hamar-mann-ke-meet-ge",
    artist: "Kashin Chaudhary",
  },

  {
    type: "song",
    title: "Pogadi",
    slug: "pogadi",
    artist: "Dev Krishna Biswas",
  },

  {
    type: "song",
    title: "Tohar Kurti Me Remix",
    slug: "tohar-kurti-me-remix",
    artist: "Annu Chaudhary",
  },

  {
    type: "song",
    title: "Maan Lenu Sathi Toh",
    slug: "maan-lenu-sathi-toh",
    artist: "Ganesh Chaudhary",
  },

  {
    type: "artist",
    title: "Prajesh Kangoy",
    slug: "prajesh-kangoy",
  },

  {
    type: "artist",
    title: "Annu Chaudhary",
    slug: "annu-chaudhary",
  },

  {
    type: "artist",
    title: "Ganesh Chaudhary",
    slug: "ganesh-chaudhary",
  },

  {
    type: "artist",
    title: "Dev Krishna Biswas",
    slug: "dev-krishna-biswas",
  },
];

/* -------------------------------- */
/* SOCIAL ICONS */
/* -------------------------------- */

const FacebookIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

const TikTokIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

/* -------------------------------- */
/* SONG DATA */
/* -------------------------------- */

const trendingSongs = [
  {
    id: 1,
    title: "Banijo Hamar Mann Ke Meet Ge",
    artist: "Kashin Chaudhary",
    img: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=400&h=400&fit=crop",
  },

  {
    id: 2,
    title: "Pogadi",
    artist: "Dev Krishna Biswas",
    img: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=400&h=400&fit=crop",
  },

  {
    id: 3,
    title: "Tohar Kurti Me Remix",
    artist: "Annu Chaudhary",
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&h=400&fit=crop",
  },

  {
    id: 4,
    title: "Maan Lenu Sathi Toh",
    artist: "Ganesh Chaudhary",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&h=400&fit=crop",
  },

  {
    id: 5,
    title: "Ka Yehe Ho Maya",
    artist: "RK Tharu",
    img: "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=400&h=400&fit=crop",
  },

  {
    id: 6,
    title: "Ahile Bela Bhaxaina",
    artist: "Prabhat Chaudhary",
    img: "https://images.unsplash.com/photo-1514525253348-8d980f49a5f1?q=80&w=400&h=400&fit=crop",
  },
];

/* -------------------------------- */
/* COMPONENT */
/* -------------------------------- */

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState("");

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
                onChange={(e) =>
                  setSearchQuery(e.target.value)
                }
                placeholder="Search songs, artists, lyrics..."
                className="w-full rounded-2xl border border-white/10 bg-[#1e1e1e]/60 py-5 px-7 text-gray-200 shadow-2xl backdrop-blur-2xl transition-all placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#c5a059]/30"
              />

              {/* ICON */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 rounded-xl border border-[#c5a059]/30 bg-[#c5a059]/20 p-2.5">

                <Search
                  size={20}
                  className="text-[#c5a059]"
                />

              </div>

              {/* SEARCH RESULTS */}
              {searchQuery.trim() !== "" && (
                <div className="absolute mt-3 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#161616]/95 shadow-2xl backdrop-blur-2xl">

                  {filteredResults.length > 0 ? (
                    filteredResults.map(
                      (item, index) => (
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

                            <p className="font-medium text-white">
                              {item.title}
                            </p>

                            <p className="text-xs uppercase tracking-widest text-zinc-500">

                              {item.type}

                              {"artist" in item &&
                                item.artist &&
                                ` • ${item.artist}`}

                            </p>

                          </div>

                          <Music
                            size={16}
                            className="text-zinc-500"
                          />

                        </Link>
                      )
                    )
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

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

            {trendingSongs.map((song) => (
              <Link
                href={`/lyrics/${createSlug(
                  song.title
                )}`}
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

                      <Play
                        fill="black"
                        size={24}
                      />

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

        </section>

        {/* ARTISTS */}
        <section className="mt-20">

          <div className="mb-6 flex items-center justify-between">

            <h2 className="text-xl font-bold uppercase tracking-wider text-[#c5a059]">
              Artists You May Like
            </h2>

          </div>

          <div className="flex gap-6 overflow-x-auto pb-4">

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
};

export default Homepage;