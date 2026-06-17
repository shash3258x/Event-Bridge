import React, { useState } from 'react';

export default function LandingPage({ onNavigate }) {
  const [activeFeedFilter, setActiveFeedFilter] = useState('#Sponsorships');

  const feedItems = {
    '#Sponsorships': {
      name: 'Sponsor Match.',
      desc: 'Get matched with brands actively scouting student ambassadors and on-campus activations.',
      btnText: 'VIEW QUEUE →'
    },
    '#Performers': {
      name: 'Talent Scout.',
      desc: 'Connect directly with verified DJs, bands, and stand-up comedians on campus.',
      btnText: 'BROWSE ARTISTS →'
    },
    '#Vendors': {
      name: 'Logistics Hub.',
      desc: 'Book verified food trucks, sound rentals, and decorators with trusted transparent rates.',
      btnText: 'FIND VENDORS →'
    },
    '#Judges': {
      name: 'Panel Finder.',
      desc: 'Invite verified industry professionals, faculty, and alumni to judge your events.',
      btnText: 'INVITE JUDGES →'
    },
    '#Volunteers': {
      name: 'Crew Match.',
      desc: 'Recruit passionate campus volunteers filtering by custom skills and hours needed.',
      btnText: 'POST NEEDS →'
    }
  };

  return (
    <div key="v3-forced-layout" className="scroll-smooth min-h-screen bg-[#2A0B0B] text-[#F2EDE4] font-sans overflow-x-hidden antialiased">
      
      {/* NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 right-0 h-[115px] px-8 md:px-16 bg-[#2A0B0B] border-b border-[#b43c28]/20 flex items-center justify-between z-50">
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('landing'); }} className="text-3xl font-black tracking-normal flex items-center gap-3.5 uppercase text-[#F2EDE4] no-underline whitespace-nowrap">
          <span className="w-10 h-10 rounded-full border-[3px] border-[#E84B1A] flex items-center justify-center after:content-[''] after:w-4 after:h-4 after:bg-[#E84B1A] after:rounded-full shrink-0"></span>
          CONFLUX
        </a>
        
        <ul className="hidden lg:flex gap-12 text-lg font-extrabold uppercase list-none whitespace-nowrap m-0 p-0">
          <li><a href="#marketplace" className="text-[#F2EDE4] no-underline tracking-wider hover:text-[#E84B1A] transition-colors">MARKETPLACE</a></li>
          <li><a href="#feed" className="text-[#F2EDE4] no-underline tracking-wider hover:text-[#E84B1A] transition-colors">FEED</a></li>
          <li><a href="#features" className="text-[#F2EDE4] no-underline tracking-wider hover:text-[#E84B1A] transition-colors">FEATURES</a></li>
          <li><a href="#join" className="text-[#F2EDE4] no-underline tracking-wider hover:text-[#E84B1A] transition-colors">JOIN</a></li>
        </ul>

        <div className="flex items-center gap-10 shrink-0">
          <button onClick={() => onNavigate('signin')} className="bg-transparent border-none text-[#F2EDE4] text-lg font-extrabold tracking-wider uppercase cursor-pointer hover:text-[#E84B1A] transition-colors whitespace-nowrap">
            SIGN IN
          </button>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('signup')} 
              className="bg-[#E84B1A] text-white text-base font-black tracking-widest uppercase px-12 py-5 cursor-pointer border-none whitespace-nowrap flex items-center justify-center"
              style={{ minWidth: '240px', height: '60px' }}
            >
              GET STARTED
            </button>
            <button className="bg-transparent text-[#F2EDE4] border border-[#F2EDE4]/20 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl hover:border-[#E84B1A] transition-colors shrink-0">
              ↓
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen pt-[120px] flex flex-col justify-center px-8 md:px-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100 550 Q250 250 600 450 T1300 300 T1800 450" stroke="rgba(232, 75, 26, 0.4)" strokeWidth="1.5" />
            <path d="M-100 680 Q350 350 800 550 T1500 350 T1900 550" stroke="rgba(232, 75, 26, 0.3)" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="flex items-center gap-3.5 text-sm font-black tracking-[0.25em] uppercase text-[#E84B1A] pt-16 pb-6">
          <span className="w-2.5 h-2.5 bg-[#E84B1A] rounded-full"></span>
          A TWO-SIDED CAMPUS MARKETPLACE
        </div>

        <h1 className="font-sans font-black uppercase text-[clamp(65px,11.5vw,165px)] leading-[0.88] tracking-tighter select-none text-[#F2EDE4]">
          BOLDER<br />EVENTS.<br />STRONGER<br />
          <span className="text-[#F2EDE4]">CLUBS.</span><br />
          <span className="text-[#E84B1A]">BIGGER STAGES.</span>
        </h1>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between pt-16 pb-20 gap-12 border-b border-[#b43c28]/20">
          <p className="max-w-[720px] text-xl md:text-2xl text-[#F2EDE4]/80 font-normal leading-relaxed tracking-wide">
            Conflux is the professional network for college organizers — connect with sponsors,
            performers, judges, vendors and volunteers in one feed built for the next generation of campus culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 shrink-0 w-full sm:w-auto">
            <button onClick={() => onNavigate('signup')} className="w-full sm:w-auto bg-[#E84B1A] border-none text-white px-12 py-6 font-black text-sm tracking-wider uppercase flex items-center justify-center gap-3 cursor-pointer whitespace-nowrap" style={{ minWidth: '280px' }}>
              JOIN THE PLATFORM &nbsp;→
            </button>
            <button onClick={(e) => { e.preventDefault(); document.getElementById('marketplace')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full sm:w-auto bg-transparent text-[#F2EDE4] border border-[#F2EDE4]/30 px-12 py-6 font-black text-sm tracking-wider uppercase cursor-pointer whitespace-nowrap" style={{ minWidth: '280px' }}>
              VIEW OPPORTUNITIES
            </button>
          </div>
        </div>
      </section>

      {/* STATS BAR - Corrected labels and centralized grid alignments */}
      <div className="grid grid-cols-2 lg:grid-cols-4 bg-[#2A0B0B] border-b border-[#b43c28]/20 px-4 md:px-16 py-10">
        <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center">
          <div className="text-6xl md:text-7xl font-black text-[#E84B1A] tracking-tight">450+</div>
          <div className="text-[11px] font-black tracking-[0.18em] uppercase text-[#B07070] mt-3 whitespace-nowrap">COLLEGES JOINED</div>
        </div>
        <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center">
          <div className="text-6xl md:text-7xl font-black text-[#E84B1A] tracking-tight">$2.4M</div>
          <div className="text-[11px] font-black tracking-[0.18em] uppercase text-[#B07070] mt-3 whitespace-nowrap">SPONSORSHIP VALUE</div>
        </div>
        <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center">
          <div className="text-6xl md:text-7xl font-black text-[#E84B1A] tracking-tight">12k</div>
          <div className="text-[11px] font-black tracking-[0.18em] uppercase text-[#B07070] mt-3 whitespace-nowrap">VERIFIED TALENT</div>
        </div>
        <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center">
          <div className="text-6xl md:text-7xl font-black text-[#E84B1A] tracking-tight">98%</div>
          <div className="text-[11px] font-black tracking-[0.18em] uppercase text-[#B07070] mt-3 whitespace-nowrap">RELIABILITY SCORE</div>
        </div>
      </div>

      {/* THE BRIDGE MANIFESTO SECTION */}
      <section id="features" className="py-32 px-8 md:px-16 border-b border-[#b43c28]/20">
        <div className="text-sm font-black tracking-[0.25em] uppercase text-[#E84B1A] mb-6">THE BRIDGE</div>
        <h2 className="font-sans font-black uppercase text-[clamp(45px,7vw,100px)] leading-[0.92] text-[#F2EDE4] tracking-tighter max-w-[1200px]">
          THERE'S NO FRAMEWORK<br />FOR <span className="text-[#E84B1A] italic font-serif normal-case">Real Culture.</span>
        </h2>
        <p className="max-w-[780px] text-xl md:text-2xl text-[#F2EDE4]/75 leading-relaxed tracking-wide mt-12">
          College events are messy, magical, and impossible to scale through DMs and spreadsheets. We replaced the email chain with a verified network — so the only thing left to worry about is the show.
        </p>
      </section>

      {/* LIVE FEED SECTION */}
      <section id="feed" className="py-32 px-8 md:px-16 border-b border-[#b43c28]/20">
        <div className="flex flex-col xl:flex-row justify-between items-start mb-20 gap-12">
          <div>
            <div className="text-sm font-black tracking-[0.25em] uppercase text-[#E84B1A] mb-5">01 / LIVE FEED</div>
            <h2 className="font-sans font-black uppercase text-[clamp(45px,7vw,100px)] leading-[0.92] text-[#F2EDE4] tracking-tighter">WHAT'S BREWING ON<br />CAMPUS.</h2>
          </div>
          <div className="flex flex-wrap gap-4 pt-4 max-w-[650px] xl:justify-end">
            {['#Sponsorships', '#Performers', '#Vendors', '#Judges', '#Volunteers'].map((tag) => (
              <button 
                key={tag}
                onClick={() => setActiveFeedFilter(tag)}
                className={`text-xs font-black tracking-[0.18em] uppercase px-6 py-3.5 border transition-all cursor-pointer ${
                  activeFeedFilter === tag ? 'border-[#E84B1A] text-[#E84B1A] bg-[#E84B1A]/5' : 'border-[#b43c28]/30 text-[#F2EDE4] hover:border-[#E84B1A] hover:text-[#E84B1A]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* FEED DISPLAY GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <div className="bg-[#2D0C0C] p-10 flex flex-col justify-between min-h-[420px] border border-[#b43c28]/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[220px] overflow-hidden bg-[#2A0B0B]">
              <div className="w-full h-full bg-gradient-to-t from-[#2D0C0C] via-transparent to-transparent absolute inset-0 z-10" />
              <div className="w-full h-full bg-[#E84B1A]/10 flex items-center justify-center text-[#E84B1A]/30 font-black text-6xl tracking-widest uppercase italic">LIVE</div>
            </div>
            <div className="pt-[210px] z-20">
              <h3 className="font-sans text-3xl md:text-4xl font-black uppercase text-[#F2EDE4] tracking-tight">Horizon Music Fest</h3>
              <p className="text-base font-bold text-[#B07070] mt-2">University of Art &amp; Design · Mar 12</p>
            </div>
            <div className="flex items-center justify-between mt-8 z-20">
              <div className="flex gap-2">
                <span className="w-8 h-8 rounded-full bg-[#B07070]/30 border border-[#F2EDE4]/20"></span>
                <span className="w-8 h-8 rounded-full bg-[#B07070]/40 border border-[#F2EDE4]/20 -ml-4"></span>
                <span className="w-8 h-8 rounded-full bg-[#B07070]/50 border border-[#F2EDE4]/20 -ml-4"></span>
              </div>
              <span className="bg-[#E84B1A] text-white text-xs font-black tracking-widest px-4 py-1.5 uppercase">HOT</span>
            </div>
          </div>

          <div className="bg-[#E84B1A] p-10 flex flex-col justify-between text-[#2A0B0B] min-h-[420px]">
            <div>
              <div className="text-xs font-black tracking-[0.2em] uppercase text-[#2A0B0B]/60 mb-8">FEATURED TOOL</div>
              <h3 className="font-serif text-5xl md:text-6xl font-black italic leading-[1.05] mb-6 tracking-tight">{feedItems[activeFeedFilter].name}</h3>
              <p className="text-lg md:text-xl font-medium text-black/80 leading-relaxed tracking-wide">{feedItems[activeFeedFilter].desc}</p>
            </div>
            <button className="w-full bg-[#2A0B0B] text-[#F2EDE4] font-black text-sm tracking-[0.2em] uppercase py-5 border-none cursor-pointer mt-8 hover:bg-black transition-colors">
              {feedItems[activeFeedFilter].btnText}
            </button>
          </div>

          <div className="bg-[#2D0C0C] p-10 flex flex-col justify-between min-h-[420px] border border-[#b43c28]/10 text-center">
            <div className="flex flex-col items-center pt-4">
              <div className="w-24 h-24 rounded-full bg-[#E84B1A]/20 border-2 border-[#E84B1A] p-1 mb-5 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#B07070] flex items-center justify-center text-white font-black text-2xl">AC</div>
              </div>
              <h3 className="text-3xl font-black uppercase text-[#F2EDE4] tracking-tight">Alex Chen</h3>
              <p className="text-base font-bold text-[#B07070] mt-1">Events Director · Sigma Tech</p>
              
              <div className="grid grid-cols-2 gap-4 w-full mt-8 border-t border-[#b43c28]/20 pt-6">
                <div className="text-center border-r border-[#b43c28]/20">
                  <div className="text-2xl font-black text-[#E84B1A]">12</div>
                  <div className="text-[10px] font-black tracking-widest text-[#B07070] uppercase mt-1">Events Hosted</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-[#E84B1A]">98%</div>
                  <div className="text-[10px] font-black tracking-widest text-[#B07070] uppercase mt-1">Reliability</div>
                </div>
              </div>
            </div>
            <button onClick={() => onNavigate('signup')} className="bg-transparent border border-[#b43c28]/50 text-[#F2EDE4] py-4.5 text-sm font-black tracking-[0.2em] uppercase cursor-pointer hover:border-[#E84B1A] hover:text-[#E84B1A] w-full mt-6 transition-colors">
              CONNECT
            </button>
          </div>
        </div>
      </section>

      {/* MARKETPLACE SECTION */}
      <section id="marketplace" className="py-32 px-8 md:px-16 border-b border-[#b43c28]/20">
        <div className="text-sm font-black tracking-[0.25em] uppercase text-[#E84B1A] mb-5">02 / MARKETPLACE</div>
        <h2 className="font-sans font-black uppercase text-[clamp(45px,7vw,100px)] leading-[0.92] text-[#F2EDE4] tracking-tighter">EVERY ROLE.<br />ONE BRIDGE.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 border-t border-l border-[#b43c28]/20">
          {[
            { idx: '01', title: 'SPONSORS', d: 'Brands scouting Gen-Z reach on campus.' },
            { idx: '02', title: 'PERFORMERS', d: 'DJs, bands, dancers, speakers, comedians.' },
            { idx: '03', title: 'VENDORS', d: 'Food trucks, gear rentals, merch, AV.' },
            { idx: '04', title: 'JUDGES', d: 'Industry pros for hackathons and competitions.' },
            { idx: '05', title: 'VOLUNTEERS', d: 'Student crews for ops, security, hospitality.' },
            { idx: '06', title: 'COLLEGES', d: 'Sister-college collabs and cross-campus tours.' }
          ].map((c) => (
            <div key={c.idx} onClick={() => onNavigate('signup')} className="group p-12 border-r border-b border-[#b43c28]/20 flex flex-col justify-between cursor-pointer transition-all hover:bg-[#E84B1A]/[0.05] relative min-h-[280px]">
              <div className="flex justify-between items-start">
                <div className="text-sm font-black text-[#E84B1A] tracking-widest">{c.idx}</div>
                <div className="text-lg text-[#B07070] opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">→</div>
              </div>
              <div className="mt-10">
                <h3 className="text-3xl font-black uppercase text-[#F2EDE4] mb-3 tracking-tight group-hover:text-[#E84B1A] transition-colors">{c.title}</h3>
                <p className="text-base md:text-lg text-[#B07070] leading-relaxed font-normal">{c.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE WORKFLOWS SECTION */}
      <section className="py-32 px-8 md:px-16 border-b border-[#b43c28]/20">
        <div className="text-sm font-black tracking-[0.25em] uppercase text-[#E84B1A] mb-5">03 / HOW IT WORKS</div>
        <h2 className="font-sans font-black uppercase text-[clamp(45px,7vw,100px)] leading-[0.92] text-[#F2EDE4] tracking-tighter mb-20">BUILT FOR THE CHAOS<br />OF CAMPUS.</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-center pr-0 lg:pr-8">
            <h3 className="text-4xl md:text-5xl font-black uppercase text-[#F2EDE4] tracking-tight mb-6">THE TRUST PROTOCOL</h3>
            <p className="text-lg md:text-xl text-[#B07070] leading-relaxed tracking-wide">
              Verified event histories, peer reviews and on-campus IDs ensure every collaboration is legitimate.
            </p>
          </div>
          <div className="lg:col-span-7 bg-[#E84B1A] p-12 flex flex-col justify-center min-h-[340px]">
            <h3 className="text-4xl md:text-5xl font-black uppercase text-[#2A0B0B] tracking-tight mb-4">INSTANT BOOKING</h3>
            <p className="text-lg md:text-xl font-medium text-black/80 max-w-[580px] leading-relaxed tracking-wide">
              Secure talent, sponsors and venues in clicks — not email chains that die in someone's inbox.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-[#2D0C0C] p-12 border border-[#b43c28]/20 flex flex-col justify-between min-h-[260px]">
            <h4 className="text-3xl font-black uppercase text-[#F2EDE4] tracking-tight">SPONSOR DOCS</h4>
            <span className="text-xs font-black tracking-[0.2em] text-[#E84B1A] uppercase mt-8">READY FOR DL</span>
          </div>
          <div className="bg-[#2D0C0C] p-12 border border-[#b43c28]/20 flex flex-col justify-between min-h-[260px]">
            <h4 className="text-3xl font-black uppercase text-[#F2EDE4] tracking-tight">VENDOR MAPS</h4>
            <div className="w-full bg-[#2A0B0B] h-1.5 mt-8 relative">
              <div className="absolute top-0 left-0 h-full w-2/3 bg-[#E84B1A]" />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section id="join" className="py-36 text-center bg-[#180505] px-8">
        <h2 className="font-sans font-black uppercase text-6xl md:text-8xl text-[#F2EDE4] tracking-tighter leading-none">PLUG IN.<br /><span className="text-[#E84B1A] italic font-serif normal-case">Light it up.</span></h2>
        <p className="max-w-[650px] mx-auto text-lg md:text-xl text-[#B07070] font-medium leading-relaxed tracking-wide mt-8">
          Join 450+ colleges already using Conflux to run bigger, better, easier events.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center mt-12 max-w-[600px] mx-auto">
          <button 
            onClick={() => onNavigate('signup')} 
            className="w-full sm:w-auto bg-[#E84B1A] border-none text-white font-black text-sm tracking-wider uppercase cursor-pointer hover:bg-[#FF5C25] transition-colors whitespace-nowrap flex items-center justify-center"
            style={{ minWidth: '280px', height: '68px' }}
          >
            CREATE YOUR PROFILE
          </button>
          <button 
            onClick={() => onNavigate('signin')} 
            className="w-full sm:w-auto bg-transparent text-[#F2EDE4] border border-[#F2EDE4]/30 font-black text-sm tracking-wider uppercase cursor-pointer hover:border-[#F2EDE4] transition-colors whitespace-nowrap flex items-center justify-center"
            style={{ minWidth: '280px', height: '68px' }}
          >
            SIGN IN
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2A0B0B] border-t border-[#b43c28]/20 pt-24 pb-12 px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-20">
          <div className="md:col-span-5">
            <a href="#" className="text-3xl font-black tracking-tight flex items-center gap-3 uppercase text-[#F2EDE4] no-underline mb-6">
              <span className="w-8 h-8 rounded-full border-[3px] border-[#E84B1A] flex items-center justify-center after:content-[''] after:w-3 after:h-3 after:bg-[#E84B1A] after:rounded-full"></span>
              CONFLUX
            </a>
            <p className="text-base md:text-lg text-[#B07070] leading-relaxed max-w-[360px]">
              The two-sided marketplace for college events. Built by organizers, for organizers.
            </p>
          </div>
          
          <div className="md:col-span-2 md:col-start-7">
            <div className="text-xs font-black tracking-[0.2em] text-[#E84B1A] uppercase mb-6">PLATFORM</div>
            <ul className="list-none p-0 flex flex-col gap-3 text-base font-bold">
              <li><a href="#marketplace" className="text-[#B07070] no-underline hover:text-[#F2EDE4]">Marketplace</a></li>
              <li><a href="#feed" className="text-[#B07070] no-underline hover:text-[#F2EDE4]">Live Feed</a></li>
              <li><a href="#" className="text-[#B07070] no-underline hover:text-[#F2EDE4]">Talent</a></li>
              <li><a href="#" className="text-[#B07070] no-underline hover:text-[#F2EDE4]">Sponsors</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs font-black tracking-[0.2em] text-[#E84B1A] uppercase mb-6">COMPANY</div>
            <ul className="list-none p-0 flex flex-col gap-3 text-base font-bold">
              <li><a href="#" className="text-[#B07070] no-underline hover:text-[#F2EDE4]">About</a></li>
              <li><a href="#" className="text-[#B07070] no-underline hover:text-[#F2EDE4]">Manifesto</a></li>
              <li><a href="#" className="text-[#B07070] no-underline hover:text-[#F2EDE4]">Careers</a></li>
              <li><a href="#" className="text-[#B07070] no-underline hover:text-[#F2EDE4]">Press</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs font-black tracking-[0.2em] text-[#E84B1A] uppercase mb-6">CONNECT</div>
            <ul className="list-none p-0 flex flex-col gap-3 text-base font-bold">
              <li><a href="#" className="text-[#B07070] no-underline hover:text-[#F2EDE4]">Instagram</a></li>
              <li><a href="#" className="text-[#B07070] no-underline hover:text-[#F2EDE4]">Discord</a></li>
              <li><a href="#" className="text-[#B07070] no-underline hover:text-[#F2EDE4]">Twitter</a></li>
              <li><a href="#" className="text-[#B07070] no-underline hover:text-[#F2EDE4]">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#b43c28]/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs font-black tracking-[0.2em] text-[#B07070] uppercase">
            © 2026 CONFLUX CAMPUS LABS
          </div>
          <div className="text-xs font-black tracking-[0.15em] text-[#B07070] uppercase">
            MADE LOUD ON CAMPUS
          </div>
        </div>
      </footer>

    </div>
  );
}