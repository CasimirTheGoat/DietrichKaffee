import Image from 'next/image';

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white text-coffee-brown">
      <header className="bg-anthracite text-white py-6">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-4">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo/logo.png"
              alt="Dietrich Kaffee Logo"
              width={192}
              height={48}
              className="brightness-0 invert"
              priority
            />
          </a>
          <a href="/" className="text-2xl font-bold hover:text-gray-300 transition-colors">
            ← Zurück
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <section id="impressum" className="mb-20">
          <h1 className="text-4xl font-bold mb-8">Impressum</h1>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-black mb-2">Angaben gemäß § 5 TMG</h2>
              <p>Dietrich Kaffee</p>
              <p>Mirko Dietrich</p>
              <p>Auerstraße 2</p>
              <p>79108 Freiburg im Breisgau</p>
              <p>Deutschland</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-black mb-2">Kontakt</h2>
              <p>Telefon: <a href="tel:+4915206386702" className="text-black underline hover:no-underline">+49 1520 638 6702</a></p>
              <p className="mt-2">Website: www.dietrichkaffee.de</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-black mb-2">Vertreten durch</h2>
              <p>Mirko Dietrich</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-black mb-2">Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: [bitte ergänzen, falls vorhanden]</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-black mb-2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
              <p>Mirko Dietrich</p>
              <p>Auerstraße 2</p>
              <p>79108 Freiburg im Breisgau</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-black mb-2">EU-Streitschlichtung</h2>
              <p>
                Plattform der EU-Kommission zur Online-Streitbeilegung (OS-Plattform):{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black underline hover:no-underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-2">
                Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-black mb-2">Haftungsausschluss</h2>
              <p>
                Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird keine Gewähr übernommen.
              </p>
              <p className="mt-2">
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für externe Links. Für den Inhalt verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-black mb-2">Urheberrecht</h2>
              <p>
              </p>
            </div>
          </div>
        </section>

        <section id="datenschutz">
          <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-black mb-4">1. Verantwortlicher</h2>
              <div className="space-y-1">
                <p>Dietrich Kaffee</p>
                <p>Mirko Dietrich</p>
                <p>Auerstraße 2</p>
                <p>79108 Freiburg im Breisgau</p>
                <p>Deutschland</p>
                <p>Telefon: +49 1520 638 6702</p>
                <p>E-Mail: vertrieb@dietrichkaffee.de</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">2. Erhebung und Speicherung personenbezogener Daten</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-2">Zugriffsdaten / Server-Logfiles:</h3>
                <p>IP-Adresse, Datum/Uhrzeit, aufgerufene Seite, Referrer, Browser, Endgerät.</p>
                <p>Zweck: Betriebssicherheit, Fehleranalyse, Optimierung.</p>
                <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Kontaktformulare / E-Mail / Telefon:</h3>
                <p>Daten, die Sie uns mitteilen (z. B. Name, E-Mail, Nachricht), werden zur Bearbeitung Ihrer Anfrage gespeichert.</p>
                <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertrag/Anbahnung) oder lit. f (berechtigtes Interesse).</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">3. Cookies und Analyse-Tools</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-2">Notwendige Cookies:</h3>
                <p>Für den Betrieb der Website erforderlich. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-2">Analyse-Cookies (z. B. Google Analytics):</h3>
                <p>Nur mit Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).</p>
                <p>Die IP-Anonymisierung ist aktiviert. Ein Vertrag zur Auftragsverarbeitung mit Google besteht.</p>
                <p>Ihre Einwilligung können Sie im Cookie-Banner jederzeit widerrufen.</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-black mb-2">Microsoft Clarity:</h3>
                <p>Zur anonymisierten Nutzungsanalyse. Datenverarbeitung auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Meta Pixel (Facebook Pixel):</h3>
                <p>Diese Website nutzt den Meta Pixel der Meta Platforms Ireland Ltd., 4 Grand Canal Square, Dublin 2, Irland, zur Analyse und Optimierung von Werbemaßnahmen.</p>
                <p>Mithilfe des Pixels kann das Verhalten von Websitebesuchern nachverfolgt werden, nachdem diese eine Anzeige gesehen oder angeklickt haben (Conversion-Tracking).</p>
                <p>Die Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).</p>
                <p>Ihre Einwilligung können Sie jederzeit über die Cookie-Einstellungen widerrufen.</p>
                <p>Weitere Informationen: <a href="https://www.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:no-underline">https://www.facebook.com/about/privacy/</a></p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">4. Weitergabe von Daten</h2>
              <p>Eine Weitergabe erfolgt nur:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>mit Ihrer ausdrücklichen Einwilligung,</li>
                <li>wenn es zur Vertragserfüllung erforderlich ist,</li>
                <li>oder bei gesetzlicher Verpflichtung.</li>
              </ul>
              <p className="mt-2">Keine Weitergabe zu Werbezwecken ohne Einwilligung.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">5. Speicherdauer</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Bestell-, Rechnungs- und steuerrelevante Daten: 10 Jahre</li>
                <li>Kontaktanfragen: max. 12 Monate</li>
                <li>Cookies: gemäß Laufzeit (Session / 1–2 Jahre)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">6. Ihre Rechte</h2>
              <p>Sie haben das Recht auf:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Auskunft (Art. 15 DSGVO)</li>
                <li>Berichtigung (Art. 16)</li>
                <li>Löschung (Art. 17)</li>
                <li>Einschränkung (Art. 18)</li>
                <li>Datenübertragbarkeit (Art. 20)</li>
                <li>Widerspruch (Art. 21)</li>
                <li>Widerruf von Einwilligungen (Art. 7 Abs. 3)</li>
              </ul>
              <p className="mt-2">Bitte kontaktieren Sie uns hierzu unter den oben genannten Daten.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">7. Beschwerderecht</h2>
              <p>Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, z. B.</p>
              <p>Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg,</p>
              <p>Königstraße 10 a, 70173 Stuttgart.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-4">8. Datensicherheit</h2>
              <p>Wir verwenden technische und organisatorische Maßnahmen (z. B. TLS-Verschlüsselung, Server-Sicherheitsupdates), um Ihre Daten zu schützen.</p>
            </div>

            <div>
              <p className="font-semibold">Stand: 23. Juni 2025</p>
            </div>

          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-400">
          <a href="/" className="hover:text-white">← Zurück zur Hauptseite</a>
        </div>
      </footer>
    </div>
  );
}