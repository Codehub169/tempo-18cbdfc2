import Image from 'next/image';
import useScrollTrigger from '@/hooks/useScrollTrigger';

const services = [
  { name: 'Branding', icon: '/icons/branding.svg', copy: 'Branding, but make it bloom.' },
  { name: 'Packaging', icon: '/icons/packaging.svg', copy: 'Packaging, but make it poetic.' },
  { name: 'Social Media', icon: '/icons/social-media.svg', copy: 'Social Media, but make it sing.' },
  { name: 'Stationery', icon: '/icons/stationery.svg', copy: 'Stationery, but make it storytell.' },
  { name: 'Coffee Table Books', icon: '/icons/coffee-table-books.svg', copy: 'Books, but make them breathe.' },
  { name: 'Creative Projects', icon: '/icons/creative-projects.svg', copy: 'Ideas, but make them ignite.' },
];

const ServiceItem = ({ service, index }) => {
  const [itemRef, isItemVisible] = useScrollTrigger({ threshold: 0.2, reset: false });
  return (
    <div 
      ref={itemRef}
      className={`bg-white/50 p-8 rounded-soft shadow-lg hover:shadow-xl transition-all duration-700 ease-in-out transform hover:-translate-y-1 flex flex-col items-center text-center ${isItemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${isItemVisible ? index * 100 : 0}ms` }}
    >
      <div className="mb-6 w-16 h-16 relative text-brand-gold">
        {/* Removed filter-gold class as it's not defined in Tailwind config and its effect depends on SVG structure or custom CSS. 
            If SVGs use 'currentColor' for fill/stroke, text-brand-gold on parent will color them. 
            If SVGs are pre-colored, this class would need a CSS filter definition. */}
        <Image src={service.icon} alt={`${service.name} icon`} layout="fill" />
      </div>
      <h3 className="font-display text-2xl font-semibold mb-3 text-brand-charcoal">{service.name}</h3>
      <p className="font-sans text-brand-charcoal/70 text-sm leading-relaxed">{service.copy}</p>
    </div>
  );
};

const WhatWeDoSection = () => {
  const [sectionRef, isSectionVisible] = useScrollTrigger({ threshold: 0.1, reset: false });

  return (
    <section id="what-we-do" ref={sectionRef} className="min-h-screen py-20 px-8 md:px-16 bg-brand-cream text-brand-charcoal flex flex-col justify-center items-center">
      <div className={`transition-all duration-1000 ease-in-out ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-center">
          Our Palette of Possibilities
        </h2>
        <p className="font-sans text-lg md:text-xl text-center mb-16 max-w-2xl mx-auto text-brand-charcoal/80">
          From pixels to print, we craft experiences that resonate. Each project is a new canvas, a fresh story waiting to unfold.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 w-full max-w-5xl">
        {services.map((service, index) => (
          <ServiceItem key={service.name} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default WhatWeDoSection;
