// src/app/api/legal/route.js
import { NextResponse } from 'next/server';

// Mock data for legal services
const legalServices = [
  {
    id: 'registration',
    title: 'Property Registration',
    icon: '📋',
    price: 15000,
    formattedPrice: '₹15,000',
    duration: '7-10 days',
    description: 'Complete property registration assistance with all legal formalities',
    features: [
      'Document preparation and verification',
      'Registration office assistance',
      'Stamp duty calculation',
      'Legal compliance check',
      'Post-registration support'
    ],
    category: 'registration',
    popular: true
  },
  {
    id: 'title-verification',
    title: 'Title Verification',
    icon: '🔍',
    price: 8000,
    formattedPrice: '₹8,000',
    duration: '3-5 days',
    description: 'Comprehensive title clearance and verification service',
    features: [
      'Chain of title verification',
      'Encumbrance certificate check',
      'Legal opinion report',
      'Risk assessment',
      'Clear title certificate'
    ],
    category: 'verification',
    popular: true
  },
  {
    id: 'documentation',
    title: 'Legal Documentation',
    icon: '📄',
    price: 12000,
    formattedPrice: '₹12,000',
    duration: '5-7 days',
    description: 'Preparation and review of all property-related legal documents',
    features: [
      'Sale/Purchase agreement drafting',
      'Lease deed preparation',
      'Power of attorney',
      'NOC applications',
      'Legal notice drafting'
    ],
    category: 'documentation',
    popular: false
  },
  {
    id: 'consultation',
    title: 'Legal Consultation',
    icon: '⚖️',
    price: 2500,
    formattedPrice: '₹2,500',
    duration: '1-2 hours',
    description: 'Expert legal advice for property matters',
    features: [
      'Property law consultation',
      'Investment advice',
      'Risk assessment',
      'Dispute resolution guidance',
      'Legal strategy planning'
    ],
    category: 'consultation',
    popular: true
  }
];

const mockLegalRequests = [
  {
    id: 1,
    name: 'Amit Kumar',
    contact: '+91-9876543210',
    email: 'amit@example.com',
    location: 'delhi',
    service: 'registration',
    propertyType: 'residential',
    message: 'Need help with property registration for my new apartment',
    status: 'pending',
    priority: 'medium',
    assignedLawyer: 'Adv. Rajesh Sharma',
    createdAt: '2024-01-15T10:30:00Z',
    estimatedCompletion: '2024-01-25T10:30:00Z'
  },
  {
    id: 2,
    name: 'Priya Singh',
    contact: '+91-9876543211',
    email: 'priya@example.com',
    location: 'mumbai',
    service: 'title-verification',
    propertyType: 'commercial',
    message: 'Title verification required for commercial property purchase',
    status: 'in-progress',
    priority: 'high',
    assignedLawyer: 'Adv. Meera Patel',
    createdAt: '2024-01-14T15:45:00Z',
    estimatedCompletion: '2024-01-19T15:45:00Z'
  },
  {
    id: 3,
    name: 'Vikram Reddy',
    contact: '+91-9876543212',
    email: 'vikram@example.com',
    location: 'bangalore',
    service: 'documentation',
    propertyType: 'plot',
    message: 'Need legal documentation for land purchase',
    status: 'completed',
    priority: 'medium',
    assignedLawyer: 'Adv. Suresh Kumar',
    createdAt: '2024-01-10T12:00:00Z',
    completedAt: '2024-01-17T16:30:00Z'
  }
];

const legalTeam = [
  {
    id: 1,
    name: 'Adv. Rajesh Sharma',
    specialization: 'Property Registration & Documentation',
    experience: '12 years',
    location: 'Delhi',
    cases: 450,
    rating: 4.8
  },
  {
    id: 2,
    name: 'Adv. Meera Patel',
    specialization: 'Title Verification & Due Diligence',
    experience: '8 years',
    location: 'Mumbai',
    cases: 320,
    rating: 4.9
  },
  {
    id: 3,
    name: 'Adv. Suresh Kumar',
    specialization: 'Commercial Property Law',
    experience: '15 years',
    location: 'Bangalore',
    cases: 600,
    rating: 4.7
  }
];

