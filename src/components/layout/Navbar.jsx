import { useState, useEffect } from 'react';
import {
  ChevronDown,
  Search,
  Menu,
  X,
  MapPin,
  Mail,
  Heart,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
} from 'lucide-react';

const navItems = [
  { name: 'Home', hasDropdown: false, href: './' },
  { name: 'About Us', hasDropdown: false, href: '/about' },
  { name: 'Volunteer', hasDropdown: false, href: '/volunteer' },
  { name: 'Contact Us', hasDropdown: false, href: '/contact' },
];

const socialIcons = [
  {
    icon: (props) => (
      <svg {...props} viewBox="0 0 32 32" fill="currentColor">
        <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.74 6.41L3.2 28.8l6.59-1.71c1.87 1.02 3.98 1.56 6.21 1.56h.01c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm0 23.04c-1.97 0-3.89-.53-5.56-1.53l-.4-.24-3.91 1.01 1.04-3.81-.26-.39c-1.09-1.65-1.67-3.57-1.67-5.54 0-5.67 4.61-10.28 10.28-10.28s10.28 4.61 10.28 10.28-4.61 10.28-10.28 10.28zm5.63-7.62c-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.71.16-.21.31-.81 1.01-.99 1.22-.18.21-.36.23-.67.08-.31-.16-1.31-.48-2.5-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.13-.63.13-.13.29-.34.44-.51.15-.17.2-.29.3-.48.1-.19.05-.36-.03-.51-.08-.16-.71-1.71-.97-2.34-.26-.62-.53-.54-.73-.55-.19-.01-.41-.01-.63-.01-.22 0-.57.08-.87.36-.3.29-1.14 1.12-1.14 2.73 0 1.61 1.17 3.17 1.34 3.39.16.22 2.3 3.51 5.57 4.79.78.3 1.39.48 1.87.61.79.2 1.51.17 2.08.1.64-.08 1.97-.8 2.25-1.57.28-.77.28-1.43.2-1.57-.08-.14-.29-.22-.6-.38z"/>
      </svg>
    ),
    color: 'hover:bg-green-400 hover:text-green-400',
    bg: 'bg-green-600',
    href: 'https://wa.me/message/A5YFVT57VMY6M1',
    name: 'WhatsApp'
  },
  { icon: Instagram, color: 'hover:text-pink-700', bg: 'bg-pink-500', href: 'https://www.instagram.com/gather_and_share_foundation?igsh=cHBhaTA1dXVlNm51' },
  { icon: Facebook, color: 'hover:text-blue-600', bg: 'bg-blue-500', href: 'https://facebook.com/gatherandshare' },
  { icon: Youtube, color: 'hover:text-red-600', bg: 'bg-red-500', href: 'https://youtube.com/@gatherandsharefoundation?si=YF5yOJmHFNd-lNqi' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-gray-50 to-orange-50 border-b border-orange-100" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center py-3 text-sm">
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6 text-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-200 to-orange-200 rounded-full flex items-center justify-center shadow-sm">
                  <MapPin size={25} className="text-blue-800" aria-hidden="true" />
                </div>
                <span className="text-xl font-bold">Erode, Tamil Nadu</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-200 to-orange-200 rounded-full flex items-center justify-center shadow-sm">
                  <Mail size={25} className="text-blue-800" aria-hidden="true" />
                </div>
                <span className="text-xl font-bold">gatherandsharefoundation@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-2 lg:mt-0">
              <span className="text-gray-600 text-sm font-medium">Follow Us On:</span>
              <div className="flex space-x-3">
                {socialIcons.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`text-gray-500 ${social.color} transition-all duration-300 hover:scale-110`}
                      aria-label={`Follow us on ${social.name || IconComponent.displayName || IconComponent.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className={`w-8 h-8 ${social.bg} rounded-md flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300`}>
                        <IconComponent size={20} className="text-white/100" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-orange-100'
            : 'bg-white shadow-lg'
        }`}
        style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="flex items-center justify-center transition-all duration-300">
                    <img
                      src="/images/logo.png"
                      alt="Gather & Share Foundation Logo"
                      className="w-20 h-20 object-contain"
                      loading="lazy"
                      onError={(e) => { e.target.onerror = null; e.target.src = '/images/fallback-logo.png'; }}
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full shadow-md animate-pulse"></div>
                </div>
                <span className="text-4xl font-bold bg-gradient-to-r from-green-600 via-orange-600 to-sky-700 bg-clip-text text-transparent">
                  Gather and Share Foundation
                </span>
              </div>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  <a
                    href={item.href}
                    className={`flex items-center space-x-1 px-4 py-3 rounded-lg text-2xl font-bold transition-all duration-300 ${
                      item.name === ''
                      
                        ? 'text-orange-600 bg-orange-50'
                        : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                    }`}
                    aria-label={`Go to ${item.name}`}
                  >
                    <span>{item.name}</span>
                  </a>
                </div>
              ))}
            </div>
            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Donate Button */}
              <a
                href="/donate"
                className="hidden lg:flex items-center space-x-3 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white font-bold px-8 py-4 rounded-full hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
                aria-label="Donate"
              >
                <span>Donate</span>
                <Heart className="group-hover:animate-pulse" />
              </a>
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-3 rounded-xl bg-gray-50 hover:bg-orange-50 transition-all duration-300 hover:scale-110 shadow-sm"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden border-t border-gray-100 bg-gradient-to-b from-white to-gray-50" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}>
              <div className="py-6 space-y-2">
                {navItems.map((item, index) => (
                  <div key={index}>
                    <a
                      href={item.href}
                      className="w-full flex items-center justify-between px-6 py-4 text-left text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-700 transition-all duration-300 font-medium rounded-lg mx-2"
                      aria-label={`Go to ${item.name}`}
                    >
                      <span>{item.name}</span>
                    </a>
                  </div>
                ))}
                {/* Mobile Donate Button */}
                <div className="px-4 pt-6">
                  <a
                    href="/donate"
                    className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white font-bold px-8 py-4 rounded-full hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg group"
                    aria-label="Donate"
                  >
                    <span>Donate</span>
                    <Heart className="group-hover:animate-pulse"></Heart>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;