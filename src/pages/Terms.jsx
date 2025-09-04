import React from 'react';
import {
  Mail,
  Phone,
  Globe,
  Calendar,
  Shield,
  Users,
  FileText,
  AlertCircle,
} from 'lucide-react';

const TermsAndConditionsPage = () => {
  const contactInfo = {
    website: 'https://gatherandsharefoundation.org',
    email: 'gatherandsharefoundation@gmail.com',
    phone: '+91 74488 21212',
  };

  const sections = [
    {
      id: 1,
      title: 'Introduction',
      content: `These Terms and Conditions form a legally binding agreement between you ("User", "You") and Gather and Share Foundation ("We", "Us", "Our"), governing your access to and use of the website https://gatherandsharefoundation.org, and all related services, content, and tools.

By accessing, browsing, using our website or availing any of our services (including donations or volunteer registration), you agree to comply with these Terms in full. If you do not agree with any part of these Terms, you must discontinue use of the website and services immediately.

We reserve the right to update or modify these Terms at any time. Continued use after any changes will signify your acceptance of the revised Terms.`,
    },
    {
      id: 2,
      title: 'Definitions',
      content: `• "Website" refers to the official domain of the foundation: gatherandsharefoundation.org
• "Service" means all digital offerings, tools, products, donation mechanisms, and informational resources provided through the website.
• "User" / "You" refers to any individual accessing or interacting with the website.
• "Content" refers to all text, images, videos, designs, and other media published on the website.
• "Device" means any internet-enabled equipment such as computers, tablets, or mobile phones.`,
    },
    {
      id: 3,
      title: 'Age Requirement',
      content: `By using this website, you confirm that you are at least 18 years of age or that you are the age of majority in your jurisdiction and have consented to allow minors under your care to use the site under your responsibility.`,
    },
    {
      id: 4,
      title: 'Use of Website and Services',
      content: `• The website is provided for personal, non-commercial, and educational use only.
• You agree to use the website solely for lawful purposes and in accordance with all applicable local, national, and international laws.
• Any attempt to harm, defraud, disable, overburden, or impair the functioning of the website is strictly prohibited.
• Unauthorized use of our name, logo, or copyrighted content is prohibited and may result in legal action.`,
    },
    {
      id: 5,
      title: 'Online Store and Donations',
      content: `• Some services or products may be offered through the site, including donation options, merchandise, or digital goods.
• Prices are subject to change without prior notice.
• We reserve the right to accept or reject any order at our sole discretion.
• All transactions are processed securely, and personal information is handled in compliance with our Privacy Policy.
• Donations once made are non-refundable. In case of multiple transactions, excess amounts will be refunded within 5–7 business days.`,
    },
    {
      id: 6,
      title: 'Account and Billing Information',
      content: `• You are responsible for providing accurate, complete, and current contact and payment information.
• We may cancel or limit transactions that appear suspicious or involve duplicate accounts or addresses.
• It is your duty to update any changes in billing details promptly.`,
    },
    {
      id: 7,
      title: 'Optional Tools and Third-Party Services',
      content: `• We may offer access to optional third-party tools or services. These are provided "as is" without any warranties.
• Your use of such tools is entirely at your own risk and subject to third-party terms and conditions.
• We are not liable for any harm or loss resulting from the use of external services.`,
    },
    {
      id: 8,
      title: 'Third-Party Links and Content',
      content: `• Our website may include links to external websites operated by other parties.
• We do not endorse or control the content or practices of these third-party sites.
• Users are advised to read the terms and privacy policies of those sites before engaging with them.`,
    },
    {
      id: 9,
      title: 'User Content and Submissions',
      content: `• By submitting feedback, ideas, or materials (voluntarily or upon request), you grant us the right to use, edit, and distribute such content globally, without compensation.
• You must not post content that is abusive, illegal, defamatory, or infringes on others' intellectual property or privacy.
• We reserve the right to remove any user-generated content at our sole discretion.`,
    },
    {
      id: 10,
      title: 'Privacy and Personal Information',
      content: `• Your submission of personal data is governed by our Privacy Policy.
• We collect information such as your name, email, address, phone number, and donation details to process services and communicate with you.
• You have the right to access, update, or delete your personal data by contacting us.`,
    },
    {
      id: 11,
      title: 'Cookies Policy',
      content: `• Our website uses cookies to enhance user experience and analyze traffic.
• By continuing to use the site, you consent to our use of cookies as described in our Cookies Policy.
• You may disable cookies in your browser settings if desired.`,
    },
    {
      id: 12,
      title: 'Intellectual Property Rights',
      content: `• All content, design elements, and media on this website are the property of Gather and Share Foundation.
• Unauthorized reproduction, redistribution, or use of our content—including the name and logo—is strictly prohibited.
• Written permission must be obtained for any reuse or adaptation of our materials.`,
    },
    {
      id: 13,
      title: 'Website Availability and Accuracy',
      content: `• The content on our website is provided for general information only.
• We make no warranties regarding its accuracy, completeness, or currency.
• We reserve the right to alter, update, or discontinue any feature without prior notice.`,
    },
    {
      id: 14,
      title: 'Prohibited Activities',
      content: `You must not use the website or its content to:
• Engage in unlawful, abusive, or fraudulent behavior
• Violate intellectual property rights
• Spread malicious software or viruses
• Collect or track personal information of others
• Misrepresent your identity
• Interfere with the site's security mechanisms

Violation of any of these rules may result in the termination of your access to our services.`,
    },
    {
      id: 15,
      title: 'Disclaimer of Warranties',
      content: `The website and all services are provided "as is" and "as available." We do not guarantee:
• That the site will be uninterrupted, secure, or error-free
• That any specific result will be achieved from the use of the service
• That all defects will be corrected

You use the service at your own risk.`,
    },
    {
      id: 16,
      title: 'Limitation of Liability',
      content: `We shall not be liable for:
• Any direct or indirect damages, including but not limited to lost profits, lost data, or business interruption
• Any issues arising from third-party links or services
• Any losses due to viruses, malicious code, or user error

In jurisdictions where liability cannot be excluded or limited, our liability is limited to the maximum extent permitted by law.`,
    },
    {
      id: 17,
      title: 'Indemnification',
      content: `You agree to indemnify and hold harmless Gather and Share Foundation, its officers, affiliates, employees, and partners from any claims, liabilities, or demands—including legal fees—arising from:
• Your breach of these Terms
• Your use of the services
• Your violation of any law or third-party rights`,
    },
    {
      id: 18,
      title: 'Termination of Service',
      content: `We may suspend or terminate your access without prior notice for any violation of these Terms. Upon termination, your right to use the site or services ceases immediately.

You may also terminate this agreement by ceasing all use of our services and notifying us in writing.`,
    },
    {
      id: 19,
      title: 'Governing Law and Jurisdiction',
      content: `These Terms shall be governed by and interpreted in accordance with the laws of India, and all disputes shall fall under the jurisdiction of courts located in Tamil Nadu.`,
    },
    {
      id: 20,
      title: 'Severability and Waiver',
      content: `• If any provision of these Terms is found unenforceable, the remaining provisions shall remain in full effect.
• Failure to enforce any provision does not constitute a waiver of that provision or any other rights.`,
    },
    {
      id: 21,
      title: 'Entire Agreement',
      content: `These Terms of Service, along with our Privacy and Cookie Policies, constitute the entire agreement between you and Gather and Share Foundation. They supersede any prior agreements or understandings.`,
    },
    {
      id: 22,
      title: 'Updates to Terms and Conditions',
      content: `We reserve the right to revise these Terms at any time. Material changes will be communicated via our website, and it is your responsibility to review this page periodically. Continued use implies acceptance of the updated Terms.`,
    },
  ];

  const formatContent = (content) => {
    return content.split('\n').map((paragraph, index) => (
      <p key={index} className="mb-3 last:mb-0">
        {paragraph}
      </p>
    ));
  };

  return (
    <div
      className="bg-amber-50"
      style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}
    >
      {/* Hero Section */}
      <div
        className="h-40 md:h-60 bg-cover bg-center flex items-center justify-center text-black relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/Terms-cover.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-label="Terms and Conditions Hero Section"
        onError={(e) => (e.target.style.backgroundImage = "url('/src/assets/images/fallback-cover.jpg')")}
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-xl md:text-2xl opacity-80">
              I'm thinking different. I'm thinking Arby's
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
            animation: spin-slow 12s linear infinite;
          }
        `}</style>
      </div>

      {/* Contact Information */}
      {/* <div className="flex flex-wrap justify-center gap-6 text-sm mt-6 mb-6">
        <div className="flex items-center gap-2" aria-label="Website">
          <Globe className="w-4 h-4" />
          <span>{contactInfo.website}</span>
        </div>
        <div className="flex items-center gap-2" aria-label="Email">
          <Mail className="w-4 h-4" />
          <span>{contactInfo.email}</span>
        </div>
        <div className="flex items-center gap-2" aria-label="Phone">
          <Phone className="w-4 h-4" />
          <span>{contactInfo.phone}</span>
        </div>
      </div> */}

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
       
        <div className="bg-amber-100  ">
          <div className="flex items-start gap-3">
           
            <div>
              
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-red-600 mt-1" />
            <div>
              <h3 className="font-semibold text-red-800 mb-2">Important Notice</h3>
              <p className="text-red-700">
                By using our website and services, you agree to these terms in full. 
                Please read them carefully before proceeding.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <section
              key={section.id}
              className="bg-white rounded-lg shadow-md border border-orange-200 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-orange-100 to-amber-100 px-6 py-4 border-b border-orange-200">
                <h2 className="text-xl font-semibold text-orange-800 flex items-center gap-3">
                  <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {section.id}
                  </span>
                  {section.title}
                </h2>
              </div>
              <div className="p-6">
                <div className="text-gray-700 leading-relaxed">
                  {formatContent(section.content)}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Footer Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-300 to-orange-200 text-amber-950 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-4">Questions about these Terms?</h3>
            <p className="mb-6 text-xl text-amber-800">
              If you have any questions or concerns about these Terms and Conditions, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 bg-blue-400 hover:bg-amber-700 px-4 py-2 rounded-lg transition-colors"
                aria-label="Email Us"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-2 bg-green-400 hover:bg-orange-700 px-4 py-2 rounded-lg transition-colors"
                aria-label="Call Us"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
              <a
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-yellow-300 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors"
                aria-label="Visit Website"
              >
                <Globe className="w-4 h-4" />
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsAndConditionsPage;