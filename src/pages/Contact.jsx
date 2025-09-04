import React, { useState } from 'react';
import {
  Mail,
  Globe,
  Phone,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  // Optional: For newsletter subscription checkbox (not required, demo only)
  // const [newsletter, setNewsletter] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    // setNewsletter(false); // If using newsletter state
  };

  return (
    <div
      className="bg-gradient-to-br from-orange-200 via-orange-50 to-orange-200 "
      style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}
    >
      {/* Hero Section */}
      <div
        className="h-40 md:h-60 bg-cover bg-center flex items-center justify-center text-black relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/Cover-contact2.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-label="Contact Us Hero Section"
      >
        {/* Animated floating circles */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-4 left-8 w-8 h-8 bg-orange-200 rounded-full animate-bounce"></div>
          <div className="absolute top-10 right-16 w-6 h-6 bg-yellow-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-8 left-1/4 w-10 h-10 bg-amber-300 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-4 right-1/3 w-7 h-7 bg-orange-400 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-gradient-to-br from-orange-300 to-yellow-200 rounded-full opacity-60 animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl opacity-80">
             Every story, question, and idea brings us closer to making a difference.

            </p>
          </div>
        </div>
        {/* Animation keyframes */}
        <style>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
        `}</style>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-amber-800 text-xl leading-relaxed">
                We would love to hear from you because even the smallest message can become the start of something extraordinary.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-8 text-xl">
              <div className="flex items-start space-x-2">
                <div className="bg-sky-700 p-3 rounded-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1 text-2xl">
                    Phone
                  </h3>
                  <p className="text-md text-amber-700">+91 74488 21212</p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <div className="bg-red-600 p-3 rounded-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-2xl text-amber-900 mb-1">
                    Email
                  </h3>
                  <p className="text-md text-amber-700">gatherandsharefoundation@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <div className="bg-green-700 p-3 rounded-lg">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-2xl text-amber-900 mb-1">
                    Website
                  </h3>
                  <p className="text-md text-amber-700">www.gatherandsharefoundation.org</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold text-amber-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
  <a
    href="https://wa.me/message/A5YFVT57VMY6M1"
    className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-700 transition-colors"
    aria-label="WhatsApp"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 32 32">
      <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.74 6.41L3.2 28.8l6.59-1.71c1.87 1.02 3.98 1.56 6.21 1.56h.01c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm0 23.04c-1.97 0-3.89-.53-5.56-1.53l-.4-.24-3.91 1.01 1.04-3.81-.26-.39c-1.09-1.65-1.67-3.57-1.67-5.54 0-5.67 4.61-10.28 10.28-10.28s10.28 4.61 10.28 10.28-4.61 10.28-10.28 10.28zm5.63-7.62c-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.71.16-.21.31-.81 1.01-.99 1.22-.18.21-.36.23-.67.08-.31-.16-1.31-.48-2.5-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.13-.63.13-.13.29-.34.44-.51.15-.17.2-.29.3-.48.1-.19.05-.36-.03-.51-.08-.16-.71-1.71-.97-2.34-.26-.62-.53-.54-.73-.55-.19-.01-.41-.01-.63-.01-.22 0-.57.08-.87.36-.3.29-1.14 1.12-1.14 2.73 0 1.61 1.17 3.17 1.34 3.39.16.22 2.3 3.51 5.57 4.79.78.3 1.39.48 1.87.61.79.2 1.51.17 2.08.1.64-.08 1.97-.8 2.25-1.57.28-.77.28-1.43.2-1.57-.08-.14-.29-.22-.6-.38z"/>
    </svg>
  </a>
                <a
                  href="https://www.instagram.com/gather_and_share_foundation?igsh=cHBhaTA1dXVlNm51"
                  className="bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-sky-600 text-white p-3 rounded-lg hover:bg-blue-900 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com/@gatherandsharefoundation?si=YF5yOJmHFNd-lNqi"
                  className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors"
                  aria-label="Youtube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl shadow-xl p-8 border border-amber-200"
              onSubmit={handleSubmit}
            >
              <h2 className="text-3xl font-bold text-amber-900 mb-8">Send us a Message</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xl font-medium text-amber-800 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white"
                      placeholder="Your full name"
                      aria-label="Full Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xl font-medium text-amber-800 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white"
                      placeholder="your.email@example.com"
                      aria-label="Email Address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xl font-medium text-amber-800 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white"
                      placeholder="+91"
                      aria-label="Phone Number"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xl font-medium text-amber-800 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white"
                      aria-label="Subject"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="donation">Donation Information</option>
                      <option value="partnership">Partnership</option>
                      <option value="media">Media & Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xl font-medium text-amber-800 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-vertical bg-white"
                    placeholder="Tell us how we can help you..."
                    aria-label="Message"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-amber-300 rounded"
                    aria-label="Subscribe to newsletter"
                    // checked={newsletter}
                    // onChange={e => setNewsletter(e.target.checked)}
                  />
                  <label htmlFor="newsletter" className="ml-3 text-xl text-amber-700">
                    I would like to receive updates about your programs and initiatives
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-orange-700 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
                  aria-label="Send Message"    
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
    