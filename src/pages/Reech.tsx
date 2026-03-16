import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';

const stakeholders = [
  {
    title: 'Corporates',
    summary: 'Finance deep decarbonisation without straining balance sheets.',
    detail:
      'REECH enables corporates to externalise the capital requirements of their transition plans by connecting them to structured investment vehicles. Rather than funding capital-intensive initiatives through internal budgets, corporates can package verified emission reduction projects into the REECH framework — accessing institutional capital while retaining strategic control over their decarbonisation trajectory. Every initiative is independently verified through Proof of Execution, transforming sustainability commitments from reporting exercises into auditable, investable programmes.',
  },
  {
    title: 'Investors',
    summary: 'Access verified, impact-linked returns through regulated instruments.',
    detail:
      'REECH provides institutional investors with a new asset class that delivers competitive financial returns alongside independently verified environmental outcomes. Digital Impact Units are structured as regulated securities within recognised investment frameworks, offering fractional ownership, enhanced liquidity, and full transparency. Investors benefit from continuous verification — not retrospective reporting — ensuring that every unit of impact is backed by measurable, real-economy emission reductions.',
  },
  {
    title: 'Project Developers',
    summary: 'Unlock financing for high-impact climate initiatives.',
    detail:
      'Project developers gain access to structured financing through REECH\u2019s accumulator contracts, which transform long-horizon climate initiatives into bankable propositions. The framework manages the full lifecycle — from commitment issuance through verification to value capture — removing the administrative burden of bespoke fundraising. Developers focus on delivery; REECH handles the financial architecture, verification, and compliance.',
  },
  {
    title: 'Financial Institutions',
    summary: 'Integrate verified climate assets into existing product lines.',
    detail:
      'Banks, asset managers, and insurance companies can use REECH to embed verified climate impact into their product offerings. The framework\u2019s modular architecture interfaces with existing financial infrastructure — from fund administration to custody and settlement — enabling institutions to offer climate-linked products without building proprietary verification or registry systems. REECH provides the trust layer; institutions provide the distribution.',
  },
];

