// src/app/api/owner-services/route.js
import { NextResponse } from 'next/server';

// Mock data for owner services
const mockServices = [
  // Sell/Rent Properties
  {
    id: 1,
    title: "3BHK Apartment for Sale",
    location: "mumbai",
    type: "sell-rent",
    service: "sell",
    price: "₹1.2 Cr",
    area: "1200",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400",
    featured: true,
    description: "Prime location apartment ready for sale",
    contact: "9876543210",
    owner: "Rajesh Kumar"
  },
  {
    id: 2,
    title: "2BHK Flat for Rent",
    location: "delhi",
    type: "sell-rent",
    service: "rent",
    price: "₹35,000/month",
    area: "900",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400",
    featured: false,
    description: "Well-furnished apartment for rent",
    contact: "9876543211",
    owner: "Priya Sharma"
  },
  
  // Valuation Services
  {
    id: 3,
    title: "Property Valuation - Residential",
    location: "bangalore",
    type: "valuation",
    service: "residential-valuation",
    price: "₹5,000",
    area: "1500",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400",
    featured: true,
    description: "Professional property valuation service",
    estimatedValue: "₹85 Lac",
    accuracy: "95%"
  },
  {
    id: 4,
    title: "Commercial Property Valuation",
    location: "hyderabad",
    type: "valuation",
    service: "commercial-valuation",
    price: "₹10,000",
    area: "2500",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400",
    featured: false,
    description: "Expert commercial property assessment",
    estimatedValue: "₹2.5 Cr",
    accuracy: "92%"
  },

  // Legal Services
  {
    id: 5,
    title: "Property Registration",
    location: "pune",
    type: "legal",
    service: "registration",
    price: "₹15,000",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400",
    featured: true,
    description: "Complete property registration assistance",
    duration: "7-10 days",
    documents: "All legal documents included"
  },
  {
    id: 6,
    title: "Title Verification",
    location: "chennai",
    type: "legal",
    service: "title-verification",
    price: "₹8,000",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400",
    featured: false,
    description: "Comprehensive title clearance service",
    duration: "3-5 days",
    documents: "Detailed verification report"
  },

  // Interior Design Services
  {
    id: 7,
    title: "2BHK Interior Design",
    location: "mumbai",
    type: "interior",
    service: "residential-design",
    price: "₹2.5 Lac",
    area: "900",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
    featured: true,
    description: "Complete interior design solution",
    duration: "45 days",
    style: "Modern Contemporary"
  },
  {
    id: 8,
    title: "Office Space Design",
    location: "delhi",
    type: "interior",
    service: "commercial-design",
    price: "₹5 Lac",
    area: "1800",
    image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=400",
    featured: false,
    description: "Professional office interior design",
    duration: "60 days",
    style: "Corporate Modern"
  }
];

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const location = searchParams.get('location');
    const type = searchParams.get('type');
    const service = searchParams.get('service');
    const featured = searchParams.get('featured');
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 12;

    // Filter services based on query parameters
    let filteredServices = mockServices;

    if (location) {
      filteredServices = filteredServices.filter(item => 
        item.location.toLowerCase() === location.toLowerCase()
      );
    }

    if (type) {
      filteredServices = filteredServices.filter(item => 
        item.type === type
      );
    }

    if (service) {
      filteredServices = filteredServices.filter(item => 
        item.service === service
      );
    }

    if (featured === 'true') {
      filteredServices = filteredServices.filter(item => 
        item.featured === true
      );
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedServices = filteredServices.slice(startIndex, endIndex);

    // Response
    return NextResponse.json({
      success: true,
      services: paginatedServices,
      total: filteredServices.length,
      page: page,
      totalPages: Math.ceil(filteredServices.length / limit),
      filters: {
        location,
        type,
        service,
        featured: featured === 'true'
      }
    });

  } catch (error) {
    console.error('Owner Services API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}

// POST route for submitting new property listings
export async function POST(request) {
  try {
    const body = await request.json();
    
    // Here you would typically save to database
    // For now, we'll just return success
    console.log('New property listing:', body);
    
    return NextResponse.json({
      success: true,
      message: 'Property listed successfully',
      id: Date.now() // Mock ID
    });

  } catch (error) {
    console.error('POST Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit property' 
      },
      { status: 500 }
    );
  }
}