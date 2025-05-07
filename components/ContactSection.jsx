import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const  ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form data:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our GPS tracking solutions? Our team is here
            to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">
              Send us a message
            </h3>
            <div>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium w-full cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-blue-900">
                    Our Location
                  </h4>
                  <p className="text-gray-600">
                    Mansurabad, road, beside sloka birla school,<br />
                    Hyderabad, Telangana 500074
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Phone className="text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-blue-900">
                    Phone Number
                  </h4>
                  <p className="text-gray-600">094901 69019</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-blue-900">
                    Email Address
                  </h4>
                  <p className="text-gray-600">info@motogps.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <MessageSquare className="text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-blue-900">
                    WhatsApp
                  </h4>
                  <p className="text-gray-600">094901 69019</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-lg font-medium text-blue-900 mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors cursor-pointer"
                  aria-label="Facebook"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-blue-600" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors cursor-pointer"
                  aria-label="Twitter"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-blue-600" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M22 5.79997C21.2483 6.12606 20.4534 6.34163 19.64 6.43997C20.4982 5.92729 21.1413 5.12075 21.45 4.16997C20.6436 4.65003 19.7608 4.98826 18.84 5.16997C18.2245 4.50254 17.405 4.05826 16.5098 3.90682C15.6147 3.75537 14.6945 3.90393 13.8938 4.33157C13.093 4.75921 12.4569 5.43967 12.0852 6.2721C11.7135 7.10452 11.6273 8.0425 11.84 8.93997C10.2094 8.85968 8.61444 8.44754 7.1414 7.73167C5.66835 7.01581 4.34908 5.99332 3.26 4.73997C2.87436 5.41476 2.67056 6.17886 2.67 6.95997C2.67 8.48997 3.5 9.85997 4.7 10.66C4.03827 10.6396 3.39264 10.4487 2.82 10.1V10.15C2.8199 11.1101 3.15074 12.0396 3.75543 12.7856C4.36012 13.5316 5.20093 14.0509 6.14 14.27C5.53001 14.4459 4.88742 14.47 4.27 14.34C4.52897 15.1625 5.04203 15.8795 5.7309 16.3849C6.41977 16.8902 7.24634 17.1611 8.1 17.16C7.24895 17.8399 6.27706 18.346 5.2357 18.6455C4.19434 18.945 3.10391 19.0325 2.03 18.9C3.91652 20.1942 6.14298 20.884 8.42 20.88C15.78 20.88 19.87 14.94 19.87 9.79997C19.87 9.59997 19.87 9.39997 19.86 9.19997C20.6648 8.61845 21.3601 7.89386 21.92 7.07997L22 5.79997Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-blue-600" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" />
                    <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" />
                    <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18C16 18.5523 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44771 10 10V18C10 18.5523 10.4477 19 11 19Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors cursor-pointer"
                  aria-label="Instagram"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-blue-600" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;