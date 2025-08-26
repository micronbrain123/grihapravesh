'use client'

import React, { useState } from 'react';
import Link from 'next/link';

export default function DealersDropdown() {
  const [activeTab, setActiveTab] = useState('dealer-offerings');

  const menuItems = [
    {
      id: 'dealer-offerings',
      title: 'DEALER OFFERINGS',
      subtitle: 'Services & Support',
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      bgColor: 'bg-blue-100',
      hoverColor: 'group-hover:bg-blue-200'
    },
    {
      id: 'research-advice',
      title: 'RESEARCH AND ADVICE',
      subtitle: 'Market Intelligence',
      icon: (
        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      bgColor: 'bg-green-100',
      hoverColor: 'group-hover:bg-green-200'
    }
  ];

  const contentData = {
    'dealer-offerings': {
      title: 'PROPERTY SERVICES',
      services: [
        { name: 'Post Property', slug: 'post-property' },
        { name: 'Dealer Services', slug: 'dealer-services' },
        { name: 'View Responses', slug: 'view-responses' }
      ]
    },
    'research-advice': {
      title: 'HELP',
      services: [
        { name: 'Customer Services & FAQs', slug: 'customer-services-faqs' },
        { name: 'Contact Support', slug: 'contact-support' },
        { name: 'Documentation Help', slug: 'documentation-help' },
        { name: 'Technical Support', slug: 'technical-support' }
      ]
    }
  };

  const renderContent = () => {
    const content = contentData[activeTab];
    
    return (
      <div>
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
          {content?.title}
        </h3>
        <div className="space-y-2">
          {content?.services?.map((service, idx) => {
            // Generate dynamic URLs based on service type
            let href = '/dealers';
            if (activeTab === 'dealer-offerings') {
              href = `/property/${service.slug}`;
            } else if (activeTab === 'research-advice') {
              href = `/help/${service.slug}`;
            }

            return (
              <Link 
                key={idx}
                href={href}
                className="text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md transition-all duration-200 text-left block"
              >
                {service.name}
              </Link>
            );
          })}
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

          {/* Quick Links */}
          {/* <div className="mt-6 pt-4 border-t border-gray-200">
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <Link 
                href="/"
                className="text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded transition-all duration-200 text-left block"
              >
                Dashboard
              </Link>
              <Link 
                href="/leads"
                className="text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded transition-all duration-200 text-left block"
              >
                My Leads
              </Link>
              <Link 
                href="/inventory"
                className="text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded transition-all duration-200 text-left block"
              >
                Inventory
              </Link>
              <Link 
                href="/support"
                className="text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded transition-all duration-200 text-left block"
              >
                Support
              </Link>
            </div>
          </div> */}
        </div>

        {/* Right Panel - Dynamic Content */}
        <div className="w-2/3 p-6">
          <div className="mb-6">
            {renderContent()}
          </div>

          {/* Contact Info */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="text-xs text-gray-500">
              <span className="font-medium">Business inquiries toll free on</span>
              <br />
              <span className="font-bold text-gray-700">1800 41 99099</span>
              <span className="ml-2">(9AM-11PM IST)</span>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Email us at <Link href="mailto:grihaprobesh.com" className="text-blue-600 hover:underline">grihaprobesh.com</Link>, 
              or call us at <span className="font-medium">1800 41 99099 (IND Toll-Free)</span>
            </div>
            {/* <div className="mt-3 pt-2 border-t border-gray-100">
              <div className="text-xs text-gray-500">
                Are you a builder? <Link href="/builders" className="text-blue-600 hover:underline font-medium">click here</Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}