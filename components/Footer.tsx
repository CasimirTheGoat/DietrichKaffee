import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
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

        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="lato-bold text-xl mb-4">Kontakt</h3>
            <div className="space-y-2 text-gray-300">
              <p className="font-semibold text-white">Mirko Dietrich</p>
              <p>Telefon: <a href="tel:+4915206386702" className="hover:text-white">+49 1520 638 67 02</a></p>
              <p className="text-sm pt-2">Servicegebiet: Freiburg und Umgebung, Lörrach, Baden-Württemberg</p>
            </div>
          </div>

          <div>
            <h3 className="lato-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/kaffeemaschinen" className="hover:text-white">Kaffeemaschinen</a></li>
              <li><a href="/vollautomaten" className="hover:text-white">Vollautomaten</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/kontakt" className="hover:text-white">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h3 className="lato-bold text-xl mb-4">Partner</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="https://www.cimbali.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">La Cimbali</a></li>
              <li><a href="https://www.thermoplan.ch" target="_blank" rel="noopener noreferrer" className="hover:text-white">Thermoplan</a></li>
              <li><a href="https://www.reneka.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Reneka</a></li>
              <li><a href="https://www.brita.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">BRITA</a></li>
              <li><a href="https://www.topwasser.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">TOPWASSER</a></li>
            </ul>
          </div>

          <div>
            <h3 className="lato-bold text-xl mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/legal#impressum" className="hover:text-white">Impressum</a></li>
              <li><a href="/legal#datenschutz" className="hover:text-white">Datenschutzerklärung</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray">
          <div>
            © {new Date().getFullYear()} Dietrich Kaffee. Alle Rechte vorbehalten.
          </div>
          <div className="flex items-center gap-1 text-logo-pink">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span className="ml-2 text-gray">Seit 2010 · Freiburg · Lörrach · Basel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}