import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';

const IntegrityCertificates = () => {
  return (
    <div className="bg-canvas">
      <Navbar />
      <main>
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-brand-blue/5" />
          {/* Decorative arch */}
          <div className="absolute -left-32 bottom-0 w-80 h-80 overflow-hidden animate-drift-reverse pointer-events-none">
            <svg viewBox="0 0 300 300" className="w-full h-full" aria-hidden="true">
              <path d="M300 300 L300 150 A150 150 0 0 0 0 150 L0 300 Z" fill="hsl(216 67% 40% / 0.08)" />
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            <FadeInSection>
              <span className="text-sm font-medium tracking-widest uppercase text-brand-blue">Verification</span>
              <h1 className="mt-4 text-headline text-navy max-w-3xl">Integrity Certificates</h1>
              <p className="mt-6 text-body text-navy/70 max-w-xl">
                Independent verification of climate outcomes embedded directly into financial instruments — ensuring transparency, accountability, and trust at every layer.
              </p>
            </FadeInSection>
          </div>
        </section>

        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { title: 'Immutable Record', desc: 'Each certificate creates a permanent, auditable record of verified emission reductions linked to real-world assets.' },
                { title: 'Third-Party Verified', desc: 'All claims are independently validated by accredited verification bodies before certificate issuance.' },
                { title: 'Standards Aligned', desc: 'Built to align with emerging regulatory frameworks and international climate finance standards.' },
                { title: 'Digital-Native', desc: 'Designed for seamless integration into digital financial infrastructure and reporting systems.' },
              ].map((item, i) => (
                <FadeInSection key={item.title} delay={i * 100}>
                  <div className="border-l-2 border-brand-blue/30 pl-6">
                    <h3 className="text-xl font-medium text-navy mb-2">{item.title}</h3>
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

export default IntegrityCertificates;
