import Image from 'next/image';

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-scroll-indicator-bounce cursor-pointer">
      <span className="text-xs text-charcoal mb-2 font-sans">Scroll</span>
      <Image 
        src="/images/scroll-indicator.svg" 
        alt="Scroll down indicator" 
        width={24} 
        height={24} 
      />
    </div>
  );
};

export default ScrollIndicator;
