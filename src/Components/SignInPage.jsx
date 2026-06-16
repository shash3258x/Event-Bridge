import React from 'react';

export default function SignInPage({ onNavigate }) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-[#2A0A0A]">
      {/* Left Panel */}
      <div className="lg:col-span-5 bg-[#1E0707] p-12 flex flex-col justify-between border-r border-[#b43c28]/20 min-h-[300px]">
        <div onClick={() => onNavigate('landing')} className="font-condensed text-xl font-black uppercase tracking-wider flex items-center gap-2 cursor-pointer text-[#F2EDE4]">
          <span className="w-5 h-5 rounded-full border-2 border-[#E84B1A] flex items-center justify-center after:w-1.5 after:h-1.5 after:bg-[#E84B1A] after:rounded-full"></span>
          Conflux
        </div>
        <div className="my-auto py-8">
          <h1 className="font-condensed font-black uppercase text-6xl leading-[0.95] tracking-tight text-[#F2EDE4] mb-4">
            WELCOME<br /><span className="text-[#E84B1A] italic">BACK.</span>
          </h1>
          <p className="text-sm text-[#B07070] leading-relaxed">
            The feed is brewing. Pick up where you left off — your sponsors, talent and crews are waiting.
          </p>
        </div>
        <div className="text-[9px] tracking-widest text-[#B07070]/60 uppercase">
          MADE LOUD ON CAMPUS.
        </div>
      </div>

      {/* Right Form Panel */}
      <div className="lg:col-span-7 p-8 lg:p-16 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <header className="mb-8">
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#E84B1A]">SIGN IN</span>
            <h2 className="font-condensed font-black uppercase text-4xl text-[#F2EDE4] mt-1">
              PLUG BACK <span className="text-[#E84B1A] italic">IN.</span>
            </h2>
          </header>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold tracking-widest text-[#B07070] uppercase mb-1">EMAIL</label>
              <input type="email" placeholder="you@college.edu" className="w-full bg-[#1E0707] border border-[#b43c28]/30 px-4 py-3 text-sm text-[#F2EDE4] focus:outline-none focus:border-[#E84B1A]" />
            </div>
            <div>
              <label className="block text-[10px] font-bold tracking-widest text-[#B07070] uppercase mb-1">PASSWORD</label>
              <input type="password" placeholder="********" className="w-full bg-[#1E0707] border border-[#b43c28]/30 px-4 py-3 text-sm text-[#F2EDE4] focus:outline-none focus:border-[#E84B1A]" />
            </div>

            <button type="submit" className="w-full bg-[#E84B1A] text-white font-bold text-[11px] tracking-widest uppercase py-3.5 mt-6 border-none cursor-pointer hover:bg-[#FF5C25]">
              SIGN IN →
            </button>
            <div className="text-center text-[#B07070] text-xs py-1">OR</div>
            <button type="button" className="w-full bg-transparent border border-[#b43c28]/40 text-[#F2EDE4] font-bold text-[10px] tracking-widest uppercase py-3 cursor-pointer hover:border-[#F2EDE4]">
              CONTINUE WITH GOOGLE
            </button>
          </form>

          <footer className="mt-6 text-center text-xs text-[#B07070]">
            New to Conflux?{' '}
            <span onClick={() => onNavigate('signup')} className="text-[#E84B1A] font-bold cursor-pointer hover:underline">
              CREATE AN ACCOUNT →
            </span>
          </footer>
        </div>
      </div>
    </div>
  );
}