"use client"

import React, { useState } from 'react';

export default function BuyersDropdown() {
  const [activeTab, setActiveTab] = useState('buy-home');

  const menuItems = [
    {
      id: 'buy-home',
      title: 'BUY A HOME',
      subtitle: 'Residential Properties',
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      bgColor: 'bg-blue-100',
      hoverColor: 'group-hover:bg-blue-200'
    },
    {
      id: 'land-plot',
      title: 'Land/Plot',
      subtitle: 'Residential & Commercial',
      icon: (
        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      bgColor: 'bg-green-100',
      hoverColor: 'group-hover:bg-green-200'
    },
    {
      id: 'commercial',
      title: 'COMMERCIAL',
      subtitle: 'Office & Retail Spaces',
      icon: (
        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      bgColor: 'bg-purple-100',
      hoverColor: 'group-hover:bg-purple-200'
    },
    {
      id: 'insights',
      title: 'INSIGHTS',
      subtitle: 'NEW',
      icon: (
        <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      bgColor: 'bg-orange-100',
      hoverColor: 'group-hover:bg-orange-200'
    },
    {
      id: 'articles',
      title: 'ARTICLES & NEWS',
      subtitle: 'Latest Updates',
      icon: (
        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      bgColor: 'bg-red-100',
      hoverColor: 'group-hover:bg-red-200'
    }
  ];

  const contentData = {
    'buy-home': {
      title: 'TOP CITIES',
      cities: [
        'Delhi / NCR',
        'Mumbai',
        'Bangalore',
        'Hyderabad Metropolitan Region',
        'Pune',
        'Kolkata',
        'Chennai',
        'Ahmedabad'
      ],
      quickLinks: [
        { title: 'For Owners', url: '/owners' },
        { title: 'For Dealers/Builders', url: '/builders' },
        { title: 'Insights', url: '/insights' }
      ]
    },
    'land-plot': {
      title: 'POPULAR LOCATIONS',
      cities: [
        'Gurgaon',
        'Noida',
        'Greater Noida',
        'Faridabad',
        'Ghaziabad',
        'Sonipat',
        'Panipat',
        'Rohtak'
      ]
    },
    'commercial': {
      title: 'BUSINESS HUBS',
      cities: [
        'Connaught Place',
        'Bandra Kurla Complex',
        'Electronic City',
        'Cyber City Gurgaon',
        'Salt Lake Sector V',
        'Powai',
        'Whitefield',
        'Hinjewadi'
      ]
    },
    'insights': {
      title: 'MARKET INSIGHTS',
      features: [
        { name: 'Understand localities', icon: '🗺️' },
        { name: 'Read Resident Reviews', icon: '⭐' },
        { name: 'Check Price Trends', icon: '📈' },
        { name: 'Tools, Utilities & more', icon: '🔧' }
      ],
      exploreOptions: [
        'Buying a home',
        'Renting a home',
        'Invest in Real Estate',
        'Sell/Rent your property',
        'Plots/Land',
        'Explore insights',
        'PG'
      ]
    },
    'articles': {
      title: 'LATEST ARTICLES',
      articles: [
        'Property Market Trends 2024',
        'Best Time to Buy Property',
        'Home Loan Interest Rates',
        'Investment Tips for Buyers',
        'Legal Documents Checklist',
        'Property Registration Guide',
        'Market Analysis Reports',
        'Expert Opinion & Reviews'
      ]
    }
  };

  const renderContent = () => {
    const content = contentData[activeTab];
    
    if (activeTab === 'insights') {
      return (
        <div>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 mb-4" >
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  INTRODUCING <span className="text-blue-600">Insights</span>
                </h3>
              </div>
              <div className="text-blue-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
            
            <div className="space-y-2">
              {content.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-sm text-gray-700">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  {feature.name}
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            GET STARTED WITH EXPLORING REAL ESTATE OPTIONS
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {content.exploreOptions.map((option, idx) => (
              <button
                key={idx}
                className="text-xs text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded transition-all duration-200 text-center"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (activeTab === 'articles') {
      return (
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            {content.title}
          </h3>
          <div className="space-y-2">
            {content.articles.map((article, idx) => (
              <button 
                key={idx}
                className="block w-full text-left text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md transition-all duration-200"
              >
                📰 {article}
              </button>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div>
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          {content?.title}
        </h3>
        {activeTab === 'buy-home' && (
          <div className="flex space-x-4 mb-4">
            {contentData['buy-home'].quickLinks.map((link, idx) => (
              <button
                key={idx}
                className="text-xs font-medium text-blue-600 hover:underline"
              >
                {link.title}
              </button>
            ))}
          </div>
        )}
        <div className="grid grid-cols-2 gap-2">
          {content?.cities?.map((city, idx) => (
            <button 
              key={idx}
              className="text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md transition-all duration-200 text-left"
            >
              {activeTab === 'commercial' ? `Office in ${city}` : `Property in ${city}`}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-[800px] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
      <div className="flex">
        {/* Left Panel - Property Types */}
        <div className="w-1/3 bg-gray-50 p-6 border-r border-gray-200">
          <div className="space-y-3">
            {menuItems.map((item) => (
              <div key={item.id} className="group">
                <button 
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full cursor-pointer flex items-center p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 ${
                    activeTab === item.id 
                      ? 'bg-white shadow-sm border-l-4 border-blue-500' 
                      : ''
                  }`}
                >
                  <div className={`w-10 h-10 ${item.bgColor} rounded-lg flex items-center justify-center mr-3 ${item.hoverColor}`}>
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <div className={`font-semibold ${activeTab === item.id ? 'text-blue-600' : 'text-gray-900'}`}>
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
        </div>

        {/* Right Panel - Dynamic Content */}
        <div className="w-2/3 p-6">
          <div className="">
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
              Email us at <span className="text-blue-600 hover:underline cursor-pointer">services@grihapravesh.com</span>, 
              or call us at <span className="font-medium">1800 41 99099 (IND Toll-Free)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}