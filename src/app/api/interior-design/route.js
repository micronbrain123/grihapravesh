// src/app/api/interior/route.js
import { NextResponse } from 'next/server';

// Mock data for interior design services
const designPackages = [
  {
    id: 'essential',
    title: 'Essential Package',
    price: 1999,
    priceUnit: 'per sq ft',
    duration: '30-45 days',
    description: 'Perfect for basic home makeover with essential design elements',
    features: [
      '2D floor plan design',
      'Color scheme consultation',
      'Furniture layout planning',
      'Basic lighting design',
      'Material selection guide',
      'Budget planning assistance'
    ],
    ideal: 'First-time homeowners, Budget-conscious families',
    category: 'basic'
  },
  {
    id: 'premium',
    title: 'Premium Package',
    price: 2999,
    priceUnit: 'per sq ft',
    duration: '45-60 days',
    description: 'Comprehensive interior design with premium finishes and custom elements',
    features: [
      '3D visualization & walkthrough',
      'Custom furniture design',
      'Premium material sourcing',
      'Complete lighting design',
      'Electrical & plumbing layout',
      'Project management',
      'Quality supervision'
    ],
    ideal: 'Growing families, Modern professionals',
    popular: true,
    category: 'premium'
  },
  {
    id: 'luxury',
    title: 'Luxury Package',
    price: 4999,
    priceUnit: 'per sq ft',
    duration: '60-90 days',
    description: 'Ultra-premium luxury interiors with bespoke design and finest materials',
    features: [
      'Bespoke design consultation',
      'High-end material curation',
      'Smart home integration',
      'Custom artwork & decor',
      'Luxury furniture sourcing',
      'White-glove project delivery',
      'Lifetime design support',
      'Celebrity designer consultation'
    ],
    ideal: 'Luxury homeowners, Premium properties',
    category: 'luxury'
  }
];

const designStyles = [
  {
    id: 'modern',
    name: 'Modern Contemporary',
    description: 'Clean lines, minimalist approach with contemporary elements',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
    popular: true
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Less is more philosophy with functional beauty',
    image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400',
    popular: true
  },
  {
    id: 'traditional',
    name: 'Traditional Indian',
    description: 'Rich cultural heritage with traditional Indian elements',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    popular: false
  },
  {
    id: 'scandinavian',
    name: 'Scandinavian',
    description: 'Light, airy spaces with natural materials and cozy textures',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400',
    popular: true
  },
  {
    id: 'industrial',
    name: 'Industrial',
    description: 'Raw materials, exposed elements with urban aesthetics',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    popular: false
  },
  {
    id: 'bohemian',
    name: 'Bohemian',
    description: 'Eclectic mix of colors, patterns and global influences',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    popular: false
  }
];

const mockConsultations = [
  {
    id: 1,
    name: 'Rahul Sharma',
    contact: '+91-9876543210',
    email: 'rahul@example.com',
    location: 'delhi',
    propertyType: 'apartment',
    area: '1200',
    bedrooms: '3',
    budget: '10-20',
    style: 'modern',
    package: 'premium',
    requirements: 'Looking for modern interior design for my new 3BHK apartment',
    status: 'pending',
    createdAt: '2024-01-15T10:30:00Z',
    estimatedCost: 3598800
  },
  {
    id: 2,
    name: 'Priya Patel',
    contact: '+91-9876543211',
    email: 'priya@example.com',
    location: 'mumbai',
    propertyType: 'villa',
    area: '2500',
    bedrooms: '4',
    budget: '50+',
    style: 'luxury',
    package: 'luxury',
    requirements: 'Complete luxury interior design for villa',
    status: 'contacted',
    createdAt: '2024-01-14T15:45:00Z',
    estimatedCost: 12497500
  }
];

