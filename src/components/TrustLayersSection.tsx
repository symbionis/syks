import { Link } from 'react-router-dom';
import FadeInSection from '@/components/FadeInSection';
import {
  DataShape,
  OracleShape,
  IntegrityShape,
  ConnectivityShape,
  DataShapeBg,
} from '@/components/LayerShapes';

const layers = [
  {
    name: 'Data',
    descriptor: 'The source of truth',
    description:
      'Integrity starts at the point of capture. Our infrastructure ensures that field measurements, monitoring outputs, and operational data are recorded with provenance and immutability from the moment they are generated.',
    shape: <DataShape size={56} />,
  },
  {
    name: 'Oracle',
    descriptor: 'The real-world interface',
    description:
      'The bridge between physical reality and digital representation. Our oracle services translate verified real-world outcomes into on-chain records, unlocking value that was previously trapped in analogue processes.',
    shape: <OracleShape size={56} />,
  },
  {
    name: 'Integrity',
    descriptor: 'The trust layer',
    description:
      'Collective validation, peer-review verification, and immutable registry. This is where data becomes certified, credible claims — governed by transparent, decentralised processes under Swiss legal frameworks.',
    shape: <IntegrityShape size={56} color="hsl(var(--blue))" />,
  },
  {
    name: 'Connectivity',
    descriptor: 'The glue',
    description:
      'Infrastructure is only useful if it brings people together. We connect corporates, investors, project developers, certification bodies, and insurers into a shared trust fabric — enabling collaboration where confidence was previously missing.',
    shape: <ConnectivityShape size={56} />,
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

        <div className="mt-16 flex flex-col gap-8">
          {layers.map((layer, i) => (
            <FadeInSection key={layer.name} delay={150 + i * 100}>
              <div className="flex items-start gap-6 bg-background rounded-sm p-6 lg:p-8">
                <div className="flex-shrink-0 mt-1">{layer.shape}</div>
                <div>
                  <h3 className="text-lg font-medium text-foreground">
                    {layer.name} <span className="text-foreground/60">· {layer.descriptor}</span>
                  </h3>
                  <p className="mt-2 text-foreground/[0.82] text-[15px] leading-relaxed">{layer.description}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
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
