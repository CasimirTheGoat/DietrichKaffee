import Image from 'next/image';

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white text-logo-brown">
      {/* Logo at top */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Image
          src="/images/logo/logo.png"
          alt="Dietrich Kaffee Logo"
          width={180}
          height={60}
          priority
        />
      </div>

      {/* Article Header */}
      <header className="py-4 border-b border-logo-brown/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-sm text-logo-brown/60 mb-4">
            Baden-Württemberg | Advertorial | 12.11.2025 – Mirko Dietrich
          </div>
          <h1 className="lato-black text-3xl md:text-5xl leading-tight text-logo-brown">
            Das sollten Sie lesen, bevor Sie einen Kaffeeautomaten anschaffen
          </h1>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="aspect-video md:aspect-[2/1] bg-logo-brown/10 relative overflow-hidden rounded-lg">
          <Image
            src="/images/big_industry_coffee_machine.webp"
            alt="Professionelle Kaffeemaschine"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 pb-16">
        <div className="prose prose-lg max-w-none">
          <blockquote className="text-xl md:text-2xl italic text-logo-brown border-l-4 border-logo-blue pl-6 my-8">
            Diesen teuren Fehler machen viele Firmen und Praxen – und wie Sie ihn vermeiden
          </blockquote>

          <p className="text-lg leading-relaxed mb-6">
            Viele Mitarbeiter und Kunden beschweren sich immer noch über schlechten oder unzuverlässigen Kaffee am Arbeitsplatz – doch das muss nicht sein.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            Hier erfahren Sie, wie Sie unnötig teure Kaffee-Lösungen vermeiden, worauf Firmen wirklich achten sollten und warum ein regionaler Anbieter vielen Betrieben inzwischen viel Geld spart.
          </p>

          <h2 className="lato-bold text-2xl md:text-3xl text-logo-brown mt-12 mb-6">
            Das alltägliche Kaffee-Problem in Unternehmen
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Jeder kennt es:
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Die Kaffeemaschine im Büro ist zu klein, ständig leer oder dauernd kaputt.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Wasser und Bohnen nachfüllen, Reinigung organisieren, Service anfordern – immer Stress, nie entspannter Kaffeegenuss.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Seien wir ehrlich:<br />
            Haushaltsmaschinen sind für Betriebe nicht gemacht.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Sobald morgens die ersten Mitarbeiter anstehen oder ein Kunde einen Cappuccino will, zeigt sich:
          </p>

          <div className="bg-logo-blue/5 p-6 rounded-lg mb-8">
            <p className="text-lg font-semibold text-logo-brown">
              ➡️ Viele Unternehmen haben ihr Kaffeeproblem noch immer nicht gelöst.
            </p>
          </div>

          <h2 className="lato-bold text-2xl md:text-3xl text-logo-brown mt-12 mb-6">
            Warum viele Firmen unnötig zu viel bezahlen
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Ein guter Profi-Kaffeevollautomat kostet schnell mehrere tausend Euro.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            2.000–5.000 Euro sind völlig normal – ohne Wartung, ohne Service, ohne Reparaturen.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Dazu kommen oft:
          </p>

          <ul className="list-disc list-inside space-y-2 mb-8 text-lg">
            <li>lange Vertragslaufzeiten (mehrere Jahre)</li>
            <li>teure Servicepauschalen</li>
            <li>langsame Reaktionszeiten bei Störungen</li>
          </ul>

          <p className="text-lg leading-relaxed mb-6">
            Für viele Betriebe bedeutet das:<br />
            <strong>Hohe Fixkosten – aber trotzdem oft tagelang kein funktionierender Automat.</strong>
          </p>

          <h2 className="lato-bold text-2xl md:text-3xl text-logo-brown mt-12 mb-6">
            Die Alternative: Regionale Profi-Lösungen – flexibler & günstiger
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Immer mehr Unternehmen wechseln deshalb zu flexiblen Miet- oder Servicekonzepten, die:
          </p>

          <div className="bg-logo-blue/5 p-6 rounded-lg mb-8">
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✔️</span>
                <span><strong>keine hohen Anschaffungskosten</strong> haben</span>
              </li>
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✔️</span>
                <span><strong>Wartung, Reinigung & Reparaturen</strong> inkludieren</span>
              </li>
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✔️</span>
                <span><strong>schnellen Vor-Ort-Service</strong> bieten</span>
              </li>
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✔️</span>
                <span>eine <strong>faire, anpassbare Vertragsdauer</strong> ermöglichen</span>
              </li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Genau hier setzt ein Anbieter aus der Region besonders an:
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Dietrich Kaffee</strong> – spezialisiert auf Büros, Praxen, Werkstätten & Betriebe im Raum Freiburg / Lörrach / Hochrhein.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Sein Versprechen:<br />
            <strong>Profi-Geräte ohne Logo-Aufschlag – und Vor-Ort-Service in 1–3 Tagen.</strong>
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Viele Firmen zahlen damit 30–40 % weniger pro Monat, erhalten die gleiche Gerätequalität und haben bei Störungen sofort wieder Kaffee im Haus.
          </p>

          <h2 className="lato-bold text-2xl md:text-3xl text-logo-brown mt-12 mb-6">
            Warum dieser Ansatz so gut funktioniert
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Dietrich Kaffee arbeitet anders als große Anbieter:
          </p>

          <ul className="list-disc list-inside space-y-2 mb-8 text-lg">
            <li>Original-Profi-Automaten zum fairen Listenpreis</li>
            <li>Ohne künstliche Markenaufschläge</li>
            <li>Ohne starre 5-Jahres-Verträge</li>
            <li>Service direkt vom Techniker statt Hotline</li>
            <li>Schnelle Verfügbarkeit durch regionale Nähe</li>
          </ul>

          <p className="text-lg leading-relaxed mb-8">
            Gerade für Firmen mit 10+ Kaffeetrinkern pro Tag zahlt sich das sofort aus.
          </p>

          <h2 className="lato-bold text-2xl md:text-3xl text-logo-brown mt-12 mb-6">
            Jetzt kostenlos prüfen, welche Lösung für Ihr Unternehmen passt
          </h2>

          <div className="bg-logo-blue/5 p-6 rounded-lg mb-8">
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✔️</span>
                <span><strong>Profi-Geräte</strong> für Firmen jeder Größenordnung</span>
              </li>
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✔️</span>
                <span><strong>Wartung, Service, Reinigung & Ersatzgeräte</strong> inklusive</span>
              </li>
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✔️</span>
                <span><strong>Flexible Vertragsmodelle</strong> statt langfristiger Bindung</span>
              </li>
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✔️</span>
                <span><strong>Regionale Betreuung</strong> mit 1–3-Tage-Service</span>
              </li>
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✔️</span>
                <span><strong>30–40 % günstiger</strong> als viele traditionelle Modelle</span>
              </li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed mb-8">
            👉 Klicken Sie unten auf den Button, beantworten Sie ein paar kurze Fragen – und erhalten Sie eine kostenlose Einschätzung, welche Lösung für Ihr Unternehmen am besten passt und wie viel Sie sparen können.
          </p>

          <div className="bg-logo-blue/10 p-8 rounded-lg my-12 text-center">
            <h3 className="lato-bold text-2xl text-logo-brown mb-6">
              Was kostet ein guter Kaffeevollautomat für Ihre Firma wirklich?
            </h3>
            
            <a
              href="/kaffeemaschinen-check"
              className="inline-block bg-logo-blue text-white px-8 py-4 text-xl lato-bold rounded-lg hover:bg-logo-blue/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue"
            >
              Jetzt kostenlos prüfen
            </a>

            <p className="text-sm text-logo-brown/70 mt-4">
              (Kein Risiko, keine Verpflichtung. Kapazität aktuell noch begrenzt.)
            </p>
          </div>

          {/* Disclaimer Accordion */}
          <details className="mt-16 border-t border-logo-brown/10 pt-8">
            <summary className="cursor-pointer text-sm text-gray-100 hover:text-gray-200 mb-4">
              <span className="mr-2">🧾</span>
              Disclaimer / Rechtlicher Hinweis
            </summary>
            <div className="text-sm leading-relaxed space-y-4 mt-4 text-gray-100">
              <p>
                Dieser Text ist ein fiktionaler Erfahrungsbericht zu Informations- und Unterhaltungszwecken. Die beschriebenen Personen, Erlebnisse und Situationen sind frei erfunden. Etwaige Ähnlichkeiten mit realen Personen oder Ereignissen sind rein zufällig.
              </p>
              <p>
                Alle Angaben zu Produkten, Servicezeiten, Preisen oder Einsparpotenzialen sind beispielhafte Darstellungen und können je nach Anbieter, Region und individueller Situation variieren.
              </p>
              <p>
                Es handelt sich um einen werblichen Text, keinen tatsächlichen Erfahrungsbericht.
              </p>
            </div>
          </details>

          <details className="mt-4">
            <summary className="cursor-pointer text-sm text-gray-100 hover:text-gray-200">
              Impressum – Datenschutz – AGB
            </summary>
            <div className="text-sm mt-4 text-gray-100">
              <p>
                <a href="/legal#impressum" className="hover:underline">Impressum</a> | 
                <a href="/legal#datenschutz" className="hover:underline ml-2">Datenschutz</a>
              </p>
            </div>
          </details>
        </div>
      </article>
    </div>
  );
}