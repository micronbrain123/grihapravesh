'use client'
// src/app/[category]/[type]/page.js
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function DealerServicesPage() {
  const params = useParams();
  const { category, type } = params; // category = 'property' or 'help', type = specific service
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { value: 'overview', label: 'Overview' },
    { value: 'features', label: 'Features' },
    { value: 'pricing', label: 'Pricing' },
    { value: 'support', label: 'Support' }
  ];

  // Configuration for Property Services (Dealer Offerings)
  const propertyServicesConfig = {
    'post-property': {
      title: 'Post Property',
      description: 'List your properties and reach thousands of potential buyers',
      icon: '🏠',
      color: 'blue',
      category: 'Property Services'
    },
    'dealer-services': {
      title: 'Dealer Services',
      description: 'Comprehensive tools and services for real estate dealers',
      icon: '🤝',
      color: 'green',
      category: 'Property Services'
    },
    'myGrihaProbesh': {
      title: 'MyGrihaProbesh Dashboard',
      description: 'Manage your properties, leads, and business performance',
      icon: '📊',
      color: 'purple',
      category: 'Property Services'
    },
    'view-responses': {
      title: 'View Responses',
      description: 'Track and manage inquiries from potential buyers',
      icon: '💬',
      color: 'orange',
      category: 'Property Services'
    }
  };

  // Configuration for Help Services (Research and Advice)
  const helpServicesConfig = {
    'customer-services-faqs': {
      title: 'Customer Services & FAQs',
      description: 'Find answers to commonly asked questions and get help',
      icon: '❓',
      color: 'blue',
      category: 'Help & Support'
    },
    'contact-support': {
      title: 'Contact Support',
      description: 'Get in touch with our support team for assistance',
      icon: '📞',
      color: 'green',
      category: 'Help & Support'
    },
    'documentation-help': {
      title: 'Documentation Help',
      description: 'Complete guides and documentation for all services',
      icon: '📚',
      color: 'purple',
      category: 'Help & Support'
    },
    'technical-support': {
      title: 'Technical Support',
      description: 'Technical assistance and troubleshooting help',
      icon: '⚙️',
      color: 'orange',
      category: 'Help & Support'
    }
  };

  const getConfig = () => {
    if (category === 'property') {
      return propertyServicesConfig[type] || {
        title: 'Property Service',
        description: 'Property related service',
        icon: '🏠',
        color: 'blue',
        category: 'Property Services'
      };
    } else if (category === 'help') {
      return helpServicesConfig[type] || {
        title: 'Help Service',
        description: 'Help and support service',
        icon: '❓',
        color: 'blue',
        category: 'Help & Support'
      };
    }
    return {
      title: 'Service',
      description: 'Service information',
      icon: '📋',
      color: 'blue',
      category: 'Services'
    };
  };

  const config = getConfig();

  useEffect(() => {
    fetchData();
  }, [category, type, activeTab]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/api/${category}?type=${type}&tab=${activeTab}`);
      const result = await response.json();
      
      if (result.success) {
        setData(result.data);
      } else {
        setError('Failed to fetch service data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Render functions for Property Services
  const renderPostProperty = () => (
    <div className="space-y-6">
      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Listings</p>
              <p className="text-3xl font-bold text-gray-900">{data?.activeListings || 0}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Monthly Views</p>
              <p className="text-3xl font-bold text-gray-900">{data?.monthlyViews || 0}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Lead Conversion</p>
              <p className="text-3xl font-bold text-gray-900">{data?.leadConversion || 0}%</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Listing Tools */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Listing Management Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'Quick Post', description: 'Post property in under 2 minutes', status: 'Available' },
            { name: 'Bulk Upload', description: 'Upload multiple properties at once', status: 'Pro Feature' },
            { name: 'Photo Enhancement', description: 'Auto-enhance property photos', status: 'Available' },
            { name: 'Virtual Tours', description: 'Add 360° virtual property tours', status: 'Premium' }
          ].map((tool, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-gray-900">{tool.name}</h4>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  tool.status === 'Available' ? 'bg-green-100 text-green-800' :
                  tool.status === 'Pro Feature' ? 'bg-blue-100 text-blue-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {tool.status}
                </span>
              </div>
              <p className="text-sm text-gray-600">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      {data?.recentActivity && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {data.recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderDealerServices = () => (
    <div className="space-y-6">
      {/* Service Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { name: 'Lead Management', icon: '👥', count: data?.leadManagement || 0, color: 'blue' },
          { name: 'Marketing Tools', icon: '📢', count: data?.marketingTools || 0, color: 'green' },
          { name: 'Analytics', icon: '📊', count: data?.analytics || 0, color: 'purple' },
          { name: 'CRM Integration', icon: '🔗', count: data?.crmIntegration || 0, color: 'orange' }
        ].map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className={`w-12 h-12 mx-auto mb-4 bg-${service.color}-100 rounded-full flex items-center justify-center`}>
              <span className="text-2xl">{service.icon}</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{service.name}</h3>
            <p className="text-2xl font-bold text-gray-700">{service.count}</p>
            <p className="text-sm text-gray-500">Available Tools</p>
          </div>
        ))}
      </div>

      {/* Service Packages */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Service Packages</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Basic',
              price: '₹999/month',
              features: ['Property Listing', 'Basic Analytics', 'Email Support'],
              popular: false
            },
            {
              name: 'Professional',
              price: '₹2,999/month',
              features: ['Everything in Basic', 'Lead Management', 'Priority Support', 'Marketing Tools'],
              popular: true
            },
            {
              name: 'Enterprise',
              price: '₹9,999/month',
              features: ['Everything in Pro', 'Custom Branding', 'API Access', 'Dedicated Manager'],
              popular: false
            }
          ].map((pkg, index) => (
            <div key={index} className={`border rounded-lg p-6 relative ${pkg.popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Most Popular</span>
                </div>
              )}
              <h4 className="font-semibold text-xl text-gray-900 mb-2">{pkg.name}</h4>
              <p className="text-3xl font-bold text-blue-600 mb-4">{pkg.price}</p>
              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-2 px-4 rounded-lg font-medium ${
                pkg.popular 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMyGrihaProbesh = () => (
    <div className="space-y-6">
      {/* Dashboard Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-center">
            <p className="text-sm font-medium text-gray-600">Total Properties</p>
            <p className="text-3xl font-bold text-blue-600">{data?.totalProperties || 0}</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-center">
            <p className="text-sm font-medium text-gray-600">Active Leads</p>
            <p className="text-3xl font-bold text-green-600">{data?.activeLeads || 0}</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-center">
            <p className="text-sm font-medium text-gray-600">This Month Views</p>
            <p className="text-3xl font-bold text-purple-600">{data?.monthlyViews || 0}</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-center">
            <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
            <p className="text-3xl font-bold text-orange-600">{data?.conversionRate || 0}%</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Add Property', icon: '➕', color: 'blue' },
            { name: 'View Leads', icon: '👥', color: 'green' },
            { name: 'Analytics', icon: '📊', color: 'purple' },
            { name: 'Support', icon: '🆘', color: 'orange' }
          ].map((action, index) => (
            <button key={index} className={`p-4 border-2 border-dashed border-${action.color}-200 rounded-lg hover:border-${action.color}-400 transition-colors text-center`}>
              <div className="text-2xl mb-2">{action.icon}</div>
              <p className="text-sm font-medium text-gray-700">{action.name}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Performance Chart Area */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Overview</h3>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Performance charts and graphs will be displayed here</p>
        </div>
      </div>
    </div>
  );

  const renderViewResponses = () => (
    <div className="space-y-6">
      {/* Response Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-500">
          <p className="text-sm font-medium text-gray-600">Total Responses</p>
          <p className="text-3xl font-bold text-blue-600">{data?.totalResponses || 0}</p>
          <p className="text-sm text-gray-500">All time</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-green-500">
          <p className="text-sm font-medium text-gray-600">This Week</p>
          <p className="text-3xl font-bold text-green-600">{data?.weeklyResponses || 0}</p>
          <p className="text-sm text-gray-500">New inquiries</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-orange-500">
          <p className="text-sm font-medium text-gray-600">Response Rate</p>
          <p className="text-3xl font-bold text-orange-600">{data?.responseRate || 0}%</p>
          <p className="text-sm text-gray-500">Your reply rate</p>
        </div>
      </div>

      {/* Recent Responses */}
      {data?.recentResponses && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Inquiries</h3>
          <div className="space-y-4">
            {data.recentResponses.map((response, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">{response.propertyTitle}</h4>
                    <p className="text-sm text-gray-600">From: {response.inquirerName}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${
                    response.status === 'new' ? 'bg-blue-100 text-blue-800' :
                    response.status === 'replied' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {response.status}
                  </span>
                </div>
                <p className="text-sm text-gray-700 mb-2">{response.message}</p>
                <p className="text-xs text-gray-500">{response.timestamp}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  // Render functions for Help Services
  const renderCustomerServicesFAQs = () => (
    <div className="space-y-6">
      {/* FAQ Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { category: 'Account & Billing', count: 15, icon: '💳' },
          { category: 'Property Listing', count: 25, icon: '🏠' },
          { category: 'Technical Issues', count: 12, icon: '⚙️' }
        ].map((cat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl mb-2">{cat.icon}</div>
            <h3 className="font-semibold text-gray-900 mb-1">{cat.category}</h3>
            <p className="text-sm text-gray-600">{cat.count} FAQs</p>
          </div>
        ))}
      </div>

      {/* Popular FAQs */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular FAQs</h3>
        <div className="space-y-4">
          {[
            'How do I post a property listing?',
            'What are the charges for premium services?',
            'How can I increase my property visibility?',
            'How do I manage leads effectively?',
            'What payment methods are accepted?'
          ].map((faq, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-sm cursor-pointer transition-shadow">
              <div className="flex justify-between items-center">
                <p className="font-medium text-gray-900">{faq}</p>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContactSupport = () => (
    <div className="space-y-6">
      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
          <p className="text-blue-600 font-medium">1800 41 99099</p>
          <p className="text-sm text-gray-500">9AM-11PM IST</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
          <p className="text-green-600 font-medium">services@GrihaProbesh.com</p>
          <p className="text-sm text-gray-500">24/7 Response</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
          <p className="text-purple-600 font-medium">Start Chat</p>
          <p className="text-sm text-gray-500">Instant Response</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Send us a Message</h3>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
              <option>General Inquiry</option>
              <option>Technical Support</option>
              <option>Billing Question</option>
              <option>Feature Request</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
          </div>
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );

  const renderDocumentationHelp = () => (
    <div className="space-y-6">
      {/* Documentation Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: 'Getting Started', icon: '🚀', articles: 8 },
          { title: 'Property Management', icon: '🏠', articles: 15 },
          { title: 'Lead Management', icon: '👥', articles: 12 },
          { title: 'Analytics & Reports', icon: '📊', articles: 10 },
          { title: 'API Documentation', icon: '🔧', articles: 20 },
          { title: 'Troubleshooting', icon: '🔍', articles: 6 }
        ].map((doc, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="text-3xl mb-3">{doc.icon}</div>
            <h3 className="font-semibold text-gray-900 mb-2">{doc.title}</h3>
            <p className="text-sm text-gray-600">{doc.articles} articles</p>
          </div>
        ))}
      </div>

      {/* Popular Guides */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Guides</h3>
        <div className="space-y-3">
          {[
            'How to create your first property listing',
            'Understanding GrihaProbesh analytics dashboard',
            'Managing leads and follow-ups effectively',
            'Setting up automated responses',
            'Optimizing property photos for better visibility'
          ].map((guide, index) => (
            <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:shadow-sm cursor-pointer transition-shadow">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="font-medium text-gray-900">{guide}</p>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* Video Tutorials */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Video Tutorials</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'Property Posting Walkthrough', duration: '5:30', views: '12K' },
            { title: 'Dashboard Overview', duration: '8:15', views: '8.5K' },
            { title: 'Lead Management Best Practices', duration: '12:40', views: '15K' },
            { title: 'Analytics Deep Dive', duration: '18:20', views: '6.2K' }
          ].map((video, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm cursor-pointer transition-shadow">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{video.title}</h4>
                  <p className="text-sm text-gray-500">{video.duration} • {video.views} views</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTechnicalSupport = () => (
    <div className="space-y-6">
      {/* System Status */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
        <div className="space-y-3">
          {[
            { service: 'Property Listing Service', status: 'operational', uptime: '99.9%' },
            { service: 'Search & Discovery', status: 'operational', uptime: '99.8%' },
            { service: 'Lead Management', status: 'maintenance', uptime: '98.5%' },
            { service: 'Analytics Dashboard', status: 'operational', uptime: '99.7%' }
          ].map((service, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  service.status === 'operational' ? 'bg-green-500' :
                  service.status === 'maintenance' ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}></div>
                <span className="font-medium text-gray-900">{service.service}</span>
              </div>
              <div className="text-right">
                <span className={`text-sm px-2 py-1 rounded ${
                  service.status === 'operational' ? 'bg-green-100 text-green-800' :
                  service.status === 'maintenance' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {service.status}
                </span>
                <p className="text-xs text-gray-500 mt-1">Uptime: {service.uptime}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Common Issues */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Technical Issues</h3>
        <div className="space-y-4">
          {[
            {
              issue: 'Property images not uploading',
              solution: 'Check file size (max 5MB) and format (JPG, PNG)',
              severity: 'medium'
            },
            {
              issue: 'Dashboard loading slowly',
              solution: 'Clear browser cache and cookies',
              severity: 'low'
            },
            {
              issue: 'Lead notifications not received',
              solution: 'Check email settings and spam folder',
              severity: 'high'
            },
            {
              issue: 'Search results not displaying',
              solution: 'Refresh page or try different browser',
              severity: 'medium'
            }
          ].map((item, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-gray-900">{item.issue}</h4>
                <span className={`text-xs px-2 py-1 rounded ${
                  item.severity === 'high' ? 'bg-red-100 text-red-800' :
                  item.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {item.severity}
                </span>
              </div>
              <p className="text-sm text-gray-600">Solution: {item.solution}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Ticket */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Submit Technical Support Ticket</h3>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Priority Level</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                <option>Low - General question</option>
                <option>Medium - Feature not working</option>
                <option>High - System unavailable</option>
                <option>Critical - Data loss/corruption</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                <option>Property Listing Issues</option>
                <option>Dashboard/Analytics</option>
                <option>Lead Management</option>
                <option>Account & Billing</option>
                <option>API/Integration</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Issue Description</label>
            <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Describe the technical issue you're experiencing..."></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Steps to Reproduce</label>
            <textarea rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="1. Go to...\n2. Click on...\n3. See error..."></textarea>
          </div>
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Submit Ticket
          </button>
        </form>
      </div>
    </div>
  );

  const renderContent = () => {
    if (loading) {
      return (
        <div className="space-y-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm p-6 animate-pulse">
              <div className="h-4 bg-gray-200 rounded mb-4"></div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (error) {
      return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <div className="text-red-600 mb-2">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-red-800 font-medium">{error}</p>
          <button 
            onClick={fetchData}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Retry
          </button>
        </div>
      );
    }

    // Route content based on category and type
    if (category === 'property') {
      switch (type) {
        case 'post-property':
          return renderPostProperty();
        case 'dealer-services':
          return renderDealerServices();
        case 'myGrihaProbesh':
          return renderMyGrihaProbesh();
        case 'view-responses':
          return renderViewResponses();
        default:
          return (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
              <p className="text-yellow-800">Property service "{type}" is not yet implemented.</p>
            </div>
          );
      }
    } else if (category === 'help') {
      switch (type) {
        case 'customer-services-faqs':
          return renderCustomerServicesFAQs();
        case 'contact-support':
          return renderContactSupport();
        case 'documentation-help':
          return renderDocumentationHelp();
        case 'technical-support':
          return renderTechnicalSupport();
        default:
          return (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
              <p className="text-yellow-800">Help service "{type}" is not yet implemented.</p>
            </div>
          );
      }
    }

    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
        <p className="text-gray-600">Service category "{category}" is not recognized.</p>
      </div>
    );
  };

  const getBreadcrumbPath = () => {
    const basePath = category === 'property' ? 'Property Services' : 'Help & Support';
    return `${basePath} / ${config.title}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/dealers"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
              <div>
                <nav className="text-sm text-gray-500 mb-2">
                  <span>{getBreadcrumbPath()}</span>
                </nav>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-3xl">{config.icon}</span>
                  <h1 className="text-3xl font-bold text-gray-900">{config.title}</h1>
                </div>
                <p className="text-gray-600">{config.description}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              {tabs.map(tab => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.value
                      ? `bg-${config.color}-600 text-white`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        {renderContent()}

        {/* Action Buttons */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Need More Help?</h3>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/help/contact-support"
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact Support
            </Link>
            <Link 
              href="/help/documentation-help"
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Documentation
            </Link>
            <Link 
              href="/help/customer-services-faqs"
              className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Browse FAQs
            </Link>
            <button 
              onClick={() => window.print()}
              className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print
            </button>
          </div>
          
          {/* Contact Information */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="text-xs text-gray-500">
              <span className="font-medium">Business inquiries toll free on</span>
              <br />
              <span className="font-bold text-gray-700">1800 41 99099</span>
              <span className="ml-2">(9AM-11PM IST)</span>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Email us at <Link href="mailto:services@GrihaProbesh.com" className="text-blue-600 hover:underline">services@GrihaProbesh.com</Link>, 
              or call us at <span className="font-medium">1800 41 99099 (IND Toll-Free)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}