// src/app/api/owner-services/route.js
// Make sure your API returns services with unique IDs like this:

import { NextResponse } from 'next/server';

const mockServices = [
  {
    id: 'prop-001', // Unique ID for each service/property
    title: 'Luxury 3BHK Apartment for Sale',
    type: 'sell-rent',
    location: 'delhi',
    price: '₹1.2 Cr',
    description: 'Beautiful 3BHK apartment in prime location with modern amenities.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500',
    featured: true,
    area: 1200,
    serviceType: 'sell',
    contact: '+91-9876543210'
  },
  {
    id: 'prop-002', // Different unique ID
    title: 'Modern 2BHK Flat for Rent',
    type: 'sell-rent',
    location: 'mumbai',
    price: '₹35,000/month',
    description: 'Fully furnished 2BHK apartment with all amenities.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500',
    featured: false,
    area: 900,
    serviceType: 'rent',
    contact: '+91-9876543211'
  },
  {
    id: 'val-001', // Valuation service
    title: 'Professional Property Valuation',
    type: 'valuation',
    location: 'bangalore',
    price: '₹5,000',
    description: 'Expert property valuation with detailed report.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500',
    featured: false,
    duration: '2-3 days',
    accuracy: '95%+',
    contact: '+91-9876543212'
  },
  {
    id: 'legal-001', // Legal service
    title: 'Property Registration Service',
    type: 'legal',
    location: 'pune',
    price: '₹15,000',
    description: 'Complete legal assistance for property registration.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500',
    featured: true,
    duration: '7-10 days',
    contact: '+91-9876543213'
  }
];

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const location = searchParams.get('location');
    const type = searchParams.get('type');
    const service = searchParams.get('service');
    const featured = searchParams.get('featured');
    
    let filteredServices = mockServices;
    
    // Apply filters
    if (location) {
      filteredServices = filteredServices.filter(s => 
        s.location.toLowerCase() === location.toLowerCase()
      );
    }
    
    if (type) {
      filteredServices = filteredServices.filter(s => s.type === type);
    }
    
    if (service) {
      filteredServices = filteredServices.filter(s => s.serviceType === service);
    }
    
    if (featured === 'true') {
      filteredServices = filteredServices.filter(s => s.featured);
    }
    
    return NextResponse.json({
      success: true,
      services: filteredServices
    });
    
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}