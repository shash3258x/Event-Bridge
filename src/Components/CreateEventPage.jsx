import React, { useState } from 'react';

// Event fields per schema 7.2 — title, description, category, city, venue,
// startDate, endDate, poster. organizerId/eventId/createdAt are set server-side.

const CATEGORIES = ['Tech Fest', 'Cultural', 'Sports', 'Competition', 'Workshop', 'Other'];

export default function CreateEventPage({ onNavigate }) {
  const [form, setForm] = useState({
    title: '',
    category: '',
    city: '',
    venue: '',
    startDate: '',
    endDate: '',
    description: '',
    poster: null,
  });
  const [posterPreview, setPosterPreview] = useState(null);
  const [errors, setErrors] = useState({});

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const handlePosterChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    update('poster', file);
    setPosterPreview(URL.createObjectURL(file));
  };

  const validate = () => {
    const next = {};
    if (!form.title.trim()) next.title = 'Required';
    if (!form.category) next.category = 'Required';
    if (!form.city.trim()) next.city = 'Required';
    if (!form.venue.trim()) next.venue = 'Required';
    if (!form.startDate) next.startDate = 'Required';
    if (!form.endDate) next.endDate = 'Required';
    if (form.startDate && form.endDate && form.endDate < form.startDate) {
      next.endDate = 'Must be after start date';
    }
    if (!form.description.trim()) next.description = 'Required';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // POST to backend here — creates Event, then redirect organizer to
    // post Opportunities under it.
    onNavigate('organizer-dashboard');
  };

  return (
    <div className="min-h-screen bg-[#2A0B0B] text-[#F2EDE4] font-sans antialiased w-full relative overflow-x-hidden">

      {/* 1. TOP NAVBAR — WITH PROFILE COMMAND CONTAINER STACK */}
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

        <button
          onClick={() => onNavigate('organizer-dashboard')}
          className="bg-transparent border-none text-[#F2EDE4] text-base font-black tracking-[0.25em] uppercase cursor-pointer hover:text-[#E84B1A] transition-colors flex items-center gap-2"
        >
          ← DASHBOARD
        </button>
      </nav>

      {/* 2. HEADER */}
      <header className="px-8 md:px-16 pt-20 pb-16 w-full">
        <div className="text-sm font-black tracking-[0.3em] uppercase text-[#E84B1A] mb-5">
          ORGANIZER · NEW LISTING
        </div>
        <h1 className="font-serif italic font-normal text-6xl md:text-7xl text-white tracking-tight leading-none">
          Create an Event
        </h1>
        <p className="text-2xl text-[#B07070] font-normal leading-relaxed tracking-wide max-w-3xl pt-6">
          This becomes the public listing students, sponsors, and partners discover. You'll add specific sponsor / performer / judge / vendor / volunteer opportunities after this is saved.
        </p>
      </header>

      <main className="px-8 md:px-16 w-full pb-40">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* LEFT — FORM FIELDS */}
          <div className="lg:col-span-8 space-y-12">

            {/* TITLE */}
            <div className="space-y-4">
              <label className="block text-sm font-black tracking-[0.25em] text-white/80 uppercase">
                EVENT TITLE
              </label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => update('title', e.target.value)}
                placeholder="e.g. TechFest 2027"
                className={`w-full bg-[#210808] border-2 px-8 py-5 text-2xl font-semibold text-white placeholder-[#B07070]/30 focus:outline-none focus:border-[#E84B1A] transition-colors ${errors.title ? 'border-red-500/60' : 'border-[#b43c28]/40'}`}
              />
              {errors.title && <div className="text-sm font-bold text-red-400 uppercase tracking-wide">{errors.title}</div>}
            </div>

            {/* CATEGORY + CITY */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="block text-sm font-black tracking-[0.25em] text-white/80 uppercase">
                  CATEGORY
                </label>
                <select
                  value={form.category}
                  onChange={(e) => update('category', e.target.value)}
                  className={`w-full bg-[#210808] border-2 px-8 py-5 text-xl font-semibold text-white focus:outline-none focus:border-[#E84B1A] transition-colors appearance-none cursor-pointer ${errors.category ? 'border-red-500/60' : 'border-[#b43c28]/40'}`}
                >
                  <option value="" disabled>Select category</option>
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                {errors.category && <div className="text-sm font-bold text-red-400 uppercase tracking-wide">{errors.category}</div>}
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-black tracking-[0.25em] text-white/80 uppercase">
                  CITY
                </label>
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => update('city', e.target.value)}
                  placeholder="e.g. Gandhinagar"
                  className={`w-full bg-[#210808] border-2 px-8 py-5 text-xl font-semibold text-white placeholder-[#B07070]/30 focus:outline-none focus:border-[#E84B1A] transition-colors ${errors.city ? 'border-red-500/60' : 'border-[#b43c28]/40'}`}
                />
                {errors.city && <div className="text-sm font-bold text-red-400 uppercase tracking-wide">{errors.city}</div>}
              </div>
            </div>

            {/* VENUE */}
            <div className="space-y-4">
              <label className="block text-sm font-black tracking-[0.25em] text-white/80 uppercase">
                VENUE
              </label>
              <input
                type="text"
                value={form.venue}
                onChange={(e) => update('venue', e.target.value)}
                placeholder="Full venue address or name"
                className={`w-full bg-[#210808] border-2 px-8 py-5 text-xl font-semibold text-white placeholder-[#B07070]/30 focus:outline-none focus:border-[#E84B1A] transition-colors ${errors.venue ? 'border-red-500/60' : 'border-[#b43c28]/40'}`}
              />
              {errors.venue && <div className="text-sm font-bold text-red-400 uppercase tracking-wide">{errors.venue}</div>}
            </div>

            {/* START + END DATE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="block text-sm font-black tracking-[0.25em] text-white/80 uppercase">
                  START DATE
                </label>
                <input
                  type="date"
                  value={form.startDate}
                  onChange={(e) => update('startDate', e.target.value)}
                  className={`w-full bg-[#210808] border-2 px-8 py-5 text-xl font-semibold text-white focus:outline-none focus:border-[#E84B1A] transition-colors [color-scheme:dark] ${errors.startDate ? 'border-red-500/60' : 'border-[#b43c28]/40'}`}
                />
                {errors.startDate && <div className="text-sm font-bold text-red-400 uppercase tracking-wide">{errors.startDate}</div>}
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-black tracking-[0.25em] text-white/80 uppercase">
                  END DATE
                </label>
                <input
                  type="date"
                  value={form.endDate}
                  onChange={(e) => update('endDate', e.target.value)}
                  className={`w-full bg-[#210808] border-2 px-8 py-5 text-xl font-semibold text-white focus:outline-none focus:border-[#E84B1A] transition-colors [color-scheme:dark] ${errors.endDate ? 'border-red-500/60' : 'border-[#b43c28]/40'}`}
                />
                {errors.endDate && <div className="text-sm font-bold text-red-400 uppercase tracking-wide">{errors.endDate}</div>}
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="space-y-4">
              <label className="block text-sm font-black tracking-[0.25em] text-white/80 uppercase">
                DESCRIPTION
              </label>
              <textarea
                rows="8"
                value={form.description}
                onChange={(e) => update('description', e.target.value)}
                placeholder="What is this event about? Who is it for? What makes it worth sponsoring, performing at, or volunteering for?"
                className={`w-full bg-[#210808] border-2 px-8 py-6 text-xl font-semibold text-white placeholder-[#B07070]/30 focus:outline-none focus:border-[#E84B1A] transition-colors resize-none leading-relaxed ${errors.description ? 'border-red-500/60' : 'border-[#b43c28]/40'}`}
              />
              {errors.description && <div className="text-sm font-bold text-red-400 uppercase tracking-wide">{errors.description}</div>}
            </div>

            {/* SUBMIT ACTIONS */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <button
                type="button"
                onClick={() => onNavigate('organizer-dashboard')}
                className="w-full bg-transparent border-2 border-[#b43c28]/40 text-[#F2EDE4] font-black text-sm tracking-[0.25em] uppercase py-6 cursor-pointer hover:border-white transition-all"
              >
                CANCEL
              </button>
              <button
                type="submit"
                className="w-full bg-[#E84B1A] text-white font-black text-sm tracking-[0.25em] uppercase py-6 border-none cursor-pointer hover:bg-[#FF5C25] transition-colors shadow-lg"
              >
                CREATE EVENT →
              </button>
            </div>
          </div>

          {/* RIGHT — POSTER UPLOAD + LIVE PREVIEW */}
          <div className="lg:col-span-4 space-y-10">
            <div className="bg-[#210808] border border-[#b43c28]/20 p-10 space-y-6">
              <div className="text-sm font-black tracking-[0.25em] text-[#B07070] uppercase">
                EVENT POSTER
              </div>

              <label
                htmlFor="poster-upload"
                className="aspect-[3/4] w-full border-2 border-dashed border-[#b43c28]/40 flex flex-col items-center justify-center cursor-pointer hover:border-[#E84B1A] transition-colors overflow-hidden bg-[#2A0B0B]"
              >
                {posterPreview ? (
                  <img src={posterPreview} alt="Poster preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center px-6 space-y-3">
                    <div className="text-4xl text-[#E84B1A]">+</div>
                    <div className="text-sm font-black tracking-[0.2em] text-[#B07070] uppercase">UPLOAD POSTER IMAGE</div>
                  </div>
                )}
              </label>
              <input id="poster-upload" type="file" accept="image/*" onChange={handlePosterChange} className="hidden" />

              <p className="text-sm text-[#B07070]/70 font-medium leading-relaxed">
                Optional, but listings with posters get noticeably more clicks. Portrait orientation recommended.
              </p>
            </div>

            {/* LIVE PREVIEW CARD */}
            <div className="bg-[#210808] border border-[#b43c28]/20 p-10 space-y-6">
              <div className="text-sm font-black tracking-[0.25em] text-[#B07070] uppercase">
                PREVIEW
              </div>
              <div className="space-y-4">
                <span className="text-xs font-black tracking-[0.2em] text-[#E84B1A] uppercase">
                  {form.category || 'CATEGORY'} · {(form.city || 'CITY').toUpperCase()}
                </span>
                <h4 className="font-serif italic text-3xl text-white leading-tight">
                  {form.title || 'Your Event Title'}
                </h4>
                <div className="text-sm font-black tracking-[0.2em] text-[#B07070] uppercase pt-4 border-t border-[#b43c28]/10">
                  {form.startDate || 'Start date'} {form.endDate ? `– ${form.endDate}` : ''}
                </div>
              </div>
            </div>
          </div>

        </form>
      </main>
    </div>
  );
}