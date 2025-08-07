// src/app/api/analytics/route.js
import { NextResponse } from 'next/server';

// Mock analytics data generator
const generateAnalyticsData = (timeframe) => {
  const multiplier = {
    '7d': 0.2,
    '30d': 1,
    '90d': 3.2,
    '1y': 12.5
  };

  const factor = multiplier[timeframe] || 1;

  return {
    totalViews: Math.floor(12500 * factor),
    totalLeads: Math.floor(285 * factor),
    conversionRate: +(2.3 + Math.random() * 1.5).toFixed(1),
    avgPropertyValue: '1.2Cr',
    viewsChange: +((Math.random() - 0.4) * 30).toFixed(1),
    leadsChange: +((Math.random() - 0.3) * 25).toFixed(1),
    conversionChange: +((Math.random() - 0.5) * 15).toFixed(1),
    valueChange: +((Math.random() - 0.4) * 12).toFixed(1),
    
    // Detailed analytics
    topLocations: [
      { name: 'Mumbai', views: Math.floor(3200 * factor), leads: Math.floor(75 * factor) },
      { name: 'Delhi NCR', views: Math.floor(2800 * factor), leads: Math.floor(68 * factor) },
      { name: 'Bangalore', views: Math.floor(2400 * factor), leads: Math.floor(62 * factor) },
      { name: 'Pune', views: Math.floor(1900 * factor), leads: Math.floor(48 * factor) },
      { name: 'Hyderabad', views: Math.floor(1600 * factor), leads: Math.floor(42 * factor) }
    ],
    
    propertyTypes: [
      { type: 'Apartment', share: 45, avgPrice: '1.2Cr' },
      { type: 'Villa', share: 25, avgPrice: '2.8Cr' },
      { type: 'Plot', share: 20, avgPrice: '85L' },
      { type: 'Commercial', share: 10, avgPrice: '3.5Cr' }
    ],
    
    monthlyTrends: generateMonthlyTrends(timeframe),
    
    competitorData: [
      { name: 'Competitor A', marketShare: 25, avgPrice: '1.1Cr' },
      { name: 'Competitor B', marketShare: 18, avgPrice: '1.3Cr' },
      { name: 'Competitor C', marketShare: 15, avgPrice: '1.0Cr' },
      { name: 'Your Business', marketShare: 12, avgPrice: '1.2Cr' },
      { name: 'Others', marketShare: 30, avgPrice: '1.15Cr' }
    ]
  };
};

