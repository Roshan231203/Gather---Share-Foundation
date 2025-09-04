import React, { useState } from 'react';
import {
  Phone,
  ClockFading,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  MessageSquare,
  Instagram,
  Youtube,
  ArrowRight,
  Shield
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const KidsaStyleFooter = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const navigate = useNavigate();

  const contactInfo = [
    { icon: Phone, label: 'Call Us', value: '+91 74488 21212', color: 'text-blue-700' },
    { icon: ClockFading, label: 'Helpline Hours', value: 'Monday - Saturday 4:00 PM to 9:00 PM IST', color: 'text-orange-600' },
    { icon: Mail, label: 'E-Mail', value: 'gatherandsharefoundation@gmail.com', color: 'text-red-600' },
    { icon: MapPin, label: 'Location', value: 'Erode, Tamil Nadu, India', color: 'text-green-600' }
  ];

  const quickLinks = [
    { label: 'Our Mission', href: '/about' },
    { label: 'Our Impact', href: '/education' },
    { label: 'Donate', href: '/donate' },
    { label: 'Our Team', href: '/about' },
    { label: 'Get Involved', href: '/volunteer' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const socialLinks = [
    {
      icon: (props) => (
        <svg {...props} viewBox="0 0 32 32" fill="currentColor">
          <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.74 6.41L3.2 28.8l6.59-1.71c1.87 1.02 3.98 1.56 6.21 1.56h.01c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm0 23.04c-1.97 0-3.89-.53-5.56-1.53l-.4-.24-3.91 1.01 1.04-3.81-.26-.39c-1.09-1.65-1.67-3.57-1.67-5.54 0-5.67 4.61-10.28 10.28-10.28s10.28 4.61 10.28 10.28-4.61 10.28-10.28 10.28zm5.63-7.62c-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.71.16-.21.31-.81 1.01-.99 1.22-.18.21-.36.23-.67.08-.31-.16-1.31-.48-2.5-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.13-.63.13-.13.29-.34.44-.51.15-.17.2-.29.3-.48.1-.19.05-.36-.03-.51-.08-.16-.71-1.71-.97-2.34-.26-.62-.53-.54-.73-.55-.19-.01-.41-.01-.63-.01-.22 0-.57.08-.87.36-.3.29-1.14 1.12-1.14 2.73 0 1.61 1.17 3.17 1.34 3.39.16.22 2.3 3.51 5.57 4.79.78.3 1.39.48 1.87.61.79.2 1.51.17 2.08.1.64-.08 1.97-.8 2.25-1.57.28-.77.28-1.43.2-1.57-.08-.14-.29-.22-.6-.38z"/>
        </svg>
      ),
      color: 'hover:bg-green-500 hover:text-white',
      href: 'https://wa.me/message/A5YFVT57VMY6M1',
      name: 'WhatsApp'
    },
    { icon: Instagram, color: 'hover:bg-pink-400 hover:text-white', href: 'https://www.instagram.com/gather_and_share_foundation?igsh=cHBhaTA1dXVlNm51', name: 'Instagram' },
    { icon: Facebook, color: 'hover:bg-blue-400 hover:text-white', href: 'https://facebook.com/gatherandshare', name: 'Facebook' },
    { icon: Youtube, color: 'hover:bg-red-400 hover:text-white', href: 'https://youtube.com/@gatherandsharefoundation?si=YF5yOJmHFNd-lNqi', name: 'YouTube' },
  ];

  const showPolicyLinks = true;

  return (
    <>
      {/* Google Fonts Roboto Bold - ideally place in main HTML */}
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap"
        rel="stylesheet"
      />
      <div
        className="bg-gradient-to-br from-orange-50 via-pink-50 to-blue-50"
        style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}
      >
        {/* Top Contact Bar */}
        <div className="bg-white border-b border-orange-100">
          <div className="max-w-12xl mx-auto px-6 sm:px-8 lg:px-6 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-10">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div key={index} className="flex items-center space-x-4 sm:space-x-6">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center">
                      <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${contact.color}`} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-base sm:text-xl text-gray-600">{contact.label}</p>
                      <p className="font-semibold text-gray-800 text-base sm:text-lg">{contact.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <footer className="bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">

              {/* Brand Section */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex flex-col sm:flex-row items-center sm:space-x-3 mb-6 relative">
                  <a href="/" className="relative block mb-4 sm:mb-0">
                    <div className="flex items-center justify-center">
                      <img
                        src="/images/logo.png"
                        alt="Gather & Share Foundation Logo"
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full"
                        loading="lazy"
                        onError={(e) => { e.target.onerror = null; e.target.src = '/images/fallback-logo.png'; }}
                      />
                    </div>
                    <div className="absolute -top-2 -left-2 w-4 h-4 sm:w-6 sm:h-6 bg-yellow-400 rounded-full opacity-80"></div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full opacity-60"></div>
                  </a>
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl sm:text-4xl font-bold text-gray-800">Gather & Share</h3>
                    <p className="text-2xl sm:text-4xl text-orange-500 font-medium">Foundation</p>
                  </div>
                </div>
                {/* Centered Images Section */}
                <div className="flex flex-wrap justify-center items-center gap-4 py-4">
                  <img
                    src="/images/footer1.jpg"
                    alt="Footer Image 1"
                    className="w-24 h-24 object-cover rounded-lg shadow"
                    loading="lazy"
                    onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                  />
                  <img
                    src="/images/footer2.jpg"
                    alt="Footer Image 2"
                    className="w-24 h-24 object-cover rounded-lg shadow"
                    loading="lazy"
                    onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                  />
                  <img
                    src="/images/footer3.jpg"
                    alt="Footer Image 3"
                    className="w-24 h-24 object-cover rounded-lg shadow"
                    loading="lazy"
                    onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                  />
                </div>
                <p className="text-gray-600 leading-relaxed text-base sm:text-2xl">
                  We are the spark between struggle and strength — lighting the way with hope and giving voice to quiet faith.
                </p>
                <p className="text-gray-600 leading-relaxed text-base sm:text-2xl">
                  Change starts when someone cares enough to act. <br/>That someone can be you.
                </p>
                <p className="text-gray-600 leading-relaxed text-base sm:text-2xl">
                 Together, we restore more than lives — we strengthen the belief that something better is always possible.
                </p>
                <div className="flex space-x-2 sm:space-x-3 justify-center sm:justify-start">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500`}
                        aria-label={`Follow us on ${social.name}`}
                      >
                        <Icon className="w-5 h-5 text-gray-600" aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Spacer for alignment on large screens */}
              <div className="hidden lg:block"></div>

              {/* Quick Links */}
              <div className="space-y-18 lg:text-right">
                <h4 className="text-xl sm:text-4xl font-bold text-gray-800 border-b-2 border-orange-200 pb-2 lg:justify-end lg:flex">
                  Quick Links
                </h4>
                <ul className="space-y-4">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        onMouseEnter={() => setHoveredLink(`quick-${index}`)}
                        onMouseLeave={() => setHoveredLink(null)}
                        className={`flex items-end space-x-18 text-lg sm:text-2xl text-gray-600 hover:text-orange-500 transition-all duration-300 group ${
                          hoveredLink === `quick-${index}` ? 'transform translate-x-4' : ''
                        } focus:outline-none focus:ring-2 focus:ring-orange-500 lg:justify-end`}
                        aria-label={link.label}
                        style={{ justifyContent: 'flex-end' }}
                      >
                        <ArrowRight className="w-7 h-7 sm:w-10 sm:h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                        <span className="text-base sm:text-2xl">{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* (Optional) Recent Posts section can be added here */}
            </div>
          </div>

          {/* Decorative Giraffe Element */}
          <div className="absolute bottom-0 right-4 sm:right-8 hidden lg:block">
            <div className="relative">
              <div className="w-12 h-20 sm:w-20 sm:h-32 bg-gradient-to-t from-yellow-300 to-orange-300 rounded-full opacity-20"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-5 h-8 sm:w-8 sm:h-12 bg-gradient-to-t from-orange-300 to-yellow-200 rounded-full opacity-30"></div>
              <div className="absolute top-2 left-2 w-2 h-2 sm:w-3 sm:h-3 bg-orange-400 rounded-full opacity-40"></div>
              <div className="absolute top-6 right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full opacity-40"></div>
              <div className="absolute top-10 left-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full opacity-40"></div>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 py-4">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                <p className="text-xs sm:text-sm text-gray-600 text-center md:text-left">
                  © 2025 Gather & Share Foundation. All rights reserved | Jurisdiction: Tamil Nadu, India 
                </p>
             <span className="text-sm sm:text-sm text-gray-600 text-center md:text-left font-semibold">
  Developed by&nbsp;
  <a
    href="https://nutz.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-xl sm:text-xl text-black hover:text-black/60 transition-colors font-extrabold"
    style={{ fontFamily: "Roboto" }}
  >
    NUTZ
  </a>
</span>
              
                <div className="flex space-x-4 sm:space-x-2">
                  {showPolicyLinks && (
                    <>
                      <a
                        href="/privacy-policy"
                        className="group inline-flex items-center gap-2 border-2 border-green-300 text-green-600 px-3 py-1.5 sm:px-6 sm:py-2 rounded-full hover:bg-green-200 transition-all duration-500 font-semibold text-xs sm:text-sm transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Privacy Policy"
                      >
                        <Shield size={16} className="sm:size-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
                        <span>Privacy Policy</span>
                      </a>
                      <a
                        href="/terms"
                        className="group inline-flex items-center gap-2 border-2 border-blue-300 text-blue-600 px-3 py-1.5 sm:px-6 sm:py-2 rounded-full hover:bg-blue-200 transition-all duration-500 font-semibold text-xs sm:text-sm transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Terms & Conditions"
                      >
                        <Shield size={16} className="sm:size-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
                        <span>Terms & Conditions</span>
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default React.memo(KidsaStyleFooter);