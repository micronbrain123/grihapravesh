// src/app/api/valuation/route.js
import { NextResponse } from 'next/server';

// Mock market data for different locations and property types
const marketData = {
  mumbai: {
    apartment: { basePrice: 15000, growth: 8.5, demand: 'high' },
    villa: { basePrice: 12000, growth: 7.2, demand: 'medium' },
    plot: { basePrice: 8000, growth: 6.8, demand: 'high' },
    commercial: { basePrice: 25000, growth: 9.1, demand: 'high' }
  },
  delhi: {
    apartment: { basePrice: 12000, growth: 7.8, demand: 'high' },
    villa: { basePrice: 10000, growth: 6.9, demand: 'medium' },
    plot: { basePrice: 7000, growth: 6.2, demand: 'medium' },
    commercial: { basePrice: 20000, growth: 8.5, demand: 'high' }
  },
  bangalore: {
    apartment: { basePrice: 8000, growth: 9.2, demand: 'high' },
    villa: { basePrice: 6500, growth: 8.1, demand: 'high' },
    plot: { basePrice: 4500, growth: 7.5, demand: 'high' },
    commercial: { basePrice: 15000, growth: 10.3, demand: 'high' }
  },
  pune: {
    apartment: { basePrice: 6500, growth: 8.8, demand: 'high' },
    villa: { basePrice: 5500, growth: 7.6, demand: 'medium' },
    plot: { basePrice: 3500, growth: 6.9, demand: 'medium' },
    commercial: { basePrice: 12000, growth: 9.4, demand: 'high' }
  },
  hyderabad: {
    apartment: { basePrice: 5500, growth: 9.5, demand: 'high' },
    villa: { basePrice: 4800, growth: 8.2, demand: 'high' },
    plot: { basePrice: 3200, growth: 7.8, demand: 'high' },
    commercial: { basePrice: 10000, growth: 11.2, demand: 'high' }
  },
  chennai: {
    apartment: { basePrice: 5000, growth: 6.8, demand: 'medium' },
    villa: { basePrice: 4200, growth: 6.1, demand: 'medium' },
    plot: { basePrice: 2800, growth: 5.9, demand: 'medium' },
    commercial: { basePrice: 9000, growth: 7.8, demand: 'medium' }
  },
  kolkata: {
    apartment: { basePrice: 4200, growth: 5.9, demand: 'medium' },
    villa: { basePrice: 3500, growth: 5.2, demand: 'low' },
    plot: { basePrice: 2200, growth: 4.8, demand: 'medium' },
    commercial: { basePrice: 7500, growth: 6.5, demand: 'medium' }
  },
  ahmedabad: {
    apartment: { basePrice: 3800, growth: 6.2, demand: 'medium' },
    villa: { basePrice: 3200, growth: 5.8, demand: 'medium' },
    plot: { basePrice: 2000, growth: 5.1, demand: 'medium' },
    commercial: { basePrice: 7000, growth: 7.2, demand: 'medium' }
  }
};

const valuationServices = [
  {
    id: 'basic',
    title: 'Basic Valuation',
    price: 0,
    formattedPrice: 'FREE',
    duration: 'Instant',
    description: 'AI-powered property valuation with market comparison',
    features: [
      'Instant AI-powered estimate',
      'Market comparison',
      'Basic property insights',
      'Price per sq ft analysis',
      'Market trend indicator'
    ],
    popular: true
  },
  {
    id: 'detailed',
    title: 'Detailed Report',
    price: 2999,
    formattedPrice: '₹2,999',
    duration: '2-3 days',
    description: 'Comprehensive property analysis with professional inspection',
    features: [
      'Professional property inspection',
      'Comprehensive market analysis',
      'Legal document verification',
      'Investment recommendations',
      'Detailed property report',
      'Comparable sales analysis'
    ],
    popular: false
  },
  {
    id: 'premium',
    title: 'Premium Consultation',
    price: 4999,
    formattedPrice: '₹4,999',
    duration: '3-5 days',
    description: 'Complete valuation with expert consultation and future predictions',
    features: [
      'Everything in Detailed Report',
      'One-on-one expert consultation',
      'Future price predictions',
      'Investment strategy planning',
      'ROI analysis',
      'Market timing advice',
      'Lifetime support'
    ],
    popular: false
  }
];

const mockValuationRequests = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    contact: '+91-9876543210',
    location: 'mumbai',
    propertyType: 'apartment',
    area: '1200',
    bedrooms: '3',
    bathrooms: '2',
    age: '5',
    address: 'Andheri West, Mumbai',
    service: 'basic',
    status: 'completed',
    estimatedValue: 18000000,
    pricePerSqFt: 15000,
    confidence: 92,
    marketTrend: 'increasing',
    createdAt: '2024-01-15T10:30:00Z',
    completedAt: '2024-01-15T10:32:00Z'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    contact: '+91-9876543211',
    location: 'bangalore',
    propertyType: 'villa',
    area: '2500',
    bedrooms: '4',
    bathrooms: '3',
    age: '2',
    address: 'Whitefield, Bangalore',
    service: 'detailed',
    status: 'in-progress',
    estimatedValue: 17500000,
    pricePerSqFt: 7000,
    confidence: 88,
    marketTrend: 'increasing',
    createdAt: '2024-01-14T15:45:00Z'
  }
];

