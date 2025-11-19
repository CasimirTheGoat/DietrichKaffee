'use client';

import { useState } from 'react';
import type { ScoredModel, VollautomatResult } from '@/lib/matching';
import LeadFormModal from './LeadFormModal';

interface ModelsGridProps {
  results: (ScoredModel | VollautomatResult)[];
  type: 'kaffeemaschine' | 'vollautomat';
  emptyMessage?: string;
  emptyLink?: { text: string; href: string };
}

export default function ModelsGrid({ results, type, emptyMessage, emptyLink }: ModelsGridProps) {
  const [selectedModel, setSelectedModel] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (results.length === 0) {
    return (
      <div className="text-center py-12 bg-logo-brown/5 border border-logo-brown/20">
        <p className="text-xl text-logo-brown/70 mb-4">
          {emptyMessage || 'Keine passenden Modelle gefunden.'}
        </p>
        {emptyLink && (
          <a
            href={emptyLink.href}
            className="inline-block bg-logo-blue text-white px-6 py-3 rounded-md hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue tracking-wide-custom font-semibold"
          >
            {emptyLink.text}
          </a>
        )}
      </div>
    );
  }

  const handleInquiry = (model: any) => {
    setSelectedModel(model);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {results.map((result, index) => {
          const model = result.model;
          const isVollautomat = 'monthlyCost' in result;

          return (
            <div
              key={model.sku}
              className="bg-white border-2 border-logo-brown/20 p-6 hover:border-logo-blue transition-all"
            >
              <div className="mb-4">
                <div className="aspect-video bg-logo-brown/10 mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-logo-brown/40 text-sm">
                    Produktbild
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                <div className="text-sm text-logo-brown/70 mb-3">{model.best_for}</div>

                {type === 'kaffeemaschine' && 'boiler' in model && (
                  <div className="space-y-1 text-sm mb-4">
                    <div><strong>Boiler:</strong> {model.boiler}</div>
                    <div><strong>Brühgruppe:</strong> {model.brewer}</div>
                    {model.milk_system && <div><strong>Milch:</strong> {model.milk_system}</div>}
                    <div><strong>Wartung:</strong> alle {model.service_interval_months} Mon.</div>
                  </div>
                )}

                {type === 'vollautomat' && 'throughput_per_hour' in model && (
                  <div className="space-y-1 text-sm mb-4">
                    <div><strong>Kapazität:</strong> {model.throughput_per_hour} Tassen/h</div>
                    <div><strong>Max/Tag:</strong> {model.recommended_daily_max} Tassen</div>
                    <div><strong>Milchsystem:</strong> {model.milk_system}</div>
                    <div><strong>Reinigung:</strong> {model.cleaning}</div>
                  </div>
                )}

                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-2 py-1 bg-coffee-brown/10 text-xs font-medium">
                  </span>
                  <span className="px-2 py-1 bg-logo-brown/10 text-xs font-medium">
                    {model.water}
                  </span>
                  <span className="px-2 py-1 bg-logo-brown/10 text-xs font-medium">
                    {model.power}
                  </span>
                </div>
              </div>

              <div className="border-t border-logo-brown/20 pt-4 mb-4">
                <div className="text-2xl font-bold mb-2">
                  {isVollautomat && 'monthlyCost' in result ? (
                    <>CHF {result.monthlyCost.total}/Mon.</>
                  ) : (
                    <>ab CHF {model.price_chf.toLocaleString('de-CH')}</>
                  )}
                </div>
                {isVollautomat && 'monthlyCost' in result && (
                  <div className="text-xs text-logo-brown/60 space-y-1">
                    <div>Gerät: CHF {result.monthlyCost.base}</div>
                    <div>Service: CHF {result.monthlyCost.service}</div>
                    <div>Verbrauch: CHF {result.monthlyCost.consumables}</div>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <div className="text-sm font-semibold mb-2">Warum empfohlen:</div>
                <ul className="text-sm text-logo-brown/80 space-y-1">
                  {result.reasons.map((reason, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleInquiry(model)}
                  className="flex-1 bg-logo-blue text-white px-4 py-3 font-semibold hover:bg-logo-blue/90 transition-colors focus:outline-none focus:ring-2 focus:ring-logo-blue focus:ring-offset-2"
                  aria-label={`Anfrage senden für ${model.name}`}
                >
                  Anfragen
                </button>
                <button
                  className="px-4 py-3 border-2 border-logo-brown text-logo-brown font-semibold hover:bg-logo-brown/5 transition-colors focus:outline-none focus:ring-2 focus:ring-logo-blue focus:ring-offset-2"
                  aria-label={`Details anzeigen für ${model.name}`}
                >
                  Details
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <LeadFormModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedModel(null);
        }}
        model={selectedModel}
        sourceSection={type === 'kaffeemaschine' ? 'A' : 'B'}
      />
    </>
  );
}