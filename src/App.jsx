 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Media from './pages/Media';
import Event from './pages/Event';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Volunteer from './pages/Volunteer'; // Placeholder for Volunteer page, replace with actual component later
import PrivacyPolicy from './pages/Privacypolicy'; // Placeholder for Privacy Policy, replace with actual component later
import Terms from './pages/Terms'; // Placeholder for Terms & Conditions, replace with actual component later

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <BrowserRouter>
      <div className="relative min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/media" element={<Media />} />
            <Route path="/event" element={<Event />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/volunteer" element={<Volunteer />} /> {/* Placeholder for Volunteer page, replace with actual component later */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Placeholder for Privacy Policy, replace with actual component later */}
            <Route path="/terms" element={<Terms />} /> {/* Placeholder for Terms & Conditions, replace with actual component later */}
            {/* Add a catch-all route for 404 pages */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 z-50"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>
    </BrowserRouter>

    
  );
}

export default App;