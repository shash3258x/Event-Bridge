import React from 'react';

export default function SignInPage({ onNavigate }) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-[#2A0B0B] font-sans antialiased">
      
      {/* Left Panel - Corrected warmer layered accent hue */}
      <div className="lg:col-span-5 bg-[#210808] p-12 md:p-20 lg:p-24 flex flex-col justify-between min-h-[500px] lg:min-h-screen border-r border-[#b43c28]/20">
        
        <div onClick={() => onNavigate('landing')} className="text-4xl font-black uppercase tracking-tight flex items-center gap-4 cursor-pointer text-[#F2EDE4] select-none">
          <span className="w-11 h-11 rounded-full border-[3px] border-[#E84B1A] flex items-center justify-center after:w-4.5 after:h-4.5 after:bg-[#E84B1A] after:rounded-full shrink-0"></span>
          CONFLUX
        </div>
        
        {/* Main Header Copy Area */}
        <div className="my-auto py-16 lg:py-24">
          <h1 className="font-sans font-black uppercase text-7xl md:text-8xl xl:text-9xl leading-[0.85] tracking-tighter text-[#F2EDE4] mb-8 select-none">
            WELCOME<br /><span className="text-[#E84B1A] italic">BACK.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#B07070] leading-relaxed tracking-wide font-normal max-w-[540px]">
            The feed is brewing. Pick up where you left off — your sponsors, talent and crews are waiting.
          </p>
        </div>
        
        <div className="text-sm font-black tracking-[0.25em] text-[#B07070]/50 uppercase pt-6">
          MADE LOUD ON CAMPUS.
        </div>
      </div>

      {/* Right Form Panel - Base background updated to match global workspace tone */}
      <div className="lg:col-span-7 p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-[#2A0B0B]">
        <div className="max-w-2xl w-full mx-auto">
          <header className="mb-10">
            <span className="text-xs font-black tracking-[0.2em] uppercase text-[#E84B1A]">SIGN IN</span>
            <h2 className="font-sans font-black uppercase text-4xl lg:text-5xl text-[#F2EDE4] mt-2 tracking-tight">
              PLUG BACK <span className="text-[#E84B1A] italic">IN.</span>
            </h2>
          </header>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
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
                placeholder="********" 
                className="w-full bg-[#210808] border border-[#b43c28]/40 px-5 py-4 text-base font-medium text-[#F2EDE4] placeholder-[#B07070]/40 focus:outline-none focus:border-[#E84B1A] transition-colors" 
              />
            </div>

            {/* Primary Action Button */}
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full bg-[#E84B1A] text-white font-black text-sm tracking-[0.18em] uppercase py-5 border-none cursor-pointer hover:bg-[#FF5C25] transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                style={{ height: '64px' }}
              >
                SIGN IN &nbsp;→
              </button>
            </div>
            
            <div className="text-center text-[#B07070] text-sm font-black tracking-widest py-1">OR</div>
            
            {/* Google Authentication Option */}
            <button 
              type="button" 
              className="w-full bg-transparent border-2 border-[#b43c28]/40 text-[#F2EDE4] font-black text-xs tracking-[0.18em] uppercase py-5 cursor-pointer hover:border-[#F2EDE4] hover:bg-[#F2EDE4]/5 transition-all flex items-center justify-center whitespace-nowrap"
              style={{ height: '64px' }}
            >
              CONTINUE WITH GOOGLE
            </button>
          </form>

          {/* Form Footer Block */}
          <footer className="mt-10 text-center text-sm font-bold tracking-wide text-[#B07070]">
            New to Conflux?{' '}
            <span onClick={() => onNavigate('signup')} className="text-[#E84B1A] font-black cursor-pointer hover:underline uppercase ml-1 tracking-wider">
              CREATE AN ACCOUNT &nbsp;→
            </span>
          </footer>
        </div>
      </div>

    </div>
  );
}