// src/app/blog/page.js
import Link from 'next/link'

const blogPosts = [
  { title: 'Property Market Trends 2024', slug: 'property-market-trends-2024', excerpt: 'Comprehensive analysis of Indian real estate market trends for 2024', date: '2024-03-15', readTime: '5 min read', author: 'Real Estate Team' },
  { title: 'Best Time to Buy Property', slug: 'best-time-to-buy-property', excerpt: 'Learn about the optimal timing for property purchases', date: '2024-03-10', readTime: '4 min read', author: 'Property Advisor' },
  { title: 'Home Loan Interest Rates', slug: 'home-loan-interest-rates', excerpt: 'Current rates and tips to get the best home loan deals', date: '2024-03-08', readTime: '6 min read', author: 'Finance Expert' },
  { title: 'Investment Tips for Buyers', slug: 'investment-tips-for-buyers', excerpt: 'Smart strategies for real estate investment success', date: '2024-03-05', readTime: '7 min read', author: 'Investment Consultant' },
  { title: 'Legal Documents Checklist', slug: 'legal-documents-checklist', excerpt: 'Complete guide to property purchase documentation', date: '2024-03-01', readTime: '8 min read', author: 'Legal Team' },
  { title: 'Property Registration Guide', slug: 'property-registration-guide', excerpt: 'Step-by-step property registration process', date: '2024-02-28', readTime: '6 min read', author: 'Legal Expert' },
  { title: 'Market Analysis Reports', slug: 'market-analysis-reports', excerpt: 'Quarterly analysis of major Indian real estate markets', date: '2024-02-25', readTime: '10 min read', author: 'Research Team' },
  { title: 'Expert Opinion & Reviews', slug: 'expert-opinion-reviews', excerpt: 'Industry experts share insights on current market conditions', date: '2024-02-20', readTime: '9 min read', author: 'Editorial Team' }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-12xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Real Estate Blog</h1>
          <p className="text-xl text-gray-600 max-w-5xl mx-auto">
            Stay updated with the latest trends, tips, and insights from the Indian real estate market
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">Featured</span>
                <span className="text-gray-500 text-sm ml-4">{blogPosts[0].date}</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h2>
              <p className="text-gray-600 mb-6 text-lg">{blogPosts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <span>{blogPosts[0].author}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Link 
                  href={`/blog/${blogPosts[0].slug}`}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-blue-200 h-full">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.author}</span>
                    <div className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                      Read More 
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}