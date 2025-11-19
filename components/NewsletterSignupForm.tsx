'use client';

import { useState } from 'react';

export default function NewsletterSignupForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    if (!email) return;
    
    const payload = {
      source_page: 'newsletter',
      einsatzort: '',
      personen_oder_mitarbeiter: '',
      tassen_pro_tag: '',
      service_wichtigkeit: '',
      vertragslaufzeit: '',
      wunsch_art: '',
      sortiment: '',
      startzeitpunkt: '',
      name: '',
      firma: '',
      email: email,
      telefon: ''
    };
    
    console.log('Sending payload:', payload);
    
    try {
      const response = await fetch('https://hook.eu2.make.com/6xuikq4aspdnburhd6s0sh4i9bo4hogc', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload)
      });
      
      console.log('Response status:', response.status);
      const responseText = await response.text();
      console.log('Response body:', responseText);
      
      alert('Vielen Dank für Ihre Anmeldung!');
      setEmail('');
    } catch (error) {
      console.error('Newsletter signup error:', error);
    }
  };

  return (
    <section className="py-16 bg-logo-brown/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="lato-black text-3xl mb-4 text-logo-brown">
          Bleiben Sie informiert
        </h2>
        <p className="text-logo-brown/70 mb-8">
          Erhalten Sie neue Artikel und Praxis-Tipps direkt in Ihr Postfach.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            id="newsletter-email"
            type="email"
            placeholder="Ihre E-Mail-Adresse"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 border border-logo-brown/20 focus:outline-none focus:ring-2 focus:ring-logo-blue"
          />
          <button 
            type="button"
            onClick={handleSubmit}
            className="bg-logo-blue text-white px-6 py-3 lato-bold hover:bg-logo-blue/90 transition-colors focus:outline-none focus:ring-2 focus:ring-logo-blue focus:ring-offset-2"
          >
            Anmelden
          </button>
        </div>
        <p className="text-xs text-logo-brown/60 mt-4">
          Kostenlos und jederzeit abbestellbar. Ihre Daten sind bei uns sicher.
        </p>
      </div>
    </section>
  );
}