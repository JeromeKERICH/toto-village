import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="assets/log.png" 
              alt="Toto-Village Logo" 
              className="h-12 mr-2 mt-2"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              <Link 
                to="/" 
                className="text-[#2C3E50] hover:text-[#FF8C00] font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                to="/storypage" 
                className="text-[#2C3E50] hover:text-[#FF8C00] font-medium transition-colors duration-200"
              >
                About Us
              </Link>
              <Link 
                to="/programs" 
                className="text-[#2C3E50] hover:text-[#FF8C00] font-medium transition-colors duration-200"
              >
                Our Model
              </Link>
              <Link 
                to="/impact" 
                className="text-[#2C3E50] hover:text-[#FF8C00] font-medium transition-colors duration-200"
              >
                Impact
              </Link>
              <Link 
                to="/donation" 
                className="text-[#2C3E50] hover:text-[#FF8C00] font-medium transition-colors duration-200"
              >
                Get Involved
              </Link>
              <Link 
                to="/media" 
                className="text-[#2C3E50] hover:text-[#FF8C00] font-medium transition-colors duration-200"
              >
                Media
              </Link>
              <Link 
                to="/contact" 
                className="text-[#2C3E50] hover:text-[#FF8C00] font-medium transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
            <Link 
              to="/donation" 
              className="ml-6 bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white px-4 py-2 rounded-full font-medium hover:shadow-md transition-all duration-200"
            >
              Donate
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#2C3E50] hover:text-[#FF8C00] focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-[#2C3E50] hover:text-[#FF8C00] hover:bg-[#FFF5EB] font-medium"
            >
              Home
            </Link>
            <Link 
              to="/storypage" 
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-[#2C3E50] hover:text-[#FF8C00] hover:bg-[#FFF5EB] font-medium"
            >
              About Us
            </Link>
            <Link 
              to="/programs" 
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-[#2C3E50] hover:text-[#FF8C00] hover:bg-[#FFF5EB] font-medium"
            >
              Our Model
            </Link>
            <Link 
              to="/impact" 
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-[#2C3E50] hover:text-[#FF8C00] hover:bg-[#FFF5EB] font-medium"
            >
              Impact
            </Link>
            <Link 
              to="/donation" 
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-[#2C3E50] hover:text-[#FF8C00] hover:bg-[#FFF5EB] font-medium"
            >
              Get Involved
            </Link>
            <Link 
              to="/media" 
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-[#2C3E50] hover:text-[#FF8C00] hover:bg-[#FFF5EB] font-medium"
            >
              Media
            </Link>
            <Link 
              to="/contact" 
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-[#2C3E50] hover:text-[#FF8C00] hover:bg-[#FFF5EB] font-medium"
            >
              Contact
            </Link>
            <Link 
              to="/donation" 
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white font-medium text-center mt-2 hover:shadow-md"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}