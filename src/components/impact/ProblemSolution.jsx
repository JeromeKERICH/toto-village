import React from 'react';
import { FaTimes } from 'react-icons/fa';

const ProblemSolution = ({ onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
    <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 relative">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        <FaTimes className="text-2xl" />
      </button>
      
      <div className="space-y-8">
        {/* Problem Section */}
        <section className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h2 className="text-2xl font-bold text-red-700 mb-4">The Problem</h2>
          <p className="text-gray-700">
            Imagine leaving your child in a tiny, overcrowded room with an untrained caregiver, no proper nutrition, and constant risk of neglect or abuse. For many parents in Kenya's low-income communities, this is their daily reality.
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-5">
            <li>7 million children under five in Kenya</li>
            <li>1.5 million births annually</li>
            <li>58% gender pay gap due to childcare responsibilities</li>
            <li>Lack of safe care keeps women out of work</li>
            <li>Barrier to child development and school transition</li>
          </ul>
        </section>

        {/* Solution Section */}
        <section className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Our Solution</h2>
          <p className="text-gray-700">
            Toto Village is addressing the childcare crisis by delivering scalable, high-quality, dual-generational solutions that empower women to work while ensuring children receive the foundation needed for lifelong success, advancing SDGs 4, 5, and 8.
          </p>
          
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2 text-[#2C3E50]">Our Model</h3>
              <p>Three-tier scale-up strategy through Childcare Centres of Excellence (COEs) in partnerships with:</p>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>County Governments (public spaces)</li>
                <li>Corporates (employer-supported creches)</li>
                <li>Community-based providers (TotoFounders)</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2 text-[#2C3E50]">We Support TotoFounders With:</h3>
              <ul className="space-y-1 list-disc pl-5">
                <li>Childcare & Business Training</li>
                <li>Business starter packs aligned to National Care Framework</li>
                <li>Tools for measuring child development outcomes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Impact Goals */}
        <section className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold text-black mb-4">Impact by 2030</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-3xl font-bold text-[#FF9F1C] mb-2">4,000+</div>
              <p>TotoFounders trained impacting 80,000 children</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-3xl font-bold text-[#FF9F1C] mb-2">30</div>
              <p>Partner COEs with daily capacity of 4,800 children</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-3xl font-bold text-[#FF9F1C] mb-2">3</div>
              <p>Counties with integrated childcare solutions</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default ProblemSolution;