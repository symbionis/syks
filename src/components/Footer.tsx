import { Link } from 'react-router-dom';
import logoIvory from '@/assets/syks-logo-ivory.png';

const Footer = () => {
  return (
    <footer className="bg-navy py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Logo & tagline */}
          <div className="md:col-span-2">
            <img src={logoIvory} alt="SYKS" className="w-[80px] h-auto mb-6" />
            <p className="font-serif text-ivory/50 italic text-lg max-w-md">
              Where digital trust meets the real world
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <Link to="/infrastructure" className="text-ivory/60 hover:text-ivory transition-colors text-sm">Infrastructure</Link>
            <Link to="/reech" className="text-ivory/60 hover:text-ivory transition-colors text-sm">REECH</Link>
            <Link to="/ic" className="text-ivory/60 hover:text-ivory transition-colors text-sm">Integrity Certificates</Link>
            <Link to="/contact" className="text-ivory/60 hover:text-ivory transition-colors text-sm">Contact</Link>
            <a href="#" className="text-ivory/60 hover:text-ivory transition-colors text-sm">Privacy Policy</a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/10">
          <p className="text-ivory/30 text-xs">
            SYKS sàrl &nbsp;|&nbsp; Geneva, Switzerland &nbsp;|&nbsp; CH-660.5.684.023-6
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