// Valuation calculation function
function calculateValuation(propertyData) {
  const { location, propertyType, area, age, bedrooms, bathrooms } = propertyData;
  
  // Get base market data
  const locationData = marketData[location];
  if (!locationData) {
    throw new Error('Location not supported');
  }
  
  const typeData = locationData[propertyType];
  if (!typeData) {
    throw new Error('Property type not supported');
  }
  
  let basePrice = typeData.basePrice;
  
  // Age depreciation (2% per year, max 30%)
  const ageDepreciation = Math.min(0.3, (parseInt(age) || 0) * 0.02);
  const ageMultiplier = 1 - ageDepreciation;
  
  // Bedroom/bathroom premium for apartments and villas
  let configurationMultiplier = 1;
  if (propertyType === 'apartment' || propertyType === 'villa') {
    const bedroomCount = parseInt(bedrooms) || 2;
    const bathroomCount = parseInt(bathrooms) || 1;
    
    // Premium for more bedrooms/bathrooms
    if (bedroomCount >= 3) configurationMultiplier += 0.1;
    if (bedroomCount >= 4) configurationMultiplier += 0.1;
    if (bathroomCount >= 3) configurationMultiplier += 0.05;
  }
  
  // Random market variation (±5%)
  const marketVariation = 0.95 + (Math.random() * 0.1);
  
  // Calculate final price per sq ft
  const finalPricePerSqFt = Math.round(
    basePrice * ageMultiplier * configurationMultiplier * marketVariation
  );
  
  // Calculate total value
  const totalValue = finalPricePerSqFt * parseInt(area);
  
  // Determine confidence level
  let confidence = 85;
  if (age && bedrooms && bathrooms) confidence += 5;
  if (propertyData.address && propertyData.address.length > 10) confidence += 3;
  confidence += Math.floor(Math.random() * 7); // Random factor
  
  // Determine trend
  const trends = ['increasing', 'stable', 'decreasing'];
  const trendWeights = typeData.growth > 7 ? [0.7, 0.25, 0.05] : [0.4, 0.5, 0.1];
  const randomValue = Math.random();
  let trend = 'stable';
  if (randomValue < trendWeights[0]) trend = 'increasing';
  else if (randomValue < trendWeights[0] + trendWeights[1]) trend = 'stable';
  else trend = 'decreasing';
  
  return {
    estimatedValue: totalValue,
    formattedValue: `₹${(totalValue / 100000).toFixed(1)} Lac`,
    pricePerSqFt: finalPricePerSqFt,
    formattedPricePerSqFt: `₹${finalPricePerSqFt.toLocaleString()}`,
    confidence: `${confidence}%`,
    marketTrend: trend,
    growth: typeData.growth,
    demand: typeData.demand,
    marketInsights: {
      locationGrowth: `${typeData.growth}% annually`,
      demandLevel: typeData.demand,
      priceRange: {
        min: Math.round(finalPricePerSqFt * 0.85),
        max: Math.round(finalPricePerSqFt * 1.15)
      }
    }
  };
}

