import React, { useState } from 'react';
import { MOCK_EVENTS } from '../mockData';

export default function EventsPage({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  // Available categories directly linked to filter tabs
  const categories = ['ALL', 'FESTIVAL', 'HACKATHON', 'CONCERT', 'SPORTS'];

  // Robust real-time filter logic
  const filteredEvents = MOCK_EVENTS.filter(event => {
    const query = searchQuery.toLowerCase().trim();
    
    // 1. Hard Category Tab Filter Match
    if (selectedCategory !== 'ALL' && event.category !== selectedCategory) {
      return false;
    }

    if (!query) return true;

    // 2. Document Specification Search Commands Handling (e.g. city:goa)
    if (query.startsWith('city:')) {
      const cityValue = query.replace('city:', '');
      return event.city.toLowerCase().startsWith(cityValue);
    }
    if (query.startsWith('category:')) {
      const catValue = query.replace('category:', '');
      return event.category.toLowerCase().includes(catValue);
    }

    // 3. Normal Search Text Fallback Match across keys
    return (
      event.title.toLowerCase().includes(query) ||
      event.venue.toLowerCase().includes(query) ||
      event.city.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-[#2A0B0B] text-[#F2EDE4] font-sans antialiased overflow-x-hidden">
      
      {/* Top Bar Layout */}
      <nav className="h-[95px] px-8 md:px-16 border-b border-[#b43c28]/20 flex items-center justify-between sticky top-0 bg-[#2A0B0B]/95 backdrop-blur-md z-40">
        <div onClick={() => onNavigate('landing')} className="text-3xl font-black uppercase tracking-tight flex items-center gap-3.5 cursor-pointer select-none">
          <span className="w-9 h-9 rounded-full border-[3px] border-[#E84B1A] flex items-center justify-center after:w-3.5 after:h-3.5 after:bg-[#E84B1A] after:rounded-full shrink-0"></span>
          CONFLUX
        </div>
        <button 
          onClick={() => onNavigate('landing')} 
          className="bg-transparent border border-[#b43c28]/40 text-[#F2EDE4] text-xs font-black tracking-[0.2em] uppercase px-7 py-3.5 hover:border-[#E84B1A] hover:text-[#E84B1A] transition-colors"
        >
          LOG OUT
        </button>
      </nav>

      {/* Hero Header Area */}
      <header className="px-8 md:px-16 pt-20 pb-16 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3.5 text-xs font-black tracking-[0.25em] uppercase text-[#E84B1A] mb-5">
          <span className="w-2 h-2 bg-[#E84B1A] rounded-full"></span>
          LIVE ACROSS INDIA
        </div>
        <h1 className="font-serif italic font-normal text-[clamp(50px,8vw,110px)] leading-[0.95] text-[#F2EDE4] tracking-tight max-w-4xl select-none">
          Events worth<br />showing up for.
        </h1>
        <p className="mt-8 text-xl text-[#B07070] font-normal leading-relaxed tracking-wide max-w-2xl">
          Festivals, hackathons, indie nights and closed-door dinners — handpicked from campuses across the country.
        </p>
      </header>

      {/* Structural Filter Actions Bar */}
      <div className="px-8 md:px-16 max-w-7xl mx-auto w-full mb-16">
        <div className="border-t border-b border-[#b43c28]/10 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          {/* Left - Filter Buttons */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-black tracking-[0.18em] uppercase px-5 py-3.5 border transition-all cursor-pointer ${
                  selectedCategory === cat 
                    ? 'border-[#E84B1A] bg-[#E84B1A] text-white' 
                    : 'border-[#b43c28]/20 text-[#F2EDE4] hover:border-[#E84B1A]/50 bg-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Right - Plain Text Search Input Box */}
          <div className="w-full md:max-w-md">
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title or city..."
              className="w-full bg-transparent border border-[#b43c28]/30 px-6 py-4 text-sm font-medium text-[#F2EDE4] placeholder-[#B07070]/30 focus:outline-none focus:border-[#E84B1A] transition-colors"
            />
          </div>

        </div>
      </div>

      {/* Grid Execution Layout */}
      <main className="px-8 md:px-16 max-w-7xl mx-auto w-full pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div 
              key={event.eventId} 
              onClick={() => onNavigate(`event-${event.eventId}`)}
              className="bg-[#210808] border border-[#b43c28]/20 flex flex-col justify-between min-h-[500px] relative group hover:border-[#E84B1A] cursor-pointer transition-colors"
            >
              
              {/* Massive Editorial Styled Header Character Placeholder Section */}
              <div className="h-[240px] p-8 relative flex items-end justify-start border-b border-[#b43c28]/10 overflow-hidden bg-[#240909]">
                <span className="absolute top-6 left-6 bg-[#2A0B0B] border border-[#b43c28]/30 text-[#B07070] text-[10px] font-black tracking-[0.15em] uppercase px-3 py-1.5 z-10">
                  {event.category}
                </span>
                
                {/* The Huge Character Glow */}
                <div className="font-serif italic text-[#E84B1A]/20 text-[160px] leading-none absolute left-6 bottom-[-20px] select-none transition-transform group-hover:scale-105 duration-300">
                  {event.poster}
                </div>
              </div>

              {/* Data Content Block */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-black tracking-widest text-[#B07070] uppercase mb-3 flex items-center gap-2">
                    <span>{event.startDate}</span>
                    <span className="text-[#E84B1A]/40">·</span>
                    <span className="text-[#E84B1A]">{event.city.toUpperCase()}</span>
                  </div>
                  
                  <h3 className="font-serif italic font-normal text-3xl text-[#F2EDE4] tracking-wide mb-2 group-hover:text-[#E84B1A] transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-xs font-bold text-[#B07070]/60 uppercase tracking-wider mb-4">
                    🏢 {event.venue}
                  </p>
                  
                  <p className="text-sm text-[#B07070] leading-relaxed font-normal">
                    {event.description}
                  </p>
                </div>

                {/* Lower Action Target Footer Anchors */}
                <div className="pt-6 border-t border-[#b43c28]/10 flex justify-between items-center mt-8">
                  <span className="text-xs font-black tracking-[0.15em] text-[#F2EDE4] uppercase">
                    VIEW DETAILS
                  </span>
                  <span className="text-[#E84B1A] transform transition-transform group-hover:translate-x-1 text-lg">
                    →
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Empty State Layout Fallback Trigger */}
        {filteredEvents.length === 0 && (
          <div className="py-24 text-center border border-dashed border-[#b43c28]/20 text-[#B07070] font-bold tracking-wide uppercase text-sm">
            No events match the active search or category filters.
          </div>
        )}
      </main>

    </div>
  );
}