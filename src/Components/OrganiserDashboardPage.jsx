import React, { useState } from 'react';

// ============================================================================
// MOCK DATA — Configured with your exact Conflux campus event pipeline
// ============================================================================
const MOCK_EVENTS = [
  { eventId: 'evt-tarang', title: 'Tarang 2026', city: 'Gandhinagar', startDate: '14 Aug 2026' },
  { eventId: 'evt-synapse', title: 'Synapse 2026', city: 'Gandhinagar', startDate: '02 Oct 2026' },
  { eventId: 'evt-ifest', title: 'i.Fest 2026', city: 'Gandhinagar', startDate: '12 Nov 2026' },
];

const ROLE_ORDER = ['SPONSOR', 'PERFORMER', 'JUDGE', 'VENDOR', 'VOLUNTEER', 'COLLABORATION'];

const ROLE_LABEL = {
  SPONSOR: 'Sponsor Applications',
  PERFORMER: 'Performer Applications',
  JUDGE: 'Judge Applications',
  VENDOR: 'Vendor Applications',
  VOLUNTEER: 'Volunteer Applications',
  COLLABORATION: 'Collaboration Applications',
};

// opportunities grouped by role, wired to the updated event indices
const MOCK_OPPORTUNITIES = {
  'evt-tarang': {
    SPONSOR: [
      {
        opportunityId: 'opp-title-sponsor',
        title: 'Title Sponsor',
        meta: '₹50,000 · Title tier',
        applications: [
          { applicationId: 'a1', name: 'Acme Corp', sub: 'FinTech · Ahmedabad', status: 'Pending', message: 'We\u2019d like to back the main stage and get logo placement on all event collateral.' },
          { applicationId: 'a2', name: 'Nike Campus', sub: 'Apparel · Bengaluru', status: 'Pending', message: 'Proposing a co-branded merch booth alongside the title sponsorship.' },
        ],
      },
      {
        opportunityId: 'opp-co-sponsor',
        title: 'Co-sponsor',
        meta: '₹20,000 · Associate tier',
        applications: [
          { applicationId: 'a3', name: 'Local Cafe Co.', sub: 'F&B · Gandhinagar', status: 'Accepted', message: 'Happy to provide refreshment stalls in exchange for associate sponsor branding.' },
        ],
      },
    ],
    PERFORMER: [
      {
        opportunityId: 'opp-lead-vocalist',
        title: 'DJ Night Headliner',
        meta: '₹30,000 · 90 min set',
        applications: [
          { applicationId: 'a4', name: 'Aria Shah', sub: 'Artist · EDM / Progressive', status: 'Pending', message: 'Closing night EDM set on the main stage production track.' },
        ],
      },
    ],
    JUDGE: [
      {
        opportunityId: 'opp-cp-judge',
        title: 'Coding Competition Judge',
        meta: '17 Aug 2026',
        applications: [
          { applicationId: 'a5', name: 'Rohan Mehta', sub: 'SDE-3, ex-ICPC finalist', status: 'Pending', message: 'Judged two regional CP contests last year, glad to help here too.' },
          { applicationId: 'a6', name: 'Dr. Priya Nair', sub: 'Faculty, DAIICT', status: 'Rejected', message: 'Available all day for judging flagship code sprint tracks.' },
        ],
      },
    ],
    VENDOR: [
      {
        opportunityId: 'opp-food-vendor',
        title: 'Food Vendor',
        meta: 'Food & Beverage',
        applications: [],
      },
    ],
    VOLUNTEER: [
      {
        opportunityId: 'opp-reg-desk',
        title: 'Volunteer Coordinator',
        meta: '25 needed · 15 hrs',
        applications: [
          { applicationId: 'a7', name: 'Vivaan Patel', sub: '2nd year, CSE', status: 'Pending', message: 'Free both days, have crowd management experience.' },
        ],
      },
    ],
    COLLABORATION: [
      {
        opportunityId: 'opp-partner-college',
        title: 'Partner College — Cross Promotion',
        meta: 'Vadodara',
        applications: [],
      },
    ],
  },
  'evt-synapse': {
    SPONSOR: [], PERFORMER: [], JUDGE: [], VENDOR: [], VOLUNTEER: [], COLLABORATION: [],
  },
  'evt-ifest': {
    SPONSOR: [], PERFORMER: [], JUDGE: [], VENDOR: [], VOLUNTEER: [], COLLABORATION: [],
  },
};

const STATUS_STYLE = {
  Pending: 'text-[#E8A12A] bg-[#E8A12A]/10 border-[#E8A12A]/30',
  Accepted: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
  Rejected: 'text-[#B07070] bg-[#B07070]/10 border-[#b43c28]/30',
};

