'use client'

import React from 'react';
import { notFound } from 'next/navigation';
import ValuationForm from '@/components/forms/ValuationForm';
import LegalForm from '@/components/forms/LegalForm';
import InteriorForm from '@/components/forms/InteriorForm';
import PropertyPostForm from '@/components/forms/PropertyPostForm';

export default function ServicePage({ params, searchParams }) {
  const { type } = params;
  const { location } = searchParams || {};

  // Service configuration
  const serviceConfig = {
    'sell-rent': {
      title: 'Post Your Property',
      subtitle: 'List your property for FREE and connect with genuine buyers',
      icon: '🏠',
      component: PropertyPostForm,
      color: 'green',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      buttonColor: 'bg-green-500 hover:bg-green-600'
    },
    'valuation': {
      title: 'Property Valuation',
      subtitle: 'Get accurate property estimates based on current market trends',
      icon: '💰',
      component: ValuationForm,
      color: 'blue',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      buttonColor: 'bg-blue-500 hover:bg-blue-600'
    },
    'legal': {
      title: 'Legal Consultation',
      subtitle: 'Expert legal assistance for all your property needs',
      icon: '⚖️',
      component: LegalForm,
      color: 'purple',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      buttonColor: 'bg-purple-500 hover:bg-purple-600'
    },
    'interior': {
      title: 'Interior Design',
      subtitle: 'Transform your space with professional interior design',
      icon: '🎨',
      component: InteriorForm,
      color: 'orange',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      buttonColor: 'bg-orange-500 hover:bg-orange-600'
    }
  };

  const currentService = serviceConfig[type];
  
  // If service type doesn't exist, return 404
  if (!currentService) {
    notFound();
  }

  const FormComponent = currentService.component;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <div className={`w-16 h-16 ${currentService.bgColor} rounded-xl flex items-center justify-center mr-6 shadow-sm`}>
              <span className="text-3xl">{currentService.icon}</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {currentService.title}
              </h1>
              <p className="text-lg text-gray-600 mb-2">
                {currentService.subtitle}
              </p>
              {location && (
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="capitalize">{location.replace('-', ' ')}</span>
                </div>
              )}
            </div>
          </div>

          {/* Breadcrumb */}
          <nav className="flex text-sm text-gray-500 mb-6">
            <a href="/" className="hover:text-gray-700">Home</a>
            <span className="mx-2">/</span>
            <a href="/services" className="hover:text-gray-700">Services</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900 capitalize">{type.replace('-', ' ')}</span>
          </nav>
        </div>

        {/* Form Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className={`${currentService.bgColor} px-6 py-4 border-b`}>
              <h2 className={`text-xl font-semibold ${currentService.textColor}`}>
                Fill in the details below
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                All fields marked with * are required
              </p>
            </div>
            
            <div className="p-6">
              <FormComponent 
                location={location} 
                serviceType={type}
                buttonColor={currentService.buttonColor}
              />
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center p-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Verified Professionals</h3>
              <p className="text-sm text-gray-600">All our partners are verified and trusted</p>
            </div>
            
            <div className="flex flex-col items-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Secure & Private</h3>
              <p className="text-sm text-gray-600">Your information is safe and secure with us</p>
            </div>
            
            <div className="flex flex-col items-center p-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Quick Response</h3>
              <p className="text-sm text-gray-600">Get responses within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}