import { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { contactInfo, socialLinks, bookingUrl } from '../data/company';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMobileMenu();
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg' : ''
    }`} style={{ backgroundColor: '#f2f0e8' }}>
      {/* Top Bar */}
      <div className="hidden lg:flex justify-between items-center px-[5%] py-2 text-xs text-stone-700 border-b border-stone-300">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Mail className="w-3 h-3" />
            {contactInfo.email}
          </span>
        </div>
        <div className="flex gap-4">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-900 transition-colors"
          >
            Instagram
          </a>
          <a
            href={socialLinks.facebook}
            className="hover:text-stone-900 transition-colors"
          >
            Facebook
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center px-[5%] h-20 lg:h-24 relative">
        {/* Left Navigation */}
        <div className="hidden lg:flex items-center flex-1 justify-start">
          <nav className="flex gap-8">
            <button
              onClick={() => scrollToSection('treatments')}
              className="text-stone-700 font-semibold text-lg tracking-wide hover:text-stone-900 transition-colors relative group"
            >
              BEHANDLINGAR
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-stone-700 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-stone-700 font-semibold text-lg tracking-wide hover:text-stone-900 transition-colors relative group"
            >
              OM OSS
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-stone-700 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <button onClick={() => scrollToSection('hero')} className="block">
            <img
              src="/LOGOTYP.png"
              alt="Dr. Hadde Beauty Logotyp"
              className="h-8 lg:h-10"
            />
          </button>
        </div>

        {/* Right Navigation */}
        <div className="hidden lg:flex items-center flex-1 justify-end">
          <nav className="flex gap-8 items-center">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-700 font-semibold text-lg tracking-wide hover:text-stone-900 transition-colors relative group"
            >
              PRISLISTA
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-stone-700 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-stone-700 font-semibold text-lg tracking-wide hover:text-stone-900 transition-colors relative group"
            >
              KONTAKT
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-stone-700 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-700 text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-stone-800 hover:text-white border border-stone-700 transition-all duration-300 hover:-translate-y-1 ml-4"
            >
              Boka Tid
            </a>
          </nav>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-stone-700 p-2"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden fixed top-0 left-0 w-80 max-w-[80%] h-full bg-stone-200 z-50 transform transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } shadow-xl`}>
        <div className="flex flex-col items-center justify-center h-full">
          <button
            onClick={closeMobileMenu}
            className="absolute top-5 right-5 text-stone-700 text-3xl"
          >
            ×
          </button>

          <nav className="flex flex-col items-center gap-8 text-2xl">
            <button
              onClick={() => scrollToSection('treatments')}
              className="text-stone-700 hover:text-stone-900 transition-colors"
            >
              BEHANDLINGAR
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-stone-700 hover:text-stone-900 transition-colors"
            >
              OM OSS
            </button>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-700 hover:text-stone-900 transition-colors"
              onClick={closeMobileMenu}
            >
              PRISLISTA
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-stone-700 hover:text-stone-900 transition-colors"
            >
              KONTAKT
            </button>
          </nav>

          <div className="mt-10 text-center">
            <div className="flex gap-6 justify-center mb-4">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-700 hover:text-stone-900 text-lg"
              >
                Instagram
              </a>
              <a
                href={socialLinks.facebook}
                className="text-stone-700 hover:text-stone-900 text-lg"
              >
                Facebook
              </a>
            </div>
            <div className="text-stone-700 text-sm">
              <p>{contactInfo.email}</p>
              <p>{contactInfo.phone}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMobileMenu}
        />
      )}
    </header>
  );
};

export default Header;