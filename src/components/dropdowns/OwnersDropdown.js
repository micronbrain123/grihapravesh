'use client'

import React, { useState } from 'react';
import Link from 'next/link';

export default function OwnersDropdown() {
  const [activeService, setActiveService] = useState('sell-rent');

  const services = [
    {
      id: 'sell-rent',
      title: 'Sell/Rent Property',
      description: 'Post for FREE',
      icon: '🏠',
      color: 'green',
      badge: 'FREE'
    },
    {
      id: 'valuation',
      title: 'Property Valuation',
      description: 'Instant estimates',
      icon: '💰',
      color: 'blue'
    },
    {
      id: 'legal',
      title: 'Legal Services',
      description: 'Documentation',
      icon: '⚖️',
      color: 'purple'
    },
    {
      id: 'interior',
      title: 'Interior Design',
      description: 'Transform space',
      icon: '🎨',
      color: 'orange'
    }
  ];

  // Helper function to generate service URLs
  const generateServiceURL = (service, location = null) => {
    const params = new URLSearchParams();
    if (location) params.append('location', location);
    params.append('type', service);

    // Route to appropriate page based on service type
    const routes = {
      'sell-rent': '/services',
      'valuation': '/valuation',
      'legal': '/legal',
      'interior': '/interior'
    };

    const basePath = routes[service] || '/services';
    return params.toString() ? `${basePath}?${params.toString()}` : basePath;
  };

  const contentData = {
    'sell-rent': {
      title: 'Popular Cities',
      cities: [
        { name: 'Delhi / NCR', slug: 'delhi' },
        { name: 'Mumbai', slug: 'mumbai' },
        { name: 'Bangalore', slug: 'bangalore' },
        { name: 'Hyderabad', slug: 'hyderabad' },
        { name: 'Pune', slug: 'pune' },
        { name: 'Chennai', slug: 'chennai' },
      ],
      helpText: 'Post your property for FREE and connect with genuine buyers/tenants',
      features: [
        { name: 'Zero brokerage charges', url: '/post-property' },
        { name: 'Professional photography', url: '/services?type=sell-rent&feature=photography' },
        { name: 'Premium listing options', url: '/services?type=sell-rent&featured=true' }
      ]
    },
    'valuation': {
      title: 'Valuation Services',
      cities: [
        { name: 'Delhi / NCR', slug: 'delhi' },
        { name: 'Mumbai', slug: 'mumbai' },
        { name: 'Bangalore', slug: 'bangalore' },
        { name: 'Hyderabad', slug: 'hyderabad' },
        { name: 'Pune', slug: 'pune' },
        { name: 'Chennai', slug: 'chennai' }
      ],
      helpText: 'Get accurate property valuation based on market trends',
      features: [
        { name: 'AI-powered estimates', url: '/valuation?service=ai-estimates' },
        { name: 'Market comparison analysis', url: '/valuation?service=market-analysis' },
        { name: 'Investment insights', url: '/valuation?service=investment-insights' }
      ]
    },
    'legal': {
      title: 'Legal Assistance',
      cities: [
        { name: 'Delhi / NCR', slug: 'delhi' },
        { name: 'Mumbai', slug: 'mumbai' },
        { name: 'Bangalore', slug: 'bangalore' },
        { name: 'Hyderabad', slug: 'hyderabad' },
        { name: 'Pune', slug: 'pune' },
        { name: 'Chennai', slug: 'chennai' }
      ],
      helpText: 'Complete legal support for property transactions',
      features: [
        { name: 'Document verification', url: '/legal?service=document-verification' },
        { name: 'Registration support', url: '/legal?service=registration' },
        { name: 'Legal consultation', url: '/legal?service=consultation' }
      ]
    },
    'interior': {
      title: 'Design Services',
      cities: [
        { name: 'Delhi / NCR', slug: 'delhi' },
        { name: 'Mumbai', slug: 'mumbai' },
        { name: 'Bangalore', slug: 'bangalore' },
        { name: 'Hyderabad', slug: 'hyderabad' },
        { name: 'Pune', slug: 'pune' },
        { name: 'Chennai', slug: 'chennai' }
      ],
      helpText: 'Transform your space with professional interior design',
      features: [
        { name: '3D visualization', url: '/interior?service=3d-visualization' },
        { name: 'Budget-friendly options', url: '/interior?service=budget-options' },
        { name: 'Expert designers', url: '/interior?service=expert-consultation' },
        { name: 'End-to-end execution', url: '/interior?service=full-execution' }
      ]
    }
  };

  const getColorClasses = (color, type = 'bg') => {
    const colorMap = {
      green: type === 'bg' ? 'bg-green-50' : type === 'hover' ? 'group-hover:bg-green-100' : 'text-green-600',
      blue: type === 'bg' ? 'bg-blue-50' : type === 'hover' ? 'group-hover:bg-blue-100' : 'text-blue-600',
      purple: type === 'bg' ? 'bg-purple-50' : type === 'hover' ? 'group-hover:bg-purple-100' : 'text-purple-600',
      orange: type === 'bg' ? 'bg-orange-50' : type === 'hover' ? 'group-hover:bg-orange-100' : 'text-orange-600'
    };
    return colorMap[color] || 'bg-gray-50';
  };

  return (
    <div className="w-[800px] bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="flex">
        {/* Left Panel - Services */}
        <div className="w-1/2 p-6 border-r border-gray-100">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
            Owner Services
          </h3>

          <div className="space-y-2">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`group w-full flex items-center p-3 rounded-lg transition-colors text-left ${activeService === service.id
                    ? 'bg-blue-50 border border-blue-200'
                    : 'hover:bg-gray-50'
                  }`}
              >
                <div className={`w-9 h-9 ${getColorClasses(service.color)} rounded-lg flex items-center justify-center mr-3 ${getColorClasses(service.color, 'hover')}`}>
                  <span className="text-xl">{service.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <h4 className={`font-medium ${activeService === service.id
                        ? 'text-blue-600'
                        : 'text-gray-800 group-hover:text-blue-500'
                      }`}>
                      {service.title}
                    </h4>
                    {service.badge && (
                      <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{service.description}</p>
                </div>
                <svg className={`w-4 h-4 ${activeService === service.id
                    ? 'text-blue-400'
                    : 'text-gray-300 group-hover:text-blue-400'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Right Panel - Dynamic Content */}
        <div className="w-1/2 p-5">
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
              {contentData[activeService]?.title}
            </h3>
            <p className="text-xs text-gray-600 mb-4">
              {contentData[activeService]?.helpText}
            </p>
          </div>

          {/* Cities Grid */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {contentData[activeService]?.cities.map((city, index) => {
              // Generate dynamic URLs based on service type and location
              const href = generateServiceURL(activeService, city.slug);
              let displayText = city.name;

              // Customize display text based on service
              if (activeService === 'sell-rent') {
                displayText = `Post in ${city.name}`;
              } else if (activeService === 'valuation') {
                displayText = `Valuation in ${city.name}`;
              } else if (activeService === 'legal') {
                displayText = `Legal Help in ${city.name}`;
              } else if (activeService === 'interior') {
                displayText = `Design in ${city.name}`;
              }

              return (
                <Link
                  key={index}
                  href={href}
                  className="text-sm text-gray-700 hover:text-blue-500 hover:bg-blue-50 px-3 py-2 rounded transition-colors text-left block"
                >
                  {displayText}
                </Link>
              );
            })}
          </div>

          {/* Features */}
          <div className="mb-4">
            <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              Key Features
            </h4>
            <div className="space-y-1">
              {contentData[activeService]?.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center text-xs text-gray-600 px-2 py-1"
                >
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                  {feature.name}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="space-y-2 mb-4">
            {activeService === 'sell-rent' && (
              <Link
                href="/post-property"
                className="w-full bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                <span className="mr-2">📝</span>
                Post Property Now
              </Link>
            )}

            {activeService === 'valuation' && (
              <Link
                href="/valuation/instant"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                <span className="mr-2">⚡</span>
                Get Instant Valuation
              </Link>
            )}

            {activeService === 'legal' && (
              <Link
                href="/legal/consultation"
                className="w-full bg-purple-500 hover:bg-purple-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                <span className="mr-2">👨‍💼</span>
                Book Consultation
              </Link>
            )}

           {activeService === 'interior' && (
            <button
              className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
            >
              <span className="mr-2">🎨</span>
              Get Design Quote
            </button>
          )}
          </div>

          {/* Footer Links */}
          <div className="pt-3 border-t border-gray-100">
            <div className="flex justify-between text-xs text-gray-500">
              <Link href="/help" className="hover:text-blue-500 transition-colors">
                Need Help?
              </Link>
              <Link href="/contact" className="hover:text-blue-500 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}