import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';

const layers = [
  { id: 'data', label: 'Data', color: 'hsl(60 12% 85%)' },
  { id: 'oracle', label: 'Oracle', color: 'hsl(71 64% 63%)' },
  { id: 'integrity', label: 'Integrity', color: 'hsl(216 67% 40%)' },
  { id: 'connectivity', label: 'Connectivity', color: 'hsl(210 93% 12%)' },
];

const Infrastructure = () => {
  const [activeLayer, setActiveLayer] = useState('');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLayer(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    layers.forEach((l) => {
      const el = sectionRefs.current[l.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-canvas">
      <Navbar />
      <main>
        {/* ─── HERO ─── */}
        <section className="relative bg-navy pt-32 pb-28 lg:pt-44 lg:pb-36 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 lg:flex lg:items-start lg:gap-20">
            <div className="lg:flex-1">
              <FadeInSection>
                <h1 className="text-headline text-ivory tracking-tight">Infrastructure</h1>
              </FadeInSection>

              <FadeInSection delay={100}>
                <p className="mt-4 font-serif italic text-ivory/60 text-xl lg:text-2xl">
                  Four layers of trust
                </p>
              </FadeInSection>

              <FadeInSection delay={200}>
                <p className="mt-8 text-ivory/55 text-body max-w-2xl leading-relaxed">
                  SYKS infrastructure is the foundation on which climate finance frameworks, verification systems, and digital asset ecosystems are built. Four interconnected layers transform real-world data into trusted, exchangeable digital assets — ensuring integrity from the point of capture to the point of investment.
                </p>
              </FadeInSection>
            </div>

            {/* Stack diagram — order matches page scroll: Data → Oracle → Integrity → Connectivity */}
            <FadeInSection delay={300}>
              <div className="mt-12 lg:mt-0 lg:flex-shrink-0 flex flex-col items-center gap-2 w-full lg:w-[280px]">
                {[
                  {
                    label: 'Data',
                    shape: (
                      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                        <circle cx="10" cy="10" r="10" fill="hsl(60 12% 85%)" />
                      </svg>
                    ),
                    bg: 'hsl(60 12% 85% / 0.12)',
                    border: 'hsl(60 12% 85% / 0.25)',
                  },
                  {
                    label: 'Oracle',
                    shape: (
                      <svg width="20" height="26" viewBox="0 0 20 26" aria-hidden="true">
                        <path d="M2 26 L2 10 A8 8 0 0 1 18 10 L18 26" fill="none" stroke="hsl(71 64% 63%)" strokeWidth="3.5" />
                      </svg>
                    ),
                    bg: 'hsl(71 64% 63% / 0.15)',
                    border: 'hsl(71 64% 63% / 0.3)',
                  },
                  {
                    label: 'Integrity',
                    shape: (
                      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                        <rect width="20" height="20" rx="2" fill="hsl(216 67% 40%)" />
                      </svg>
                    ),
                    bg: 'hsl(216 67% 40% / 0.2)',
                    border: 'hsl(216 67% 40% / 0.35)',
                  },
                  {
                    label: 'Connectivity',
                    shape: (
                      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                        <circle cx="5" cy="5" r="3.5" fill="hsl(60 12% 85%)" />
                        <circle cx="15" cy="5" r="3.5" fill="hsl(60 12% 85%)" />
                        <circle cx="5" cy="15" r="3.5" fill="hsl(60 12% 85%)" />
                        <circle cx="15" cy="15" r="3.5" fill="hsl(60 12% 85%)" />
                      </svg>
                    ),
                    bg: 'hsl(60 12% 85% / 0.10)',
                    border: 'hsl(60 12% 85% / 0.20)',
                  },
                ].map((layer) => (
                  <div
                    key={layer.label}
                    className="w-full flex items-center gap-4 px-5 py-4 rounded-sm"
                    style={{ backgroundColor: layer.bg, border: `1px solid ${layer.border}` }}
                  >
                    {layer.shape}
                    <span className="text-sm font-medium tracking-wide text-ivory/70">{layer.label}</span>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ─── SCROLL PROGRESS INDICATOR (sticky side nav) ─── */}
        <div className="hidden xl:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
          <nav className="flex flex-col gap-3">
            {layers.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="group flex items-center gap-3 transition-all duration-300"
              >
                <span
                  className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: l.color,
                    opacity: activeLayer === l.id ? 1 : 0.3,
                    transform: activeLayer === l.id ? 'scale(1.4)' : 'scale(1)',
                  }}
                />
                <span
                  className="text-xs font-medium tracking-wide transition-all duration-300"
                  style={{
                    color: activeLayer === l.id ? 'hsl(210 93% 12%)' : 'hsl(210 93% 12% / 0.3)',
                  }}
                >
                  {l.label}
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* ═══════════════════════════════════════════════
            LAYER 1 — DATA
        ═══════════════════════════════════════════════ */}
        <section
          id="data"
          ref={(el) => { sectionRefs.current['data'] = el; }}
          className="relative bg-canvas py-28 lg:py-40 overflow-hidden"
        >
          {/* Ivory circle bleeding off left */}
          <div className="absolute -left-40 top-[15%] w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] pointer-events-none animate-drift-reverse">
            <svg viewBox="0 0 500 500" className="w-full h-full" aria-hidden="true">
              <circle cx="250" cy="250" r="240" fill="hsl(60 12% 85% / 0.12)" />
            </svg>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
            <FadeInSection>
              <div className="flex items-center gap-3 mb-4">
                <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                  <circle cx="9" cy="9" r="9" fill="hsl(60 12% 85%)" />
                </svg>
                <span className="text-xs font-medium tracking-widest uppercase text-foreground/50">Layer 1</span>
              </div>
              <h2 className="text-section text-foreground">Data · The source of truth</h2>
            </FadeInSection>

            <FadeInSection delay={100}>
              <p className="mt-8 text-foreground/[0.82] text-body leading-relaxed max-w-3xl">
                Climate finance begins with data. Not projections, not estimates — verified, traceable, immutable data. The Data Layer captures environmental metrics at the point of origin, standardises them across methodologies, and creates a permanent record that no participant can retroactively alter.
              </p>
            </FadeInSection>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Provenance from origin',
                  desc: 'Every data point carries its full history — where it was captured, how it was collected, who validated it, and what methodology governed it. This provenance chain is embedded at the moment of creation and cannot be separated from the data itself.',
                },
                {
                  title: 'Standardised collection',
                  desc: 'The layer accommodates multiple measurement methodologies, sensor types, and reporting standards. Regardless of how data enters the system, it is normalised against a unified schema — enabling comparison, aggregation, and analysis across diverse initiative types.',
                },
                {
                  title: 'Immutable recording',
                  desc: 'Once captured and validated, data is committed to an immutable ledger. This creates a permanent, tamper-evident record that serves as the foundation for every downstream process — from verification through to asset issuance.',
                },
                {
                  title: 'Supplementary transparency',
                  desc: 'Beyond core metrics, the layer captures contextual information — geographic data, temporal markers, methodology references, and operator identifiers. This supplementary data enriches the record and supports deeper analysis by stakeholders and auditors.',
                },
              ].map((item, i) => (
                <FadeInSection key={item.title} delay={150 + i * 80}>
                  <div className="p-6 lg:p-8 bg-secondary rounded-sm h-full">
                    <h3 className="text-foreground font-medium text-lg">{item.title}</h3>
                    <p className="mt-3 text-foreground/[0.82] text-[15px] leading-relaxed">{item.desc}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>

            <FadeInSection delay={500}>
              <p className="mt-14 font-serif italic text-foreground/60 text-center max-w-2xl mx-auto">
                Without trusted data, no verification system can function, no financial structure can hold, and no digital asset can carry credibility. The Data Layer is where integrity begins.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            LAYER 2 — ORACLE
        ═══════════════════════════════════════════════ */}
        <section
          id="oracle"
          ref={(el) => { sectionRefs.current['oracle'] = el; }}
          className="relative bg-canvas py-28 lg:py-40 overflow-hidden border-t border-foreground/[0.06]"
        >
          {/* Lime arch (inverted U) bleeding off right */}
          <div className="absolute -right-32 top-[10%] w-[400px] h-[500px] lg:w-[500px] lg:h-[600px] pointer-events-none animate-drift">
            <svg viewBox="0 0 200 260" className="w-full h-full" aria-hidden="true">
              <path d="M20 260 L20 100 A80 80 0 0 1 180 100 L180 260" fill="none" stroke="hsl(71 64% 63% / 0.12)" strokeWidth="35" />
            </svg>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
            <FadeInSection>
              <div className="flex items-center gap-3 mb-4">
              <svg width="18" height="24" viewBox="0 0 18 24" aria-hidden="true">
                  <path d="M2 24 L2 9 A7 7 0 0 1 16 9 L16 24" fill="none" stroke="hsl(71 64% 63%)" strokeWidth="3" />
                </svg>
                <span className="text-xs font-medium tracking-widest uppercase text-foreground/50">Layer 2</span>
              </div>
              <h2 className="text-section text-foreground">Oracle · The real-world interface</h2>
            </FadeInSection>

            <FadeInSection delay={100}>
              <p className="mt-8 text-foreground/[0.82] text-body leading-relaxed max-w-3xl">
                The Oracle Layer is the translation engine between the physical world and the digital infrastructure. It takes verified environmental data and converts it into structured inputs that can trigger financial processes, unlock capital, and generate digital assets.
              </p>
            </FadeInSection>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Real-world translation',
                  desc: 'The oracle interprets verified data — emission reductions, energy generation, resource recovery — and converts it into standardised digital signals. These signals are the inputs for every downstream process: from smart contract triggers to impact unit issuance.',
                },
                {
                  title: 'Asset unlocking',
                  desc: 'By converting environmental outcomes into structured digital inputs, the oracle creates the preconditions for asset creation. Each verified data point becomes a potential building block for regulated financial instruments — unlocking value that was previously stranded in sustainability reports.',
                },
                {
                  title: 'Event-driven triggers',
                  desc: 'The oracle layer generates events that activate smart contracts, release capital tranches, and update ledger records. These triggers are deterministic — they fire only when predefined verification thresholds are met, ensuring that financial actions are always backed by evidence.',
                },
                {
                  title: 'Cross-methodology compatibility',
                  desc: 'Different climate initiatives use different measurement frameworks. The oracle normalises across methodologies — enabling a factory retooling project and a reforestation initiative to be compared, aggregated, and managed within the same financial structure.',
                },
              ].map((item, i) => (
                <FadeInSection key={item.title} delay={150 + i * 80}>
                  <div className="p-6 lg:p-8 bg-secondary rounded-sm h-full">
                    <h3 className="text-foreground font-medium text-lg">{item.title}</h3>
                    <p className="mt-3 text-foreground/[0.82] text-[15px] leading-relaxed">{item.desc}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>

            <FadeInSection delay={500}>
              <p className="mt-14 font-serif italic text-foreground/60 text-center max-w-2xl mx-auto">
                The Oracle Layer ensures that no digital asset is created in a vacuum. Every unit, every trigger, every financial event is anchored in verified, real-world performance.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            LAYER 3 — INTEGRITY
        ═══════════════════════════════════════════════ */}
        <section
          id="integrity"
          ref={(el) => { sectionRefs.current['integrity'] = el; }}
          className="relative bg-canvas py-28 lg:py-40 overflow-hidden border-t border-foreground/[0.06]"
        >
          {/* Blue square bleeding off left */}
          <div className="absolute -left-24 top-[12%] w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] pointer-events-none animate-drift-reverse">
            <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
              <rect width="100" height="100" rx="3" fill="hsl(216 67% 40% / 0.10)" />
            </svg>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
            <FadeInSection>
              <div className="flex items-center gap-3 mb-4">
                <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                  <rect width="18" height="18" rx="2" fill="hsl(216 67% 40%)" />
                </svg>
                <span className="text-xs font-medium tracking-widest uppercase text-foreground/50">Layer 3</span>
              </div>
              <h2 className="text-section text-foreground">Integrity · The trust layer</h2>
            </FadeInSection>

            <FadeInSection delay={100}>
              <p className="mt-8 text-foreground/[0.82] text-body leading-relaxed max-w-3xl">
                The Integrity Layer is where claims become evidence. It provides the verification, validation, and governance mechanisms that ensure every climate outcome is independently confirmed before it can generate financial value. This is the layer that earns — and enforces — trust.
              </p>
            </FadeInSection>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Collective validation',
                  desc: 'Verification is not entrusted to a single authority. Independent validator panels assess each initiative against predefined criteria, using consensus mechanisms that prevent conflicts of interest and ensure objectivity.',
                },
                {
                  title: 'Proof of Execution',
                  desc: 'Continuous monitoring against predefined benchmarks. PoE captures real-time performance data, compares it against targets, and generates immutable verification records. Every claim is backed by auditable evidence.',
                },
                {
                  title: 'Smart contract governance',
                  desc: 'Accumulator contracts manage the lifecycle of climate commitments — from issuance through verification to value capture. Capital release is automated and conditional: funds flow only when milestones are independently confirmed.',
                },
                {
                  title: 'Immutable registry',
                  desc: 'Every verified outcome, every validated claim, every issued asset is recorded in an immutable registry. The registry provides complete traceability from data capture through validation to issuance — creating a permanent, auditable chain of evidence.',
                },
              ].map((item, i) => (
                <FadeInSection key={item.title} delay={150 + i * 80}>
                  <div className="p-6 lg:p-8 bg-secondary rounded-sm h-full">
                    <h3 className="text-foreground font-medium text-lg">{item.title}</h3>
                    <p className="mt-3 text-foreground/[0.82] text-[15px] leading-relaxed">{item.desc}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>

            <FadeInSection delay={500}>
              <p className="mt-14 font-serif italic text-foreground/60 text-center max-w-2xl mx-auto">
                This is where trust is manufactured — not through reputation or assertion, but through architecture.
              </p>
            </FadeInSection>

            <FadeInSection delay={600}>
              <div className="mt-8 text-center">
                <Link
                  to="/ic"
                  className="inline-flex items-center text-sm font-medium text-brand-blue underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  Explore Integrity Certificates →
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            LAYER 4 — CONNECTIVITY
        ═══════════════════════════════════════════════ */}
        <section
          id="connectivity"
          ref={(el) => { sectionRefs.current['connectivity'] = el; }}
          className="relative bg-canvas py-28 lg:py-40 overflow-hidden border-t border-foreground/[0.06]"
        >
          {/* Navy dot grid bleeding off right */}
          <div className="absolute -right-16 top-[10%] w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] pointer-events-none animate-drift">
            <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden="true">
              {Array.from({ length: 100 }).map((_, i) => (
                <circle
                  key={i}
                  cx={(i % 10) * 20 + 10}
                  cy={Math.floor(i / 10) * 20 + 10}
                  r="2.5"
                  fill="hsl(210 93% 12% / 0.10)"
                />
              ))}
            </svg>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
            <FadeInSection>
              <div className="flex items-center gap-3 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  {[0, 8, 16].map(x =>
                    [0, 8, 16].map(y => (
                      <circle key={`${x}-${y}`} cx={x + 4} cy={y + 4} r="3" fill="hsl(210 93% 12%)" />
                    ))
                  )}
                </svg>
                <span className="text-xs font-medium tracking-widest uppercase text-foreground/50">Layer 4</span>
              </div>
              <h2 className="text-section text-foreground">Connectivity · The glue</h2>
            </FadeInSection>

            <FadeInSection delay={100}>
              <p className="mt-8 text-foreground/[0.82] text-body leading-relaxed max-w-3xl">
                The Connectivity Layer binds the infrastructure together and connects it to the outside world. It deploys frameworks, aligns stakeholders, manages portfolio intelligence, and ensures interoperability with existing financial and regulatory systems.
              </p>
            </FadeInSection>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Framework deployment',
                  desc: 'The connectivity layer deploys complete climate finance frameworks — such as REECH — on top of the infrastructure stack. Each framework is configured for specific use cases, stakeholder types, and regulatory environments, drawing on all four layers to deliver end-to-end capability.',
                },
                {
                  title: 'Stakeholder alignment',
                  desc: 'Corporates, investors, project developers, and financial institutions each interact with the infrastructure differently. The connectivity layer manages permissions, interfaces, and data flows to ensure each participant sees exactly what they need — nothing more, nothing less.',
                },
                {
                  title: 'Portfolio intelligence',
                  desc: 'Aggregated data from across the infrastructure feeds real-time dashboards, risk models, and impact reports. Portfolio-level intelligence enables fund managers and corporate sustainability teams to monitor, optimise, and report on performance across their entire climate portfolio.',
                },
                {
                  title: 'Interoperability',
                  desc: 'The infrastructure is designed to connect — with existing custody systems, regulatory reporting frameworks, trading environments, and corporate sustainability platforms. Open interfaces ensure that SYKS infrastructure enhances rather than replaces existing institutional workflows.',
                },
              ].map((item, i) => (
                <FadeInSection key={item.title} delay={150 + i * 80}>
                  <div className="p-6 lg:p-8 bg-secondary rounded-sm h-full">
                    <h3 className="text-foreground font-medium text-lg">{item.title}</h3>
                    <p className="mt-3 text-foreground/[0.82] text-[15px] leading-relaxed">{item.desc}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>

            <FadeInSection delay={500}>
              <p className="mt-14 font-serif italic text-foreground/60 text-center max-w-2xl mx-auto">
                Infrastructure without connectivity is a closed system. The Connectivity Layer transforms capability into participation.
              </p>
            </FadeInSection>

            <FadeInSection delay={600}>
              <div className="mt-8 text-center">
                <Link
                  to="/reech"
                  className="inline-flex items-center text-sm font-medium text-lime hover:text-foreground underline underline-offset-4 transition-colors"
                >
                  Explore REECH →
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="bg-background py-20 lg:py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <FadeInSection>
              <p className="text-foreground/[0.82] text-body leading-relaxed max-w-2xl mx-auto">
                Four layers. One infrastructure. The foundation for trusted, investable climate action.
              </p>
            </FadeInSection>

            <FadeInSection delay={100}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/#contact"
                  className="px-7 py-3.5 bg-lime text-navy font-medium text-sm tracking-wide rounded-sm hover:brightness-110 transition-all duration-200"
                >
                  Get in touch →
                </Link>
                <Link
                  to="/reech"
                  className="px-7 py-3.5 border border-navy text-navy font-medium text-sm tracking-wide rounded-sm hover:bg-navy/5 transition-all duration-200"
                >
                  Explore REECH →
                </Link>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="mt-6">
                <Link to="/" className="text-foreground/50 text-sm hover:text-foreground/70 transition-colors underline underline-offset-4">
                  A SYKS infrastructure solution
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Infrastructure;
