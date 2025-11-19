'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import CupsCalculator from '@/components/CupsCalculator';
import ModelsGrid from '@/components/ModelsGrid';
import LeadFormModal from '@/components/LeadFormModal';
import HeroKaffeeWizard from '@/components/HeroKaffeeWizard';
import BestsellerModal from '@/components/BestsellerModal';
import type { ScoredModel, Model } from '@/lib/matching';
import modelsDataJson from '@/data/models.json';

export default function KaffemaschinenPage() {
  const modelsData = modelsDataJson as Model[];
  const [kaffeemaschineResults, setKaffeemaschineResults] = useState<ScoredModel[]>([]);
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
            src="/images/industry_coffee_machine.webp"
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
              <h1 className="lato-black text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight tracking-wide-custom">
               Perfekter Kaffee braucht Technik, Qualität – und schnellen Service.
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-6 text-white/95 leading-relaxed tracking-wide-custom">
               Siebträgermaschinen & Kaffeemaschinen für Gastronomie, Hotellerie & ambitionierte Baristi.
              </p>
              <p className="text-base md:text-lg text-white/90 leading-relaxed tracking-wide-custom">
               Wir empfehlen nur Maschinen, die wirklich zu Ihrem Alltag passen.
              </p>
            </div>
          </div>

          {/* Right: Wizard Form */}
          <div className="lg:justify-self-end w-full max-w-lg mb-8 lg:mb-0">
            <HeroKaffeeWizard />
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
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
              Freiburg · Lörrach · Basel
            </p>
          </div>
        </div>
      </section>

      {/* Warum Dietrich Kaffee */}
      <section className="py-16 bg-logo-brown/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="lato-black text-3xl md:text-4xl text-center mb-12 text-logo-brown">
            Warum Dietrich Kaffee?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="lato-bold text-lg mb-3 text-logo-brown">Regionale Expertise</h3>
              <p className="text-logo-brown/70">Persönlicher Service in Freiburg, Lörrach & Basel.</p>
            </div>
            <div className="text-center">
              <h3 className="lato-bold text-lg mb-3 text-logo-brown">Kuratierte Auswahl</h3>
              <p className="text-logo-brown/70">Nur Maschinen, die den Alltag überstehen.</p>
            </div>
            <div className="text-center">
              <h3 className="lato-bold text-lg mb-3 text-logo-brown">Schneller Service</h3>
              <p className="text-logo-brown/70">Wartung & Service meist innerhalb von 24 Stunden, in der Regel innerhalb von 1–3 Tagen vor Ort.</p>
            </div>
            <div className="text-center">
              <h3 className="lato-bold text-lg mb-3 text-logo-brown">Alles aus einer Hand</h3>
              <p className="text-logo-brown/70">Beratung, Installation, Wartung & Ersatzgeräte.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Lokaler Service */}
      <section className="py-16 bg-logo-brown/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="lato-black text-3xl md:text-4xl mb-8 text-logo-brown">
            Lokaler Service macht den Unterschied
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 border border-logo-brown/20">
              <h3 className="lato-bold text-xl mb-4 text-logo-brown">Vor-Ort in 24h</h3>
              <p className="text-logo-brown/70">
                Keine wochenlangen Wartezeiten. Wartung & Service meist innerhalb von 24 Stunden, in der Regel innerhalb von 1–3 Tagen vor Ort.
              </p>
            </div>
            <div className="bg-white p-8 border border-logo-brown/20">
              <h3 className="lato-bold text-xl mb-4 text-logo-brown">Ersatzgerät inklusive</h3>
              <p className="text-logo-brown/70">
                Bei längeren Reparaturen stellen wir Ihnen kostenlos ein Ersatzgerät zur Verfügung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selbst filtern & vergleichen */}
      <section className="py-16 bg-logo-brown/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="lato-black text-3xl md:text-4xl mb-4 text-logo-brown">
              Warum Siebträgermaschinen?
            </h2>
            <p className="text-lg text-logo-brown/70 max-w-3xl mx-auto">
              Entdecken Sie die Kunst des perfekten Espressos – für Profis und Liebhaber.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="lato-bold text-xl mb-6 text-logo-brown">Handwerk trifft Technik</h3>
              <div className="space-y-4 text-logo-brown/80">
                <p>
                  Siebträgermaschinen sind das Herzstück jeder professionellen Kaffeezubereitung. 
                  Sie bieten die volle Kontrolle über jeden Parameter – von der Brühtemperatur bis zum Anpressdruck.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-4 border border-logo-brown/20">
                    <h4 className="lato-bold text-logo-brown mb-2">Einkreiser</h4>
                    <p className="text-sm text-logo-brown/70">Für Einsteiger und kleine Cafés</p>
                  </div>
                  <div className="bg-white p-4 border border-logo-brown/20">
                    <h4 className="lato-bold text-logo-brown mb-2">Dualboiler</h4>
                    <p className="text-sm text-logo-brown/70">Für Profis mit hohem Durchsatz</p>
                  </div>
                  <div className="bg-white p-4 border border-logo-brown/20">
                    <h4 className="lato-bold text-logo-brown mb-2">Halbautomatik</h4>
                    <p className="text-sm text-logo-brown/70">Perfekte Balance aus Kontrolle und Komfort</p>
                  </div>
                  <div className="bg-white p-4 border border-logo-brown/20">
                    <h4 className="lato-bold text-logo-brown mb-2">Vollautomatik</h4>
                    <p className="text-sm text-logo-brown/70">Konstante Qualität auf Knopfdruck</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-video bg-logo-brown/10 relative overflow-hidden rounded-lg">
              <Image
                src="/images/small_espresso_cup.webp"
                alt="Perfekter Espresso"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bestseller Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="lato-black text-3xl md:text-4xl mb-4 text-logo-brown">
              Beliebte Siebträgermaschinen
            </h2>
            <p className="text-lg text-logo-brown/70 max-w-3xl mx-auto">
              Bewährte Modelle für verschiedene Einsatzbereiche.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bestseller 1 - Reneka Family Compact 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-square bg-gradient-to-br from-logo-brown/5 to-logo-brown/10 p-8 flex items-center justify-center">
                <Image
                  src="/images/bestseller/reneka-family-compact-1-black-espresso.webp"
                  alt="Reneka Family Compact 1"
                  width={200}
                  height={200}
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="lato-black text-2xl mb-4 text-logo-brown text-center">
                  Reneka Family Compact 1
                </h3>
                <ul className="space-y-2 text-logo-brown/80 mb-6">
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-2 mt-1">+</span>
                    <span>Professionelle Espresso-Qualität im Mini-Format</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-2 mt-1">+</span>
                    <span>Ideal für kleine Küchen, Büros & kleine Gastro</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-2 mt-1">+</span>
                    <span>Sehr einfache Bedienung</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-2 mt-1">+</span>
                    <span>Ideal für 10–25 Tassen/Tag</span>
                  </li>
                </ul>
                <div className="text-center">
                  <div className="lato-bold text-2xl text-logo-brown mb-4">
                    ab CHF 2'890
                  </div>
                  <button
                    onClick={() => handleMoreInfo('Reneka Family Compact 1')}
                    className="bg-logo-blue text-white px-6 py-3 rounded-lg lato-bold hover:bg-logo-blue/90 transition-colors"
                  >
                    Mehr erfahren
                  </button>
                </div>
              </div>
            </div>

            {/* Bestseller 2 - La Cimbali M200 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-square bg-gradient-to-br from-logo-brown/5 to-logo-brown/10 p-8 flex items-center justify-center">
                <Image
                  src="/images/bestseller/LaCimbali_M200.png"
                  alt="La Cimbali M200"
                  width={200}
                  height={200}
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="lato-black text-2xl mb-4 text-logo-brown text-center">
                  La Cimbali M200
                </h3>
                <ul className="space-y-2 text-logo-brown/80 mb-6">
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-2 mt-1">+</span>
                    <span>Ikonisches Design „Made in Italy"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-2 mt-1">+</span>
                    <span>Multiboiler-Technik für perfekte Temperaturkontrolle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-2 mt-1">+</span>
                    <span>Druckprofil-Steuerung für feinste Espresso-Qualität</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-2 mt-1">+</span>
                    <span>Perfekt für hohes Volumen & beste Crema</span>
                  </li>
                </ul>
                <div className="text-center">
                  <div className="lato-bold text-2xl text-logo-brown mb-4">
                    ab CHF 9'900
                  </div>
                  <button
                    onClick={() => handleMoreInfo('La Cimbali M200')}
                    className="bg-logo-blue text-white px-6 py-3 rounded-lg lato-bold hover:bg-logo-blue/90 transition-colors"
                  >
                    Mehr erfahren
                  </button>
                </div>
              </div>
            </div>

            {/* Bestseller 3 - La Cimbali M40 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-square bg-gradient-to-br from-logo-brown/5 to-logo-brown/10 p-8 flex items-center justify-center">
                <Image
                  src="/images/bestseller/LaCimbali_M40_nobg.png"
                  alt="La Cimbali M40"
                  width={200}
                  height={200}
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="lato-black text-2xl mb-4 text-logo-brown text-center">
                  La Cimbali M40
                </h3>
                <ul className="space-y-2 text-logo-brown/80 mb-6">
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-2 mt-1">+</span>
                    <span>ECO-Smart Thermosystem (bis zu 55% weniger Verbrauch)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-2 mt-1">+</span>
                    <span>Kapazitive High-Tech-Bedienung aus gehärtetem Glas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-2 mt-1">+</span>
                    <span>Cold-Touch Dampflanzen & ergonomische Bedienung</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-2 mt-1">+</span>
                    <span>Extrem wartungsarm (30% weniger Serviceaufwand)</span>
                  </li>
                </ul>
                <div className="text-center">
                  <div className="lato-bold text-2xl text-logo-brown mb-4">
                    Preis auf Anfrage
                  </div>
                  <button
                    onClick={() => handleMoreInfo('La Cimbali M40')}
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
                <p className="text-sm pt-2">Servicegebiet: Freiburg und Umgebung, Lörrach, Baden-Württemberg</p>
              </div>
            </div>

            <div>
              <h3 className="lato-bold text-xl mb-4">Navigation</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/" className="hover:text-white">Startseite</a></li>
                <li><a href="/kaffeemaschinen" className="hover:text-white">Kaffeemaschinen</a></li>
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
        sourceSection="kaffeemaschinen"
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