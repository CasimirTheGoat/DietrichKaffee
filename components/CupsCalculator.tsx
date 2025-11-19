'use client';

import { useState, useEffect } from 'react';
import {
  filterAndScoreKaffeemaschinen,
  type CupsCalculatorInputs,
  type Model,
  type ScoredModel
} from '@/lib/matching';

interface CupsCalculatorProps {
  models: Model[];
  onResults: (results: ScoredModel[]) => void;
}

export default function CupsCalculator({ models, onResults }: CupsCalculatorProps) {
  const [inputs, setInputs] = useState<CupsCalculatorInputs>({
    cupsPerDay: 10,
    beverageType: 'espresso',
    comfort: 'halbautomatik',
    budget: 'mid'
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const results = filterAndScoreKaffeemaschinen(models, inputs);
      onResults(results);

      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'calc_submit',
          type: 'cups',
          inputs,
          top_sku: results[0]?.model.sku || null
        });
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [inputs, models, onResults]);

  return (
    <div className="bg-white p-8 border border-logo-brown/20 mb-12">
      <h3 className="text-2xl font-bold mb-6">Finden Sie Ihre passende Maschine</h3>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="cups-per-day" className="block text-sm font-semibold mb-2 text-logo-brown">
            Tassen pro Tag
          </label>
          <input
            id="cups-per-day"
            type="range"
            min="1"
            max="80"
            value={inputs.cupsPerDay}
            onChange={e => setInputs({ ...inputs, cupsPerDay: Number(e.target.value) })}
            className="w-full h-2 bg-logo-brown/20 rounded-lg appearance-none cursor-pointer accent-logo-blue"
            aria-valuemin={1}
            aria-valuemax={80}
            aria-valuenow={inputs.cupsPerDay}
          />
          <div className="text-right text-2xl font-bold mt-2">{inputs.cupsPerDay}</div>
        </div>

        <div>
          <label htmlFor="beverage-type" className="block text-sm font-semibold mb-2 text-logo-brown">
            Getränkeart
          </label>
          <select
            id="beverage-type"
            value={inputs.beverageType}
            onChange={e => setInputs({ ...inputs, beverageType: e.target.value as any })}
            className="w-full px-4 py-3 border border-logo-brown/20 bg-white text-logo-brown focus:outline-none focus:ring-2 focus:ring-logo-blue"
          >
            <option value="espresso">Espresso</option>
            <option value="lungo">Lungo/Filter</option>
            <option value="milch">Milchgetränke</option>
          </select>
        </div>

        <div>
          <label htmlFor="comfort" className="block text-sm font-semibold mb-2 text-logo-brown">
            Komfort
          </label>
          <select
            id="comfort"
            value={inputs.comfort}
            onChange={e => setInputs({ ...inputs, comfort: e.target.value as any })}
            className="w-full px-4 py-3 border border-logo-brown/20 bg-white text-logo-brown focus:outline-none focus:ring-2 focus:ring-logo-blue"
          >
            <option value="manuell">Manuell</option>
            <option value="halbautomatik">Halbautomatik</option>
            <option value="komfort">Komfortfunktionen</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-semibold mb-2 text-logo-brown">
            Budget
          </label>
          <select
            id="budget"
            value={inputs.budget}
            onChange={e => setInputs({ ...inputs, budget: e.target.value as any })}
            className="w-full px-4 py-3 border border-logo-brown/20 bg-white text-logo-brown focus:outline-none focus:ring-2 focus:ring-logo-blue"
          >
            <option value="low">Bis CHF 2'000</option>
            <option value="mid">CHF 2'000 – 5'000</option>
            <option value="high">Ab CHF 5'000</option>
          </select>
        </div>
      </div>

      <div className="mt-6 text-sm text-logo-brown/70">
        <strong>Berechnungsgrundlage:</strong> Kapazitäts-Buffer 30% für Spitzenzeiten
      </div>
    </div>
  );
}
