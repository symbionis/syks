import { Link } from 'react-router-dom';
import FadeInSection from '@/components/FadeInSection';
import { DataShapeBg } from '@/components/LayerShapes';
import { LAYER_COLORS, SHAPE_BY_LAYER } from '@/components/InlineLayerShapes';

const layers = [
  {
    name: 'Data' as const,
    descriptor: 'The source of truth',
    description:
      'Integrity starts at the point of capture. Our infrastructure ensures that field measurements, monitoring outputs, and operational data are recorded with provenance and immutability from the moment they are generated.',
  },
  {
    name: 'Oracle' as const,
    descriptor: 'The real-world interface',
    description:
      'The bridge between physical reality and digital representation. Our oracle services translate verified real-world outcomes into on-chain records, unlocking value that was previously trapped in analogue processes.',
  },
  {
    name: 'Integrity' as const,
    descriptor: 'The trust layer',
    description:
      'Collective validation, peer-review verification, and immutable registry. This is where data becomes certified, credible claims — governed by transparent, decentralised processes under Swiss legal frameworks.',
  },
  {
    name: 'Connectivity' as const,
    descriptor: 'The glue',
    description:
      'Infrastructure is only useful if it brings people together. We connect corporates, investors, project developers, certification bodies, and insurers into a shared trust fabric — enabling collaboration where confidence was previously missing.',
  },
];

const TrustLayersSection = () => {
  return (
    <section className="relative bg-canvas py-28 lg:py-40 overflow-hidden">
      {/* Decorative partial circle */}
      <div className="absolute -left-[200px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-40">
        <DataShapeBg className="w-full h-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10">
        <FadeInSection>
          <h2 className="text-section text-foreground text-center">Four layers of trust</h2>
        </FadeInSection>
        <FadeInSection delay={100}>
          <p className="mt-6 text-center text-foreground/70 max-w-2xl mx-auto">
            From raw data to trusted assets — our infrastructure stack ensures integrity at every stage of the journey from real-world measurement to investable digital outcome.
          </p>
        </FadeInSection>

        <div className="mt-14 flex flex-col gap-3">
          {layers.map((layer, i) => {
            const Shape = SHAPE_BY_LAYER[layer.name];
            return (
            <FadeInSection key={layer.name} delay={150 + i * 80}>
              <div className="flex items-start gap-5 bg-background rounded-sm px-6 py-5 lg:px-7 lg:py-6">
                <div className="flex-shrink-0 w-14 h-14 bg-canvas rounded-sm flex items-center justify-center p-3">
                  <Shape fill={LAYER_COLORS[layer.name]} />
                </div>
                <div className="pt-1">
                  <h3 className="text-[15px] font-medium text-foreground leading-snug">
                    {layer.name} <span className="text-foreground/60 font-normal">— {layer.descriptor}</span>
                  </h3>
                  <p className="mt-1 text-foreground/[0.78] text-[13px] leading-[1.55]">{layer.description}</p>
                </div>
              </div>
            </FadeInSection>
            );
          })}
        </div>

        <FadeInSection delay={600}>
          <p className="mt-12 text-center text-foreground/50 text-sm">
            Built on distributed ledger technology for transparency and immutability at every layer.
          </p>
          <div className="mt-6 text-center">
            <Link
              to="/infrastructure"
              className="inline-flex items-center text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Explore our infrastructure →
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default TrustLayersSection;
