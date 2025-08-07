'use client'
// src/app/services/page.js
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = searchParams.get('location');
  const type = searchParams.get('type');
  const service = searchParams.get('service');
  const featured = searchParams.get('featured');

  useEffect(() => {
    fetchServices();
  }, [location, type, service, featured]);

  const fetchServices = async () => {
    setLoading(true);
    try {
      // Build query string
      const params = new URLSearchParams();
      if (location) params.append('location', location);
      if (type) params.append('type', type);
      if (service) params.append('service', service);
      if (featured) params.append('featured', featured);

      const response = await fetch(`/api/owner-services?${params.toString()}`);
      const data = await response.json();
      
      if (data.success) {
        setServices(data.services);
      } else {
        console.error('API Error:', data.message);
        setServices([]);
      }
    } catch (error) {
      console.error('Error fetching services:', error);
      setServices([]);
    } finally {
      setLoading(false);
    }
  };

  const getPageTitle = () => {
    const typeLabels = {
      'sell-rent': 'Property Listing Services',
      'valuation': 'Property Valuation Services', 
      'legal': 'Legal Services',
      'interior': 'Interior Design Services'
    };

    let title = typeLabels[type] || 'Owner Services';
    
    if (location) {
      title += ` in ${location.charAt(0).toUpperCase() + location.slice(1)}`;
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
    router.push(`/services?${params.toString()}`);
  };

  const removeFilter = (key) => {
    const params = new URLSearchParams(searchParams);
    params.delete(key);
    const newQuery = params.toString();
    router.push(newQuery ? `/services?${newQuery}` : '/services');
  };

  const clearAllFilters = () => {
    router.push('/services');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading services...</p>
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
                {services.length} services available
                {location && ` in ${location.charAt(0).toUpperCase() + location.slice(1)}`}
              </p>
            </div>
            
            {/* Quick Actions */}
            <div className="flex space-x-3">
              <Link 
                href="/post-property"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-medium"
              >
                Post Property FREE
              </Link>
              <Link 
                href="/valuation"
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 text-sm font-medium"
              >
                Get Valuation
              </Link>
            </div>
          </div>

          {/* Active Filters */}
          {(location || type || service || featured) && (
            <div className="flex flex-wrap gap-2 mt-4">
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
                  🏠 {type.replace('-', ' ').toUpperCase()}
                  <button 
                    onClick={() => removeFilter('type')}
                    className="ml-2 text-green-600 hover:text-green-800"
                  >
                    ×
                  </button>
                </span>
              )}
              {service && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  ⚙️ {service.replace('-', ' ').toUpperCase()}
                  <button 
                    onClick={() => removeFilter('service')}
                    className="ml-2 text-purple-600 hover:text-purple-800"
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
              
              {/* Service Type Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Type
                </label>
                <select 
                  value={type || ''}
                  onChange={(e) => updateFilter('type', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Services</option>
                  <option value="sell-rent">Sell/Rent Property</option>
                  <option value="valuation">Property Valuation</option>
                  <option value="legal">Legal Services</option>
                  <option value="interior">Interior Design</option>
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
                </select>
              </div>

              {/* Specific Service Filter */}
              {type && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Specific Service
                  </label>
                  <select 
                    value={service || ''}
                    onChange={(e) => updateFilter('service', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">All</option>
                    {type === 'sell-rent' && (
                      <>
                        <option value="sell">For Sale</option>
                        <option value="rent">For Rent</option>
                      </>
                    )}
                    {type === 'valuation' && (
                      <>
                        <option value="residential-valuation">Residential</option>
                        <option value="commercial-valuation">Commercial</option>
                      </>
                    )}
                    {type === 'legal' && (
                      <>
                        <option value="registration">Registration</option>
                        <option value="title-verification">Title Verification</option>
                      </>
                    )}
                    {type === 'interior' && (
                      <>
                        <option value="residential-design">Residential Design</option>
                        <option value="commercial-design">Commercial Design</option>
                      </>
                    )}
                  </select>
                </div>
              )}

              {/* Featured Services Toggle */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={featured === 'true'}
                    onChange={(e) => updateFilter('featured', e.target.checked ? 'true' : '')}
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-700">Featured Services Only</span>
                </label>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <Link 
                  href="/post-property"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-sm font-medium text-center block"
                >
                  Post Property
                </Link>
                <Link 
                  href="/valuation"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 text-sm font-medium text-center block"
                >
                  Get Valuation
                </Link>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="lg:w-3/4">
            {services.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters to see more services.</p>
                <button 
                  onClick={clearAllFilters}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  View All Services
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Service Card Component
function ServiceCard({ service }) {
  const getServiceIcon = (type) => {
    const icons = {
      'sell-rent': '🏠',
      'valuation': '💰',
      'legal': '⚖️',
      'interior': '🎨'
    };
    return icons[type] || '🏢';
  };

  const getServiceBadge = (type) => {
    const badges = {
      'sell-rent': { text: 'FREE LISTING', color: 'bg-green-100 text-green-800' },
      'valuation': { text: 'EXPERT VALUATION', color: 'bg-blue-100 text-blue-800' },
      'legal': { text: 'LEGAL SUPPORT', color: 'bg-purple-100 text-purple-800' },
      'interior': { text: 'DESIGN SERVICE', color: 'bg-orange-100 text-orange-800' }
    };
    return badges[type] || { text: 'SERVICE', color: 'bg-gray-100 text-gray-800' };
  };

  const badge = getServiceBadge(service.type);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-48 object-cover"
        />
        {service.featured && (
          <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 text-xs font-medium rounded">
            Featured
          </div>
        )}
        <div className={`absolute top-2 right-2 ${badge.color} px-2 py-1 text-xs font-medium rounded`}>
          {badge.text}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 flex-1">{service.title}</h3>
          <span className="text-2xl ml-2">{getServiceIcon(service.type)}</span>
        </div>
        
        <p className="text-sm text-gray-600 mb-2 capitalize">{service.location}</p>
        <p className="text-xl font-bold text-blue-600 mb-2">{service.price}</p>
        
        <div className="text-sm text-gray-600 mb-3">
          {service.description}
        </div>

        {/* Service-specific details */}
        <div className="space-y-1 text-xs text-gray-500 mb-4">
          {service.area && (
            <div className="flex justify-between">
              <span>Area:</span>
              <span>{service.area} sq ft</span>
            </div>
          )}
          {service.duration && (
            <div className="flex justify-between">
              <span>Duration:</span>
              <span>{service.duration}</span>
            </div>
          )}
          {service.accuracy && (
            <div className="flex justify-between">
              <span>Accuracy:</span>
              <span>{service.accuracy}</span>
            </div>
          )}
          {service.estimatedValue && (
            <div className="flex justify-between">
              <span>Est. Value:</span>
              <span className="font-medium text-green-600">{service.estimatedValue}</span>
            </div>
          )}
        </div>

        <div className="flex space-x-2">
          <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
            {service.type === 'sell-rent' ? 'View Details' : 'Get Service'}
          </button>
          {service.contact && (
            <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors text-sm font-medium">
              Call
            </button>
          )}
        </div>
      </div>
    </div>
  );
}