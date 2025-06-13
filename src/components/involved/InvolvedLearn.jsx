import React from 'react';


export default function CustomDonation() {
  return (
    <div className="max-w-2xl mx-auto bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] p-8 rounded-xl">
      <div className="flex items-center mb-4">
        
        <h3 className="text-2xl font-bold text-[#2C3E50]">Custom Donation</h3>
      </div>
      <p className="mb-6 text-[#4a4a4a]">
        Every dollar makes a difference. Give any amount that works for you.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <input 
          type="number" 
          placeholder="Enter amount ($)" 
          className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E67E22]"
        />
        <button className="bg-[#E67E22] hover:bg-[#1a2635] text-white font-bold py-3 px-6 rounded-lg transition-colors whitespace-nowrap">
          Donate Now
        </button>
      </div>
    </div>
  );
}