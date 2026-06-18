import React from 'react';
// FIXED: Added useParams right here in the import statement
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import SignUpPage from './Components/SignUpPage';
import SignInPage from './Components/SignInPage';
import EventsPage from './Components/EventsPage';
import EventDetailsPage from './Components/EventDetailsPage';

function AppContent() {
  const navigate = useNavigate();

  // Translates your old state targets into real URL paths with smooth scrolling
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
    } else if (page.startsWith('event-')) {
      const id = page.replace('event-', '');
      navigate(`/events/${id}`);
    }
  };

  const EventDetailsWrapper = () => {
    const { id } = useParams();
    return <EventDetailsPage eventId={id} onNavigate={navigateTo} />;
  };

  return (
    <div className="bg-[#2A0A0A] text-[#F2EDE4] font-sans antialiased selection:bg-[#E84B1A] selection:text-white min-h-screen">
      <Routes>
        {/* Maps URL paths directly to your components */}
        <Route path="/" element={<LandingPage onNavigate={navigateTo} />} />
        <Route path="/signup" element={<SignUpPage onNavigate={navigateTo} />} />
        <Route path="/signin" element={<SignInPage onNavigate={navigateTo} />} />
        <Route path="/events" element={<EventsPage onNavigate={navigateTo} />} />
        <Route path="/events/:id" element={<EventDetailsWrapper />} />
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
