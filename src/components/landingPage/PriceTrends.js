// Custom SVG Icons
const TrendingUpIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const BarChartIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
);

const ArrowDownIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
);

const FloatingChartIcon = () => (
  <svg className="w-8 h-8 text-blue-200/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const FloatingTrendIcon = () => (
  <svg className="w-6 h-6 text-purple-200/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

export default function PriceTrends() {
  const trendData = [
    { city: "Mumbai", change: "+12.5%", trend: "up", price: "₹1.2Cr", desc: "Prime locations showing strong growth" },
    { city: "Delhi", change: "+8.3%", trend: "up", price: "₹95L", desc: "Steady appreciation in key areas" },
    { city: "Bangalore", change: "+15.2%", trend: "up", price: "₹78L", desc: "Tech hub driving demand" },
    { city: "Pune", change: "-2.1%", trend: "down", price: "₹65L", desc: "Market correction phase" },
    { city: "Hyderabad", change: "+9.7%", trend: "up", price: "₹58L", desc: "Emerging IT corridor growth" },
    { city: "Chennai", change: "+6.4%", trend: "up", price: "₹62L", desc: "Industrial growth impact" }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30"></div>
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse [animation-delay:3s]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 animate-bounce [animation-duration:8s]">
          <FloatingChartIcon />
        </div>
        <div className="absolute bottom-1/4 right-1/6 animate-bounce [animation-duration:6s] [animation-delay:2s]">
          <FloatingTrendIcon />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 mb-6 group hover:scale-105 transition-transform duration-300">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse mr-2"></div>
            <span className="text-blue-700 text-sm font-medium">Market Intelligence</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-gray-800 mb-2">Locality</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
              Price Trends
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the market with real-time property price analytics and trend insights across India's top cities
          </p>
        </div>

        {/* Trends Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {trendData.map((item, index) => (
            <div
              key={item.city}
              className="group relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white/90 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {item.city}
                  </h3>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{item.price}</p>
                </div>
                <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${
                  item.trend === 'up' 
                    ? 'bg-green-100 text-green-700 border border-green-200' 
                    : 'bg-red-100 text-red-700 border border-red-200'
                }`}>
                  {item.trend === 'up' ? <ArrowUpIcon /> : <ArrowDownIcon />}
                  {item.change}
                </div>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.desc}</p>
              
              {/* Mini Chart Visualization */}
              <div className="flex items-end gap-1 h-8 mb-4">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 bg-gradient-to-t rounded-sm transition-all duration-1000 group-hover:scale-y-110 ${
                      item.trend === 'up'
                        ? 'from-green-400 to-green-500'
                        : 'from-red-400 to-red-500'
                    }`}
                    style={{
                      height: `${Math.random() * 60 + 20}%`,
                      animationDelay: `${index * 0.1 + i * 0.05}s`
                    }}
                  ></div>
                ))}
              </div>
              
              <button className="w-full py-2 text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors duration-300 group-hover:scale-105">
                View Detailed Analysis →
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="relative group inline-block">
            {/* Gradient glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300 group-hover:scale-110"></div>
            
            <button className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl hover:scale-105 active:scale-95 group">
              <div className="flex items-center gap-3">
                <div className="group-hover:rotate-12 transition-transform duration-300">
                  <BarChartIcon />
                </div>
                <span>Explore Comprehensive Price Trends</span>
                <div className="group-hover:translate-x-1 transition-transform duration-300">
                  <TrendingUpIcon />
                </div>
              </div>
            </button>
          </div>
          
          <p className="mt-4 text-gray-600">
            Get access to detailed market analytics, historical data, and future projections
          </p>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:bg-white/80 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-gray-600 font-medium">Cities Tracked</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:bg-white/80 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              10M+
            </div>
            <div className="text-gray-600 font-medium">Data Points</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:bg-white/80 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              95%
            </div>
            <div className="text-gray-600 font-medium">Accuracy Rate</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:bg-white/80 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-gray-600 font-medium">Live Updates</div>
          </div>
        </div>
      </div>
    </section>
  );
}