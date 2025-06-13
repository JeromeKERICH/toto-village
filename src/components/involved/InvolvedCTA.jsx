import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function InvolvedCTA() {
  return (
    <section className="bg-white text-[#2C3E50] py-16 px-4 md:px-12 lg:px-24">
        <div className="bg-[#2C3E50] text-white p-12 rounded-xl">
        <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Connect With Our Community</h2>
        <p className="text-xl mb-8 text-center">
            Stay updated on our work and join the conversation
        </p>
        
        <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-white hover:text-[#E67E22] transition-colors">
            <FaFacebook className="text-3xl" />
            </a>
            <a href="#" className="text-white hover:text-[#E67E22] transition-colors">
            <FaTwitter className="text-3xl" />
            </a>
            <a href="#" className="text-white hover:text-[#E67E22] transition-colors">
            <FaInstagram className="text-3xl" />
            </a>
            <a href="#" className="text-white hover:text-[#E67E22] transition-colors">
            <FaLinkedin className="text-3xl" />
            </a>
        </div>

        <div className="text-center">
            <p className="mb-4">For partnership inquiries:</p>
            <a 
            href="mailto:partnerships@totovillage.org" 
            className="text-[#E67E22] font-bold hover:underline"
            >
            partnerships@totovillage.org
            </a>
        </div>
        </div>
        </div>
    </section>
    );
}