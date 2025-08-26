// src/app/blog/[slug]/page.js
'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'

// Blog data - you can move this to src/data/blogPosts.js later
const blogPosts = {
  'property-market-trends-2024': {
    title: 'Property Market Trends 2024',
    content: `
      <h2>Indian Real Estate Market Overview 2024</h2>
      <p>The Indian real estate market in 2024 has shown remarkable resilience and growth across major metropolitan cities. With the economy recovering and urban migration continuing, the demand for residential and commercial properties has surged significantly.</p>
      
      <h3>Key Market Trends</h3>
      <ul>
        <li><strong>Rise in demand for sustainable and green buildings:</strong> Buyers are increasingly conscious about environmental impact</li>
        <li><strong>Increased preference for larger homes post-pandemic:</strong> Work-from-home culture has changed space requirements</li>
        <li><strong>Growth in tier-2 and tier-3 cities:</strong> Affordable pricing and improved infrastructure driving growth</li>
        <li><strong>Technology integration in property transactions:</strong> Virtual tours, digital documentation becoming standard</li>
      </ul>
      
      <h3>Price Trends Across Cities</h3>
      <p>Mumbai, Delhi NCR, and Bangalore continue to lead in terms of property appreciation, with average price increases of 8-12% year-on-year. However, cities like Pune, Hyderabad, and Chennai are showing strong growth potential with better affordability ratios.</p>
      
      <h3>Investment Outlook</h3>
      <p>Real estate remains one of the most preferred investment options for Indians, offering both capital appreciation and rental yields. The sector is expected to grow at 15% CAGR over the next 5 years.</p>
    `,
    author: 'Real Estate Team',
    date: '2024-03-15',
    readTime: '5 min read',
    tags: ['Market Analysis', 'Investment', 'Trends']
  },
  'best-time-to-buy-property': {
    title: 'Best Time to Buy Property',
    content: `
      <h2>Timing Your Property Purchase Right</h2>
      <p>Deciding when to buy property is one of the most crucial decisions for any homebuyer. Market timing, personal finances, and life circumstances all play important roles in this decision.</p>
      
      <h3>Seasonal Factors</h3>
      <p>The real estate market follows certain seasonal patterns. Typically, the period from October to March sees higher activity due to favorable weather and festival season bonuses. However, the monsoon season might offer better negotiation opportunities.</p>
      
      <h3>Market Cycles</h3>
      <p>Understanding market cycles can help you make better investment decisions. Currently, we're in a growth phase with increasing demand and stable supply, making it a good time for end-users to buy.</p>
      
      <h3>Personal Financial Readiness</h3>
      <p>Your personal financial situation is the most important factor. Ensure you have:</p>
      <ul>
        <li>Stable income for at least 2 years</li>
        <li>20-25% down payment ready</li>
        <li>Emergency funds for 6 months</li>
        <li>Good credit score (750+)</li>
      </ul>
    `,
    author: 'Property Advisor',
    date: '2024-03-10',
    readTime: '4 min read',
    tags: ['Buying Tips', 'Market Timing', 'Investment']
  },
  'home-loan-interest-rates': {
    title: 'Home Loan Interest Rates',
    content: `
      <h2>Current Home Loan Interest Rates in India</h2>
      <p>Home loan interest rates have been fluctuating based on various economic factors including RBI policies, inflation, and banking sector dynamics. As of March 2024, rates range from 8.5% to 11.5% across different lenders.</p>
      
      <h3>Leading Banks and Their Rates</h3>
      <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0;">
        <p><strong>SBI:</strong> 8.50% - 9.25%</p>
        <p><strong>HDFC:</strong> 8.60% - 9.30%</p>
        <p><strong>ICICI:</strong> 8.75% - 9.40%</p>
        <p><strong>Axis Bank:</strong> 8.80% - 9.45%</p>
        <p style="margin-bottom: 0;"><em>*Rates vary based on loan amount, tenure, and applicant profile</em></p>
      </div>
      
      <h3>Tips to Get Lower Interest Rates</h3>
      <ul>
        <li><strong>Maintain a good credit score:</strong> Scores above 750 get preferential rates</li>
        <li><strong>Choose shorter tenure loans:</strong> Reduces total interest burden</li>
        <li><strong>Make larger down payments:</strong> Lower LTV ratios get better rates</li>
        <li><strong>Compare offers from multiple banks:</strong> Rate differences can save lakhs</li>
        <li><strong>Existing customers get benefits:</strong> Banks offer better rates to existing customers</li>
      </ul>
    `,
    author: 'Finance Expert',
    date: '2024-03-08',
    readTime: '6 min read',
    tags: ['Home Loans', 'Finance', 'Interest Rates']
  },
  'investment-tips-for-buyers': {
    title: 'Investment Tips for Buyers',
    content: `
      <h2>Smart Real Estate Investment Strategies</h2>
      <p>Real estate investment requires careful planning and market understanding. Whether you're a first-time investor or looking to expand your portfolio, these strategies will help you make informed decisions.</p>
      
      <h3>Location Analysis</h3>
      <p>The golden rule of real estate - location, location, location - still holds true. Look for:</p>
      <ul>
        <li>Proximity to employment hubs</li>
        <li>Good connectivity and transportation</li>
        <li>Upcoming infrastructure projects</li>
        <li>Social amenities like schools, hospitals, malls</li>
      </ul>
      
      <h3>ROI Calculation</h3>
      <p>Understanding how to calculate return on investment is crucial:</p>
      <ul>
        <li><strong>Rental Yield:</strong> Annual rent ÷ Property value × 100</li>
        <li><strong>Capital Appreciation:</strong> Track historical price trends</li>
        <li><strong>Total Return:</strong> Rental yield + Capital appreciation</li>
      </ul>
      
      <h3>Risk Management</h3>
      <p>Every investment carries risk. Here's how to minimize yours:</p>
      <ul>
        <li>Diversify across different property types</li>
        <li>Research developer track record thoroughly</li>
        <li>Ensure all legal compliances are met</li>
        <li>Consider market liquidity factors</li>
      </ul>
    `,
    author: 'Investment Consultant',
    date: '2024-03-05',
    readTime: '7 min read',
    tags: ['Investment', 'ROI', 'Strategy']
  },
  'legal-documents-checklist': {
    title: 'Legal Documents Checklist',
    content: `
      <h2>Essential Legal Documents for Property Purchase</h2>
      <p>Buying property involves numerous legal documents. Here's your complete checklist to ensure you don't miss anything important during your purchase process.</p>
      
      <h3>Primary Documents</h3>
      <ul>
        <li><strong>Sale Deed:</strong> Primary document proving ownership transfer</li>
        <li><strong>Title Deed:</strong> Establishes clear title of the seller</li>
        <li><strong>Property Card/Khata:</strong> Municipal records of property</li>
        <li><strong>Approved Building Plan:</strong> Sanctioned plan from local authority</li>
        <li><strong>Completion Certificate:</strong> Confirms building is ready for occupancy</li>
      </ul>
      
      <h3>Secondary Documents</h3>
      <ul>
        <li><strong>NOC from various authorities:</strong> Fire, Pollution Control Board</li>
        <li><strong>Tax receipts:</strong> Property tax clearance certificates</li>
        <li><strong>Utility bills:</strong> Electricity, water connection proofs</li>
        <li><strong>Society NOC:</strong> For apartment purchases</li>
        <li><strong>Bank NOC:</strong> If property was under loan</li>
      </ul>
      
      <h3>Verification Process</h3>
      <p>Always verify documents through:</p>
      <ul>
        <li>Registrar's office records</li>
        <li>Municipal corporation database</li>
        <li>Revenue department records</li>
        <li>Legal advisor consultation</li>
      </ul>
    `,
    author: 'Legal Team',
    date: '2024-03-01',
    readTime: '8 min read',
    tags: ['Legal', 'Documentation', 'Compliance']
  },
  'property-registration-guide': {
    title: 'Property Registration Guide',
    content: `
      <h2>Step-by-Step Property Registration Process</h2>
      <p>Property registration is a crucial legal step in the home buying process. This comprehensive guide will walk you through each step to ensure smooth registration.</p>
      
      <h3>Pre-Registration Steps</h3>
      <p>Before heading to the registrar's office:</p>
      <ul>
        <li>Arrange all required documents</li>
        <li>Calculate stamp duty and registration fees</li>
        <li>Book appointment online (where available)</li>
        <li>Arrange for witnesses (usually 2 required)</li>
        <li>Get documents notarized if required</li>
      </ul>
      
      <h3>Registration Process</h3>
      <p>The actual registration involves several steps:</p>
      <ol>
        <li>Document verification by registrar</li>
        <li>Biometric verification of parties</li>
        <li>Payment of stamp duty and fees</li>
        <li>Signing of documents by all parties</li>
        <li>Witness signatures and verification</li>
        <li>Final document stamping and sealing</li>
      </ol>
      
      <h3>Post-Registration</h3>
      <p>What to do after successful registration:</p>
      <ul>
        <li>Collect registered sale deed copy</li>
        <li>Update property records with municipality</li>
        <li>Transfer utility connections</li>
        <li>Update address in all documents</li>
        <li>Apply for home loan disbursement (if applicable)</li>
      </ul>
    `,
    author: 'Legal Expert',
    date: '2024-02-28',
    readTime: '6 min read',
    tags: ['Registration', 'Legal Process', 'Documentation']
  },
  'market-analysis-reports': {
    title: 'Market Analysis Reports',
    content: `
      <h2>Quarterly Market Analysis Report - Q1 2024</h2>
      <p>Comprehensive analysis of real estate markets across major Indian cities, providing insights into price trends, demand-supply dynamics, and investment opportunities.</p>
      
      <h3>Mumbai Market</h3>
      <p>Mumbai real estate continues to show strong fundamentals with:</p>
      <ul>
        <li>Average price appreciation of 12% YoY</li>
        <li>Strong demand in Bandra, Powai, and Thane</li>
        <li>New supply concentrated in MMR region</li>
        <li>Rental yields averaging 2.5-3%</li>
      </ul>
      
      <h3>Delhi NCR Analysis</h3>
      <p>The National Capital Region shows mixed trends:</p>
      <ul>
        <li>Gurgaon leading with 10% price growth</li>
        <li>Noida showing signs of recovery</li>
        <li>Greater Noida offering value propositions</li>
        <li>Infrastructure projects boosting connectivity</li>
      </ul>
      
      <h3>Bangalore & Hyderabad</h3>
      <p>IT cities continue to drive demand:</p>
      <ul>
        <li>Bangalore: 8% price appreciation in prime areas</li>
        <li>Hyderabad: Emerging as investment hotspot</li>
        <li>Strong rental demand from IT professionals</li>
        <li>New launches focusing on tech parks proximity</li>
      </ul>
    `,
    author: 'Research Team',
    date: '2024-02-25',
    readTime: '10 min read',
    tags: ['Market Research', 'Analysis', 'Reports']
  },
  'expert-opinion-reviews': {
    title: 'Expert Opinion & Reviews',
    content: `
      <h2>Expert Opinions on Current Market Conditions</h2>
      <p>Leading real estate experts share their insights on market conditions, emerging trends, and advice for buyers and investors in the current scenario.</p>
      
      <h3>Industry Veterans Speak</h3>
      <div style="background: #f0f8ff; padding: 15px; border-left: 4px solid #0066cc; margin: 15px 0;">
        <p><em>"The current market presents excellent opportunities for end-users. With stable prices and improved inventory, buyers have good negotiating power."</em></p>
        <p><strong>- Rajesh Kumar, Senior Real Estate Consultant</strong></p>
      </div>
      
      <h3>Buyer Testimonials</h3>
      <p>Real experiences from recent property buyers:</p>
      <ul>
        <li><strong>Priya Sharma, Mumbai:</strong> "Bought a 2BHK in Thane. The process was smooth with proper guidance on documentation."</li>
        <li><strong>Amit Patel, Bangalore:</strong> "Invested in a property near Electronic City. Good appreciation potential with IT growth."</li>
        <li><strong>Sneha Reddy, Hyderabad:</strong> "First-time buyer experience was positive. Got competitive home loan rates."</li>
      </ul>
      
      <h3>Future Predictions</h3>
      <p>What experts predict for the next 6-12 months:</p>
      <ul>
        <li>Stable to moderate price growth (5-8%)</li>
        <li>Increased focus on affordable housing</li>
        <li>Technology adoption in sales processes</li>
        <li>Sustainable building practices becoming norm</li>
      </ul>
    `,
    author: 'Editorial Team',
    date: '2024-02-20',
    readTime: '9 min read',
    tags: ['Expert Opinion', 'Reviews', 'Market Outlook']
  }
};

