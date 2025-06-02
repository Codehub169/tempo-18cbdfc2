import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>hueneu - Where stories find their aesthetic.</title>
        <meta name="description" content="hueneu is a graphic design studio specializing in story-first, intentional, and evocative designs. Designs that whisper loud stories." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> {/* Placeholder, user might want a custom favicon */}
      </Head>
      <main className="bg-mutedCream text-charcoal font-sans antialiased">
        {children}
      </main>
    </>
  );
};

export default Layout;
