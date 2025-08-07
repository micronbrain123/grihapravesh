import React, { useState } from 'react';
import { Heart, MapPin, Phone, Download, Eye, Star, Filter, ChevronDown, ChevronUp, Search, Home, Building2, TreePine, Car, Zap, Shield, X } from 'lucide-react';

const PropertyListing = () => {
  const [showFilters, setShowFilters] = useState({
    budget: true,
    propertyType: true,
    bedrooms: true,
    construction: true,
    postedBy: true,
    area: true,
    localities: true,
    amenities: false
  });

  const [selectedFilters, setSelectedFilters] = useState({
    budget: { min: '0', max: '100+ Crores' },
    propertyTypes: [],
    bedrooms: [],
    construction: [],
    postedBy: [],
    localities: [],
    amenities: []
  });

  const [budgetRange, setBudgetRange] = useState([0, 100]);
  const [areaRange, setAreaRange] = useState([0, 4000]);

  const properties = [
    {
      id: 1,
      title: "Authority Plots & kothi",
      subtitle: "6 Bedroom House in Sector 56, Noida",
      price: "₹4.9 Cr",
      pricePerSqft: "₹28,100 /sqft",
      area: "1,743 sqft (162 sqm)",
      bedrooms: "6 BHK (6 Baths)",
      status: "Ready To Move",
      description: "162 mtr kothi for sale in noida sector 56 best location for you",
      image: "/api/placeholder/300/200",
      featured: true,
      dealer: "GOYAL ASSOCI...",
      dealerType: "FEATURED DEALER",
      timePosted: "1mo ago",
      imageCount: 4,
      location: "Sector 56, Noida"
    },
    {
      id: 2,
      title: "Vasant Vihar, Delhi, South Delhi",
      subtitle: "4 BHK Independent Builder Floor in Vasant Vihar, Delhi",
      price: "₹14.75 Cr",
      pricePerSqft: "₹40,972 /sqft",
      area: "3,600 sqft (334 sqm)",
      bedrooms: "4 BHK (4 Baths)",
      status: "Under Construction",
      description: "Discover smartly planned 4 bhk builder floor in vasant vihar, an...",
      image: "/api/placeholder/300/200",
      featured: true,
      dealer: "Findahouse Vasant V...",
      dealerType: "FEATURED DEALER",
      timePosted: "2w ago",
      imageCount: 8,
      highlights: ["Close to Metro Station", "Close to Market"],
      location: "Vasant Vihar, Delhi"
    },
    {
      id: 3,
      title: "Unity Group The Amaryllis",
      subtitle: "2, 3, 4, 5, 6, 7 BHK Apartment in Karol Bagh, Delhi",
      price: "₹2.25 - 2.3 Cr",
      area: "Various sizes available",
      configurations: [
        { type: "2 BHK Apartment", price: "₹2.25 - 2.3 Cr" },
        { type: "3 BHK Apartment", price: "₹3.1 - 4.1 Cr" },
        { type: "4 BHK Apartment", price: "₹6.5 - 9.74 Cr" },
        { type: "5 BHK+", price: "₹12+ Cr" }
      ],
      status: "NEW BOOKING",
      description: "Check out 2,3,4,5,6,7 BHK apartments in Karol Bagh, now...",
      image: "/api/placeholder/300/200",
      dealer: "Unity Group",
      rating: 4.3,
      timePosted: "Ready To Move • Since Jul, 2021",
      imageCount: 10,
      location: "Karol Bagh, Delhi",
      badges: ["RERA", "ZERO BROKERAGE", "3D"]
    },
    {
      id: 4,
      title: "Findahouse Grandeur Builder Floor",
      subtitle: "3, 4, 5 BHK Independent Floor in Greater Kailash 1, Delhi",
      price: "₹5 Cr - ₹16 Cr",
      configurations: [
        { type: "3 BHK Independent Floor", price: "₹5 Cr" },
        { type: "4 BHK Independent Floor", price: "₹7 - 20 Cr" },
        { type: "5 BHK Independent Floor", price: "₹16 Cr" }
      ],
      status: "NEW BOOKING",
      description: "Looking for 3,4,5 BHK Independent Floor in Greater Kailash 1 ?...",
      image: "/api/placeholder/300/200",
      dealer: "Findahouse",
      timePosted: "Ready To Move • Since Oct, 2021",
      imageCount: 5,
      location: "Greater Kailash 1, Delhi",
      badges: ["ZERO BROKERAGE", "3D", "SEEN"]
    },
    {
      id: 5,
      title: "Chattarpur Residences",
      subtitle: "2, 3, 4 BHK Apartment in Chattarpur, Delhi",
      price: "₹45 - ₹1.23 Cr",
      configurations: [
        { type: "2 BHK Apartment", price: "₹45 - 48.46 L" },
        { type: "3 BHK Apartment", price: "₹60 - 75 L" },
        { type: "4 BHK Apartment", price: "₹1.15 - 1.23 Cr" }
      ],
      status: "NEW BOOKING",
      description: "Beautiful 2,3,4 BHK apartments in Chattarpur, are now available...",
      image: "/api/placeholder/300/200",
      dealer: "Mittal Developers Delhi",
      timePosted: "Ready To Move • Since Apr, 2025",
      imageCount: 10,
      location: "Chattarpur, Delhi",
      badges: ["ZERO BROKERAGE"]
    }
  ];

  const localities = [
    { name: "Dwarka", rating: "4.4 ★" },
    { name: "Noida Extension", rating: "4.3 ★" },
    { name: "Greater Noida West", rating: "4.2 ★" },
    { name: "Dwarka Expressway", rating: "4.1 ★" },
    { name: "Sector-1 Gr Noida", rating: "4.2 ★" }
  ];

  const toggleFilter = (filterName) => {
    setShowFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };

  const PropertyCard = ({ property }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-6">
      <div className="flex">
        {/* Property Image */}
        <div className="relative w-80 h-64 flex-shrink-0">
          <img 
            src={property.image} 
            alt={property.title}
            className="w-full h-full object-cover rounded-l-lg"
          />
          {property.featured && (
            <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 text-xs font-semibold rounded">
              FEATURED
            </div>
          )}
          {property.badges && (
            <div className="absolute top-3 right-3 flex flex-col gap-1">
              {property.badges.map((badge, idx) => (
                <span key={idx} className="bg-blue-600 text-white px-2 py-1 text-xs rounded">
                  {badge}
                </span>
              ))}
            </div>
          )}
          <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 text-xs rounded">
            📷 {property.imageCount}
          </div>
          <Heart className="absolute top-3 right-3 w-6 h-6 text-white fill-transparent hover:fill-red-500 cursor-pointer" />
        </div>

        {/* Property Details */}
        <div className="flex-1 p-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{property.title}</h3>
              <p className="text-gray-600 mb-2">{property.subtitle}</p>
            </div>
            {property.status && (
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                property.status === 'Ready To Move' ? 'bg-green-100 text-green-800' :
                property.status === 'Under Construction' ? 'bg-yellow-100 text-yellow-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {property.status}
              </span>
            )}
          </div>

          <div className="flex items-center gap-6 mb-3">
            <div>
              <span className="text-2xl font-bold text-gray-900">{property.price}</span>
              {property.pricePerSqft && (
                <span className="text-gray-600 ml-2">{property.pricePerSqft}</span>
              )}
            </div>
            {property.area && (
              <div className="text-gray-700">
                <span className="font-medium">{property.area}</span>
              </div>
            )}
            {property.bedrooms && (
              <div className="text-gray-700">
                <span className="font-medium">{property.bedrooms}</span>
              </div>
            )}
          </div>

          {property.configurations && (
            <div className="grid grid-cols-2 gap-2 mb-3">
              {property.configurations.slice(0, 4).map((config, idx) => (
                <div key={idx} className="text-sm">
                  <span className="font-medium text-gray-700">{config.type}</span>
                  <span className="text-blue-600 ml-2">{config.price}</span>
                </div>
              ))}
            </div>
          )}

          {property.highlights && (
            <div className="flex gap-2 mb-3">
              <span className="text-gray-600 font-medium">Highlights:</span>
              {property.highlights.map((highlight, idx) => (
                <span key={idx} className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-700">
                  {highlight}
                </span>
              ))}
            </div>
          )}

          <p className="text-gray-600 mb-4 line-clamp-2">{property.description}</p>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">
                  {property.dealer.charAt(0)}
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-900">{property.dealer}</span>
                  {property.rating && (
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{property.rating}</span>
                    </div>
                  )}
                </div>
                {property.dealerType && (
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                    {property.dealerType}
                  </span>
                )}
                <div className="text-xs text-gray-500 mt-1">{property.timePosted}</div>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 flex items-center gap-2">
                <Eye className="w-4 h-4" />
                View Number
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">99acres</h1>
            <div className="flex items-center bg-white rounded-lg px-4 py-2 text-black min-w-96">
              <select className="bg-transparent border-none outline-none mr-2">
                <option>Buy</option>
                <option>Rent</option>
              </select>
              <div className="flex items-center bg-gray-100 rounded px-3 py-1">
                <span>Delhi / NCR</span>
                <X className="w-4 h-4 ml-2 cursor-pointer" />
              </div>
              <input 
                type="text" 
                placeholder="Add more"
                className="flex-1 ml-2 outline-none"
              />
              <Search className="w-5 h-5 text-gray-400" />
            </div>
          </div>
          <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded font-medium">
            Post property FREE
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-4">
          Home › Property in Delhi / NCR
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            156231 results | Property in Delhi / NCR for Sale
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-orange-500 text-white px-2 py-1 rounded">NEW LAUNCH</span>
              <span>Owner</span>
              <span>Verified</span>
              <span>Under construction</span>
              <span>Ready To Move</span>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              <span>Sort By</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <div className="w-80 bg-white rounded-lg shadow-sm p-4 h-fit">
            {/* Hide already seen */}
            <div className="mb-6">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Hide already seen</span>
              </label>
            </div>

            {/* Verified properties */}
            <div className="mb-6">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Verified properties</span>
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">✓ Verified</span>
              </label>
              <p className="text-xs text-gray-500 mt-1">by 99acres verification team</p>
            </div>

            {/* Budget Filter */}
            <div className="mb-6">
              <div 
                className="flex items-center justify-between cursor-pointer mb-3"
                onClick={() => toggleFilter('budget')}
              >
                <h3 className="font-medium">Budget</h3>
                {showFilters.budget ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
              {showFilters.budget && (
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm">0</span>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm">100+ Crores</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    className="w-full mb-3"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <select className="border rounded px-2 py-1 text-sm">
                      <option>Min Budget</option>
                    </select>
                    <select className="border rounded px-2 py-1 text-sm">
                      <option>Max Budget</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            {/* Property Type Filter */}
            <div className="mb-6">
              <div 
                className="flex items-center justify-between cursor-pointer mb-3"
                onClick={() => toggleFilter('propertyType')}
              >
                <h3 className="font-medium">Type of property</h3>
                {showFilters.propertyType ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
              {showFilters.propertyType && (
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <span className="text-green-600">+</span>
                    <span className="text-sm">Residential Apartment</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <span className="text-green-600">+</span>
                    <span className="text-sm">Independent/Builder Floor</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <span className="text-green-600">+</span>
                    <span className="text-sm">Residential Land</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <span className="text-green-600">+</span>
                    <span className="text-sm">Independent House/Villa</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <span className="text-green-600">+</span>
                    <span className="text-sm">Farm House</span>
                  </label>
                  <button className="text-blue-600 text-sm">+ 1 more</button>
                </div>
              )}
            </div>

            {/* Bedrooms Filter */}
            <div className="mb-6">
              <div 
                className="flex items-center justify-between cursor-pointer mb-3"
                onClick={() => toggleFilter('bedrooms')}
              >
                <h3 className="font-medium">No. of Bedrooms</h3>
                {showFilters.bedrooms ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
              {showFilters.bedrooms && (
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <span className="text-green-600">+</span>
                    <span className="text-sm">1 RK/1 BHK</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <span className="text-green-600">+</span>
                    <span className="text-sm">2 BHK</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <span className="text-green-600">+</span>
                    <span className="text-sm">3 BHK</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <span className="text-green-600">+</span>
                    <span className="text-sm">4 BHK</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <span className="text-green-600">+</span>
                    <span className="text-sm">5 BHK</span>
                  </label>
                  <button className="text-blue-600 text-sm">+ 5 more</button>
                </div>
              )}
            </div>

            {/* Construction Status */}
            <div className="mb-6">
              <div 
                className="flex items-center justify-between cursor-pointer mb-3"
                onClick={() => toggleFilter('construction')}
              >
                <h3 className="font-medium">Construction Status</h3>
                {showFilters.construction ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
              {showFilters.construction && (
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <span className="text-green-600">+</span>
                    <span className="text-sm">New Launch</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <span className="text-green-600">+</span>
                    <span className="text-sm">Under Construction</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <span className="text-green-600">+</span>
                    <span className="text-sm">Ready to move</span>
                  </label>
                </div>
              )}
            </div>

            {/* Posted by */}
            <div className="mb-6">
              <div 
                className="flex items-center justify-between cursor-pointer mb-3"
                onClick={() => toggleFilter('postedBy')}
              >
                <h3 className="font-medium">Posted by</h3>
                {showFilters.postedBy ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
              {showFilters.postedBy && (
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <span className="text-green-600">+</span>
                    <span className="text-sm">Owner</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <span className="text-green-600">+</span>
                    <span className="text-sm">Builder</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <span className="text-green-600">+</span>
                    <span className="text-sm">Dealer</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <span className="text-green-600">+</span>
                    <span className="text-sm">Feature Dealer</span>
                  </label>
                </div>
              )}
            </div>

            {/* Area Filter */}
            <div className="mb-6">
              <div 
                className="flex items-center justify-between cursor-pointer mb-3"
                onClick={() => toggleFilter('area')}
              >
                <h3 className="font-medium">Area</h3>
                <span className="text-blue-600 text-sm cursor-pointer">Clear</span>
                {showFilters.area ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
              {showFilters.area && (
                <div>
                  <div className="text-sm text-gray-600 mb-2">sq.ft.</div>
                  <div className="flex justify-between mb-2">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm">0 sq.ft.</span>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm">4000+ sq.ft.</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="4000" 
                    className="w-full mb-3"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input 
                      type="text"
                      placeholder="Min Area"
                      className="border rounded px-2 py-1 text-sm"
                    />
                    <input 
                      type="text"
                      placeholder="Max Area"
                      className="border rounded px-2 py-1 text-sm"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Localities */}
            <div className="mb-6">
              <div 
                className="flex items-center justify-between cursor-pointer mb-3"
                onClick={() => toggleFilter('localities')}
              >
                <h3 className="font-medium">Localities</h3>
                {showFilters.localities ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
              {showFilters.localities && (
                <div className="space-y-2">
                  {localities.map((locality, idx) => (
                    <label key={idx} className="flex items-center gap-2">
                      <input type="checkbox" />
                      <span className="text-sm">{locality.name}</span>
                      <span className="text-xs text-green-600">{locality.rating}</span>
                    </label>
                  ))}
                  <button className="text-blue-600 text-sm flex items-center gap-1">
                    <Search className="w-3 h-3" />
                    More Localities
                  </button>
                </div>
              )}
            </div>

            {/* Amenities */}
            <div className="mb-6">
              <div 
                className="flex items-center justify-between cursor-pointer mb-3"
                onClick={() => toggleFilter('amenities')}
              >
                <h3 className="font-medium">Amenities</h3>
                <span className="text-blue-600 text-sm cursor-pointer">Clear</span>
                {showFilters.amenities ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
              {showFilters.amenities && (
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <span className="text-green-600">+</span>
                    <Car className="w-4 h-4" />
                    <span className="text-sm">Parking</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <span className="text-green-600">+</span>
                    <TreePine className="w-4 h-4" />
                    <span className="text-sm">Park</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <span className="text-green-600">+</span>
                    <Shield className="w-4 h-4" />
                    <span className="text-sm">Vaastu Compliant</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <span className="text-green-600">+</span>
                    <Zap className="w-4 h-4" />
                    <span className="text-sm">Power Backup</span>
                  </label>
                  <button className="text-blue-600 text-sm">+ 5 more</button>
                </div>
              )}
            </div>

            {/* Additional Filters */}
            <div className="space-y-3">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span className="text-sm">Properties with photos</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span className="text-sm">Properties with videos</span>
              </label>
            </div>
          </div>

          {/* Property Listings */}
          <div className="flex-1">
            {/* Similar Societies Section */}
            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-gray-900 mb-4">Societies similar to the one viewed</h3>
              <div className="flex gap-4 overflow-x-auto">
                <div className="flex-shrink-0 bg-white rounded-lg p-3 w-64">
                  <img src="/api/placeholder/60/60" alt="Omdev Homes" className="w-12 h-12 rounded mb-2" />
                  <h4 className="font-medium">Omdev Homes</h4>
                  <p className="text-sm text-gray-600">3, 4, 5 BHK Independent Floor</p>
                  <p className="text-sm font-medium text-gray-900">₹ 4.5 - 20 Cr</p>
                  <p className="text-xs text-gray-500">Greater Kailash 1, Delhi</p>
                  <p className="text-xs text-gray-500">Possession by Jan 2025</p>
                </div>
                <div className="flex-shrink-0 bg-white rounded-lg p-3 w-64">
                  <img src="/api/placeholder/60/60" alt="Greater Kailash 2" className="w-12 h-12 rounded mb-2" />
                  <h4 className="font-medium">Greater Kailash 2 Luxury Homes</h4>
                  <p className="text-sm text-gray-600">3, 4 BHK Independent Floor</p>
                  <p className="text-sm font-medium text-gray-900">₹ 5.5 - 11 Cr</p>
                  <p className="text-xs text-gray-500">Greater Kailash 2, Delhi</p>
                  <p className="text-xs text-gray-500">Ready To Move</p>
                </div>
                <div className="flex-shrink-0 bg-white rounded-lg p-3 w-64">
                  <img src="/api/placeholder/60/60" alt="DLF Homes" className="w-12 h-12 rounded mb-2" />
                  <h4 className="font-medium">DLF Premium Floors</h4>
                  <p className="text-sm text-gray-600">4, 5 BHK Independent Floor</p>
                  <p className="text-sm font-medium text-gray-900">₹ 8 - 15 Cr</p>
                  <p className="text-xs text-gray-500">Greater Kailash 3, Delhi</p>
                  <p className="text-xs text-gray-500">Ready To Move</p>
                </div>
              </div>
            </div>

            {/* Property Cards */}
            <div className="space-y-6">
              {properties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-medium">
                Load More Properties
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700">
          <MapPin className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default PropertyListing;