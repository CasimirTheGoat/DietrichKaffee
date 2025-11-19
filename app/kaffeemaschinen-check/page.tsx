'use client';

import { useState } from 'react';
import Image from 'next/image';

interface FormData {
  geraeteart: string;
  mitarbeiter: string;
  service: string;
  vertrag: string;
  sortiment: string;
  timing: string;
  name: string;
  email: string;
  telefon: string;
  firma: string;
  einsatzort: string;
  personen_oder_mitarbeiter: string;
  tassen_pro_tag: string;
  service_wichtigkeit: string;
  vertragslaufzeit: string;
  wunsch_art: string;
  startzeitpunkt: string;
}

const INITIAL_DATA: FormData = {
  geraeteart: '',
  mitarbeiter: '',
  service: '',
  vertrag: '',
  sortiment: '',
  timing: '',
  name: '',
  email: '',
  telefon: '',
  firma: '',
  einsatzort: '',
  personen_oder_mitarbeiter: '',
  tassen_pro_tag: '',
  service_wichtigkeit: '',
  vertragslaufzeit: '',
  wunsch_art: '',
  startzeitpunkt: ''
};

const GERAETEART_OPTIONS = [
  { value: 'tischgeraet', label: 'Tischgerät' },
  { value: 'standgeraet', label: 'Standgerät' },
  { value: 'unsicher', label: 'Noch nicht sicher' }
];

const MITARBEITER_OPTIONS = [
  { value: '1-10', label: '1–10' },
  { value: '11-25', label: '11–25' },
  { value: '26-60', label: '26–60' },
  { value: '60+', label: '60+' }
];

const SERVICE_OPTIONS = [
  { value: '1-3-tage', label: '1–3 Tage (bevorzugt)' },
  { value: 'woche', label: 'innerhalb einer Woche' },
  { value: 'egal', label: 'spielt keine große Rolle' }
];

const VERTRAG_OPTIONS = [
  { value: 'monatlich', label: 'monatlich flexibel' },
  { value: '6-12-monate', label: '6–12 Monate' },
  { value: '1-3-jahre', label: '1–3 Jahre' },
  { value: 'unsicher', label: 'noch nicht sicher' }
];

const SORTIMENT_OPTIONS = [
  { value: 'basis', label: 'Basis (Kaffee, Espresso)' },
  { value: 'standard', label: 'Standard (Cappuccino, Latte)' },
  { value: 'umfangreich', label: 'Umfangreich (Milchgetränke + Kakao)' },
  { value: 'unsicher', label: 'noch nicht sicher' }
];

const TIMING_OPTIONS = [
  { value: 'sofort', label: 'so schnell wie möglich' },
  { value: '4-wochen', label: 'innerhalb von 4 Wochen' },
  { value: 'spaeter', label: 'später' }
];

