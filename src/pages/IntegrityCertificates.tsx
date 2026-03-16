import { Link } from 'react-router-dom';
import icLogo from '@/assets/ic-logo-ivory.png';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';

const IntegrityCertificates = () => {
  return (
    <div className="bg-canvas">
      <Navbar />
      <main>
        {/* ─── 1. HERO ─── */}
        <section className="relative bg-navy pt-32 pb-28 lg:pt-44 lg:pb-36 overflow-hidden">
          {/* Decorative blue square bleeding off left edge */}
          <div className="absolute -left-24 top-[15%] w-72 h-72 lg:w-96 lg:h-96 animate-drift-reverse pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
              <rect width="100" height="100" rx="2" fill="hsl(216 67% 40% / 0.18)" />
            </svg>
          </div>

          {/* Small blue dot cluster top-right */}
          <div className="absolute right-[8%] top-[20%] pointer-events-none animate-drift">
            <svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true">
              {[0, 20, 40, 60].map(x =>
                [0, 20, 40, 60].map(y => (
                  <circle key={`${x}-${y}`} cx={x + 5} cy={y + 5} r="2" fill="hsl(216 67% 40% / 0.25)" />
                ))
              )}
            </svg>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
            <FadeInSection>
              <img src={icLogo} alt="Integrity Certificates logo" className="w-16 h-16 mb-8" />
            </FadeInSection>

            <FadeInSection delay={100}>
              <h1 className="text-headline text-ivory tracking-tight max-w-3xl">
                Integrity Certificates
              </h1>
            </FadeInSection>

            <FadeInSection delay={200}>
              <p className="mt-4 font-serif italic text-ivory/70 text-xl lg:text-2xl">
                The trust engine
              </p>
            </FadeInSection>

            <FadeInSection delay={300}>
              <p className="mt-8 text-ivory/55 text-body max-w-2xl leading-relaxed">
                Integrity Certificates is the technology backbone of the SYKS infrastructure. It provides the verification, validation, and registry systems that ensure every financed initiative is recorded, independently validated, and deployed according to predefined criteria. Without this layer, digital climate assets are claims. With it, they are evidence.
              </p>
            </FadeInSection>

            <FadeInSection delay={400}>
              <a
                href="#integration"
                className="inline-flex items-center mt-10 text-brand-blue text-sm font-medium tracking-wide hover:underline underline-offset-4 transition-all"
              >
                A SYKS infrastructure solution ↓
              </a>
            </FadeInSection>
          </div>
        </section>

        {/* ─── 2. INCENTIVE VALUE ENGINE ─── */}
        <section className="bg-canvas py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <FadeInSection>
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-xs font-medium tracking-widest uppercase text-brand-blue">Core System</span>
                <h2 className="mt-4 text-section text-foreground">The Incentive Value Engine</h2>
                <p className="mt-6 text-foreground/[0.82] text-body leading-relaxed">
                  At the core of Integrity Certificates is the Incentive Value Engine (IVE) — a modular system architecture that orchestrates how climate commitments are captured, verified, and converted into bankable digital assets. Two interconnected modules drive the engine: Proof of Execution and the Accumulator.
                </p>
              </div>
            </FadeInSection>

            {/* IVE Diagram — solid blue blocks */}
            <FadeInSection delay={200}>
              <div className="mt-16 max-w-2xl mx-auto">
                <svg viewBox="0 0 600 320" className="w-full" aria-label="IVE system diagram">
                  {/* IVE container */}
                  <rect x="50" y="20" width="500" height="280" rx="4" fill="none" stroke="hsl(216 67% 40% / 0.2)" strokeWidth="1.5" strokeDasharray="6 4" />
                  <text x="300" y="52" textAnchor="middle" fill="hsl(216 67% 40%)" fontSize="11" fontWeight="500" letterSpacing="0.12em" fontFamily="Instrument Sans, sans-serif">INCENTIVE VALUE ENGINE</text>

                  {/* PoE module — solid blue */}
                  <rect x="90" y="90" width="190" height="120" rx="3" fill="hsl(216 67% 40%)" />
                  <text x="185" y="130" textAnchor="middle" fill="white" fontSize="13" fontWeight="500" fontFamily="Instrument Sans, sans-serif">Proof of Execution</text>
                  <text x="185" y="152" textAnchor="middle" fill="white" opacity="0.7" fontSize="11" fontFamily="Instrument Sans, sans-serif">Monitoring</text>
                  <text x="185" y="170" textAnchor="middle" fill="white" opacity="0.7" fontSize="11" fontFamily="Instrument Sans, sans-serif">Validation</text>
                  <text x="185" y="188" textAnchor="middle" fill="white" opacity="0.7" fontSize="11" fontFamily="Instrument Sans, sans-serif">Governance</text>

                  {/* Arrow */}
                  <line x1="290" y1="150" x2="310" y2="150" stroke="hsl(216 67% 40% / 0.5)" strokeWidth="1.5" />
                  <polygon points="315,145 325,150 315,155" fill="hsl(216 67% 40% / 0.5)" />

                  {/* Accumulator module — solid blue */}
                  <rect x="330" y="90" width="190" height="120" rx="3" fill="hsl(216 67% 40%)" />
                  <text x="425" y="130" textAnchor="middle" fill="white" fontSize="13" fontWeight="500" fontFamily="Instrument Sans, sans-serif">Accumulator</text>
                  <text x="425" y="152" textAnchor="middle" fill="white" opacity="0.7" fontSize="11" fontFamily="Instrument Sans, sans-serif">Commitment</text>
                  <text x="425" y="170" textAnchor="middle" fill="white" opacity="0.7" fontSize="11" fontFamily="Instrument Sans, sans-serif">Conversion</text>
                  <text x="425" y="188" textAnchor="middle" fill="white" opacity="0.7" fontSize="11" fontFamily="Instrument Sans, sans-serif">Value capture</text>

                  {/* Output arrow */}
                  <line x1="425" y1="220" x2="425" y2="255" stroke="hsl(216 67% 40% / 0.5)" strokeWidth="1.5" />
                  <polygon points="420,260 425,270 430,260" fill="hsl(216 67% 40% / 0.5)" />

                  {/* DIU output */}
                  <rect x="340" y="270" width="170" height="24" rx="3" fill="hsl(71 64% 63% / 0.2)" stroke="hsl(71 64% 63%)" strokeWidth="1" />
                  <text x="425" y="287" textAnchor="middle" fill="hsl(210 93% 12%)" fontSize="11" fontWeight="500" fontFamily="Instrument Sans, sans-serif">Digital Impact Unit (DIU)</text>
                </svg>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ─── 3. PROOF OF EXECUTION ─── */}
        <section className="bg-secondary py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <FadeInSection>
                  <span className="text-xs font-medium tracking-widest uppercase text-brand-blue">Module 1</span>
                  <h2 className="mt-4 text-section text-foreground">Proof of Execution</h2>
                  <div className="mt-2 w-12 h-1 bg-brand-blue rounded-full" />
                </FadeInSection>

                <FadeInSection delay={100}>
                  <p className="mt-8 text-foreground/[0.82] text-body leading-relaxed">
                    Proof of Execution (PoE) is the verification layer that transforms climate commitments into auditable evidence. It continuously monitors emission reduction activities against predefined benchmarks, ensuring that every claim is backed by measurable, independently validated data.
                  </p>
                </FadeInSection>

                <FadeInSection delay={200}>
                  <p className="mt-5 text-foreground/[0.82] text-body leading-relaxed">
                    The system integrates with recognised validation frameworks and accredited third-party verifiers. Validator governance ensures independence and accountability — validators are selected, rotated, and evaluated through a structured protocol that prevents conflicts of interest and maintains certification integrity.
                  </p>
                </FadeInSection>
              </div>

              <FadeInSection delay={200}>
                <div className="space-y-4 lg:mt-12">
                  {[
                    { label: 'Monitoring', desc: 'Continuous data collection against predefined emission reduction benchmarks' },
                    { label: 'Validation', desc: 'Independent verification through accredited third-party bodies' },
                    { label: 'Governance', desc: 'Structured validator selection, rotation, and accountability protocols' },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-4 items-start p-5 bg-canvas rounded-sm">
                      <div className="w-1 h-10 bg-brand-blue rounded-full flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-foreground font-medium text-sm">{item.label}</p>
                        <p className="text-foreground/[0.7] text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* ─── 4. ACCUMULATOR CONTRACTS ─── */}
        <section className="bg-canvas py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <FadeInSection>
              <span className="text-xs font-medium tracking-widest uppercase text-brand-blue">Module 2</span>
              <h2 className="mt-4 text-section text-foreground">Accumulator Contracts</h2>
              <div className="mt-2 w-12 h-1 bg-brand-blue rounded-full" />
            </FadeInSection>

            {/* Timeline steps — exact copy */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {[
                {
                  step: '01',
                  title: 'Commitment Issuance',
                  desc: 'Following assessment of maturity, risk, and quality, the fund issues commitment units representing the initiative\u2019s lifetime obligation. These are deposited into the accumulator in exchange for funding.',
                },
                {
                  step: '02',
                  title: 'Verification and Conversion',
                  desc: 'As the initiative operates, PoE verifies delivery. For each verified outcome, a verified impact unit is deposited and the corresponding commitment is retired. Obligations reduce progressively; the ledger of delivered impact grows.',
                },
                {
                  step: '03',
                  title: 'Repayment Mechanics',
                  desc: 'Operators deposit periodic payments enabling buyback of verified impact units at a dynamic price reflecting the financing structure. Capital recovery is embedded directly in the impact ledger.',
                },
                {
                  step: '04',
                  title: 'Fund Value Capture',
                  desc: 'The fund sweeps both financial returns and remaining verified impact units. Units not bought back remain with the fund for reporting, retirement, or monetisation. Value flows each period \u2014 either in financial returns or verified impact.',
                },
              ].map((item, i) => (
                <FadeInSection key={item.step} delay={i * 100}>
                  <div className="flex gap-5 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-brand-blue/10 flex items-center justify-center">
                      <span className="text-brand-blue font-medium text-sm">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-foreground font-medium text-lg">{item.title}</h3>
                      <p className="mt-2 text-foreground/[0.82] text-body leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>

            {/* Strategic advantages */}
            <FadeInSection delay={400}>
              <div className="mt-20">
                <p className="text-xs font-medium tracking-widest uppercase text-foreground/50 mb-6">Strategic Advantages</p>
                <div className="flex flex-wrap gap-3">
                  {['Automated execution', 'Dynamic pricing', 'Capital efficiency', 'Immutable audit trails'].map(
                    (badge) => (
                      <span
                        key={badge}
                        className="px-5 py-2.5 text-sm font-medium text-brand-blue bg-brand-blue/[0.08] rounded-sm tracking-wide"
                      >
                        {badge}
                      </span>
                    )
                  )}
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ─── 5. THE DOUBLE LEDGER ─── */}
        <section className="bg-secondary py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <FadeInSection>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-xs font-medium tracking-widest uppercase text-brand-blue">Architecture</span>
                <h2 className="mt-4 text-section text-foreground">The Double Ledger</h2>
              </div>
            </FadeInSection>

            <FadeInSection delay={150}>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-0 items-stretch max-w-5xl mx-auto">
                {/* Financial Ledger — solid dark navy */}
                <div className="p-8 lg:p-10 rounded-l-sm" style={{ backgroundColor: '#021d39' }}>
                  <p className="text-xs uppercase tracking-widest text-ivory/40 mb-3">Ledger A</p>
                  <h3 className="text-ivory font-medium text-xl mb-4">Financial Ledger</h3>
                  <ul className="space-y-3 text-ivory/60 text-sm">
                    <li className="flex items-start gap-2"><span className="text-ivory/30 mt-0.5">—</span> Capital commitments</li>
                    <li className="flex items-start gap-2"><span className="text-ivory/30 mt-0.5">—</span> Fund flows</li>
                    <li className="flex items-start gap-2"><span className="text-ivory/30 mt-0.5">—</span> Repayment schedules</li>
                    <li className="flex items-start gap-2"><span className="text-ivory/30 mt-0.5">—</span> NAV calculations</li>
                  </ul>
                </div>

                {/* Sync connector — lime circle */}
                <div className="flex items-center justify-center px-6 py-4 lg:py-0 bg-secondary">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-px h-8 lg:h-16 bg-lime/40" />
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#d0df61' }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M3 8h10M8 3v10" stroke="#021d39" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="w-px h-8 lg:h-16 bg-lime/40" />
                  </div>
                </div>

                {/* Impact Ledger — solid blue */}
                <div className="p-8 lg:p-10 rounded-r-sm" style={{ backgroundColor: '#2158a8' }}>
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-3">Ledger B</p>
                  <h3 className="text-white font-medium text-xl mb-4">Impact Ledger</h3>
                  <ul className="space-y-3 text-white/70 text-sm">
                    <li className="flex items-start gap-2"><span className="text-white/40 mt-0.5">—</span> Emission reductions</li>
                    <li className="flex items-start gap-2"><span className="text-white/40 mt-0.5">—</span> Verification records</li>
                    <li className="flex items-start gap-2"><span className="text-white/40 mt-0.5">—</span> DIU issuance</li>
                    <li className="flex items-start gap-2"><span className="text-white/40 mt-0.5">—</span> Audit trails</li>
                  </ul>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={300}>
              <p className="mt-12 text-center text-foreground/[0.82] text-body max-w-2xl mx-auto leading-relaxed">
                The Double Ledger architecture ensures that every financial transaction is mirrored by a corresponding impact record. This dual-entry system creates an immutable link between capital deployment and verified climate outcomes — making the relationship between money and impact auditable, transparent, and permanent.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* ─── 6. REGISTRY & TRADING ─── */}
        <section className="bg-canvas py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <FadeInSection>
                <span className="text-xs font-medium tracking-widest uppercase text-brand-blue">Post-Verification</span>
                <h2 className="mt-4 text-section text-foreground">Registry & Trading Infrastructure</h2>
                <div className="mt-2 w-12 h-1 bg-brand-blue rounded-full" />
              </FadeInSection>

              <FadeInSection delay={100}>
                <p className="mt-8 text-foreground/[0.82] text-body leading-relaxed">
                  Once outcomes are verified and impact units issued, they enter the IC registry — an immutable, transparent record providing complete traceability from data capture through validation to issuance.
                </p>
              </FadeInSection>

              <FadeInSection delay={200}>
                <p className="mt-5 text-foreground/[0.82] text-body leading-relaxed">
                  Every unit carries its full provenance: the initiative it originated from, the monitoring data that supported it, the validators who confirmed it, and the consensus that approved it.
                </p>
              </FadeInSection>

              <FadeInSection delay={300}>
                <p className="mt-5 text-foreground/[0.82] text-body leading-relaxed">
                  Verified units can be held for claims and reporting, retired for offset purposes, or traded through compliant digital trading environments. The trading infrastructure accommodates different market needs while ensuring rapid execution and settlement.
                </p>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* ─── 7. INTEGRATION ─── */}
        <section id="integration" className="bg-secondary py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <FadeInSection>
              <h2 className="text-section text-foreground text-center">
                Infrastructure designed for integration
              </h2>
            </FadeInSection>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Certification Bodies',
                  desc: 'Integrate the IVE to elevate issuance integrity — adding standardised monitoring, collective validation, and immutable traceability without building the technology.',
                },
                {
                  title: 'Fund Managers',
                  desc: 'Deploy accumulator contracts and PoE across portfolios to embed verification directly into capital allocation and risk management.',
                },
                {
                  title: 'Corporate Sustainability Teams',
                  desc: 'Interface with the registry and reporting layer to strengthen disclosure with verified, auditable evidence of climate delivery.',
                },
              ].map((item, i) => (
                <FadeInSection key={item.title} delay={i * 100}>
                  <div className="p-6 border-l-2 border-brand-blue/30">
                    <h3 className="text-foreground font-medium text-lg mb-2">{item.title}</h3>
                    <p className="text-foreground/[0.82] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>

            <FadeInSection delay={400}>
              <p className="mt-16 text-center text-foreground/[0.82] text-body leading-relaxed">
                The infrastructure is modular, proven, and built to scale.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* ─── 8. CTA ─── */}
        <section className="bg-background py-20 lg:py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <FadeInSection>
              <div className="flex flex-wrap items-center justify-center gap-4">
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

            <FadeInSection delay={100}>
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

export default IntegrityCertificates;
