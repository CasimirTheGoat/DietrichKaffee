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
            Baden-Württemberg | Advertorial | 19.11.2025 – Mirko Dietrich
          </div>
          <h1 className="lato-black text-3xl md:text-5xl leading-tight text-logo-brown">
            Siebträger oder Vollautomat? So treffen Sie die richtige Entscheidung für Ihr Unternehmen
          </h1>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="aspect-video md:aspect-[2/1] bg-logo-brown/10 relative overflow-hidden rounded-lg">
          <Image
            src="/images/comparison.png"
            alt="Siebträger vs Vollautomat Vergleich"
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
            Warum diese Entscheidung wichtiger ist, als viele denken
          </blockquote>

          <p className="text-lg leading-relaxed mb-6">
            Die Frage „Siebträger oder Vollautomat?" kommt immer wieder – und fast jedes Unternehmen denkt zuerst an den Preis oder die Optik.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Doch in der Praxis entscheidet etwas anderes darüber, ob Ihre Lösung wirklich funktioniert:
          </p>

          <ul className="list-none space-y-2 mb-8 text-lg">
            <li className="flex items-start">
              <span className="text-logo-blue mr-3">👉</span>
              <span>Wie viele Personen trinken Kaffee?</span>
            </li>
            <li className="flex items-start">
              <span className="text-logo-blue mr-3">👉</span>
              <span>Wie schnell muss es gehen?</span>
            </li>
            <li className="flex items-start">
              <span className="text-logo-blue mr-3">👉</span>
              <span>Wie konstant soll die Qualität sein?</span>
            </li>
            <li className="flex items-start">
              <span className="text-logo-blue mr-3">👉</span>
              <span>Wer kümmert sich um Reinigung & Service?</span>
            </li>
          </ul>

          <p className="text-lg leading-relaxed mb-8">
            Genau diese Punkte klären wir in diesem Artikel.
          </p>

          <h2 className="lato-bold text-2xl md:text-3xl text-logo-brown mt-12 mb-6">
            Was ist ein Siebträger?<br />
            Und wann lohnt er sich im Betrieb?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Ein Siebträger ist die klassische „Barista-Maschine", die viele aus Cafés kennen.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            Für Kaffeeliebhaber ist es die Königsklasse.
          </p>

          <h3 className="lato-bold text-xl md:text-2xl text-logo-brown mt-10 mb-6">
            Vorteile eines Siebträgers
          </h3>

          <div className="bg-logo-blue/5 p-6 rounded-lg mb-8">
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✔</span>
                <div>
                  <strong>Höchste Kaffeequalität</strong><br />
                  <span>Manuelle Kontrolle über Mahlgrad, Temperatur, Druck, Bezugszeit.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✔</span>
                <div>
                  <strong>Barista-Feeling & Optik</strong><br />
                  <span>Diese Maschinen wirken hochwertig und machen Eindruck – ideal für Cafés, Showrooms, Agenturen oder Premium-Büros.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✔</span>
                <div>
                  <strong>Langlebig & robust</strong><br />
                  <span>Viele Profi-Siebträger halten 10+ Jahre.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✔</span>
                <div>
                  <strong>Skalierbar über Mühle + Workflow</strong><br />
                  <span>Mit guter Organisation auch für viele Getränke geeignet.</span>
                </div>
              </li>
            </ul>
          </div>

          <h3 className="lato-bold text-xl md:text-2xl text-logo-brown mt-10 mb-6">
            Nachteile eines Siebträgers
          </h3>

          <ul className="space-y-3 text-lg mb-8">
            <li className="flex items-start">
              <span className="text-red-600 mr-3">✘</span>
              <div>
                <strong>Mehr Zeitaufwand</strong><br />
                <span>Bezug, Reinigung, Ausschlagbehälter, Siebträgerpflege.</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3">✘</span>
              <div>
                <strong>Know-how nötig</strong><br />
                <span>Nicht jeder im Büro möchte „Barista spielen".</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3">✘</span>
              <div>
                <strong>Unkonstant, wenn viele Menschen bedienen</strong><br />
                <span>10 Mitarbeiter → 10 unterschiedliche Ergebnisse.</span>
              </div>
            </li>
          </ul>

          <h3 className="lato-bold text-xl md:text-2xl text-logo-brown mt-10 mb-6">
            Für wen sind Siebträger ideal?
          </h3>

          <ul className="list-disc list-inside space-y-2 mb-8 text-lg">
            <li>Cafés & Gastronomie</li>
            <li>Büros mit vielen Kaffee-Enthusiasten</li>
            <li>Kreativagenturen & Showrooms</li>
            <li>Hotels, die einen Barista-Bereich wollen</li>
            <li>Firmen, bei denen Kaffee Teil der Markenwelt ist</li>
          </ul>

          <p className="text-lg leading-relaxed mb-8">
            <strong>Wenn Kaffee eine Erlebnis-Komponente haben soll, ist der Siebträger unschlagbar.</strong>
          </p>

          <h2 className="lato-bold text-2xl md:text-3xl text-logo-brown mt-12 mb-6">
            Was ist ein Vollautomat?<br />
            Und warum wählen ihn 80% der Unternehmen?
          </h2>

          <p className="text-lg leading-relaxed mb-8">
            Ein Vollautomat übernimmt alles automatisch:<br />
            Mahlen, Brühdruck, Milchaufschäumen, Reinigung (teilweise).
          </p>

          <h3 className="lato-bold text-xl md:text-2xl text-logo-brown mt-10 mb-6">
            Vorteile eines Vollautomaten
          </h3>

          <div className="bg-logo-blue/5 p-6 rounded-lg mb-8">
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✔</span>
                <div>
                  <strong>Schnell & einfach</strong><br />
                  <span>Ein Knopf – fertig.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✔</span>
                <div>
                  <strong>Konstante Qualität</strong><br />
                  <span>Unabhängig davon, wer gerade die Maschine bedient.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✔</span>
                <div>
                  <strong>Perfekt für viele Nutzer</strong><br />
                  <span>20, 50 oder 100+ Personen täglich → kein Problem.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✔</span>
                <div>
                  <strong>Milchgetränke in Sekundenschnelle</strong><br />
                  <span>Cappuccino, Latte, Kakao.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✔</span>
                <div>
                  <strong>Wenig Schulungsaufwand</strong><br />
                  <span>Auch neue Mitarbeiter kommen sofort klar.</span>
                </div>
              </li>
            </ul>
          </div>

          <h3 className="lato-bold text-xl md:text-2xl text-logo-brown mt-10 mb-6">
            Nachteile eines Vollautomaten
          </h3>

          <ul className="space-y-3 text-lg mb-8">
            <li className="flex items-start">
              <span className="text-red-600 mr-3">✘</span>
              <div>
                <strong>Etwas weniger „Barista-Feeling"</strong><br />
                <span>Optisch industrieller, weniger handwerklich.</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3">✘</span>
              <div>
                <strong>Regelmäßige Reinigung nötig</strong><br />
                <span>Vollautomaten müssen täglich gepflegt werden (automatisch oder manuell).</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-3">✘</span>
              <div>
                <strong>Abhängigkeit vom Service</strong><br />
                <span>Wenn der Vollautomat steht, steht der Kaffee – deshalb ist Servicegeschwindigkeit entscheidend.</span>
              </div>
            </li>
          </ul>

          <h3 className="lato-bold text-xl md:text-2xl text-logo-brown mt-10 mb-6">
            Für wen sind Vollautomaten ideal?
          </h3>

          <ul className="list-disc list-inside space-y-2 mb-8 text-lg">
            <li>Büros jeder Größe</li>
            <li>Arztpraxen, Kanzleien</li>
            <li>Hotels & Wartebereiche</li>
            <li>Werkstätten & Produktionsbetriebe</li>
            <li>Öffentliche Einrichtungen</li>
            <li>Unternehmen mit wechselnden Mitarbeitern</li>
          </ul>

          <p className="text-lg leading-relaxed mb-8">
            <strong>Wenn Kaffee zuverlässig & schnell funktionieren muss, führt kein Weg am Vollautomaten vorbei.</strong>
          </p>

          <h2 className="lato-bold text-2xl md:text-3xl text-logo-brown mt-12 mb-6">
            Siebträger oder Vollautomat? – Der direkte Vergleich
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-logo-brown/20">
              <thead>
                <tr className="bg-logo-brown/5">
                  <th className="border border-logo-brown/20 p-4 text-left lato-bold">Bereich</th>
                  <th className="border border-logo-brown/20 p-4 text-left lato-bold">Siebträger</th>
                  <th className="border border-logo-brown/20 p-4 text-left lato-bold">Vollautomat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-logo-brown/20 p-4 font-semibold">Qualität</td>
                  <td className="border border-logo-brown/20 p-4">⭐⭐⭐⭐⭐ (barista)</td>
                  <td className="border border-logo-brown/20 p-4">⭐⭐⭐⭐ (sehr konstant)</td>
                </tr>
                <tr className="bg-logo-brown/5">
                  <td className="border border-logo-brown/20 p-4 font-semibold">Geschwindigkeit</td>
                  <td className="border border-logo-brown/20 p-4">Langsamer</td>
                  <td className="border border-logo-brown/20 p-4">Sehr schnell</td>
                </tr>
                <tr>
                  <td className="border border-logo-brown/20 p-4 font-semibold">Bedienung</td>
                  <td className="border border-logo-brown/20 p-4">Manuell</td>
                  <td className="border border-logo-brown/20 p-4">Automatisch</td>
                </tr>
                <tr className="bg-logo-brown/5">
                  <td className="border border-logo-brown/20 p-4 font-semibold">Personen pro Tag</td>
                  <td className="border border-logo-brown/20 p-4">1–40</td>
                  <td className="border border-logo-brown/20 p-4">10–200+</td>
                </tr>
                <tr>
                  <td className="border border-logo-brown/20 p-4 font-semibold">Reinigung</td>
                  <td className="border border-logo-brown/20 p-4">Manuell</td>
                  <td className="border border-logo-brown/20 p-4">Automatisch/teil-automatisch</td>
                </tr>
                <tr className="bg-logo-brown/5">
                  <td className="border border-logo-brown/20 p-4 font-semibold">Optik/Prestige</td>
                  <td className="border border-logo-brown/20 p-4">Sehr hoch</td>
                  <td className="border border-logo-brown/20 p-4">Mittel bis hoch</td>
                </tr>
                <tr>
                  <td className="border border-logo-brown/20 p-4 font-semibold">Komplexität</td>
                  <td className="border border-logo-brown/20 p-4">Höher</td>
                  <td className="border border-logo-brown/20 p-4">Niedrig</td>
                </tr>
                <tr className="bg-logo-brown/5">
                  <td className="border border-logo-brown/20 p-4 font-semibold">Preis pro Tasse</td>
                  <td className="border border-logo-brown/20 p-4">Niedrig</td>
                  <td className="border border-logo-brown/20 p-4">Niedrig–Mittel</td>
                </tr>
                <tr>
                  <td className="border border-logo-brown/20 p-4 font-semibold">Verlässlichkeit</td>
                  <td className="border border-logo-brown/20 p-4">Top</td>
                  <td className="border border-logo-brown/20 p-4">Top, abhängig vom Service</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="lato-bold text-2xl md:text-3xl text-logo-brown mt-12 mb-6">
            Unsere Empfehlung nach Unternehmensgröße
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-white p-6 border border-logo-brown/20">
              <h3 className="lato-bold text-xl text-logo-brown mb-3">Unter 10 Personen</h3>
              <p>Wenn alle Spaß an Kaffee haben → <strong>Siebträger</strong></p>
              <p>Wenn's vor allem schnell gehen muss → <strong>kleiner Vollautomat</strong></p>
            </div>

            <div className="bg-white p-6 border border-logo-brown/20">
              <h3 className="lato-bold text-xl text-logo-brown mb-3">10–25 Personen</h3>
              <p>→ <strong>Vollautomat</strong></p>
              <p className="text-sm text-logo-brown/70">(zuverlässiger, weniger Diskussionen über Reinigung)</p>
            </div>

            <div className="bg-white p-6 border border-logo-brown/20">
              <h3 className="lato-bold text-xl text-logo-brown mb-3">25–60 Personen</h3>
              <p>→ <strong>Profi-Vollautomat</strong> oder <strong>3-Liter-Boiler-Siebträger + Workflow</strong></p>
              <p className="text-sm text-logo-brown/70">Je nach Nutzungsverhalten.</p>
            </div>

            <div className="bg-white p-6 border border-logo-brown/20">
              <h3 className="lato-bold text-xl text-logo-brown mb-3">60+ Personen</h3>
              <p>→ <strong>Profi-Vollautomat</strong> oder <strong>Vending-Lösung</strong> (Becherautomat, Zahlungssystem)</p>
            </div>
          </div>

          <h2 className="lato-bold text-2xl md:text-3xl text-logo-brown mt-12 mb-6">
            Welche Lösung wählen unsere Kunden in der Praxis?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Basierend auf hunderten Gesprächen:
          </p>

          <ul className="list-disc list-inside space-y-2 mb-8 text-lg">
            <li><strong>Cafés & Gastronomie:</strong> 90% Siebträger</li>
            <li><strong>Büros unter 20 Personen:</strong> 70% Vollautomat, 30% Siebträger</li>
            <li><strong>Büros ab 20 Personen:</strong> 95% Vollautomat</li>
            <li><strong>Hotels:</strong> Mix (Siebträger für Barista, Vollautomat für Frühstück)</li>
            <li><strong>Produktion/Werkstatt:</strong> 100% Vollautomat/Vending</li>
          </ul>

          <h2 className="lato-bold text-2xl md:text-3xl text-logo-brown mt-12 mb-6">
            Was Sie unabhängig vom System beachten sollten
          </h2>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="lato-bold text-xl text-logo-brown mb-3">1. Servicegeschwindigkeit entscheidet alles</h3>
              <p className="mb-3">Eine Maschine ist nur gut, wenn sie läuft.</p>
              <p className="mb-2">Die meisten großen Anbieter brauchen:</p>
              <p className="text-red-600 mb-2">❗ 2–3 Wochen für einen Techniker</p>
              <p className="mb-2">Wir arbeiten regional →</p>
              <p className="text-logo-blue font-semibold">👉 1–3 Tage Servicezeit</p>
            </div>

            <div>
              <h3 className="lato-bold text-xl text-logo-brown mb-3">2. Vermeiden Sie starre 5-Jahres-Verträge</h3>
              <p className="mb-3">Viele Anbieter schließen Sie langfristig ein.</p>
              <p className="mb-2">Bei uns gilt:</p>
              <p className="text-logo-blue">👉 Vertragslaufzeit wird gemeinsam vereinbart</p>
              <p className="text-logo-blue">👉 Keine Knebelbindung</p>
            </div>

            <div>
              <h3 className="lato-bold text-xl text-logo-brown mb-3">3. Preis ist nicht alles – aber Aufschläge schon</h3>
              <p className="mb-3">Große Marken schlagen oft 30–40 % Logo-Aufpreis auf den Listenpreis.</p>
              <p className="text-logo-blue">Wir arbeiten ohne diesen Markenaufschlag.</p>
            </div>
          </div>

          <h2 className="lato-bold text-2xl md:text-3xl text-logo-brown mt-12 mb-6">
            Fazit: Welche Lösung ist die richtige für Sie?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-logo-blue/5 p-6 rounded-lg">
              <h3 className="lato-bold text-xl text-logo-brown mb-4">Wenn Sie…</h3>
              <ul className="space-y-2 mb-4">
                <li>• Barista-Feeling möchten</li>
                <li>• Optik & Handwerk lieben</li>
                <li>• Zeit & Know-how im Team haben</li>
              </ul>
              <p className="text-logo-blue font-semibold">→ Dann wählen Sie einen Siebträger.</p>
            </div>

            <div className="bg-logo-blue/5 p-6 rounded-lg">
              <h3 className="lato-bold text-xl text-logo-brown mb-4">Wenn Sie…</h3>
              <ul className="space-y-2 mb-4">
                <li>• viele Personen versorgen</li>
                <li>• konstanten Geschmack brauchen</li>
                <li>• schnelle Zubereitung wollen</li>
                <li>• wenig Bedienaufwand möchten</li>
              </ul>
              <p className="text-logo-blue font-semibold">→ Dann ist der Vollautomat die beste Wahl.</p>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-8">
            <strong>Und wenn Sie unsicher sind:</strong><br />
            Wir beraten ehrlich und unabhängig – ohne Markenbindung.
          </p>

          <h2 className="lato-bold text-2xl md:text-3xl text-logo-brown mt-12 mb-6">
            Kostenlos prüfen, welche Lösung für Ihren Betrieb am besten ist
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Wir bieten einen kurzen 2-Minuten-Check an, der Ihnen zeigt:
          </p>

          <div className="bg-logo-blue/5 p-6 rounded-lg mb-8">
            <ul className="space-y-2 text-lg">
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✔</span>
                <span>Welche Lösung zu Ihrem Bedarf passt</span>
              </li>
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✔</span>
                <span>Wie hoch Ihr mögliches Einsparpotenzial ist</span>
              </li>
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✔</span>
                <span>Ob unser 1–3-Tage-Service an Ihrem Standort möglich ist</span>
              </li>
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✔</span>
                <span>Ob wir noch Kapazität für Neukunden haben</span>
              </li>
            </ul>
          </div>

          <div className="bg-logo-blue/10 p-8 rounded-lg my-12 text-center">
            <h3 className="lato-bold text-2xl text-logo-brown mb-6">
              Jetzt kostenlosen Check starten
            </h3>
            
            <a
              href="/kaffeemaschinen-check"
              className="inline-block bg-logo-blue text-white px-8 py-4 text-xl lato-bold rounded-lg hover:bg-logo-blue/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue"
            >
              Jetzt kostenlos prüfen
            </a>

            <p className="text-sm text-logo-brown/70 mt-4">
              (Kein Risiko, keine Verpflichtung.)
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