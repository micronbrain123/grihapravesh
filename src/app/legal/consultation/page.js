'use client'

import React, { useState } from 'react';
import Link from 'next/link';

export default function LegalConsultation() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Details
    name: '',
    email: '',
    phone: '',
    city: '',
    
    // Consultation Details
    consultationType: '',
    propertyType: '',
    urgency: '',
    description: '',
    documents: [],
    
    // Scheduling
    preferredDate: '',
    preferredTime: '',
    consultationMode: 'video',
    
    // Additional
    budget: '',
    previousLegalIssues: 'no'
  });

  const [selectedLawyer, setSelectedLawyer] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const cities = [
    'Delhi / NCR', 'Mumbai', 'Bangalore', 'Hyderabad', 'Pune', 'Chennai',
    'Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Kochi', 'Indore'
  ];

  const consultationTypes = [
    {
      id: 'property-purchase',
      name: 'Property Purchase',
      description: 'Due diligence, title verification, agreement review',
      icon: '🏠',
      duration: '45 mins',
      fee: '₹2,500'
    },
    {
      id: 'property-sale',
      name: 'Property Sale',
      description: 'Sale deed, NOC, tax implications',
      icon: '💰',
      duration: '45 mins',
      fee: '₹2,500'
    },
    {
      id: 'rental-agreement',
      name: 'Rental Agreement',
      description: 'Lease drafting, tenant rights, disputes',
      icon: '📄',
      duration: '30 mins',
      fee: '₹1,500'
    },
    {
      id: 'property-disputes',
      name: 'Property Disputes',
      description: 'Litigation, boundary issues, title disputes',
      icon: '⚖️',
      duration: '60 mins',
      fee: '₹3,500'
    },
    {
      id: 'documentation',
      name: 'Documentation',
      description: 'Registration, stamp duty, legal compliance',
      icon: '📋',
      duration: '30 mins',
      fee: '₹2,000'
    },
    {
      id: 'inheritance',
      name: 'Property Inheritance',
      description: 'Will, succession, family settlements',
      icon: '🏛️',
      duration: '60 mins',
      fee: '₹3,000'
    }
  ];

  const propertyTypes = [
    'Residential Apartment', 'Independent House', 'Villa', 'Commercial Office',
    'Retail Shop', 'Industrial Plot', 'Agricultural Land', 'Residential Plot'
  ];

  const urgencyLevels = [
    { id: 'immediate', name: 'Immediate (Within 24 hours)', color: 'red' },
    { id: 'urgent', name: 'Urgent (Within 3 days)', color: 'orange' },
    { id: 'normal', name: 'Normal (Within 1 week)', color: 'blue' },
    { id: 'flexible', name: 'Flexible (Within 2 weeks)', color: 'green' }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'
  ];

  const featuredLawyers = [
    {
      id: 1,
      name: 'Adv. Rajesh Kumar',
      experience: '15 years',
      specialization: 'Property Law & Real Estate',
      rating: 4.8,
      reviews: 245,
      fee: '₹2,500/consultation',
      languages: ['Hindi', 'English'],
      image: '👨‍💼',
      expertise: ['Property Purchase', 'Title Verification', 'Disputes']
    },
    {
      id: 2,
      name: 'Adv. Priya Sharma',
      experience: '12 years',
      specialization: 'Real Estate & Documentation',
      rating: 4.9,
      reviews: 189,
      fee: '₹3,000/consultation',
      languages: ['Hindi', 'English', 'Punjabi'],
      image: '👩‍💼',
      expertise: ['Documentation', 'Registration', 'Rental Law']
    },
    {
      id: 3,
      name: 'Adv. Suresh Patel',
      experience: '20 years',
      specialization: 'Property Disputes & Litigation',
      rating: 4.7,
      reviews: 312,
      fee: '₹3,500/consultation',
      languages: ['Hindi', 'English', 'Gujarati'],
      image: '👨‍⚖️',
      expertise: ['Litigation', 'Boundary Disputes', 'Title Issues']
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isStepValid = (step) => {
    switch (step) {
      case 1:
        return formData.name && formData.email && formData.phone && formData.city;
      case 2:
        return formData.consultationType && formData.urgency;
      case 3:
        return selectedLawyer && formData.preferredDate && formData.preferredTime;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (currentStep < 3 && isStepValid(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setBookingConfirmed(true);
      setIsSubmitting(false);
    }, 2000);
  };

  const getUrgencyColor = (urgency) => {
    const colors = {
      immediate: 'text-red-600 bg-red-50 border-red-200',
      urgent: 'text-orange-600 bg-orange-50 border-orange-200',
      normal: 'text-blue-600 bg-blue-50 border-blue-200',
      flexible: 'text-green-600 bg-green-50 border-green-200'
    };
    return colors[urgency] || 'text-gray-600 bg-gray-50 border-gray-200';
  };

  if (bookingConfirmed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Consultation Booked Successfully! 🎉
            </h1>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-6 text-left">
              <h3 className="font-semibold text-gray-900 mb-4">Booking Details:</h3>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Lawyer:</span> {selectedLawyer?.name}</p>
                <p><span className="font-medium">Date:</span> {formData.preferredDate}</p>
                <p><span className="font-medium">Time:</span> {formData.preferredTime}</p>
                <p><span className="font-medium">Mode:</span> {formData.consultationMode === 'video' ? 'Video Call' : formData.consultationMode === 'phone' ? 'Phone Call' : 'In-Person'}</p>
                <p><span className="font-medium">Consultation Type:</span> {consultationTypes.find(t => t.id === formData.consultationType)?.name}</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 mb-6">
              <p className="text-sm text-blue-700">
                📧 Confirmation details have been sent to <strong>{formData.email}</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                📅 Add to Calendar
              </button>
              <Link
                href="/legal/consultation"
                className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center block"
              >
                📝 Book Another Consultation
              </Link>
            </div>

            <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to GrihaProbesh
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-4">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to GrihaProbesh
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Legal Consultation Booking
          </h1>
          <p className="text-lg text-gray-600">
            Get expert legal advice from certified property lawyers
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Progress Bar */}
          <div className="bg-gray-50 px-8 py-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-purple-600">
                Step {currentStep} of 3
              </span>
              <span className="text-sm text-gray-500">
                {Math.round((currentStep / 3) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="p-8">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Personal Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    >
                      <option value="">Select City</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Consultation Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Consultation Details
                </h2>

                {/* Consultation Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Type of Legal Consultation *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {consultationTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => handleInputChange('consultationType', type.id)}
                        className={`p-4 border-2 rounded-xl text-left transition-all ${
                          formData.consultationType === type.id
                            ? 'border-purple-500 bg-purple-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl">{type.icon}</span>
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">{type.duration}</span>
                        </div>
                        <h4 className="font-medium text-gray-900 mb-1">{type.name}</h4>
                        <p className="text-xs text-gray-600 mb-2">{type.description}</p>
                        <div className="text-sm font-medium text-purple-600">{type.fee}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Property Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type (if applicable)
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => handleInputChange('propertyType', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="">Select Property Type</option>
                    {propertyTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Urgency */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Urgency Level *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {urgencyLevels.map((level) => (
                      <button
                        key={level.id}
                        onClick={() => handleInputChange('urgency', level.id)}
                        className={`p-3 border-2 rounded-lg text-left transition-all ${
                          formData.urgency === level.id
                            ? getUrgencyColor(level.id)
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {level.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Brief Description of Your Legal Issue
                  </label>
                  <textarea
                    rows={4}
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Please provide details about your legal query or concern..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Lawyer Selection & Scheduling */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Select Lawyer & Schedule
                </h2>

                {/* Lawyer Selection */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Choose Your Lawyer *
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {featuredLawyers.map((lawyer) => (
                      <button
                        key={lawyer.id}
                        onClick={() => setSelectedLawyer(lawyer)}
                        className={`p-4 border-2 rounded-xl text-left transition-all ${
                          selectedLawyer?.id === lawyer.id
                            ? 'border-purple-500 bg-purple-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="text-4xl">{lawyer.image}</div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{lawyer.name}</h4>
                            <p className="text-sm text-gray-600 mb-1">{lawyer.specialization}</p>
                            <p className="text-sm text-gray-600 mb-2">{lawyer.experience} experience</p>
                            
                            <div className="flex items-center mb-2">
                              <div className="flex items-center">
                                <span className="text-yellow-400">⭐</span>
                                <span className="text-sm font-medium ml-1">{lawyer.rating}</span>
                                <span className="text-sm text-gray-500 ml-1">({lawyer.reviews} reviews)</span>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-1 mb-2">
                              {lawyer.expertise.slice(0, 2).map((skill, idx) => (
                                <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
                                  {skill}
                                </span>
                              ))}
                            </div>
                            
                            <p className="text-sm font-medium text-purple-600">{lawyer.fee}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Scheduling */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    >
                      <option value="">Select Time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Consultation Mode */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Consultation Mode
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      onClick={() => handleInputChange('consultationMode', 'video')}
                      className={`p-3 border-2 rounded-lg text-center transition-all ${
                        formData.consultationMode === 'video'
                          ? 'border-purple-500 bg-purple-50 text-purple-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-xl mb-1">📹</div>
                      <div className="text-sm font-medium">Video Call</div>
                    </button>
                    <button
                      onClick={() => handleInputChange('consultationMode', 'phone')}
                      className={`p-3 border-2 rounded-lg text-center transition-all ${
                        formData.consultationMode === 'phone'
                          ? 'border-purple-500 bg-purple-50 text-purple-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-xl mb-1">📞</div>
                      <div className="text-sm font-medium">Phone Call</div>
                    </button>
                    <button
                      onClick={() => handleInputChange('consultationMode', 'inperson')}
                      className={`p-3 border-2 rounded-lg text-center transition-all ${
                        formData.consultationMode === 'inperson'
                          ? 'border-purple-500 bg-purple-50 text-purple-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-xl mb-1">🤝</div>
                      <div className="text-sm font-medium">In Person</div>
                    </button>
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
              
              {currentStep < 3 ? (
                <button
                  onClick={nextStep}
                  disabled={!isStepValid(currentStep)}
                  className="px-8 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!isStepValid(currentStep) || isSubmitting}
                  className="px-8 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                >
                  {isSubmitting ? 'Booking...' : 'Book Consultation'}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl mb-4">⚖️</div>
            <h3 className="font-semibold text-gray-900 mb-2">Expert Lawyers</h3>
            <p className="text-gray-600 text-sm">Certified property lawyers with 10+ years experience</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl mb-4">🔒</div>
            <h3 className="font-semibold text-gray-900 mb-2">Confidential</h3>
            <p className="text-gray-600 text-sm">100% confidential consultations with privacy protection</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
            <p className="text-gray-600 text-sm">No hidden fees, pay only for consultation time</p>
          </div>
        </div>
      </div>
    </div>
  );
}