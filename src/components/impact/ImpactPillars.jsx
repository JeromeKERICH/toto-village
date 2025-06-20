import React from 'react';
import { FaChartLine, FaBabyCarriage, FaHandshake } from 'react-icons/fa';

const ImpactPillars = () => (
  <section className="py-5 bg-white">
    <div className="container max-w-6xl mx-auto px-6">
      <h2 className="lg:text-5xl md:text-3xl text-3xl font-bold mb-6 text-[#2C3E50] drop-shadow-sm text-center">
        Our Impact Pillars
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <FaChartLine className="text-4xl text-[#FF9F1C] mb-4" />,
            title: "Economic Empowerment",
            description: "Enabling parents, especially mothers, to participate in the workforce while creating professional opportunities for caregivers."
          },
          {
            icon: <FaBabyCarriage className="text-4xl text-[#FF9F1C] mb-4" />,
            title: "Child Development",
            description: "Providing quality early childhood education that sets the foundation for lifelong learning and success."
          },
          {
            icon: <FaHandshake className="text-4xl text-[#FF9F1C] mb-4" />,
            title: "Community Transformation",
            description: "Building sustainable ecosystems where childcare becomes a catalyst for broader community development."
          }
        ].map((pillar, index) => (
          <div 
            key={index}
            className="bg-[#f8f9fa] p-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:bg-white"
          >
            <div className="text-center">
              {pillar.icon}
              <h3 className="text-2xl font-bold mb-4 text-[#2C3E50]">{pillar.title}</h3>
              <p className="text-[#4a4a4a]">{pillar.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactPillars;