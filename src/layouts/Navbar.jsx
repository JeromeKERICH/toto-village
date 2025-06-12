// File: src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="assets/log.png" 
            alt="Toto-Village Logo" 
            className="h-10 mr-2" // Adjust height and margin as needed
          />
        </Link>
        <ul className="hidden md:flex space-x-6 text-[#444] font-medium">
          <li><Link to="/" className="hover:text-[#c4925c]">Home</Link></li>
          <li><Link to="/storypage" className="hover:text-[#c4925c]">About Us</Link></li>
          <li><Link to="/donation" className="hover:text-[#c4925c]">Donate</Link></li>
          <li><Link to="/programs" className="hover:text-[#c4925c]">Programs</Link></li>
          <li><Link to="/impact" className='hover:text-[#c4925c'>Impact</Link></li>
          <li><Link to="/get-invoved" className='hover:text-[#c4925c'>Get Involved</Link></li>
          <li><Link to="/media" className='hover:text-[#c4925c'>Media</Link></li>
          
          
        </ul>
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden text-[#c4925c] focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      {menuOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-3 text-[#444] font-medium bg-[#f6f4f1]">
          <li><Link to="/" className="block py-2 hover:text-[#c4925c]" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/storypage" className="block py-2 hover:text-[#c4925c]" onClick={closeMenu}>About Us</Link></li>
          <li><Link to="/donation" className="block py-2 hover:text-[#c4925c]" onClick={closeMenu}>Donate</Link></li>
          <li><Link to="/programs" className="block py-2 hover:text-[#c4925c]" onClick={closeMenu}>Programs</Link></li>
          
          
        </ul>
      )}
    </nav>
  );
}