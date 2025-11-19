'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import VollautomatCalculator from '@/components/VollautomatCalculator';
import ModelsGrid from '@/components/ModelsGrid';
import LeadFormModal from '@/components/LeadFormModal';
import HeroVollautoWizard from '@/components/HeroVollautoWizard';
import BestsellerModal from '@/components/BestsellerModal';
import type { VollautomatResult, Model } from '@/lib/matching';
import modelsDataJson from '@/data/models.json';

export default function VollautomatenPage() {
  const modelsData = modelsDataJson as Model[];
  const [vollautomatResults, setVollautomatResults] = useState<VollautomatResult[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBestsellerModalOpen, setIsBestsellerModalOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState('');

  const handleMoreInfo = (modelName: string) => {
    setSelectedModel(modelName);
    setIsBestsellerModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-logo-brown">
      <Header />
      
      {/* Hero Section with Wizard */}
      <section className="relative min-h-[calc(100vh-80px)] pt-20 flex items-center justify-center px-6 bg-logo-brown overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/kaffeemaschine-buero.webp"
            alt=""
            fill
            className="object-cover w-full h-full"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Headlines */}
          <div className="text-white">
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-6 md:mb-8 text-center md:text-left">
              <h1 className="lato-black text-4xl md:text-6xl mb-6 leading-tight tracking-wide-custom">
                2–3 Wochen auf Reparatur warten? Nicht mit uns.
              </h1>
              <p className="text-xl md:text-2xl text-white/95 leading-relaxed tracking-wide-custom">
                Professionelle Kaffeevollautomaten – mit 1–3-Tage-Vor-Ort-Service in Freiburg, Lörrach & Basel. Oft bis zu 30–40 % günstiger als viele Großanbieter.
              </p>
            </div>
          </div>

          {/* Right: Wizard Form */}
          <div className="lg:justify-self-end w-full max-w-lg mb-8 lg:mb-0">
            <HeroVollautoWizard />
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="lato-black text-3xl md:text-4xl text-center mb-12 text-logo-brown">
            Warum Betriebe in der Region zu Dietrich wechseln
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-logo-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="lato-bold text-xl mb-4 text-logo-brown">
                Gleiche Profi-Automaten, bis zu 40% günstiger
              </h3>
              <p className="text-logo-brown/70">
                Wir arbeiten mit denselben Herstellern wie die großen Marken – viele Kunden sparen so bis zu 30–40 % ihrer bisherigen Kosten.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-logo-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="lato-bold text-xl mb-4 text-logo-brown">
                Service in 1–3 Tagen statt 2–3 Wochen
              </h3>
              <p className="text-logo-brown/70">
                Im Störfall sind wir in der Regel innerhalb von 1–3 Tagen bei Ihnen – statt 2–3 Wochen wie bei vielen Großanbietern.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-logo-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="lato-bold text-xl mb-4 text-logo-brown">
                Keine 5-Jahres-Knebelverträge
              </h3>
              <p className="text-logo-brown/70">
                Vertragslaufzeiten legen wir gemeinsam fest. Flexible Modelle statt starrer 5-Jahres-Verträge.
              </p>
            </div>
          </div>

          
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-logo-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="lato-bold text-xl mb-4 text-logo-brown">
                Individuelle Lösungen
              </h3>
              <p className="text-logo-brown/70">
                Vom kleinen Büro bis zur Großkantine – wir planen Ihre Lösung nach tatsächlichem Verbrauch, nicht nach Standardpaketen.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-logo-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="lato-bold text-xl mb-4 text-logo-brown">
                All-inclusive Mietmodelle
              </h3>
              <p className="text-logo-brown/70">
                Wartung, Reparatur, Service & auf Wunsch Bohnen – alles sauber kalkuliert in einem Modell.
              </p>
            </div>
          </div>
          
          {/* Brand Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
            <a
              href="https://www.cimbali.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-logo-brown hover:underline"
            >
              <Image
                src="/images/brands/lacimbali.png"
                alt="La Cimbali"
                width={120}
                height={48}
                className="opacity-70 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.thermoplan.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-logo-brown hover:underline"
            >
              <Image
                src="/images/brands/thermoplan.png"
                alt="Thermoplan"
                width={120}
                height={48}
                className="opacity-70 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.reneka.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-logo-brown hover:underline"
            >
              <Image
                src="/images/brands/reneka.jpg"
                alt="Reneka"
                width={120}
                height={48}
                className="opacity-70 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.brita.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-logo-brown hover:underline"
            >
              <Image
                src="/images/brands/brita.svg"
                alt="BRITA"
                width={120}
                height={48}
                className="opacity-70 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.topwasser.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-logo-brown hover:underline"
            >
              <Image
                src="/images/brands/topwasser.png"
                alt="TOPWASSER"
                width={120}
                height={48}
                className="opacity-70 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.gerhardt-automaten.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-logo-brown hover:underline"
            >
              <Image
                src="/images/brands/gerhardt_automaten.png"
                alt="Gerhardt Automaten"
                width={120}
                height={48}
                className="opacity-70 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </a>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-yellow-500 mb-2">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <p className="text-logo-brown text-sm">
              Freiburg · Lörrach · Basel (Südbaden & Region Basel)
            </p>
          </div>
        </div>
      </section>

      {/* Fallstudien */}
      <section className="py-16 bg-logo-brown/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="lato-black text-3xl md:text-4xl text-center mb-12 text-logo-brown">
            Fallstudien
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div className="bg-white p-8 border border-logo-brown/20">
              <p className="text-lg italic text-logo-brown/80 mb-4">
                "50% weniger Ausfallzeit – 20% mehr Kaffeeumsatz."
              </p>
              <p className="text-sm text-logo-brown/60">
                – Café Barista, Freiburg
              </p>
            </div>
            <div className="bg-white p-8 border border-logo-brown/20">
              <p className="text-lg italic text-logo-brown/80 mb-4">
                "Endlich keine Warteschlange mehr beim Frühstücksautomat."
              </p>
              <p className="text-sm text-logo-brown/60">
                – Hotel Schwarzwaldblick, Lörrach
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weitere Optionen - Original Calculator */}
      <section className="py-16 bg-logo-brown/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="lato-black text-3xl md:text-4xl mb-4 text-logo-brown">
              Warum Vollautomaten?
            </h2>
            <p className="text-lg text-logo-brown/70 max-w-3xl mx-auto">
              Komfort und Qualität für den professionellen Einsatz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="aspect-video bg-logo-brown/10 relative overflow-hidden rounded-lg">
              <Image
                src="/images/industry_coffee_machine_2.webp"
                alt="Vollautomaten im Einsatz"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h3 className="lato-bold text-xl mb-6 text-logo-brown">Perfekt für Unternehmen</h3>
              <div className="space-y-4 text-logo-brown/80">
                <p>
                  Vollautomaten sind die ideale Lösung für Büros, Kantinen und überall dort, 
                  wo viele Menschen schnell und unkompliziert guten Kaffee benötigen.
                </p>
                <div className="grid grid-cols-1 gap-4 mt-6">
                  <div className="bg-white p-4 border border-logo-brown/20">
                    <h4 className="lato-bold text-logo-brown mb-2">Automatische Milchsysteme</h4>
                    <p className="text-sm text-logo-brown/70">Cappuccino, Latte Macchiato und mehr auf Knopfdruck</p>
                  </div>
                  <div className="bg-white p-4 border border-logo-brown/20">
                    <h4 className="lato-bold text-logo-brown mb-2">Selbstreinigende Technologie</h4>
                    <p className="text-sm text-logo-brown/70">Minimaler Wartungsaufwand durch automatische Reinigungsprogramme</p>
                  </div>
                  <div className="bg-white p-4 border border-logo-brown/20">
                    <h4 className="lato-bold text-logo-brown mb-2">Flexible Service-Pakete</h4>
                    <p className="text-sm text-logo-brown/70">Von Basis-Wartung bis Premium-Rundum-Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bestseller Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="lato-black text-3xl md:text-4xl mb-4 text-logo-brown">
              Beliebte Vollautomaten
            </h2>
            <p className="text-lg text-logo-brown/70 max-w-3xl mx-auto">
              Bewährte Lösungen für verschiedene Unternehmensgrößen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bestseller 1 - Thermoplan BW4 Compact */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-square bg-gradient-to-br from-logo-brown/5 to-logo-brown/10 p-8 flex items-center justify-center">
                <Image
                  src="/images/bestseller/Thermoplan_Black&White4 compact CTM RS.png"
                  alt="Thermoplan Black&White4 Compact"
                  width={200}
                  height={200}
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="lato-black text-2xl mb-4 text-logo-brown text-center">
                  Thermoplan BW4 Compact
                </h3>
                <ul className="space-y-2 text-logo-brown/80 mb-6">
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-2 mt-1">+</span>
                    <span>180 Espresso / 100 Cappuccino pro Stunde</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-2 mt-1">+</span>
                    <span>4-Liter Milchkühlschrank integriert</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-2 mt-1">+</span>
                    <span>Extrem zuverlässige Thermoplan-Technik</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-2 mt-1">+</span>
                    <span>Ideal für 60–150 Personen</span>
                  </li>
                </ul>
                <div className="text-center">
                  <div className="lato-bold text-2xl text-logo-brown mb-4">
                    Preis auf Anfrage
                  </div>
                  <button
                    onClick={() => handleMoreInfo('Thermoplan BW4 Compact')}
                    className="bg-logo-blue text-white px-6 py-3 rounded-lg lato-bold hover:bg-logo-blue/90 transition-colors"
                  >
                    Mehr erfahren
                  </button>
                </div>
              </div>
            </div>

            {/* Bestseller 2 - Gerhardt OCX */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-square bg-gradient-to-br from-logo-brown/5 to-logo-brown/10 p-8 flex items-center justify-center">
                <Image
                  src="/images/bestseller/gerhardt-OCX.png"
                  alt="Gerhardt OCX Premium Tabletop"
                  width={200}
                  height={200}
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="lato-black text-2xl mb-4 text-logo-brown text-center">
                  Gerhardt OCX Premium
                </h3>
                <ul className="space-y-2 text-logo-brown/80 mb-6">
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-2 mt-1">+</span>
                    <span>Frischmilchsystem für cremigen Cappuccino</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-2 mt-1">+</span>
                    <span>10.1" HD-Touchscreen, frei konfigurierbar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-2 mt-1">+</span>
                    <span>Extrem leise & langlebig (Made in Germany)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-2 mt-1">+</span>
                    <span>Ideal für 10–60 Tassen/Tag</span>
                  </li>
                </ul>
                <div className="text-center">
                  <div className="lato-bold text-2xl text-logo-brown mb-4">
                    ab CHF 149/Mon.
                  </div>
                  <button
                    onClick={() => handleMoreInfo('Gerhardt OCX Premium')}
                    className="bg-logo-blue text-white px-6 py-3 rounded-lg lato-bold hover:bg-logo-blue/90 transition-colors"
                  >
                    Mehr erfahren
                  </button>
                </div>
              </div>
            </div>

            {/* Bestseller 3 - Gerhardt S-Serie */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-square bg-gradient-to-br from-logo-brown/5 to-logo-brown/10 p-8 flex items-center justify-center">
                <Image
                  src="/images/bestseller/gerhardt-S.png"
                  alt="Gerhardt S-Serie Standautomat"
                  width={200}
                  height={200}
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="lato-black text-2xl mb-4 text-logo-brown text-center">
                  Gerhardt S-Serie
                </h3>
                <ul className="space-y-2 text-logo-brown/80 mb-6">
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-2 mt-1">+</span>
                    <span>750-Becherwerk integriert (optional DUO-Becherwerk)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-2 mt-1">+</span>
                    <span>15,6" Full-HD Touchscreen (optional 34")</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-2 mt-1">+</span>
                    <span>Extrem robuste, wartungsarme Technik</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-2 mt-1">+</span>
                    <span>Ideal für 60+ Personen oder Dauerbetrieb</span>
                  </li>
                </ul>
                <div className="text-center">
                  <div className="lato-bold text-2xl text-logo-brown mb-4">
                    Preis auf Anfrage
                  </div>
                  <button
                    onClick={() => handleMoreInfo('Gerhardt S-Serie')}
                    className="bg-logo-blue text-white px-6 py-3 rounded-lg lato-bold hover:bg-logo-blue/90 transition-colors"
                  >
                    Mehr erfahren
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-logo-brown text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="lato-black text-3xl md:text-4xl mb-6">
            Bereit für perfekten Kaffee?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam die perfekte Kaffeelösung für Ihren Betrieb finden.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-logo-brown px-8 py-4 text-lg lato-bold hover:bg-white/95 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
          >
            Jetzt Beratung anfragen
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <Image
              src="/images/logo/logo.png"
              alt="Dietrich Kaffee Logo"
              width={192}
              height={64}
              className="brightness-0 invert"
              loading="lazy"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="lato-bold text-xl mb-4">Kontakt</h3>
              <div className="space-y-2 text-gray-300">
                <p className="lato-bold text-white">Mirko Dietrich</p>
                <p>Telefon: <a href="tel:+4915206386702" className="hover:text-white">+49 1520 638 67 02</a></p>
                <p>E-Mail: <a href="mailto:vertrieb@dietrichkaffee.de" className="hover:text-white">vertrieb@dietrichkaffee.de</a></p>
                <p className="text-sm pt-2">Servicegebiet: Freiburg · Lörrach · Basel (Südbaden & Region Basel)</p>
              </div>
            </div>

            <div>
              <h3 className="lato-bold text-xl mb-4">Navigation</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/" className="hover:text-white">Startseite</a></li>
                <li><a href="/kaffeemaschinen" className="hover:text-white">Siebträger</a></li>
                <li><a href="/vollautomaten" className="hover:text-white">Vollautomaten</a></li>
              </ul>
            </div>

            <div>
              <h3 className="lato-bold text-xl mb-4">Partner</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="https://www.cimbali.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">La Cimbali</a></li>
                <li><a href="https://www.thermoplan.ch" target="_blank" rel="noopener noreferrer" className="hover:text-white">Thermoplan</a></li>
                <li><a href="https://www.reneka.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Reneka</a></li>
                <li><a href="https://www.topwasser.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">TOPWASSER</a></li>
                <li>BRITA Professional</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              © {new Date().getFullYear()} Dietrich Kaffee. Alle Rechte vorbehalten.
            </div>
            <div className="flex gap-6">
              <a href="/legal#impressum" className="hover:text-white">Impressum</a>
              <a href="/legal#datenschutz" className="hover:text-white">Datenschutzerklärung</a>
            </div>
          </div>
        </div>
      </footer>

      <LeadFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        model={null}
        sourceSection="vollautomaten"
      />

      <BestsellerModal
        isOpen={isBestsellerModalOpen}
        onClose={() => {
          setIsBestsellerModalOpen(false);
          setSelectedModel('');
        }}
        modelName={selectedModel}
      />
    </div>
  );
}