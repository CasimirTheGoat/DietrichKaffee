'use client';

import { useState, useEffect } from 'react';
import {
  filterAndScoreVollautomaten,
  type VollautomatCalculatorInputs,
  type Model,
  type VollautomatResult
} from '@/lib/matching';

interface VollautomatCalculatorProps {
  models: Model[];
  onResults: (results: VollautomatResult[]) => void;
}

export default function VollautomatCalculator({ models, onResults }: VollautomatCalculatorProps) {
  const [inputs, setInputs] = useState<VollautomatCalculatorInputs>({
    headcount: 20,
    cupsPerPerson: 2,
    beverageMix: { espresso: 40, lungo: 30, milk: 30 },
    openingHours: 10,
    financing: 'leasing',
    serviceLevel: 'plus',
    water: 'festwasser',
    locations: 1
  });

  const [mixInput, setMixInput] = useState({ espresso: 40, lungo: 30, milk: 30 });

  useEffect(() => {
    const total = mixInput.espresso + mixInput.lungo + mixInput.milk;
    if (total === 100) {
      setInputs(prev => ({ ...prev, beverageMix: mixInput }));
    }
  }, [mixInput]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const results = filterAndScoreVollautomaten(models, inputs);
      onResults(results);

      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'calc_submit',
          type: 'vollautomat',
          inputs,
          top_sku: results[0]?.model.sku || null
        });
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [inputs, models, onResults]);

  const totalDaily = inputs.headcount * inputs.cupsPerPerson;
  const mixTotal = mixInput.espresso + mixInput.lungo + mixInput.milk;

  return (
    <div className="bg-white p-8 border border-logo-brown/20 mb-12">
      <h3 className="text-2xl font-bold mb-6">Berechnen Sie Ihre Monatskosten</h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <label htmlFor="headcount" className="block text-sm font-semibold mb-2 text-logo-brown">
            Mitarbeitende
          </label>
          <input
            id="headcount"
            type="number"
            min="2"
            max="500"
            value={inputs.headcount}
            onChange={e => setInputs({ ...inputs, headcount: Number(e.target.value) })}
            className="w-full px-4 py-3 border border-logo-brown/20 bg-white text-logo-brown focus:outline-none focus:ring-2 focus:ring-logo-blue"
            aria-label="Anzahl Mitarbeitende"
          />
        </div>

        <div>
          <label htmlFor="cups-per-person" className="block text-sm font-semibold mb-2 text-logo-brown">
            Ø Tassen pro Person/Tag
          </label>
          <input
            id="cups-per-person"
            type="number"
            min="0.5"
            max="6"
            step="0.5"
            value={inputs.cupsPerPerson}
            onChange={e => setInputs({ ...inputs, cupsPerPerson: Number(e.target.value) })}
            className="w-full px-4 py-3 border border-coffee-brown/20 bg-white text-coffee-brown focus:outline-none focus:ring-2 focus:ring-vibrant-blue"
            aria-label="Durchschnittliche Tassen pro Person pro Tag"
          />
        </div>

        <div>
          <label htmlFor="opening-hours" className="block text-sm font-semibold mb-2 text-coffee-brown">
            Öffnungszeiten (h/Tag)
          </label>
          <input
            id="opening-hours"
            type="number"
            min="6"
            max="24"
            value={inputs.openingHours}
            onChange={e => setInputs({ ...inputs, openingHours: Number(e.target.value) })}
            className="w-full px-4 py-3 border border-coffee-brown/20 bg-white text-coffee-brown focus:outline-none focus:ring-2 focus:ring-vibrant-blue"
            aria-label="Öffnungszeiten pro Tag"
          />
        </div>

        <div className="md:col-span-2 lg:col-span-3">
          <label className="block text-sm font-semibold mb-3 text-coffee-brown">
            Getränkemix (muss 100% ergeben)
          </label>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="mix-espresso" className="block text-xs mb-1 text-coffee-brown/70">
                Espresso/Lungo
              </label>
              <input
                id="mix-espresso"
                type="number"
                min="0"
                max="100"
                value={mixInput.espresso}
                onChange={e => setMixInput({ ...mixInput, espresso: Number(e.target.value) })}
                className="w-full px-3 py-2 border border-coffee-brown/20 bg-white text-coffee-brown focus:outline-none focus:ring-2 focus:ring-vibrant-blue"
                aria-label="Prozentsatz Espresso/Lungo"
              />
            </div>
            <div>
              <label htmlFor="mix-lungo" className="block text-xs mb-1 text-coffee-brown/70">
                Americano/Filter
              </label>
              <input
                id="mix-lungo"
                type="number"
                min="0"
                max="100"
                value={mixInput.lungo}
                onChange={e => setMixInput({ ...mixInput, lungo: Number(e.target.value) })}
                className="w-full px-3 py-2 border border-coffee-brown/20 bg-white text-coffee-brown focus:outline-none focus:ring-2 focus:ring-vibrant-blue"
                aria-label="Prozentsatz Americano/Filter"
              />
            </div>
            <div>
              <label htmlFor="mix-milk" className="block text-xs mb-1 text-coffee-brown/70">
                Milchgetränke
              </label>
              <input
                id="mix-milk"
                type="number"
                min="0"
                max="100"
                value={mixInput.milk}
                onChange={e => setMixInput({ ...mixInput, milk: Number(e.target.value) })}
                className="w-full px-3 py-2 border border-coffee-brown/20 bg-white text-coffee-brown focus:outline-none focus:ring-2 focus:ring-vibrant-blue"
                aria-label="Prozentsatz Milchgetränke"
              />
            </div>
          </div>
          <div className={`text-sm mt-2 ${mixTotal === 100 ? 'text-green-600' : 'text-red'}`}>
            Summe: {mixTotal}% {mixTotal !== 100 && '(muss 100% sein)'}
          </div>
        </div>

        <div>
          <label htmlFor="financing" className="block text-sm font-semibold mb-2 text-coffee-brown">
            Finanzierung
          </label>
          <select
            id="financing"
            value={inputs.financing}
            onChange={e => setInputs({ ...inputs, financing: e.target.value as any })}
            className="w-full px-4 py-3 border border-coffee-brown/20 bg-white text-coffee-brown focus:outline-none focus:ring-2 focus:ring-vibrant-blue"
          >
            <option value="kauf">Kauf</option>
            <option value="leasing">Leasing 36 Monate</option>
          </select>
        </div>

        <div>
          <label htmlFor="service-level" className="block text-sm font-semibold mb-2 text-coffee-brown">
            Servicelevel
          </label>
          <select
            id="service-level"
            value={inputs.serviceLevel}
            onChange={e => setInputs({ ...inputs, serviceLevel: e.target.value as any })}
            className="w-full px-4 py-3 border border-coffee-brown/20 bg-white text-coffee-brown focus:outline-none focus:ring-2 focus:ring-vibrant-blue"
          >
            <option value="basis">Basis</option>
            <option value="plus">Plus</option>
            <option value="premium">Premium</option>
          </select>
        </div>

        <div>
          <label htmlFor="water" className="block text-sm font-semibold mb-2 text-coffee-brown">
            Wasser
          </label>
          <select
            id="water"
            value={inputs.water}
            onChange={e => setInputs({ ...inputs, water: e.target.value as any })}
            className="w-full px-4 py-3 border border-coffee-brown/20 bg-white text-coffee-brown focus:outline-none focus:ring-2 focus:ring-vibrant-blue"
          >
            <option value="tank">Tank</option>
            <option value="festwasser">Festwasser</option>
          </select>
        </div>
      </div>

      <div className="mt-6 p-4 bg-coffee-brown/5 border border-coffee-brown/20">
        <div className="text-sm text-coffee-brown/70 space-y-1">
          <div><strong>Berechnung:</strong> {totalDaily.toFixed(1)} Tassen/Tag gesamt</div>
          <div className="flex flex-wrap gap-3 text-xs">
            <span className="px-2 py-1 bg-coffee-brown/10">22 Arbeitstage/Monat</span>
            <span className="px-2 py-1 bg-coffee-brown/10">1.5× Peak-Buffer</span>
            <span className="px-2 py-1 bg-coffee-brown/10">Service inkl. Wartung</span>
          </div>
        </div>
      </div>
    </div>
  );
}
