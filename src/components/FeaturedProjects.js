// Custom SVG Icons
const HeartIcon = ({ filled = false }) => (
  <svg className="w-5 h-5" fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.682l-1.318-1.364a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const BedIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

const BathIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 14h8" />
  </svg>
);

const AreaIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
  </svg>
);

const ViewIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

// Sample projects with more detailed data
const projects = [
  { 
    title: 'Elegant Apartment in Mumbai', 
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
    location: 'Bandra West, Mumbai',
    price: '₹2.5 Cr',
    originalPrice: '₹2.8 Cr',
    beds: 3,
    baths: 2,
    area: '1,200',
    type: 'Apartment',
    featured: true,
    discount: '11% Off'
  },
  { 
    title: 'Luxury Villa in Bangalore', 
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop',
    location: 'Whitefield, Bangalore',
    price: '₹4.2 Cr',
    originalPrice: '₹4.8 Cr',
    beds: 4,
    baths: 3,
    area: '2,500',
    type: 'Villa',
    featured: true,
    discount: '12% Off'
  },
  { 
    title: 'Modern Penthouse in Delhi', 
    img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&h=300&fit=crop',
    location: 'Gurgaon, Delhi NCR',
    price: '₹3.8 Cr',
    originalPrice: '₹4.1 Cr',
    beds: 3,
    baths: 3,
    area: '1,800',
    type: 'Penthouse',
    featured: true,
    discount: '7% Off'
  },
  { 
    title: 'Cozy Studio in Pune', 
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
    location: 'Koregaon Park, Pune',
    price: '₹85 L',
    originalPrice: '₹95 L',
    beds: 1,
    baths: 1,
    area: '650',
    type: 'Studio',
    featured: false,
    discount: '11% Off'
  },
  { 
    title: 'Spacious Duplex in Hyderabad', 
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop',
    location: 'HITEC City, Hyderabad',
    price: '₹1.8 Cr',
    originalPrice: '₹2.1 Cr',
    beds: 4,
    baths: 3,
    area: '2,200',
    type: 'Duplex',
    featured: false,
    discount: '14% Off'
  },
  { 
    title: 'Waterfront Apartment in Chennai', 
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
    location: 'OMR, Chennai',
    price: '₹1.5 Cr',
    originalPrice: '₹1.7 Cr',
    beds: 2,
    baths: 2,
    area: '1,100',
    type: 'Apartment',
    featured: false,
    discount: '12% Off'
  }
];

// Floating background elements
const FloatingElement = ({ position, size, color, delay }) => (
  <div 
    className={`absolute ${position} w-${size} h-${size} ${color} rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-10`}
    style={{ animationDelay: delay }}
  ></div>
);

export default function FeaturedProjects() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingElement position="top-20 left-10" size="48" color="bg-blue-300" delay="0s" />
        <FloatingElement position="top-40 right-20" size="36" color="bg-purple-300" delay="2s" />
        <FloatingElement position="bottom-32 left-1/4" size="40" color="bg-green-300" delay="4s" />
        <FloatingElement position="bottom-20 right-1/3" size="32" color="bg-pink-300" delay="1s" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-2"></span>
            <span className="text-blue-800 text-sm font-medium">Premium Collection</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Featured Homes & Projects
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium properties that offer exceptional value and luxury
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <article 
              key={idx} 
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.featured && (
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">
                      FEATURED
                    </span>
                  )}
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full">
                    {project.discount}
                  </span>
                </div>

                {/* Static Heart Icon for SEO */}
                <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full group-hover:bg-white transition-all duration-300">
                  <HeartIcon filled={false} />
                </div>

                {/* Quick View Button */}
                <div className="absolute bottom-4 right-4 p-2 bg-blue-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-700 hover:scale-110">
                  <ViewIcon />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title & Location */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <LocationIcon />
                    <span className="ml-1">{project.location}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-green-600">{project.price}</span>
                    <span className="text-sm text-gray-400 line-through">{project.originalPrice}</span>
                  </div>
                </div>

                {/* Property Details */}
                <div className="flex items-center justify-between text-gray-600 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <BedIcon />
                    <span>{project.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BathIcon />
                    <span>{project.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <AreaIcon />
                    <span>{project.area} sq ft</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a 
                    href={`/properties/${idx + 1}`}
                    className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg text-center"
                  >
                    View Details
                  </a>
                  <a 
                    href={`/contact?property=${encodeURIComponent(project.title)}`}
                    className="px-4 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 text-center"
                  >
                    Contact
                  </a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                   style={{ 
                     background: `linear-gradient(white, white) padding-box, linear-gradient(135deg, #3b82f6, #8b5cf6) border-box`,
                     backgroundClip: 'padding-box, border-box'
                   }}>
              </div>

              {/* Structured Data for SEO */}
              <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "RealEstateProperty",
                  "name": project.title,
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": project.location
                  },
                  "offers": {
                    "@type": "Offer",
                    "price": project.price,
                    "priceCurrency": "INR"
                  },
                  "numberOfBedrooms": project.beds,
                  "numberOfBathroomsTotal": project.baths,
                  "floorSize": {
                    "@type": "QuantitativeValue",
                    "value": project.area,
                    "unitCode": "SQF"
                  }
                })
              }} />
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <a 
            href="/properties"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            <div className="relative z-10 flex items-center gap-2">
              <span>View All Properties</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            
            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
          </a>
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