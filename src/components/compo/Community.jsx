import React from 'react';
import { FaUsers, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function CommunitySection() {
  return (
    <section className="bg-white text-[#2C3E50] py-5 md:py-10 lg:py-15 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block">
              <h2 className="lg:text-5xl md:text-4xl text-3xl text-center font-bold mb-6">
                <span className="text-[#FF8C00] bg-clip-text bg-gradient-to-r from-[#FF8C00] to-[#FFA500]">
                  Our Community
                </span>
              </h2>
            </div>
            
            <div className="bg-[#E6F5E6] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-lg md:text-xl text-[#2C3E50] mb-6 leading-relaxed">
                A vibrant ecosystem of diverse stakeholders working together to drive change for women and children.
              </p>
              <div>
                <Link 
                  to="/community-extended" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white px-6 py-3 rounded-lg font-bold hover:from-[#FF7B00] hover:to-[#FF9500] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Join Our Community
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="lg:w-1/2 relative group">
            <img 
              src="assets/community.jpg" 
              alt="Community members working together" 
              className="w-full h-3/4 rounded-2xl object-cover h-[500px] shadow-2xl border-4 border-white transform group-hover:scale-[1.01] transition-transform duration-500"
            />
            <div className="absolute -bottom-5 -right-5 bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white px-6 py-3 rounded-lg shadow-lg font-bold flex items-center gap-2">
              <FaUsers className="text-xl" /> 1000+ Members
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}