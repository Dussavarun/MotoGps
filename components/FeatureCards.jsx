import { MapPin, Lock, Droplet, UserCheck } from 'lucide-react';

export default function FeatureCards() {
  const benefits = [
    {
      icon: <MapPin size={24} className="text-blue-600" />,
      title: "Live Tracking",
      description: "Monitor your vehicles in real-time with precise location updates every 10 seconds."
    },
    {
      icon: <Lock size={24} className="text-blue-600" />,
      title: "Remote Lock",
      description: "Secure your vehicles remotely with advanced immobilization features."
    },
    {
      icon: <Droplet size={24} className="text-blue-600" />,
      title: "Fuel Monitoring",
      description: "Track fuel consumption and detect unauthorized usage or theft."
    },
    {
      icon: <UserCheck size={24} className="text-blue-600" />,
      title: "Driver Insights",
      description: "Analyze driver behavior and improve safety with detailed performance reports."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            {benefit.icon}
          </div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">
            {benefit.title}
          </h3>
          <p className="text-gray-600">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
}