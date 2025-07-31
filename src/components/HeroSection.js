// Custom SVG Icons
const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const HomeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m3 12 2-2m0 0 7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const FloatingHomeIcon = () => (
  <svg className="w-8 h-8 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m3 12 2-2m0 0 7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const FloatingMapIcon = () => (
  <svg className="w-6 h-6 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const FloatingTrendIcon = () => (
  <svg className="w-7 h-7 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-10">
      {/* Animated Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-blue-800/90"></div>
      
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse [animation-delay:2s]"></div>
        <div className="absolute -bottom-20 left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse [animation-delay:4s]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-bounce [animation-duration:6s]">
          <FloatingHomeIcon />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-bounce [animation-duration:8s] [animation-delay:1s]">
          <FloatingMapIcon />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-bounce [animation-duration:6s] [animation-delay:2s]">
          <FloatingTrendIcon />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="animate-pulse">
          {/* Subtitle Badge */}
          <div className="inline-flex mt-10 items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></span>
            <span className="text-white/90 text-sm font-medium">Your Real Estate Journey Starts Here</span>
          </div>

          {/* Main Heading with staggered animation */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="block text-white mb-2 animate-pulse [animation-delay:0.2s]">Find Your</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent animate-pulse [animation-delay:0.5s]">
              Dream Home
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-pulse [animation-delay:0.8s]">
            Discover extraordinary properties, connect with trusted agents, and make your real estate dreams a reality
          </p>

          {/* Enhanced Search Bar */}
          <div className="max-w-4xl mx-auto mb-12 animate-pulse [animation-delay:1.1s]">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-2 shadow-2xl">
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="relative flex-1">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <MapPinIcon />
                    </div>
                    <input
                      type="text"
                      placeholder="Search location, builder, or project name..."
                      className="w-full pl-12 pr-4 py-4 text-lg rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent placeholder-gray-500"
                    />
                  </div>
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:scale-105 active:scale-95">
                    <div className="flex items-center gap-2">
                      <div className="group-hover:rotate-12 transition-transform duration-300">
                        <SearchIcon />
                      </div>
                      <span>Search</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-pulse [animation-delay:1.4s]">
            <button className="group relative px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-110 active:scale-95">
              <div className="flex items-center gap-2">
                <div className="group-hover:rotate-12 transition-transform duration-300">
                  <HomeIcon />
                </div>
                <span>Buy</span>
              </div>
            </button>
            <button className="group relative px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-110 active:scale-95">
              <div className="flex items-center gap-2">
                <div className="group-hover:rotate-12 transition-transform duration-300">
                  <MapPinIcon />
                </div>
                <span>Rent</span>
              </div>
            </button>
            <button className="group relative px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-110 active:scale-95">
              <div className="flex items-center gap-2">
                <div className="group-hover:rotate-12 transition-transform duration-300">
                  <TrendingUpIcon />
                </div>
                <span>Sell</span>
              </div>
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-pulse [animation-delay:1.7s]">
            <div className="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                10K+
              </div>
              <div className="text-white/70 font-medium">Properties Listed</div>
            </div>
            <div className="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                5K+
              </div>
              <div className="text-white/70 font-medium">Happy Customers</div>
            </div>
            <div className="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-white/70 font-medium">Expert Agents</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}