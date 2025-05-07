import { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';

export default function WhatsAppChatPopup() {
  const [showChatPopup, setShowChatPopup] = useState(false);
  
  // Show popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChatPopup(true);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const openWhatsApp = () => {
    // WhatsApp number with India country code
    const phoneNumber = "919490169019"; // 91 is India's country code
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi,%20I'm%20interested%20in%20your%20fleet%20tracking%20service.`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    setShowChatPopup(false);
  };

  return (
    <>
      {showChatPopup && (
        <div className="fixed bottom-24 right-6 bg-white rounded-xl shadow-xl p-4 max-w-xs z-50 animate-bounce">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-medium text-blue-900">Hi there! 👋</h4>
            <button
              onClick={() => setShowChatPopup(false)}
              className="text-gray-400 hover:text-gray-600 cursor-pointer p-1"
              aria-label="Close popup"
            >
              <X size={16} />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            How can we help you track smarter today?
          </p>
          <button
            onClick={openWhatsApp}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-center gap-2"
          >
            <MessageCircle size={16} />
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      )}
      
      {/* Chat icon for reopening the popup if closed */}
      {!showChatPopup && (
        <button 
          onClick={() => setShowChatPopup(true)}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </>
  );
}