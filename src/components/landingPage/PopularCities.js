// Enhanced City Icons
const CityIcon = ({ cityName }) => {
  const getIcon = (city) => {
    switch(city) {
      case 'Delhi':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case 'Mumbai':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 14h8" />
          </svg>
        );
      case 'Bangalore':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18.5l-8-5v6a2 2 0 002 2h12a2 2 0 002-2v-6l-8 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L4 9h16l-8-7z" />
          </svg>
        );
      case 'Hyderabad':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        );
      case 'Pune':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'Chennai':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
    }
  };

  return <div className="text-white">{getIcon(cityName)}</div>;
};

// Floating decorative elements
const FloatingElement = ({ position, size, color, delay }) => (
  <div 
    className={`absolute ${position} w-${size} h-${size} ${color} rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-15`}
    style={{ animationDelay: delay }}
  ></div>
);

const cities = [
  { 
    name: 'Delhi', 
    gradient: 'from-red-500 to-orange-600',
    hoverGradient: 'from-red-600 to-orange-700',
    properties: '12K+ Properties'
  },
  { 
    name: 'Mumbai', 
    gradient: 'from-blue-500 to-indigo-600',
    hoverGradient: 'from-blue-600 to-indigo-700',
    properties: '15K+ Properties'
  },
  { 
    name: 'Bangalore', 
    gradient: 'from-green-500 to-teal-600',
    hoverGradient: 'from-green-600 to-teal-700',
    properties: '10K+ Properties'
  },
  { 
    name: 'Hyderabad', 
    gradient: 'from-purple-500 to-violet-600',
    hoverGradient: 'from-purple-600 to-violet-700',
    properties: '8K+ Properties'
  },
  { 
    name: 'Pune', 
    gradient: 'from-pink-500 to-rose-600',
    hoverGradient: 'from-pink-600 to-rose-700',
    properties: '7K+ Properties'
  },
  { 
    name: 'Chennai', 
    gradient: 'from-cyan-500 to-blue-600',
    hoverGradient: 'from-cyan-600 to-blue-700',
    properties: '9K+ Properties'
  }
];

export default function PopularCities() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-gray-50 to-blue-50"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingElement position="top-10 left-10" size="40" color="bg-blue-300" delay="0s" />
        <FloatingElement position="top-32 right-20" size="32" color="bg-purple-300" delay="2s" />
        <FloatingElement position="bottom-20 left-1/4" size="36" color="bg-green-300" delay="4s" />
        <FloatingElement position="bottom-32 right-1/3" size="28" color="bg-pink-300" delay="1s" />
        <FloatingElement position="top-1/2 right-10" size="24" color="bg-orange-300" delay="3s" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-slate-100 to-blue-100 border border-slate-200/50 mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-2"></span>
            <span className="text-slate-700 text-sm font-medium">Top Destinations</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Explore Properties by City
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover amazing properties in India's most vibrant cities and find your perfect home
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {cities.map((city, idx) => (
            <div 
              key={city.name} 
              className="group relative cursor-pointer transform transition-all duration-500 hover:scale-110"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${city.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-300 scale-110`}></div>
              
              {/* Main Card */}
              <div className="relative h-32 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 group-hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${city.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-4">
                  {/* Icon */}
                  <div className={`mb-2 p-2 rounded-lg bg-gradient-to-r ${city.gradient} group-hover:rotate-12 transition-all duration-300 group-hover:scale-110`}>
                    <CityIcon cityName={city.name} />
                  </div>
                  
                  {/* City Name */}
                  <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-gray-900 transition-colors duration-300">
                    {city.name}
                  </h3>
                  
                  {/* Properties Count */}
                  <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                    {city.properties}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                     style={{ 
                       background: `linear-gradient(white, white) padding-box, linear-gradient(135deg, ${city.gradient.split(' ').join(', ')}) border-box`,
                       backgroundClip: 'padding-box, border-box'
                     }}>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </div>
              </div>

              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute top-2 right-2 w-1 h-1 bg-gradient-to-r ${city.gradient} rounded-full animate-ping`}></div>
                <div className={`absolute bottom-2 left-2 w-1.5 h-1.5 bg-gradient-to-r ${city.gradient} rounded-full animate-ping`} style={{ animationDelay: '0.3s' }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Popular Searches */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-6">Popular Searches</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Luxury Apartments', 'Budget Homes', 'Commercial Spaces', 'Villas', 'Studio Apartments', 'Penthouse'].map((search, idx) => (
              <button 
                key={search}
                className="group px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:border-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <span className="text-sm font-medium">{search}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '50K+', label: 'Total Properties' },
            { number: '25+', label: 'Cities Covered' },
            { number: '1M+', label: 'Happy Customers' },
            { number: '500+', label: 'Expert Agents' }
          ].map((stat, idx) => (
            <div 
              key={stat.label}
              className="group text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 hover:bg-white/80 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}