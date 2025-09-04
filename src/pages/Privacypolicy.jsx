import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
  Shield,
  Lock,
  Users,
  FileText,
  Eye,
  Globe,
} from 'lucide-react';

const PrivacyPolicyPage = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const sections = [
    {
      id: 'introduction',
      title: '1. Introduction',
      icon: <FileText className="w-10 h-10" />,
      content: (
        <div className="space-y-4">
          <p className="text-amber-800 leading-relaxed">
            Gather and Share Foundation is a non-governmental organization devoted to improving the lives of children and vulnerable communities by advocating for their rights and supporting their fundamental needs. In line with our commitment to transparency, responsibility, and the protection of personal information, this policy outlines how we collect, use, share, and safeguard your data, and governs your interaction with our online platforms.
          </p>
          <p className="text-amber-800 leading-relaxed">
            This Policy covers all domains within "gatherandsharefoundation.org" and associated sites managed by Gather and Share Foundation. It does not extend to third-party sites that may be linked through our services.
          </p>
        </div>
      ),
    },
    {
      id: 'definitions',
      title: '2. Definitions',
      icon: <FileText className="w-10 h-10" />,
      content: (
        <div className="space-y-3">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-300">
            <h4 className="font-semibold text-amber-900 mb-2">Personal Data</h4>
            <p className="text-amber-800 text-sm">Any information that identifies an individual directly or indirectly (e.g., name, address, phone number, email, ID numbers).</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-300">
            <h4 className="font-semibold text-amber-900 mb-2">Usage Data</h4>
            <p className="text-amber-800 text-sm">Information collected automatically through interaction with our website, such as IP addresses, browser type, and time spent.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-300">
            <h4 className="font-semibold text-amber-900 mb-2">Cookies</h4>
            <p className="text-amber-800 text-sm">Small text files placed on your device to remember preferences and track site usage.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-300">
            <h4 className="font-semibold text-amber-900 mb-2">Service</h4>
            <p className="text-amber-800 text-sm">The official website and digital services of Gather and Share Foundation.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-300">
            <h4 className="font-semibold text-amber-900 mb-2">Service Providers</h4>
            <p className="text-amber-800 text-sm">External entities engaged to support operations, marketing, technical infrastructure, or payment processing.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-300">
            <h4 className="font-semibold text-amber-900 mb-2">You / User</h4>
            <p className="text-amber-800 text-sm">Any individual accessing our site or services.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-300">
            <h4 className="font-semibold text-amber-900 mb-2">Confidential Information</h4>
            <p className="text-amber-800 text-sm">Any data excluded from public disclosure due to legal, operational, or security concerns.</p>
          </div>
        </div>
      ),
    },
    {
      id: 'scope-data',
      title: '3. Scope of Data Collected',
      icon: <Users className="w-10 h-10" />,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-amber-900 mb-3 text-lg">A. Personal Information</h4>
            <p className="text-amber-800 mb-3">We collect personally identifiable data that may include:</p>
            <ul className="space-y-2 text-amber-800">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Full name, gender, date of birth, government ID details</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Contact data including email address, phone number, and mailing address</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Donation and transaction records</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Communication and subscription preferences</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-amber-900 mb-3 text-lg">B. Usage & Technical Data</h4>
            <p className="text-amber-800 mb-3">Automatically collected data includes:</p>
            <ul className="space-y-2 text-amber-800">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>IP address, device type, browser version, and location data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Website behavior including pages visited, time spent, and click-throughs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Diagnostic data from device interactions</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-amber-900 mb-3 text-lg">C. Tracking Technologies</h4>
            <p className="text-amber-800 mb-3">We employ cookies, beacons, scripts, and similar tools to:</p>
            <ul className="space-y-2 text-amber-800">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Remember user preferences and improve site usability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>Measure traffic, session patterns, and optimize content delivery</span>
              </li>
            </ul>
            <p className="text-amber-800 mt-3">
              Cookies may be session-based (expire when browser is closed) or persistent (stored across sessions). Users may opt to disable cookies through their browser, though this may affect site functionality.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'purpose-data',
      title: '4. Purpose of Data Collection and Processing',
      icon: <Shield className="w-10 h-10" />,
      content: (
        <div className="space-y-4">
          <p className="text-amber-800">We collect and process data for legitimate purposes, including:</p>
          <ul className="space-y-3 text-amber-800">
            <li className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold">Verification & Security:</span> Authenticating identity and preventing misuse
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold">Service Fulfillment:</span> Managing donations, volunteer registration, and issuing receipts
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold">Communication:</span> Responding to inquiries and delivering updates via email, SMS, or calls
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold">Legal Compliance:</span> Fulfilling regulatory, contractual, and statutory obligations
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Users className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold">Experience Personalization:</span> Adapting content based on preferences or usage behavior
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold">Marketing & Outreach:</span> Sharing relevant event and campaign information, subject to your consent
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'legal-basis',
      title: '5. Legal Basis for Processing',
      icon: <FileText className="w-10 h-10" />,
      content: (
        <div className="space-y-4">
          <p className="text-amber-800">Processing of your personal data is based on:</p>
          <ul className="space-y-2 text-amber-800">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>Your explicit consent</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>Performance of contractual obligations (e.g., donations, memberships)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>Legal requirements and compliance</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>Legitimate interests of the organization in fulfilling its mission and services</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'data-sharing',
      title: '6. Data Sharing and Disclosure',
      icon: <Users className="w-10 h-10" />,
      content: (
        <div className="space-y-4">
          <p className="text-amber-800">
            We do not rent, sell, or commercially distribute personal data. However, we may share data under strict confidentiality in the following circumstances:
          </p>
          <ul className="space-y-2 text-amber-800">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>With Trusted Service Providers:</strong> For hosting, analytics, payment processing
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>With Business Partners:</strong> For joint events or campaigns, under non-disclosure agreements
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>For Legal Purposes:</strong> When required by law, court orders, or governmental authorities
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>During Mergers or Asset Transfers:</strong> In such cases, prior notice will be given
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Via Third-Party Social Media:</strong> If users interact or register through integrated platforms, their contacts may view shared content or profile details
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'data-retention',
      title: '7. Data Retention and Disposal',
      icon: <FileText className="w-10 h-10" />,
      content: (
        <div className="space-y-4">
          <p className="text-amber-800">We retain data:</p>
          <ul className="space-y-2 text-amber-800">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>Only for as long as necessary to meet the purposes described in this policy</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>In compliance with statutory and tax regulations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>Usage data for analysis and service optimization is retained for a shorter period, unless legally required</span>
            </li>
          </ul>
          <p className="text-amber-800">
            When no longer required, data is securely destroyed or anonymized.
          </p>
        </div>
      ),
    },
    {
      id: 'security',
      title: '8. Security of Personal Information',
      icon: <Lock className="w-10 h-10" />,
      content: (
        <div className="space-y-4">
          <p className="text-amber-800">We adopt industry-standard technical and organizational safeguards including:</p>
          <ul className="space-y-2 text-amber-800">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>Data encryption and secure data storage</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>Role-based access and multi-layered security protocols</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>Regular audits and breach detection mechanisms</span>
            </li>
          </ul>
          <p className="text-amber-800">
            Despite these measures, we acknowledge that no digital platform can offer absolute security.
          </p>
        </div>
      ),
    },
    {
      id: 'international-transfers',
      title: '9. International Data Transfers',
      icon: <Globe className="w-10 h-10" />,
      content: (
        <div className="space-y-4">
          <p className="text-amber-800">Your data may be stored or processed outside India. In such cases:</p>
          <ul className="space-y-2 text-amber-800">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>Adequate protections are ensured through legally recognized frameworks</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>Transfers are governed by standard contractual clauses or equivalent mechanisms to safeguard your rights</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'user-rights',
      title: '10. Your Rights and Choices',
      icon: <Eye className="w-10 h-10" />,
      content: (
        <div className="space-y-4">
          <p className="text-amber-800">As a user, you have the right to:</p>
          <ul className="space-y-2 text-amber-800">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Access:</strong> Request your personal data and how it's used
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Correction:</strong> Request corrections to inaccurate data
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Deletion:</strong> Ask for data to be deleted under certain conditions
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Restriction:</strong> Limit the processing of your data
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Objection:</strong> Object to data processing for direct marketing
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
              <span>
                <strong>Portability:</strong> Receive your data in a portable format
              </span>
            </li>
          </ul>
          <p className="text-amber-800">
            All requests can be submitted via email to: <strong>gatherandsharefoundation@gmail.com</strong>
          </p>
          <p className="text-amber-800">
            We aim to respond within 30 days.
          </p>
        </div>
      ),
    },
    {
      id: 'children-privacy',
      title: '11. Children\'s Privacy',
      icon: <Shield className="w-10 h-10" />,
      content: (
        <div className="space-y-2">
          <p className="text-amber-800 leading-relaxed">
            Gather and Share Foundation does not knowingly collect data from children under 18. If such data is discovered, it will be deleted immediately.
          </p>
          <p className="text-amber-800 leading-relaxed">
            Parents or guardians may request removal of their child\'s data.
          </p>
        </div>
      ),
    },
    {
      id: 'third-party-links',
      title: '12. Third-Party Links',
      icon: <Globe className="w-10 h-10" />,
      content: (
        <div className="space-y-2">
          <p className="text-amber-800 leading-relaxed">
            Our website may include links to external websites. We do not endorse or control the content, privacy practices, or policies of such third parties.
          </p>
          <p className="text-amber-800 leading-relaxed">
            Users are encouraged to review their respective privacy policies.
          </p>
        </div>
      ),
    },
    {
      id: 'cookies-advertising',
      title: '13. Cookies and Advertising',
      icon: <FileText className="w-10 h-10" />,
      content: (
        <div className="space-y-2">
          <p className="text-amber-800 leading-relaxed">
            We use cookies to track behavior for analytics, improve advertising strategies, and deliver personalized content.
          </p>
          <p className="text-amber-800 leading-relaxed">
            You can manage cookie settings through your browser. Continued use of the site constitutes consent to our cookie practices.
          </p>
        </div>
      ),
    },
    {
      id: 'policy-updates',
      title: '14. Updates to this Policy',
      icon: <FileText className="w-10 h-10" />,
      content: (
        <div className="space-y-2">
          <p className="text-amber-800 leading-relaxed">
            This policy may be updated to reflect regulatory changes or improvements in our privacy practices.
          </p>
          <p className="text-amber-800 leading-relaxed">
            Changes will be posted on our website, be effective immediately upon publication, and be communicated to users where applicable.
          </p>
          <p className="text-amber-800 leading-relaxed">
            We recommend reviewing this policy periodically. The "Last Updated" date will indicate the latest revision.
          </p>
        </div>
      ),
    },
    {
      id: 'copyright',
      title: '15. Copyright Policy',
      icon: <FileText className="w-10 h-10" />,
      content: (
        <div className="space-y-2">
          <p className="text-amber-800 leading-relaxed">
            All content including images, text, reports, and graphic designs on our website are protected by copyright.
          </p>
          <p className="text-amber-800 leading-relaxed">
            Content may only be mirrored, republished, or translated with prior written permission. A formal request must be submitted through the contact form with intended use and audience details.
          </p>
          <p className="text-amber-800 leading-relaxed">
            Unauthorized use of our name or logo is a violation of international law. All materials remain the intellectual property of Gather and Share Foundation.
          </p>
        </div>
      ),
    },
    {
      id: 'information-disclosure',
      title: '16. Information Disclosure Policy',
      icon: <Users className="w-10 h-10" />,
      content: (
        <div className="space-y-2">
          <p className="text-amber-800 leading-relaxed">
            Gather and Share Foundation affirms the principle of public access to information regarding our operations, aligned with our accountability to donors, stakeholders, and the general public.
          </p>
          <p className="text-amber-800 leading-relaxed">
            Information includes all published or unpublished data, in any medium, related to our programs, decisions, and strategies.
          </p>
          <p className="text-amber-800 leading-relaxed">
            This policy applies to all documents in our possession unless designated as confidential.
          </p>
        </div>
      ),
    },
    {
      id: 'confidentiality',
      title: '17. Confidentiality and Limitations',
      icon: <Lock className="w-10 h-10" />,
      content: (
        <div className="space-y-2">
          <p className="text-amber-800 leading-relaxed">
            The following are excluded from disclosure:
          </p>
          <ul className="list-disc list-inside text-amber-800 ml-4">
            <li>Information shared with or by third parties under confidentiality</li>
            <li>Data that may endanger individuals or national security</li>
            <li>Legal and regulatory documents under privilege</li>
            <li>Internal communication and working documents</li>
            <li>Commercially sensitive financial information</li>
            <li>Data that may undermine diplomatic or partner relations</li>
          </ul>
          <p className="text-amber-800 leading-relaxed">
            Partial disclosures may be provided where feasible.
          </p>
        </div>
      ),
    },
    {
      id: 'requesting-information',
      title: '18. Requesting Information',
      icon: <FileText className="w-10 h-10" />,
      content: (
        <div className="space-y-2">
          <p className="text-amber-800 leading-relaxed">
            Any person or organization may submit a formal request for non-confidential information.
          </p>
          <ul className="list-disc list-inside text-amber-800 ml-4">
            <li>Acknowledgement within 10 working days</li>
            <li>Fulfillment within 30 working days, depending on complexity</li>
            <li>Reproduction fees may apply for materials</li>
          </ul>
          <p className="text-amber-800 leading-relaxed">
            Requests may be denied if the data is confidential or protected, it imposes excessive resource demands, or it is deemed frivolous.
          </p>
          <p className="text-amber-800 leading-relaxed">
            Appeals may be made to the Deputy Executive Director for Management, who will respond within 60 days.
          </p>
        </div>
      ),
    },
    {
      id: 'language-availability',
      title: '19. Language and Availability',
      icon: <Globe className="w-10 h-10" />,
      content: (
        <div className="space-y-2">
          <p className="text-amber-800 leading-relaxed">
            This policy is published in English, and may be translated into other Indian languages for regional accessibility as needed.
          </p>
        </div>
      ),
    },
    {
      id: 'disclaimer',
      title: '20. Disclaimer',
      icon: <Shield className="w-10 h-10" />,
      content: (
        <div className="space-y-2">
          <p className="text-amber-800 leading-relaxed">
            While we strive to ensure the accuracy of disclosed information, we make no guarantees, express or implied.
          </p>
          <p className="text-amber-800 leading-relaxed">
            Gather and Share Foundation shall not be held liable for any loss resulting from the use of information provided.
          </p>
        </div>
      ),
    },
  ];

  

  return (
    <div
      className="bg-amber-100"
      style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}
    >
      {/* Hero Section */}
      <div
        className="h-40 md:h-60 bg-cover bg-center flex items-center justify-center text-black relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/Privacy-cover.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-label="Privacy Policy Hero Section"
        onError={(e) => (e.target.style.backgroundImage = "url('/src/assets/images/fallback-cover.jpg')")}
      >
        {/* Animated floating circles */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-4 left-8 w-8 h-8 bg-green-200 rounded-full animate-bounce"></div>
          <div className="absolute top-10 right-16 w-6 h-6 bg-yellow-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-8 left-1/4 w-10 h-10 bg-amber-300 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-4 right-1/3 w-7 h-7 bg-green-400 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-gradient-to-br from-green-300 to-yellow-200 rounded-full opacity-60 animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl md:text-2xl opacity-80">
              Protecting Your Privacy is Our Priority
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

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Key Sections with Accordion */}
        <div className="space-y-6 mb-12">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-200"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 bg-gradient-to-r from-green-200 to-green-300 flex items-center justify-between hover:from-green-200 hover:to-amber-200 transition-all duration-200"
                aria-expanded={expandedSections[section.id]}
                aria-controls={section.id}
                aria-label={`Toggle ${section.title}`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-green-600">{section.icon}</div>
                  <h2 className="text-xl font-semibold text-amber-900 text-left">
                    {section.title}
                  </h2>
                </div>
                <div className="text-green-600">
                  {expandedSections[section.id] ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              {expandedSections[section.id] && (
                <div
                  id={section.id}
                  className="p-6 bg-white"
                  role="region"
                >
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>

       

        {/* Contact Information */}
        {/* <div className="mt-16 bg-gradient-to-r from-green-100 to-amber-100 rounded-xl p-8 border border-green-200">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">
            Contact Information
          </h2>
          <p className="text-amber-800 text-center mb-6">
            For any questions, grievances, or requests, please contact:
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-md">
              <Mail className="w-5 h-5 text-green-600" />
              <div>
                <span className="font-semibold text-amber-900">Email:</span>
                <br />
                <span className="text-amber-800">gatherandsharefoundation@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-md">
              <Phone className="w-5 h-5 text-green-600" />
              <div>
                <span className="font-semibold text-amber-900">WhatsApp:</span>
                <br />
                <span className="text-amber-800">+91 74488 21212</span>
              </div>
            </div>
          </div>
        </div> */}

        {/* Footer */}
      
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;