// GET /api/legal - Get services, requests, or team info
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type'); // 'services', 'requests', 'team'
    const category = searchParams.get('category'); // 'registration', 'verification', etc.
    const location = searchParams.get('location');
    const status = searchParams.get('status');
    const popular = searchParams.get('popular');
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;

    let data = [];

    switch (type) {
      case 'services':
        data = legalServices;
        
        // Filter by category
        if (category) {
          data = data.filter(service => service.category === category);
        }
        
        // Filter by popular
        if (popular === 'true') {
          data = data.filter(service => service.popular === true);
        }
        break;

      case 'requests':
        data = mockLegalRequests;
        
        // Filter by status
        if (status) {
          data = data.filter(request => request.status === status);
        }
        
        // Filter by location
        if (location) {
          data = data.filter(request => request.location === location);
        }
        
        // Filter by service
        const service = searchParams.get('service');
        if (service) {
          data = data.filter(request => request.service === service);
        }
        break;

      case 'team':
        data = legalTeam;
        
        // Filter by location
        if (location) {
          data = data.filter(lawyer => lawyer.location.toLowerCase() === location.toLowerCase());
        }
        break;

      case 'pricing':
        // Get pricing information for a specific service
        const serviceId = searchParams.get('service');
        const propertyValue = parseFloat(searchParams.get('propertyValue')) || 0;
        
        if (!serviceId) {
          return NextResponse.json(
            { success: false, message: 'Service ID is required for pricing' },
            { status: 400 }
          );
        }

        const selectedService = legalServices.find(s => s.id === serviceId);
        if (!selectedService) {
          return NextResponse.json(
            { success: false, message: 'Invalid service ID' },
            { status: 400 }
          );
        }

        // Calculate additional costs based on property value for certain services
        let additionalCosts = 0;
        let stampDuty = 0;
        let registrationFee = 0;

        if (serviceId === 'registration' && propertyValue > 0) {
          // Stamp duty typically 5-10% of property value (varies by state)
          stampDuty = propertyValue * 0.05;
          registrationFee = propertyValue * 0.01;
          additionalCosts = stampDuty + registrationFee;
        }

        return NextResponse.json({
          success: true,
          pricing: {
            service: selectedService,
            baseCost: selectedService.price,
            stampDuty,
            registrationFee,
            additionalCosts,
            totalEstimate: selectedService.price + additionalCosts,
            breakdown: {
              serviceFee: selectedService.price,
              stampDuty: stampDuty,
              registrationFee: registrationFee,
              total: selectedService.price + additionalCosts
            }
          }
        });

      default:
        // Return overview data
        return NextResponse.json({
          success: true,
          overview: {
            totalServices: legalServices.length,
            totalRequests: mockLegalRequests.length,
            teamSize: legalTeam.length,
            popularServices: legalServices.filter(s => s.popular).length,
            requestsByStatus: {
              pending: mockLegalRequests.filter(r => r.status === 'pending').length,
              inProgress: mockLegalRequests.filter(r => r.status === 'in-progress').length,
              completed: mockLegalRequests.filter(r => r.status === 'completed').length
            },
            priceRange: {
              min: Math.min(...legalServices.map(s => s.price)),
              max: Math.max(...legalServices.map(s => s.price))
            }
          },
          services: legalServices,
          team: legalTeam
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
        location,
        status,
        popular: popular === 'true'
      }
    });

  } catch (error) {
    console.error('Legal API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}

// POST /api/legal - Submit legal service request
export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'contact', 'location', 'service'];
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

    // Validate service exists
    const selectedService = legalServices.find(s => s.id === body.service);
    if (!selectedService) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid service selected'
        },
        { status: 400 }
      );
    }

    // Validate contact number format (basic validation)
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

    // Assign lawyer based on location and service type
    const availableLawyers = legalTeam.filter(lawyer => 
      lawyer.location.toLowerCase() === body.location.toLowerCase() ||
      lawyer.specialization.toLowerCase().includes(selectedService.category)
    );
    const assignedLawyer = availableLawyers.length > 0 ? 
      availableLawyers[0].name : 'Will be assigned soon';

    // Calculate estimated completion date
    const durationDays = selectedService.duration.includes('hours') ? 1 : 
      parseInt(selectedService.duration.split('-')[1]) || 7;
    const estimatedCompletion = new Date();
    estimatedCompletion.setDate(estimatedCompletion.getDate() + durationDays);

    // Create legal request object
    const legalRequest = {
      id: Math.max(...mockLegalRequests.map(r => r.id)) + 1,
      name: body.name,
      contact: body.contact,
      email: body.email || '',
      location: body.location,
      service: body.service,
      propertyType: body.propertyType || 'residential',
      message: body.message || '',
      status: 'pending',
      priority: selectedService.id === 'consultation' ? 'low' : 'medium',
      assignedLawyer,
      createdAt: new Date().toISOString(),
      estimatedCompletion: estimatedCompletion.toISOString()
    };

    // In a real app, you would save this to a database
    mockLegalRequests.push(legalRequest);

    // Send confirmation response
    return NextResponse.json({
      success: true,
      message: 'Legal service request submitted successfully',
      request: {
        id: legalRequest.id,
        service: selectedService,
        estimatedCost: selectedService.price,
        formattedCost: selectedService.formattedPrice,
        duration: selectedService.duration,
        assignedLawyer: legalRequest.assignedLawyer,
        status: legalRequest.status,
        estimatedCompletion: legalRequest.estimatedCompletion
      }
    }, { status: 201 });

  } catch (error) {
    console.error('Legal POST API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit legal service request' 
      },
      { status: 500 }
    );
  }
}

