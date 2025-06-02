import Head from 'next/head';
import HeroSection from '@/components/HeroSection';
import HueneuStorySection from '@/components/HueneuStorySection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import WhyHueneuSection from '@/components/WhyHueneuSection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>hueneu | Where stories find their aesthetic.</title>
        <meta name="description" content="hueneu is a graphic design studio that creates designs that whisper loud stories. Specializing in branding, packaging, and story-first design." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> {/* Assuming a favicon will be added later */}
      </Head>
      {/* Sections are rendered sequentially. Navigation from Header will scroll to the ID within each component. */}
      <HeroSection />
      <HueneuStorySection /> {/* Component's root <section> should have id="story" */}
      <WhatWeDoSection />    {/* Component's root <section> should have id="what-we-do" */}
      <WhyHueneuSection />   {/* Component's root <section> should have id="why-hueneu" */}
      <ContactSection />     {/* Component's root <section> should have id="contact" */}
    </>
  );
}
