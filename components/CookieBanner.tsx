'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    
    // Enable analytics tracking
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('consent', 'grant');
    }
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
    
    // Disable analytics tracking
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('consent', 'revoke');
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-logo-brown/20 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="text-sm text-logo-brown leading-relaxed">
            <p>
              Wir verwenden Cookies für Analyse und Marketing. Mit "Akzeptieren" stimmen Sie der Nutzung zu.{' '}
              <a 
                href="/legal#datenschutz" 
                className="underline hover:no-underline text-logo-blue"
                target="_blank"
                rel="noopener noreferrer"
              >
                Datenschutz
              </a>
            </p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={handleReject}
              className="px-4 py-2 text-sm border border-logo-brown/30 text-logo-brown hover:bg-logo-brown/5 transition-colors focus:outline-none focus:ring-2 focus:ring-logo-blue rounded"
            >
              Ablehnen
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm bg-logo-blue text-white hover:bg-logo-blue/90 transition-colors focus:outline-none focus:ring-2 focus:ring-logo-blue focus:ring-offset-2 rounded"
            >
              Akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}