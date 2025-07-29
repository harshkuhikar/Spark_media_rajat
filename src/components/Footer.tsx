import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Zap className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold gradient-text">Spark Digital</h3>
                <p className="text-xs text-gray-400 -mt-1">Ignition</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Igniting digital success through innovative marketing strategies, cutting-edge design, 
              and data-driven solutions that transform businesses and accelerate growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">Pricing</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">Team</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-blue-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Content Creation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Content Strategy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Content Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Social Media</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Brand Enhancement</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Vision Realization</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">sparksocialmedia.in@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">+91 9427407354</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span className="text-gray-400">
                  India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Spark Media. All Rights Reserved. | 
            <a href="#" className="text-blue-400 hover:underline ml-2">Privacy Policy</a> | 
            <a href="#" className="text-blue-400 hover:underline ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;