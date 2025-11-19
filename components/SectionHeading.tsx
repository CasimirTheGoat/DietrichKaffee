interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  className = ''
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="lato-black text-4xl md:text-5xl mb-4 text-logo-brown tracking-wide-custom">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-logo-brown/70 max-w-3xl mx-auto leading-relaxed tracking-wide-custom">
          {subtitle}
        </p>
      )}
    </div>
  );
}
