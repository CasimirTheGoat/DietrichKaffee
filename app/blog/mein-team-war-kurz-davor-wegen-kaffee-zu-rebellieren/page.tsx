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
            Baden-Württemberg | Advertorial | 09.11.2025 – Mirko Dietrich
          </div>
          <h1 className="lato-black text-3xl md:text-5xl leading-tight text-logo-brown">
            Mein Team war kurz davor, wegen Kaffee zu rebellieren.
          </h1>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="aspect-video md:aspect-[2/1] bg-logo-brown/10 relative overflow-hidden rounded-lg">
          <Image
            src="/images/kaffeemaschine-buero.webp"
            alt="Kaffeemaschine im Büro"
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
            „Ich dachte, ein Profi-Anbieter wäre die sicherste Lösung.<br />
            Am Ende zahlten wir 5 Jahre lang zu viel – und saßen trotzdem wochenlang ohne Kaffee da."
          </blockquote>

          <p className="text-lg leading-relaxed mb-6">
            Wenn Sie für ein Büro, eine Praxis, Werkstatt oder einen Betrieb verantwortlich sind, kennen Sie das sicher:
          </p>

          <ul className="list-disc list-inside space-y-2 mb-8 text-lg">
            <li>Die Kaffeemaschine ist zu klein, zu langsam oder ständig kaputt.</li>
            <li>Keiner fühlt sich für die Reinigung zuständig.</li>
            <li>Mitarbeiter bringen ihren eigenen Kaffee mit oder rennen zum Bäcker.</li>
          </ul>

          <p className="text-lg leading-relaxed mb-6">
            Genau so war es bei uns.<br />
            Ich bin Büro-Managerin in einem mittelständischen Betrieb in Baden-Württemberg.<br />
            Und ich erzähle Ihnen das, weil ich durch Zufall auf eine Lösung gestoßen bin, von der ich mir heute wünsche, ich hätte sie Jahre früher gekannt.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Eine Lösung, mit der wir jetzt:
          </p>

          <div className="bg-logo-blue/5 p-6 rounded-lg mb-8">
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✓</span>
                <strong>30–40 % weniger</strong> für unsere Kaffee- und Automatenlösung zahlen
              </li>
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✓</span>
                bei Störungen <strong>innerhalb von 1–3 Tagen</strong> wieder laufen
              </li>
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✓</span>
                <strong>keinen 5-Jahres-Vertrag</strong> mehr haben
              </li>
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✓</span>
                und zum ersten Mal <strong>Ruhe im Team</strong> beim Thema Kaffee haben
              </li>
            </ul>
          </div>

          <h2 className="lato-bold text-2xl md:text-3xl text-logo-brown mt-12 mb-6">
            Der Tag, an dem unsere „Profi-Lösung" uns fast lahmgelegt hat
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Vor zwei Jahren haben wir uns „endlich was Gescheites" gegönnt:
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Ein großer Anbieter mit bekanntem Namen, Hochglanzbroschüre, Außendienstler im Anzug.<br />
            Die Maschine sah toll aus, Kaffee-Partner & Co. eben.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Wir bekamen:
          </p>

          <ul className="list-disc list-inside space-y-2 mb-8 text-lg">
            <li>Einen schicken Kaffeevollautomaten</li>
            <li>Einen „Rundum-Service-Vertrag"</li>
            <li>Und einen 5-Jahres-Mietvertrag, der „absolut üblich in der Branche" sei</li>
          </ul>

          <p className="text-lg leading-relaxed mb-6">
            Ich habe damals unterschrieben.<br />
            Heute weiß ich: Das war ein Fehler.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Am Anfang waren alle begeistert.<br />
            Cappuccino, Latte, Kakao – alles auf Knopfdruck.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Doch dann kam der Tag X.
          </p>

          <h3 className="lato-bold text-xl md:text-2xl text-logo-brown mt-10 mb-6">
            „Mindestens zwei Wochen ohne Kaffee" – das war die Antwort
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            An einem Montagmorgen stand plötzlich eine Kollegin vor meinem Büro:
          </p>

          <blockquote className="text-lg italic text-logo-brown border-l-4 border-logo-brown/30 pl-6 my-6">
            „Die Maschine blinkt rot. Nix geht mehr."
          </blockquote>

          <p className="text-lg leading-relaxed mb-6">
            Wir haben alles probiert. Aus.<br />
            Also Hotline.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Nach einer Warteschleife die ernüchternde Antwort:<br />
            <strong>„Unser Techniker kann frühestens in 10–14 Tagen kommen."</strong>
          </p>

          <p className="text-lg leading-relaxed mb-6">
            10–14 Tage.<br />
            In einem Büro, in dem fast alle morgens mit der Kaffeetasse starten.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Die nächsten Tage sahen so aus:
          </p>

          <ul className="list-disc list-inside space-y-2 mb-8 text-lg">
            <li>Mitarbeiter liefen mehrmals täglich zum Bäcker</li>
            <li>Besprechungen starteten später</li>
            <li>Alle genervt: „Wofür zahlen wir eigentlich diesen teuren Vertrag?"</li>
          </ul>

          <p className="text-lg leading-relaxed mb-6">
            Wir haben am Ende knapp drei Wochen auf eine Reparatur gewartet.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Und der Monatsbetrag lief natürlich weiter.
          </p>

          <h2 className="lato-bold text-2xl md:text-3xl text-logo-brown mt-12 mb-6">
            Der Moment, in dem ich verstand, warum wir so viel zahlen
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            In dieser Zeit habe ich angefangen zu rechnen.<br />
            Und zu googeln.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Ich habe herausgefunden:
          </p>

          <ul className="list-disc list-inside space-y-2 mb-8 text-lg">
            <li>Der große Anbieter kauft die Maschinen beim Hersteller zum normalen Listenpreis</li>
            <li>Dann setzt er seine Marke drauf</li>
            <li>Und schlägt nochmal seinen Aufschlag obendrauf</li>
            <li>Dazu kommen lange Verträge, aus denen man kaum rauskommt</li>
          </ul>

          <p className="text-lg leading-relaxed mb-6">
            Kurz gesagt:<br />
            Wir zahlten für das Logo und den Namen, nicht für bessere Technik.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Die Maschine selbst gibt es identisch auch ohne Markenlogo.<br />
            Nur 30–40 % günstiger.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Das war der Moment, in dem ich dachte:<br />
            <strong>„Es muss doch jemand geben, der das ehrlich macht."</strong>
          </p>

          <h2 className="lato-bold text-2xl md:text-3xl text-logo-brown mt-12 mb-6">
            Wie ich den „geheimen" Anbieter aus der Region gefunden habe
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Zwei Wochen später war ich bei einem Unternehmer-Stammtisch.<br />
            Dort habe ich einer anderen Geschäftsführerin unser Kaffee-Drama erzählt.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Sie lachte und sagte:
          </p>

          <blockquote className="text-lg italic text-logo-brown border-l-4 border-logo-brown/30 pl-6 my-6">
            „Wir hatten genau das Gleiche. Heute zahlen wir 30 % weniger und wenn was ist, ist unser Kaffee-Mann in 1–2 Tagen da."
          </blockquote>

          <p className="text-lg leading-relaxed mb-6">
            Ich dachte erst, sie meint einfach einen anderen Großanbieter.<br />
            Aber sie erzählte von einem kleinen, regionalen Servicepartner:
          </p>

          <blockquote className="text-lg italic text-logo-brown border-l-4 border-logo-brown/30 pl-6 my-6">
            „Der heißt Dietrich. Der verkauft genau die gleichen Profi-Automaten, die die großen Marken nutzen. Nur eben ohne Logo-Aufschlag. Und er ist selbst der Techniker."
          </blockquote>

          <p className="text-lg leading-relaxed mb-6">
            Sie gab mir seine Nummer.<br />
            Ich rief am nächsten Tag an.
          </p>

          <h3 className="lato-bold text-xl md:text-2xl text-logo-brown mt-10 mb-6">
            Was ich am Telefon hörte, hat mich ehrlich überrascht
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            Herr Dietrich wirkte am Telefon nicht wie ein „Vertriebler".<br />
            Eher wie ein Handwerker, der einfach seinen Job gut machen will.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Er erklärte mir in einfachen Worten:
          </p>

          <ul className="list-disc list-inside space-y-2 mb-8 text-lg">
            <li>Er kauft die Profi-Automaten direkt zu den offiziellen Listenpreisen</li>
            <li>Er nimmt seinen fairen Service-Aufschlag – fertig</li>
            <li>Große Marken schlagen auf diesen Listenpreis oft nochmal rund 30–40 % drauf</li>
            <li>Für genau dieselbe Maschine, oft vom gleichen Werk</li>
            <li>Er zwingt niemanden in 5-Jahres-Verträge – Vertragslänge wird gemeinsam festgelegt</li>
          </ul>

          <p className="text-lg leading-relaxed mb-6">
            Und dann sagte er einen Satz, der hängen blieb:
          </p>

          <blockquote className="text-xl italic text-logo-brown border-l-4 border-logo-blue pl-6 my-8">
            „Ich brauche keine 500 Kunden. Ich brauche nur ein paar loyale Firmen in der Region, denen ich ehrlich diene. Deswegen kann ich im Notfall auch in 1–3 Tagen da sein."
          </blockquote>

          <p className="text-lg leading-relaxed mb-6">
            Ich hatte das Gefühl:<br />
            Das ist das Gegenteil von dem, was wir bisher hatten.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Also haben wir uns getroffen.
          </p>

          <h3 className="lato-bold text-xl md:text-2xl text-logo-brown mt-10 mb-6">
            Die Wahrheit über „unsere" alte Maschine
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            Beim Termin wurde es fast schon peinlich.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Herr Dietrich sah unsere Leasing-Maschine an, lächelte und sagte:
          </p>

          <blockquote className="text-lg italic text-logo-brown border-l-4 border-logo-brown/30 pl-6 my-6">
            „Das ist die OCX von Gerhardt – ein richtig gutes Gerät.<br />
            Ich habe genau dasselbe Modell im Programm - einfach ohne eigenes Logo."
          </blockquote>

          <p className="text-lg leading-relaxed mb-6">
            Dann nannte er mir den Preis, den wir bei ihm zahlen würden.<br />
            Es waren rund 30 % weniger als aktuell – bei ähnlicher Leistung.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Und:<br />
            Wir hätten keine 5-Jahres-Knebelbindung.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            In dem Moment wurde mir klar:<br />
            <strong>Wir hatten die ganze Zeit für das Schild am Blechkasten bezahlt.</strong>
          </p>

          <h2 className="lato-bold text-2xl md:text-3xl text-logo-brown mt-12 mb-6">
            Was sich nach dem Wechsel wirklich verändert hat
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Wir haben den Vertrag mit dem Großanbieter auslaufen lassen.<br />
            Parallel dazu mit Herrn Dietrich einen neuen Vertrag gemacht.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Unsere Bedingungen heute:
          </p>

          <div className="bg-logo-blue/5 p-6 rounded-lg mb-8">
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✓</span>
                Profi-Automat (gleiche Qualitätsklasse wie vorher)
              </li>
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✓</span>
                30–40 % geringere laufende Kosten
              </li>
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✓</span>
                Vertragslaufzeit, die wir selbst mitbestimmt haben
              </li>
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✓</span>
                Service in 1–3 Tagen, nicht erst in 2–3 Wochen
              </li>
              <li className="flex items-start">
                <span className="text-logo-blue mr-3">✓</span>
                Direkter Kontakt zum Chef selbst, kein Callcenter
              </li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Und der Effekt im Alltag?
          </p>

          <ul className="list-disc list-inside space-y-2 mb-8 text-lg">
            <li>Keine Diskussionen mehr, wer die Maschine reinigt – das ist im Servicepaket geregelt</li>
            <li>Keine „Plörre" mehr – der Kaffee schmeckt deutlich besser</li>
            <li>Weniger Coffee-Runs zum Bäcker</li>
            <li>Mitarbeiter sind sichtbar zufriedener</li>
            <li>Ich muss mir keine Vorwürfe mehr machen, wenn was kaputtgeht</li>
          </ul>

          <p className="text-lg leading-relaxed mb-6">
            Das Beste:<br />
            Als wir neulich wieder einen Defekt hatten, war Herr Dietrich am nächsten Tag da.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Die Maschine lief wieder, bevor überhaupt jemand ernsthaft meckern konnte.
          </p>

          <h2 className="lato-bold text-2xl md:text-3xl text-logo-brown mt-12 mb-6">
            Warum Sie von diesem Modell fast nie hören
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Ich habe Herrn Dietrich gefragt, warum nicht „alle" so arbeiten wie er.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Seine Antwort war simpel:
          </p>

          <blockquote className="text-xl italic text-logo-brown border-l-4 border-logo-blue pl-6 my-8">
            „Die großen Marken verdienen am meisten an langen Verträgen und hohen Aufschlägen.<br />
            Ich verdiene am meisten an langfristigem Vertrauen."
          </blockquote>

          <p className="text-lg leading-relaxed mb-6">
            Er möchte nicht mit Werbung die ganze Region zupflastern.<br />
            Er kann es auch gar nicht – er ist aktuell noch Ein-Mann-Betrieb mit Partnern im Hintergrund.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Das bedeutet:
          </p>

          <ul className="list-disc list-inside space-y-2 mb-8 text-lg">
            <li>Seine Kapazität ist begrenzt</li>
            <li>Er kann nur eine bestimmte Zahl an Betrieben gut betreuen</li>
            <li>Er nimmt lieber weniger Kunden, die dafür sehr zufrieden sind</li>
          </ul>

          <p className="text-lg leading-relaxed mb-6">
            Genau das macht dieses Modell so spannend – und gleichzeitig so selten.
          </p>

          <h2 className="lato-bold text-2xl md:text-3xl text-logo-brown mt-12 mb-6">
            Für wen sich dieser „Geheimtipp" wirklich lohnt
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Ehrlich gesagt:<br />
            Wenn Sie ein Ein-Personen-Büro sind, das einen Filterkaffee am Tag trinkt, ist das nicht für Sie.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Aber wenn Sie:
          </p>

          <ul className="list-disc list-inside space-y-2 mb-8 text-lg">
            <li>Ein Büro, eine Praxis, Werkstatt, Kanzlei, Agentur oder Betrieb mit mindestens 5–10 Kaffeetrinkern sind</li>
            <li>Genervt sind von schlechtem Service, dreckigen Maschinen, Streit um Kaffeekassen</li>
            <li>Keine Lust mehr auf 5-Jahres-Verträge und Logo-Aufschläge haben</li>
            <li>Und einfach eine faire, ehrliche Lösung aus der Region wollen</li>
          </ul>

          <p className="text-lg leading-relaxed mb-6">
            …dann sollten Sie dieses Modell zumindest einmal prüfen.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Genau dafür gibt es jetzt einen kurzen Online-Check, den ich mir damals gewünscht hätte.
          </p>

          <h2 className="lato-bold text-2xl md:text-3xl text-logo-brown mt-12 mb-6">
            Jetzt testen, ob Dietrich Sie überhaupt noch annehmen kann
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Weil ich so gute Erfahrungen gemacht habe, habe ich Herrn Dietrich gefragt, ob er für andere Betriebe aus der Region auch so eine unverbindliche Prüfung anbietet.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Er hat zugestimmt – solange er noch Kapazität hat.
          </p>

          <div className="bg-logo-blue/10 p-8 rounded-lg my-12 text-center">
            <p className="text-lg mb-6">
              👉 Klicken Sie auf den Button unten und beantworten Sie 2–3 kurze Fragen.
            </p>
            
            <p className="text-lg mb-6">
              Sie sehen dann:
            </p>

            <ul className="text-left list-disc list-inside space-y-2 mb-8 text-lg max-w-2xl mx-auto">
              <li>Ob Ihr Betrieb grundsätzlich in sein Gebiet und Konzept passt</li>
              <li>Wie groß Ihr Sparpotenzial in etwa ist (oft 30–40 %)</li>
              <li>Und wie schnell im Störungsfall ein 1–3-Tage-Service möglich wäre</li>
            </ul>

            <p className="text-lg mb-8">
              Die Prüfung ist kostenlos und unverbindlich.<br />
              Es ist kein Abschluss, sondern einfach eine ehrliche Einschätzung.
            </p>

            <a
              href="/kaffeemaschinen-check"
              className="inline-block bg-logo-blue text-white px-8 py-4 text-xl lato-bold rounded-lg hover:bg-logo-blue/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue"
            >
              Jetzt kostenlos prüfen, ob Sie bis zu 40 % sparen können
            </a>

            <p className="text-sm text-logo-brown/70 mt-4">
              (Kein Risiko, keine Verpflichtung. Kapazität aktuell noch begrenzt.)
            </p>
          </div>

          <h2 className="lato-bold text-2xl md:text-3xl text-logo-brown mt-12 mb-6">
            Fazit aus Sicht einer Büro-Managerin:
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Wenn ich eines gelernt habe, dann das:
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Gleiche Profi-Automaten wie bei den großen Marken – nur 30–40 % günstiger und mit 1–3-Tage-Service vor Ort – sind möglich.<br />
            Man muss nur den richtigen Anbieter kennen.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            Bevor Sie den nächsten 5-Jahres-Vertrag unterschreiben oder noch ein Jahr „Plörre" ertragen:
          </p>

          <div className="text-center mb-12">
            <a
              href="/kaffeemaschinen-check"
              className="inline-block bg-logo-blue text-white px-8 py-4 text-xl lato-bold rounded-lg hover:bg-logo-blue/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue"
            >
              Hier klicken und in 2 Minuten kostenlos prüfen, ob dieses Modell auch für Ihren Betrieb möglich ist.
            </a>
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