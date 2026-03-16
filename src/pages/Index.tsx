import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import TrustLayersSection from '@/components/TrustLayersSection';
import ReechIntroSection from '@/components/ReechIntroSection';
import IntegrityCertsSection from '@/components/IntegrityCertsSection';
import StakeholdersSection from '@/components/StakeholdersSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="bg-canvas">
      <Navbar />
      <HeroSection />
      <TrustLayersSection />
      <ReechIntroSection />
      <IntegrityCertsSection />
      <StakeholdersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
