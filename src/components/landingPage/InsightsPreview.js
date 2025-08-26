// Custom SVG Icons
const InsightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const ReadTimeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const TrendingIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const CategoryIcon = ({ type }) => {
  switch(type) {
    case 'market':
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case 'guide':
      return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    default:
      return <TrendingIcon />;
  }
};

// Floating background elements
const FloatingElement = ({ position, size, color, delay, shape = "circle" }) => {
  const shapeClass = shape === "circle" ? "rounded-full" : shape === "square" ? "rounded-lg" : "rounded-full";
  return (
    <div 
      className={`absolute ${position} w-${size} h-${size} ${color} ${shapeClass} mix-blend-multiply filter blur-xl animate-pulse opacity-10`}
      style={{ animationDelay: delay }}
    ></div>
  );
};

const posts = [
  { 
    title: 'Mumbai Real Estate: Q2 2025 Price Analysis & Future Projections',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop',
    link: '/insights/mumbai-price-trends-q2-2025',
    excerpt: 'Comprehensive analysis of Mumbai property prices showing 12% YoY growth in premium locations...',
    date: 'July 25, 2025',
    readTime: '8 min read',
    category: 'Market Analysis',
    categoryType: 'market',
    trending: true,
    author: 'Priya Sharma',
    tags: ['Mumbai', 'Price Trends', 'Investment']
  },
  { 
    title: 'The Ultimate Guide: Buying vs Renting in Bangalore Tech Hub',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    link: '/insights/buying-vs-renting-bangalore-2025',
    excerpt: 'Detailed comparison helping you make the right decision based on current market conditions...',
    date: 'July 22, 2025',
    readTime: '12 min read',
    category: 'Buyer Guide',
    categoryType: 'guide',
    trending: false,
    author: 'Rajesh Kumar',
    tags: ['Bangalore', 'Investment Guide', 'Tech Hub']
  },
  {
    title: 'Emerging Property Hotspots: Where to Invest in 2025',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
    link: '/insights/emerging-property-hotspots-2025',
    excerpt: 'Discover the most promising locations for property investment with high growth potential...',
    date: 'July 20, 2025',
    readTime: '10 min read',
    category: 'Investment Tips',
    categoryType: 'market',
    trending: true,
    author: 'Amit Patel',
    tags: ['Investment', 'Growth Areas', 'ROI']
  },
  {
    title: 'Home Loan Interest Rates: Latest Updates & Best Deals',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
    link: '/insights/home-loan-rates-july-2025',
    excerpt: 'Current home loan rates comparison across major banks with expert tips for getting the best deal...',
    date: 'July 18, 2025',
    readTime: '6 min read',
    category: 'Finance Guide',
    categoryType: 'guide',
    trending: false,
    author: 'Sneha Reddy',
    tags: ['Home Loans', 'Interest Rates', 'Banking']
  }
];

export default function InsightsPreview() {
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/20 to-purple-50/30"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingElement position="top-20 left-10" size="40" color="bg-blue-300" delay="0s" shape="circle" />
        <FloatingElement position="top-40 right-20" size="32" color="bg-purple-300" delay="2s" shape="square" />
        <FloatingElement position="bottom-32 left-1/4" size="36" color="bg-green-300" delay="4s" shape="circle" />
        <FloatingElement position="bottom-20 right-1/3" size="28" color="bg-orange-300" delay="1s" shape="square" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 border border-orange-200/50 mb-4">
            <InsightIcon />
            <span className="text-orange-800 text-sm font-medium ml-2">Market Intelligence</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-800 via-orange-700 to-red-700 bg-clip-text text-transparent">
              Latest Insights & Market Trends
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with expert analysis, market trends, and actionable insights from real estate professionals
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Article */}
          <article className="lg:col-span-2 group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
            <a href={featuredPost.link} className="block">
              {/* Image Container */}
              <div className="relative overflow-hidden h-80">
                <img 
                  src={featuredPost.img} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-6 left-6 flex gap-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold rounded-full">
                    FEATURED
                  </span>
                  {featuredPost.trending && (
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold rounded-full flex items-center gap-1">
                      <TrendingIcon />
                      TRENDING
                    </span>
                  )}
                </div>

                {/* Category Badge */}
                <div className="absolute top-6 right-6">
                  <div className="flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 text-sm font-medium">
                    <CategoryIcon type={featuredPost.categoryType} />
                    <span>{featuredPost.category}</span>
                  </div>
                </div>

                {/* Bottom Content Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
                    {featuredPost.title}
                  </h3>
                  <p className="text-white/90 text-lg mb-4 line-clamp-2">
                    {featuredPost.excerpt}
                  </p>
                  
                  {/* Meta Information */}
                  <div className="flex items-center gap-4 text-white/80 text-sm">
                    <div className="flex items-center gap-1">
                      <CalendarIcon />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ReadTimeIcon />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <span>by {featuredPost.author}</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                 style={{ 
                   background: `linear-gradient(white, white) padding-box, linear-gradient(135deg, #3b82f6, #8b5cf6) border-box`,
                   backgroundClip: 'padding-box, border-box'
                 }}>
            </div>
          </article>

          {/* Regular Articles */}
          <div className="space-y-6">
            {regularPosts.map((post, idx) => (
              <article 
                key={idx}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <a href={post.link} className="block">
                  <div className="flex">
                    {/* Image */}
                    <div className="w-32 h-32 flex-shrink-0 overflow-hidden">
                      <img 
                        src={post.img} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 p-4">
                      {/* Category & Trending */}
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1 text-blue-600 text-xs font-medium">
                          <CategoryIcon type={post.categoryType} />
                          <span>{post.category}</span>
                        </div>
                        {post.trending && (
                          <span className="text-orange-500 text-xs font-bold">TRENDING</span>
                        )}
                      </div>
                      
                      {/* Title */}
                      <h4 className="font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                        {post.title}
                      </h4>
                      
                      {/* Excerpt */}
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-2">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1 text-blue-600 group-hover:translate-x-1 transition-transform duration-300">
                          <span className="font-medium">Read</span>
                          <ArrowRightIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>

        {/* Tags Section */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Popular Topics</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Market Analysis', 'Investment Tips', 'Price Trends', 'Home Loans', 'Legal Guide', 'Property Reviews'].map((tag, idx) => (
              <a 
                key={tag}
                href={`/insights/tag/${tag.toLowerCase().replace(' ', '-')}`}
                className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:border-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm font-medium"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {tag}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Stay Updated with Market Intelligence
            </h3>
            <p className="text-gray-600 mb-8">
              Get weekly insights, market reports, and expert analysis delivered to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/insights"
                className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:from-orange-600 hover:to-red-700 hover:shadow-2xl hover:scale-105 active:scale-95"
              >
                <div className="relative z-10 flex items-center justify-center gap-2">
                  <span>View All Insights</span>
                  <ArrowRightIcon />
                </div>
                
                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r border-orange-600 text-orange-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </a>
              
              <button className="px-8 py-4 border-2 border-orange-600 text-orange-600 rounded-2xl font-semibold text-lg hover:bg-orange-600 hover:text-white transition-all duration-300 hover:scale-105">
                Subscribe Newsletter
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { number: '25K+', label: 'Newsletter Subscribers' },
            { number: '500+', label: 'Market Reports Published' },
            { number: '98%', label: 'Reader Satisfaction' }
          ].map((stat, idx) => (
            <div 
              key={stat.label}
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
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