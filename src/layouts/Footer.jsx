// File: src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#2b2b2b] text-[#f6f4f1] py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-lg font-bold mb-2">TotoVillage</h2>
          <p className="text-sm">Childcare is not a private struggle, it's a shared responsibility and a community opportunity.</p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#c4925c]">Home</Link></li>
            <li><Link to="#about" className="hover:text-[#c4925c]">About Us</Link></li>
            <li><Link to="#programs" className="hover:text-[#c4925c]">Programs</Link></li>
            <li><Link to="#impact" className="hover:text-[#c4925c]">Impact</Link></li>
            <li><Link to="#contact" className="hover:text-[#c4925c]">Contact</Link></li>
            <li><Link to="#privacy-policy" className='hover:text-[#c4925c]'>Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">Connect With Us</h2>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:info@totovillage.org" className="hover:text-[#c4925c]">info@totovillage.org</a></li>
            <li>Phone: <a href="tel:+254700000000" className="hover:text-[#c4925c]">+254 700 000 000</a></li>
            <li><a href="#" className="hover:text-[#c4925c]">Facebook</a></li>
            <li><a href="#" className="hover:text-[#c4925c]">Twitter</a></li>
            <li><a href="#" className="hover:text-[#c4925c]">Instagram</a></li>
            <li><a href="#" className="hover:text-[#c4925c]">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-xs border-t border-[#444] pt-4">
        &copy; {new Date().getFullYear()} TotoVillage. All rights reserved.
      </div>
    </footer>
  );
}
