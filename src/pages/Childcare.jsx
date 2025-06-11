import React from 'react';
import { FaBuilding, FaHandshake, FaMapMarkerAlt, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function PartnershipProgram() {
  return (
    <section className="py-12 px-4 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16 items-center">
          <div className="lg:w-1/2">
            <div className="bg-[#2C3E50] text-white p-3 rounded-full w-fit mb-6">
              <FaBuilding className="text-2xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2C3E50]">
              Partnerships for Affordable Childcare
            </h1>
            <p className="text-lg text-[#4a4a4a] mb-8">
              Collaborating with counties and businesses to create sustainable childcare solutions that support working families and drive economic growth.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#2C3E50] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#1a2634] transition-colors"
            >
              Partner With Us
            </Link>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="assets/partnership-hero.jpg" 
              alt="Partnership meeting" 
              className="w-full rounded-2xl shadow-lg object-cover h-96"
            />
          </div>
        </div>

        {/* Program Details */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#2C3E50]">
            Our Partnership Approach
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[#f8f9fa] p-8 rounded-2xl border border-gray-200">
              <FaHandshake className="text-4xl text-[#2C3E50] mb-6" />
              <h3 className="text-xl font-bold mb-4 text-[#2C3E50]">Public-Private Collaboration</h3>
              <p className="text-[#4a4a4a]">
                We bridge the gap between government entities and private organizations to develop childcare solutions that serve community needs while being financially sustainable.
              </p>
            </div>
            
            <div className="bg-[#f8f9fa] p-8 rounded-2xl border border-gray-200">
              <FaMapMarkerAlt className="text-4xl text-[#2C3E50] mb-6" />
              <h3 className="text-xl font-bold mb-4 text-[#2C3E50]">Strategic Location Planning</h3>
              <p className="text-[#4a4a4a]">
                Our team conducts comprehensive analyses to identify optimal locations for childcare facilities based on workforce density, transportation access, and community needs.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-[#2C3E50]">Program Benefits</h3>
            <ul className="grid md:grid-cols-2 gap-6">
              <li className="flex items-start gap-4">
                <div className="bg-[#2C3E50]/10 p-2 rounded-full">
                  <FaChartLine className="text-[#2C3E50]" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-[#2C3E50]">Increased Workforce Participation</h4>
                  <p className="text-[#4a4a4a]">Helps parents, especially mothers, remain in or return to the workforce</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-[#2C3E50]/10 p-2 rounded-full">
                  <FaBuilding className="text-[#2C3E50]" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-[#2C3E50]">Facility Development</h4>
                  <p className="text-[#4a4a4a]">Transforming underutilized spaces into high-quality childcare centers</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-[#2C3E50]/10 p-2 rounded-full">
                  <FaHandshake className="text-[#2C3E50]" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-[#2C3E50]">Cost Sharing Models</h4>
                  <p className="text-[#4a4a4a]">Innovative funding approaches that reduce the financial burden on any single entity</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-[#2C3E50]/10 p-2 rounded-full">
                  <FaMapMarkerAlt className="text-[#2C3E50]" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-[#2C3E50]">Community Impact</h4>
                  <p className="text-[#4a4a4a]">Strengthening local economies by supporting working families</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#2C3E50]">
            Partnership Success Stories
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="assets/success-1.jpg" 
                alt="Success story" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#2C3E50]">Downtown Business District</h3>
                <p className="text-[#4a4a4a] mb-4">Transformed vacant retail space into a childcare center serving 80 families</p>
                <div className="flex justify-between text-sm text-[#2C3E50]/80">
                  <span>✓ 92% parent satisfaction</span>
                  <span>✓ 15 local jobs created</span>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="assets/success-2.jpg" 
                alt="Success story" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#2C3E50]">Hospital Campus Partnership</h3>
                <p className="text-[#4a4a4a] mb-4">24/7 childcare for healthcare workers with rotating shifts</p>
                <div className="flex justify-between text-sm text-[#2C3E50]/80">
                  <span>✓ 40% reduction in turnover</span>
                  <span>✓ 120 children served</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#2C3E50] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore a Partnership?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to create childcare solutions that benefit your community and workforce.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#2C3E50] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}