'use client'
// src/app/legal/page.js
import { useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';
import Link from 'next/link';

// Separate component that uses useSearchParams
function LegalContent() {
  const searchParams = useSearchParams();
  const [activeService, setActiveService] = useState('registration');
  const [formData, setFormData] = useState({
    location: searchParams.get('location') || '',
    service: 'registration',
    propertyType: 'residential',
    name: '',
    contact: '',
    email: '',
    message: ''
  });

  const legalServices = [
    {
      id: 'registration',
      title: 'Property Registration',
      icon: '📋',
      price: '₹15,000',
      duration: '7-10 days',
      description: 'Complete property registration assistance with all legal formalities',
      features: [
        'Document preparation and verification',
        'Registration office assistance',
        'Stamp duty calculation',
        'Legal compliance check',
        'Post-registration support'
      ]
    },
    {
      id: 'title-verification',
      title: 'Title Verification',
      icon: '🔍',
      price: '₹8,000',
      duration: '3-5 days',
      description: 'Comprehensive title clearance and verification service',
      features: [
        'Chain of title verification',
        'Encumbrance certificate check',
        'Legal opinion report',
        'Risk assessment',
        'Clear title certificate'
      ]
    },
    {
      id: 'documentation',
      title: 'Legal Documentation',
      icon: '📄',
      price: '₹12,000',
      duration: '5-7 days',
      description: 'Preparation and review of all property-related legal documents',
      features: [
        'Sale/Purchase agreement drafting',
        'Lease deed preparation',
        'Power of attorney',
        'NOC applications',
        'Legal notice drafting'
      ]
    },
    {
      id: 'consultation',
      title: 'Legal Consultation',
      icon: '⚖️',
      price: '₹2,500',
      duration: '1-2 hours',
      description: 'Expert legal advice for property matters',
      features: [
        'Property law consultation',
        'Investment advice',
        'Risk assessment',
        'Dispute resolution guidance',
        'Legal strategy planning'
      ]
    }
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
    console.log('Legal service request:', formData);
    alert('Your request has been submitted. Our legal team will contact you soon.');
  };

  const activeServiceData = legalServices.find(service => service.id === activeService);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Legal Services</h1>
          <p className="text-gray-600">Complete legal support for all your property transactions</p>
          
          <div className="mt-4 flex items-center space-x-4 text-sm">
            <div className="flex items-center text-blue-600">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Expert Legal Team
            </div>
            <div className="flex items-center text-green-600">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Quick Turnaround
            </div>
            <div className="flex items-center text-purple-600">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              Transparent Pricing
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Services List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal Services</h3>
              
              <div className="space-y-2">
                {legalServices.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      activeService === service.id
                        ? 'bg-blue-50 border border-blue-200'
                        : 'hover:bg-gray-50 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{service.icon}</span>
                      <div className="flex-1">
                        <h4 className={`font-medium ${
                          activeService === service.id ? 'text-blue-600' : 'text-gray-900'
                        }`}>
                          {service.title}
                        </h4>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-sm text-gray-500">{service.duration}</span>
                          <span className="text-sm font-semibold text-green-600">{service.price}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Service Details & Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">{activeServiceData.icon}</span>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">{activeServiceData.title}</h2>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-lg font-bold text-green-600">{activeServiceData.price}</span>
                    <span className="text-sm text-gray-500">Duration: {activeServiceData.duration}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{activeServiceData.description}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activeServiceData.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Legal Assistance</h3>
              
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
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="plot">Plot/Land</option>
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
                      placeholder="Enter your full name"
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

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter email address"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Describe Your Requirement
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Please describe your legal requirement in detail..."
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 font-semibold transition-colors"
                >
                  Request Legal Service
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Our Legal Services?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Legal Team</h4>
              <p className="text-gray-600">Experienced property lawyers with deep knowledge of real estate law</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Transparent Process</h4>
              <p className="text-gray-600">Clear pricing, regular updates, and complete transparency throughout</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Quick Turnaround</h4>
              <p className="text-gray-600">Fast processing with strict adherence to timelines and deadlines</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Loading component
function LegalLoading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading legal services...</p>
      </div>
    </div>
  );
}

// Main exported component with Suspense boundary
export default function LegalPage() {
  return (
    <Suspense fallback={<LegalLoading />}>
      <LegalContent />
    </Suspense>
  );
}