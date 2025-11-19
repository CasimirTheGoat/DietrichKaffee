import Image from 'next/image';

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

export default function BlogTeaser() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {blogPosts.map(post => (
        <article key={post.slug} className="bg-white border-2 border-coffee-brown/20 overflow-hidden hover:border-vibrant-blue transition-all group">
          <div className="aspect-video bg-coffee-brown/10 relative overflow-hidden">
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
              <span className="font-semibold">{post.category}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-logo-blue transition-colors">
              {post.title}
            </h3>
            <p className="text-logo-brown/70 text-sm mb-4 leading-relaxed">
              {post.excerpt}
            </p>
            <a
              href={`/blog/${post.slug}`}
              className="inline-block text-logo-blue font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-logo-blue"
              aria-label={`Weiterlesen: ${post.title}`}
            >
              Weiterlesen →
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
