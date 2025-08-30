'use client'
// src/app/services/[id]/page.js
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedServices, setRelatedServices] = useState([]);

  const serviceId = params.id;

  useEffect(() => {
    if (serviceId) {
      fetchServiceDetails();
      fetchRelatedServices();
    }
  }, [serviceId]);

  const fetchServiceDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/owner-services/${serviceId}`);
      const data = await response.json();
      
      if (data.success) {
        setService(data.service);
      } else {
        console.error('Service not found');
        // Redirect to services page if service not found
        router.push('/services');
      }
    } catch (error) {
      console.error('Error fetching service details:', error);
      router.push('/services');
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedServices = async () => {
    try {
      const response = await fetch(`/api/owner-services?related=${serviceId}&limit=3`);
      const data = await response.json();
      
      if (data.success) {
        setRelatedServices(data.services);
      }
    } catch (error) {
      console.error('Error fetching related services:', error);
    }
  };

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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading service details...</p>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Service Not Found</h2>
          <p className="text-gray-600 mb-4">The service you're looking for doesn't exist.</p>
          <Link 
            href="/services"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const badge = getServiceBadge(service.type);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/services" className="text-gray-500 hover:text-gray-700">Services</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{service.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Image and Gallery */}
          <div>
            <div className="relative">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-96 object-cover rounded-lg"
              />
              {service.featured && (
                <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 text-sm font-medium rounded">
                  ⭐ Featured
                </div>
              )}
              <div className={`absolute top-4 right-4 ${badge.color} px-3 py-1 text-sm font-medium rounded`}>
                {badge.text}
              </div>
            </div>

            {/* Additional Images */}
            {service.additionalImages && service.additionalImages.length > 0 && (
              <div className="grid grid-cols-3 gap-2 mt-4">
                {service.additionalImages.map((img, index) => (
                  <img 
                    key={index}
                    src={img} 
                    alt={`${service.title} ${index + 1}`}
                    className="w-full h-24 object-cover rounded cursor-pointer hover:opacity-75"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Service Details */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-3xl font-bold text-gray-900">{service.title}</h1>
              <span className="text-3xl">{getServiceIcon(service.type)}</span>
            </div>

            <div className="flex items-center text-gray-600 mb-4">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="capitalize">{service.location}</span>
            </div>

            <div className="text-3xl font-bold text-blue-600 mb-6">{service.price}</div>

            <div className="prose prose-gray mb-6">
              <p className="text-gray-700">{service.description}</p>
            </div>

            {/* Service Details */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Service Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {service.area && (
                  <div>
                    <span className="text-gray-500">Area:</span>
                    <span className="font-medium ml-1">{service.area} sq ft</span>
                  </div>
                )}
                {service.duration && (
                  <div>
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-medium ml-1">{service.duration}</span>
                  </div>
                )}
                {service.accuracy && (
                  <div>
                    <span className="text-gray-500">Accuracy:</span>
                    <span className="font-medium ml-1">{service.accuracy}</span>
                  </div>
                )}
                {service.estimatedValue && (
                  <div>
                    <span className="text-gray-500">Est. Value:</span>
                    <span className="font-medium text-green-600 ml-1">{service.estimatedValue}</span>
                  </div>
                )}
                {service.serviceType && (
                  <div>
                    <span className="text-gray-500">Type:</span>
                    <span className="font-medium ml-1 capitalize">{service.serviceType.replace('-', ' ')}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information */}
            {service.provider && (
              <div className="bg-white border rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Service Provider</h3>
                <div className="flex items-center mb-2">
                  <img 
                    src={service.provider.avatar || '/api/placeholder/40/40'} 
                    alt={service.provider.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium">{service.provider.name}</p>
                    <p className="text-sm text-gray-500">{service.provider.experience} experience</p>
                  </div>
                </div>
                {service.provider.rating && (
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(Math.floor(service.provider.rating))}
                      {'☆'.repeat(5 - Math.floor(service.provider.rating))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">({service.provider.reviews} reviews)</span>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                {service.type === 'sell-rent' ? 'Contact Owner' : 'Book Service'}
              </button>
              
              {service.contact && (
                <div className="flex space-x-3">
                  <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium">
                    📞 Call Now
                  </button>
                  <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors font-medium">
                    💬 WhatsApp
                  </button>
                </div>
              )}

              <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                ❤️ Save to Favorites
              </button>
            </div>
          </div>
        </div>

        {/* Related Services */}
        {/* {relatedServices.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((relatedService) => (
                <RelatedServiceCard key={relatedService.id} service={relatedService} />
              ))}
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}

// Related Service Card Component
// function RelatedServiceCard({ service }) {
//   const getServiceIcon = (type) => {
//     const icons = {
//       'sell-rent': '🏠',
//       'valuation': '💰',
//       'legal': '⚖️',
//       'interior': '🎨'
//     };
//     return icons[type] || '🏢';
//   };

//   return (
//     <Link href={`/services/${service.id}`} className="block">
//       <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
//         <img 
//           src={service.image} 
//           alt={service.title}
//           className="w-full h-32 object-cover"
//         />
//         <div className="p-4">
//           <div className="flex items-start justify-between mb-2">
//             <h3 className="text-lg font-semibold text-gray-900 flex-1">{service.title}</h3>
//             <span className="text-xl ml-2">{getServiceIcon(service.type)}</span>
//           </div>
//           <p className="text-sm text-gray-600 mb-1 capitalize">{service.location}</p>
//           <p className="text-lg font-bold text-blue-600">{service.price}</p>
//         </div>
//       </div>
//     </Link>
//   );
// }