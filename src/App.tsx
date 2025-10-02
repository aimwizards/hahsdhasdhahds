import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Treatments from './components/Treatments';
import Tips from './components/Tips';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scroll-fade-in-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all sections for fade-in animation, except hero
    const sections = document.querySelectorAll('section:not(#hero)');
    sections.forEach((section) => {
      section.classList.add('animate-scroll-fade-in');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Treatments />
        <Tips />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
