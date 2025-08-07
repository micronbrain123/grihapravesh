// Custom SVG Icons matching the premium theme
const VerifiedIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const TrendsIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
  </svg>
);

const SupportIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const UXIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

// Floating decorative elements
const FloatingShape = ({ position, size, color, delay, shape = "circle" }) => {
  const shapeClass = shape === "circle" ? "rounded-full" : shape === "square" ? "rounded-lg" : "rounded-full";
  return (
    <div 
      className={`absolute ${position} w-${size} h-${size} ${color} ${shapeClass} mix-blend-multiply filter blur-xl animate-pulse opacity-15`}
      style={{ animationDelay: delay }}
    ></div>
  );
};

// Animated counter component (pure CSS animation)
const AnimatedNumber = ({ number, suffix = "" }) => (
  <span className="inline-block animate-pulse" style={{ animationDelay: '0.5s' }}>
    {number}{suffix}
  </span>
);

const reasons = [
  { 
    icon: <VerifiedIcon />,
    title: 'Verified Listings', 
    desc: 'Each listing is validated for authenticity and accuracy to ensure complete transparency.',
    gradient: 'from-green-500 to-emerald-600',
    bgGradient: 'from-green-50 to-emerald-50',
    stat: '100%',
    statLabel: 'Verified'
  },
  { 
    icon: <TrendsIcon />,
    title: 'Local Price Trends', 
    desc: 'Area-wise pricing analytics and rental data to help you make informed decisions.',
    gradient: 'from-blue-500 to-cyan-600',
    bgGradient: 'from-blue-50 to-cyan-50',
    stat: '25+',
    statLabel: 'Cities'
  },
  { 
    icon: <SupportIcon />,
    title: 'Expert Support', 
    desc: 'Dedicated assistance from experienced professionals throughout your property journey.',
    gradient: 'from-purple-500 to-violet-600',
    bgGradient: 'from-purple-50 to-violet-50',
    stat: '24/7',
    statLabel: 'Support'
  },
  { 
    icon: <UXIcon />,
    title: 'Modern Experience', 
    desc: 'Mobile-first design with lightning-fast performance and intuitive user interface.',
    gradient: 'from-orange-500 to-red-600',
    bgGradient: 'from-orange-50 to-red-50',
    stat: '4.9★',
    statLabel: 'Rating'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/50"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingShape position="top-10 left-10" size="32" color="bg-blue-300" delay="0s" shape="circle" />
        <FloatingShape position="top-32 right-20" size="24" color="bg-purple-300" delay="2s" shape="square" />
        <FloatingShape position="bottom-20 left-1/4" size="28" color="bg-green-300" delay="4s" shape="circle" />
        <FloatingShape position="bottom-32 right-1/3" size="20" color="bg-orange-300" delay="1s" shape="square" />
        <FloatingShape position="top-1/2 right-10" size="36" color="bg-pink-300" delay="3s" shape="circle" />
        <FloatingShape position="bottom-1/4 left-10" size="22" color="bg-cyan-300" delay="5s" shape="square" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-2"></span>
            <span className="text-blue-800 text-sm font-medium">Our Advantages</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Why Choose GrihaProbesh
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the difference with our comprehensive platform designed to make your property journey seamless and successful
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, idx) => (
            <article 
              key={idx} 
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Background Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.bgGradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-3xl`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon Container */}
                <div className={`relative mb-6 w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${reason.gradient} p-4 group-hover:rotate-12 transition-all duration-300 group-hover:scale-110`}>
                  <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                    {reason.icon}
                  </div>
                  
                  {/* Icon Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${reason.gradient} rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                </div>

                {/* Statistic */}
                <div className="text-center mb-4">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${reason.gradient} bg-clip-text text-transparent`}>
                    <AnimatedNumber number={reason.stat} />
                  </div>
                  <div className="text-xs text-gray-500 font-medium">{reason.statLabel}</div>
                </div>

                {/* Title & Description */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {reason.desc}
                  </p>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 rounded-3xl border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                   style={{ 
                     background: `linear-gradient(white, white) padding-box, linear-gradient(135deg, var(--tw-gradient-stops)) border-box`,
                     backgroundClip: 'padding-box, border-box'
                   }}>
              </div>

              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute top-4 right-4 w-1 h-1 bg-gradient-to-r ${reason.gradient} rounded-full animate-ping`}></div>
                <div className={`absolute bottom-4 left-4 w-1.5 h-1.5 bg-gradient-to-r ${reason.gradient} rounded-full animate-ping`} style={{ animationDelay: '0.3s' }}></div>
                <div className={`absolute top-1/2 left-2 w-1 h-1 bg-gradient-to-r ${reason.gradient} rounded-full animate-ping`} style={{ animationDelay: '0.6s' }}></div>
              </div>
            </article>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: '50K+', label: 'Happy Customers', icon: '👥' },
            { number: '25+', label: 'Cities Covered', icon: '🏙️' },
            { number: '100%', label: 'Secure Deals', icon: '🔒' },
            { number: '4.9/5', label: 'User Rating', icon: '⭐' }
          ].map((stat, idx) => (
            <div 
              key={stat.label}
              className="group text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 hover:bg-white/80 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 group-hover:scale-110 transition-transform duration-300">
                <AnimatedNumber number={stat.number} />
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Ready to Find Your Dream Property?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their perfect home through GrihaProbesh
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/properties"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl hover:scale-105 active:scale-95"
            >
              <div className="relative z-10 flex items-center justify-center gap-2">
                <span>Explore Properties</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              
              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </a>
            
            <a 
              href="/contact"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-2xl font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 text-center"
            >
              Contact Expert
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="flex items-center gap-2 text-gray-500">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Verified Platform</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Secure Transactions</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">Award Winning</span>
          </div>
        </div>
      </div>
    </section>
  );
}