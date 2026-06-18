import React, { useState } from 'react';
import { MOCK_EVENTS } from '../mockData';

export default function EventDetailsPage({ eventId, onNavigate }) {
  const currentEvent = MOCK_EVENTS.find((e) => e.eventId === eventId) || MOCK_EVENTS[0];
  const [appliedSlots, setAppliedSlots] = useState({});

  const handleApplyClick = (slotId) => {
    setAppliedSlots(prev => ({
      ...prev,
      [slotId]: true
    }));
  };

  const similarEvents = MOCK_EVENTS.filter((e) => e.eventId !== currentEvent.eventId).slice(0, 3);

  const ticketStats = {
    entry: "₹799",
    capacity: "197 left / 200",
    rsvpBy: "17 Jul 2026",
    ends: `${currentEvent.startDate}, 10:00 pm`
  };

  return (
    <div className="min-h-screen bg-[#2A0B0B] text-[#F2EDE4] font-sans antialiased overflow-x-hidden w-full">
      
      {/* 1. TOP NAVBAR HEADER SECTION */}
      <nav className="h-[115px] px-8 md:px-16 border-b border-[#b43c28]/20 flex items-center justify-between sticky top-0 bg-[#2A0B0B]/95 backdrop-blur-md z-40 w-full">
        <div onClick={() => onNavigate('landing')} className="text-4xl font-black uppercase tracking-tight flex items-center gap-4 cursor-pointer select-none">
          <span className="w-11 h-11 rounded-full border-[3px] border-[#E84B1A] flex items-center justify-center after:w-4.5 after:h-4.5 after:bg-[#E84B1A] after:rounded-full shrink-0"></span>
          CONFLUX
        </div>
        <button 
          onClick={() => onNavigate('events')} 
          className="bg-transparent border-none text-[#F2EDE4] text-base font-black tracking-[0.25em] uppercase cursor-pointer hover:text-[#E84B1A] transition-colors flex items-center gap-2"
        >
          ← ALL EVENTS
        </button>
      </nav>

      {/* 2. MAIN HERO FRAME SECTION */}
      <header className="px-8 md:px-16 pt-28 pb-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Info Columns */}
        <div className="lg:col-span-8 space-y-8">
          <div className="text-sm font-black tracking-[0.3em] uppercase text-[#E84B1A] flex items-center gap-3">
            <span className="w-2 h-2 bg-[#E84B1A] rounded-full"></span>
            {currentEvent.category} · {currentEvent.city.toUpperCase()}
          </div>
          
          <h1 className="font-serif italic font-normal text-6xl md:text-7xl xl:text-8xl text-white tracking-tighter leading-none select-none">
            {currentEvent.title}
          </h1>
          
          <p className="text-2xl md:text-3xl text-[#B07070] font-normal leading-relaxed tracking-wide pt-4">
            {currentEvent.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-14 border-t border-[#b43c28]/10 mt-16">
            <div>
              <div className="text-sm font-black tracking-[0.25em] text-[#E84B1A] uppercase mb-4">WHEN</div>
              <div className="text-2xl font-black text-white tracking-wide">{currentEvent.startDate} – {currentEvent.startDate}</div>
            </div>
            <div>
              <div className="text-sm font-black tracking-[0.25em] text-[#E84B1A] uppercase mb-4">WHERE</div>
              <div className="text-3xl font-black text-white tracking-wide">{currentEvent.venue}</div>
              <div className="text-xl font-bold text-[#B07070] mt-1">{currentEvent.city}</div>
            </div>
          </div>
        </div>

        {/* Right Ticket Stats Panel Box */}
        <div className="lg:col-span-4 bg-[#210808] border border-[#b43c28]/20 p-12 space-y-10 mt-4 lg:mt-14">
          <div className="flex justify-between items-center border-b border-[#b43c28]/10 pb-4">
            <span className="text-[#B07070] uppercase tracking-widest text-sm font-black">Entry</span>
            <span className="text-white text-2xl font-black tracking-wide">{ticketStats.entry}</span>
          </div>
          <div className="flex justify-between items-center border-b border-[#b43c28]/10 pb-4">
            <span className="text-[#B07070] uppercase tracking-widest text-sm font-black">Capacity</span>
            <span className="text-white text-2xl font-black tracking-wide">{ticketStats.capacity}</span>
          </div>
          <div className="flex justify-between items-center border-b border-[#b43c28]/10 pb-4">
            <span className="text-[#B07070] uppercase tracking-widest text-sm font-black">RSVP By</span>
            <span className="text-white text-2xl font-black tracking-wide">{ticketStats.rsvpBy}</span>
          </div>
          <div className="flex justify-between items-center pb-2">
            <span className="text-[#B07070] uppercase tracking-widest text-sm font-black">Ends</span>
            <span className="text-white text-2xl font-black tracking-wide text-right">{ticketStats.ends}</span>
          </div>
        </div>
      </header>

      {/* 3. ABOUT EVENT BLOCK */}
      <section className="px-8 md:px-16 py-20 w-full border-t border-[#b43c28]/10">
        <div className="text-sm font-black tracking-[0.25em] text-[#E84B1A] uppercase mb-6">ABOUT EVENT</div>
        <p className="text-2xl text-[#F2EDE4]/90 leading-relaxed font-normal tracking-wide max-w-6xl">
          Join us at the {currentEvent.venue} in {currentEvent.city} for this marquee {currentEvent.category.toLowerCase()} setup. Experience full production staging and unparalleled campus networking workflows.
        </p>
      </section>

      {/* 4. DYNAMIC OPEN OPPORTUNITIES SECTION - Massive Text Size Upgrade */}
      <section className="px-8 md:px-16 py-20 w-full border-t border-[#b43c28]/10">
        <div className="flex justify-between items-end mb-16">
          <h2 className="font-serif italic font-normal text-5xl md:text-6xl text-white tracking-wide">
            Open Opportunities
          </h2>
          <span className="text-sm font-black tracking-[0.25em] text-[#B07070] uppercase pb-2">6 OPEN</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-stretch">
          
          {/* A. SPONSOR CARD */}
          <div className="bg-[#210808] border border-[#b43c28]/20 p-10 md:p-12 flex flex-col justify-between min-h-[560px] w-full">
            <div className="space-y-6">
              <div className="flex justify-between items-center text-xs font-black tracking-[0.25em] uppercase">
                <span className="text-[#E84B1A]">SPONSOR</span>
                <span className="text-[#E84B1A] bg-[#E84B1A]/10 px-3 py-1 text-[11px]">● OPEN</span>
              </div>
              <h3 className="font-serif italic font-normal text-4xl text-white tracking-wide">Title Sponsor</h3>
              <p className="text-xl text-[#B07070]/90 leading-relaxed font-medium">Main stage branding, social promotions, premium stall.</p>
              
              {/* FIXED: Massive label and attribute text upgrade */}
              <div className="pt-8 space-y-6 border-t border-[#b43c28]/10">
                <div className="flex justify-between items-center">
                  <span className="text-[#F2EDE4]/80 uppercase text-lg font-extrabold tracking-wider">Tier</span>
                  <span className="text-white text-2xl font-bold">Title</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#F2EDE4]/80 uppercase text-lg font-extrabold tracking-wider">Budget</span>
                  <span className="text-4xl font-black text-[#E84B1A]">₹50,000</span>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <span className="text-[#F2EDE4]/80 uppercase text-lg font-extrabold tracking-wider pt-0.5 shrink-0">Perks</span>
                  <span className="text-white text-right text-xl font-semibold leading-relaxed max-w-md">Main Stage Branding, Instagram Promotions, Event Stall</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => handleApplyClick('sponsor')}
              className={`w-full font-black text-sm tracking-[0.25em] uppercase py-6 border-none mt-12 transition-colors ${
                appliedSlots['sponsor'] ? 'bg-emerald-600 text-white cursor-default' : 'bg-[#E84B1A] text-white hover:bg-[#FF5C25] cursor-pointer'
              }`}
              style={{ height: '68px' }}
            >
              {appliedSlots['sponsor'] ? '✓ APPLIED' : 'APPLY'}
            </button>
          </div>

          {/* B. PERFORMER CARD */}
          <div className="bg-[#210808] border border-[#b43c28]/20 p-10 md:p-12 flex flex-col justify-between min-h-[560px] w-full">
            <div className="space-y-6">
              <div className="flex justify-between items-center text-xs font-black tracking-[0.25em] uppercase">
                <span className="text-[#E84B1A]">PERFORMER</span>
                <span className="text-[#E84B1A] bg-[#E84B1A]/10 px-3 py-1 text-[11px]">● OPEN</span>
              </div>
              <h3 className="font-serif italic font-normal text-4xl text-white tracking-wide">DJ Night Headliner</h3>
              <p className="text-xl text-[#B07070]/90 leading-relaxed font-medium">Closing night EDM set on the main stage.</p>
              
              {/* FIXED: Massive label and attribute text upgrade */}
              <div className="pt-8 space-y-6 border-t border-[#b43c28]/10">
                <div className="flex justify-between items-center">
                  <span className="text-[#F2EDE4]/80 uppercase text-lg font-extrabold tracking-wider">Genre</span>
                  <span className="text-white text-2xl font-bold">EDM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#F2EDE4]/80 uppercase text-lg font-extrabold tracking-wider">Duration</span>
                  <span className="text-white text-2xl font-bold">90 mins</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#F2EDE4]/80 uppercase text-lg font-extrabold tracking-wider">Fee</span>
                  <span className="text-4xl font-black text-[#E84B1A]">₹30,000</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => handleApplyClick('performer')}
              className={`w-full font-black text-sm tracking-[0.25em] uppercase py-6 border-none mt-12 transition-colors ${
                appliedSlots['performer'] ? 'bg-emerald-600 text-white cursor-default' : 'bg-[#E84B1A] text-white hover:bg-[#FF5C25] cursor-pointer'
              }`}
              style={{ height: '68px' }}
            >
              {appliedSlots['performer'] ? '✓ APPLIED' : 'APPLY'}
            </button>
          </div>

          {/* C. JUDGE CARD */}
          <div className="bg-[#210808] border border-[#b43c28]/20 p-10 md:p-12 flex flex-col justify-between min-h-[560px] w-full">
            <div className="space-y-6">
              <div className="flex justify-between items-center text-xs font-black tracking-[0.25em] uppercase">
                <span className="text-[#E84B1A]">JUDGE</span>
                <span className="text-[#E84B1A] bg-[#E84B1A]/10 px-3 py-1 text-[11px]">● OPEN</span>
              </div>
              <h3 className="font-serif italic font-normal text-4xl text-white tracking-wide">Coding Competition Judge</h3>
              <p className="text-xl text-[#B07070]/90 leading-relaxed font-medium">Judge final round of the flagship coding contest.</p>
              
              {/* FIXED: Massive label and attribute text upgrade */}
              <div className="pt-8 space-y-6 border-t border-[#b43c28]/10">
                <div className="flex justify-between items-center">
                  <span className="text-[#F2EDE4]/80 uppercase text-lg font-extrabold tracking-wider">Competition</span>
                  <span className="text-white text-2xl font-bold">Code Sprint</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#F2EDE4]/80 uppercase text-lg font-extrabold tracking-wider">Expertise</span>
                  <span className="text-white text-2xl font-bold">Competitive Programming</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#F2EDE4]/80 uppercase text-lg font-extrabold tracking-wider">Judging Date</span>
                  <span className="text-white text-2xl font-bold">{currentEvent.startDate}</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => handleApplyClick('judge')}
              className={`w-full font-black text-sm tracking-[0.25em] uppercase py-6 border-none mt-12 transition-colors ${
                appliedSlots['judge'] ? 'bg-emerald-600 text-white cursor-default' : 'bg-[#E84B1A] text-white hover:bg-[#FF5C25] cursor-pointer'
              }`}
              style={{ height: '68px' }}
            >
              {appliedSlots['judge'] ? '✓ APPLIED' : 'APPLY'}
            </button>
          </div>

          {/* D. VOLUNTEER CARD */}
          <div className="bg-[#210808] border border-[#b43c28]/20 p-10 md:p-12 flex flex-col justify-between min-h-[560px] w-full">
            <div className="space-y-6">
              <div className="flex justify-between items-center text-xs font-black tracking-[0.25em] uppercase">
                <span className="text-[#E84B1A]">VOLUNTEER</span>
                <span className="text-[#E84B1A] bg-[#E84B1A]/10 px-3 py-1 text-[11px]">● OPEN</span>
              </div>
              <h3 className="font-serif italic font-normal text-4xl text-white tracking-wide">Volunteer Coordinator</h3>
              <p className="text-xl text-[#B07070]/90 leading-relaxed font-medium">Lead a squad of volunteers on event days.</p>
              
              {/* FIXED: Massive label and attribute text upgrade */}
              <div className="pt-8 space-y-6 border-t border-[#b43c28]/10">
                <div className="flex justify-between items-center">
                  <span className="text-[#F2EDE4]/80 uppercase text-lg font-extrabold tracking-wider">Needed</span>
                  <span className="text-3xl font-black text-[#E84B1A]">25</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#F2EDE4]/80 uppercase text-lg font-extrabold tracking-wider">Hours</span>
                  <span className="text-white text-2xl font-bold">15</span>
                </div>
                <div className="flex justify-between items-start gap-4">
                  <span className="text-[#F2EDE4]/80 uppercase text-lg font-extrabold tracking-wider pt-0.5 shrink-0">Skills</span>
                  <span className="text-white text-right text-xl font-semibold leading-relaxed max-w-md">Crowd Management, Communication</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => handleApplyClick('volunteer')}
              className={`w-full font-black text-sm tracking-[0.25em] uppercase py-6 border-none mt-12 transition-colors ${
                appliedSlots['volunteer'] ? 'bg-emerald-600 text-white cursor-default' : 'bg-[#E84B1A] text-white hover:bg-[#FF5C25] cursor-pointer'
              }`}
              style={{ height: '68px' }}
            >
              {appliedSlots['volunteer'] ? '✓ APPLIED' : 'APPLY'}
            </button>
          </div>

          {/* E. VENDOR CARD */}
          <div className="bg-[#210808] border border-[#b43c28]/20 p-10 md:p-12 flex flex-col justify-between min-h-[420px] w-full">
            <div className="space-y-6">
              <div className="flex justify-between items-center text-xs font-black tracking-[0.25em] uppercase">
                <span className="text-[#E84B1A]">VENDOR</span>
                <span className="text-[#E84B1A] bg-[#E84B1A]/10 px-3 py-1 text-[11px]">● OPEN</span>
              </div>
              <h3 className="font-serif italic font-normal text-4xl text-white tracking-wide">Food Vendor</h3>
              <p className="text-xl text-[#B07070]/90 leading-relaxed font-medium">Set up a food stall across all event days.</p>
              
              {/* FIXED: Massive label and attribute text upgrade */}
              <div className="pt-8 space-y-6 border-t border-[#b43c28]/10">
                <div className="flex justify-between items-center">
                  <span className="text-[#F2EDE4]/80 uppercase text-lg font-extrabold tracking-wider">Category</span>
                  <span className="text-white text-2xl font-bold">Food</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => handleApplyClick('vendor')}
              className={`w-full font-black text-sm tracking-[0.25em] uppercase py-6 border-none mt-12 transition-colors ${
                appliedSlots['vendor'] ? 'bg-emerald-600 text-white cursor-default' : 'bg-[#E84B1A] text-white hover:bg-[#FF5C25] cursor-pointer'
              }`}
              style={{ height: '68px' }}
            >
              {appliedSlots['vendor'] ? '✓ APPLIED' : 'APPLY'}
            </button>
          </div>

          {/* F. COLLABORATION CARD */}
          <div className="bg-[#210808] border border-[#b43c28]/20 p-10 md:p-12 flex flex-col justify-between min-h-[420px] w-full">
            <div className="space-y-6">
              <div className="flex justify-between items-center text-xs font-black tracking-[0.25em] uppercase">
                <span className="text-[#E84B1A]">COLLABORATION</span>
                <span className="text-[#E84B1A] bg-[#E84B1A]/10 px-3 py-1 text-[11px]">● OPEN</span>
              </div>
              <h3 className="font-serif italic font-normal text-4xl text-white tracking-wide">Partner College</h3>
              <p className="text-xl text-[#B07070]/90 leading-relaxed font-medium">Cross-promote with another college fest.</p>
              
              {/* FIXED: Massive label and attribute text upgrade */}
              <div className="pt-8 space-y-6 border-t border-[#b43c28]/10">
                <div className="flex justify-between items-center">
                  <span className="text-[#F2EDE4]/80 uppercase text-lg font-extrabold tracking-wider">City</span>
                  <span className="text-white text-2xl font-bold">Vadodara</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#F2EDE4]/80 uppercase text-lg font-extrabold tracking-wider">Type</span>
                  <span className="text-white text-2xl font-bold">Cross Promotion</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => handleApplyClick('collab')}
              className={`w-full font-black text-sm tracking-[0.25em] uppercase py-6 border-none mt-12 transition-colors ${
                appliedSlots['collab'] ? 'bg-emerald-600 text-white cursor-default' : 'bg-[#E84B1A] text-white hover:bg-[#FF5C25] cursor-pointer'
              }`}
              style={{ height: '68px' }}
            >
              {appliedSlots['collab'] ? '✓ APPLIED' : 'APPLY'}
            </button>
          </div>

        </div>
      </section>

      {/* 5. REVIEWS CONTAINER LAYER - FIXED: Upscaled sizes to match layout */}
      <section className="px-8 md:px-16 py-24 w-full border-t border-[#b43c28]/10">
        <div className="text-4xl font-black tracking-[0.25em] text-[#E84B1A] uppercase mb-8">REVIEWS</div>
        <div className="text-2xl text-[#B07070] font-medium tracking-wide">
          No reviews yet.
        </div>
      </section>

      {/* 6. YOU MAY ALSO LIKE GRID */}
      <section className="px-8 md:px-16 py-20 w-full border-t border-[#b43c28]/10">
        <div className="text-sm font-black tracking-[0.25em] text-[#E84B1A] uppercase mb-12">YOU MAY ALSO LIKE</div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
          {similarEvents.map((item) => (
            <div 
              key={item.eventId}
              onClick={() => onNavigate(`event-${item.eventId}`)}
              className="bg-[#210808] border border-[#b43c28]/20 p-10 flex flex-col justify-between min-h-[280px] cursor-pointer hover:border-[#E84B1A] transition-colors w-full"
            >
              <div className="space-y-6">
                <span className="text-xs font-black tracking-[0.2em] text-[#E84B1A] uppercase">{item.category}</span>
                <h4 className="font-serif italic text-4xl text-white leading-tight">{item.title}</h4>
              </div>
              <div className="text-sm font-black tracking-[0.2em] text-[#B07070] uppercase mt-10 border-t border-[#b43c28]/10 pt-6">
                {item.city} · {item.startDate}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}