const Reech = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <div className="bg-canvas">
      <Navbar />
      <main>
        {/* ─── 1. HERO ─── */}
        <section className="relative bg-navy pt-32 pb-28 lg:pt-44 lg:pb-36 overflow-hidden">
          {/* Decorative lime arch bleeding off right */}
          <div className="absolute -right-32 top-[10%] w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] pointer-events-none animate-drift">
            <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden="true">
              <path
                d="M400 200 A200 200 0 0 0 200 0 L200 50 A150 150 0 0 1 350 200 Z"
                fill="hsl(71 64% 63% / 0.20)"
              />
              <path
                d="M400 200 A200 200 0 0 1 200 400 L200 350 A150 150 0 0 0 350 200 Z"
                fill="hsl(71 64% 63% / 0.12)"
              />
            </svg>
          </div>

          {/* Dot grid top-left */}
          <div className="absolute left-[5%] top-[15%] pointer-events-none animate-drift-reverse">
            <svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true">
              {[0, 20, 40, 60].map(x =>
                [0, 20, 40, 60].map(y => (
                  <circle key={`${x}-${y}`} cx={x + 5} cy={y + 5} r="2" fill="hsl(71 64% 63% / 0.18)" />
                ))
              )}
            </svg>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
            <FadeInSection>
              <h1 className="text-ivory tracking-tight" style={{ fontSize: 'clamp(3.5rem, 7vw, 4.5rem)', lineHeight: 1.05, fontWeight: 500 }}>
                REECH
              </h1>
            </FadeInSection>

            <FadeInSection delay={100}>
              <p className="mt-5 font-serif italic text-lime/80 text-xl lg:text-2xl max-w-xl">
                Transforming climate action into investable assets
              </p>
            </FadeInSection>

            <FadeInSection delay={200}>
              <p className="mt-8 text-ivory/55 text-body max-w-2xl leading-relaxed">
                REECH is a climate finance framework that bridges the gap between corporate decarbonisation commitments and the capital required to achieve them. By interfacing with recognised financial structures and layering proprietary impact verification technology on top, REECH creates a new asset class that delivers both competitive financial returns and verified environmental outcomes.
              </p>
            </FadeInSection>

            <FadeInSection delay={300}>
              <p className="mt-10 text-ivory/40 text-sm">
                A{' '}
                <Link to="/" className="text-lime/60 hover:text-lime/80 underline underline-offset-4 transition-colors">
                  SYKS
                </Link>
                {' '}infrastructure solution
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* ─── 2. THE CHALLENGE ─── */}
        <section className="bg-canvas py-28 lg:py-36">
          <div className="max-w-[720px] mx-auto px-6">
            <FadeInSection>
              <span className="text-xs font-medium tracking-widest uppercase text-lime" style={{ color: 'hsl(71 64% 45%)' }}>
                The Challenge
              </span>
              <h2 className="mt-4 text-section text-foreground">
                Bridging the climate finance gap
              </h2>
            </FadeInSection>

            <FadeInSection delay={100}>
              <p className="mt-10 text-foreground/[0.82] text-body leading-relaxed">
                Corporate and policy ambition is high. Yet financing and delivery still lag.
              </p>
            </FadeInSection>

            <FadeInSection delay={150}>
              <p className="mt-5 text-foreground/[0.82] text-body leading-relaxed">
                The first wave of decarbonisation has been captured — energy efficiency upgrades, renewable sourcing, supplier engagement, operational improvements. These gains matter, but the next phase demands something fundamentally different.
              </p>
            </FadeInSection>

            <FadeInSection delay={200}>
              <p className="mt-5 text-foreground/[0.82] text-body leading-relaxed">
                Achieving deep decarbonisation now requires capital-intensive, long-horizon initiatives: factory retooling, advanced carbon capture, industrial heat systems, regenerative agriculture, large-scale technology deployment. Traditional corporate finance models, reliant on annual budget cycles and internal capital allocation, are not designed for investments of this scale and complexity.
              </p>
            </FadeInSection>

            <FadeInSection delay={250}>
              <p className="mt-5 text-foreground/[0.82] text-body leading-relaxed">
                At the same time, existing sustainability reporting remains largely retrospective. Claims are self-reported, verification is inconsistent, and the connection between environmental impact and financial value is weak. This creates a credibility gap that prevents institutional capital from flowing at the pace and scale required.
              </p>
            </FadeInSection>

            <FadeInSection delay={300}>
              <p className="mt-5 text-foreground/[0.82] text-body leading-relaxed">
                The result is a structural disconnect: corporates need external capital to finance their transition, investors need credible impact-linked assets, and both need a framework where financial performance and climate outcomes are inseparable.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* ─── 3. DUAL-LAYER FRAMEWORK ─── */}
        <section className="bg-secondary py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <FadeInSection>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-medium tracking-widest uppercase" style={{ color: 'hsl(71 64% 45%)' }}>
                  Framework
                </span>
                <h2 className="mt-4 text-section text-foreground">
                  A dual-layer architecture for trust and performance
                </h2>
                <p className="mt-6 text-foreground/[0.82] text-body leading-relaxed">
                  Mobilising climate finance at scale requires more than capital. It requires confidence: confidence that initiatives are rigorously selected, that risks are transparently managed, and that outcomes are verifiable.
                </p>
              </div>
            </FadeInSection>

            {/* Layer 1 — Navy band */}
            <FadeInSection delay={150}>
              <div className="rounded-t-sm p-8 lg:p-12 lg:flex lg:gap-16 lg:items-start" style={{ backgroundColor: '#021d39' }}>
                <div className="flex-shrink-0 mb-6 lg:mb-0">
                  <span className="text-xs uppercase tracking-widest text-ivory/40">Layer 1</span>
                </div>
                <div className="max-w-2xl">
                  <h3 className="text-ivory font-medium text-xl">Recognised financial architecture</h3>
                  <p className="mt-1 font-serif italic text-lime/70 text-base">The investment engine</p>
                  <p className="mt-5 text-ivory/70 text-body leading-relaxed">
                    REECH interfaces with established, regulated financial structures — such as Reserved Alternative Investment Funds (RAIFs) under European regulation — to transform climate initiatives into tradable, institutionally-recognised digital securities. By working within existing financial frameworks rather than replacing them, REECH ensures that the assets it produces are recognised by the institutional finance ecosystem from day one.
                  </p>
                </div>
              </div>
            </FadeInSection>

            {/* Layer 2 — Blue band */}
            <FadeInSection delay={250}>
              <div className="rounded-b-sm p-8 lg:p-12 lg:flex lg:gap-16 lg:items-start" style={{ backgroundColor: '#2158a8' }}>
                <div className="flex-shrink-0 mb-6 lg:mb-0">
                  <span className="text-xs uppercase tracking-widest text-white/40">Layer 2</span>
                </div>
                <div className="max-w-2xl">
                  <h3 className="text-white font-medium text-xl">Incentive Value Engine (IVE)</h3>
                  <p className="mt-1 font-serif italic text-white/60 text-base">The intelligence backbone</p>
                  <p className="mt-5 text-white/80 text-body leading-relaxed">
                    The IVE embeds proprietary verification technology directly into the financial structure. Proof of Execution continuously monitors and validates climate delivery against predefined benchmarks. Accumulator contracts manage the lifecycle of commitments — from issuance through verification to value capture — ensuring that financial returns and environmental outcomes are inseparable.
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={350}>
              <p className="mt-14 text-center font-serif italic text-foreground/70 text-lg max-w-2xl mx-auto">
                Without structure, climate initiatives remain underfunded. Without proof, investor confidence falters. REECH unites both.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* ─── 4. DIGITAL IMPACT UNIT ─── */}
        <section className="bg-canvas py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <FadeInSection>
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: 'hsl(71 64% 45%)' }}>
                Asset Class
              </span>
              <h2 className="mt-4 text-section text-foreground max-w-2xl">
                The Digital Impact Unit — a new asset class
              </h2>
            </FadeInSection>

            <FadeInSection delay={100}>
              <p className="mt-8 text-foreground/[0.82] text-body leading-relaxed max-w-3xl">
                At the core of REECH is the Digital Impact Unit (DIU) — a regulated digital security that represents a direct share in a professionally managed portfolio of high-impact climate initiatives. Each DIU is a Real World Asset (RWA), structured as a share in a recognised investment vehicle.
              </p>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="mt-10 flex flex-wrap gap-3">
                {['Fractional ownership', 'Enhanced liquidity', 'Programmable compliance', 'Transparent provenance'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-5 py-2.5 text-sm font-medium rounded-sm tracking-wide bg-lime/15 text-foreground"
                      style={{ borderLeft: '3px solid hsl(71 64% 63%)' }}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </FadeInSection>

            <FadeInSection delay={300}>
              <p className="mt-10 text-foreground/[0.82] text-body leading-relaxed max-w-3xl">
                The DIU makes climate action investable — not through assertion, but through a regulated, verified, and tradable instrument designed for institutional participation.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* ─── 5. STAKEHOLDERS ─── */}
        <section className="bg-canvas py-28 lg:py-36 border-t border-foreground/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <FadeInSection>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-medium tracking-widest uppercase" style={{ color: 'hsl(71 64% 45%)' }}>
                  Participants
                </span>
                <h2 className="mt-4 text-section text-foreground">
                  Designed for the actors driving the climate transition
                </h2>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {stakeholders.map((s, i) => (
                <FadeInSection key={s.title} delay={i * 100}>
                  <button
                    onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                    className="w-full text-left p-6 lg:p-8 rounded-sm border border-foreground/[0.08] bg-secondary hover:border-lime/40 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-foreground font-medium text-lg">{s.title}</h3>
                        <p className="mt-2 text-foreground/[0.7] text-sm leading-relaxed">{s.summary}</p>
                      </div>
                      <span
                        className="flex-shrink-0 w-8 h-8 rounded-full bg-lime/15 flex items-center justify-center transition-transform duration-300"
                        style={{ transform: expandedCard === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                          <path d="M3 7h8M7 3v8" stroke="hsl(71 64% 45%)" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                    </div>
                    <div
                      className="overflow-hidden transition-all duration-300"
                      style={{
                        maxHeight: expandedCard === i ? '300px' : '0',
                        opacity: expandedCard === i ? 1 : 0,
                      }}
                    >
                      <p className="mt-5 pt-5 border-t border-foreground/[0.08] text-foreground/[0.82] text-sm leading-relaxed">
                        {s.detail}
                      </p>
                    </div>
                  </button>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 6. INSURANCE ─── */}
        <section className="bg-secondary py-28 lg:py-36">
          <div className="max-w-[720px] mx-auto px-6">
            <FadeInSection>
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: 'hsl(71 64% 45%)' }}>
                Risk Architecture
              </span>
              <h2 className="mt-4 text-section text-foreground">
                Insurance as a value-creating mechanism
              </h2>
            </FadeInSection>

            <FadeInSection delay={100}>
              <p className="mt-8 text-foreground/[0.82] text-body leading-relaxed">
                REECH embeds insurance at the initiative level — not as a cost of compliance, but as a structural component that enhances asset quality and investor confidence. Each climate initiative within the portfolio is individually insured against delivery risk, creating a layer of protection that strengthens the overall credit profile of the fund.
              </p>
            </FadeInSection>

            <FadeInSection delay={200}>
              <p className="mt-5 text-foreground/[0.82] text-body leading-relaxed">
                This approach transforms insurance from a passive hedge into an active value driver. By reducing the risk premium associated with climate investments, initiative-level insurance lowers the cost of capital and increases the attractiveness of Digital Impact Units to institutional buyers.
              </p>
            </FadeInSection>

            <FadeInSection delay={300}>
              <p className="mt-5 text-foreground/[0.82] text-body leading-relaxed">
                The insurance layer works in concert with Proof of Execution — verified delivery data reduces claims uncertainty, creating a feedback loop that progressively improves coverage terms and pricing over time.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* ─── 7. FOOTER CTA ─── */}
        <section className="bg-navy py-24 lg:py-32">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <FadeInSection>
              <p className="text-ivory/80 text-body leading-relaxed max-w-2xl mx-auto">
                REECH transforms the economics of climate action — bridging corporate ambition with institutional capital through verified, tradable digital assets.
              </p>
            </FadeInSection>

            <FadeInSection delay={150}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/#contact"
                  className="px-7 py-3.5 bg-lime text-navy font-medium text-sm tracking-wide rounded-sm hover:brightness-110 transition-all duration-200"
                >
                  Get in touch →
                </Link>
                <Link
                  to="/ic"
                  className="px-7 py-3.5 border border-ivory/30 text-ivory font-medium text-sm tracking-wide rounded-sm hover:bg-ivory/5 transition-all duration-200"
                >
                  Explore Integrity Certificates →
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

export default Reech;
