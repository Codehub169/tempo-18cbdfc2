import { useScrollTrigger } from '../hooks/useScrollTrigger';

const WhyHueneuSection = () => {
  const [containerRef, isVisible] = useScrollTrigger({ threshold: 0.3, reset: false });
  const [text1Ref, isText1Visible] = useScrollTrigger({ threshold: 0.5, reset: false });
  const [text2Ref, isText2Visible] = useScrollTrigger({ threshold: 0.5, reset: false });
  const [text3Ref, isText3Visible] = useScrollTrigger({ threshold: 0.5, reset: false });

  return (
    <section 
      id="why-hueneu" 
      ref={containerRef}
      className="min-h-screen py-24 px-8 md:px-16 bg-charcoal text-cream flex flex-col justify-center items-center text-center"
    >
      <div className={`transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-gold">
          Why hueneu?
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-10">
          <p 
            ref={text1Ref}
            className={`font-sans text-xl md:text-2xl leading-relaxed transition-all duration-1000 ease-in-out ${isText1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            We don’t just design—<span className="text-gold">we decode stories</span>. Your narrative is our muse, guiding every color choice, every line drawn, every pixel placed.
          </p>
          <p 
            ref={text2Ref}
            className={`font-sans text-xl md:text-2xl leading-relaxed transition-all duration-1000 ease-in-out ${isText2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${isText2Visible ? '200ms' : '0ms'}` }}
          >
            Ours are designs that speak quietly but <span className="italic">stay with you</span>, fostering a sense of calm, a hint of mystery, and a perfect balance between the bold and the understated.
          </p>
          <p 
            ref={text3Ref}
            className={`font-sans text-xl md:text-2xl leading-relaxed transition-all duration-1000 ease-in-out ${isText3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${isText3Visible ? '400ms' : '0ms'}` }}
          >
            With hueneu, you find more than a studio; you find a partner dedicated to translating your essence into an unforgettable visual language.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyHueneuSection;
