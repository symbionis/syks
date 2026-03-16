import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';

const Reech = () => {
  return (
    <div className="bg-canvas">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-lime/5" />
          {/* Decorative circle */}
          <div className="absolute -right-20 top-20 w-64 h-64 rounded-full bg-lime/10 animate-drift pointer-events-none" />
          
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            <FadeInSection>
              <span className="text-sm font-medium tracking-widest uppercase text-lime">Product</span>
              <h1 className="mt-4 text-headline text-navy max-w-2xl">REECH</h1>
              <p className="mt-6 text-body text-navy/70 max-w-xl">
                Real Economy Emission Certificates for Hedging — a structured financial instrument that transforms verified emission reductions into tradeable, bankable digital assets.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* Features grid */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Structured', desc: 'Built on recognised financial frameworks, not bespoke carbon market mechanisms.' },
                { title: 'Verified', desc: 'Every certificate backed by independently verified, real-economy emission reductions.' },
                { title: 'Investable', desc: 'Designed for institutional portfolios — compliant, liquid, and transparently priced.' },
              ].map((item, i) => (
                <FadeInSection key={item.title} delay={i * 120}>
                  <div className="p-8 bg-ivory/50 rounded-sm border border-ivory">
                    <h3 className="text-section text-navy text-xl mb-3">{item.title}</h3>
                    <p className="text-navy/60 text-body">{item.desc}</p>
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

export default Reech;