export default function BlogPost() {
  const params = useParams()
  const router = useRouter()
  const slug = params?.slug
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (slug) {
      const blogPost = blogPosts[slug]
      if (blogPost) {
        setPost(blogPost)
      }
      setLoading(false)
    }
  }, [slug])

  // Test if Tailwind is working at all
  console.log('Component rendered, slug:', slug)

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9fafb' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            animation: 'spin 1s linear infinite',
            borderRadius: '50%', 
            height: '4rem', 
            width: '4rem', 
            borderBottom: '2px solid #2563eb',
            margin: '0 auto'
          }}></div>
          <p style={{ marginTop: '1rem', color: '#4b5563' }}>Loading blog post...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9fafb' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📝</div>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>Blog Post Not Found</h1>
          <p style={{ color: '#4b5563', marginBottom: '2rem' }}>The blog post you're looking for doesn't exist.</p>
          <Link 
            href="/"
            style={{ 
              backgroundColor: '#2563eb', 
              color: 'white', 
              padding: '0.75rem 1.5rem', 
              borderRadius: '0.5rem',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={() => router.back()}
            className="text-blue-600 hover:text-blue-800 mb-6 inline-flex items-center text-sm font-medium transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>
          
          <div className="flex flex-wrap items-center text-gray-600 text-sm gap-4 mb-6">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {post.author}
            </div>
            <span className="hidden sm:block">•</span>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <span className="hidden sm:block">•</span>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {post.readTime}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm p-8 lg:p-12 mb-12">
          <div 
            className="blog-content max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
            .blog-content h2 {
              font-size: 1.875rem;
              font-weight: 700;
              color: #1f2937;
              margin: 2rem 0 1rem 0;
              line-height: 1.3;
            }
            
            .blog-content h3 {
              font-size: 1.5rem;
              font-weight: 600;
              color: #374151;
              margin: 1.5rem 0 0.75rem 0;
              line-height: 1.4;
            }
            
            .blog-content p {
              margin: 1rem 0;
              color: #4b5563;
              line-height: 1.75;
              font-size: 1rem;
            }
            
            .blog-content ul {
              margin: 1rem 0;
              padding-left: 1.5rem;
              list-style-type: disc;
            }
            
            .blog-content ol {
              margin: 1rem 0;
              padding-left: 1.5rem;
              list-style-type: decimal;
            }
            
            .blog-content li {
              margin: 0.5rem 0;
              color: #4b5563;
              line-height: 1.6;
              font-size: 1rem;
            }
            
            .blog-content strong {
              font-weight: 600;
              color: #1f2937;
            }
            
            .blog-content em {
              font-style: italic;
              color: #6b7280;
            }
            
            .blog-content div[style*="background"] {
              background-color: #f8fafc !important;
              padding: 1rem;
              border-radius: 0.5rem;
              margin: 1rem 0;
              border-left: 4px solid #3b82f6;
            }
          `
        }} />

        {/* Related Posts */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(blogPosts)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, relatedPost]) => (
                <Link key={key} href={`/blog/${key}`}>
                  <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-blue-200 h-full cursor-pointer">
                    <h4 className="font-semibold text-gray-900 mb-3 line-clamp-2">{relatedPost.title}</h4>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <span>{relatedPost.readTime}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedPost.author}</span>
                    </div>
                    <div className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                      Read More 
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}