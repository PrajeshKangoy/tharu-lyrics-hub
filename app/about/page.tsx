"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          {/* <p className="text-[#c5a059] uppercase tracking-[0.4em] text-xs mb-4">
            About Us
          </p> */}

          <h1 className="text-5xl font-bold tracking-widest text-[#c5a059] leading-tight font-serif">
           THARU {" "}
                <span className="text-[2xl] tracking-[0.3em] tracking-widest font-light leading-tight text-gray-400">
                    Lyrics Hub
                </span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A modern platform dedicated to music lovers, lyrics readers,
            and independent artists. Discover songs, explore genres,
            and connect with music beyond just listening.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:bg-white/10 transition-all">
            <h2 className="text-xl font-semibold mb-4">
              Our Mission
            </h2>

            <p className="text-gray-400 leading-relaxed">
              We aim to create a beautiful space where users can
              explore lyrics, artists, and genres with a clean
              modern experience.
            </p>
          </div>

          {/* Card */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:bg-white/10 transition-all">
            <h2 className="text-xl font-semibold mb-4">
              Music First
            </h2>

            <p className="text-gray-400 leading-relaxed">
              From indie pop to emotional rock and lofi vibes,
              we celebrate every style of music and every story
              behind the lyrics.
            </p>
          </div>

          {/* Card */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:bg-white/10 transition-all">
            <h2 className="text-xl font-semibold mb-4">
              Community
            </h2>

            <p className="text-gray-400 leading-relaxed">
              We believe music connects people. Our platform is
              built for listeners, creators, and passionate fans.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <h2 className="text-3xl font-bold mb-6">
            Explore Music With Us
          </h2>

          <Link
            href="/Genres"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#c5a059] text-black font-semibold hover:scale-105 transition-transform"
          >
            Browse Genres
          </Link>
        </div>

      </div>
    </main>
  );
}