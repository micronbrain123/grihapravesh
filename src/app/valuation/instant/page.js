'use client'

import React, { useState } from 'react';
import Link from 'next/link';

export default function InstantValuation() {
  const [formData, setFormData] = useState({
    propertyType: '',
    city: '',
    locality: '',
    bedrooms: '',
    bathrooms: '',
    area: '',
    areaUnit: 'sqft',
    floor: '',
    totalFloors: '',
    age: '',
    furnishing: '',
    parking: ''
  });

  const [valuation, setValuation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const cities = [
    'Delhi / NCR', 'Mumbai', 'Bangalore', 'Hyderabad', 'Pune', 'Chennai',
    'Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Kochi', 'Indore'
  ];

  const propertyTypes = [
    { id: 'apartment', name: 'Apartment/Flat', icon: '🏢' },
    { id: 'house', name: 'Independent House', icon: '🏠' },
    { id: 'villa', name: 'Villa', icon: '🏘️' },
    { id: 'plot', name: 'Plot/Land', icon: '🌱' },
    { id: 'commercial', name: 'Commercial', icon: '🏪' }
  ];

  const furnishingOptions = [
    'Unfurnished', 'Semi-Furnished', 'Fully Furnished'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateValuation = () => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Simple valuation logic (in real app, this would be an API call)
      const baseRate = getBaseRate(formData.city, formData.propertyType);
      let calculatedPrice = baseRate * parseInt(formData.area);
      
      // Apply modifiers
      calculatedPrice *= getFurnishingMultiplier(formData.furnishing);
      calculatedPrice *= getAgeMultiplier(formData.age);
      calculatedPrice *= getFloorMultiplier(formData.floor, formData.totalFloors);
      
      const minPrice = calculatedPrice * 0.85;
      const maxPrice = calculatedPrice * 1.15;
      
      setValuation({
        estimated: calculatedPrice,
        range: { min: minPrice, max: maxPrice },
        pricePerSqft: calculatedPrice / parseInt(formData.area),
        marketTrend: 'stable',
        confidence: '85%'
      });
      
      setIsLoading(false);
    }, 2000);
  };

  const getBaseRate = (city, type) => {
    const rates = {
      'Delhi / NCR': { apartment: 8000, house: 7500, villa: 12000, plot: 50000, commercial: 15000 },
      'Mumbai': { apartment: 15000, house: 12000, villa: 20000, plot: 80000, commercial: 25000 },
      'Bangalore': { apartment: 6500, house: 6000, villa: 10000, plot: 35000, commercial: 12000 },
      'Hyderabad': { apartment: 5500, house: 5000, villa: 8000, plot: 25000, commercial: 10000 },
      'Pune': { apartment: 6000, house: 5500, villa: 9000, plot: 30000, commercial: 11000 },
      'Chennai': { apartment: 5800, house: 5300, villa: 8500, plot: 28000, commercial: 10500 }
    };
    return rates[city]?.[type] || 5000;
  };

  const getFurnishingMultiplier = (furnishing) => {
    const multipliers = {
      'Unfurnished': 1.0,
      'Semi-Furnished': 1.1,
      'Fully Furnished': 1.2
    };
    return multipliers[furnishing] || 1.0;
  };

  const getAgeMultiplier = (age) => {
    const multipliers = {
      '0-1': 1.1,
      '1-5': 1.0,
      '5-10': 0.95,
      '10-20': 0.85,
      '20+': 0.75
    };
    return multipliers[age] || 1.0;
  };

  const getFloorMultiplier = (floor, totalFloors) => {
    if (!floor || !totalFloors) return 1.0;
    const floorNum = parseInt(floor);
    const totalNum = parseInt(totalFloors);
    
    if (floorNum === 1) return 0.95; // Ground floor
    if (floorNum > totalNum * 0.7) return 1.05; // Higher floors
    return 1.0;
  };

  const formatCurrency = (amount) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} Lakh`;
    }
    return `₹${amount.toLocaleString()}`;
  };

  const isStepValid = (step) => {
    switch (step) {
      case 1:
        return formData.propertyType && formData.city;
      case 2:
        return formData.locality && formData.area && formData.bedrooms;
      case 3:
        return formData.floor && formData.age;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (currentStep < 3 && isStepValid(currentStep)) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 3 && isStepValid(currentStep)) {
      calculateValuation();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to GrihaProbesh
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Instant Property Valuation
          </h1>
          <p className="text-lg text-gray-600">
            Get AI-powered property estimates in minutes
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {!valuation ? (
            <>
              {/* Progress Bar */}
              <div className="bg-gray-50 px-8 py-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600">
                    Step {currentStep} of 3
                  </span>
                  <span className="text-sm text-gray-500">
                    {Math.round((currentStep / 3) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / 3) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="p-8">
                {/* Step 1: Basic Details */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                      Property Basics
                    </h2>

                    {/* Property Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Property Type *
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {propertyTypes.map((type) => (
                          <button
                            key={type.id}
                            onClick={() => handleInputChange('propertyType', type.id)}
                            className={`p-4 border-2 rounded-xl text-left transition-all ${
                              formData.propertyType === type.id
                                ? 'border-blue-500 bg-blue-50 text-blue-700'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="text-2xl mb-2">{type.icon}</div>
                            <div className="font-medium text-sm">{type.name}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* City */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select City</option>
                        {cities.map((city) => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 2: Property Details */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                      Property Details
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Locality */}
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Locality/Area *
                        </label>
                        <input
                          type="text"
                          value={formData.locality}
                          onChange={(e) => handleInputChange('locality', e.target.value)}
                          placeholder="e.g., Koramangala, Bandra West"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      {/* Area */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Carpet Area *
                        </label>
                        <div className="flex">
                          <input
                            type="number"
                            value={formData.area}
                            onChange={(e) => handleInputChange('area', e.target.value)}
                            placeholder="1200"
                            className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                          <select
                            value={formData.areaUnit}
                            onChange={(e) => handleInputChange('areaUnit', e.target.value)}
                            className="p-3 border-l-0 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="sqft">Sq Ft</option>
                            <option value="sqm">Sq M</option>
                          </select>
                        </div>
                      </div>

                      {/* Bedrooms */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Bedrooms *
                        </label>
                        <select
                          value={formData.bedrooms}
                          onChange={(e) => handleInputChange('bedrooms', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Select</option>
                          <option value="1">1 BHK</option>
                          <option value="2">2 BHK</option>
                          <option value="3">3 BHK</option>
                          <option value="4">4 BHK</option>
                          <option value="5">5+ BHK</option>
                        </select>
                      </div>

                      {/* Bathrooms */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Bathrooms
                        </label>
                        <select
                          value={formData.bathrooms}
                          onChange={(e) => handleInputChange('bathrooms', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Select</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4+</option>
                        </select>
                      </div>

                      {/* Parking */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Parking
                        </label>
                        <select
                          value={formData.parking}
                          onChange={(e) => handleInputChange('parking', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Select</option>
                          <option value="none">No Parking</option>
                          <option value="1">1 Car</option>
                          <option value="2">2 Cars</option>
                          <option value="3">3+ Cars</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Additional Details */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                      Additional Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Floor */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Floor *
                        </label>
                        <input
                          type="number"
                          value={formData.floor}
                          onChange={(e) => handleInputChange('floor', e.target.value)}
                          placeholder="e.g., 5"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      {/* Total Floors */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Total Floors
                        </label>
                        <input
                          type="number"
                          value={formData.totalFloors}
                          onChange={(e) => handleInputChange('totalFloors', e.target.value)}
                          placeholder="e.g., 10"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      {/* Property Age */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Property Age *
                        </label>
                        <select
                          value={formData.age}
                          onChange={(e) => handleInputChange('age', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Select Age</option>
                          <option value="0-1">Under 1 year</option>
                          <option value="1-5">1-5 years</option>
                          <option value="5-10">5-10 years</option>
                          <option value="10-20">10-20 years</option>
                          <option value="20+">20+ years</option>
                        </select>
                      </div>

                      {/* Furnishing */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Furnishing Status
                        </label>
                        <select
                          value={formData.furnishing}
                          onChange={(e) => handleInputChange('furnishing', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Select</option>
                          {furnishingOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Previous
                  </button>
                  
                  <button
                    onClick={nextStep}
                    disabled={!isStepValid(currentStep)}
                    className="px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                  >
                    {currentStep === 3 ? 'Get Valuation' : 'Next'}
                  </button>
                </div>
              </div>
            </>
          ) : (
            /* Results Section */
            <div className="p-8">
              {isLoading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Analyzing Your Property...
                  </h3>
                  <p className="text-gray-600">
                    Our AI is processing market data and comparable properties
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* Header */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      Property Valuation Ready!
                    </h2>
                    <p className="text-gray-600">
                      Based on current market trends and comparable properties
                    </p>
                  </div>

                  {/* Main Valuation */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
                    <h3 className="text-lg font-medium text-gray-700 mb-2">
                      Estimated Property Value
                    </h3>
                    <div className="text-4xl font-bold text-blue-600 mb-4">
                      {formatCurrency(valuation.estimated)}
                    </div>
                    <div className="text-gray-600">
                      Range: {formatCurrency(valuation.range.min)} - {formatCurrency(valuation.range.max)}
                    </div>
                    <div className="text-sm text-gray-500 mt-2">
                      Rate: ₹{valuation.pricePerSqft.toLocaleString()}/{formData.areaUnit}
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 rounded-xl p-6 text-center">
                      <div className="text-2xl mb-2">📈</div>
                      <h4 className="font-semibold text-gray-900 mb-1">Market Trend</h4>
                      <p className="text-gray-600 capitalize">{valuation.marketTrend}</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-6 text-center">
                      <div className="text-2xl mb-2">🎯</div>
                      <h4 className="font-semibold text-gray-900 mb-1">Confidence</h4>
                      <p className="text-gray-600">{valuation.confidence}</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-6 text-center">
                      <div className="text-2xl mb-2">⏱️</div>
                      <h4 className="font-semibold text-gray-900 mb-1">Report Date</h4>
                      <p className="text-gray-600">{new Date().toLocaleDateString()}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/post-property"
                      className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center"
                    >
                      📝 List Your Property
                    </Link>
                    <Link
                      href="/valuation/detailed"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center"
                    >
                      📊 Get Detailed Report
                    </Link>
                  </div>

                  {/* Start Over */}
                  <div className="text-center pt-4">
                    <button
                      onClick={() => {
                        setValuation(null);
                        setCurrentStep(1);
                        setFormData({
                          propertyType: '',
                          city: '',
                          locality: '',
                          bedrooms: '',
                          bathrooms: '',
                          area: '',
                          areaUnit: 'sqft',
                          floor: '',
                          totalFloors: '',
                          age: '',
                          furnishing: '',
                          parking: ''
                        });
                      }}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      ← Value Another Property
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Features Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="font-semibold text-gray-900 mb-2">AI-Powered</h3>
            <p className="text-gray-600 text-sm">Advanced algorithms analyze thousands of data points</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="font-semibold text-gray-900 mb-2">Instant Results</h3>
            <p className="text-gray-600 text-sm">Get accurate valuations in under 2 minutes</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl mb-4">🔒</div>
            <h3 className="font-semibold text-gray-900 mb-2">100% Free</h3>
            <p className="text-gray-600 text-sm">No hidden charges, completely transparent</p>
          </div>
        </div>
      </div>
    </div>
  );
}