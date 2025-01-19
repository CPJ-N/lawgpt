import { useEffect, useState } from 'react';

const logos = [
  { name: 'Goldman Sachs', logo: '🏦' },
  { name: 'Morgan Stanley', logo: '🏛️' },
  { name: 'JP Morgan', logo: '💰' },
  { name: 'Deloitte', logo: '📊' },
  { name: 'KPMG', logo: '📈' },
  { name: 'EY', logo: '🔎' },
  { name: 'PwC', logo: '📋' },
  { name: 'McKinsey', logo: '💡' },
  // Add more logos as needed
];

export default function LogoCarousel() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % logos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div className="flex gap-8 py-8 animate-scroll">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center"
          >
            <div className="text-4xl">{logo.logo}</div>
            <p className="text-sm text-brand-darkblue font-medium mt-2">{logo.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