const generateMonthlyTrends = (timeframe) => {
  const months = timeframe === '7d' ? 1 : 
                 timeframe === '30d' ? 3 : 
                 timeframe === '90d' ? 6 : 12;
  
  const trends = [];
  const baseViews = 1000;
  const baseLeads = 25;
  
  for (let i = 0; i < months; i++) {
    const month = new Date();
    month.setMonth(month.getMonth() - (months - 1 - i));
    
    trends.push({
      month: month.toLocaleString('default', { month: 'short', year: 'numeric' }),
      views: Math.floor(baseViews + Math.random() * 500),
      leads: Math.floor(baseLeads + Math.random() * 15),
      conversions: Math.floor((baseLeads + Math.random() * 15) * 0.15)
    });
  }
  
  return trends;
};

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const timeframe = searchParams.get('timeframe') || '30d';
    const type = searchParams.get('type'); // sales-performance, market-trends, etc.
    
    const analytics = generateAnalyticsData(timeframe);
    
    // If specific analytics type is requested
    if (type) {
      return getSpecificAnalytics(type, timeframe);
    }
    
    return NextResponse.json({
      success: true,
      analytics,
      timeframe,
      generatedAt: new Date().toISOString()
    });

  } catch (error) {
    console.error('Analytics API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}

const getSpecificAnalytics = (type, timeframe) => {
  const specificData = {
    'sales-performance': {
      totalSales: 145,
      totalRevenue: '₹18.2Cr',
      avgDealSize: '₹1.25Cr',
      salesTrend: [
        { month: 'Jan', sales: 12, revenue: 15.6 },
        { month: 'Feb', sales: 15, revenue: 18.2 },
        { month: 'Mar', sales: 18, revenue: 22.8 },
        { month: 'Apr', sales: 14, revenue: 17.1 },
        { month: 'May', sales: 22, revenue: 28.4 },
        { month: 'Jun', sales: 19, revenue: 24.2 }
      ],
      topPerformers: [
        { name: 'Project A', sales: 28, revenue: '₹3.5Cr' },
        { name: 'Project B', sales: 22, revenue: '₹2.8Cr' },
        { name: 'Project C', sales: 18, revenue: '₹2.2Cr' }
      ]
    },
    
    'market-trends': {
      priceAppreciation: 8.5,
      demandIndex: 72,
      supplyIndex: 45,
      marketSentiment: 'Positive',
      trendingLocations: [
        { location: 'Sector 82, Gurgaon', growth: 12.5, demand: 'High' },
        { location: 'Whitefield, Bangalore', growth: 10.2, demand: 'Very High' },
        { location: 'Baner, Pune', growth: 9.8, demand: 'High' }
      ],
      priceMovement: [
        { month: 'Jan', avgPrice: 6800, volume: 145 },
        { month: 'Feb', avgPrice: 6950, volume: 162 },
        { month: 'Mar', avgPrice: 7120, volume: 178 },
        { month: 'Apr', avgPrice: 7250, volume: 156 },
        { month: 'May', avgPrice: 7380, volume: 189 },
        { month: 'Jun', avgPrice: 7520, volume: 201 }
      ]
    },
    
    'competitor-analysis': {
      marketPosition: 4,
      competitiveIndex: 68,
      strengthAreas: ['Customer Service', 'Digital Presence', 'Project Quality'],
      improvementAreas: ['Pricing Strategy', 'Market Coverage'],
      competitors: [
        { 
          name: 'DLF', 
          marketShare: 22, 
          avgPrice: '₹7800/sqft', 
          projects: 15,
          strengths: ['Brand Recognition', 'Premium Projects']
        },
        { 
          name: 'Godrej Properties', 
          marketShare: 18, 
          avgPrice: '₹7200/sqft', 
          projects: 12,
          strengths: ['Sustainability', 'Innovation']
        },
        { 
          name: 'Prestige Group', 
          marketShare: 15, 
          avgPrice: '₹6900/sqft', 
          projects: 18,
          strengths: ['South India Presence', 'Mixed-use Developments']
        }
      ]
    },
    
    'price-analytics': {
      averagePricePerSqft: '₹7200',
      priceRange: { min: '₹4500', max: '₹12000' },
      priceFactors: [
        { factor: 'Location', impact: 35, description: 'Proximity to IT hubs, metro stations' },
        { factor: 'Amenities', impact: 25, description: 'Clubhouse, swimming pool, gym' },
        { factor: 'Builder Brand', impact: 20, description: 'Reputation and past delivery record' },
        { factor: 'Project Size', impact: 12, description: 'Total units and development scale' },
        { factor: 'Floor Level', impact: 8, description: 'Higher floors command premium' }
      ],
      pricingRecommendations: [
        { segment: '2BHK Apartments', suggestedPrice: '₹6800-7500/sqft', confidence: 'High' },
        { segment: '3BHK Apartments', suggestedPrice: '₹7200-8200/sqft', confidence: 'High' },
        { segment: 'Villas', suggestedPrice: '₹5500-7000/sqft', confidence: 'Medium' }
      ]
    },
    
    'demand-forecasting': {
      nextQuarterDemand: 'High',
      demandScore: 78,
      forecast: [
        { period: 'Q3 2024', demand: 82, confidence: 'High' },
        { period: 'Q4 2024', demand: 75, confidence: 'Medium' },
        { period: 'Q1 2025', demand: 88, confidence: 'Medium' },
        { period: 'Q2 2025', demand: 92, confidence: 'Low' }
      ],
      demandDrivers: [
        { driver: 'Job Market Growth', impact: 'Positive', weight: 30 },
        { driver: 'Infrastructure Development', impact: 'Positive', weight: 25 },
        { driver: 'Interest Rates', impact: 'Neutral', weight: 20 },
        { driver: 'Government Policies', impact: 'Positive', weight: 15 },
        { driver: 'Economic Conditions', impact: 'Neutral', weight: 10 }
      ]
    },
    
    'roi-calculator': {
      averageROI: 12.5,
      bestPerformingSegment: '2BHK Apartments',
      roiByType: [
        { type: '1BHK', roi: 10.2, rentalYield: 3.2 },
        { type: '2BHK', roi: 12.5, rentalYield: 3.8 },
        { type: '3BHK', roi: 11.8, rentalYield: 3.5 },
        { type: 'Villa', roi: 9.5, rentalYield: 2.8 }
      ],
      investmentScenarios: [
        { scenario: 'Conservative', expectedROI: '8-10%', timeline: '5-7 years' },
        { scenario: 'Moderate', expectedROI: '10-14%', timeline: '3-5 years' },
        { scenario: 'Aggressive', expectedROI: '14-18%', timeline: '2-3 years' }
      ]
    }
  };

  return NextResponse.json({
    success: true,
    type,
    data: specificData[type] || {},
    timeframe,
    generatedAt: new Date().toISOString()
  });
};