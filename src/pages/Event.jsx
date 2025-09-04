import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Users, Heart, BookmarkPlus, Search, ArrowRight, Share2 } from 'lucide-react';

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimateCards(true);
  }, []);

  const events = [
    {
      id: 1,
      title: "Annual Charity Gala",
      date: "2024-07-15",
      time: "7:00 PM",
      location: "Grand Ballroom, Downtown Hotel",
      category: "fundraising",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop",
      description: "Join us for an elegant evening of dining, entertainment, and fundraising to support our mission.",
      attendees: 250,
      price: "$150",
      featured: true
    },
    {
      id: 2,
      title: "Community Food Drive",
      date: "2024-06-20",
      time: "9:00 AM",
      location: "Central Park Pavilion",
      category: "community",
      image: "https://images.unsplash.com/photo-1593113630400-ea4288922497?w=400&h=300&fit=crop",
      description: "Help us collect food donations for local families in need. Volunteers welcome!",
      attendees: 150,
      price: "Free",
      featured: false
    },
    {
      id: 3,
      title: "Children's Education Workshop",
      date: "2024-06-25",
      time: "2:00 PM",
      location: "Community Center",
      category: "education",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
      description: "Interactive learning session for children aged 6-12, focusing on creativity and STEM.",
      attendees: 75,
      price: "$25",
      featured: false
    },
    {
      id: 4,
      title: "Healthcare Awareness Camp",
      date: "2024-07-01",
      time: "10:00 AM",
      location: "City Health Center",
      category: "health",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      description: "Free health screenings and awareness sessions about preventive healthcare.",
      attendees: 200,
      price: "Free",
      featured: true
    },
    {
      id: 5,
      title: "Environmental Clean-up Drive",
      date: "2024-06-30",
      time: "8:00 AM",
      location: "Riverside Park",
      category: "environment",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
      description: "Join our volunteers in cleaning up the local park and waterways.",
      attendees: 100,
      price: "Free",
      featured: false
    },
    {
      id: 6,
      title: "Senior Citizens Support Meet",
      date: "2024-07-10",
      time: "3:00 PM",
      location: "Senior Center Hall",
      category: "community",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop",
      description: "Monthly gathering to provide support and companionship to elderly community members.",
      attendees: 80,
      price: "Free",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Events', icon: Calendar },
    { id: 'fundraising', name: 'Fundraising', icon: Heart },
    { id: 'community', name: 'Community', icon: Users },
    { id: 'education', name: 'Education', icon: BookmarkPlus },
    { id: 'health', name: 'Health', icon: Clock }, // changed icon for health for distinction
    { id: 'environment', name: 'Environment', icon: MapPin }
  ];

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = event.title.toLowerCase().includes(searchLower) || event.description.toLowerCase().includes(searchLower);
    return matchesCategory && matchesSearch;
  });

  const featuredEvents = events.filter(event => event.featured);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <>
      <style>{`
        /* Fade-in & slide up for cards */
        .fade-slide-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeSlideUp 0.6s forwards ease-out;
        }
        .fade-slide-up:nth-child(1) { animation-delay: 0.1s; }
        .fade-slide-up:nth-child(2) { animation-delay: 0.2s; }
        .fade-slide-up:nth-child(3) { animation-delay: 0.3s; }
        .fade-slide-up:nth-child(4) { animation-delay: 0.4s; }
        .fade-slide-up:nth-child(5) { animation-delay: 0.5s; }
        .fade-slide-up:nth-child(6) { animation-delay: 0.6s; }
        @keyframes fadeSlideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        /* Button hover scaling */
        .btn-scale:hover {
          transform: scale(1.05);
          transition: transform 0.2s ease;
        }
        /* Category button selected animation */
        .category-selected {
          animation: pulse-bg 1.5s infinite;
        }
        @keyframes pulse-bg {
          0%, 100% { background-color: #2563eb; }
          50% { background-color: #1e40af; }
        }
      `}</style>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">Our Events</h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto drop-shadow-sm">
                Join us in making a difference through our upcoming events and community gatherings
              </p>
            </div>
          </div>
        </div>

        {/* Featured Events */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Events</h2>
            <p className="text-xl text-gray-600">Don't miss these special upcoming events</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredEvents.map(event => (
              <div
                key={event.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 fade-slide-up"
              >
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Featured
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button className="bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-all shadow-md btn-scale" aria-label="Share">
                      <Share2 className="w-4 h-4 text-gray-700" />
                    </button>
                    <button className="bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-all shadow-md btn-scale" aria-label="Bookmark">
                      <BookmarkPlus className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{event.title}</h3>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 mr-3 text-blue-500" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-3 text-green-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-3 text-red-500" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-5 h-5 mr-3 text-purple-500" />
                      <span>{event.attendees} attendees expected</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-green-600">{event.price}</div>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 btn-scale">
                      <span>Register Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {categories.map(category => {
                  const Icon = category.icon;
                  const isSelected = selectedCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600
                        ${isSelected ? 'bg-blue-600 text-white category-selected' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                      `}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* All Events Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              {selectedCategory === 'all' ? 'All Events' : `${categories.find(cat => cat.id === selectedCategory)?.name} Events`}
            </h2>
            
            {filteredEvents.length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event, i) => (
                  <div
                    key={event.id}
                    className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 fade-slide-up`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="relative">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-48 object-cover"
                      />
                      {event.featured && (
                        <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                          Featured
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm truncate">{event.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-2 text-green-500" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-2 text-red-500" />
                          <span className="truncate">{event.location}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-lg font-bold text-green-600">{event.price}</div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition btn-scale">
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
// export default EventsPage;