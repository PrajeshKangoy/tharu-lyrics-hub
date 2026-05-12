"use client";

import React, { useState } from 'react';
import { Search, Music, Disc, ChevronRight, PlayCircle, BarChart3 } from 'lucide-react';
import Header from "../components/header/page";
import Footer from "../components/Footer/page";

const Genres = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const genres = [
    {
      id: 1,
      title: 'Morangya Tharu',
      description: 'Traditional evening songs reflecting daily life and social harmony.',
      count: '1.2k+ Songs',
      color: 'from-orange-500/20 to-transparent',
      borderColor: 'border-orange-500/30',
      iconColor: 'text-orange-500',
      img: 'https://images.unsplash.com/photo-1514525253348-8d980f49a5f1?q=80&w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Saptarya',
      description: 'Soulful melodies and romantic folk ballads unique to Tharu culture.',
      count: '850+ Songs',
      color: 'from-pink-500/20 to-transparent',
      borderColor: 'border-pink-500/30',
      iconColor: 'text-pink-500',
      img: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Danbarya Tharu',
      description: 'Modern fusion blending traditional beats with contemporary sounds.',
      count: '3.4k+ Songs',
      color: 'from-blue-500/20 to-transparent',
      borderColor: 'border-blue-500/30',
      iconColor: 'text-blue-500',
      img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Rajghariya',
      description: 'Spiritual and ceremonial rhythms used during major festivals.',
      count: '420+ Songs',
      color: 'from-purple-500/20 to-transparent',
      borderColor: 'border-purple-500/30',
      iconColor: 'text-purple-500',
      img: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=400&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Chitwan',
      description: 'High-energy dance tracks and celebratory community music.',
      count: '910+ Songs',
      color: 'from-yellow-500/20 to-transparent',
      borderColor: 'border-yellow-500/30',
      iconColor: 'text-yellow-500',
      img: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=400&h=300&fit=crop'
    },
    {
      id: 6,
      title: 'Kailali',
      description: 'Electronic re-imaginings of classic Tharu folk hits.',
      count: '1.1k+ Songs',
      color: 'from-cyan-500/20 to-transparent',
      borderColor: 'border-cyan-500/30',
      iconColor: 'text-cyan-500',
      img: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=400&h=400&fit=crop'
    }
  ];

  const filteredGenres = genres.filter(g => 
    g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    g.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-sans selection:bg-[#c5a059] selection:text-black">
      <Header />
      
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#c5a05910_0%,_transparent_70%)] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#c5a059] font-serif mb-6">Musical Genres</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-10 uppercase tracking-widest font-light">
            From ancient folk traditions to the pulsing beats of modern fusion.
          </p>

          {/* Search Box */}
          <div className="max-w-xl mx-auto relative">
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Find a specific style..."
              className="w-full bg-[#1a1a1a] border border-white/10 rounded-2xl py-4 px-6 pl-12 text-gray-200 placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#c5a059]/40 transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
          </div>
        </div>
      </div>

      {/* Genres Grid */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredGenres.map((genre) => (
            <div 
              key={genre.id} 
              className={`group relative overflow-hidden rounded-[2.5rem] bg-[#141414] border border-white/5 p-8 transition-all duration-500 hover:border-[#c5a059]/40 hover:-translate-y-2`}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${genre.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <div className={`p-4 rounded-2xl bg-white/5 border ${genre.borderColor} ${genre.iconColor}`}>
                    <Music size={28} />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs font-bold text-white">{genre.count}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-[#c5a059] transition-colors">{genre.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  {genre.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                  <div className="flex -space-x-3 overflow-hidden">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-[#141414] bg-gray-800 flex items-center justify-center">
                        <BarChart3 size={12} className="text-gray-500" />
                      </div>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#c5a059] group-hover:text-white transition-colors">
                    Explore <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredGenres.length === 0 && (
          <div className="text-center py-20 bg-white/5 rounded-[3rem] border border-dashed border-white/10">
            <Disc size={48} className="mx-auto text-gray-700 mb-4 animate-pulse" />
            <h3 className="text-xl text-gray-500 font-medium tracking-wide">Genre not found in our archive.</h3>
            <button onClick={() => setSearchQuery('')} className="mt-4 text-[#c5a059] text-sm font-bold uppercase tracking-widest">Show all genres</button>
          </div>
        )}
      </main>

      
      <Footer />

    </div>
  );
};

export default Genres;