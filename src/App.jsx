import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ContactSection from "../components/ContactSection";
import FeatureCards from "../components/FeatureCards";
import FleetTrackingFeatures from "../components/FleetTrackingFeatures";
import WhatsAppChatPopup from "../components/WhatsAppChatPopup";
import TestimonialsSection from "../components/TestimonialsSection";
import SocialMediaLinks from "../components/SocialMediaLinks";


const App = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showChatPopup, setShowChatPopup] = useState(false);

  useEffect(() => {
    // Show chat popup after 5 seconds
    const timer = setTimeout(() => {
      setShowChatPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header/Navigation */}
      <Header></Header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20digital%20GPS%20tracking%20system%20with%20blue%20glowing%20map%20trails%20and%20vehicle%20icons%20moving%20on%20dark%20background%2C%20technology%20concept%20with%20abstract%20data%20visualization%2C%20futuristic%20interface%20design%20with%20grid%20lines%20and%20connection%20points&width=1440&height=800&seq=hero1&orientation=landscape')`,
            filter: "brightness(0.7)",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Real-Time GPS Tracking for Smarter Fleets
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Monitor, manage, and secure your vehicles with MotoGPS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap !rounded-button cursor-pointer">
                Get Started
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-medium whitespace-nowrap !rounded-button cursor-pointer">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                About MotoGPS
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                MotoGPS is a comprehensive fleet management solution that
                provides real-time tracking and analytics for businesses of all
                sizes. Our advanced GPS technology helps fleet operators
                optimize routes, reduce fuel costs, improve driver safety, and
                enhance overall operational efficiency.
              </p>
              <p className="text-lg text-gray-700">
                With over 10 years of industry experience, we've helped
                thousands of businesses transform their fleet operations through
                smart technology and data-driven insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <FeatureCards></FeatureCards>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Powerful Features for Fleet Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our comprehensive suite of tools can transform your
              fleet operations
            </p>
          </div>

          <FleetTrackingFeatures></FleetTrackingFeatures>
        </div>
      </section>

      {/* Device Showcase Section */}
      <section id="devices" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Choose Your GPS Tracker
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select from our range of high-performance tracking devices
              designed for different vehicle types and needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://readdy.ai/api/search-image?query=Modern%20compact%20GPS%20tracking%20device%20with%20sleek%20black%20design%2C%20small%20LED%20indicator%20lights%2C%20and%20professional%20appearance%20against%20clean%20white%20background%2C%20high-quality%20product%20photography%20showing%20precise%20details%20and%20premium%20finish&width=400&height=300&seq=device1&orientation=landscape",
                name: "MotoTrack Pro",
                type: "Wired GPS Tracker",
                specs: [
                  "Hardwired installation",
                  "Real-time tracking",
                  "Engine cut-off capability",
                  "Backup battery: 48 hours",
                ],
              },
              {
                image:
                  "https://readdy.ai/api/search-image?query=OBD%20GPS%20tracking%20device%20with%20plug-and-play%20design%2C%20compact%20form%20factor%20with%20blue%20accent%20lights%2C%20professional%20product%20photography%20showing%20device%20plugged%20into%20OBD%20port%20against%20clean%20white%20background%2C%20high-quality%20detailed%20shot&width=400&height=300&seq=device2&orientation=landscape",
                name: "MotoPlug OBD",
                type: "OBD GPS Tracker",
                specs: [
                  "Plug & Play installation",
                  "Vehicle diagnostics",
                  "Driver behavior analysis",
                  "No battery required",
                ],
              },
              {
                image:
                  "https://readdy.ai/api/search-image?query=Wireless%20magnetic%20GPS%20tracker%20with%20compact%20rugged%20design%2C%20water-resistant%20black%20casing%20with%20subtle%20blue%20logo%2C%20professional%20product%20photography%20against%20clean%20white%20background%20showing%20portable%20tracking%20device%20with%20charging%20port%2C%20high-quality%20detailed%20shot&width=400&height=300&seq=device3&orientation=landscape",
                name: "MotoMag Wireless",
                type: "Wireless Magnetic Tracker",
                specs: [
                  "No installation required",
                  "Magnetic attachment",
                  "Waterproof design",
                  "Battery life: 14 days",
                ],
              },
            ].map((device, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={device.image}
                    alt={device.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-1">
                    {device.name}
                  </h3>
                  <p className="text-blue-600 mb-4">{device.type}</p>
                  <ul className="mb-6 space-y-2">
                    {device.specs.map((spec, i) => (
                      <li key={i} className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                        <span className="text-gray-700">{spec}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <button className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors whitespace-nowrap !rounded-button cursor-pointer">
                      Learn More
                    </button>
                    <div className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        id={`compare-${index}`}
                        className="mr-2"
                      />
                      <label
                        htmlFor={`compare-${index}`}
                        className="text-gray-700"
                      >
                        Compare
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap !rounded-button cursor-pointer">
              Compare Devices
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection></TestimonialsSection>

      {/* Contact Section */}
      <ContactSection></ContactSection>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MotoGPS</h3>
              <p className="text-blue-200 mb-4">
                Advanced GPS tracking and fleet management solutions for
                businesses of all sizes.
              </p>
             <SocialMediaLinks></SocialMediaLinks>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Features", "Devices", "Pricing", "About Us", "Contact"].map(
                  (link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-blue-200 hover:text-white transition-colors cursor-pointer"
                      >
                        {link}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                {[
                  "Help Center",
                  "Documentation",
                  "System Status",
                  "FAQ",
                  "Blog",
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-blue-200 hover:text-white transition-colors cursor-pointer"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-blue-200 mb-4">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-l-lg border-none focus:outline-none text-gray-800 text-sm w-full"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-500 transition-colors whitespace-nowrap !rounded-button cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © {new Date().getFullYear()} MotoGPS. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-blue-200 text-sm hover:text-white transition-colors cursor-pointer"
                  >
                    {link}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </footer>


    <WhatsAppChatPopup></WhatsAppChatPopup>
    </div>
  );
};

export default App;
