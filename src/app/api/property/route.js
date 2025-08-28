// For App Router (app/api/property/route.js)
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const tab = searchParams.get('tab');

  try {
    // Mock data - replace with actual database calls
    const mockData = generateMockData(type, tab);
    
    return NextResponse.json({
      success: true,
      data: mockData
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}

// For Pages Router (pages/api/property.js)
export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { type, tab } = req.query;

  try {
    const mockData = generateMockData(type, tab);
    
    res.status(200).json({
      success: true,
      data: mockData
    });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch data'
    });
  }
}

function generateMockData(type, tab) {
  const baseData = {
    'post-property': {
      activeListings: 12,
      monthlyViews: 3420,
      leadConversion: 8.5,
      recentActivity: [
        { action: 'New property listing created', timestamp: '2 hours ago' },
        { action: 'Property photos updated', timestamp: '5 hours ago' },
        { action: 'Lead inquiry received', timestamp: '1 day ago' }
      ]
    },
    'dealer-services': {
      leadManagement: 15,
      marketingTools: 8,
      analytics: 12,
      crmIntegration: 6
    },
    'myGrihaProbesh': {
      totalProperties: 25,
      activeLeads: 42,
      monthlyViews: 8750,
      conversionRate: 12.3
    },
    'view-responses': {
      totalResponses: 156,
      weeklyResponses: 23,
      responseRate: 85,
      recentResponses: [
        {
          propertyTitle: '3BHK Apartment in Sector 62',
          inquirerName: 'Rajesh Kumar',
          message: 'Interested in visiting this property. Please call.',
          status: 'new',
          timestamp: '2 hours ago'
        },
        {
          propertyTitle: '2BHK Villa in Gurgaon',
          inquirerName: 'Priya Sharma',
          message: 'What is the final price for this property?',
          status: 'replied',
          timestamp: '5 hours ago'
        }
      ]
    }
  };

  return baseData[type] || {};
}