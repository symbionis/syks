import { Link } from 'react-router-dom';
import FadeInSection from '@/components/FadeInSection';

const ReechIntroSection = () => {
  return (
    <section className="bg-secondary py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Text column */}
          <div>
            <FadeInSection>
              <h2 className="text-headline text-foreground">
                REECH
              </h2>
              <div className="mt-2 w-16 h-1 bg-lime rounded-full" />
            </FadeInSection>

            <FadeInSection delay={100}>
              <p className="mt-4 text-xl text-foreground/[0.85] font-medium max-w-md">
                Transforming climate action into investable assets
              </p>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="mt-8 space-y-5 text-foreground/[0.82] leading-relaxed text-[15px]">
                <p>
                  Corporate climate ambition has never been stronger. But the low-hanging fruit has been harvested. The next phase of decarbonisation — factory retooling, advanced carbon capture, regenerative agriculture, technology deployment — requires transformative capital at a scale that annual budgets and traditional financing cannot deliver.
                </p>
                <p>
                  At the same time, the disconnect between climate commitments and verifiable outcomes undermines investor confidence. Without rigorous proof of execution, sustainability remains a reporting exercise rather than an investable asset class.
                </p>
                <p>
                  REECH is a climate finance framework that bridges this gap. It interfaces with recognised financial structures and layers our proprietary impact verification infrastructure on top.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={300}>
              <Link
                to="/reech"
                className="inline-flex items-center mt-10 px-7 py-3.5 bg-lime text-primary-foreground font-medium text-sm tracking-wide rounded-sm hover:brightness-110 transition-all duration-200"
              >
                Explore REECH →
              </Link>
            </FadeInSection>
          </div>

          {/* Diagram column */}
          <FadeInSection delay={200}>
            <div className="flex flex-col gap-0 mt-4 lg:mt-12">
              {/* Layer 1 */}
              <div className="bg-navy text-secondary px-6 py-5 rounded-t-sm">
                <p className="text-xs uppercase tracking-widest text-secondary/50 mb-1">Layer 1</p>
                <p className="font-medium text-sm">Recognised financial architecture</p>
              </div>

              {/* Connector */}
              <div className="flex justify-center py-3">
                <div className="w-px h-8 bg-foreground/20" />
              </div>

              {/* Layer 2 */}
              <div className="bg-accent text-accent-foreground px-6 py-5">
                <p className="text-xs uppercase tracking-widest text-accent-foreground/50 mb-1">Layer 2</p>
                <p className="font-medium text-sm">Incentive Value Engine (IVE)</p>
              </div>

              {/* Connector */}
              <div className="flex justify-center py-3">
                <div className="w-px h-8 bg-foreground/20" />
              </div>

              {/* DIU Card */}
              <div className="border-2 border-lime bg-background px-6 py-5 rounded-b-sm">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-8 bg-lime rounded-full" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-foreground/50 mb-0.5">Digital Impact Unit</p>
                    <p className="font-medium text-foreground text-sm">DIU</p>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-center text-foreground/40 text-xs italic font-serif">
                A Real World Asset: compliant, bankable, auditable.
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default ReechIntroSection;
