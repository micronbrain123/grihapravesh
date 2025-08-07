// src/app/api/properties/route.js
import { NextResponse } from 'next/server';

// Mock data - replace with your actual database queries
const mockProperties = [
  {
    id: 1,
    title: "Modern 3BHK Apartment",
    location: "mumbai",
    type: "apartment",
    price: "₹1.2 Cr",
    area: "1200",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400",
    featured: true,
    description: "Spacious 3BHK apartment in prime location"
  },
  {
    id: 2,
    title: "Luxury Villa Plot",
    location: "delhi",
    type: "plot",
    price: "₹80 Lac",
    area: "2000",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400",
    featured: false,
    description: "Prime residential plot in developed area"
  },
  {
    id: 3,
    title: "Commercial Office Space",
    location: "bangalore",
    type: "commercial",
    price: "₹2.5 Cr",
    area: "1800",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400",
    featured: true,
    description: "Premium office space in tech park"
  },
  {
    id: 4,
    title: "2BHK for Rent",
    location: "pune",
    type: "rental",
    price: "₹25,000/month",
    area: "900",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400",
    featured: false,
    description: "Well-furnished 2BHK apartment for rent"
  },
  {
    id: 5,
    title: "PG Accommodation",
    location: "hyderabad",
    type: "pg",
    price: "₹12,000/month",
    area: "200",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400",
    featured: false,
    description: "Comfortable PG with all amenities"
  },
  {
    id: 6,
    title: "Penthouse Apartment",
    location: "mumbai",
    type: "apartment",
    price: "₹3.8 Cr",
    area: "2200",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400",
    featured: true,
    description: "Luxury penthouse with city views"
  },
  {
    id: 7,
    title: "Gurgaon Commercial Plot",
    location: "gurgaon",
    type: "plot",
    price: "₹1.5 Cr",
    area: "5000",
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=400",
    featured: false,
    description: "Large commercial plot in prime area"
  },
  {
    id: 8,
    title: "Noida Retail Shop",
    location: "noida",
    type: "commercial",
    price: "₹75 Lac",
    area: "800",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400",
    featured: false,
    description: "Prime retail space in shopping complex"
  }
];

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const location = searchParams.get('location');
    const type = searchParams.get('type');
    const featured = searchParams.get('featured');
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 12;

    // Filter properties based on query parameters
    let filteredProperties = mockProperties;

    if (location) {
      filteredProperties = filteredProperties.filter(property => 
        property.location.toLowerCase() === location.toLowerCase()
      );
    }

    if (type) {
      filteredProperties = filteredProperties.filter(property => 
        property.type === type
      );
    }

    if (featured === 'true') {
      filteredProperties = filteredProperties.filter(property => 
        property.featured === true
      );
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProperties = filteredProperties.slice(startIndex, endIndex);

    // Response
    return NextResponse.json({
      success: true,
      properties: paginatedProperties,
      total: filteredProperties.length,
      page: page,
      totalPages: Math.ceil(filteredProperties.length / limit),
      filters: {
        location,
        type,
        featured: featured === 'true'
      }
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}