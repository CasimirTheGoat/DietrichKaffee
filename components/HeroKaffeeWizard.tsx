'use client';

import { useState } from 'react';

interface WizardData {
  einsatzort: string;
  tassen: string;
  wunsch: string;
  name: string;
  firma: string;
  email: string;
  telefon: string;
  mitarbeiter: string;
}

const INITIAL_DATA: WizardData = {
  einsatzort: '',
  tassen: '',
  wunsch: '',
  name: '',
  firma: '',
  email: '',
  telefon: '',
  mitarbeiter: ''
};

const EINSATZORT_OPTIONS = [
  { value: 'cafe-gastronomie', label: 'Café/Gastronomie' },
  { value: 'hotel', label: 'Hotel' },
  { value: 'buero', label: 'Büro' },
  { value: 'zuhause-barista', label: 'Zuhause/Barista' },
  { value: 'sonstiges', label: 'Sonstiges' }
];

const TASSEN_OPTIONS = [
  { value: 'weniger-40', label: '< 40' },
  { value: '40-120', label: '40–120' },
  { value: 'mehr-120', label: '> 120' }
];

const WUNSCH_OPTIONS = [
  { value: 'manuell', label: 'Manuell' },
  { value: 'halbautomatik', label: 'Halbautomatik' },
  { value: 'unsicher', label: 'Unsicher' }
];

