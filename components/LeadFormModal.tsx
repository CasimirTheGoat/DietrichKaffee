'use client';

import { useState } from 'react';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  model: any;
  sourceSection: string;
}

export default function LeadFormModal({ isOpen, onClose, model, sourceSection }: LeadFormModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name ist erforderlich';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist erforderlich';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ungültige E-Mail-Adresse';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Firma ist erforderlich';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const payload = {
      source_page: sourceSection,
      einsatzort: '',
      personen_oder_mitarbeiter: '',
      tassen_pro_tag: '',
      service_wichtigkeit: '',
      vertragslaufzeit: '',
      wunsch_art: '',
      sortiment: '',
      startzeitpunkt: '',
      name: formData.name,
      firma: formData.company,
      email: formData.email,
      telefon: formData.phone
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

      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'lead_submit',
          source_section: sourceSection === 'kaffeemaschinen' ? 'kaffeemaschinen_modal' : `${sourceSection}_modal`,
          model_sku: model?.sku
        });
      }

      setIsSubmitting(false);
      setSubmitSuccess(true);

      setTimeout(() => {
        window.location.href = '/danke';
      }, 1500);
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      // You might want to show an error message to the user here
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-logo-brown/50 hover:text-logo-brown text-2xl leading-none focus:outline-none focus:ring-2 focus:ring-logo-blue"
          aria-label="Schließen"
        >
          ×
        </button>

        <h3 className="text-2xl font-bold mb-2">Anfrage senden</h3>
        {model && (
          <p className="text-logo-brown/70 mb-6">
            Für: <strong>{model.name}</strong>
          </p>
        )}

        {submitSuccess ? (
          <div className="py-8 text-center">
            <div className="text-green-600 text-5xl mb-4">✓</div>
            <p className="text-xl font-semibold">Vielen Dank!</p>
            <p className="text-coffee-brown/70 mt-2">Wir melden uns in Kürze bei Ihnen.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="lead-name" className="block text-sm font-semibold mb-1">
                Name *
              </label>
              <input
                id="lead-name"
                type="text"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-logo-brown/20 focus:outline-none focus:ring-2 focus:ring-logo-blue"
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-red-600 text-sm mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="lead-email" className="block text-sm font-semibold mb-1">
                E-Mail *
              </label>
              <input
                id="lead-email"
                type="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-logo-brown/20 focus:outline-none focus:ring-2 focus:ring-logo-blue"
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-red-600 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="lead-company" className="block text-sm font-semibold mb-1">
                Firma *
              </label>
              <input
                id="lead-company"
                type="text"
                value={formData.company}
                onChange={e => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 border border-logo-brown/20 focus:outline-none focus:ring-2 focus:ring-logo-blue"
                aria-required="true"
                aria-invalid={!!errors.company}
                aria-describedby={errors.company ? 'company-error' : undefined}
              />
              {errors.company && (
                <p id="company-error" className="text-red-600 text-sm mt-1">
                  {errors.company}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="lead-phone" className="block text-sm font-semibold mb-1">
                Telefon (optional)
              </label>
              <input
                id="lead-phone"
                type="tel"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-logo-brown/20 focus:outline-none focus:ring-2 focus:ring-logo-blue"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-logo-blue text-white px-6 py-4 font-semibold hover:bg-logo-blue/90 transition-colors disabled:bg-logo-brown/30 focus:outline-none focus:ring-2 focus:ring-logo-blue focus:ring-offset-2"
            >
              {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
