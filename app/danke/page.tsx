import Image from 'next/image';
import Script from 'next/script';

export default function DankePage() {
  return (
    <div className="min-h-screen bg-white text-logo-brown">
      {/* Meta Lead Tracking */}
      <Script id="meta-lead-tracking" strategy="afterInteractive">
        {`
          if (typeof fbq !== 'undefined') {
            fbq('track', 'Lead');
          }
        `}
      </Script>

      {/* Header */}
      <header className="py-4">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Image
            src="/images/logo/logo.png"
            alt="Dietrich Kaffee Logo"
            width={180}
            height={60}
            priority
            className="mx-auto"
          />
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-green-600 text-6xl mb-6">✓</div>
            <h1 className="lato-black text-4xl md:text-5xl mb-6 text-logo-brown">
              Danke! Ihre Anfrage ist bei uns eingegangen.
            </h1>
            <p className="text-xl text-logo-brown/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Wir haben Ihre Angaben erhalten und prüfen jetzt, welche Lösung am besten zu Ihrem Betrieb passt.
            </p>
            <p className="text-lg text-logo-brown/70 mb-8 max-w-2xl mx-auto">
              Sie hören in der Regel innerhalb von 1–3 Werktagen von uns – oft sogar schneller.
            </p>
            <p className="text-lg text-logo-brown/70 mb-12 max-w-2xl mx-auto">
              Währenddessen können Sie sich zurücklehnen:<br />
              Wir melden uns persönlich bei Ihnen, nicht über ein Callcenter.
            </p>
          </div>

          {/* What happens next */}
          <div className="bg-logo-brown/5 p-8 rounded-lg mb-12 max-w-3xl mx-auto">
            <h2 className="lato-bold text-2xl text-logo-brown mb-6 text-center">
              Was passiert als Nächstes?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-green-600 mr-4 text-xl">✔️</span>
                <span className="text-logo-brown">Wir prüfen, welche Geräte zu Ihrem Bedarf passen</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-4 text-xl">✔️</span>
                <span className="text-logo-brown">Wir berechnen Ihr mögliches Einsparpotenzial</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-4 text-xl">✔️</span>
                <span className="text-logo-brown">Wir melden uns mit einer ehrlichen Einschätzung – ohne Verpflichtung</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center mb-12">
            <p className="text-lg text-logo-brown mb-4">
              Wenn etwas unklar ist, erreichen Sie uns jederzeit unter:
            </p>
            <div className="space-y-2">
              <p className="text-lg">
                📞 <a href="tel:+4915206386702" className="text-logo-blue hover:underline lato-bold">+49 1520 638 67 02</a>
              </p>
              <p className="text-lg">
                📧 <a href="mailto:vertrieb@dietrichkaffee.de" className="text-logo-blue hover:underline lato-bold">vertrieb@dietrichkaffee.de</a>
              </p>
            </div>
          </div>

          {/* Back to Homepage */}
          <div className="text-center">
            <p className="text-logo-brown/70 mb-4">Zurück zur Startseite</p>
            <a
              href="/"
              className="inline-block bg-logo-blue text-white px-8 py-4 text-lg lato-bold rounded-lg hover:bg-logo-blue/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-logo-blue"
            >
              Zur Homepage
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <Image
              src="/images/logo/logo.png"
              alt="Dietrich Kaffee Logo"
              width={192}
              height={64}
              className="brightness-0 invert"
              loading="lazy"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="lato-bold text-xl mb-4">Kontakt</h3>
              <div className="space-y-2 text-gray-300">
                <p className="lato-bold text-white">Mirko Dietrich</p>
                <p>Telefon: <a href="tel:+4915206386702" className="hover:text-white">+49 1520 638 67 02</a></p>
                <p>E-Mail: <a href="mailto:vertrieb@dietrichkaffee.de" className="hover:text-white">vertrieb@dietrichkaffee.de</a></p>
                <p className="text-sm pt-2">Servicegebiet: Freiburg und Umgebung, Lörrach, Baden-Württemberg</p>
              </div>
            </div>

            <div>
              <h3 className="lato-bold text-xl mb-4">Navigation</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/" className="hover:text-white">Startseite</a></li>
                <li><a href="/kaffeemaschinen" className="hover:text-white">Kaffeemaschinen</a></li>
                <li><a href="/vollautomaten" className="hover:text-white">Vollautomaten</a></li>
                <li><a href="/blog" className="hover:text-white">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="lato-bold text-xl mb-4">Partner</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="https://www.cimbali.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">La Cimbali</a></li>
                <li><a href="https://www.thermoplan.ch" target="_blank" rel="noopener noreferrer" className="hover:text-white">Thermoplan</a></li>
                <li><a href="https://www.reneka.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Reneka</a></li>
                <li><a href="https://www.topwasser.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">TOPWASSER</a></li>
                <li>BRITA Professional</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              © {new Date().getFullYear()} Dietrich Kaffee. Alle Rechte vorbehalten.
            </div>
            <div className="flex gap-6">
              <a href="/legal#impressum" className="hover:text-white">Impressum</a>
              <a href="/legal#datenschutz" className="hover:text-white">Datenschutzerklärung</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}