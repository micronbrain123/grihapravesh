'use client'

import React, { useState } from 'react';

export default function OwnersDropdown() {
  const [activeTab, setActiveTab] = useState('sell-rent');

  const menuItems = [
    {
      id: 'sell-rent',
      title: 'SELL/RENT',
      subtitle: 'Post Property FREE',
      icon: (
        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      bgColor: 'bg-green-100',
      hoverColor: 'group-hover:bg-green-200'
    },
    {
      id: 'valuation',
      title: 'VALUATION',
      subtitle: 'Price Estimates',
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgColor: 'bg-blue-100',
      hoverColor: 'group-hover:bg-blue-200'
    },
    {
      id: 'legal',
      title: 'LEGAL',
      subtitle: 'Documentation',
      icon: (
        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      bgColor: 'bg-purple-100',
      hoverColor: 'group-hover:bg-purple-200'
    },
    {
      id: 'interior',
      title: 'INTERIOR',
      subtitle: 'Design Services',
      icon: (
        <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 22V12h6v10" />
        </svg>
      ),
      bgColor: 'bg-orange-100',
      hoverColor: 'group-hover:bg-orange-200'
    }
  ];

  const contentData = {
    'sell-rent': {
      title: 'TOP CITIES TO SELL/RENT',
      cities: [
        'Delhi / NCR',
        'Mumbai',
        'Bangalore',
        'Hyderabad',
        'Pune',
        'Chennai',
        'Kolkata',
        'Ahmedabad'
      ]
    },
    'valuation': {
      title: 'VALUATION SERVICES',
      features: [
        { name: 'Instant Price Estimate', icon: '⚡' },
        { name: 'Market Trends Analysis', icon: '📈' },
        { name: 'Comparable Properties', icon: '🏘️' },
        { name: 'AI-powered Valuation', icon: '🤖' }
      ]
    },
    'legal': {
      title: 'LEGAL SERVICES',
      services: [
        'Document Verification',
        'Title Check',
        'Registration Assistance',
        'Stamp Duty Calculator',
        'Rental Agreement',
        'Property Tax Filing'
      ]
    },
    'interior': {
      title: 'INTERIOR DESIGN',
      services: [
        'Space Planning',
        '3D Visualization',
        'Material Selection',
        'Modular Kitchen',
        'Wardrobe Designs',
        'Complete Home Makeover'
      ]
    }
  };

  const renderContent = () => {
    const content = contentData[activeTab];
    
    if (activeTab === 'valuation') {
      return (
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                PROPERTY <span className="text-green-600">Valuation</span>
              </h3>
            </div>
            <div className="text-green-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
          
          <div className="space-y-2">
            {content.features.map((feature, idx) => (
              <div key={idx} className="flex items-center text-sm text-gray-700">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                {feature.name}
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (activeTab === 'sell-rent') {
      return (
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            {content.title}
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {content.cities.map((city, idx) => (
              <button 
                key={idx}
                className="text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-md transition-all duration-200 text-left"
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div>
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
          {content?.title}
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {content?.services?.map((service, idx) => (
            <button 
              key={idx}
              className="text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-md transition-all duration-200 text-left"
            >
              {service}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-[800px] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
      <div className="flex">
        {/* Left Panel - Services */}
        <div className="w-1/3 bg-gray-50 p-6 border-r border-gray-200">
          <div className="space-y-3">
            {menuItems.map((item) => (
              <div key={item.id} className="group">
                <button 
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full cursor-pointer flex items-center p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 ${
                    activeTab === item.id 
                      ? 'bg-white shadow-sm border-l-4 border-green-500' 
                      : ''
                  }`}
                >
                  <div className={`w-10 h-10 ${item.bgColor} rounded-lg flex items-center justify-center mr-3 ${item.hoverColor}`}>
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <div className={`font-semibold ${activeTab === item.id ? 'text-green-600' : 'text-gray-900'}`}>
                      {item.title}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                      {item.subtitle}
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <button className="text-xs text-gray-600 hover:text-green-600 hover:bg-green-50 px-2 py-1 rounded transition-all duration-200 text-left">
                Tax Calculator
              </button>
              <button className="text-xs text-gray-600 hover:text-green-600 hover:bg-green-50 px-2 py-1 rounded transition-all duration-200 text-left">
                Home Loans
              </button>
              <button className="text-xs text-gray-600 hover:text-green-600 hover:bg-green-50 px-2 py-1 rounded transition-all duration-200 text-left">
                Insurance
              </button>
              <button className="text-xs text-gray-600 hover:text-green-600 hover:bg-green-50 px-2 py-1 rounded transition-all duration-200 text-left">
                Maintenance
              </button>
            </div>
          </div>
        </div>

        {/* Right Panel - Dynamic Content */}
        <div className="w-2/3 p-6">
          <div className="mb-6">
            {renderContent()}
          </div>

          {/* Contact Info */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="text-xs text-gray-500">
              <span className="font-medium">contact us toll free on</span>
              <br />
              <span className="font-bold text-gray-700">1800 41 99099</span>
              <span className="ml-2">(9AM-11PM IST)</span>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Email us at <span className="text-green-600 hover:underline cursor-pointer">owners@grihapravesh.com</span>, 
              or call us at <span className="font-medium">1800 41 99099 (IND Toll-Free)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}