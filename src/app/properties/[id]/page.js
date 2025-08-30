'use client'
// src/app/properties/[id]/page.js
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
// Simple SVG icons to replace lucide-react
const ArrowLeft = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const MapPin = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Home = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const Ruler = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7h.01M16 11h.01M16 15h.01M8 7h.01M8 11h.01M8 15h.01" />
  </svg>
);

const Star = ({ className }) => (
  <svg className={className} fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const Phone = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const Mail = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const Share2 = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
  </svg>
);

export default function PropertyDetailsPage({ params }) {
  const router = useRouter();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    // Handle params as either object or Promise
    const getPropertyId = async () => {
      const resolvedParams = await Promise.resolve(params);
      fetchPropertyDetails(resolvedParams.id);
    };
    
    getPropertyId();
  }, [params]);

  // Mock data function - matches your existing data structure
  const generateMockProperties = () => {
    return [
      {
        id: 1,
        title: "Modern 3BHK Apartment",
        location: "mumbai",
        type: "apartment",
        price: "₹1.2 Cr",
        area: "1200",
        images: [
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
          "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800",
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"
        ],
        featured: true,
        description: "Spacious modern 3BHK apartment with contemporary design and premium amenities. Located in a prime area with excellent connectivity.",
        amenities: ["Swimming Pool", "Gym", "Parking", "Security", "Elevator", "Garden", "Club House", "Children's Play Area"],
        specifications: {
          bedrooms: "3",
          bathrooms: "2",
          balconies: "2",
          facing: "East",
          furnishing: "Semi-Furnished",
          floor: "5th Floor"
        },
        contact: {
          name: "Rahul Sharma",
          phone: "+91 98765 43210",
          email: "rahul@example.com"
        }
      },
      {
        id: 2,
        title: "Luxury Villa Plot",
        location: "delhi",
        type: "plot",
        price: "₹80 Lac",
        area: "2000",
        images: [
          "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
          "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800",
          "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800"
        ],
        featured: false,
        description: "Premium residential plot in developing area with clear title. Perfect for building your dream home with ample space and good infrastructure.",
        amenities: ["Clear Title", "Corner Plot", "Park Facing", "Wide Road", "Electricity Connection", "Water Connection"],
        specifications: {
          dimensions: "40x50 ft",
          facing: "North",
          boundary: "Fully Walled",
          approach: "30 ft Road"
        },
        contact: {
          name: "Priya Singh",
          phone: "+91 87654 32109",
          email: "priya@example.com"
        }
      },
      {
        id: 3,
        title: "Commercial Office Space",
        location: "bangalore",
        type: "commercial",
        price: "₹2.5 Cr",
        area: "1800",
        images: [
          "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800",
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
        ],
        featured: true,
        description: "Modern office space in prime commercial location with excellent connectivity and professional environment. Ideal for IT companies and startups.",
        amenities: ["Central AC", "High Speed Internet", "Parking", "24x7 Security", "Elevator", "Cafeteria", "Conference Rooms", "Power Backup"],
        specifications: {
          cabins: "6",
          workstations: "25",
          conference_rooms: "2",
          floor: "3rd Floor",
          furnishing: "Fully Furnished"
        },
        contact: {
          name: "Amit Kumar",
          phone: "+91 76543 21098",
          email: "amit@example.com"
        }
      },
      {
        id: 4,
        title: "2BHK for Rent",
        location: "pune",
        type: "rental",
        price: "₹25,000/month",
        area: "900",
        images: [
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800",
          "https://images.unsplash.com/photo-1560448075-bb485b067938?w=800"
        ],
        featured: false,
        description: "Well-maintained 2BHK apartment available for rent. Ready to move in with basic furnishing and all necessary amenities nearby.",
        amenities: ["Parking", "Security", "Water Supply", "Power Backup", "Maintenance", "Elevator"],
        specifications: {
          bedrooms: "2",
          bathrooms: "2",
          balconies: "1",
          facing: "South",
          furnishing: "Semi-Furnished",
          floor: "2nd Floor"
        },
        contact: {
          name: "Sunita Patel",
          phone: "+91 65432 10987",
          email: "sunita@example.com"
        }
      },
      {
        id: 5,
        title: "Premium Apartment Mumbai",
        location: "mumbai",
        type: "apartment",
        price: "₹2.8 Cr",
        area: "1500",
        images: [
          "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
          "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800"
        ],
        featured: true,
        description: "Luxurious premium apartment with high-end finishes and spectacular city views. Perfect for those seeking upscale living.",
        amenities: ["Swimming Pool", "Gym", "Spa", "Concierge", "Valet Parking", "Rooftop Garden", "Private Elevator", "Smart Home"],
        specifications: {
          bedrooms: "3",
          bathrooms: "3",
          balconies: "2",
          facing: "West",
          furnishing: "Fully Furnished",
          floor: "18th Floor"
        },
        contact: {
          name: "Deepak Mehta",
          phone: "+91 54321 09876",
          email: "deepak@example.com"
        }
      },
      {
        id: 6,
        title: "Delhi NCR Plot",
        location: "delhi",
        type: "plot",
        price: "₹1.2 Cr",
        area: "3000",
        images: [
          "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800",
          "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800"
        ],
        featured: false,
        description: "Large residential plot in NCR with good connectivity and development potential. Suitable for villa construction.",
        amenities: ["Clear Title", "Corner Plot", "Metro Connectivity", "Wide Road", "All Utilities Available"],
        specifications: {
          dimensions: "50x60 ft",
          facing: "East",
          boundary: "Partial Wall",
          approach: "40 ft Road"
        },
        contact: {
          name: "Ravi Gupta",
          phone: "+91 43210 98765",
          email: "ravi@example.com"
        }
      },
      {
        id: 7,
        title: "Gurgaon Commercial Plot",
        location: "gurgaon",
        type: "plot",
        price: "₹1.5 Cr",
        area: "2500",
        images: [
          "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800",
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
        ],
        featured: false,
        description: "Commercial plot in prime Gurgaon location with high appreciation potential. Perfect for commercial development.",
        amenities: ["Commercial License", "Corner Plot", "Highway Connectivity", "Metro Access", "All Approvals"],
        specifications: {
          dimensions: "45x55 ft",
          facing: "North-East",
          boundary: "Fully Walled",
          approach: "60 ft Road",
          zoning: "Commercial"
        },
        contact: {
          name: "Neha Agarwal",
          phone: "+91 32109 87654",
          email: "neha@example.com"
        }
      },
      {
        id: 8,
        title: "Noida Residential Plot",
        location: "noida",
        type: "plot",
        price: "₹90 Lac",
        area: "1800",
        images: [
          "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800",
          "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800"
        ],
        featured: true,
        description: "Well-located residential plot in established sector of Noida. Ready for immediate construction with all approvals.",
        amenities: ["RERA Approved", "Gated Community", "Park Facing", "Schools Nearby", "All Utilities", "Security"],
        specifications: {
          dimensions: "40x45 ft",
          facing: "South",
          boundary: "Fully Walled",
          approach: "24 ft Road"
        },
        contact: {
          name: "Vikash Sharma",
          phone: "+91 21098 76543",
          email: "vikash@example.com"
        }
      }
    ];
  };

  const fetchPropertyDetails = async (id) => {
    setLoading(true);
    try {
      // Using mock data - replace with actual API call
      const mockProperties = generateMockProperties();
      const propertyData = mockProperties.find(p => p.id === parseInt(id));
      
      if (propertyData) {
        setProperty(propertyData);
      } else {
        setProperty(null);
      }
    } catch (error) {
      console.error('Error fetching property details:', error);
      setProperty(null);
    } finally {
      setLoading(false);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Check out this property: ${property.title}`,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading property details...</p>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 text-gray-400 mx-auto mb-4">
            <Home className="w-full h-full" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Property Not Found</h2>
          <p className="text-gray-600 mb-4">The property you're looking for doesn't exist.</p>
          <button 
            onClick={() => router.push('/properties')}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Back to Properties
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => router.back()}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Properties
            </button>
            <button 
              onClick={handleShare}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Share
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div className="relative">
                <img 
                  src={property.images[activeImageIndex]} 
                  alt={property.title}
                  className="w-full h-96 object-cover"
                />
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 text-sm font-medium rounded-full flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Featured
                  </div>
                )}
              </div>
              
              {/* Image Thumbnails */}
              {property.images.length > 1 && (
                <div className="p-4">
                  <div className="flex space-x-2 overflow-x-auto">
                    {property.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${property.title} ${index + 1}`}
                        className={`w-20 h-20 object-cover rounded cursor-pointer flex-shrink-0 ${
                          index === activeImageIndex ? 'ring-2 ring-blue-500' : ''
                        }`}
                        onClick={() => setActiveImageIndex(index)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="mb-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="capitalize">{property.location}</span>
                </div>
                <div className="text-3xl font-bold text-blue-600">{property.price}</div>
              </div>

              <div className="border-t pt-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </div>

              {/* Property Specifications */}
              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Property Details</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <Ruler className="w-5 h-5 text-gray-400 mr-2" />
                    <div>
                      <div className="text-sm text-gray-500">Area</div>
                      <div className="font-medium">{property.area} sq ft</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Home className="w-5 h-5 text-gray-400 mr-2" />
                    <div>
                      <div className="text-sm text-gray-500">Type</div>
                      <div className="font-medium capitalize">{property.type}</div>
                    </div>
                  </div>
                  {Object.entries(property.specifications).map(([key, value]) => (
                    <div key={key} className="flex items-start">
                      <div>
                        <div className="text-sm text-gray-500 capitalize">{key.replace('_', ' ')}</div>
                        <div className="font-medium">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center p-2 bg-gray-50 rounded">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Details</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Contact Person</div>
                  <div className="font-medium text-gray-900">{property.contact.name}</div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-500 mb-2">Phone</div>
                  <a 
                    href={`tel:${property.contact.phone}`}
                    className="flex items-center p-3 bg-green-50 text-green-700 rounded-md hover:bg-green-100 transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    <span className="font-medium">{property.contact.phone}</span>
                  </a>
                </div>
                
                <div>
                  <div className="text-sm text-gray-500 mb-2">Email</div>
                  <a 
                    href={`mailto:${property.contact.email}`}
                    className="flex items-center p-3 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    <span className="font-medium">{property.contact.email}</span>
                  </a>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium">
                  Schedule Visit
                </button>
                
                <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-50 transition-colors font-medium">
                  Send Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}