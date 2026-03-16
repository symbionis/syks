import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

const Contact = () => {
  return (
    <div className="bg-canvas">
      <Navbar />
      <main>
        <div className="pt-20 lg:pt-24">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
