"use client"

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

// Same data source as your properties page
const generateAllProperties = () => {
  return [
    {
      id: 1,
      title: "Modern 3BHK Apartment",
      location: "mumbai",
      type: "apartment",
      price: "₹1.2 Cr",
      area: "1200",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400",
      featured: true
    },
    {
      id: 2,
      title: "Luxury Villa Plot",
      location: "delhi",
      type: "plot",
      price: "₹80 Lac",
      area: "2000",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400",
      featured: true
    },
    {
      id: 3,
      title: "Commercial Office Space",
      location: "bangalore",
      type: "commercial",
      price: "₹2.5 Cr",
      area: "1800",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400",
      featured: true
    },
    {
      id: 4,
      title: "2BHK for Rent",
      location: "pune",
      type: "rental",
      price: "₹25,000/month",
      area: "900",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400",
      featured: false
    },
    {
      id: 5,
      title: "Premium Apartment Mumbai",
      location: "mumbai",
      type: "apartment",
      price: "₹2.8 Cr",
      area: "1500",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400",
      featured: true
    },
    {
      id: 6,
      title: "Delhi NCR Plot",
      location: "delhi",
      type: "plot",
      price: "₹1.2 Cr",
      area: "3000",
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=400",
      featured: true
    },
    {
      id: 7,
      title: "Gurgaon Commercial Plot",
      location: "gurgaon",
      type: "plot",
      price: "₹1.5 Cr",
      area: "2500",
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=400",
      featured: false
    },
    {
      id: 8,
      title: "Noida Residential Plot",
      location: "noida",
      type: "plot",
      price: "₹90 Lac",
      area: "1800",
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=400",
      featured: true
    }
  ];
};

// Exact same PropertyCard component from your properties page
function PropertyCard({ property }) {
  const router = useRouter();

  const handleViewDetails = () => {
    router.push(`/properties/${property.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        {property.featured && (
          <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 text-xs font-medium rounded">
            Featured
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{property.title}</h3>
        <p className="text-sm text-gray-600 mb-2 capitalize">{property.location}</p>
        <p className="text-xl font-bold text-orange-600 mb-2">{property.price}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span className="capitalize">{property.type}</span>
          <span>{property.area} sq ft</span>
        </div>
        <button 
          onClick={handleViewDetails}
          className="w-full mt-4 bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

// Floating background elements
const FloatingElement = ({ position, size, color, delay }) => (
  <div 
    className={`absolute ${position} w-${size} h-${size} ${color} rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-10`}
    style={{ animationDelay: delay }}
  ></div>
);

export default function FeaturedProjects() {
  const router = useRouter();
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch featured properties from the same data source as properties page
    const allProperties = generateAllProperties();
    const featured = allProperties.filter(property => property.featured);
    
    // Limit to 6 featured properties for the hero section
    setFeaturedProperties(featured.slice(0, 6));
    setLoading(false);
  }, []);

  const handleViewAllProperties = () => {
    router.push('/properties');
  };

  if (loading) {
    return (
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading featured properties...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50/30 to-purple-50/20"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingElement position="top-20 left-10" size="48" color="bg-orange-300" delay="0s" />
        <FloatingElement position="top-40 right-20" size="36" color="bg-purple-300" delay="2s" />
        <FloatingElement position="bottom-32 left-1/4" size="40" color="bg-green-300" delay="4s" />
        <FloatingElement position="bottom-20 right-1/3" size="32" color="bg-pink-300" delay="1s" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 border border-orange-200/50 mb-4">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse mr-2"></span>
            <span className="text-orange-800 text-sm font-medium">Premium Collection</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-800 via-orange-700 to-red-700 bg-clip-text text-transparent">
              Featured Homes & Projects
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium properties that offer exceptional value and luxury
          </p>
        </div>

        {/* Properties Grid - Using the exact same layout as properties page */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button 
            onClick={handleViewAllProperties}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:from-orange-600 hover:to-red-700 hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            <div className="relative z-10 flex items-center gap-2">
              <span>View All Properties</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            
            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50">
            <div className="text-3xl font-bold text-gray-800 mb-2">98%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50">
            <div className="text-3xl font-bold text-gray-800 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50">
            <div className="text-3xl font-bold text-gray-800 mb-2">100+</div>
            <div className="text-gray-600">New Listings Weekly</div>
          </div>
        </div>
      </div>
    </section>
  );
}