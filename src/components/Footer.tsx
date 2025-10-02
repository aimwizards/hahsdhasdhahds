
import { MapPin, Mail } from 'lucide-react';
import { contactInfo, socialLinks, companyInfo, bookingUrl } from '../data/company';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="py-20 px-[5%] bg-stone-100 text-stone-700">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img
              src="/LOGOTYP.png"
              alt="Dr. Hadde Beauty Logotyp"
              className="h-10 w-auto mb-5 mx-auto md:mx-0"
            />
            <p className="text-stone-600 leading-relaxed text-center md:text-left">
              En estetisk klinik i hjärtat av Solna med fokus på naturliga resultat,
              säkerhet och personligt bemötande.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-5 tracking-wide text-stone-700" style={{ fontFamily: 'serif' }}>
              Genvägar
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('treatments')}
                  className="text-stone-600 hover:text-stone-900 transition-colors"
                >
                  Behandlingar
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-stone-600 hover:text-stone-900 transition-colors"
                >
                  Om Oss
                </button>
              </li>
              <li>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-600 hover:text-stone-900 transition-colors"
                >
                  Prislista
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-stone-600 hover:text-stone-900 transition-colors"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-5 tracking-wide text-stone-700" style={{ fontFamily: 'serif' }}>
              Kontakt
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="w-5 h-5 text-stone-700 mt-0.5 flex-shrink-0" />
                <div className="text-stone-600">
                  <p>{contactInfo.address.street}</p>
                  <p>{contactInfo.address.postalCode} {contactInfo.address.city}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="w-5 h-5 text-stone-700 flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-stone-600 hover:text-stone-900 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-5 tracking-wide text-stone-700" style={{ fontFamily: 'serif' }}>
              Följ Oss
            </h4>
            <p className="text-stone-600 leading-relaxed mb-5">
              Få de senaste uppdateringarna och se före- &amp; efterbilder på våra sociala medier.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-stone-900 transition-colors text-lg"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href={socialLinks.facebook}
                className="text-stone-600 hover:text-stone-900 transition-colors text-lg"
                aria-label="Facebook"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="max-w-4xl mx-auto mb-16 p-8 text-center border-t border-b border-stone-700">
          <h5 className="text-lg font-semibold mb-4 text-stone-600" style={{ fontFamily: 'serif' }}>
            Viktig Information
          </h5>
          <p className="text-stone-700 text-sm leading-relaxed mb-4">
            Vi följer lagen om estetiska injektionsbehandlingar (2021:363) och säkerställer att alla
            behandlingar utförs enligt gällande regelverk. Det innebär att:
          </p>
          <ul className="text-stone-700 text-sm leading-relaxed space-y-2 text-left max-w-2xl mx-auto">
            <li>• Du måste vara minst 18 år för att behandlas.</li>
            <li>• En obligatorisk konsultation sker minst 48 timmar innan din första behandling.</li>
            <li>• Samtliga behandlingar utförs av legitimerad vårdpersonal.</li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="text-center text-stone-500 text-sm">
          © {companyInfo.foundedYear} {companyInfo.name.toUpperCase()} | Alla rättigheter förbehållna.
        </div>
      </div>
    </footer>
  );
};

export default Footer;