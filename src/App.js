import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import SignUpPage from './Components/SignUpPage';
import SignInPage from './Components/SignInPage';
import EventsPage from './Components/EventsPage';
import EventDetailsPage from './Components/EventDetailsPage';
import ProfilePage from './Components/ProfilePage';
import MeProfilePage from './Components/MeProfilePage';
import OrganizerDashboardPage from './Components/OrganizerDashboardPage';
import CreateEventPage from './Components/CreateEventPage';

function AppContent() {
  const navigate = useNavigate();

  // Central routing controller mapping state targets cleanly to URL paths
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
      navigate('/me');
    } else if (page === 'organizer-dashboard') {
      navigate('/dashboard');
    } else if (page === 'create-event') {
      navigate('/create-event');
    } else if (page.startsWith('event-')) {
      const id = page.replace('event-', '');
      navigate(`/events/${id}`);
    } else if (page.startsWith('profile-')) {
      const id = page.replace('profile-', '');
      navigate(`/profile/${id}`);
    }
  };

  // Extracts URL param criteria for specific marketplace events
  const EventDetailsWrapper = () => {
    const { id } = useParams();
    return <EventDetailsPage eventId={id} onNavigate={navigateTo} />;
  };

  // Extracts dynamic string parameters for public Company/Committee hubs
  const ProfileWrapper = () => {
    const { id } = useParams();
    return <ProfilePage profileId={id} onNavigate={navigateTo} />;
  };

  return (
    <div className="bg-[#2A0A0A] text-[#F2EDE4] font-sans antialiased selection:bg-[#E84B1A] selection:text-white min-h-screen w-full relative">
      
      <div className="min-h-screen w-full">
        <Routes>
          {/* Core Gateway Entry Structures */}
          <Route path="/" element={<LandingPage onNavigate={navigateTo} />} />
          <Route path="/signup" element={<SignUpPage onNavigate={navigateTo} />} />
          <Route path="/signin" element={<SignInPage onNavigate={navigateTo} />} />
          
          {/* Event Discovery Pipeline */}
          <Route path="/events" element={<EventsPage onNavigate={navigateTo} />} />
          <Route path="/events/:id" element={<EventDetailsWrapper />} />
          
          {/* Public Entity Hub Directory Interfaces */}
          <Route path="/profile/:id" element={<ProfileWrapper />} />
          
          {/* Private Committee/Company Management Command Profile Deck */}
          <Route path="/me" element={<MeProfilePage onNavigate={navigateTo} />} />

          {/* Dedicated Application Intake Management Systems */}
          <Route path="/dashboard" element={<OrganizerDashboardPage onNavigate={navigateTo} />} />

          {/* Event Creation & Strategic Launch Hub Pipeline */}
          <Route path="/create-event" element={<CreateEventPage onNavigate={navigateTo} />} />
        </Routes>
      </div>

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
