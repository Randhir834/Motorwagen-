import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronRight, Clock } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { NAV_LINKS, SERVICES } from '@/data/siteData';
import logo from '@/assets/logo.jpeg';

const SOCIAL = [
  { icon: FaInstagram,  label: 'Instagram', href: 'https://instagram.com/motorwagenevolution' },
  { icon: FaFacebookF,  label: 'Facebook',  href: 'https://facebook.com/motorwagenevolution' },
  { icon: FaYoutube,    label: 'YouTube',   href: 'https://youtube.com/motorwagenevolution' },
  { icon: FaWhatsapp,   label: 'WhatsApp',  href: 'https://wa.me/917899741100' },
];

const QUICK = NAV_LINKS.filter(l => !l.dropdown).slice(0, 7);

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-dark relative overflow-hidden">
      {/* Top red accent */}
      <div className="h-0.5 bg-gradient-red" />

      {/* Subtle noise pattern */}
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />

      <div className="relative container-mv" style={{ 
        paddingTop: 'clamp(3.5rem, 10vw, 5rem)', 
        paddingBottom: 'clamp(2rem, 6vw, 3rem)' 
      }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" 
          style={{ gap: 'clamp(2rem, 7vw, 3rem)' }}>

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <img src={logo} alt="MotorView" className="h-10 sm:h-12 w-auto object-contain" draggable={false} />
            </Link>
            <p className="text-brand-silver text-sm leading-relaxed mb-6 max-w-xs">
              Premium auto detailing services that protect, restore, and elevate your vehicle.
              Trusted by automobile lovers across India.
            </p>
            <div className="flex items-center gap-3">
              <a href={SOCIAL[0].href} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="text-[#E4405F] hover:opacity-80 transition-opacity">
                <FaInstagram size={24} />
              </a>
              <a href={SOCIAL[1].href} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="text-[#1877F2] hover:opacity-80 transition-opacity">
                <FaFacebookF size={24} />
              </a>
              <a href={SOCIAL[2].href} target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                className="text-[#FF0000] hover:opacity-80 transition-opacity">
                <FaYoutube size={24} />
              </a>
              <a href={SOCIAL[3].href} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="text-[#25D366] hover:opacity-80 transition-opacity">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-brand-white font-semibold text-xs uppercase tracking-[0.2em] mb-5 pb-2 border-b border-brand-border">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK.map(l => (
                <li key={l.path}>
                  <Link to={l.path}
                    className="group flex items-center gap-2 text-brand-silver hover:text-white text-sm transition-all duration-200">
                    <ChevronRight size={12} className="text-brand-red opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all duration-200" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-brand-white font-semibold text-xs uppercase tracking-[0.2em] mb-5 pb-2 border-b border-brand-border">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map(s => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`}
                    className="group flex items-center gap-2 text-brand-silver hover:text-white text-sm transition-all duration-200">
                    <ChevronRight size={12} className="text-brand-red opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all duration-200" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-brand-white font-semibold text-xs uppercase tracking-[0.2em] mb-5 pb-2 border-b border-brand-border">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+917899741100"
                  className="flex items-start gap-3 text-brand-silver hover:text-white text-sm transition-colors group">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-brand-red/10 border border-brand-red/20 group-hover:bg-brand-red/20 transition-colors">
                    <Phone size={13} className="text-brand-red" />
                  </div>
                  <div>
                    <p className="text-2xs text-brand-silver/60 uppercase tracking-widest mb-0.5">Phone</p>
                    +91 78997 41100
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:hello@motorwagenevolution.in"
                  className="flex items-start gap-3 text-brand-silver hover:text-white text-sm transition-colors group">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-brand-red/10 border border-brand-red/20 group-hover:bg-brand-red/20 transition-colors">
                    <Mail size={13} className="text-brand-red" />
                  </div>
                  <div>
                    <p className="text-2xs text-brand-silver/60 uppercase tracking-widest mb-0.5">Email</p>
                    info@motorwagenevolution.in
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-brand-silver text-sm">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-brand-red/10 border border-brand-red/20">
                  <MapPin size={13} className="text-brand-red" />
                </div>
                <div>
                  <p className="text-2xs text-brand-silver/60 uppercase tracking-widest mb-0.5">Address</p>
                  K Narayanapura Main Rd,<br />Near K Narayanpura, Opp. De Grand Restaurant,<br />Signal, Narayanapura,<br />Bengaluru, Karnataka 560077
                </div>
              </li>
              <li className="flex items-start gap-3 text-brand-silver text-sm">
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-brand-red/10 border border-brand-red/20">
                  <Clock size={13} className="text-brand-red" />
                </div>
                <div>
                  <p className="text-2xs text-brand-silver/60 uppercase tracking-widest mb-0.5">Hours</p>
                  Mon–Sat: 8AM–7PM<br />
                  <span className="text-brand-silver/60">Sunday: 9AM–3PM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-brand-border">
        <div className="container-mv py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          <p className="text-brand-silver/60 text-2xs sm:text-xs text-center sm:text-left">
            © {year} MotorView Auto Detailing. All rights reserved.
          </p>
          <p className="text-brand-silver/60 text-2xs sm:text-xs text-center">
            Made with <span className="text-brand-red">♥</span> for automobile lovers
          </p>
          <div className="flex items-center gap-3 sm:gap-4">
            <Link to="/faqs" className="text-brand-silver/60 hover:text-brand-red text-2xs sm:text-xs transition-colors">
              Privacy
            </Link>
            <Link to="/faqs" className="text-brand-silver/60 hover:text-brand-red text-2xs sm:text-xs transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