export default function OrganizerDashboardPage({ onNavigate }) {
  const [selectedEventId, setSelectedEventId] = useState(MOCK_EVENTS[0].eventId);
  const [openRoles, setOpenRoles] = useState({});
  const [openOpportunities, setOpenOpportunities] = useState({});
  const [applicationData, setApplicationData] = useState(MOCK_OPPORTUNITIES);

  const currentEvent = MOCK_EVENTS.find((e) => e.eventId === selectedEventId) || MOCK_EVENTS[0];
  const roleData = applicationData[selectedEventId] || {};

  const toggleRole = (role) => {
    setOpenRoles((prev) => ({ ...prev, [role]: !prev[role] }));
  };

  const toggleOpportunity = (oppId) => {
    setOpenOpportunities((prev) => ({ ...prev, [oppId]: !prev[oppId] }));
  };

  const setApplicationStatus = (role, oppId, applicationId, status) => {
    setApplicationData((prev) => {
      const next = structuredClone(prev);
      const opp = next[selectedEventId][role].find((o) => o.opportunityId === oppId);
      const app = opp.applications.find((a) => a.applicationId === applicationId);
      app.status = status;
      return next;
    });
  };

  const countForRole = (role) =>
    (roleData[role] || []).reduce((sum, opp) => sum + opp.applications.length, 0);

  const pendingForRole = (role) =>
    (roleData[role] || []).reduce(
      (sum, opp) => sum + opp.applications.filter((a) => a.status === 'Pending').length,
      0
    );

  return (
    <div className="min-h-screen bg-[#2A0B0B] text-[#F2EDE4] font-sans antialiased w-full relative overflow-x-hidden">

      {/* 1. TOP NAVBAR */}
      <nav className="h-[115px] px-8 md:px-16 border-b border-[#b43c28]/20 flex items-center justify-between sticky top-0 bg-[#2A0B0B]/95 backdrop-blur-md z-40 w-full">
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

        <div className="flex items-center gap-6">
          <button
            onClick={() => onNavigate('create-event')}
            className="bg-[#E84B1A] border-none text-white text-sm font-black tracking-[0.2em] uppercase cursor-pointer hover:bg-[#FF5C25] transition-colors px-8 py-4.5"
          >
            + NEW EVENT
          </button>
        </div>
      </nav>

      {/* 2. HEADER + EVENT SELECTOR */}
      <header className="px-8 md:px-16 pt-20 pb-12 w-full flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="space-y-5">
          <div className="text-sm font-black tracking-[0.3em] uppercase text-[#E84B1A]">
            ORGANIZER DASHBOARD
          </div>
          <h1 className="font-serif italic font-normal text-6xl md:text-7xl text-white tracking-tight leading-none">
            Manage your events.
          </h1>
        </div>
      </header>

      {/* 3. EVENT TABS */}
      <section className="px-8 md:px-16 w-full mb-16 flex flex-wrap gap-4">
        {MOCK_EVENTS.map((evt) => (
          <button
            key={evt.eventId}
            onClick={() => setSelectedEventId(evt.eventId)}
            className={`px-8 py-5 border text-left font-black tracking-wide transition-colors ${
              evt.eventId === selectedEventId
                ? 'bg-[#E84B1A] border-[#E84B1A] text-white'
                : 'bg-[#210808] border-[#b43c28]/20 text-[#B07070] hover:border-[#E84B1A] hover:text-white'
            }`}
          >
            <div className="text-xl">{evt.title}</div>
            <div className="text-xs uppercase tracking-[0.2em] mt-1 opacity-80">{evt.city} · {evt.startDate}</div>
          </button>
        ))}
      </section>

      <main className="px-8 md:px-16 w-full pb-40 space-y-20">

        {/* 4. EVENT SUMMARY BAR */}
        <section className="bg-[#210808] border border-[#b43c28]/20 p-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <div className="text-sm font-black tracking-[0.25em] text-[#B07070] uppercase mb-2">CURRENTLY MANAGING</div>
            <div className="text-3xl font-black text-white tracking-wide">{currentEvent.title}</div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => onNavigate(`event-${currentEvent.eventId}`)}
              className="bg-transparent border-2 border-[#b43c28]/40 text-[#F2EDE4] font-black text-xs tracking-[0.2em] uppercase px-8 py-4 hover:border-white transition-all"
            >
              VIEW PUBLIC PAGE
            </button>
            <button
              onClick={() => onNavigate('create-opportunity')}
              className="bg-[#E84B1A] border-none text-white font-black text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#FF5C25] transition-colors"
            >
              + POST OPPORTUNITY
            </button>
          </div>
        </section>

        {/* 5. APPLICATIONS */}
        <section>
          <div className="flex items-center justify-between mb-10 border-b border-[#b43c28]/10 pb-6">
            <h2 className="font-serif italic font-normal text-5xl text-white tracking-wide">Applications</h2>
          </div>

          <div className="space-y-4">
            {ROLE_ORDER.map((role) => {
              const total = countForRole(role);
              const pending = pendingForRole(role);
              const isOpen = !!openRoles[role];

              return (
                <div key={role} className="bg-[#210808] border border-[#b43c28]/20">
                  <button
                    onClick={() => toggleRole(role)}
                    className="w-full flex items-center justify-between px-10 py-7 bg-transparent border-none cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-5">
                      <span className={`text-[#E84B1A] text-xl font-black transition-transform inline-block ${isOpen ? 'rotate-90' : ''}`}>
                        ▸
                      </span>
                      <span className="text-2xl font-black text-white tracking-wide uppercase">
                        {ROLE_LABEL[role]}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      {pending > 0 && (
                        <span className="text-xs font-black tracking-[0.2em] uppercase px-4 py-2 text-[#E8A12A] bg-[#E8A12A]/10 border border-[#E8A12A]/30">
                          {pending} PENDING
                        </span>
                      )}
                      <span className="text-sm font-black tracking-[0.2em] text-[#B07070] uppercase">
                        {total} TOTAL
                      </span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-10 pb-10 border-t border-[#b43c28]/10 pt-8 space-y-6">
                      {(roleData[role] || []).length === 0 && (
                        <div className="text-lg text-[#B07070] font-medium tracking-wide">
                          No {role.toLowerCase()} opportunities posted for this event yet.
                        </div>
                      )}

                      {(roleData[role] || []).map((opp) => {
                        const oppOpen = !!openOpportunities[opp.opportunityId];
                        return (
                          <div key={opp.opportunityId} className="bg-[#2A0B0B] border border-[#b43c28]/15">
                            <button
                              onClick={() => toggleOpportunity(opp.opportunityId)}
                              className="w-full flex items-center justify-between px-8 py-6 bg-transparent border-none cursor-pointer text-left"
                            >
                              <div className="flex items-center gap-4">
                                <span className={`text-[#B07070] text-sm font-black transition-transform inline-block ${oppOpen ? 'rotate-90' : ''}`}>▸</span>
                                <div>
                                  <div className="text-xl font-black text-white tracking-wide">{opp.title}</div>
                                  <div className="text-xs font-black tracking-[0.2em] text-[#B07070]/70 uppercase mt-1">{opp.meta}</div>
                                </div>
                              </div>
                              <span className="text-xs font-black tracking-[0.2em] text-[#B07070] uppercase">
                                {opp.applications.length} APPLICANT{opp.applications.length !== 1 ? 'S' : ''}
                              </span>
                            </button>

                            {oppOpen && (
                              <div className="px-8 pb-8 space-y-5">
                                {opp.applications.length === 0 && (
                                  <div className="text-base text-[#B07070]/70 font-medium tracking-wide">
                                    No applications yet for this slot.
                                  </div>
                                )}
                                {opp.applications.map((app) => (
                                  <div
                                    key={app.applicationId}
                                    className="border border-[#b43c28]/15 px-8 py-7 flex flex-col md:flex-row md:items-center justify-between gap-6"
                                  >
                                    <div className="flex-1 space-y-2">
                                      <div className="flex items-center gap-4 flex-wrap">
                                        <span className="text-xl font-black text-white tracking-wide">{app.name}</span>
                                        <span className={`text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1 border ${STATUS_STYLE[app.status]}`}>
                                          {app.status}
                                        </span>
                                      </div>
                                      <div className="text-sm font-black tracking-[0.15em] text-[#B07070]/70 uppercase">{app.sub}</div>
                                      <p className="text-base text-[#F2EDE4]/80 font-medium leading-relaxed pt-1 max-w-2xl">{app.message}</p>
                                    </div>

                                    {app.status === 'Pending' ? (
                                      <div className="flex gap-3 shrink-0">
                                        <button
                                          onClick={() => setApplicationStatus(role, opp.opportunityId, app.applicationId, 'Rejected')}
                                          className="bg-transparent border-2 border-[#b43c28]/40 text-[#F2EDE4] font-black text-xs tracking-[0.2em] uppercase px-6 py-3.5 cursor-pointer hover:border-white transition-all"
                                        >
                                          REJECT
                                        </button>
                                        <button
                                          onClick={() => setApplicationStatus(role, opp.opportunityId, app.applicationId, 'Accepted')}
                                          className="bg-[#E84B1A] border-none text-white font-black text-xs tracking-[0.2em] uppercase px-6 py-3.5 cursor-pointer hover:bg-[#FF5C25] transition-colors"
                                        >
                                          ACCEPT
                                        </button>
                                      </div>
                                    ) : (
                                      <button
                                        onClick={() => setApplicationStatus(role, opp.opportunityId, app.applicationId, 'Pending')}
                                        className="bg-transparent border-none text-[#B07070] font-black text-xs tracking-[0.2em] uppercase underline cursor-pointer hover:text-white transition-colors shrink-0"
                                      >
                                        UNDO
                                      </button>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </main>
    </div>
  );
}