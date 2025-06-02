import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/80 backdrop-blur-md shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          {/* Using a slightly smaller version of the logo for the header */}
          <Image src="/images/hueneu-logo-animated.svg" alt="hueneu logo" width={160} height={40} priority />
        </Link>
        <ul className="flex items-center space-x-4 md:space-x-6">
          <li><Link href="/#story" className="font-sans text-sm md:text-base text-brand-charcoal hover:text-brand-gold transition-colors">Story</Link></li>
          <li><Link href="/#what-we-do" className="font-sans text-sm md:text-base text-brand-charcoal hover:text-brand-gold transition-colors">Services</Link></li>
          <li><Link href="/#why-hueneu" className="font-sans text-sm md:text-base text-brand-charcoal hover:text-brand-gold transition-colors">Why Us</Link></li>
          <li><Link href="/#contact" className="font-sans text-sm md:text-base text-brand-charcoal hover:text-brand-gold transition-colors">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;