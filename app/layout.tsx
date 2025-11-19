import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import CookieBanner from '@/components/CookieBanner';

export const metadata: Metadata = {
  title: 'Dietrich Kaffee – Kaffeemaschinen & Vollautomaten für Unternehmen',
  description: 'Professionelle Beratung, Verkauf & Service für Kaffeemaschinen und Vollautomaten. La Cimbali, Thermoplan, Reneka – für Büro, Gastronomie & Hotels.',
  keywords: 'Kaffeemaschinen, Vollautomaten, La Cimbali, Thermoplan, Büro Kaffee, Kaffeelösungen',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/images/logo/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logo/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/logo/favicon/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logo/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/images/logo/favicon/site.webmanifest" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1833577080591208');
              fbq('track', 'PageView');
            `
          }}
        />
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display:'none'}}
            src="https://www.facebook.com/tr?id=1833577080591208&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        
        <Script
          id="json-ld-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Dietrich Kaffee',
              description: 'Spezialist für Kaffeemaschinen und Vollautomaten',
              url: 'https://dietrichkaffee.de',
              telephone: '+49-1520-638-6702',
              email: 'hallo@dietrichkaffee.de',
              areaServed: 'Deutschland & Schweiz',
              priceRange: '$$'
            })
          }}
        />
      </head>
      <body className="lato-regular">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}