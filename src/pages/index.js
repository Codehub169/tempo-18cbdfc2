import Head from 'next/head';
import HeroSection from '@/components/HeroSection';
import HueneuStorySection from '@/components/HueneuStorySection';
// Import other sections here as they are created
// import WhatWeDoSection from '@/components/WhatWeDoSection';
// import WhyHueneuSection from '@/components/WhyHueneuSection';
// import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>hueneu | Where stories find their aesthetic.</title>
        <meta name="description" content="hueneu is a graphic design studio that creates designs that whisper loud stories. Specializing in branding, packaging, and story-first design." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> {/* Assuming a favicon will be added later */}
      </Head>
      <main>
        <HeroSection />
        <div id="story"> {/* This div wrapper ensures the id is at the very start of the section for accurate scrolling */} 
          <HueneuStorySection /> 
        </div>
        {/* 
        <WhatWeDoSection />
        <WhyHueneuSection />
        <ContactSection /> */}
      </main>
    </>
  );
}