export default function HeroKaffeeWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<WizardData>(INITIAL_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateData = (field: keyof WizardData, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }

    // Auto-progress to next step when selecting options
    if (field === 'einsatzort' && currentStep === 1) {
      setTimeout(() => setCurrentStep(2), 300);
    } else if ((field === 'tassen' || field === 'wunsch') && currentStep === 2) {
      // Only advance if both fields are filled
      const updatedData = { ...data, [field]: value };
      if (updatedData.tassen && updatedData.wunsch) {
        setTimeout(() => setCurrentStep(3), 300);
      }
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!data.einsatzort) newErrors.einsatzort = 'Bitte wählen Sie eine Option';
    } else if (step === 2) {
      if (!data.tassen) newErrors.tassen = 'Bitte wählen Sie eine Option';
      if (!data.wunsch) newErrors.wunsch = 'Bitte wählen Sie eine Option';
    } else if (step === 3) {
      if (!data.name.trim()) newErrors.name = 'Name ist erforderlich';
      if (!data.email.trim()) {
        newErrors.email = 'E-Mail ist erforderlich';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        newErrors.email = 'Ungültige E-Mail-Adresse';
      }
      if (!data.telefon.trim()) newErrors.telefon = 'Telefonnummer ist erforderlich';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    if (!validateStep(3)) return;

    setIsSubmitting(true);

    const payload = {
      source_page: 'kaffeemaschinen',
      einsatzort: data.einsatzort,
      personen_oder_mitarbeiter: data.mitarbeiter || '',
      tassen_pro_tag: data.tassen,
      service_wichtigkeit: '',
      vertragslaufzeit: '',
      wunsch_art: data.wunsch,
      sortiment: '',
      startzeitpunkt: '',
      name: data.name,
      firma: data.firma,
      email: data.email,
      telefon: data.telefon
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

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Track analytics
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'lead_submit',
          source_section: 'siebtraeger_hero_wizard',
          einsatzort: data.einsatzort,
          tassen: data.tassen,
          wunsch: data.wunsch
        });
      }

      setIsSubmitting(false);
      setIsSuccess(true);

      // Redirect to thank you page after a short delay
      setTimeout(() => {
        window.location.href = '/danke';
      }, 1500);
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      // You might want to show an error message to the user here
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md mx-auto">
        <div className="text-green-600 text-5xl mb-4">✓</div>
        <h3 className="lato-bold text-2xl text-logo-brown mb-2">Vielen Dank!</h3>
        <p className="text-logo-brown/70">
          Wir melden uns mit passenden Modellen und Angeboten.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-lg mx-auto">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm lato-bold ${
                  step <= currentStep
                    ? 'bg-logo-blue text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
                aria-current={step === currentStep ? 'step' : undefined}
              >
                {step}
              </div>
              {step < 3 && (
                <div
                  className={`h-1 w-16 md:w-24 mx-2 ${
                    step < currentStep ? 'bg-logo-blue' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm text-logo-brown/70">
          <span className={currentStep === 1 ? 'lato-bold text-logo-brown' : ''}>
            Einsatzort
          </span>
          <span className={currentStep === 2 ? 'lato-bold text-logo-brown' : ''}>
            Bedarf
          </span>
          <span className={currentStep === 3 ? 'lato-bold text-logo-brown' : ''}>
            Kontakt
          </span>
        </div>
      </div>

      {/* Step 1: Einsatzort */}
      {currentStep === 1 && (
        <fieldset role="group">
          <legend className="lato-bold text-xl text-logo-brown mb-6">
            Wo soll die Maschine eingesetzt werden?
          </legend>
          <div className="space-y-3">
            {EINSATZORT_OPTIONS.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => updateData('einsatzort', option.value)}
                className={`w-full p-4 rounded-lg border-2 text-left lato-bold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue ${
                  data.einsatzort === option.value
                    ? 'border-logo-blue bg-logo-blue/5 text-logo-blue'
                    : 'border-gray-200 text-logo-brown hover:border-logo-blue/50'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
          {errors.einsatzort && (
            <p className="text-red-600 text-sm mt-2">{errors.einsatzort}</p>
          )}
        </fieldset>
      )}

      {/* Step 2: Bedarf */}
      {currentStep === 2 && (
        <fieldset role="group">
          <legend className="lato-bold text-xl text-logo-brown mb-6">
            Ihr Bedarf
          </legend>
          
          <div className="mb-6">
            <h4 className="lato-bold text-sm text-logo-brown mb-3">Tassen pro Tag?</h4>
            <div className="grid grid-cols-3 gap-3">
              {TASSEN_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => updateData('tassen', option.value)}
                  className={`p-3 rounded-lg border-2 text-sm lato-bold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue ${
                    data.tassen === option.value
                      ? 'border-logo-blue bg-logo-blue/5 text-logo-blue'
                      : 'border-gray-200 text-logo-brown hover:border-logo-blue/50'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            {errors.tassen && (
              <p className="text-red-600 text-sm mt-2">{errors.tassen}</p>
            )}
          </div>

          <div>
            <h4 className="lato-bold text-sm text-logo-brown mb-3">Wunsch</h4>
            <div className="grid grid-cols-3 gap-3">
              {WUNSCH_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => updateData('wunsch', option.value)}
                  className={`p-3 rounded-lg border-2 text-sm lato-bold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue ${
                    data.wunsch === option.value
                      ? 'border-logo-blue bg-logo-blue/5 text-logo-blue'
                      : 'border-gray-200 text-logo-brown hover:border-logo-blue/50'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            {errors.wunsch && (
              <p className="text-red-600 text-sm mt-2">{errors.wunsch}</p>
            )}
          </div>
        </fieldset>
      )}

      {/* Step 3: Kontakt */}
      {currentStep === 3 && (
        <fieldset role="group">
          <legend className="lato-bold text-xl text-logo-brown mb-6">
            Ihre Kontaktdaten
          </legend>
          <div className="space-y-4">
            <div>
              <label htmlFor="kaffee-wizard-name" className="block text-sm lato-bold mb-1 text-logo-brown">
                Name *
              </label>
              <input
                id="kaffee-wizard-name"
                type="text"
                value={data.name}
                onChange={(e) => updateData('name', e.target.value)}
                className="w-full px-4 py-3 border border-logo-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-logo-blue"
                aria-required="true"
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="kaffee-wizard-email" className="block text-sm lato-bold mb-1 text-logo-brown">
                E-Mail *
              </label>
              <input
                id="kaffee-wizard-email"
                type="email"
                value={data.email}
                onChange={(e) => updateData('email', e.target.value)}
                className="w-full px-4 py-3 border border-logo-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-logo-blue"
                aria-required="true"
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="kaffee-wizard-telefon" className="block text-sm lato-bold mb-1 text-logo-brown">
                Telefonnummer *
              </label>
              <input
                id="kaffee-wizard-telefon"
                type="tel"
                value={data.telefon}
                onChange={(e) => updateData('telefon', e.target.value)}
                className="w-full px-4 py-3 border border-logo-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-logo-blue"
                aria-required="true"
                aria-invalid={!!errors.telefon}
              />
              {errors.telefon && (
                <p className="text-red-600 text-sm mt-1">{errors.telefon}</p>
              )}
            </div>

            <div>
              <label htmlFor="kaffee-wizard-firma" className="block text-sm lato-bold mb-1 text-logo-brown">
                Firma (optional)
              </label>
              <input
                id="kaffee-wizard-firma"
                type="text"
                value={data.firma}
                onChange={(e) => updateData('firma', e.target.value)}
                className="w-full px-4 py-3 border border-logo-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-logo-blue"
              />
            </div>
          </div>
        </fieldset>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-8">
        {currentStep > 1 ? (
          <button
            type="button"
            onClick={handleBack}
            className="px-6 py-3 border border-logo-brown/20 text-logo-brown rounded-lg hover:bg-logo-brown/5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue lato-bold"
          >
            Zurück
          </button>
        ) : (
          <div />
        )}

        {currentStep === 3 && (
          <div className="text-right">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="px-8 py-3 bg-logo-blue text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue lato-bold"
            >
              {isSubmitting ? 'Wird gesendet...' : 'Jetzt passende Modelle erhalten'}
            </button>
            <p className="text-xs text-logo-brown/60 mt-2">
              Mit dem Absenden stimmen Sie unserer{' '}
              <a
                href="/legal#datenschutz"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                Datenschutzerklärung
              </a>{' '}
              zu.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}