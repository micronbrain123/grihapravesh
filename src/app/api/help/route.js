// For App Router (app/api/help/route.js)
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const tab = searchParams.get('tab');

  try {
    const mockData = generateHelpMockData(type, tab);
    
    return NextResponse.json({
      success: true,
      data: mockData
    });
  } catch (error) {
    console.error('Help API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch help data' },
      { status: 500 }
    );
  }
}

// For Pages Router (pages/api/help.js)
export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { type, tab } = req.query;

  try {
    const mockData = generateHelpMockData(type, tab);
    
    res.status(200).json({
      success: true,
      data: mockData
    });
  } catch (error) {
    console.error('Help API Error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch help data'
    });
  }
}

function generateHelpMockData(type, tab) {
  const baseData = {
    'customer-services-faqs': {
      categories: [
        { name: 'Account & Billing', count: 15 },
        { name: 'Property Listing', count: 25 },
        { name: 'Technical Issues', count: 12 }
      ],
      popularFaqs: [
        'How do I post a property listing?',
        'What are the charges for premium services?',
        'How can I increase my property visibility?'
      ]
    },
    'contact-support': {
      supportHours: '9AM-11PM IST',
      responseTime: '24/7 Response'
    },
    'documentation-help': {
      categories: [
        { title: 'Getting Started', articles: 8 },
        { title: 'Property Management', articles: 15 },
        { title: 'API Documentation', articles: 20 }
      ]
    },
    'technical-support': {
      systemStatus: [
        { service: 'Property Listing Service', status: 'operational', uptime: '99.9%' },
        { service: 'Search & Discovery', status: 'operational', uptime: '99.8%' },
        { service: 'Lead Management', status: 'maintenance', uptime: '98.5%' }
      ]
    }
  };

  return baseData[type] || {};
}