// src/app/api/owner-services/[id]/route.js
import { NextResponse } from 'next/server';

// Same mock data as main API (in real app, this would be your database)
const mockServices = [
  {
    id: 'prop-001',
    title: 'Luxury 3BHK Apartment for Sale',
    type: 'sell-rent',
    location: 'delhi',
    price: '₹1.2 Cr',
    description: 'Beautiful 3BHK apartment in prime location with modern amenities, parking, and great connectivity to metro stations. This property features spacious rooms, modular kitchen, and premium fixtures throughout.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500',
    additionalImages: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300',
      'https://images.unsplash.com/photo-1560448075-bb485b067938?w=300',
      'https://images.unsplash.com/photo-1560448204-444f45d8d6b5?w=300'
    ],
    featured: true,
    area: 1200,
    serviceType: 'sell',
    contact: '+91-9876543210',
    provider: {
      name: 'Rajesh Kumar',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40',
      experience: '8+ years',
      rating: 4.5,
      reviews: 127
    }
  },
  {
    id: 'prop-002',
    title: 'Modern 2BHK Flat for Rent',
    type: 'sell-rent',
    location: 'mumbai',
    price: '₹35,000/month',
    description: 'Fully furnished 2BHK apartment with all modern amenities. Perfect for working professionals with high-speed internet, gym, and 24/7 security.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500',
    additionalImages: [
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=300',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=300'
    ],
    featured: false,
    area: 900,
    serviceType: 'rent',
    contact: '+91-9876543211',
    provider: {
      name: 'Priya Sharma',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40',
      experience: '5+ years',
      rating: 4.2,
      reviews: 89
    }
  },
  {
    id: 'val-001',
    title: 'Professional Property Valuation',
    type: 'valuation',
    location: 'bangalore',
    price: '₹5,000',
    description: 'Expert property valuation service with certified valuers. Get accurate market value for your property with detailed report including market analysis and comparable sales data.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500',
    additionalImages: [
      'https://images.unsplash.com/photo-1554224154-26032fced8bd?w=300',
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=300'
    ],
    featured: false,
    duration: '2-3 days',
    accuracy: '95%+',
    estimatedValue: '₹85L - ₹95L',
    serviceType: 'residential-valuation',
    contact: '+91-9876543212',
    provider: {
      name: 'CA Suresh Reddy',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40',
      experience: '12+ years',
      rating: 4.8,
      reviews: 156
    }
  },
  {
    id: 'legal-001',
    title: 'Property Registration Service',
    type: 'legal',
    location: 'pune',
    price: '₹15,000',
    description: 'Complete legal assistance for property registration, documentation, and title verification with experienced legal experts. We handle all paperwork and government procedures.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500',
    additionalImages: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300'
    ],
    featured: true,
    duration: '7-10 days',
    serviceType: 'registration',
    contact: '+91-9876543213',
    provider: {
      name: 'Advocate Sunita Mehta',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40',
      experience: '15+ years',
      rating: 4.9,
      reviews: 203
    }
  }
];

export async function GET(request, { params }) {
  try {
    const { id } = params;
    
    // Find the service by ID
    const service = mockServices.find(s => s.id === id);
    
    if (!service) {
      return NextResponse.json(
        { success: false, message: 'Service not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      service: service
    });
    
  } catch (error) {
    console.error('Error fetching service details:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}