import React, { useState } from 'react';

export default function SignUpPage({ onNavigate }) {
  const [selectedRole, setSelectedRole] = useState('ORGANIZER');

  const roles = [
    { id: 'ORGANIZER', label: 'ORGANIZER', desc: 'Clubs, fests, hackathons.' },
    { id: 'SPONSOR', label: 'SPONSOR', desc: 'Brands scouting Gen-Z reach.' },
    { id: 'PERFORMER', label: 'PERFORMER', desc: 'Artists, bands, speakers.' },
    { id: 'VENDOR', label: 'VENDOR', desc: 'Food, gear, merch, AV.' },
    { id: 'JUDGE', label: 'JUDGE', desc: 'Industry pros on panels.' },
    { id: 'VOLUNTEER', label: 'VOLUNTEER', desc: 'Crew, ops, hospitality.' }
  ];

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-[#2A0A0A]">
      {/* Left Panel */}
      <div className="lg:col-span-5 bg-[#1E0707] p-12 flex flex-col justify-between border-r border-[#b43c28]/20 min-h-[300px]">
        <div onClick={() => onNavigate('landing')} className="font-condensed text-xl font-black uppercase tracking-wider flex items-center gap-2 cursor-pointer text-[#F2EDE4]">
          <span className="w-5 h-5 rounded-full border-2 border-[#E84B1A] flex items-center justify-center after:w-1.5 after:h-1.5 after:bg-[#E84B1A] after:rounded-full"></span>
          Conflux
        </div>
        <div className="my-auto py-8">
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#E84B1A]">JOIN THE NETWORK</span>
          <h1 className="font-condensed font-black uppercase text-6xl leading-[0.95] tracking-tight text-[#F2EDE4] mt-2 mb-4">
            LIGHT IT<br /><span className="text-[#E84B1A] italic">UP.</span>
          </h1>
          <p className="text-sm text-[#B07070] leading-relaxed">
            Pick how you show up. You can always wear more than one hat — Conflux is built for the chaos.
          </p>
        </div>
        <div className="text-[9px] tracking-widest text-[#B07070]/60 uppercase">
          450+ COLLEGES · 12K VERIFIED TALENT
        </div>
      </div>

      {/* Right Form Panel */}
      <div className="lg:col-span-7 p-8 lg:p-16 flex flex-col justify-center">
        <div className="max-w-xl w-full mx-auto">
          <header className="mb-8">
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#B07070]">CREATE PROFILE · STEP 1</span>
            <h2 className="font-condensed font-black uppercase text-4xl text-[#F2EDE4] mt-1">
              WHO ARE <span className="text-[#E84B1A] italic">YOU?</span>
            </h2>
          </header>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-[1px] bg-[#b43c28]/20 border border-[#b43c28]/20 mb-8">
            {roles.map((role) => (
              <div 
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`p-4 cursor-pointer transition-colors min-h-[90px] flex flex-col justify-between ${
                  selectedRole === role.id ? 'bg-[#E84B1A] text-white' : 'bg-[#1E0707] text-[#F2EDE4] hover:bg-[#3A1010]'
                }`}
              >
                <div className="font-condensed font-extrabold text-xs tracking-wide">{role.label}</div>
                <div className={`text-[10px] leading-tight ${selectedRole === role.id ? 'text-white/80' : 'text-[#B07070]'}`}>{role.desc}</div>
              </div>
            ))}
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold tracking-widest text-[#B07070] uppercase mb-1">FULL NAME</label>
              <input type="text" placeholder="Alex Chen" className="w-full bg-[#1E0707] border border-[#b43c28]/30 px-4 py-3 text-sm text-[#F2EDE4] focus:outline-none focus:border-[#E84B1A]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold tracking-widest text-[#B07070] uppercase mb-1">EMAIL</label>
                <input type="email" placeholder="you@college.edu" className="w-full bg-[#1E0707] border border-[#b43c28]/30 px-4 py-3 text-sm text-[#F2EDE4] focus:outline-none focus:border-[#E84B1A]" />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-widest text-[#B07070] uppercase mb-1">PASSWORD</label>
                <input type="password" placeholder="At least 6 characters" className="w-full bg-[#1E0707] border border-[#b43c28]/30 px-4 py-3 text-sm text-[#F2EDE4] focus:outline-none focus:border-[#E84B1A]" />
              </div>
            </div>

            <button type="submit" className="w-full bg-[#E84B1A] text-white font-bold text-[11px] tracking-widest uppercase py-3.5 mt-4 border-none cursor-pointer hover:bg-[#FF5C25]">
              CREATE ACCOUNT →
            </button>
            <div className="text-center text-[#B07070] text-xs py-1">OR</div>
            <button type="button" className="w-full bg-transparent border border-[#b43c28]/40 text-[#F2EDE4] font-bold text-[10px] tracking-widest uppercase py-3 cursor-pointer hover:border-[#F2EDE4]">
              CONTINUE WITH GOOGLE AS {selectedRole}
            </button>
          </form>

          <footer className="mt-6 text-center text-xs text-[#B07070]">
            Already on Conflux?{' '}
            <span onClick={() => onNavigate('signin')} className="text-[#E84B1A] font-bold cursor-pointer hover:underline">
              SIGN IN →
            </span>
          </footer>
        </div>
      </div>
    </div>
  );
}