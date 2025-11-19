export default function LogosRow() {
  const logos = [
    { name: 'La Cimbali', url: 'https://www.cimbali.com' },
    { name: 'Thermoplan', url: 'https://www.thermoplan.ch' },
    { name: 'Reneka', url: 'https://www.reneka.com' }
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-8 mb-8 opacity-60">
      {logos.map(logo => (
        <a
          key={logo.name}
          href={logo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition-colors text-sm font-medium"
          aria-label={`Besuche ${logo.name} Website`}
        >
          {logo.name}
        </a>
      ))}
      <div className="flex items-center gap-1 text-yellow-500">
        {[...Array(5)].map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <span className="text-gray-600 text-sm">Seit 2010</span>
    </div>
  );
}
