import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, ArrowRight } from 'lucide-react';
import PropTypes from 'prop-types';
import { NAV_LINKS } from '@/data/siteData';
import logo from '@/assets/logo.jpeg';

function DropdownMenu({ items, isOpen }) {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60
        bg-brand-dark/95 backdrop-blur-md
        border border-brand-border shadow-card rounded-sm
        transition-all duration-200 z-50 origin-top
        ${isOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'}`}
    >
      <div className="py-1">
        {items.map((item, i) => (
          <Link key={item.path} to={item.path}
            className="flex items-center gap-2 px-4 py-2.5 text-sm text-brand-silver
              hover:text-white hover:bg-brand-red/10 hover:pl-6
              transition-all duration-200 group"
            style={{ animationDelay: `${i * 30}ms` }}
          >
            <span className="w-1 h-1 rounded-full bg-brand-red/50 group-hover:bg-brand-red transition-colors flex-shrink-0" />
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

DropdownMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, path: PropTypes.string })).isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default function Navbar() {
  const [scrolled, setScrolled]                     = useState(false);
  const [mobileOpen, setMobileOpen]                 = useState(false);
  const [dropdownOpen, setDropdownOpen]             = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location    = useLocation();

  useEffect(() => {
    setMobileOpen(false); setMobileServicesOpen(false); setDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const fn = (e) => { if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setDropdownOpen(false); };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400
        ${scrolled
          ? 'bg-brand-black/95 backdrop-blur-xl border-b border-brand-border shadow-[0_1px_0_rgba(200,0,0,0.15)]'
          : 'bg-transparent'}`}
      >
        {/* Top accent line */}
        <div className="h-0.5 bg-gradient-red w-full" />

        <div className="container-mv">
          <div className="flex items-center justify-between" style={{ height: 'clamp(4rem, 10vw, 5rem)' }}>

            {/* Logo */}
            <Link to="/" aria-label="MotorView — Home" className="flex-shrink-0 group">
              <img src={logo} alt="MotorView"
                className="w-auto object-contain transition-all duration-300 rounded-none
                  group-hover:drop-shadow-[0_0_12px_rgba(200,0,0,0.5)]"
                style={{ height: 'clamp(2.25rem, 6vw, 3rem)' }}
                draggable={false}
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center" aria-label="Main navigation">
              {NAV_LINKS.map((link) => {
                if (link.dropdown) {
                  return (
                    <div key={link.path} className="relative" ref={dropdownRef}>
                      <button
                        onClick={() => setDropdownOpen(p => !p)}
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                        aria-expanded={dropdownOpen} aria-haspopup="true"
                        className="flex items-center gap-1 px-3 py-2 text-xs font-semibold
                          tracking-[0.1em] uppercase text-brand-silver hover:text-white
                          transition-colors duration-200"
                      >
                        {link.label}
                        <ChevronDown size={12} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180 text-brand-red' : ''}`} />
                      </button>
                      <div onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                        <DropdownMenu items={link.dropdown} isOpen={dropdownOpen} />
                      </div>
                    </div>
                  );
                }
                return (
                  <NavLink key={link.path} to={link.path} end={link.path === '/'}
                    className={({ isActive }) =>
                      `relative px-3 py-2 text-xs font-semibold tracking-[0.1em] uppercase
                      transition-colors duration-200 group
                      ${isActive ? 'text-white' : 'text-brand-silver hover:text-white'}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-brand-red
                          transition-all duration-300
                          ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                      </>
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden xl:flex items-center gap-3">
              <a href="tel:+917899741100" aria-label="Call us"
                className="flex items-center gap-2 text-brand-silver hover:text-white text-xs font-medium transition-colors">
                <Phone size={14} className="text-brand-red" />
                <span>+91 78997 41100</span>
              </a>
              <div className="w-px h-5 bg-brand-border" />
              <Link to="/contact" className="btn-primary !text-xs !px-5 !py-2.5">
                Contact Us <ArrowRight size={13} />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button onClick={() => setMobileOpen(p => !p)}
              className="xl:hidden flex items-center justify-center
                border border-brand-border text-brand-silver hover:text-white
                hover:border-brand-red/50 transition-all duration-200 touch-manipulation"
              style={{ width: 'clamp(2.5rem, 8vw, 2.75rem)', height: 'clamp(2.5rem, 8vw, 2.75rem)' }}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 z-40 xl:hidden transition-all duration-300
        ${mobileOpen ? 'visible' : 'invisible'}`}
      >
        {/* Backdrop */}
        <div className={`absolute inset-0 bg-brand-black/80 backdrop-blur-sm transition-opacity duration-300
          ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[90vw]
          bg-brand-dark border-l border-brand-border shadow-card-lg
          flex flex-col transition-transform duration-300 ease-out
          ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Drawer header */}
          <div className="h-0.5 bg-gradient-red" />
          <div className="flex items-center justify-between px-5 py-4 border-b border-brand-border">
            <img src={logo} alt="MotorView" className="h-9 w-auto object-contain" />
            <button onClick={() => setMobileOpen(false)}
              className="w-9 h-9 flex items-center justify-center border border-brand-border
                text-brand-silver hover:text-white hover:border-brand-red/50 transition-all"
            >
              <X size={18} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto py-4 px-3">
            {NAV_LINKS.map((link, i) => {
              if (link.dropdown) {
                return (
                  <div key={link.path}>
                    <button onClick={() => setMobileServicesOpen(p => !p)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-sm
                        text-xs font-semibold uppercase tracking-widest
                        text-brand-silver hover:text-white hover:bg-white/5 transition-all"
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      {link.label}
                      <ChevronDown size={14} className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180 text-brand-red' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300
                      ${mobileServicesOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="ml-4 pl-3 border-l border-brand-border/50 mt-1 mb-2">
                        {link.dropdown.map((sub) => (
                          <Link key={sub.path} to={sub.path}
                            className="flex items-center gap-2 px-3 py-2.5 text-sm text-brand-silver
                              hover:text-white hover:bg-white/5 rounded-sm transition-all duration-200">
                            <span className="w-1 h-1 rounded-full bg-brand-red/60 flex-shrink-0" />
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <NavLink key={link.path} to={link.path} end={link.path === '/'}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-sm text-xs font-semibold uppercase tracking-widest
                    transition-all duration-200
                    ${isActive ? 'text-white bg-brand-red/10 border-l-2 border-brand-red pl-3' : 'text-brand-silver hover:text-white hover:bg-white/5'}`
                  }
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {link.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Drawer footer */}
          <div className="px-5 py-5 border-t border-brand-border space-y-3">
            <a href="tel:+917899741100"
              className="flex items-center gap-3 py-3 px-4 border border-brand-border
                text-brand-silver hover:text-white hover:border-brand-red/50 transition-all text-sm">
              <Phone size={16} className="text-brand-red" />
              +91 78997 41100
            </a>
            <Link to="/contact" className="btn-primary w-full justify-center !text-xs">
              Contact Us <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
