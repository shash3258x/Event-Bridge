import React, { useState } from 'react';

export default function LandingPage({ onNavigate }) {
  const [activeFeedFilter, setActiveFeedFilter] = useState('#Sponsorships');

  const feedItems = {
    '#Sponsorships': {
      name: 'Sponsor Match.',
      desc: 'Get matched with brands actively scouting student ambassadors and on-campus activations.',
      btnText: 'View Queue →'
    },
    '#Performers': {
      name: 'Talent Scout.',
      desc: 'Connect directly with verified DJs, bands, and stand-up comedians on campus.',
      btnText: 'Browse Artists →'
    },
    '#Vendors': {
      name: 'Logistics Hub.',
      desc: 'Book verified food trucks, sound rentals, and decorators with trusted transparent rates.',
      btnText: 'Find Vendors →'
    },
    '#Judges': {
      name: 'Panel Finder.',
      desc: 'Invite verified industry professionals, faculty, and alumni to judge your events.',
      btnText: 'Invite Judges →'
    },
    '#Volunteers': {
      name: 'Crew Match.',
      desc: 'Recruit passionate campus volunteers filtering by custom skills and hours needed.',
      btnText: 'Post Needs →'
    }
  };

  return (
    <div className="scroll-smooth">
      <nav className="fixed top-0 left-0 right-0 h-[72px] px-6 md:px-12 bg-[#1E0707]/85 backdrop-blur-md border-b border-[#b43c28]/30 flex items-center justify-between z-50">
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('landing'); }} className="font-condensed text-2xl font-black tracking-wide flex items-center gap-2.5 uppercase text-[#F2EDE4] no-underline">
          <span className="w-7 h-7 rounded-full border-2 border-[#E84B1A] flex items-center justify-center after:content-[''] after:w-2.5 after:h-2.5 after:bg-[#E84B1A] after:rounded-full"></span>
          EventBridge
        </a>
        <ul className="hidden md:flex gap-9 text-[11px] font-semibold tracking-[0.12em] uppercase list-none">
          <li><a href="#marketplace" className="text-[#F2EDE4] no-underline opacity-75 hover:opacity-100 transition-opacity">Marketplace</a></li>
          <li><a href="#feed" className="text-[#F2EDE4] no-underline opacity-75 hover:opacity-100 transition-opacity">Feed</a></li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate('signin')} className="bg-transparent border-none text-[#F2EDE4] text-[11px] font-semibold tracking-wider uppercase opacity-80 cursor-pointer hover:opacity-100 py-2">
            Sign In
          </button>
          <button onClick={() => onNavigate('signup')} className="bg-[#E84B1A] text-white text-[11px] font-bold tracking-wider uppercase px-6 py-3 cursor-pointer transition-colors hover:bg-[#FF5C25] border-none">
            Get Started
          </button>
        </div>
      </nav>

      <section className="relative min-h-screen pt-[72px] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100 600 Q200 300 500 500 T1000 350 T1600 500" stroke="rgba(180, 40, 20, 0.45)" strokeWidth="1.2" />
            <path d="M-100 700 Q300 400 700 600 T1200 400 T1700 600" stroke="rgba(180, 40, 20, 0.45)" strokeWidth="1.2" />
          </svg>
        </div>

        <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] uppercase text-[#B07070] pt-24 pb-8 px-6 md:px-20">
          <span className="w-2 h-2 bg-[#E84B1A] rounded-full"></span>
          A Two-Sided Campus Marketplace
        </div>

        <h1 className="font-condensed font-black uppercase text-[clamp(65px,11vw,150px)] leading-[0.92] tracking-tighter px-6 md:px-20 select-none text-[#F2EDE4]">
          BOLDER<br />EVENTS.<br />STRONGER<br />
          <span className="text-[#E84B1A] italic">CLUBS.</span><br />
          <span className="text-[#E84B1A] italic">BIGGER STAGES.</span>
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between px-6 md:px-20 pt-14 pb-20 gap-10">
          <p className="max-w-[480px] text-lg text-[#F2EDE4]/75 leading-relaxed">
            EventBridge is the professional network for college organizers — connect with sponsors,
            performers, judges, vendors and volunteers in one feed built for the next generation of campus culture.
          </p>
          <div className="flex gap-3 shrink-0">
            <button onClick={() => onNavigate('signup')} className="bg-[#E84B1A] border-none text-white px-8 py-4 font-bold text-[11px] tracking-[0.12em] uppercase flex items-center gap-2.5 transition-colors hover:bg-[#FF5C25] cursor-pointer">
              Join the Platform &nbsp;→
            </button>
            <button onClick={(e) => { e.preventDefault(); document.getElementById('marketplace')?.scrollIntoView({ behavior: 'smooth' }); }} className="bg-transparent text-[#F2EDE4] border border-[#F2EDE4]/40 px-8 py-4 font-bold text-[11px] tracking-[0.12em] uppercase transition-colors hover:border-[#F2EDE4] cursor-pointer">
              View Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="grid grid-cols-2 md:grid-cols-4 bg-[#1E0707] border-t border-[#b43c28]/30">
        <div className="p-10 border-r border-[#b43c28]/30">
          <div className="font-condensed text-5xl font-black text-[#E84B1A]">450+</div>
          <div className="text-[10px] font-semibold tracking-widest uppercase text-[#B07070] mt-1">Colleges on Platform</div>
        </div>
        <div className="p-10 border-r border-[#b43c28]/30">
          <div className="font-condensed text-5xl font-black text-[#E84B1A]">₹2.4M</div>
          <div className="text-[10px] font-semibold tracking-widest uppercase text-[#B07070] mt-1">Sponsorships Facilitated</div>
        </div>
        <div className="p-10 border-r border-[#b43c28]/30">
          <div className="font-condensed text-5xl font-black text-[#E84B1A]">12k</div>
          <div className="text-[10px] font-semibold tracking-widest uppercase text-[#B07070] mt-1">Active Opportunities</div>
        </div>
        <div className="p-10">
          <div className="font-condensed text-5xl font-black text-[#E84B1A]">98%</div>
          <div className="text-[10px] font-semibold tracking-widest uppercase text-[#B07070] mt-1">Organizer Reliability Score</div>
        </div>
      </div>

      {/* LIVE FEED */}
      <section id="feed" className="py-24 px-6 md:px-20 bg-[#1E0707] border-t border-[#b43c28]/30">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-14 gap-10">
          <div>
            <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#E84B1A] mb-4">01 / Live Feed</div>
            <h2 className="font-condensed font-black uppercase text-[clamp(45px,6vw,84px)] leading-[0.94] text-[#F2EDE4]">WHAT'S BREWING<br />ON CAMPUS.</h2>
          </div>
          <div className="flex flex-wrap gap-2.5 pt-2">
            {['#Sponsorships', '#Performers', '#Vendors', '#Judges', '#Volunteers'].map((tag) => (
              <button 
                key={tag}
                onClick={() => setActiveFeedFilter(tag)}
                className={`text-[10px] font-bold tracking-wider uppercase px-4 py-2 border transition-all cursor-pointer ${
                  activeFeedFilter === tag ? 'border-[#E84B1A] text-[#E84B1A] bg-[#E84B1A]/5' : 'border-[#b43c28]/30 text-[#F2EDE4] hover:border-[#E84B1A] hover:text-[#E84B1A]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-[#b43c28]/20 border border-[#b43c28]/20">
          <div className="bg-[#3A1010] p-8 min-h-[240px] flex flex-col justify-between">
            <div>
              <div className="font-condensed text-2xl font-extrabold uppercase text-[#F2EDE4]">Horizon Music Fest</div>
              <div className="text-xs text-[#B07070]">University of Art &amp; Design · Mar 12</div>
            </div>
            <span className="bg-[#E84B1A] self-start text-white text-[9px] font-extrabold tracking-wider px-2.5 py-1 uppercase mt-4">HOT</span>
          </div>

          <div className="bg-[#E84B1A] p-8 flex flex-col justify-between text-[#1E0707] min-h-[240px]">
            <div>
              <div className="font-condensed text-4xl font-black italic leading-none mb-2">{feedItems[activeFeedFilter].name}</div>
              <p className="text-sm text-black/75 leading-relaxed">{feedItems[activeFeedFilter].desc}</p>
            </div>
            <button className="bg-[#1E0707] text-[#F2EDE4] font-bold text-[10px] tracking-widest uppercase py-3 border-none cursor-pointer mt-4">
              {feedItems[activeFeedFilter].btnText}
            </button>
          </div>

          <div className="bg-[#3A1010] p-8 flex flex-col min-h-[240px] justify-between">
            <div>
              <div className="font-condensed text-2xl font-black uppercase text-[#F2EDE4]">Alex Chen</div>
              <div className="text-xs text-[#B07070]">Events Director · Sigma Tech</div>
            </div>
            <button onClick={() => onNavigate('signup')} className="bg-transparent border border-[#b43c28]/40 text-[#F2EDE4] py-2.5 text-[10px] font-bold tracking-widest uppercase cursor-pointer hover:border-[#E84B1A] hover:text-[#E84B1A] w-full mt-4">
              Connect
            </button>
          </div>
        </div>
      </section>

      {/* MARKETPLACE */}
      <section id="marketplace" className="py-24 px-6 md:px-20">
        <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#E84B1A] mb-4">02 / Marketplace</div>
        <h2 className="font-condensed font-black uppercase text-[clamp(45px,6vw,84px)] leading-[0.94] text-[#F2EDE4]">EVERY ROLE.<br />ONE BRIDGE.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#b43c28]/30 mt-16">
          {[
            { idx: '01', title: 'Sponsors', d: 'Brands scouting Gen-Z reach on campus.' },
            { idx: '02', title: 'Performers', d: 'DJs, bands, dancers, speakers, comedians.' },
            { idx: '03', title: 'Vendors', d: 'Food trucks, gear rentals, merch, AV.' },
            { idx: '04', title: 'Judges', d: 'Industry pros for hackathons and competitions.' },
            { idx: '05', title: 'Volunteers', d: 'Student crews for ops, security, hospitality.' },
            { idx: '06', title: 'Colleges', d: 'Sister-college collabs and cross-campus tours.' }
          ].map((c) => (
            <div key={c.idx} onClick={() => onNavigate('signup')} className="group p-10 border-r border-b border-[#b43c28]/30 flex flex-col justify-between cursor-pointer transition-colors hover:bg-[#E84B1A]/[0.06] relative min-h-[200px]">
              <div className="font-condensed text-xs font-bold text-[#E84B1A]">{c.idx}</div>
              <div>
                <h3 className="font-condensed text-3xl font-black uppercase text-[#F2EDE4] mb-1">{c.title}</h3>
                <p className="text-xs text-[#B07070] leading-relaxed">{c.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 text-center border-t border-[#b43c28]/30">
        <h2 className="font-condensed font-black uppercase text-5xl text-[#F2EDE4]">PLUG IN.<br /><span className="text-[#E84B1A] italic">LIGHT IT UP.</span></h2>
        <div className="flex gap-3 justify-center mt-8">
          <button onClick={() => onNavigate('signup')} className="bg-[#E84B1A] border-none text-white px-6 py-3 font-bold text-[11px] tracking-wider uppercase cursor-pointer hover:bg-[#FF5C25]">Create Your Profile</button>
          <button onClick={() => onNavigate('signin')} className="bg-transparent text-[#F2EDE4] border border-[#F2EDE4]/40 px-6 py-3 font-bold text-[11px] tracking-wider uppercase cursor-pointer hover:border-[#F2EDE4]">Sign In</button>
        </div>
      </section>
    </div>
  );
}