import React from 'react';
import { FaSeedling, FaGraduationCap, FaTools, FaHandHoldingHeart, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function DonationCard() {
  const donationKits = [
    {
      name: "Starter Kit",
    
      image: "assets/starter.jpg", // Add your image path
      amount: "$250",
      includes: [
        "Basic childcare supplies",
        "Learning materials for 5 children",
        "1 caregiver starter pack"
      ],
      impact: "Supports a small home-based childcare center"
    },
    {
      name: "Training Kit",
      
      image: "assets/training.jpg", // Add your image path
      amount: "$500",
      includes: [
        "Training for 2 caregivers",
        "ECD curriculum materials",
        "Classroom setup guide"
      ],
      impact: "Enables professional childcare services in the community"
    },
    {
      name: "Development Kit",
      
      image: "assets/centre.jpg", // Add your image path
      amount: "$1000",
      includes: [
        "Complete center setup",
        "Training for 5 caregivers",
        "6 months of learning materials"
      ],
      impact: "Establishes a full community childcare hub that serves multiple families"
    }
  ];

  // ... (keep other existing code)

  return (
    <section className="py-4 px-4 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-2">
          <h2 className="lg:text-4xl md:text-3xl text-2xl text-[#2C3E50] font-bold mt-5 drop-shadow-sm text-center mb-10">
            With Your Support, We Can Make a Difference
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {donationKits.map((kit, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={kit.image} 
                    alt={kit.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-[#2C3E50]">{kit.name}</h3>
                  <div className="bg-[#f8f9fa] p-4 rounded-lg mb-4 text-center">
                    <p className="text-3xl font-bold text-[#E67E22]">{kit.amount}</p>
                  </div>
                  <ul className="mb-6 space-y-2">
                    {kit.includes.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#E67E22] mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm italic text-[#4a4a4a]">
                    <span className="font-bold">Impact:</span> {kit.impact}
                  </p>
                </div>
                <div className="bg-[#2C3E50] text-white p-4 text-center">
                  <button className="bg-[#E67E22] hover:bg-[#D35400] text-white font-bold py-2 px-6 rounded-lg transition-colors">
                    Donate Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ... (keep rest of the existing code) */}
        </div>
      </div>
    </section>
  );
}