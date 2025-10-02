
import { ChevronDown } from 'lucide-react';
import { companyInfo, bookingUrl } from '../data/company';

const Hero: React.FC = () => {
  const scrollToTreatments = () => {
    const element = document.getElementById('treatments');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden pt-20 lg:pt-24"
      style={{
        backgroundImage: 'url(https://www.themodelskit.co.uk/wp-content/uploads/2021/07/shutterstock_1845326779.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45 z-10"></div>

      {/* Hero content */}
      <div className="relative z-20 animate-hero-fade-in" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
        <p className="text-xl md:text-2xl tracking-[4px] uppercase mb-6 font-light text-white/95" style={{ fontFamily: 'serif' }}>
          {companyInfo.location}
        </p>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide mb-5" style={{ fontFamily: 'serif' }}>
          {companyInfo.tagline}
        </h1>

        <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto px-4">
          {companyInfo.description}
        </p>

        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-8 py-4 rounded-full font-medium text-base md:text-lg
                     hover:bg-transparent hover:text-white border border-white transition-all duration-300
                     hover:-translate-y-1 shadow-lg hover:shadow-xl"
        >
          Boka Din Konsultation
        </a>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToTreatments}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-white hover:text-stone-200 transition-colors"
        aria-label="Scroll to treatments"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
};

export default Hero;