// GET /api/valuation - Get services, requests, or market data
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type'); // 'services', 'requests', 'market', 'calculate'
    const location = searchParams.get('location');
    const propertyType = searchParams.get('propertyType');
    const status = searchParams.get('status');
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;

    switch (type) {
      case 'services':
        return NextResponse.json({
          success: true,
          services: valuationServices
        });

      case 'requests':
        let data = mockValuationRequests;
        
        // Filter by status
        if (status) {
          data = data.filter(request => request.status === status);
        }
        
        // Filter by location
        if (location) {
          data = data.filter(request => request.location === location);
        }
        
        // Pagination
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedData = data.slice(startIndex, endIndex);

        return NextResponse.json({
          success: true,
          data: paginatedData,
          total: data.length,
          page: page,
          totalPages: Math.ceil(data.length / limit)
        });

      case 'market':
        // Get market data for specific location and property type
        if (!location) {
          return NextResponse.json({
            success: true,
            marketData: marketData
          });
        }
        
        const locationMarketData = marketData[location];
        if (!locationMarketData) {
          return NextResponse.json(
            { success: false, message: 'Location not found' },
            { status: 404 }
          );
        }

        if (propertyType && locationMarketData[propertyType]) {
          return NextResponse.json({
            success: true,
            location,
            propertyType,
            marketData: locationMarketData[propertyType]
          });
        }

        return NextResponse.json({
          success: true,
          location,
          marketData: locationMarketData
        });

      case 'calculate':
        // Quick calculation without storing
        const area = searchParams.get('area');
        const age = searchParams.get('age');
        const bedrooms = searchParams.get('bedrooms');
        const bathrooms = searchParams.get('bathrooms');

        if (!location || !propertyType || !area) {
          return NextResponse.json(
            { success: false, message: 'Location, property type, and area are required' },
            { status: 400 }
          );
        }

        try {
          const valuation = calculateValuation({
            location,
            propertyType,
            area,
            age,
            bedrooms,
            bathrooms
          });

          return NextResponse.json({
            success: true,
            valuation
          });
        } catch (error) {
          return NextResponse.json(
            { success: false, message: error.message },
            { status: 400 }
          );
        }

      default:
        // Return overview
        return NextResponse.json({
          success: true,
          overview: {
            totalServices: valuationServices.length,
            totalRequests: mockValuationRequests.length,
            completedValuations: mockValuationRequests.filter(r => r.status === 'completed').length,
            averageConfidence: '90%',
            supportedLocations: Object.keys(marketData).length,
            supportedPropertyTypes: 4
          },
          services: valuationServices,
          locations: Object.keys(marketData),
          propertyTypes: ['apartment', 'villa', 'plot', 'commercial']
        });
    }

  } catch (error) {
    console.error('Valuation API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}

// POST /api/valuation - Submit valuation request
export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'contact', 'location', 'propertyType', 'area'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: `Missing required fields: ${missingFields.join(', ')}`
        },
        { status: 400 }
      );
    }

    // Validate area is a number
    if (isNaN(parseInt(body.area)) || parseInt(body.area) <= 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Area must be a valid positive number'
        },
        { status: 400 }
      );
    }

    // Validate contact number
    const contactRegex = /^[+]?[0-9]{10,15}$/;
    if (!contactRegex.test(body.contact.replace(/[-\s]/g, ''))) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid contact number format'
        },
        { status: 400 }
      );
    }

    // Get service type (default to basic)
    const service = body.service || 'basic';
    const selectedService = valuationServices.find(s => s.id === service);
    if (!selectedService) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid service type'
        },
        { status: 400 }
      );
    }

    try {
      // Calculate valuation
      const valuation = calculateValuation({
        location: body.location,
        propertyType: body.propertyType,
        area: body.area,
        age: body.age || '0',
        bedrooms: body.bedrooms || '2',
        bathrooms: body.bathrooms || '1',
        address: body.address || ''
      });

      // Create valuation request
      const valuationRequest = {
        id: Math.max(...mockValuationRequests.map(r => r.id)) + 1,
        name: body.name,
        contact: body.contact,
        location: body.location,
        propertyType: body.propertyType,
        area: body.area,
        bedrooms: body.bedrooms || '',
        bathrooms: body.bathrooms || '',
        age: body.age || '',
        address: body.address || '',
        service: service,
        status: service === 'basic' ? 'completed' : 'pending',
        estimatedValue: valuation.estimatedValue,
        pricePerSqFt: valuation.pricePerSqFt,
        confidence: parseInt(valuation.confidence),
        marketTrend: valuation.marketTrend,
        createdAt: new Date().toISOString(),
        ...(service === 'basic' && { completedAt: new Date().toISOString() })
      };

      // Save to mock database
      mockValuationRequests.push(valuationRequest);

      // Return response
      return NextResponse.json({
        success: true,
        message: 'Valuation request submitted successfully',
        request: {
          id: valuationRequest.id,
          service: selectedService,
          status: valuationRequest.status
        },
        valuation: service === 'basic' ? {
          estimatedValue: valuation.formattedValue,
          pricePerSqFt: valuation.formattedPricePerSqFt,
          confidence: valuation.confidence,
          marketTrend: valuation.marketTrend,
          marketInsights: valuation.marketInsights
        } : null
      }, { status: 201 });

    } catch (calculationError) {
      return NextResponse.json(
        {
          success: false,
          message: calculationError.message
        },
        { status: 400 }
      );
    }

  } catch (error) {
    console.error('Valuation POST API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit valuation request' 
      },
      { status: 500 }
    );
  }
}

// PUT /api/valuation - Update valuation request status
export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, status, notes } = body;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: 'Request ID is required'
        },
        { status: 400 }
      );
    }

    // Find valuation request
    const requestIndex = mockValuationRequests.findIndex(r => r.id === parseInt(id));
    if (requestIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          message: 'Valuation request not found'
        },
        { status: 404 }
      );
    }

    // Update status if provided
    if (status) {
      const validStatuses = ['pending', 'in-progress', 'completed', 'cancelled'];
      if (!validStatuses.includes(status)) {
        return NextResponse.json(
          {
            success: false,
            message: `Invalid status. Valid statuses: ${validStatuses.join(', ')}`
          },
          { status: 400 }
        );
      }
      
      mockValuationRequests[requestIndex].status = status;
      
      if (status === 'completed') {
        mockValuationRequests[requestIndex].completedAt = new Date().toISOString();
      }
    }

    // Add notes if provided
    if (notes) {
      mockValuationRequests[requestIndex].notes = notes;
    }

    mockValuationRequests[requestIndex].updatedAt = new Date().toISOString();

    return NextResponse.json({
      success: true,
      message: 'Valuation request updated successfully',
      request: mockValuationRequests[requestIndex]
    });

  } catch (error) {
    console.error('Valuation PUT API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to update valuation request' 
      },
      { status: 500 }
    );
  }
}