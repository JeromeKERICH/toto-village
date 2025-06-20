import React from 'react';
import { Link } from 'react-router-dom';

export default function MissionSection() {
  return (
    <section className="py-5 md:py-10 lg:py-15 px-4 md:px-12 lg:px-24 bg-white border-xl">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-6 text-[#2C3E50]">
            <span className="text-[#FF8C00] bg-clip-text bg-gradient-to-r from-[#FF8C00] to-[#FFA500]">
              Our Purpose
            </span>
          </h2>
          <p className="text-[#4a4a4a] max-w-4xl mx-auto text-lg leading-relaxed">
            Building <span className="font-semibold text-[#FF8C00]">localized, dual-generational</span> childcare solutions that enable women to work, children to thrive, and communities to grow - reducing inequality and creating system-level impact.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#FF8C00]">
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-4 flex items-center gap-2">
              <span className="bg-[#FFA500] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">M</span>
              Our Mission
            </h3>
            <p className="text-[#4a4a4a] leading-relaxed">
              Inspired by the African proverb <span className="italic">"It takes a village to raise a child,"</span> we believe childcare is a <span className="font-semibold text-[#5B8C5A]">shared responsibility</span>. Through partnerships, we create ecosystems where families, caregivers, and institutions work together to meet community needs - enabling economic participation and nurturing every child's potential.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#5B8C5A]">
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-4 flex items-center gap-2">
              <span className="bg-[#5B8C5A] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">V</span>
              Our Vision
            </h3>
            <p className="text-[#4a4a4a] leading-relaxed">
              A world where <span className="font-semibold text-[#FF8C00]">no woman chooses between career and children</span>; where every child grows up safe, healthy, and loved; and where communities build economies centered on <span className="font-semibold text-[#5B8C5A]">care and mutual support</span>.
            </p>
          </div>
        </div>

        {/* 2035 Goal */}
        <div className="bg-gradient-to-r from-[#FFE8D6] to-[#F8F9FA] rounded-xl p-8 mb-16 text-center max-w-3xl mx-auto shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">
            Our <span className="text-[#FF8C00]">2035</span> Goal
          </h3>
          <p className="text-[#4a4a4a] text-lg">
            Enable <span className="font-bold text-[#FF8C00]">10,000 families</span> to access quality childcare that supports <span className="font-semibold text-[#5B8C5A]">economic participation</span> and <span className="font-semibold text-[#5B8C5A]">child development</span>.
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link 
            to="/storypage" 
            className="bg-gradient-to-r from-[#FF8C00] to-[#FFA500] hover:from-[#FF7B00] hover:to-[#FF9500] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Discover Our Story →
          </Link>
        </div>
      </div>
    </section>
  );
}