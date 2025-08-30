'use client'
// src/app/properties/page.js
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';

// Separate the component that uses useSearchParams
function PropertiesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = searchParams.get('location');
  const type = searchParams.get('type');
  const featured = searchParams.get('featured');

  useEffect(() => {
    fetchProperties();
  }, [location, type, featured]);

  const fetchProperties = async () => {
    setLoading(true);
    try {
      // Build query string
      const params = new URLSearchParams();
      if (location) params.append('location', location);
      if (type) params.append('type', type);
      if (featured) params.append('featured', featured);

      // For now, let's use mock data instead of API call
      const mockData = generateMockProperties(location, type, featured);
      setProperties(mockData);
    } catch (error) {
      console.error('Error fetching properties:', error);
      setProperties([]);
    } finally {
      setLoading(false);
    }
  };

  // Mock data generator for testing
  const generateMockProperties = (loc, propType, isFeatured) => {
    const mockProperties = [
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
        featured: false
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
        featured: false
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

    let filtered = mockProperties;

    if (loc) {
      filtered = filtered.filter(p => p.location.toLowerCase() === loc.toLowerCase());
    }
    if (propType) {
      filtered = filtered.filter(p => p.type === propType);
    }
    if (isFeatured === 'true') {
      filtered = filtered.filter(p => p.featured === true);
    }

    return filtered;
  };

  const getPageTitle = () => {
    let title = 'Properties';
    if (location) {
      title += ` in ${location.charAt(0).toUpperCase() + location.slice(1)}`;
    }
    if (type) {
      const typeLabels = {
        'apartment': 'Apartments',
        'plot': 'Plots/Land',
        'commercial': 'Commercial Properties',
        'rental': 'Rental Properties',
        'pg': 'PG Accommodations'
      };
      title = `${typeLabels[type] || type} ${location ? `in ${location}` : ''}`;
    }
    if (featured === 'true') {
      title = 'Featured ' + title;
    }
    return title;
  };

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/properties?${params.toString()}`);
  };

  const removeFilter = (key) => {
    const params = new URLSearchParams(searchParams);
    params.delete(key);
    const newQuery = params.toString();
    router.push(newQuery ? `/properties?${newQuery}` : '/properties');
  };

  const clearAllFilters = () => {
    router.push('/properties');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading properties...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{getPageTitle()}</h1>
              <p className="mt-2 text-gray-600">
                {properties.length} properties found
                {location && ` in ${location.charAt(0).toUpperCase() + location.slice(1)}`}
              </p>
            </div>
            
            {/* Active Filters */}
            {(location || type || featured) && (
              <div className="flex flex-wrap gap-2">
                {location && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    📍 {location.charAt(0).toUpperCase() + location.slice(1)}
                    <button 
                      onClick={() => removeFilter('location')}
                      className="ml-2 text-blue-600 hover:text-blue-800"
                    >
                      ×
                    </button>
                  </span>
                )}
                {type && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    🏠 {type.charAt(0).toUpperCase() + type.slice(1)}
                    <button 
                      onClick={() => removeFilter('type')}
                      className="ml-2 text-green-600 hover:text-green-800"
                    >
                      ×
                    </button>
                  </span>
                )}
                {featured === 'true' && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                    ⭐ Featured
                    <button 
                      onClick={() => removeFilter('featured')}
                      className="ml-2 text-yellow-600 hover:text-yellow-800"
                    >
                      ×
                    </button>
                  </span>
                )}
                <button 
                  onClick={clearAllFilters}
                  className="text-sm text-gray-500 hover:text-gray-700 underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
              
              {/* Property Type Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </label>
                <select 
                  value={type || ''}
                  onChange={(e) => updateFilter('type', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Types</option>
                  <option value="apartment">Apartments</option>
                  <option value="plot">Plots/Land</option>
                  <option value="commercial">Commercial</option>
                  <option value="rental">For Rent</option>
                  <option value="pg">PG</option>
                </select>
              </div>

              {/* Location Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <select 
                  value={location || ''}
                  onChange={(e) => updateFilter('location', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Locations</option>
                  <option value="delhi">Delhi / NCR</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="pune">Pune</option>
                  <option value="kolkata">Kolkata</option>
                  <option value="chennai">Chennai</option>
                  <option value="ahmedabad">Ahmedabad</option>
                  <option value="gurgaon">Gurgaon</option>
                  <option value="noida">Noida</option>
                  <option value="greater-noida">Greater Noida</option>
                  <option value="faridabad">Faridabad</option>
                </select>
              </div>

              {/* Featured Properties Toggle */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={featured === 'true'}
                    onChange={(e) => updateFilter('featured', e.target.checked ? 'true' : '')}
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-700">Featured Properties Only</span>
                </label>
              </div>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="lg:w-3/4">
            {properties.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No properties found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters to see more properties.</p>
                <button 
                  onClick={clearAllFilters}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  View All Properties
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {properties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Loading fallback component
function PropertiesLoading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading properties...</p>
      </div>
    </div>
  );
}

// Main exported component with Suspense boundary
export default function PropertiesPage() {
  return (
    <Suspense fallback={<PropertiesLoading />}>
      <PropertiesContent />
    </Suspense>
  );
}

// Updated Property Card Component with Working Button
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
        <p className="text-xl font-bold text-blue-600 mb-2">{property.price}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span className="capitalize">{property.type}</span>
          <span>{property.area} sq ft</span>
        </div>
        <button 
          onClick={handleViewDetails}
          className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
}