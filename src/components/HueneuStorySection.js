import Image from 'next/image';
import useScrollTrigger from '@/hooks/useScrollTrigger';

const HueneuStorySection = () => {
  const [storyRef, isStoryVisible] = useScrollTrigger({ threshold: 0.3 });
  const [whoKnewRef, isWhoKnewVisible] = useScrollTrigger({ threshold: 0.6, reset: false });

  return (
    <section 
      id="story" 
      ref={storyRef} 
      className="min-h-screen bg-cream flex flex-col justify-center items-center py-20 px-6 md:px-12 lg:px-24 text-center overflow-hidden"
    >
      <div 
        className={`transition-opacity duration-1000 ease-in-out ${isStoryVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-6">
          The <span className="text-accent">hue</span> in <span className="text-charcoal/70">neu</span>.
        </h2>
        <p className="font-sans text-lg md:text-xl text-charcoal/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          Hueneu is a whisper of inspiration. &quot;Hue&quot; represents the vibrant bursts of creativity, the unexpected color in a quiet frame. &quot;Neu&quot; is the grounding neutrality, the calm canvas upon which stories unfold with intention and balance.
        </p>
        <p className="font-sans text-lg md:text-xl text-charcoal/80 max-w-2xl mx-auto mb-12 md:mb-20 leading-relaxed">
          We believe in design that speaks softly but resonates deeply, creating moments of quiet delight and profound connection.
        </p>
      </div>

      <div 
        ref={whoKnewRef} 
        className="relative w-52 h-32 md:w-64 md:h-40 mt-4 mb-10 md:mb-0 group"
      >
        {/* This div is for the animated pop-out effect */}
        <div 
          className={`absolute inset-0 transition-all duration-700 ease-out transform flex justify-center items-center ${isWhoKnewVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-12'}`}
        >
          <Image 
            src="/images/who-knew-popout.svg" 
            alt="Who Knew? playful pop-out graphic" 
            width={200} 
            height={120}
            className="drop-shadow-lg group-hover:scale-110 transition-transform duration-300 ease-out"
          />
        </div>
        <p className={`absolute -bottom-2 left-1/2 -translate-x-1/2 text-sm text-charcoal/70 transition-opacity duration-500 delay-500 ${isWhoKnewVisible ? 'opacity-100' : 'opacity-0'}`}> 
          (A little surprise!)
        </p>
      </div>
    </section>
  );
};

export default HueneuStorySection;
