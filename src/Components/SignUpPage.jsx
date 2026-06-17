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
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-[#2A0B0B] font-sans antialiased">
      
      {/* Left Panel - Corrected warmer layered accent hue */}
      <div className="lg:col-span-5 bg-[#210808] p-12 md:p-20 lg:p-24 flex flex-col justify-between min-h-[500px] lg:min-h-screen border-r border-[#b43c28]/20">
        
        <div onClick={() => onNavigate('landing')} className="text-4xl font-black uppercase tracking-tight flex items-center gap-4 cursor-pointer text-[#F2EDE4] select-none">
          <span className="w-11 h-11 rounded-full border-[3px] border-[#E84B1A] flex items-center justify-center after:w-4.5 after:h-4.5 after:bg-[#E84B1A] after:rounded-full shrink-0"></span>
          CONFLUX
        </div>
        
        {/* Main Content Area */}
        <div className="my-auto py-16 lg:py-24">
          <span className="text-sm font-black tracking-[0.3em] uppercase text-[#E84B1A] block mb-4">JOIN THE NETWORK</span>
          <h1 className="font-sans font-black uppercase text-7xl md:text-8xl xl:text-9xl() leading-[0.85] tracking-tighter text-[#F2EDE4] mb-8 select-none">
            LIGHT IT<br /><span className="text-[#E84B1A] italic">UP.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#B07070] leading-relaxed tracking-wide font-normal max-w-[540px]">
            Pick how you show up. You can always wear more than one hat — Conflux is built for the chaos of modern campus events.
          </p>
        </div>
        
        <div className="text-sm font-black tracking-[0.25em] text-[#B07070]/50 uppercase pt-6">
          450+ COLLEGES · 12K VERIFIED TALENT
        </div>
      </div>

      {/* Right Form Panel - Base background updated to match global workspace tone */}
      <div className="lg:col-span-7 p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-[#2A0B0B]">
        <div className="max-w-2xl w-full mx-auto">
          <header className="mb-10">
            <span className="text-xs font-black tracking-[0.2em] uppercase text-[#B07070]">CREATE PROFILE · STEP 1</span>
            <h2 className="font-sans font-black uppercase text-4xl lg:text-5xl text-[#F2EDE4] mt-2 tracking-tight">
              WHO ARE <span className="text-[#E84B1A] italic">YOU?</span>
            </h2>
          </header>

          {/* Role Selection Grid - Synchronized base tile structures */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-[1px] bg-[#b43c28]/30 border border-[#b43c28]/30 mb-10">
            {roles.map((role) => (
              <div 
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`p-6 cursor-pointer transition-all min-h-[120px] flex flex-col justify-between select-none ${
                  selectedRole === role.id ? 'bg-[#E84B1A] text-white' : 'bg-[#2A0B0B] text-[#F2EDE4] hover:bg-[#3D1414]'
                }`}
              >
                <div className="text-sm font-black tracking-wider uppercase">{role.label}</div>
                <div className={`text-xs leading-normal mt-3 ${selectedRole === role.id ? 'text-white/90 font-medium' : 'text-[#B07070] font-normal'}`}>{role.desc}</div>
              </div>
            ))}
          </div>

          {/* Form Inputs */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div>
              <label className="block text-xs font-black tracking-[0.18em] text-[#B07070] uppercase mb-2">FULL NAME</label>
              <input 
                type="text" 
                placeholder="Alex Chen" 
                className="w-full bg-[#210808] border border-[#b43c28]/40 px-5 py-4 text-base font-medium text-[#F2EDE4] placeholder-[#B07070]/40 focus:outline-none focus:border-[#E84B1A] transition-colors" 
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-black tracking-[0.18em] text-[#B07070] uppercase mb-2">EMAIL</label>
                <input 
                  type="email" 
                  placeholder="you@college.edu" 
                  className="w-full bg-[#210808] border border-[#b43c28]/40 px-5 py-4 text-base font-medium text-[#F2EDE4] placeholder-[#B07070]/40 focus:outline-none focus:border-[#E84B1A] transition-colors" 
                />
              </div>
              <div>
                <label className="block text-xs font-black tracking-[0.18em] text-[#B07070] uppercase mb-2">PASSWORD</label>
                <input 
                  type="password" 
                  placeholder="At least 6 characters" 
                  className="w-full bg-[#210808] border border-[#b43c28]/40 px-5 py-4 text-base font-medium text-[#F2EDE4] placeholder-[#B07070]/40 focus:outline-none focus:border-[#E84B1A] transition-colors" 
                />
              </div>
            </div>

            {/* Create Account Box CTA */}
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full bg-[#E84B1A] text-white font-black text-sm tracking-[0.18em] uppercase py-5 border-none cursor-pointer hover:bg-[#FF5C25] transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                style={{ height: '64px' }}
              >
                CREATE ACCOUNT &nbsp;→
              </button>
            </div>
            
            <div className="text-center text-[#B07070] text-sm font-black tracking-widest py-1">OR</div>
            
            {/* Google Authentication Box CTA */}
            <button 
              type="button" 
              className="w-full bg-transparent border-2 border-[#b43c28]/40 text-[#F2EDE4] font-black text-xs tracking-[0.18em] uppercase py-5 cursor-pointer hover:border-[#F2EDE4] hover:bg-[#F2EDE4]/5 transition-all flex items-center justify-center whitespace-nowrap"
              style={{ height: '64px' }}
            >
              CONTINUE WITH GOOGLE AS {selectedRole}
            </button>
          </form>

          {/* Footer Section */}
          <footer className="mt-10 text-center text-sm font-bold tracking-wide text-[#B07070]">
            Already on Conflux?{' '}
            <span onClick={() => onNavigate('signin')} className="text-[#E84B1A] font-black cursor-pointer hover:underline uppercase ml-1 tracking-wider">
              SIGN IN &nbsp;→
            </span>
          </footer>
        </div>
      </div>
//testing commit
    </div>
  );
}