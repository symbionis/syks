import FadeInSection from '@/components/FadeInSection';

const stakeholders = [
  {
    name: 'Corporates',
    description:
      'Turn your climate strategy into an investable, revenue-generating framework. Mobilise external capital, preserve corporate liquidity, and create forward-looking assets from your transition pipeline.',
  },
  {
    name: 'Investors',
    description:
      'Access institutional-grade digital climate assets. Every unit backed by verified execution, regulated fund structure, and measurable impact.',
  },
  {
    name: 'Project developers',
    description:
      'Streamlined, milestone-based funding for climate solutions. The infrastructure handles verification, capital release, and reporting.',
  },
  {
    name: 'Financial institutions',
    description:
      'Expand your sustainable finance offering with infrastructure that interfaces with recognised financial structures and embeds verified climate outcomes.',
  },
];

const StakeholdersSection = () => {
  return (
    <section className="bg-canvas py-28 lg:py-40 border-t border-foreground/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeInSection>
          <h2 className="text-section text-foreground text-center">
            Built for the actors driving climate finance
          </h2>
        </FadeInSection>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stakeholders.map((s, i) => (
            <FadeInSection key={s.name} delay={100 + i * 100}>
              <div className="bg-secondary p-7 lg:p-8 h-full rounded-sm">
                <h3 className="font-medium text-foreground text-lg">{s.name}</h3>
                <p className="mt-3 text-foreground/[0.82] text-[15px] leading-relaxed">{s.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StakeholdersSection;
