'use client'

import React, { useState } from 'react';

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

  const contentData = {
    'sell-rent': {
      title: 'Popular Cities',
      cities: [
        'Delhi / NCR',
        'Mumbai',
        'Bangalore',
        'Hyderabad',
        'Pune',
        'Chennai',
        'Kolkata',
        'Ahmedabad'
      ],
      helpText: 'Post your property for FREE and connect with genuine buyers/tenants',
      features: [
        'Zero brokerage charges',
        'Direct buyer/tenant contact',
        'Professional photography',
        'Premium listing options'
      ]
    },
    'valuation': {
      title: 'Valuation Services',
      cities: [
        'Delhi / NCR',
        'Mumbai',
        'Bangalore',
        'Hyderabad',
        'Pune',
        'Chennai'
      ],
      helpText: 'Get accurate property valuation based on market trends',
      features: [
        'AI-powered estimates',
        'Market comparison analysis',
        'Professional reports',
        'Investment insights'
      ]
    },
    'legal': {
      title: 'Legal Assistance',
      cities: [
        'Delhi / NCR',
        'Mumbai',
        'Bangalore',
        'Hyderabad',
        'Pune',
        'Chennai'
      ],
      helpText: 'Complete legal support for property transactions',
      features: [
        'Document verification',
        'Title clearance',
        'Registration support',
        'Legal consultation'
      ]
    },
    'interior': {
      title: 'Design Services',
      cities: [
        'Delhi / NCR',
        'Mumbai',
        'Bangalore',
        'Hyderabad',
        'Pune',
        'Chennai'
      ],
      helpText: 'Transform your space with professional interior design',
      features: [
        '3D visualization',
        'Budget-friendly options',
        'Expert designers',
        'End-to-end execution'
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
    <div className="w-[700px] bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
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
                className={`group w-full flex items-center p-3 rounded-lg transition-colors text-left ${
                  activeService === service.id 
                    ? 'bg-blue-50 border border-blue-200' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className={`w-9 h-9 ${getColorClasses(service.color)} rounded-lg flex items-center justify-center mr-3 ${getColorClasses(service.color, 'hover')}`}>
                  <span className="text-xl">{service.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <h4 className={`font-medium ${
                      activeService === service.id 
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
                <svg className={`w-4 h-4 ${
                  activeService === service.id 
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
            {contentData[activeService]?.cities.map((city, index) => (
              <button 
                key={index}
                className="text-sm text-gray-700 hover:text-blue-500 hover:bg-blue-50 px-3 py-2 rounded transition-colors text-left"
              >
                {city}
              </button>
            ))}
          </div>

          {/* Features */}
          <div className="mb-4">
            <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              Key Features
            </h4>
            <div className="space-y-1">
              {contentData[activeService]?.features.map((feature, index) => (
                <div key={index} className="flex items-center text-xs text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Support Info */}
          <div className="pt-4 border-t border-gray-100">
            <div className="text-xs text-gray-500">
              <span>Need help? Call </span>
              <span className="font-medium text-gray-700">1800 41 99099</span>
            </div>
            <div className="mt-1 text-xs text-blue-500 hover:underline">
              <button className="text-left">
                owners@grihapravesh.com
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}