import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1D3557] text-[#f6f4f1] pt-12 pb-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold flex items-center">
              <span className="bg-[#E67E22] text-white p-2 rounded mr-2">TV</span>
              TotoVillage
            </h2>
            <p className="text-sm leading-relaxed">
              Childcare shouldn't not be private struggle, it's a shared responsibility and a community opportunity.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/19ZoRGqj51/" className="text-white hover:text-[#E67E22] transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://x.com/totovillage" className="text-white hover:text-[#E67E22] transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.instagram.com/totovillage1?igsh=MWlibXEyd3VqeWdvOQ==" className="text-white hover:text-[#E67E22] transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/totovillage/" className="text-white hover:text-[#E67E22] transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-[#E67E22] inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '#about' },
                { name: 'Programs', path: '#programs' },
                { name: 'Impact', path: '#impact' },
                { name: 'Get Involved', path: '#get-involved' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-sm hover:text-[#E67E22] transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-[#E67E22] rounded-full mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-[#E67E22] inline-block">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-[#E67E22] mt-1 mr-3 flex-shrink-0" />
                <span className="text-sm">Thiong'o Road, Mountain View, Nairobi, KENYA</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-[#E67E22] mr-3" />
                <a href="mailto:info@totovillage.org" className="text-sm hover:text-[#E67E22] transition-colors">
                  wecare@totovillage.org
                </a>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-[#E67E22] mr-3" />
                <a href="tel:+254700000000" className="text-sm hover:text-[#E67E22] transition-colors">
                (+254) 769 786000
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-[#E67E22] inline-block">
              Newsletter
            </h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for updates on our programs and impact.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2  rounded text-sm text-white border-white focus:outline-white focus:ring-2 focus:ring-[#fff]"
                required
              />
              <button
                type="submit"
                className="bg-[#E67E22] hover:bg-[#D35400] text-white py-2 px-4 rounded text-sm font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#2a4b6f] pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TotoVillage. All rights reserved.
          </div>
          <div className="flex space-x-4 text-xs">
            <Link to="/privacy" className="hover:text-[#E67E22] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#E67E22] transition-colors">
              Terms of Service
            </Link>
            
          </div>
        </div>
      </div>
    </footer>
  );
}