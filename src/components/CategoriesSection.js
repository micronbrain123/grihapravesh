// Enhanced Custom SVG Icons matching hero section style
const BuyIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m3 12 2-2m0 0 7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const RentIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const CommercialIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const NewProjectsIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

// Floating background elements for the section
const FloatingCircle = ({ size, color, position, delay }) => (
  <div 
    className={`absolute ${position} w-${size} h-${size} ${color} rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-20`}
    style={{ animationDelay: delay }}
  ></div>
);

const categories = [
  { 
    label: 'Buy', 
    icon: <BuyIcon />,
    gradient: 'from-green-500 to-emerald-600',
    hoverGradient: 'from-green-600 to-emerald-700',
    bgGradient: 'from-green-50 to-emerald-50',
    description: 'Find your perfect home'
  },
  { 
    label: 'Rent', 
    icon: <RentIcon />,
    gradient: 'from-blue-500 to-cyan-600',
    hoverGradient: 'from-blue-600 to-cyan-700',
    bgGradient: 'from-blue-50 to-cyan-50',
    description: 'Discover rental properties'
  },
  { 
    label: 'Commercial', 
    icon: <CommercialIcon />,
    gradient: 'from-purple-500 to-pink-600',
    hoverGradient: 'from-purple-600 to-pink-700',
    bgGradient: 'from-purple-50 to-pink-50',
    description: 'Business & office spaces'
  },
  { 
    label: 'New Projects', 
    icon: <NewProjectsIcon />,
    gradient: 'from-orange-500 to-red-600',
    hoverGradient: 'from-orange-600 to-red-700',
    bgGradient: 'from-orange-50 to-red-50',
    description: 'Latest developments'
  },
];

export default function CategoriesSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Dynamic Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingCircle size="32" color="bg-blue-300" position="top-10 left-10" delay="0s" />
        <FloatingCircle size="24" color="bg-purple-300" position="top-20 right-20" delay="2s" />
        <FloatingCircle size="28" color="bg-green-300" position="bottom-20 left-1/4" delay="4s" />
        <FloatingCircle size="20" color="bg-pink-300" position="bottom-10 right-1/3" delay="1s" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-2"></span>
            <span className="text-blue-800 text-sm font-medium">Property Categories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Explore by Category
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose from our diverse range of property types to find exactly what you're looking for
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${cat.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              {/* Main Card */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 group-hover:shadow-2xl transition-all duration-300">
                {/* Icon Container */}
                <div className={`relative mb-6 mx-auto w-16 h-16 rounded-2xl bg-gradient-to-r ${cat.gradient} p-4 group-hover:rotate-12 transition-all duration-300 group-hover:scale-110`}>
                  <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                    {cat.icon}
                  </div>
                  
                  {/* Icon Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${cat.gradient} rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                    {cat.label}
                  </h3>
                  <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {cat.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                     style={{ 
                       background: `linear-gradient(white, white) padding-box, linear-gradient(135deg, var(--tw-gradient-stops)) border-box`,
                       backgroundClip: 'padding-box, border-box'
                     }}>
                </div>
              </div>

              {/* Floating Particles Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-r ${cat.gradient} rounded-full animate-ping`}></div>
                <div className={`absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r ${cat.gradient} rounded-full animate-ping`} style={{ animationDelay: '0.5s' }}></div>
                <div className={`absolute top-1/2 left-2 w-1.5 h-1.5 bg-gradient-to-r ${cat.gradient} rounded-full animate-ping`} style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl hover:scale-105 active:scale-95">
            <div className="relative z-10 flex items-center gap-2">
              <span>View All Properties</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            
            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}