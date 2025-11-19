export interface KaffeemaschineModel {
  sku: string;
  name: string;
  category: 'kaffeemaschine';
  recommended_daily_max: number;
  beverage_strength: string[];
  milk_ready: boolean;
  comfort: string;
  price_chf: number;
  best_for: string;
  power: string;
  water: string;
  service_interval_months: number;
  boiler: string;
  brewer: string;
  milk_system?: string;
  image: string;
}

export interface VollautomatModel {
  sku: string;
  name: string;
  category: 'vollautomat';
  recommended_daily_max: number;
  throughput_per_hour: number;
  milk_system: string;
  water: string;
  price_chf: number;
  lease_chf_month: number;
  service: {
    basis: number;
    plus: number;
    premium: number;
  };
  consumables_chf_per_cup: number;
  best_for: string;
  power: string;
  cleaning: string;
  beverage_options: string[];
  image: string;
}

export type Model = KaffeemaschineModel | VollautomatModel;

export interface CupsCalculatorInputs {
  cupsPerDay: number;
  beverageType: 'espresso' | 'lungo' | 'milch';
  comfort: 'manuell' | 'halbautomatik' | 'komfort';
  budget: 'low' | 'mid' | 'high';
}

export interface VollautomatCalculatorInputs {
  headcount: number;
  cupsPerPerson: number;
  beverageMix: {
    espresso: number;
    lungo: number;
    milk: number;
  };
  openingHours: number;
  financing: 'kauf' | 'leasing';
  serviceLevel: 'basis' | 'plus' | 'premium';
  water: 'tank' | 'festwasser';
  locations: 1 | 2 | 3;
}

export interface ScoredModel {
  model: Model;
  score: number;
  reasons: string[];
}

export interface VollautomatResult extends ScoredModel {
  model: VollautomatModel;
  monthlyCost: {
    base: number;
    service: number;
    consumables: number;
    total: number;
  };
}

export function filterAndScoreKaffeemaschinen(
  models: Model[],
  inputs: CupsCalculatorInputs
): ScoredModel[] {
  const peakCapacity = inputs.cupsPerDay * 1.3;

  const kaffeemaschinen = models.filter(
    (m): m is KaffeemaschineModel =>
      m.category === 'kaffeemaschine' &&
      m.recommended_daily_max >= peakCapacity
  );

  const budgetRanges = {
    low: { min: 0, max: 2000 },
    mid: { min: 1500, max: 5000 },
    high: { min: 4000, max: 999999 }
  };

  const scored = kaffeemaschinen.map(model => {
    let score = 0;
    const reasons: string[] = [];

    const capacityRatio = model.recommended_daily_max / peakCapacity;
    if (capacityRatio >= 1 && capacityRatio <= 2) {
      score += 50;
      reasons.push(`Optimal dimensioniert für ${inputs.cupsPerDay} Tassen/Tag`);
    } else if (capacityRatio > 2) {
      score += 35;
      reasons.push(`Hohe Reserve-Kapazität`);
    } else {
      score += 20;
    }

    if (inputs.beverageType === 'espresso' && model.beverage_strength.includes('espresso')) {
      score += 20;
      reasons.push('Perfekt für Espresso');
    }
    if (inputs.beverageType === 'lungo' && model.beverage_strength.includes('lungo')) {
      score += 20;
      reasons.push('Ideal für Lungo/Filter');
    }
    if (inputs.beverageType === 'milch' && model.milk_ready) {
      score += 20;
      reasons.push('Milchgetränke-fähig');
    }

    if (model.comfort === inputs.comfort) {
      score += 15;
      reasons.push(`${inputs.comfort === 'manuell' ? 'Volle Kontrolle' : inputs.comfort === 'halbautomatik' ? 'Ausgewogener Komfort' : 'Maximaler Komfort'}`);
    }

    const budgetRange = budgetRanges[inputs.budget];
    if (model.price_chf >= budgetRange.min && model.price_chf <= budgetRange.max) {
      score += 15;
      reasons.push('Im Budget-Rahmen');
    } else if (Math.abs(model.price_chf - budgetRange.max) < 500) {
      score += 8;
    }

    if (model.water === 'Tank') {
      reasons.push('Flexibel aufstellbar (Tank)');
    } else {
      reasons.push('Festwasser-Anschluss (weniger Wartung)');
    }

    return { model, score, reasons: reasons.slice(0, 3) };
  });

  return scored.sort((a, b) => b.score - a.score);
}

export function filterAndScoreVollautomaten(
  models: Model[],
  inputs: VollautomatCalculatorInputs
): VollautomatResult[] {
  const totalDaily = inputs.headcount * inputs.cupsPerPerson;
  const peakPerHour = (totalDaily / inputs.openingHours) * 1.5;

  const vollautomaten = models.filter(
    (m): m is VollautomatModel =>
      m.category === 'vollautomat' &&
      m.throughput_per_hour >= peakPerHour &&
      m.recommended_daily_max >= totalDaily * 1.2
  );

  if (inputs.water === 'festwasser') {
    vollautomaten.filter(m => m.water === 'Festwasser');
  }

  const scored = vollautomaten.map(model => {
    let score = 0;
    const reasons: string[] = [];

    const capacityRatio = model.recommended_daily_max / totalDaily;
    if (capacityRatio >= 1.2 && capacityRatio <= 2.5) {
      score += 50;
      reasons.push(`Optimal für ${Math.round(totalDaily)} Tassen/Tag`);
    } else if (capacityRatio > 2.5) {
      score += 35;
      reasons.push('Hohe Kapazitäts-Reserve');
    } else {
      score += 20;
    }

    const throughputRatio = model.throughput_per_hour / peakPerHour;
    if (throughputRatio >= 1 && throughputRatio <= 2) {
      score += 25;
      reasons.push('Bewältigt Stoßzeiten problemlos');
    } else if (throughputRatio > 2) {
      score += 15;
    }

    if (inputs.beverageMix.milk > 30 && model.milk_system.includes('automatisch')) {
      score += 15;
      reasons.push('Automatisches Milchsystem für häufige Milchgetränke');
    }

    if (inputs.water === 'festwasser' && model.water === 'Festwasser') {
      score += 10;
      reasons.push('Festwasser-Anschluss (weniger Befüllen)');
    }

    if (inputs.locations > 1) {
      score -= 5;
    }

    const workingDays = 22;
    const base = inputs.financing === 'leasing'
      ? model.lease_chf_month
      : model.price_chf / 36;

    const serviceFee = model.service[inputs.serviceLevel];
    const consumables = totalDaily * workingDays * model.consumables_chf_per_cup;
    const total = base + serviceFee + consumables;

    const monthlyCost = {
      base: Math.round(base * 100) / 100,
      service: serviceFee,
      consumables: Math.round(consumables * 100) / 100,
      total: Math.round(total * 100) / 100
    };

    if (total < 300) {
      reasons.push('Sehr wirtschaftlich');
    } else if (total > 600) {
      reasons.push('Premium-Lösung mit höheren Kosten');
    }

    return {
      model,
      score,
      reasons: reasons.slice(0, 3),
      monthlyCost
    };
  });

  return scored.sort((a, b) => b.score - a.score);
}
