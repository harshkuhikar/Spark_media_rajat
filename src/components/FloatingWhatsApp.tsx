import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const whatsappNumber = "919427407354"; // Removed the + sign for better compatibility
  const message = "Hi! I'm interested in your content creation services.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Bubble */}
      {isOpen && (
        <div className="mb-4 mr-2 glass rounded-lg p-4 w-64 shadow-2xl animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-white">Need Help?</h4>
            <button 
              onClick={closePopup}
              className="text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-gray-700"
              type="button"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-gray-300 mb-3">
            Chat with us on WhatsApp for instant support!
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium flex items-center justify-center space-x-2 hover:shadow-lg"
            type="button"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Start Chat</span>
          </button>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={togglePopup}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group relative"
        type="button"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
      </button>
    </div>
  );
};

export default FloatingWhatsApp;