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
            
            <div className="bg-[#E6F5E6] p-8 rounded-2xl  shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-lg md:text-xl text-[#2C3E50] mb-0 leading-relaxed">
                A <span className="font-semibold text-[#FF8C00]">vibrant ecosystem</span> of diverse stakeholders working together to drive change for women and children.
              </p>
            </div>
            
            <div className="bg-[#FFE8D6] p-8 rounded-2xl  shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <p className="text-[#2C3E50] leading-relaxed">
                  Our mission is to <span className="font-semibold text-[#5B8C5A]">transform economic and social well-being</span> in low-income communities through childcare innovation.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="lg:w-1/2 relative group">
            <img 
              src="assets/community.jpg" 
              alt="Community members working together" 
              className="w-full rounded-2xl object-cover h-[500px] shadow-2xl border-4 border-white transform group-hover:scale-[1.01] transition-transform duration-500"
            />
            <div className="absolute -bottom-5 -right-5 bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white px-6 py-3 rounded-lg shadow-lg font-bold flex items-center gap-2">
              <FaUsers className="text-xl" /> 1000+ Members
            </div>
          </div>
        </div>
        
        {/* Solid CTA Section */}
        <div className="relative bg-gradient-to-r from-[#FF8C00] to-[#FFA500] p-1 rounded-xl overflow-hidden">
          <div className="bg-white rounded-xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#2C3E50]">
              Ready to <span className="text-[#FF8C00]">Make an Impact</span>?
            </h3>
            <p className="text-[#4a4a4a] mb-6 max-w-2xl mx-auto text-lg">
              Join our movement to empower families and transform communities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/community-extended" 
                className="bg-gradient-to-r from-[#FF8C00] to-[#FFA500] hover:from-[#FF7B00] hover:to-[#FF9500] text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group mx-auto"
              >
                Join Our Community
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}