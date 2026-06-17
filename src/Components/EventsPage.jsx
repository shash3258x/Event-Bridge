import React, { useState } from 'react';
import { MOCK_EVENTS } from '../mockData';

export default function EventsPage({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', 'FESTIVAL', 'HACKATHON', 'CONCERT', 'SPORTS'];

  const filteredEvents = MOCK_EVENTS.filter(event => {
    const query = searchQuery.toLowerCase().trim();
    
    if (selectedCategory !== 'ALL' && event.category !== selectedCategory) {
      return false;
    }

    if (!query) return true;

    if (query.startsWith('city:')) {
      const cityValue = query.replace('city:', '');
      return event.city.toLowerCase().startsWith(cityValue);
    }
    if (query.startsWith('category:')) {
      const catValue = query.replace('category:', '');
      return event.category.toLowerCase().includes(catValue);
    }

    return (
      event.title.toLowerCase().includes(query) ||
      event.venue.toLowerCase().includes(query) ||
      event.city.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-[#2A0B0B] text-[#F2EDE4] font-sans antialiased overflow-x-hidden w-full">
      
      {/* Top Bar Layout */}
      <nav className="h-[115px] px-8 md:px-16 border-b border-[#b43c28]/20 flex items-center justify-between sticky top-0 bg-[#2A0B0B]/95 backdrop-blur-md z-40 w-full">
        <div onClick={() => onNavigate('landing')} className="text-4xl font-black uppercase tracking-tight flex items-center gap-4 cursor-pointer select-none">
          <span className="w-11 h-11 rounded-full border-[3px] border-[#E84B1A] flex items-center justify-center after:w-4.5 after:h-4.5 after:bg-[#E84B1A] after:rounded-full shrink-0"></span>
          CONFLUX
        </div>
        <button 
          onClick={() => {
            localStorage.removeItem('userSession');
            onNavigate('landing');
          }} 
          className="bg-transparent border border-[#b43c28]/40 text-[#F2EDE4] text-sm font-black tracking-[0.2em] uppercase px-10 py-4.5 hover:border-[#E84B1A] hover:text-[#E84B1A] transition-colors"
        >
          LOG OUT
        </button>
      </nav>

      {/* Hero Header Area */}
      <header className="px-8 md:px-16 pt-28 pb-20 w-full">
        <div className="flex items-center gap-4 text-sm font-black tracking-[0.3em] uppercase text-[#E84B1A] mb-6">
          <span className="w-3 h-3 bg-[#E84B1A] rounded-full"></span>
          LIVE ACROSS INDIA
        </div>
        <h1 className="font-serif italic font-normal text-[clamp(65px,11vw,150px)] leading-[0.88] text-[#F2EDE4] tracking-tighter select-none">
          Events worth<br />showing up for.
        </h1>
        <p className="mt-10 text-2xl md:text-3xl text-[#B07070] font-normal leading-relaxed tracking-wide max-w-4xl">
          Festivals, hackathons, indie nights and closed-door dinners — handpicked from campuses across the country.
        </p>
      </header>

      {/* Structural Filter Actions Bar */}
      <div className="px-8 md:px-16 w-full mb-20">
        <div className="border-t border-b border-[#b43c28]/10 py-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8 w-full">
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-black tracking-[0.2em] uppercase px-8 py-5 border transition-all cursor-pointer ${
                  selectedCategory === cat 
                    ? 'border-[#E84B1A] bg-[#E84B1A] text-white' 
                    : 'border-[#b43c28]/20 text-[#F2EDE4] hover:border-[#E84B1A] bg-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Expanded Search Input Box */}
          <div className="w-full xl:max-w-xl">
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title or city..."
              className="w-full bg-[#210808] border border-[#b43c28]/30 px-8 py-5 text-base font-semibold text-[#F2EDE4] placeholder-[#B07070]/30 focus:outline-none focus:border-[#E84B1A] transition-colors"
            />
          </div>

        </div>
      </div>

      {/* Grid Layout */}
      <main className="px-8 md:px-16 w-full pb-44">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full items-stretch">
          {filteredEvents.map((event) => (
            <div 
              key={event.eventId} 
              onClick={() => onNavigate(`event-${event.eventId}`)}
              className="bg-[#210808] border border-[#b43c28]/20 flex flex-col justify-between min-h-[850px] relative group hover:border-[#E84B1A] cursor-pointer transition-all duration-300 w-full"
            >
              
              {/* Massive Header Character Block */}
              <div className="h-[320px] p-12 relative flex items-end justify-start border-b border-[#b43c28]/10 overflow-hidden bg-[#240909]">
                <span className="absolute top-10 left-10 bg-[#2A0B0B] border border-[#b43c28]/30 text-white text-sm font-black tracking-[0.2em] uppercase px-6 py-3 z-10">
                  {event.category}
                </span>
                
                {/* Backing Typography Mask */}
                <div className="font-serif italic text-[#E84B1A]/20 text-[320px] leading-none absolute left-10 bottom-[-60px] select-none transition-transform group-hover:scale-105 duration-300">
                  {event.poster}
                </div>
              </div>

              {/* Data Content Block - 1.5x - 2x Sizing Upgrade */}
              <div className="p-12 flex-1 flex flex-col justify-between bg-[#210808]">
                <div className="space-y-8">
                  
                  {/* Date and City Line - Upscaled to text-lg and tracked out */}
                  <div className="text-lg font-black tracking-[0.25em] uppercase flex items-center gap-3">
                    <span className="text-white/90">{event.startDate}</span>
                    <span className="text-[#E84B1A] font-bold">·</span>
                    <span className="text-[#E84B1A] font-black">{event.city.toUpperCase()}</span>
                  </div>
                  
                  {/* Event Title - Upscaled to 6xl for premium editorial prominence */}
                  <h3 className="font-serif italic font-normal text-6xl text-white tracking-wide group-hover:text-[#E84B1A] transition-colors leading-none">
                    {event.title}
                  </h3>
                  
                  {/* College/Venue - Upscaled to text-base with absolute high contrast */}
                  <p className="text-base font-black text-white/70 uppercase tracking-[0.15em] flex items-center gap-2.5 pt-1">
                    <span className="text-lg">🏢</span> {event.venue}
                  </p>
                  
                  {/* Description Paragraph - Increased to 2xl text for effortless readability */}
                  <p className="text-2xl text-[#F2EDE4]/90 leading-relaxed font-normal tracking-wide pt-3">
                    {event.description}
                  </p>
                </div>

                {/* Bottom Row Links */}
                <div className="pt-10 border-t border-[#b43c28]/10 flex justify-between items-center mt-14">
                  <span className="text-base font-black tracking-[0.25em] text-white uppercase group-hover:text-[#E84B1A] transition-colors">
                    VIEW DETAILS
                  </span>
                  <span className="text-[#E84B1A] transform transition-transform group-hover:translate-x-4 text-4xl font-black">
                    →
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="py-32 text-center border border-dashed border-[#b43c28]/20 text-white/70 font-black tracking-[0.2em] uppercase text-base">
            No events match the active search or category filters.
          </div>
        )}
      </main>

    </div>
  );
}