import Image from 'next/image';
import Header from '@/components/Header';
import NewsletterSignupForm from '@/components/NewsletterSignupForm';

const blogPosts = [
  {
    slug: 'siebtraeger-oder-vollautomat-so-treffen-sie-die-richtige-entscheidung',
    title: 'Siebträger oder Vollautomat? So treffen Sie die richtige Entscheidung für Ihr Unternehmen',
    category: 'Kaufberatung',
    readTime: '8 Min.',
    image: '/images/comparison.png',
    excerpt: 'Warum diese Entscheidung wichtiger ist, als viele denken – und wie Sie die richtige Wahl für Ihren Betrieb treffen.',
    date: '2024-11-19'
  },
  {
    slug: 'das-sollten-sie-lesen-bevor-sie-einen-kaffeeautomaten-anschaffen',
    title: 'Das sollten Sie lesen, bevor Sie einen Kaffeeautomaten anschaffen',
    category: 'Kaufberatung',
    readTime: '6 Min.',
    image: '/images/big_industry_coffee_machine.webp',
    excerpt: 'Diesen teuren Fehler machen viele Firmen und Praxen – und wie Sie ihn vermeiden.',
    date: '2024-11-12'
  },
  {
    slug: 'mein-team-war-kurz-davor-wegen-kaffee-zu-rebellieren',
    title: 'Mein Team war kurz davor, wegen Kaffee zu rebellieren.',
    category: 'Erfahrungsbericht',
    readTime: '7 Min.',
    image: '/images/kaffeemaschine-buero.webp',
    excerpt: '„Ich dachte, ein Profi-Anbieter wäre die sicherste Lösung. Am Ende zahlten wir 5 Jahre lang zu viel – und saßen trotzdem wochenlang ohne Kaffee da."',
    date: '2024-11-09'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-logo-brown">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-logo-brown/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="lato-black text-4xl md:text-5xl mb-4 text-logo-brown">
              Kaffee-Wissen & Praxis-Tipps
            </h1>
            <p className="text-lg md:text-xl text-logo-brown/70 max-w-3xl mx-auto leading-relaxed">
              Alles rund um Kaffeemaschinen, Vollautomaten und perfekten Kaffeegenuss – 
              aus der Praxis für die Praxis.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <article key={post.slug} className="bg-white border-2 border-logo-brown/20 overflow-hidden hover:border-logo-blue transition-all group">
                <div className="aspect-video bg-logo-brown/10 relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-logo-brown/60 mb-3">
                    <span className="lato-bold">{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{new Date(post.date).toLocaleDateString('de-DE')}</span>
                  </div>
                  <h2 className="text-xl lato-bold mb-3 group-hover:text-logo-blue transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-logo-brown/70 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-block text-logo-blue lato-bold hover:underline focus:outline-none focus:ring-2 focus:ring-logo-blue"
                    aria-label={`Weiterlesen: ${post.title}`}
                  >
                    Weiterlesen →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSignupForm />

      {/* Footer */}
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
                <li><a href="/kaffeemaschinen" className="hover:text-white">Siebträger</a></li>
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