import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import SignUpPage from './Components/SignUpPage';
import SignInPage from './Components/SignInPage';
import EventsPage from './Components/EventsPage';

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
    }

  };

  return (
    <div className="bg-[#2A0A0A] text-[#F2EDE4] font-sans antialiased selection:bg-[#E84B1A] selection:text-white min-h-screen">
      <Routes>
        {/* Maps URL paths directly to your components */}
        <Route path="/" element={<LandingPage onNavigate={navigateTo} />} />
        <Route path="/signup" element={<SignUpPage onNavigate={navigateTo} />} />
        <Route path="/signin" element={<SignInPage onNavigate={navigateTo} />} />
        <Route path="/events" element={<EventsPage onNavigate={navigateTo} />} />
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
