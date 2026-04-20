import { Link } from 'react-router-dom';
import FadeInSection from '@/components/FadeInSection';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-navy flex items-center overflow-hidden">
      {/* Geometric decorations */}
      {/* Large arch bleeding off right edge */}
      <div className="absolute right-[-15%] top-[10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] animate-drift pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden="true">
          <path
            d="M400 400 L400 200 A200 200 0 0 0 0 200 L0 400 Z"
            fill="hsl(216 67% 40% / 0.20)" />
          
        </svg>
      </div>

      {/* Large ivory circle bleeding off bottom-left */}
      <div className="absolute left-[-12%] bottom-[-18%] w-[42vw] max-w-[560px] min-w-[360px] aspect-square animate-drift-reverse pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
          <circle cx="50" cy="50" r="50" fill="hsl(60 12% 85% / 0.22)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-20">
        <FadeInSection>
          <h1 className="text-headline text-ivory tracking-tight max-w-3xl">
            Climate finance infrastructure
          </h1>
        </FadeInSection>

        <FadeInSection delay={150}>
          <p className="mt-6 font-serif italic text-ivory/70 text-xl lg:text-2xl max-w-lg">
            Where digital trust meets the real world
          </p>
        </FadeInSection>

        <FadeInSection delay={300}>
          <p className="mt-8 text-ivory/55 text-body max-w-xl leading-relaxed">
            We provide the technology infrastructure that enables recognised financial structures to embed verified climate outcomes — transforming corporate decarbonisation commitments into investable, verifiable digital assets.
          </p>
        </FadeInSection>

        <FadeInSection delay={450}>
          <Link
            to="/reech"
            className="inline-flex items-center mt-10 px-7 py-3.5 bg-lime text-navy font-medium text-sm tracking-wide rounded-sm hover:brightness-110 transition-all duration-200">
            
            Discover REECH →
          </Link>
        </FadeInSection>
      </div>
    </section>);

};

export default HeroSection;