// PUT /api/legal - Update legal request status (for admin/lawyer)
export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, status, assignedLawyer, priority, notes } = body;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: 'Request ID is required'
        },
        { status: 400 }
      );
    }

    // Find legal request
    const requestIndex = mockLegalRequests.findIndex(r => r.id === parseInt(id));
    if (requestIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          message: 'Legal request not found'
        },
        { status: 404 }
      );
    }

    // Validate status if provided
    if (status) {
      const validStatuses = ['pending', 'in-progress', 'completed', 'cancelled', 'on-hold'];
      if (!validStatuses.includes(status)) {
        return NextResponse.json(
          {
            success: false,
            message: `Invalid status. Valid statuses: ${validStatuses.join(', ')}`
          },
          { status: 400 }
        );
      }
      mockLegalRequests[requestIndex].status = status;
      
      // Set completion date if status is completed
      if (status === 'completed') {
        mockLegalRequests[requestIndex].completedAt = new Date().toISOString();
      }
    }

    // Update other fields if provided
    if (assignedLawyer) {
      mockLegalRequests[requestIndex].assignedLawyer = assignedLawyer;
    }
    
    if (priority) {
      const validPriorities = ['low', 'medium', 'high', 'urgent'];
      if (validPriorities.includes(priority)) {
        mockLegalRequests[requestIndex].priority = priority;
      }
    }

    if (notes) {
      mockLegalRequests[requestIndex].notes = notes;
    }

    mockLegalRequests[requestIndex].updatedAt = new Date().toISOString();

    return NextResponse.json({
      success: true,
      message: 'Legal request updated successfully',
      request: mockLegalRequests[requestIndex]
    });

  } catch (error) {
    console.error('Legal PUT API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to update legal request' 
      },
      { status: 500 }
    );
  }
}

// DELETE /api/legal - Cancel legal request
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: 'Request ID is required'
        },
        { status: 400 }
      );
    }

    const requestIndex = mockLegalRequests.findIndex(r => r.id === parseInt(id));
    if (requestIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          message: 'Legal request not found'
        },
        { status: 404 }
      );
    }

    // Instead of deleting, mark as cancelled
    mockLegalRequests[requestIndex].status = 'cancelled';
    mockLegalRequests[requestIndex].cancelledAt = new Date().toISOString();

    return NextResponse.json({
      success: true,
      message: 'Legal request cancelled successfully'
    });

  } catch (error) {
    console.error('Legal DELETE API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to cancel legal request' 
      },
      { status: 500 }
    );
  }
}