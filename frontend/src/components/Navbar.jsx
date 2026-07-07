import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Map', path: '/explore' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-brand-bg py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold shadow-md group-hover:bg-brand-secondary transition-colors">
              G
            </div>
            <span className="text-xl font-bold font-heading text-brand-dark tracking-tight">Geo<span className="text-brand-primary">Map</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                  isActive(link.path)
                    ? 'text-brand-primary bg-brand-primary/10'
                    : 'text-brand-dark hover:text-brand-primary hover:bg-brand-primary/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="w-px h-6 bg-brand-dark/10 mx-2"></div>
            
            <Link
              to="/login"
              className="ml-2 px-5 py-2 text-sm font-medium text-brand-dark hover:text-brand-primary transition-colors"
            >
              Log in
            </Link>
            <Link
              to="/register"
              className="ml-2 px-5 py-2 rounded-full text-sm font-medium bg-brand-primary text-white hover:bg-brand-secondary shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-brand-dark hover:text-brand-primary hover:bg-brand-primary/5 transition-colors focus:outline-none"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 origin-top border-t border-brand-dark/5 ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0 overflow-hidden'}`}>
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                isActive(link.path) ? 'bg-brand-primary/10 text-brand-primary' : 'text-brand-dark hover:bg-brand-primary/5 hover:text-brand-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-brand-dark/5 my-4"></div>
          <div className="flex flex-col gap-3">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block w-full px-4 py-3 text-center rounded-xl text-base font-medium text-brand-dark border border-brand-dark/10 hover:bg-brand-dark/5 transition-colors"
            >
              Log in
            </Link>
            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="block w-full px-4 py-3 text-center rounded-xl text-base font-medium bg-brand-primary text-white shadow-md hover:bg-brand-secondary transition-colors"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
