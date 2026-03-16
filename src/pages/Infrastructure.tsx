import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';

const Infrastructure = () => {
  return (
    <div className="bg-canvas">
      <Navbar />
      <main>
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
          {/* Dot grid decoration */}
          <div className="absolute right-10 top-32 w-48 h-48 opacity-[0.08] pointer-events-none">
            <svg viewBox="0 0 200 200" aria-hidden="true">
              {Array.from({ length: 100 }).map((_, i) => (
                <circle
                  key={i}
                  cx={(i % 10) * 20 + 10}
                  cy={Math.floor(i / 10) * 20 + 10}
                  r="2"
                  fill="hsl(210 93% 12%)"
                />
              ))}
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            <FadeInSection>
              <span className="text-sm font-medium tracking-widest uppercase text-navy/50">Platform</span>
              <h1 className="mt-4 text-headline text-navy max-w-3xl">Infrastructure</h1>
              <p className="mt-6 text-body text-navy/70 max-w-xl">
                The technology layer that connects climate verification, financial structuring, and digital asset issuance into a single, coherent system.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-navy">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <FadeInSection>
              <h2 className="text-section text-ivory mb-12">How it works</h2>
            </FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Verify', desc: 'Real-world emission reductions are measured and independently verified against recognised standards.' },
                { step: '02', title: 'Structure', desc: 'Verified outcomes are embedded into financial instruments using established legal frameworks.' },
                { step: '03', title: 'Issue', desc: 'Digital assets are issued on infrastructure designed for institutional compliance and interoperability.' },
              ].map((item, i) => (
                <FadeInSection key={item.step} delay={i * 150}>
                  <div className="border-t border-ivory/15 pt-6">
                    <span className="text-lime/60 text-sm font-medium">{item.step}</span>
                    <h3 className="text-xl font-medium text-ivory mt-2 mb-3">{item.title}</h3>
                    <p className="text-ivory/50 text-body">{item.desc}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Infrastructure;
