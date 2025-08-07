'use client'
// src/app/valuation/page.js
import { useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';

// Component that uses useSearchParams - must be wrapped in Suspense
function ValuationContent() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [formData, setFormData] = useState({
    location: searchParams.get('location') || '',
    propertyType: 'apartment',
    area: '',
    bedrooms: '',
    bathrooms: '',
    age: '',
    address: '',
    contact: '',
    name: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call for valuation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock valuation calculation
      const basePrice = {
        'apartment': 5000,
        'villa': 4000,
        'plot': 3000,
        'commercial': 8000
      }[formData.propertyType] || 5000;

      const locationMultiplier = {
        'mumbai': 1.8,
        'delhi': 1.6,
        'bangalore': 1.4,
        'pune': 1.2,
        'hyderabad': 1.1,
        'chennai': 1.0,
        'kolkata': 0.9,
        'ahmedabad': 0.8
      }[formData.location] || 1.0;

      const ageReduction = Math.max(0, 1 - (parseInt(formData.age) || 0) * 0.02);
      const estimatedPrice = basePrice * locationMultiplier * ageReduction;
      const totalValue = estimatedPrice * parseInt(formData.area);

      setResult({
        estimatedValue: `₹${(totalValue / 100000).toFixed(1)} Lac`,
        pricePerSqFt: `₹${estimatedPrice.toFixed(0)}`,
        marketTrend: Math.random() > 0.5 ? 'Increasing' : 'Stable',
        confidence: '92%'
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Property Valuation</h1>
          <p className="text-gray-600">Get accurate property valuation based on current market trends</p>
          
          <div className="mt-4 flex items-center space-x-4 text-sm">
            <div className="flex items-center text-blue-600">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              AI-Powered Analysis
            </div>
            <div className="flex items-center text-green-600">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Market Comparison
            </div>
            <div className="flex items-center text-purple-600">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Instant Results
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Property Details</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location *
                  </label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Choose Location</option>
                    <option value="delhi">Delhi / NCR</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="hyderabad">Hyderabad</option>
                    <option value="pune">Pune</option>
                    <option value="chennai">Chennai</option>
                    <option value="kolkata">Kolkata</option>
                    <option value="ahmedabad">Ahmedabad</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Property Type *
                  </label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                    <option value="plot">Plot/Land</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Area (sq ft) *
                  </label>
                  <input
                    type="number"
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    placeholder="e.g., 1200"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Property Age (years)
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="e.g., 5"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {formData.propertyType !== 'plot' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bedrooms
                      </label>
                      <select
                        name="bedrooms"
                        value={formData.bedrooms}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select</option>
                        <option value="1">1 BHK</option>
                        <option value="2">2 BHK</option>
                        <option value="3">3 BHK</option>
                        <option value="4">4+ BHK</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bathrooms
                      </label>
                      <select
                        name="bathrooms"
                        value={formData.bathrooms}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4+</option>
                      </select>
                    </div>
                  </>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Enter property address for better accuracy"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    placeholder="Enter mobile number"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-colors"
              >
                {loading ? 'Calculating Valuation...' : 'Get Free Valuation'}
              </button>
            </form>
          </div>

          {/* Results/Info */}
          <div className="space-y-6">
            {result ? (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Valuation Results</h3>
                
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-sm text-green-700 mb-1">Estimated Property Value</div>
                    <div className="text-2xl font-bold text-green-800">{result.estimatedValue}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="text-sm text-blue-700 mb-1">Price per sq ft</div>
                      <div className="text-lg font-semibold text-blue-800">{result.pricePerSqFt}</div>
                    </div>
                    
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="text-sm text-purple-700 mb-1">Market Trend</div>
                      <div className="text-lg font-semibold text-purple-800">{result.marketTrend}</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-700 mb-1">Confidence Level</div>
                    <div className="text-lg font-semibold text-gray-800">{result.confidence}</div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-4">
                    Want a more detailed report? Our experts can provide comprehensive analysis.
                  </p>
                  <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 font-medium">
                    Get Detailed Report
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Our Valuation?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">AI-Powered Analysis</h4>
                      <p className="text-sm text-gray-600">Advanced algorithms analyze market data and comparable properties</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Market Insights</h4>
                      <p className="text-sm text-gray-600">Real-time market trends and neighborhood analysis</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Instant Results</h4>
                      <p className="text-sm text-gray-600">Get your property valuation in seconds</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Expert Support</h4>
                      <p className="text-sm text-gray-600">Professional consultation available</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Pricing */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Valuation Services</h3>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-gray-900">Basic Valuation</h4>
                    <span className="text-lg font-bold text-green-600">FREE</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Instant AI-powered estimate</li>
                    <li>• Market comparison</li>
                    <li>• Basic property insights</li>
                  </ul>
                </div>

                <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-gray-900">Detailed Report</h4>
                    <span className="text-lg font-bold text-blue-600">₹2,999</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Professional property inspection</li>
                    <li>• Comprehensive market analysis</li>
                    <li>• Legal document verification</li>
                    <li>• Investment recommendations</li>
                  </ul>
                </div>

                <div className="border border-purple-200 rounded-lg p-4 bg-purple-50">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-gray-900">Premium Consultation</h4>
                    <span className="text-lg font-bold text-purple-600">₹4,999</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Everything in Detailed Report</li>
                    <li>• One-on-one expert consultation</li>
                    <li>• Future price predictions</li>
                    <li>• Investment strategy planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Loading component for Suspense fallback
function ValuationLoadingSpinner() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading valuation form...</p>
      </div>
    </div>
  );
}

// Main page component with Suspense wrapper
export default function ValuationPage() {
  return (
    <Suspense fallback={<ValuationLoadingSpinner />}>
      <ValuationContent />
    </Suspense>
  );
}