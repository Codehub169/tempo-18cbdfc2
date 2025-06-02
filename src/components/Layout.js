// Head component is no longer imported or used here, 
// as global metadata can be handled in _app.js or page-specific metadata in individual pages.

const Layout = ({ children }) => {
  return (
    <>
      {/* 
        The <Head> section previously here has been removed.
        Global SEO defaults, viewport, and favicon can be managed in a custom _document.js or _app.js if needed.
        Page-specific titles and meta descriptions are best handled in each page component (e.g., src/pages/index.js).
      */}
      {/* 
        The className properties (bg-brand-cream, text-brand-charcoal, font-sans, antialiased) 
        were removed from the <main> tag as they are already applied to the <body> tag 
        in src/styles/globals.css and will be inherited. This avoids redundancy.
        If specific styling for <main> distinct from <body> is needed in the future, 
        classes can be added here.
      */}
      <main>
        {children}
      </main>
    </>
  );
};

export default Layout;
