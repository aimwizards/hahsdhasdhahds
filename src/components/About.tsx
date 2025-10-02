
import { doctorInfo } from '../data/company';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 px-[5%] bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Doctor Image */}
          <div className="lg:col-span-2">
            <div className="max-w-md mx-auto lg:max-w-none">
              <img
                src={doctorInfo.image}
                alt={`${doctorInfo.name}, ${doctorInfo.title}`}
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center lg:text-left text-stone-800" style={{ fontFamily: 'serif' }}>
              Om Dr Hadde
            </h2>

            <div className="space-y-6">
              {doctorInfo.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-stone-700 text-center lg:text-left"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;