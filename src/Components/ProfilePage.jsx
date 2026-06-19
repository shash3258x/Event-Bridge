import React, { useState } from "react";
import { MOCK_PROFILES } from "../mockData";

export default function ProfilePage({ profileId, onNavigate }) {
  // Dynamically load profile content using route parameters, fallback to CodeX Club
  const targetId = MOCK_PROFILES[profileId] ? profileId : "org-codex";
  const entity = MOCK_PROFILES[targetId];

  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(1420);

  const toggleFollow = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowers(c => Math.max(0, c - 1));
    } else {
      setIsFollowing(true);
      setFollowers(c => c + 1);
    }
  };

  const joinedYear = new Date(entity.created_at).getFullYear();

  return (
    <div className="min-h-screen bg-[#2A0B0B] text-[#F2EDE4] font-sans antialiased overflow-x-hidden w-full">
      
      {/* 1. NAVBAR */}
      <nav className="h-[115px] px-8 md:px-16 border-b border-[#b43c28]/20 flex items-center justify-between sticky top-0 bg-[#2A0B0B]/95 backdrop-blur-md z-40 w-full">
  {/* Left Section: Branding + Scaled Vertical Profile Box */}
  <div className="flex items-center gap-10">
    <div onClick={() => onNavigate('landing')} className="text-4xl font-black uppercase tracking-tight flex items-center gap-4 cursor-pointer select-none">
      <span className="w-11 h-11 rounded-full border-[3px] border-[#E84B1A] flex items-center justify-center after:w-4.5 after:h-4.5 after:bg-[#E84B1A] after:rounded-full shrink-0"></span>
      CONFLUX
    </div>

    <button 
      onClick={() => onNavigate('profile-me')}
      className="bg-[#F2EDE4] border-none text-[#2A0B0B] text-base font-black tracking-[0.2em] uppercase cursor-pointer hover:bg-white transition-colors flex flex-col items-start justify-center px-8 py-3.5 shadow-md select-none leading-none shrink-0"
      style={{ minHeight: '68px' }}
    >
      <span>YOUR</span>
      <span className="mt-1">PROFILE</span>
    </button>
  </div>

  {/* Right Section */}
  <button 
    onClick={() => onNavigate('events')} 
    className="bg-transparent border-none text-[#F2EDE4] text-base font-black tracking-[0.25em] uppercase cursor-pointer hover:text-[#E84B1A] transition-colors flex items-center gap-2"
  >
    ← ALL EVENTS
  </button>
</nav>

      {/* 2. BRAND STAGING HERO ASYMMETRIC BACKGROUND HEADER */}
      <section className="relative w-full">
        <div className="h-[38vh] md:h-[48vh] w-full bg-[#1F0707] relative overflow-hidden border-b border-[#b43c28]/10">
          {/* Abstract architectural styling geometry blocks mirroring high-end brand hubs */}
          <div className="absolute top-12 -left-16 w-96 h-96 bg-[#E84B1A]/5 rounded-full filter blur-3xl select-none" />
          <div className="absolute bottom-4 right-12 font-serif italic text-[#E84B1A]/5 text-[320px] font-bold select-none leading-none">
            {entity.display_name?.[0]?.toUpperCase()}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2A0B0B]/40 to-[#2A0B0B]" />
        </div>

        {/* Entity Header Profile Layout Context Overlay */}
        <div className="px-8 md:px-16 -mt-36 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end w-full">
            
            {/* Logo Initial Monogram Block Placeholder */}
            <div className="lg:col-span-3 flex justify-start">
              <div className="aspect-square w-44 md:w-56 rounded-none border-2 border-[#E84B1A] bg-[#210808] shadow-2xl flex flex-col items-center justify-center select-none">
                <div className="font-serif italic font-normal text-8xl text-white">
                  {entity.display_name?.[0]?.toUpperCase()}
                </div>
              </div>
            </div>

            {/* Hub Typography Identifiers */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-3">
                <span className="text-xs font-black tracking-[0.25em] uppercase px-4 py-1.5 border border-[#E84B1A] text-white bg-[#E84B1A]">
                  {entity.role}
                </span>
                <span className="text-sm font-black tracking-[0.2em] uppercase text-[#B07070]">
                  · {entity.sub_role.toUpperCase()}
                </span>
              </div>
              
              <h1 className="font-serif italic font-normal text-5xl md:text-6xl xl:text-7xl text-white tracking-tight leading-none">
                {entity.display_name}
              </h1>
              
              <p className="text-2xl md:text-3xl text-[#B07070] font-normal leading-relaxed tracking-wide pt-2 max-w-4xl">
                {entity.bio}
              </p>
            </div>

            {/* Networking Actions Targets Panel */}
            <div className="lg:col-span-3 flex lg:justify-end gap-4 h-full items-center pb-2">
              <button
                onClick={toggleFollow}
                className={`px-8 py-4.5 text-xs font-black tracking-[0.25em] uppercase transition-all cursor-pointer ${
                  isFollowing
                    ? "bg-transparent text-white border-2 border-white/40 hover:border-white"
                    : "bg-[#E84B1A] text-white border-none hover:bg-[#FF5C25]"
                }`}
                style={{ height: '60px' }}
              >
                {isFollowing ? "CONNECTED" : "CONNECT HUB"}
              </button>
              <a
                href={`mailto:${entity.email}`}
                className="px-8 py-4.5 text-xs font-black tracking-[0.25em] uppercase border-2 border-[#b43c28]/40 text-[#F2EDE4] hover:border-white transition-all text-center flex items-center justify-center whitespace-nowrap"
                style={{ height: '60px' }}
              >
                REQUEST PROPOSAL
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 3. BUSINESS/COMMITTEE METRICS TICKER STRIP */}
      <section className="mt-24 border-t border-b border-[#b43c28]/10 w-full bg-[#210808]/40">
        <div className="px-8 md:px-16 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#b43c28]/10 w-full">
          {[
            { label: entity.metrics.units, val: entity.metrics.units_val },
            { label: entity.metrics.benchmark, val: entity.metrics.benchmark_val },
            { label: "Followers", val: followers.toLocaleString() },
            { label: "Established", val: joinedYear },
          ].map((stat, idx) => (
            <div key={idx} className="py-10 px-8 first:pl-0">
              <div className="text-xs font-black tracking-[0.25em] uppercase text-[#B07070]/60">{stat.label}</div>
              <div className="font-serif italic font-normal text-6xl text-white mt-3 leading-none tracking-wide">{stat.val}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VERIFIED OPERATION DOSSIER PANEL */}
      <section className="px-8 md:px-16 py-24 w-full grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4 space-y-4">
          <div className="text-sm font-black tracking-[0.25em] text-[#E84B1A] uppercase">DOSSIER FILE</div>
          <h2 className="font-serif italic font-normal text-4xl md:text-5xl text-white leading-tight">
            Capabilities &<br />Operational Parameters
          </h2>
        </div>
        <div className="lg:col-span-8 w-full">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12 w-full">
            {entity.dossier.map((item, idx) => (
              <div key={idx} className="border-t border-[#b43c28]/20 pt-6 space-y-3">
                <dt className="text-sm font-black tracking-[0.25em] uppercase text-[#F2EDE4]/80">{item.label}</dt>
                <dd className="font-serif italic font-normal text-3xl text-[#B07070] leading-snug tracking-wide">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 5. LIVE TIMELINE ANNOUNCEMENT FEEDS */}
      <section className="px-8 md:px-16 pb-24 w-full border-t border-[#b43c28]/10 pt-20">
        <h2 className="font-serif italic font-normal text-4xl md:text-5xl text-white tracking-wide mb-12">Network Activity Wire</h2>
        <div className="space-y-10 max-w-5xl w-full">
          {entity.timeline.map((post, idx) => (
            <article key={idx} className="border-l-4 border-[#E84B1A] pl-8 py-3 space-y-3">
              <p className="font-serif italic font-normal text-3xl text-white leading-snug tracking-wide">
                "{post}"
              </p>
              <div className="text-xs font-black tracking-[0.2em] text-[#B07070] uppercase">
                {entity.display_name.toUpperCase()} ACCREDITED UPDATE · {idx + 1}D AGO
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6. TRUST VERIFICATION RECORD REVIEWS RECONCILIATION */}
      <section className="px-8 md:px-16 pb-32 border-t border-[#b43c28]/10 pt-20 w-full">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="font-serif italic font-normal text-4xl md:text-5xl text-white tracking-wide">Endorsements & Reviews</h2>
          <span className="text-xs font-black tracking-[0.25em] text-[#B07070] uppercase">{entity.reviews.length} SYSTEM RECORDS</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          {entity.reviews.map((rev) => (
            <div key={rev.id} className="border border-[#b43c28]/20 bg-[#210808] p-12 space-y-6 w-full">
              <div className="text-[#E84B1A] tracking-widest text-xl select-none">
                {"★".repeat(rev.rating)}
                <span className="text-[#b43c28]/20">{"★".repeat(5 - rev.rating)}</span>
              </div>
              <p className="font-serif italic font-normal text-2xl text-[#F2EDE4]/90 leading-snug">
                "{rev.comment}"
              </p>
              <div className="text-xs font-black tracking-[0.2em] text-[#B07070]/60 uppercase pt-2">
                VERIFIED TRANSACTION AUDIT · {rev.date}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. REVENUE LINE BASE GRID */}
      <footer className="px-8 md:px-16 py-12 border-t border-[#b43c28]/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-black tracking-[0.25em] uppercase text-[#B07070]/50 w-full">
        <span>© CONFLUX INDUSTRIAL STAGING INC.</span>
        <span>{entity.email}</span>
      </footer>

    </div>
  );
}