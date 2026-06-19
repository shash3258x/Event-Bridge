import React, { useState } from 'react';

export default function MeProfilePage({ onNavigate }) {
  // Core Organizational Identity State - Structured for an Elite Entity Hub
  const [profileData, setProfileData] = useState({
    displayName: "CodeX Club",
    city: "Gandhinagar",
    subRole: "Technical Student Society",
    bio: "The premier software development and systems programming community at DAIICT. Powering annual flagship hackathons, algorithms arenas, and low-level engineering sandboxes.",
    email: "codex@daiict.ac.in",
    role: "COMMITTEE" 
  });

  // Controls the massive overlay modal visibility state
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
  // Temporary form buffer states for the upscaled modal context inputs
  const [formName, setFormName] = useState(profileData.displayName);
  const [formCity, setFormCity] = useState(profileData.city);
  const [formBio, setFormBio] = useState(profileData.bio);

  const handleOpenEditModal = () => {
    setFormName(profileData.displayName);
    setFormCity(profileData.city);
    setFormBio(profileData.bio);
    setIsEditModalOpen(true);
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setProfileData(prev => ({
      ...prev,
      displayName: formName,
      city: formCity,
      bio: formBio
    }));
    setIsEditModalOpen(false);
  };

  return (
    <div className={`min-h-screen bg-[#2A0B0B] text-[#F2EDE4] font-sans antialiased w-full relative ${isEditModalOpen ? 'overflow-hidden h-screen' : 'overflow-x-hidden'}`}>
      
      {/* 1. TOP NAVBAR LAYOUT */}
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

      {/* 2. PROFILE HERO TITLE CONTAINER */}
      <header className="px-8 md:px-16 pt-24 pb-16 w-full flex flex-col md:flex-row md:items-end md:justify-between gap-8 max-w-none">
        <div className="space-y-5">
          <div className="text-sm font-black tracking-[0.3em] uppercase text-[#E84B1A]">
            // WELCOME BACK · OPERATIONAL ACCREDITATION
          </div>
          <h1 className="font-serif italic font-normal text-6xl md:text-7xl xl:text-8xl text-white tracking-tight leading-none">
            Hello, {profileData.displayName}.
          </h1>
          <p className="text-2xl md:text-3xl text-[#B07070] font-normal leading-relaxed tracking-wide max-w-5xl pt-2">
            This is your private organization hub deck — manage your committee portfolio profile, track applicant logs, and evaluate marketplace network metrics.
          </p>
        </div>
        
        <div className="shrink-0 pt-4">
          <span className="text-sm font-black tracking-[0.25em] uppercase px-8 py-5 border border-[#E84B1A] text-[#E84B1A] bg-[#E84B1A]/5 font-mono select-none">
            {profileData.role} Hub
          </span>
        </div>
      </header>

      {/* 3. FOUR-COLUMN COUNTER METRICS STRIP */}
      <section className="px-8 md:px-16 w-full mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: "APPLICATIONS RECEIVED", count: "0", sub: "0 approved · 0 review pending" },
          { label: "EVENTS INSTANTED", count: "0", sub: "—" },
          { label: "HUB FOLLOWERS", count: "0", sub: "tracking your committee" },
          { label: "PARTNERS CONNECTED", count: "0", sub: "verified network tags" }
        ].map((block, idx) => (
          <div key={idx} className="bg-[#210808] border border-[#b43c28]/20 p-10 flex flex-col justify-between min-h-[200px]">
            <div className="text-xs font-black tracking-[0.25em] text-[#B07070] uppercase">{block.label}</div>
            <div className="text-6xl font-black text-white leading-none my-4 tracking-wide">{block.count}</div>
            <div className="text-sm font-semibold text-[#B07070]/60 uppercase tracking-widest">{block.sub}</div>
          </div>
        ))}
      </section>

      {/* 4. PRIVATE HUB SPECIFICATION DISPLAY */}
      <main className="px-8 md:px-16 w-full pb-36 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-8 bg-[#210808] border border-[#b43c28]/20 p-12 relative">
          <div className="flex justify-between items-center border-b border-[#b43c28]/10 pb-6 mb-10">
            <div className="text-base font-black tracking-[0.25em] text-white uppercase flex items-center gap-3">
              <span className="text-[#E84B1A]">▶</span> CORE DOSSIER DETAILS
            </div>
            <button 
              onClick={handleOpenEditModal}
              className="bg-transparent border-2 border-[#E84B1A] text-[#E84B1A] font-black text-xs tracking-[0.2em] uppercase px-8 py-3 cursor-pointer hover:bg-[#E84B1A] hover:text-white transition-all shadow-md"
            >
              EDIT
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-3">
              <div className="aspect-square w-full max-w-[200px] border-2 border-[#b43c28]/40 bg-[#2A0B0B] flex items-center justify-center font-serif italic text-7xl text-[#E84B1A] select-none shadow-inner">
                {profileData.displayName?.[0]?.toUpperCase() ?? "?"}
              </div>
            </div>

            <div className="md:col-span-9 space-y-10">
              <div>
                <div className="text-sm font-black tracking-[0.25em] text-[#B07070] uppercase">HUB DISPLAY NAME</div>
                <div className="text-3xl font-black text-white mt-3 tracking-wide">{profileData.displayName}</div>
              </div>
              <div>
                <div className="text-sm font-black tracking-[0.25em] text-[#B07070] uppercase">METROPOLITAN LOCATION</div>
                <div className="text-3xl font-black text-white mt-3 tracking-wide">{profileData.city || "—"}</div>
              </div>
              <div>
                <div className="text-sm font-black tracking-[0.25em] text-[#B07070] uppercase">ENTITY TYPE DESCRIPTION</div>
                <div className="text-3xl font-black text-[#E84B1A] mt-3 tracking-wide">{profileData.subRole}</div>
              </div>
              <div>
                <div className="text-sm font-black tracking-[0.25em] text-[#B07070] uppercase">ORGANIZATIONAL BIO PROPOSAL BRIEF</div>
                <div className="text-2xl font-serif italic text-[#F2EDE4]/90 mt-3 leading-relaxed tracking-wide">{profileData.bio || "No summary parameters defined yet."}</div>
              </div>
              <div>
                <div className="text-sm font-black tracking-[0.25em] text-[#B07070] uppercase">OFFICIAL EMAIL ACCREDITATION</div>
                <div className="text-2xl font-black text-[#B07070] mt-3 tracking-wide">{profileData.email}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-10 w-full">
          <div className="bg-[#210808] border border-[#b43c28]/20 p-12 space-y-12 w-full">
            <div className="text-xs font-black tracking-[0.3em] text-[#B07070] uppercase border-b border-[#b43c28]/10 pb-4">
              ▶ QUICK LAUNCH INDEX
            </div>
            <div 
              onClick={() => onNavigate('events')} 
              className="group cursor-pointer flex justify-between items-center pb-8 border-b border-[#b43c28]/15"
            >
              <div>
                <div className="text-3xl font-black text-white tracking-wide group-hover:text-[#E84B1A] transition-colors">Browse events</div>
                <div className="text-sm font-black tracking-[0.2em] text-[#B07070]/60 uppercase mt-2">DISCOVER WHAT'S ON STAGE</div>
              </div>
              <span className="text-2xl text-[#E84B1A] transform transition-transform group-hover:translate-x-3 font-black">→</span>
            </div>
          </div>

          <div className="bg-[#210808] border border-[#b43c28]/20 p-12 w-full">
            <div className="text-xs font-black tracking-[0.3em] text-[#B07070] uppercase border-b border-[#b43c28]/10 pb-4 mb-8">
              DECK CONTROL
            </div>
            <button 
              onClick={() => {
                localStorage.removeItem('userSession');
                onNavigate('landing');
              }}
              className="bg-transparent border-none text-[#E84B1A] font-black text-xl tracking-wider cursor-pointer hover:underline text-left flex items-center p-0"
            >
              → Sign out of Conflux network
            </button>
          </div>
        </div>
      </main>

      {/* 5. APPLICANT LOG PANELS FOOTER TRACKER */}
      <section className="px-8 md:px-16 pb-40 w-full border-t border-[#b43c28]/10 pt-20">
        <div className="text-sm font-black tracking-[0.25em] text-white uppercase mb-10">
          ▶ INCOMING APPLICANT TRANSACTION LOG
        </div>
        <div className="text-2xl text-[#B07070] font-medium tracking-wide">
          No active partner submissions found to process.{' '}
          <span onClick={() => onNavigate('events')} className="text-[#E84B1A] font-black underline cursor-pointer hover:text-[#FF5C25] tracking-wider ml-1">
            Explore live marketplace activities —
          </span>
        </div>
      </section>

      {/* 🌟 2X ENHANCED ACCESSIBLE FULL-SCREEN OVERLAY BIO EDITOR MODAL WINDOW 🌟 */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-8 md:p-16 bg-[#180505]/95 backdrop-blur-2xl transition-all">
          <div className="bg-[#2A0B0B] border-2 border-[#E84B1A] max-w-5xl w-full p-12 md:p-16 shadow-2xl relative flex flex-col justify-between max-h-[92vh] overflow-y-auto">
            
            <button 
              onClick={() => setIsEditModalOpen(false)}
              className="absolute top-8 right-8 text-3xl text-[#B07070] bg-transparent border-none cursor-pointer hover:text-white transition-colors font-black"
            >
              ✕
            </button>

            <div className="space-y-10 w-full">
              <div className="text-sm font-black tracking-[0.35em] uppercase text-[#E84B1A]">
                COMMAND INITIALIZATION · UPDATE HUB IDENTITY PARAMETERS
              </div>
              
              <h2 className="font-serif italic font-normal text-5xl md:text-6xl text-white tracking-wide">
                Modify Committee Identity
              </h2>
              
              <p className="text-xl text-[#B07070] leading-relaxed font-medium">
                Adjust your organizational brand metadata or update your portfolio summary description text briefs to stay relevant across the platform framework.
              </p>

              <form onSubmit={handleSaveProfile} className="pt-4 space-y-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="block text-sm font-black tracking-[0.25em] text-white/80 uppercase">HUB DISPLAY NAME</label>
                    <input 
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full bg-[#210808] border-2 border-[#b43c28]/40 px-8 py-5 text-2xl font-semibold text-white focus:outline-none focus:border-[#E84B1A] transition-colors"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="block text-sm font-black tracking-[0.25em] text-white/80 uppercase">METROPOLITAN LOCATION</label>
                    <input 
                      type="text"
                      value={formCity}
                      onChange={(e) => setFormCity(e.target.value)}
                      className="w-full bg-[#210808] border-2 border-[#b43c28]/40 px-8 py-5 text-2xl font-semibold text-white focus:outline-none focus:border-[#E84B1A] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-black tracking-[0.25em] text-white/80 uppercase">
                    ORGANIZATIONAL BIO PROPOSAL SUMMARY BRIEF
                  </label>
                  <textarea 
                    required
                    rows="8"
                    value={formBio}
                    onChange={(e) => setFormBio(e.target.value)}
                    className="w-full bg-[#210808] border-2 border-[#b43c28]/40 px-8 py-6 text-2xl font-semibold text-white focus:outline-none focus:border-[#E84B1A] transition-colors resize-none leading-relaxed"
                  />
                </div>

                <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <button 
                    type="button"
                    onClick={() => setIsEditModalOpen(false)}
                    className="w-full bg-transparent border-2 border-[#b43c28]/40 text-[#F2EDE4] font-black text-sm tracking-[0.25em] uppercase py-6 cursor-pointer hover:border-white transition-all"
                  >
                    DISCARD REVISIONS
                  </button>
                  <button 
                    type="submit"
                    className="w-full bg-[#E84B1A] text-white font-black text-sm tracking-[0.25em] uppercase py-6 border-none cursor-pointer hover:bg-[#FF5C25] transition-colors shadow-xl"
                  >
                    COMMIT HUB CHANGELOG →
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}