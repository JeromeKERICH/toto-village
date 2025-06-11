import React from 'react';
import { FaUsers, FaArrowRight } from 'react-icons/fa';

export default function CommunitySection() {
  return (
    <section className="bg-white text-[#2C3E50] py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block ">
              <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold mb-3 text-[#2C3E50] drop-shadow-sm text-center">
                Our Community
              </h2>
            </div>
            
            <div className="bg-[#5B8C5A]/10 p-6 rounded-2xl border border-[#5B8C5A]/20 shadow-sm">
              <p className="text-lg md:text-xl  mb-0">
                A vibrant and innovative childcare ecosystem involving diverse stakeholders working together 
                to drive change and impact for women and children.
              </p>
            </div>
            
            <div className="bg-[#E67E22]/10 p-6 rounded-2xl border border-[#E67E22]/20 shadow-sm">
              <div className="flex items-start gap-4">
                <p className="text-[#2C3E50] ">
                  Our main goal is to <span className="font-bold">improve the overall economic and social well-being</span> of the community.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="lg:w-1/2 relative">
            <img 
              src="assets/g.jpg" 
              alt="Community members working together" 
              className="w-full rounded-2xl object-cover h-[500px] shadow-xl border-4 border-white"
            />
            <div className="absolute -bottom-5 -right-5 bg-white text-black px-6 py-3 rounded-lg shadow-lg font-bold flex items-center gap-2">
              <FaUsers /> 1000+ Members
            </div>
          </div>
        </div>
        
        {/* Solid CTA Section */}
        <div className="relative bg-[#2C3E50] p-1 border rounded-lg">
          <div className="bg-white rounded-xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Make an Impact?</h3>
            <p className="text-[#4a4a4a] mb-6 max-w-2xl mx-auto text-lg text-start md:text-center">
              Join our movement to empower families and transform communities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#E67E22] text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all duration-300 flex items-center gap-2 group text-center">
                Join Our Community
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}