import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="fixed w-full bg-white  shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="flex-shrink-0">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 64 64" 
              className="h-10 w-10" 
              fill="none"
            >
              {/* Shield background */}
              <path 
                d="M32 4L8 14V30C8 45.464 18.036 56.724 32 60C45.964 56.724 56 45.464 56 30V14L32 4Z" 
                fill="#2563EB" 
              />
              <path 
                d="M32 8L12 16V30C12 42.464 20.036 51.724 32 54C43.964 51.724 52 42.464 52 30V16L32 8Z" 
                fill="#1E40AF" 
              />
              
              {/* Speedometer/GPS elements */}
              <circle cx="32" cy="30" r="16" fill="#BFDBFE" />
              <circle cx="32" cy="30" r="12" fill="#EFF6FF" />
              
              {/* Compass points */}
              <path d="M32 18V22" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" />
              <path d="M32 38V42" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" />
              <path d="M20 30H24" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" />
              <path d="M40 30H44" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" />
              
              {/* Motorcycle silhouette */}
              <path 
                d="M25 36C25 34.343 26.343 33 28 33H36C37.657 33 39 34.343 39 36L32 40L25 36Z" 
                fill="#1E40AF" 
              />
              <circle cx="24" cy="36" r="4" stroke="#1E40AF" strokeWidth="2" fill="#EFF6FF" />
              <circle cx="40" cy="36" r="4" stroke="#1E40AF" strokeWidth="2" fill="#EFF6FF" />
              
              {/* GPS signal waves */}
              <path d="M32 26C29.791 26 28 27.791 28 30" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
              <path d="M32 22C27.582 22 24 25.582 24 30" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
              <path d="M32 18C25.373 18 20 23.373 20 30" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-blue-900">MotoGPS</h1>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="font-medium hover:text-blue-600 transition-colors cursor-pointer"
          >
            Features
          </a>
          <a
            href="#devices"
            className="font-medium hover:text-blue-600 transition-colors cursor-pointer"
          >
            Devices
          </a>
          <a
            href="#testimonials"
            className="font-medium hover:text-blue-600 transition-colors cursor-pointer"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="font-medium hover:text-blue-600 transition-colors cursor-pointer"
          >
            Contact
          </a>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-blue-900 cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <a
              href="#features"
              className="font-medium hover:text-blue-600 transition-colors cursor-pointer"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a
              href="#devices"
              className="font-medium hover:text-blue-600 transition-colors cursor-pointer"
              onClick={toggleMenu}
            >
              Devices
            </a>
            <a
              href="#testimonials"
              className="font-medium hover:text-blue-600 transition-colors cursor-pointer"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="font-medium hover:text-blue-600 transition-colors cursor-pointer"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}



export default Header;