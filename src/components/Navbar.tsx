import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoBlue from '@/assets/syks-logo-blue.png';
import logoIvory from '@/assets/syks-logo-ivory.png';

const navLinks = [
  { label: 'Infrastructure', href: '/infrastructure' },
  { label: 'REECH', href: '/reech' },
  { label: 'Integrity Certificates', href: '/ic' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isOnDark, setIsOnDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const darkHeroPages = ['/', '/ic', '/reech', '/infrastructure', '/privacy-policy', '/contact'];
    const hasDarkHero = darkHeroPages.includes(location.pathname);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (hasDarkHero) {
        // Hero height varies; use a reasonable threshold
        const heroThreshold = location.pathname === '/' ? window.innerHeight * 0.8 : 400;
        setIsOnDark(window.scrollY < heroThreshold);
      } else {
        setIsOnDark(false);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const logo = isOnDark && !scrolled ? logoIvory : logoBlue;
  const textColor = isOnDark && !scrolled ? 'text-ivory' : 'text-navy';
  const bgClass = scrolled
    ? 'bg-canvas/90 backdrop-blur-md shadow-sm'
    : 'bg-transparent';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="SYKS" className="w-[80px] h-auto transition-all duration-300" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`relative py-1.5 text-sm font-medium tracking-wide transition-opacity duration-200 hover:opacity-70 ${
                  scrolled ? 'text-navy' : textColor
                } ${isActive ? "after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-[2px] after:bg-lime" : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden ${scrolled ? 'text-navy' : textColor}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-canvas/95 backdrop-blur-md border-t border-ivory">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-navy text-lg font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
