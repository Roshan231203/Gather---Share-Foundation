import React, { useState, useEffect } from 'react';
import { Search, Calendar, MessageCircle, ArrowRight, User, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Building Stronger Communities Through Education",
    excerpt: "Discover how our education initiatives are transforming lives and creating lasting change in underserved communities across the region.",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=500&fit=crop",
    category: "Education",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "5 min read",
    comments: 24,
    featured: true
  },
  {
    id: 2,
    title: "Healthcare Access: Breaking Down Barriers",
    excerpt: "Our mobile healthcare units are bringing essential medical services to remote areas, ensuring no one is left behind.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop",
    category: "Healthcare",
    author: "Dr. Michael Chen",
    date: "March 12, 2024",
    readTime: "7 min read",
    comments: 18,
    featured: false
  },
  {
    id: 3,
    title: "Clean Water Initiative: 1000 Wells and Counting",
    excerpt: "Learn about our water access program that has provided clean, safe drinking water to over 50,000 people.",
    image: "https://images.unsplash.com/photo-1594736797933-d0ceaedaf9a6?w=800&h=500&fit=crop",
    category: "Water & Sanitation",
    author: "Emma Rodriguez",
    date: "March 10, 2024",
    readTime: "6 min read",
    comments: 32,
    featured: false
  },
  {
    id: 4,
    title: "Empowering Women Through Microfinance",
    excerpt: "See how small loans are making big differences in women's lives, creating economic opportunities and independence.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=500&fit=crop",
    category: "Women Empowerment",
    author: "Priya Sharma",
    date: "March 8, 2024",
    readTime: "4 min read",
    comments: 15,
    featured: false
  },
  {
    id: 5,
    title: "Environmental Conservation: Planting for the Future",
    excerpt: "Our reforestation efforts have planted over 100,000 trees, contributing to climate action and biodiversity preservation.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop",
    category: "Environment",
    author: "James Wilson",
    date: "March 5, 2024",
    readTime: "8 min read",
    comments: 27,
    featured: false
  },
  {
    id: 6,
    title: "Youth Leadership Program: Nurturing Tomorrow's Leaders",
    excerpt: "Meet the young changemakers who are leading community initiatives and inspiring others to take action.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=500&fit=crop",
    category: "Youth Development",
    author: "Alex Thompson",
    date: "March 3, 2024",
    readTime: "5 min read",
    comments: 41,
    featured: false
  }
];

const categories = [
  "All Categories",
  "Education",
  "Healthcare", 
  "Water & Sanitation",
  "Women Empowerment",
  "Environment",
  "Youth Development"
];

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    blogPosts.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => new Set([...prev, index]));
      }, 200 + index * 150);
    });

    return () => clearTimeout(timer);
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All Categories" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
  <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-t from-emerald-600 to-sky-50 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-xl md:text-2xl opacity-90">
               Stories of impact, insights from the field, and updates on our mission to create positive change.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Section */}
        <div className={`mb-12 transition-all duration-800 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-emerald-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === "All Categories" && !searchTerm && (
          <div className={`mb-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="lg:flex">
                <div className="lg:w-1/2">
                  <div className="relative h-64 lg:h-full overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        Featured
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-700 font-medium">{featuredPost.author}</span>
                      <Calendar className="w-4 h-4 text-gray-400 ml-2" />
                      <span className="text-gray-500 text-sm">{featuredPost.date}</span>
                    </div>
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300 group">
                      Read More
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {regularPosts.map((post, index) => (
            <article
              key={post.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 cursor-pointer group ${
                visibleCards.has(index + 1)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${600 + index * 150}ms`
              }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-700 font-medium">{post.author}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-blue-600 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        {filteredPosts.length > 6 && (
          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
              Load More Articles
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog; 