import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* Added padding-top to main to account for the fixed header height. 
          Header has py-3 (0.75rem * 2 = 1.5rem = 24px) + logo height 40px = 64px total.
          pt-20 (5rem = 80px) provides a 16px buffer on mobile.
          md:pt-[76px] provides a 12px buffer on medium screens and up. */}
      <main className="pt-20 md:pt-[76px]">
        {children}
      </main>
    </>
  );
};

export default Layout;