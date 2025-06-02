import Image from 'next/image';
import ScrollIndicator from './ScrollIndicator'; // Assuming ScrollIndicator is in the same folder or adjust path
import useScrollTrigger from '@/hooks/useScrollTrigger';

const HeroSection = () => {
  const [heroRef, isHeroVisible] = useScrollTrigger({ threshold: 0.1, reset: false });

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center items-center bg-brand-cream text-center relative overflow-hidden p-6"
    >
      <div 
        className={`transition-opacity duration-1000 ease-in-out ${isHeroVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* The animate-logo-reveal class was removed as the SVG is now static and tailwind.config.js removed the animation definition */}
        <div className="mb-8 w-64 h-auto md:w-80 mx-auto"> 
          <Image 
            src="/images/hueneu-logo-animated.svg" 
            alt="hueneu logo" 
            width={320} 
            height={80} 
            priority 
          />
        </div>
        <h1 className="font-display text-2xl md:text-3xl text-brand-charcoal mb-4 animate-fade-in-up [animation-delay:700ms]">
          Where stories find their aesthetic.
        </h1>
        <p className="font-sans text-base md:text-lg text-brand-charcoal/80 max-w-md mx-auto mb-10 animate-fade-in-up [animation-delay:900ms]">
          We craft designs that whisper loud stories, creating intentional and evocative brand experiences.
        </p>
        <a 
          href="#story" 
          className="bg-brand-gold text-brand-charcoal font-display font-semibold py-3 px-8 rounded-soft hover:bg-yellow-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-opacity-50 animate-fade-in-up [animation-delay:1100ms]"
        >
          Discover Our Story
        </a>
      </div>
      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
