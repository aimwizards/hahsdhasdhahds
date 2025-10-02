import { useState, useEffect } from 'react';
import { ChevronRight, Sparkles, Clock, Users } from 'lucide-react';
import { treatments } from '../data/treatments';
import { resultImages } from '../data/company';
import ResultsGallery from './ResultsGallery';

const Treatments: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Preload all treatment images
  useEffect(() => {
    const preloadImages = () => {
      treatments.forEach((treatment) => {
        const img = new Image();
        img.src = treatment.image;
      });
    };

    preloadImages();
  }, []);

  return (
    <section id="treatments" className="py-20 lg:py-28 px-[5%] bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-5" style={{ fontFamily: 'serif' }}>
          Resultat från våra behandlingar
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-center text-gray-600 leading-relaxed mb-16">
          Vi strävar efter naturliga och harmoniska resultat som framhäver varje individs unika skönhet.
          Här är några exempel från våra nöjda patienter.
        </p>

        {/* Interactive Results Gallery */}
        <ResultsGallery images={resultImages} />

        <p className="text-center text-gray-500 italic text-sm mt-16 mb-20">
          Resultatet varierar mellan individer och alla behandlingar föregås av en konsultation.
        </p>

        {/* New Treatments Section */}
        <div className="mt-32">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8" style={{ fontFamily: 'serif' }}>
            Våra Behandlingar
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-center text-gray-600 leading-relaxed mb-16">
            Upptäck vårt utbud av avancerade estetiska behandlingar som kombinerar vetenskap med konst för naturliga resultat.
          </p>

          {/* Treatment Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {treatments.map((treatment, index) => (
              <button
                key={treatment.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                  activeTab === index
                    ? 'bg-stone-600 text-white shadow-lg'
                    : 'bg-white text-stone-600 hover:bg-stone-100 shadow-sm'
                }`}
              >
                {treatment.title}
              </button>
            ))}
          </div>

          {/* Hidden preload images for instant switching */}
          <div className="hidden">
            {treatments.map((treatment) => (
              <img
                key={treatment.id}
                src={treatment.image}
                alt={treatment.title}
                loading="eager"
              />
            ))}
          </div>

          {/* Active Treatment Content */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
              {/* Left Side - Image/Visual */}
              <div className="relative overflow-hidden">
                <img
                  key={activeTab}
                  src={treatments[activeTab].image}
                  alt={treatments[activeTab].title}
                  className="w-full h-full object-cover transition-opacity duration-150"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: 'serif' }}>
                    {treatments[activeTab].title}
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    {treatments[activeTab].description}
                  </p>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="p-8 lg:p-12">
                <div className="space-y-8">
                  {/* How it works section */}
                  <div>
                    <h4 className="text-2xl font-bold text-stone-800 mb-4 flex items-center gap-3" style={{ fontFamily: 'serif' }}>
                      <div className="w-8 h-8 bg-stone-600 rounded-full flex items-center justify-center">
                        <Clock className="w-4 h-4 text-white" />
                      </div>
                      {treatments[activeTab].id === 'prp' ? 'Användningsområden' :
                       treatments[activeTab].id === 'polynucleotides' ? 'Vad gör polynukleotider?' :
                       treatments[activeTab].id === 'fillers' ? 'Vad kan fillers användas till?' :
                       treatments[activeTab].id === 'skinbooster' ? 'Hur fungerar behandlingen?' :
                       'Så fungerar det'}
                    </h4>
                    <div className="space-y-3">
                      {treatments[activeTab].howItWorks.slice(0, 3).map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <ChevronRight className="w-5 h-5 text-stone-500 mt-0.5 flex-shrink-0" />
                          <span
                            className="text-gray-700 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: item }}
                          />
                        </div>
                      ))}
                      {treatments[activeTab].howItWorks.length > 3 && (
                        <div className="text-stone-500 text-sm italic pl-8">
                          +{treatments[activeTab].howItWorks.length - 3} fler fördelar...
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Expected results section */}
                  <div>
                    <h4 className="text-2xl font-bold text-stone-800 mb-4 flex items-center gap-3" style={{ fontFamily: 'serif' }}>
                      <div className="w-8 h-8 bg-stone-600 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      {treatments[activeTab].id === 'prp' ? 'Resultat och upplägg' : 'Förväntade resultat'}
                    </h4>
                    <div className="space-y-3">
                      {treatments[activeTab].expectedResults.slice(0, 3).map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <ChevronRight className="w-5 h-5 text-stone-500 mt-0.5 flex-shrink-0" />
                          <span
                            className="text-gray-700 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: item }}
                          />
                        </div>
                      ))}
                      {treatments[activeTab].expectedResults.length > 3 && (
                        <div className="text-stone-500 text-sm italic pl-8">
                          +{treatments[activeTab].expectedResults.length - 3} fler resultat...
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-6 border-t border-stone-200">
                    <a
                      href="https://www.bokadirekt.se/places/dr-hadde-beauty-131864"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-stone-600 text-white px-8 py-4 rounded-full font-medium hover:bg-stone-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Boka {treatments[activeTab].title}
                      <ChevronRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Treatment Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
            {treatments.map((treatment, index) => (
              <div
                key={treatment.id}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  activeTab === index
                    ? 'bg-stone-600 text-white shadow-lg'
                    : 'bg-white hover:bg-stone-50 shadow-sm hover:shadow-md'
                }`}
                onClick={() => setActiveTab(index)}
              >
                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    activeTab === index ? 'bg-white/20' : 'bg-stone-100'
                  }`}>
                    <Sparkles className={`w-6 h-6 ${activeTab === index ? 'text-white' : 'text-stone-600'}`} />
                  </div>
                  <h3 className="font-semibold text-sm mb-2" style={{ fontFamily: 'serif' }}>
                    {treatment.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${
                    activeTab === index ? 'text-white/80' : 'text-gray-600'
                  }`}>
                    {treatment.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatments;