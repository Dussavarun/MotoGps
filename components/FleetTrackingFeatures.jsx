import { useState } from 'react';
import { 
  Map, 
  History, 
  MapPin, 
  Fuel, 
  LineChart, 
  BellRing 
} from 'lucide-react';

export default function FleetTrackingFeatures() {
  const features = [
    {
      icon: Map,
      title: "Real-Time Tracking",
      description: "Monitor your entire fleet with live location updates and movement alerts."
    },
    {
      icon: History,
      title: "Route History",
      description: "Access detailed trip logs with playback features for up to 90 days."
    },
    {
      icon: MapPin,
      title: "Geo-Fencing",
      description: "Create virtual boundaries and receive alerts when vehicles enter or exit designated areas."
    },
    {
      icon: Fuel,
      title: "Fuel Monitoring",
      description: "Track fuel consumption, detect theft, and identify opportunities for optimization."
    },
    {
      icon: LineChart,
      title: "Driver Scorecard",
      description: "Evaluate driver performance based on safety metrics and driving habits."
    },
    {
      icon: BellRing,
      title: "Custom Alerts",
      description: "Set up personalized notifications for speeding, idling, maintenance, and more."
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <IconComponent className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}