export default function KaffemaschinenCheckPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const totalSteps = 6;

  const updateData = (field: keyof FormData, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }

    // Auto-advance for multiple choice steps
    if (field !== 'name' && field !== 'email' && field !== 'telefon') {
      setTimeout(() => {
        if (currentStep === 5) {
          // After step 5, show loading
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
            setShowModal(true);
          }, 2000);
        } else if (currentStep < 5) {
          setCurrentStep(prev => prev + 1);
        }
      }, 300);
    }
  };

  const validateModal = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!data.name.trim()) newErrors.name = 'Name ist erforderlich';
    if (!data.email.trim()) {
      newErrors.email = 'E-Mail ist erforderlich';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Ungültige E-Mail-Adresse';
    }
    if (!data.telefon.trim()) newErrors.telefon = 'Telefonnummer ist erforderlich';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateModal()) return;

    setIsSubmitting(true);

    // Prepare standardized payload for webhook
    const payload = {
      source_page: 'kaffeemaschinen-check',
      einsatzort: data.einsatzort || data.geraeteart,
      personen_oder_mitarbeiter: data.personen_oder_mitarbeiter || data.mitarbeiter,
      tassen_pro_tag: '',
      service_wichtigkeit: data.service_wichtigkeit || data.service,
      vertragslaufzeit: data.vertragslaufzeit || data.vertrag,
      wunsch_art: '',
      sortiment: data.sortiment,
      startzeitpunkt: data.startzeitpunkt || data.timing,
      name: data.name,
      firma: data.firma,
      email: data.email,
      telefon: data.telefon
    };

    try {
      const response = await fetch('https://hook.eu2.make.com/6xuikq4aspdnburhd6s0sh4i9bo4hogc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Track analytics
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'lead_submit',
          source_section: 'kaffeemaschinen_check',
          geraeteart: data.geraeteart,
          mitarbeiter: data.mitarbeiter
        });
      }

      setIsSubmitting(false);
      setShowModal(false);
      window.location.href = '/danke';
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      // You might want to show an error message to the user here
    }
  };

  return (
    <div className="min-h-screen bg-white text-logo-brown">
      {/* Header */}
      <header className="py-4">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Image
            src="/images/logo/logo.png"
            alt="Dietrich Kaffee Logo"
            width={180}
            height={60}
            priority
            className="mx-auto"
          />
        </div>
      </header>

      {/* Hero Section with Form */}
      <section className="relative py-8 bg-logo-brown/5 min-h-[calc(100vh-200px)] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/industry_coffee_machine.webp"
            alt=""
            fill
            className="object-cover opacity-5"
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
          {/* Headlines */}
          <div className="text-center mb-8">
            <h1 className="lato-black text-3xl md:text-4xl lg:text-5xl mb-4 text-logo-brown leading-tight">
              Prüfen Sie in 2 Minuten, ob Sie bis zu 40% bei Ihrer Kaffeelösung sparen können.
            </h1>
          </div>

          {/* Multi-Step Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              {/* Step 1: Geräteart */}
              {currentStep === 1 && (
                <div>
                  <h2 className="lato-bold text-xl md:text-2xl text-logo-brown mb-6">
                    Welche Art von Gerät suchen Sie?
                  </h2>
                  <div className="space-y-3">
                    {GERAETEART_OPTIONS.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => updateData('geraeteart', option.value)}
                        className={`w-full p-4 rounded-lg border-2 text-left lato-bold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue ${
                          data.geraeteart === option.value
                            ? 'border-logo-blue bg-logo-blue/5 text-logo-blue'
                            : 'border-gray-200 text-logo-brown hover:border-logo-blue/50'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Mitarbeiter */}
              {currentStep === 2 && (
                <div>
                  <h2 className="lato-bold text-xl md:text-2xl text-logo-brown mb-6">
                    Wie viele Mitarbeiter trinken regelmäßig Kaffee?
                  </h2>
                  <div className="grid grid-cols-2 gap-3">
                    {MITARBEITER_OPTIONS.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => updateData('mitarbeiter', option.value)}
                        className={`p-4 rounded-lg border-2 lato-bold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue ${
                          data.mitarbeiter === option.value
                            ? 'border-logo-blue bg-logo-blue/5 text-logo-blue'
                            : 'border-gray-200 text-logo-brown hover:border-logo-blue/50'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Service */}
              {currentStep === 3 && (
                <div>
                  <h2 className="lato-bold text-xl md:text-2xl text-logo-brown mb-6">
                    Wie wichtig ist Ihnen schneller Service im Störungsfall?
                  </h2>
                  <div className="space-y-3">
                    {SERVICE_OPTIONS.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => updateData('service', option.value)}
                        className={`w-full p-4 rounded-lg border-2 text-left lato-bold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue ${
                          data.service === option.value
                            ? 'border-logo-blue bg-logo-blue/5 text-logo-blue'
                            : 'border-gray-200 text-logo-brown hover:border-logo-blue/50'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Vertrag */}
              {currentStep === 4 && (
                <div>
                  <h2 className="lato-bold text-xl md:text-2xl text-logo-brown mb-6">
                    Welche Vertragslaufzeit bevorzugen Sie?
                  </h2>
                  <div className="space-y-3">
                    {VERTRAG_OPTIONS.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => updateData('vertrag', option.value)}
                        className={`w-full p-4 rounded-lg border-2 text-left lato-bold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue ${
                          data.vertrag === option.value
                            ? 'border-logo-blue bg-logo-blue/5 text-logo-blue'
                            : 'border-gray-200 text-logo-brown hover:border-logo-blue/50'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 5: Sortiment */}
              {currentStep === 5 && (
                <div>
                  <h2 className="lato-bold text-xl md:text-2xl text-logo-brown mb-6">
                    Welches Getränkesortiment wünschen Sie?
                  </h2>
                  <div className="space-y-3">
                    {SORTIMENT_OPTIONS.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => updateData('sortiment', option.value)}
                        className={`w-full p-4 rounded-lg border-2 text-left lato-bold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue ${
                          data.sortiment === option.value
                            ? 'border-logo-blue bg-logo-blue/5 text-logo-blue'
                            : 'border-gray-200 text-logo-brown hover:border-logo-blue/50'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Loading Screen */}
              {isLoading && (
                <div className="text-center py-8">
                  <div className="mb-6">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-logo-blue"></div>
                  </div>
                  <h2 className="lato-bold text-xl md:text-2xl text-logo-brown mb-4">
                    Verfügbarkeit wird geprüft …
                  </h2>
                  <p className="text-logo-brown/70">
                    Servicegeschwindigkeit, Geräteeignung und Kapazität werden ermittelt …
                  </p>
                </div>
              )}

              {/* Progress Indicator - moved below form content */}
              {!isLoading && (
                <div className="mt-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-logo-brown/60">
                      Schritt {currentStep} von {totalSteps}
                    </span>
                    <span className="text-sm text-logo-brown/60">
                      {Math.round((currentStep / totalSteps) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-logo-blue h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Step 6: Result & Contact */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white max-w-2xl w-full p-8 rounded-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-logo-brown/50 hover:text-logo-brown text-2xl leading-none focus:outline-none focus:ring-2 focus:ring-logo-blue"
              aria-label="Schließen"
            >
              ×
            </button>

            <div className="text-center mb-8">
              <h2 className="lato-bold text-xl md:text-2xl text-logo-brown mb-4">
                Gute Nachrichten! Ihr Betrieb passt grundsätzlich zu den verfügbaren Kapazitäten.
              </h2>
            </div>

            <div className="space-y-6">
              <h3 className="lato-bold text-lg text-logo-brown">
                Wohin dürfen wir Ihre Einschätzung und Ihr unverbindliches Angebot schicken?
              </h3>

              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    value={data.name}
                    onChange={(e) => updateData('name', e.target.value)}
                    placeholder="Name *"
                    className="w-full px-4 py-3 border border-logo-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-logo-blue"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    value={data.email}
                    onChange={(e) => updateData('email', e.target.value)}
                    placeholder="E-Mail *"
                    className="w-full px-4 py-3 border border-logo-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-logo-blue"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    value={data.telefon}
                    onChange={(e) => updateData('telefon', e.target.value)}
                    placeholder="Telefonnummer *"
                    className="w-full px-4 py-3 border border-logo-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-logo-blue"
                  />
                  {errors.telefon && (
                    <p className="text-red-600 text-sm mt-1">{errors.telefon}</p>
                  )}
                </div>
              </div>

              <div>
                <h4 className="lato-bold text-sm text-logo-brown mb-3">
                  Wann möchten Sie Ihre neue Lösung frühestens einsetzen?
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {TIMING_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => updateData('timing', option.value)}
                      className={`p-3 rounded-lg border-2 text-sm lato-bold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue ${
                        data.timing === option.value
                          ? 'border-logo-blue bg-logo-blue/5 text-logo-blue'
                          : 'border-gray-200 text-logo-brown hover:border-logo-blue/50'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-logo-blue text-white px-8 py-4 text-lg lato-bold rounded-lg hover:bg-logo-blue/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue"
              >
                {isSubmitting ? 'Wird gesendet...' : 'Jetzt unverbindliche Einschätzung anfordern'}
              </button>

              <div className="bg-logo-blue/5 p-6 rounded-lg">
                <ul className="space-y-2 text-left">
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-3">✓</span>
                    <span>Bis zu 30–40 % Ersparnis möglich*</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-3">✓</span>
                    <span>Service voraussichtlich in 1–3 Tagen machbar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-logo-blue mr-3">✓</span>
                    <span>Flexible Vertragsmodelle verfügbar</span>
                  </li>
                </ul>
              </div>

              <p className="text-xs text-logo-brown/60 text-center">
                Kostenlos & unverbindlich. Keine Weitergabe Ihrer Daten an Dritte. *Ersparnis abhängig von aktueller Lösung und Verbrauch.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Social Proof Section */}
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
                Sie wählen die Vertragslaufzeit mit uns gemeinsam. Faire, flexible Modelle statt starrer 5-Jahres-Verträge.
              </p>
            </div>
          </div>

          <div className="w-full text-center mb-8">
            <h3 className="lato-bold text-xl mb-8 text-logo-brown">
              Unsere Ausgewählten Partner & Hersteller
            </h3>
          </div>

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
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
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
    </div>
  );
}