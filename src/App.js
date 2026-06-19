import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import SignUpPage from './Components/SignUpPage';
import SignInPage from './Components/SignInPage';
import EventsPage from './Components/EventsPage';
import EventDetailsPage from './Components/EventDetailsPage';
import ProfilePage from './Components/ProfilePage';
import MeProfilePage from './Components/MeProfilePage'; // Imported the private profile deck file

function AppContent() {
  const navigate = useNavigate();

  // central navigation handler - easy to adjust later when you link pages
  const navigateTo = (page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (page === 'landing') {
      navigate('/');
    } else if (page === 'signin') {
      navigate('/signin');
    } else if (page === 'signup') {
      navigate('/signup');
    } else if (page === 'events') {
      navigate('/events');
    } else if (page === 'profile-me') {
      // Direct action link to target the private hub view path
      navigate('/me');
    } else if (page.startsWith('event-')) {
      const id = page.replace('event-', '');
      navigate(`/events/${id}`);
    } else if (page.startsWith('profile-')) {
      const id = page.replace('profile-', '');
      navigate(`/profile/${id}`);
    }
  };

  // Extracts dynamic route parameters for individual event profiles
  const EventDetailsWrapper = () => {
    const { id } = useParams();
    return <EventDetailsPage eventId={id} onNavigate={navigateTo} />;
  };

  // Extracts parameters for checking public Committee/Company profiles (e.g. /profile/org-codex)
  const ProfileWrapper = () => {
    const { id } = useParams();
    return <ProfilePage profileId={id} onNavigate={navigateTo} />;
  };

  return (
    <div className="bg-[#2A0A0A] text-[#F2EDE4] font-sans antialiased selection:bg-[#E84B1A] selection:text-white min-h-screen">
      <Routes>
        {/* Core Entry Pages */}
        <Route path="/" element={<LandingPage onNavigate={navigateTo} />} />
        <Route path="/signup" element={<SignUpPage onNavigate={navigateTo} />} />
        <Route path="/signin" element={<SignInPage onNavigate={navigateTo} />} />
        
        {/* Marketplace Feeds & Details */}
        <Route path="/events" element={<EventsPage onNavigate={navigateTo} />} />
        <Route path="/events/:id" element={<EventDetailsWrapper />} />
        
        {/* Public Committees / Corporate Storefront Profiles */}
        <Route path="/profile/:id" element={<ProfileWrapper />} />
        
        {/* PRIVATE COMMAND PROFILE DECK (The logged-in view we just built) */}
        <Route path="/me" element={<MeProfilePage onNavigate={navigateTo} />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
