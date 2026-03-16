import { Link } from 'react-router-dom';
import FadeInSection from '@/components/FadeInSection';

const cards = [
  {
    title: 'Proof of Execution',
    description:
      'Standardised monitoring, third-party validation, and milestone tracking. An immutable, auditable record of every claimed outcome.',
  },
  {
    title: 'Accumulator contracts',
    description:
      'Initiative-specific smart contracts governing progressive capital release against verified milestones.',
  },
  {
    title: 'Validator governance',
    description:
      'Independent review panels, consensus mechanisms, and on-chain performance tracking.',
  },
  {
    title: 'Double ledger',
    description:
      'Financial returns and climate outcomes tracked on separate but linked ledgers — impact and income, inseparable.',
  },
];

const IntegrityCertsSection = () => {
  return (
    <section className="bg-canvas py-28 lg:py-40">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <FadeInSection>
          <h2 className="text-section text-foreground">Integrity Certificates — The trust engine</h2>
        </FadeInSection>

        <FadeInSection delay={100}>
          <p className="mt-6 text-foreground/60 max-w-2xl">
            Without verification, investor and regulator confidence fails. Integrity Certificates provides the technology backbone that ensures every financed initiative is recorded, independently validated, and deployed according to predefined criteria.
          </p>
        </FadeInSection>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <FadeInSection key={card.title} delay={150 + i * 100}>
              <div className="bg-background border-l-4 border-accent p-6 lg:p-8 h-full">
                <h3 className="font-medium text-foreground text-lg">{card.title}</h3>
                <p className="mt-2 text-foreground/55 text-[15px] leading-relaxed">{card.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={600}>
          <p className="mt-12 text-foreground/50 text-sm max-w-2xl">
            Integrity Certificates transforms climate impact into financial-grade evidence — not by assertion, but by proof.
          </p>
          <div className="mt-6">
            <Link
              to="/ic"
              className="inline-flex items-center text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Explore Integrity Certificates →
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default IntegrityCertsSection;
