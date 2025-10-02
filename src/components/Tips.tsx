
import { useState } from 'react';
import { CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { afterCareData, preCareTips } from '../data/aftercare';

const Tips: React.FC = () => {
  const [isPreCareOpen, setIsPreCareOpen] = useState(false);
  const [isAfterCareOpen, setIsAfterCareOpen] = useState(false);

  return (
    <section id="tips" className="py-20 lg:py-28 px-[5%] bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-5" style={{ fontFamily: 'serif' }}>
          Råd & Rekommendationer
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-center text-gray-600 leading-relaxed mb-12">
          För att säkerställa bästa möjliga resultat och en trygg upplevelse är det viktigt att du följer
          våra rekommendationer både före och efter din behandling.
        </p>

        <div className="space-y-6">
          {/* Pre-care Dropdown */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <button
              onClick={() => setIsPreCareOpen(!isPreCareOpen)}
              className="w-full flex items-center justify-between p-6 bg-stone-50 hover:bg-stone-100 transition-colors text-left"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-stone-700" style={{ fontFamily: 'serif' }}>
                  Rekommendationer före behandling
                </h3>
                <p className="text-stone-600 text-sm mt-1">(gäller alla behandlingar)</p>
              </div>
              {isPreCareOpen ? (
                <ChevronUp className="w-6 h-6 text-stone-600 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-6 h-6 text-stone-600 flex-shrink-0" />
              )}
            </button>

            {isPreCareOpen && (
              <div className="p-6 bg-white">
                <ul className="space-y-4">
                  {preCareTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <CheckCircle className="w-5 h-5 text-stone-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* After-care Dropdown */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <button
              onClick={() => setIsAfterCareOpen(!isAfterCareOpen)}
              className="w-full flex items-center justify-between p-6 bg-stone-50 hover:bg-stone-100 transition-colors text-left"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-stone-700" style={{ fontFamily: 'serif' }}>
                  Rekommendationer efter behandling
                </h3>
                <p className="text-stone-600 text-sm mt-1">(specifikt per behandlingstyp)</p>
              </div>
              {isAfterCareOpen ? (
                <ChevronUp className="w-6 h-6 text-stone-600 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-6 h-6 text-stone-600 flex-shrink-0" />
              )}
            </button>

            {isAfterCareOpen && (
              <div className="p-6 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {afterCareData.map((card, index) => (
                    <div key={index} className="bg-stone-50 rounded-lg p-6 border border-gray-100">
                      <h4 className="text-lg md:text-xl font-bold mb-4 text-stone-700" style={{ fontFamily: 'serif' }}>
                        {card.title}
                      </h4>
                      <ul className="space-y-2">
                        {card.instructions.map((instruction, instrIndex) => (
                          <li key={instrIndex} className="text-gray-700 text-sm leading-relaxed">
                            • {instruction}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tips;