'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import LogosRow from '@/components/LogosRow';
import BlogTeaser from '@/components/BlogTeaser';
import BestsellerModal from '@/components/BestsellerModal';
import type { ScoredModel, VollautomatResult, Model } from '@/lib/matching';
import modelsDataJson from '@/data/models.json';

export default function HomePage() {
  const modelsData = modelsDataJson as Model[];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState('');

  const handleMoreInfo = (modelName: string) => {
    setSelectedModel(modelName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-logo-brown">
      <Header />
      <Hero />

      {/* USP Strip */}
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
                Wir nutzen dieselben Hersteller wie die großen Marken – nur ohne Logo-Aufschlag. So sparen viele Betriebe bis zu 30–40 % ihrer bisherigen Kosten.
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
                Als regionaler Anbieter sind wir schnell vor Ort. Ausfallzeiten werden deutlich kürzer – und Ihr Team bleibt arbeitsfähig und zufrieden.
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
                Sie wählen die Vertragslaufzeit mit uns gemeinsam. Faire, flexible Modelle statt starrer Standardverträge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Siebträger Section */}
      <section id="kaffee" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="lato-black text-4xl md:text-5xl mb-4 text-logo-brown tracking-wide-custom">
              Siebträger
            </h2>
            <p className="text-lg md:text-xl text-logo-brown/70 max-w-3xl mx-auto leading-relaxed tracking-wide-custom">
              Perfekter Espresso wie im italienischen Café – für Gastronomie, Hotellerie und anspruchsvolle Kaffeeliebhaber.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="lato-bold text-2xl mb-6 text-logo-brown">Barista-Qualität für Profis</h3>
              <div className="space-y-4 text-logo-brown/80">
                <p>
                  Unsere Siebträgermaschinen bringen italienische Kaffeekultur in Ihr Café, Restaurant oder Hotel. 
                  Von der kompakten Einkreiser-Maschine bis zur leistungsstarken Dualboiler-Lösung.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-3">✓</span>
                    <span>E61-Brühgruppen für konstante Temperatur</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-3">✓</span>
                    <span>Professionelle Dampflanzen für perfekten Milchschaum</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-3">✓</span>
                    <span>Robuste Technik für den Dauereinsatz</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-3">✓</span>
                    <span>Wartung & Service in 24-48h vor Ort</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="aspect-video bg-logo-brown/10 relative overflow-hidden rounded-lg">
              <Image
                src="/images/industry_coffee_machine.webp"
                alt="Siebträgermaschine im Einsatz"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-center">
            <div>
              <h3 className="text-lg font-bold mb-2">Schneller Vor-Ort-Service</h3>
              <p className="text-logo-brown/70">
                Im Störfall sind wir in der Regel innerhalb von 1–3 Tagen bei Ihnen, oft schon innerhalb von 24 Stunden.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Gleiche Profi-Automaten – ohne Markenaufschlag</h3>
              <p className="text-logo-brown/70">
                Wir arbeiten mit denselben Herstellern wie die großen Marken – nur ohne unnötige Logo-Aufpreise.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Bis zu 30–40 % günstiger</h3>
              <p className="text-logo-brown/70">
                Viele Kunden zahlen nach dem Wechsel deutlich weniger als bei klassischen Großanbietern.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Keine starren 5-Jahres-Verträge</h3>
              <p className="text-logo-brown/70">
                Vertragslaufzeiten legen wir gemeinsam fest. Flexible Modelle statt langfristiger Knebelverträge.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-1 gap-8 mt-8 max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="text-lg font-bold mb-2">Alles aus einer Hand</h3>
              <p className="text-logo-brown/70">
                Beratung, Installation, Wartung, Ersatzgeräte & auf Wunsch Kaffee – ein Ansprechpartner für alles.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="/kaffeemaschinen"
              className="inline-block bg-logo-blue text-white px-8 py-4 text-lg lato-bold rounded-lg hover:bg-logo-blue/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue"
            >
              Siebträger entdecken
            </a>
          </div>
        </div>
      </section>

      {/* Vollautomaten Section */}
      <section id="vollautomaten" className="bg-logo-brown/5 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="lato-black text-4xl md:text-5xl mb-4 text-logo-brown tracking-wide-custom">
              Vollautomaten
            </h2>
            <p className="text-lg md:text-xl text-logo-brown/70 max-w-3xl mx-auto leading-relaxed tracking-wide-custom">
              Komfortable Kaffeelösungen für Büros, Betriebe und Institutionen – auf Knopfdruck perfekt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="aspect-video bg-logo-brown/10 relative overflow-hidden rounded-lg">
              <Image
                src="/images/kaffeemaschine-buero.webp"
                alt="Kaffeevollautomat im Büro"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h3 className="lato-bold text-2xl mb-6 text-logo-brown">Rundum-Sorglos für Unternehmen</h3>
              <div className="space-y-4 text-logo-brown/80">
                <p>
                  Vollautomaten von Thermoplan, La Cimbali und anderen Premium-Herstellern. 
                  Perfekt für Büros, Kantinen und überall dort, wo viele Menschen schnell guten Kaffee brauchen.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-3">✓</span>
                    <span>Automatische Milchsysteme für Cappuccino & Latte</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-3">✓</span>
                    <span>Selbstreinigende Systeme für minimalen Aufwand</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-3">✓</span>
                    <span>Flexible Miet- und Leasingmodelle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-3">✓</span>
                    <span>Service-Pakete mit Wartung & Ersatzgeräten</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/vollautomaten"
              className="inline-block bg-logo-blue text-white px-8 py-4 text-lg lato-bold rounded-lg hover:bg-logo-blue/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue"
            >
              Vollautomaten entdecken
            </a>
          </div>
        </div>
      </section>

      {/* Bestseller Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="lato-black text-4xl md:text-5xl font-bold mb-4 text-logo-brown">
              Unsere Bestseller
            </h2>
            <p className="text-lg md:text-xl text-logo-brown/70 max-w-3xl mx-auto leading-relaxed">
              Die beliebtesten Modelle unserer Kunden – bewährt in der Praxis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bestseller 1 - Siebträger */}
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

            {/* Bestseller 2 - Vollautomat */}
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

            {/* Bestseller 3 - Kompakt */}
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
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-16 bg-logo-brown/5">
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

      <section id="blog" className="bg-coffee-brown/5 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            title="Wissen aus der Praxis."
            centered
          />

          <BlogTeaser />
        </div>
      </section>

      {/* Newsletter Section */}
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
              id="newsletter-email-homepage"
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              className="flex-1 px-4 py-3 border border-logo-brown/20 focus:outline-none focus:ring-2 focus:ring-logo-blue"
            />
            <button 
              type="button"
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

      {/* SEO Content Section */}
      <section className="bg-logo-brown/5 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="lato-black text-4xl md:text-5xl mb-4 text-logo-brown">
              Alles über Dietrich Kaffee
            </h2>
            <p className="text-lg text-logo-brown/70 max-w-3xl mx-auto">
              Ihr regionaler Experte für Kaffeemaschinen und Vollautomaten in Baden-Württemberg
            </p>
            <p className="text-lg text-logo-brown/80 max-w-3xl mx-auto mt-4">
              Wir sind die regionale Alternative zu den großen Kaffeefirmen: gleiche Profi-Automaten, oft 30–40 % günstiger, mit ehrlichem Service in 1–3 Tagen.
            </p>
          </div>

          <div className="space-y-6">
            <details open className="bg-white border border-logo-brown/20 overflow-hidden">
              <summary className="lato-bold text-2xl md:text-3xl text-logo-brown cursor-pointer p-8 hover:bg-logo-brown/5 transition-colors text-center">
                Dietrich Kaffee – Kaffeemaschinen & Vollautomaten in Freiburg, Lörrach & Basel
              </summary>
              <div className="p-8 pt-0 text-center">
                <div className="max-w-4xl mx-auto space-y-6 text-logo-brown/80 leading-relaxed">
                  <p className="text-lg">
                    Dietrich Kaffee – Ihr regionaler Experte für erstklassige Kaffeemaschinen und Kaffeevollautomaten in Südbaden & Region Basel (Freiburg · Lörrach · Basel). Ob Café in der Freiburger Altstadt oder modernes Büro in Lörrach: Wir bieten die passende Kaffeelösung für Ihren Bedarf. Starten Sie mit uns in eine neue Welt des Kaffeegenusses!
                  </p>
                  <p>
                    <strong>Kaffeemaschinen kaufen oder mieten</strong> – Entdecken Sie unsere Siebträgermaschinen für Gastronomie, Hotellerie und anspruchsvolle Kaffeeliebhaber.
                  </p>
                  <p>
                    <strong>Kaffeevollautomaten für Ihr Büro/Unternehmen</strong> – Komfortable Rundum-Sorglos-Pakete mit Profi-Vollautomaten für Firmen, Büros und Institutionen.
                  </p>
                </div>
              </div>
            </details>

            <details open className="bg-white border border-logo-brown/20 overflow-hidden">
              <summary className="lato-bold text-2xl md:text-3xl text-logo-brown cursor-pointer p-8 hover:bg-logo-brown/5 transition-colors text-center">
                Warum Dietrich Kaffee?
              </summary>
              <div className="p-8 pt-0 text-center">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 text-logo-brown/80 leading-relaxed">
                  <div className="bg-logo-brown/5 p-6 border border-logo-brown/10">
                    <h4 className="font-bold text-logo-brown mb-3">Schneller lokaler Service</h4>
                    <p>Persönlicher Vor-Ort-Service in Freiburg, Lörrach und der Region – im Störfall sind wir rasch bei Ihnen.</p>
                  </div>
                  <div className="bg-logo-brown/5 p-6 border border-logo-brown/10">
                    <h4 className="font-bold text-logo-brown mb-3">Premium-Marken</h4>
                    <p>Hochwertige Maschinen von La Cimbali, Thermoplan, Reneka u.v.m. garantieren Langlebigkeit und besten Geschmack.</p>
                  </div>
                  <div className="bg-logo-brown/5 p-6 border border-logo-brown/10">
                    <h4 className="font-bold text-logo-brown mb-3">Flexible Finanzierung</h4>
                    <p>Kauf, Leasing oder Mietmodelle – Sie wählen das Modell, das zu Ihrem Budget passt, stets mit transparenter Kostenstruktur.</p>
                  </div>
                  <div className="bg-logo-brown/5 p-6 border border-logo-brown/10">
                    <h4 className="font-bold text-logo-brown mb-3">Alles aus einer Hand</h4>
                    <p>Beratung, Installation, Wartung und bei Bedarf Lieferung von Zubehör und Kaffeebohnen. Ein Ansprechpartner für Ihr komplettes Kaffee-Konzept.</p>
                  </div>
                  <div className="bg-logo-brown/5 p-6 border border-logo-brown/10 md:col-span-2">
                    <h4 className="font-bold text-logo-brown mb-3">Individuelle Lösungen</h4>
                    <p>Jede Branche hat eigene Anforderungen. Wir hören zu und empfehlen Ihnen maßgeschneiderte Kaffeesysteme, die Ihre Gäste und Mitarbeiter begeistern.</p>
                  </div>
                </div>
              </div>
            </details>

            <details className="bg-white border border-logo-brown/20 overflow-hidden">
              <summary className="lato-bold text-2xl md:text-3xl text-logo-brown cursor-pointer p-8 hover:bg-logo-brown/5 transition-colors text-center">
                Siebträgermaschinen für Profis
              </summary>
              <div className="p-8 pt-0 text-center">
                <div className="max-w-4xl mx-auto text-logo-brown/80 leading-relaxed">
                  <p className="text-lg">
                    Genießen Sie Barista-Qualität wie im italienischen Café. Unsere Siebträgermaschinen richten sich an Gastronomie und ambitionierte Kaffeegenießer. Von der kleinen Bistro-Maschine bis zur leistungsstarken Dualboiler-Espressomaschine – wir haben das passende Modell. Steigern Sie die Zufriedenheit Ihrer Gäste durch handwerklich perfekten Espresso und cremigen Cappuccino.
                  </p>
                </div>
              </div>
            </details>

            <details className="bg-white border border-logo-brown/20 overflow-hidden">
              <summary className="lato-bold text-2xl md:text-3xl text-logo-brown cursor-pointer p-8 hover:bg-logo-brown/5 transition-colors text-center">
                Kaffeevollautomaten & Vending für Unternehmen
              </summary>
              <div className="p-8 pt-0 text-center">
                <div className="max-w-4xl mx-auto space-y-6 text-logo-brown/80 leading-relaxed">
                  <p className="text-lg">
                    Für Büros, Betriebe und öffentliche Bereiche bieten wir Kaffeevollautomaten mit Rundum-Service. Auf Knopfdruck genießen Ihre Mitarbeiter oder Kunden vielfältige Kaffeespezialitäten – ohne Aufwand. Vom kompakten Büroautomaten bis zum großen Vending-Automaten für Kantinen: Qualität und Zuverlässigkeit stehen an erster Stelle.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-logo-brown/5 p-6 border border-logo-brown/10">
                      <h4 className="font-bold text-logo-brown mb-3">Büro Kaffeevollautomaten</h4>
                      <p>Kompakte, leise und leistungsfähige Automaten für Mitarbeiterküchen und Aufenthaltsräume.</p>
                    </div>
                    <div className="bg-logo-brown/5 p-6 border border-logo-brown/10">
                      <h4 className="font-bold text-logo-brown mb-3">Vending-Automaten</h4>
                      <p>Robuste Standgeräte für hochfrequentierte Bereiche wie Kantinen und Eingangsbereiche.</p>
                    </div>
                  </div>
                </div>
              </div>
            </details>

            <details className="bg-white border border-logo-brown/20 overflow-hidden">
              <summary className="lato-bold text-2xl md:text-3xl text-logo-brown cursor-pointer p-8 hover:bg-logo-brown/5 transition-colors text-center">
                Ihr regionaler Kaffeepartner
              </summary>
              <div className="p-8 pt-0 text-center">
                <div className="max-w-4xl mx-auto text-logo-brown/80 leading-relaxed">
                  <p className="text-lg">
                    Wir sind in Südbaden verwurzelt und stolz darauf, Unternehmen und Gastrobetriebe in Südbaden & Region Basel (Freiburg · Lörrach · Basel) zu betreuen. Kurze Wege bedeuten schnellen Service: Ausfallzeiten werden minimiert, und Sie haben immer einen Ansprechpartner in Ihrer Nähe. Dietrich Kaffee steht für regionale Verbundenheit und persönlichen Kontakt – wir kennen unsere Kunden beim Namen.
                  </p>
                </div>
              </div>
            </details>

            <details className="bg-white border border-logo-brown/20 overflow-hidden">
              <summary className="lato-bold text-2xl md:text-3xl text-logo-brown cursor-pointer p-8 hover:bg-logo-brown/5 transition-colors text-center">
                Unsere Partner
              </summary>
              <div className="p-8 pt-0 text-center">
                <div className="max-w-4xl mx-auto text-logo-brown/80 leading-relaxed">
                  <p className="text-lg mb-8">
                    Gemeinsam mit unseren renommierten Partnern sorgen wir für höchste Qualität in der Tasse und am Gerät. Zu unseren Partnern zählen unter anderem:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-logo-brown/5 p-6 border border-logo-brown/10">
                      <h4 className="font-bold text-logo-brown mb-2">La Cimbali</h4>
                      <p>Italienische Espresso-Tradition seit 1912</p>
                    </div>
                    <div className="bg-logo-brown/5 p-6 border border-logo-brown/10">
                      <h4 className="font-bold text-logo-brown mb-2">Thermoplan</h4>
                      <p>Schweizer High-Tech-Kaffeevollautomaten (u.a. bekannt durch Starbucks)</p>
                    </div>
                    <div className="bg-logo-brown/5 p-6 border border-logo-brown/10">
                      <h4 className="font-bold text-logo-brown mb-2">Reneka</h4>
                      <p>Handgefertigte Siebträgermaschinen aus Frankreich</p>
                    </div>
                    <div className="bg-logo-brown/5 p-6 border border-logo-brown/10">
                      <h4 className="font-bold text-logo-brown mb-2">Brita</h4>
                      <p>Professionelle Wasserfiltersysteme für besten Geschmack und Geräteschutz</p>
                    </div>
                  </div>
                </div>
              </div>
            </details>

            <details className="bg-white border border-logo-brown/20 overflow-hidden">
              <summary className="lato-bold text-2xl md:text-3xl text-logo-brown cursor-pointer p-8 hover:bg-logo-brown/5 transition-colors text-center">
                Service & Wartung
              </summary>
              <div className="p-8 pt-0 text-center">
                <div className="max-w-4xl mx-auto text-logo-brown/80 leading-relaxed">
                  <p className="text-lg mb-8">
                    Eine Kaffeemaschine ist nur so gut wie ihr Service. Darum bieten wir für alle unsere Geräte einen umfassenden Service- & Wartungsdienst.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-logo-brown/5 p-6 border border-logo-brown/10">
                      <h4 className="font-bold text-logo-brown mb-2">Regelmäßige Wartung</h4>
                      <p>Festgelegte Intervalle, frühzeitiger Austausch von Verschleißteilen</p>
                    </div>
                    <div className="bg-logo-brown/5 p-6 border border-logo-brown/10">
                      <h4 className="font-bold text-logo-brown mb-2">Schnelle Reaktionszeit</h4>
                      <p>In der Region Freiburg/Lörrach oft innerhalb 24 Stunden vor Ort</p>
                    </div>
                    <div className="bg-logo-brown/5 p-6 border border-logo-brown/10">
                      <h4 className="font-bold text-logo-brown mb-2">Ersatzgeräte-Service</h4>
                      <p>Ersatzgerät bei längeren Reparaturen verfügbar</p>
                    </div>
                    <div className="bg-logo-brown/5 p-6 border border-logo-brown/10">
                      <h4 className="font-bold text-logo-brown mb-2">Transparente Kosten</h4>
                      <p>Alle Wartungsleistungen klar in Serviceverträgen definiert</p>
                    </div>
                  </div>
                </div>
              </div>
            </details>

            <details className="bg-white border border-logo-brown/20 overflow-hidden">
              <summary className="lato-bold text-2xl md:text-3xl text-logo-brown cursor-pointer p-8 hover:bg-logo-brown/5 transition-colors text-center">
                Kontakt
              </summary>
              <div className="p-8 pt-0 text-center">
                <div className="max-w-4xl mx-auto text-logo-brown/80 leading-relaxed">
                  <p className="text-lg mb-8">
                    Sie möchten mehr erfahren oder ein individuelles Angebot einholen? Kontaktieren Sie uns – wir beraten Sie gerne persönlich.
                  </p>
                  <div className="bg-logo-brown/5 p-8 border border-logo-brown/10 inline-block">
                    <p className="font-bold text-logo-brown text-xl mb-4">Mirko Dietrich</p>
                    <p className="text-lg mb-2">
                      Telefon: <a href="tel:+4915206386702" className="text-logo-blue hover:underline font-semibold">+49 1520 638 67 02</a>
                    </p>
                    <p className="text-sm text-logo-brown/60 mt-4">
                      Servicegebiet: Freiburg und Umgebung, Lörrach, Baden-Württemberg
                    </p>
                  </div>
                  <p className="mt-8">
                    Wir melden uns innerhalb eines Werktages bei Ihnen zurück. Gerne vereinbaren wir auch einen Vor-Ort-Termin, um Ihre Anforderungen direkt bei Ihnen in Freiburg, Lörrach oder der Region kennenzulernen.
                  </p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      <footer className="bg-anthracite text-white py-16">
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
              <h3 className="text-xl font-bold mb-4">Kontakt</h3>
              <div className="space-y-2 text-gray-300">
                <p className="font-semibold text-white">Mirko Dietrich</p>
                <p>Telefon: <a href="tel:+4915206386702" className="hover:text-white">+49 1520 638 67 02</a></p>
                <p>E-Mail: <a href="mailto:vertrieb@dietrichkaffee.de" className="hover:text-white">vertrieb@dietrichkaffee.de</a></p>
                <p className="text-sm pt-2">Servicegebiet: Freiburg und Umgebung, Lörrach, Baden-Württemberg</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Navigation</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/kaffeemaschinen" className="hover:text-white">Siebträger</a></li>
                <li><a href="#vollautomaten" className="hover:text-white">Vollautomaten</a></li>
                <li><a href="#blog" className="hover:text-white">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Partner</h3>
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

      <BestsellerModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedModel('');
        }}
        modelName={selectedModel}
      />
    </div>
  );
}