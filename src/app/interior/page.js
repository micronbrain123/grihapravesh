'use client'
// src/app/interior/page.js
import { useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';
import Link from 'next/link';

// Separate component that uses useSearchParams
function InteriorPageContent() {
  const searchParams = useSearchParams();
  const [activePackage, setActivePackage] = useState('essential');
  const [formData, setFormData] = useState({
    location: searchParams.get('location') || '',
    propertyType: 'apartment',
    area: '',
    bedrooms: '',
    budget: '',
    style: 'modern',
    name: '',
    contact: '',
    email: '',
    requirements: ''
  });

  const designPackages = [
    {
      id: 'essential',
      title: 'Essential Package',
      price: '₹1,999',
      priceUnit: 'per sq ft',
      duration: '30-45 days',
      description: 'Perfect for basic home makeover with essential design elements',
      features: [
        '2D floor plan design',
        'Color scheme consultation',
        'Furniture layout planning',
        'Basic lighting design',
        'Material selection guide',
        'Budget planning assistance'
      ],
      ideal: 'First-time homeowners, Budget-conscious families'
    },
    {
      id: 'premium',
      title: 'Premium Package',
      price: '₹2,999',
      priceUnit: 'per sq ft',
      duration: '45-60 days',
      description: 'Comprehensive interior design with premium finishes and custom elements',
      features: [
        '3D visualization & walkthrough',
        'Custom furniture design',
        'Premium material sourcing',
        'Complete lighting design',
        'Electrical & plumbing layout',
        'Project management',
        'Quality supervision'
      ],
      ideal: 'Growing families, Modern professionals',
      popular: true
    },
    {
      id: 'luxury',
      title: 'Luxury Package',
      price: '₹4,999',
      priceUnit: 'per sq ft',
      duration: '60-90 days',
      description: 'Ultra-premium luxury interiors with bespoke design and finest materials',
      features: [
        'Bespoke design consultation',
        'High-end material curation',
        'Smart home integration',
        'Custom artwork & decor',
        'Luxury furniture sourcing',
        'White-glove project delivery',
        'Lifetime design support',
        'Celebrity designer consultation'
      ],
      ideal: 'Luxury homeowners, Premium properties'
    }
  ];

  const designStyles = [
    { id: 'modern', name: 'Modern Contemporary', image: '/api/placeholder/200/150' },
    { id: 'minimalist', name: 'Minimalist', image: '/api/placeholder/200/150' },
    { id: 'traditional', name: 'Traditional Indian', image: '/api/placeholder/200/150' },
    { id: 'scandinavian', name: 'Scandinavian', image: '/api/placeholder/200/150' },
    { id: 'industrial', name: 'Industrial', image: '/api/placeholder/200/150' },
    { id: 'bohemian', name: 'Bohemian', image: '/api/placeholder/200/150' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Interior design request:', formData);
    alert('Your design consultation request has been submitted. Our team will contact you soon.');
  };

  const activePackageData = designPackages.find(pkg => pkg.id === activePackage);
  const estimatedCost = formData.area ? (parseInt(formData.area) * parseInt(activePackageData.price.replace(/[₹,]/g, ''))) : 0;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Interior Design Services</h1>
          <p className="text-gray-600">Transform your space with professional interior design expertise</p>
          
          <div className="mt-4 flex items-center space-x-4 text-sm">
            <div className="flex items-center text-blue-600">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              3D Visualization
            </div>
            <div className="flex items-center text-green-600">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Expert Designers
            </div>
            <div className="flex items-center text-purple-600">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Timely Delivery
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Design Packages */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Choose Your Design Package</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {designPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`relative border rounded-lg p-4 cursor-pointer transition-all ${
                      activePackage === pkg.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setActivePackage(pkg.id)}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center">
                      <h3 className={`text-lg font-semibold mb-2 ${
                        activePackage === pkg.id ? 'text-blue-600' : 'text-gray-900'
                      }`}>
                        {pkg.title}
                      </h3>
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        {pkg.price}
                      </div>
                      <div className="text-sm text-gray-500 mb-3">{pkg.priceUnit}</div>
                      <div className="text-sm text-gray-600">{pkg.duration}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Active Package Details */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{activePackageData.title}</h3>
                <p className="text-gray-600 mb-4">{activePackageData.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">What's Included:</h4>
                    <ul className="space-y-1">
                      {activePackageData.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Ideal For:</h4>
                    <p className="text-sm text-gray-600">{activePackageData.ideal}</p>
                    
                    {estimatedCost > 0 && (
                      <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                        <div className="text-sm text-blue-700">Estimated Cost</div>
                        <div className="text-lg font-bold text-blue-800">
                          ₹{estimatedCost.toLocaleString()}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Design Styles */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Popular Design Styles</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {designStyles.map((style) => (
                  <div
                    key={style.id}
                    className={`border rounded-lg p-3 cursor-pointer transition-all ${
                      formData.style === style.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, style: style.id }))}
                  >
                    <div className="aspect-w-3 aspect-h-2 mb-2">
                      <div className="w-full h-24 bg-gray-200 rounded"></div>
                    </div>
                    <h4 className={`text-sm font-medium text-center ${
                      formData.style === style.id ? 'text-blue-600' : 'text-gray-900'
                    }`}>
                      {style.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Free Consultation</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
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
                    <option value="office">Office</option>
                    <option value="retail">Retail Space</option>
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
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Budget</option>
                    <option value="5-10">₹5-10 Lac</option>
                    <option value="10-20">₹10-20 Lac</option>
                    <option value="20-50">₹20-50 Lac</option>
                    <option value="50+">₹50+ Lac</option>
                  </select>
                </div>

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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Requirements
                  </label>
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Describe your design requirements..."
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 font-semibold transition-colors"
                >
                  Get Free Consultation
                </button>
              </form>

              <div className="mt-4 text-center text-sm text-gray-500">
                <p>Free consultation & quote</p>
                <p>Response within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Process & Benefits */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Design Process */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Design Process</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Consultation & Planning</h4>
                  <p className="text-sm text-gray-600">Understanding your needs, preferences, and budget</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Design & Visualization</h4>
                  <p className="text-sm text-gray-600">Creating 3D designs and realistic visualizations</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Material Selection</h4>
                  <p className="text-sm text-gray-600">Curating the best materials within your budget</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-1">
                  4
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Execution & Delivery</h4>
                  <p className="text-sm text-gray-600">Professional execution with quality supervision</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">500+ Happy Customers</span>
              </div>

              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Expert Design Team</span>
              </div>

              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Quality Materials & Finishes</span>
              </div>

              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Timely Project Delivery</span>
              </div>

              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Post-Delivery Support</span>
              </div>

              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Transparent Pricing</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <span className="text-sm font-medium text-yellow-800">Limited Time Offer</span>
              </div>
              <p className="text-sm text-yellow-700 mt-1">
                Get 15% off on Premium & Luxury packages. Offer valid till month end!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Loading component for Suspense fallback
function InteriorPageLoading() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="animate-pulse space-y-4">
                <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="border rounded-lg p-4">
                      <div className="h-20 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="animate-pulse space-y-4">
                <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-10 bg-gray-200 rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main component with Suspense boundary
export default function InteriorPage() {
  return (
    <Suspense fallback={<InteriorPageLoading />}>
      <InteriorPageContent />
    </Suspense>
  );
}