import React, { useState } from 'react';
import LandingPage from './Components/LandingPage';
import SignUpPage from './Components/SignUpPage';
import SignInPage from './Components/SignInPage';

export default function App() {
  // Simple state router: 'landing' | 'signup' | 'signin'
  const [currentPage, setCurrentPage] = useState('landing');

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#2A0A0A] text-[#F2EDE4] font-sans antialiased selection:bg-[#E84B1A] selection:text-white min-h-screen">
      {currentPage === 'landing' && (
        <LandingPage onNavigate={navigateTo} />
      )}
      {currentPage === 'signup' && (
        <SignUpPage onNavigate={navigateTo} />
      )}
      {currentPage === 'signin' && (
        <SignInPage onNavigate={navigateTo} />
      )}
    </div>
  );
}
