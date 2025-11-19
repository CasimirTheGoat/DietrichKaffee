'use client';

import HeroRotator from './HeroRotator';

const HERO_IMAGES = [
  '/images/barista_coffee.webp',
  '/images/big_industry_coffee_machine.webp',
  '/images/coffee_beans.webp',
  '/images/industry_coffee_machine.webp',
  '/images/industry_coffee_machine_2.webp',
  '/images/small_espresso_cup.webp'
];

export default function Hero() {
  const handleCTAClick = (button: 'kaffeemaschinen' | 'vollautomaten') => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'hero_click',
        button
      });
    }

    const target = button === 'kaffeemaschinen' ? '#kaffee' : '#vollautomaten';
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center px-6 bg-logo-brown overflow-hidden pt-20">
      <HeroRotator images={HERO_IMAGES} interval={5000} />

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto small-hero">
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
          <h1 className="lato-black text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight tracking-wide-custom small-hero-heading">
            Gleiche Profi-Maschinen wie die großen Marken – nur ohne Logo-Aufschlag.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed tracking-wide-custom small-hero-sub">
            Kaffeelösungen für Unternehmen in Freiburg, Lörrach & Basel – bis zu 30% günstiger, mit Service in 1–3 Tagen und ohne 5-Jahres-Knebelverträge.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => handleCTAClick('kaffeemaschinen')}
            className="bg-white text-logo-brown px-10 py-4 rounded-lg font-bold text-lg tracking-wider-custom transition-all duration-300 hover:bg-white/95 hover:shadow-2xl hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 min-w-[240px] border-2 border-white/20 backdrop-blur-sm"
          >
            Siebträger
          </button>
          <button
            onClick={() => handleCTAClick('vollautomaten')}
            className="bg-logo-blue text-white px-10 py-4 rounded-lg font-bold text-lg tracking-wider-custom transition-all duration-300 hover:bg-logo-blue/95 hover:shadow-2xl hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 min-w-[240px] border-2 border-logo-blue/30 backdrop-blur-sm"
          >
            Vollautomaten
          </button>
        </div>
      </div>
    </section>
  );
}