// GET /api/interior - Get packages, styles, or consultations
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type'); // 'packages', 'styles', 'consultations'
    const category = searchParams.get('category'); // 'basic', 'premium', 'luxury'
    const popular = searchParams.get('popular'); // 'true'
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;

    let data = [];

    switch (type) {
      case 'packages':
        data = designPackages;
        
        // Filter by category
        if (category) {
          data = data.filter(pkg => pkg.category === category);
        }
        
        // Filter by popular
        if (popular === 'true') {
          data = data.filter(pkg => pkg.popular === true);
        }
        break;

      case 'styles':
        data = designStyles;
        
        // Filter by popular
        if (popular === 'true') {
          data = data.filter(style => style.popular === true);
        }
        break;

      case 'consultations':
        data = mockConsultations;
        
        // Filter by status if provided
        const status = searchParams.get('status');
        if (status) {
          data = data.filter(consultation => consultation.status === status);
        }
        break;

      case 'calculate':
        // Calculate cost based on area and package
        const area = parseInt(searchParams.get('area'));
        const packageId = searchParams.get('package');
        
        if (!area || !packageId) {
          return NextResponse.json(
            { success: false, message: 'Area and package are required for calculation' },
            { status: 400 }
          );
        }

        const selectedPackage = designPackages.find(pkg => pkg.id === packageId);
        if (!selectedPackage) {
          return NextResponse.json(
            { success: false, message: 'Invalid package ID' },
            { status: 400 }
          );
        }

        const estimatedCost = area * selectedPackage.price;
        
        return NextResponse.json({
          success: true,
          calculation: {
            area,
            package: selectedPackage,
            pricePerSqFt: selectedPackage.price,
            estimatedCost,
            formattedCost: `₹${estimatedCost.toLocaleString()}`
          }
        });

      default:
        // Return overview data
        return NextResponse.json({
          success: true,
          overview: {
            totalPackages: designPackages.length,
            totalStyles: designStyles.length,
            popularPackages: designPackages.filter(pkg => pkg.popular).length,
            popularStyles: designStyles.filter(style => style.popular).length,
            priceRange: {
              min: Math.min(...designPackages.map(pkg => pkg.price)),
              max: Math.max(...designPackages.map(pkg => pkg.price))
            }
          },
          packages: designPackages,
          styles: designStyles
        });
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
      totalPages: Math.ceil(data.length / limit),
      filters: {
        type,
        category,
        popular: popular === 'true'
      }
    });

  } catch (error) {
    console.error('Interior API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}

// POST /api/interior - Submit consultation request
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
    if (isNaN(parseInt(body.area))) {
      return NextResponse.json(
        {
          success: false,
          message: 'Area must be a valid number'
        },
        { status: 400 }
      );
    }

    // Validate package exists
    const selectedPackage = designPackages.find(pkg => pkg.id === (body.package || 'essential'));
    if (!selectedPackage) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid package selected'
        },
        { status: 400 }
      );
    }

    // Calculate estimated cost
    const area = parseInt(body.area);
    const estimatedCost = area * selectedPackage.price;

    // Create consultation object
    const consultation = {
      id: Math.max(...mockConsultations.map(c => c.id)) + 1,
      name: body.name,
      contact: body.contact,
      email: body.email || '',
      location: body.location,
      propertyType: body.propertyType,
      area: body.area,
      bedrooms: body.bedrooms || '',
      budget: body.budget || '',
      style: body.style || 'modern',
      package: body.package || 'essential',
      requirements: body.requirements || '',
      status: 'pending',
      createdAt: new Date().toISOString(),
      estimatedCost
    };

    // In a real app, you would save this to a database
    mockConsultations.push(consultation);

    // Send confirmation response
    return NextResponse.json({
      success: true,
      message: 'Consultation request submitted successfully',
      consultation: {
        id: consultation.id,
        estimatedCost: consultation.estimatedCost,
        formattedCost: `₹${consultation.estimatedCost.toLocaleString()}`,
        package: selectedPackage,
        status: consultation.status
      }
    }, { status: 201 });

  } catch (error) {
    console.error('Interior POST API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit consultation request' 
      },
      { status: 500 }
    );
  }
}

// PUT /api/interior - Update consultation status (for admin)
export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        {
          success: false,
          message: 'Consultation ID and status are required'
        },
        { status: 400 }
      );
    }

    const validStatuses = ['pending', 'contacted', 'in-progress', 'completed', 'cancelled'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        {
          success: false,
          message: `Invalid status. Valid statuses: ${validStatuses.join(', ')}`
        },
        { status: 400 }
      );
    }

    // Find and update consultation
    const consultationIndex = mockConsultations.findIndex(c => c.id === parseInt(id));
    if (consultationIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          message: 'Consultation not found'
        },
        { status: 404 }
      );
    }

    mockConsultations[consultationIndex].status = status;
    mockConsultations[consultationIndex].updatedAt = new Date().toISOString();

    return NextResponse.json({
      success: true,
      message: 'Consultation status updated successfully',
      consultation: mockConsultations[consultationIndex]
    });

  } catch (error) {
    console.error('Interior PUT API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to update consultation status' 
      },
      { status: 500 }
    );
  }
}