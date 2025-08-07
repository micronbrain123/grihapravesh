// src/app/api/projects/route.js
import { NextResponse } from 'next/server';

// Mock projects data - replace with your actual database queries
const mockProjects = [
  {
    id: 1,
    name: "DLF Privana",
    slug: "dlf-privana-delhi",
    location: "Gurugram, Delhi NCR",
    developer: "DLF Limited",
    type: "residential",
    status: "ongoing",
    priceRange: "₹2.5 Cr",
    configuration: "3-4 BHK",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600",
    featured: true,
    description: "Premium residential project with world-class amenities",
    locationSlug: "delhi",
    priceMin: 250,
    priceMax: 400
  },
  {
    id: 2,
    name: "Lodha Park",
    slug: "lodha-park-mumbai",
    location: "Lower Parel, Mumbai",
    developer: "Lodha Group",
    type: "residential",
    status: "ready",
    priceRange: "₹3.8 Cr",
    configuration: "2-3 BHK",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600",
    featured: true,
    description: "Luxury apartments in the heart of Mumbai",
    locationSlug: "mumbai",
    priceMin: 380,
    priceMax: 600
  },
  {
    id: 3,
    name: "Brigade Cornerstone Utopia",
    slug: "brigade-cornerstone-bangalore",
    location: "Varthur, Bangalore",
    developer: "Brigade Group",
    type: "residential",
    status: "upcoming",
    priceRange: "₹1.2 Cr",
    configuration: "2-3 BHK",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600",
    featured: false,
    description: "Modern homes with tech-enabled amenities",
    locationSlug: "bangalore",
    priceMin: 120,
    priceMax: 200
  },
  {
    id: 4,
    name: "Prestige City",
    slug: "prestige-city-hyderabad",
    location: "Rajendra Nagar, Hyderabad",
    developer: "Prestige Group",
    type: "mixed",
    status: "ongoing",
    priceRange: "₹80 Lakh",
    configuration: "1-2 BHK",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    featured: false,
    description: "Integrated township with residential and commercial spaces",
    locationSlug: "hyderabad",
    priceMin: 80,
    priceMax: 150
  },
  {
    id: 5,
    name: "Godrej Park World",
    slug: "godrej-park-world-pune",
    location: "Khadki, Pune",
    developer: "Godrej Properties",
    type: "residential",
    status: "ready",
    priceRange: "₹1.5 Cr",
    configuration: "2-3 BHK",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600",
    featured: true,
    description: "Spacious homes with green living concepts",
    locationSlug: "pune",
    priceMin: 150,
    priceMax: 250
  },
  {
    id: 6,
    name: "Phoenix One Bangalore West",
    slug: "phoenix-one-bangalore",
    location: "Rajaji Nagar, Bangalore",
    developer: "Phoenix Mills",
    type: "commercial",
    status: "completed",
    priceRange: "₹5 Cr",
    configuration: "Office Spaces",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600",
    featured: false,
    description: "Premium commercial spaces in prime location",
    locationSlug: "bangalore",
    priceMin: 500,
    priceMax: 1000
  },
  {
    id: 7,
    name: "Mahindra Luminare",
    slug: "mahindra-luminare-chennai",
    location: "Seashore City, Chennai",
    developer: "Mahindra Lifespace",
    type: "residential",
    status: "upcoming",
    priceRange: "₹90 Lakh",
    configuration: "2-3 BHK",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600",
    featured: false,
    description: "Waterfront living with modern amenities",
    locationSlug: "chennai",
    priceMin: 90,
    priceMax: 180
  },
  {
    id: 8,
    name: "Adani Shantigram",
    slug: "adani-shantigram-ahmedabad",
    location: "S.G. Highway, Ahmedabad",
    developer: "Adani Realty",
    type: "plotted",
    status: "ongoing",
    priceRange: "₹45 Lakh",
    configuration: "Plots",
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=600",
    featured: false,
    description: "Premium plotted development with infrastructure",
    locationSlug: "ahmedabad",
    priceMin: 45,
    priceMax: 120
  },
  {
    id: 9,
    name: "Shapoorji Pallonji Joyville",
    slug: "shapoorji-joyville-kolkata",
    location: "Howrah, Kolkata",
    developer: "Shapoorji Pallonji",
    type: "residential",
    status: "ready",
    priceRange: "₹35 Lakh",
    configuration: "1-2 BHK",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600",
    featured: false,
    description: "Affordable homes with quality construction",
    locationSlug: "kolkata",
    priceMin: 35,
    priceMax: 75
  },
  {
    id: 10,
    name: "Tata Housing Primanti",
    slug: "tata-primanti-gurugram",
    location: "Sector 72, Gurugram",
    developer: "Tata Housing",
    type: "residential",
    status: "completed",
    priceRange: "₹1.8 Cr",
    configuration: "1-3 BHK",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600",
    featured: true,
    description: "Contemporary homes with smart features",
    locationSlug: "delhi",
    priceMin: 180,
    priceMax: 350
  }
];

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const location = searchParams.get('location');
    const type = searchParams.get('type');
    const status = searchParams.get('status');
    const priceRange = searchParams.get('priceRange');
    const featured = searchParams.get('featured');
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 12;

    // Filter projects based on query parameters
    let filteredProjects = [...mockProjects];

    if (location) {
      filteredProjects = filteredProjects.filter(project => 
        project.locationSlug.toLowerCase() === location.toLowerCase()
      );
    }

    if (type) {
      filteredProjects = filteredProjects.filter(project => 
        project.type === type
      );
    }

    if (status) {
      filteredProjects = filteredProjects.filter(project => 
        project.status === status
      );
    }

    if (priceRange) {
      const [min, max] = priceRange.split('-').map(p => 
        p === '500+' ? 999 : parseInt(p)
      );
      
      filteredProjects = filteredProjects.filter(project => {
        const projectMinPrice = project.priceMin;
        const projectMaxPrice = project.priceMax;
        
        if (priceRange === '500+') {
          return projectMinPrice >= 500;
        }
        
        return (projectMinPrice >= min && projectMinPrice <= max) ||
               (projectMaxPrice >= min && projectMaxPrice <= max) ||
               (projectMinPrice <= min && projectMaxPrice >= max);
      });
    }

    if (featured === 'true') {
      filteredProjects = filteredProjects.filter(project => 
        project.featured === true
      );
    }

    // Sort by featured first, then by name
    filteredProjects.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return a.name.localeCompare(b.name);
    });

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

    // Response
    return NextResponse.json({
      success: true,
      projects: paginatedProjects,
      total: filteredProjects.length,
      page: page,
      totalPages: Math.ceil(filteredProjects.length / limit),
      filters: {
        location,
        type,
        status,
        priceRange,
        featured: featured === 'true'
      }
    });

  } catch (error) {
    console.error('Projects API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'location', 'developer', 'type', 'status', 'priceRange'];
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

    // In a real app, you would save to database here
    const newProject = {
      id: mockProjects.length + 1,
      ...body,
      slug: body.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
      featured: false,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600"
    };

    // For demo purposes, add to mock array
    mockProjects.push(newProject);

    return NextResponse.json({
      success: true,
      message: 'Project submitted successfully',
      project: newProject
    });

  } catch (error) {
    console.error('Project submission error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit project' 
      },
      { status: 500 }
    );
  }
}