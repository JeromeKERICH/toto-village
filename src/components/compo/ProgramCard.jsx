import React from 'react';
import { FaBuilding, FaBriefcase, FaUserGraduate, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Partnerships() {
  const programs = [
    {
      icon: <FaBuilding className="text-4xl text-[#2C3E50] drop-shadow-lg" />,
      image: "assets/partnership.jpg",
      title: "Partnerships for Affordable Childcare",
      description: "We work with counties to identify, upgrade, and manage childcare facilities in busy economic areas.",
    },
    {
      icon: <FaBriefcase className="text-4xl text-[#2C3E50] drop-shadow-lg" />,
      image: "assets/g5.jpg",
      title: "On-site Childcare Centers",
      description: "Providing on-site childcare that supports working parents and drives organizational success.",
    },
    {
      icon: <FaUserGraduate className="text-4xl text-[#2C3E50] drop-shadow-lg" />,
      image: "assets/train.jpg",
      title: "Workforce Development",
      description: "We recruit, train, and certify local caregivers in child development and business management.",
    },
    {
      icon: <FaUsers className="text-4xl text-[#2C3E50] drop-shadow-lg" />,
      image: "assets/g4.jpg",
      title: "Community Engagement",
      description: "We bring childcare into the heart of communities where care becomes accessible and valued.",
    },
  ];

  return (
    <section className="py-4 px-4 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold mb-3 text-[#2C3E50] drop-shadow-sm">
            Our Programs
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-[#4a4a4a]">
            Collaborative solutions that spark economic growth and childcare accessibility
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-2 bg-white border border-gray-200"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white p-3 rounded-full shadow-md border border-gray-300">
                  {program.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#2C3E50] drop-shadow-sm">
                  {program.title}
                </h3>
                <p className="mb-6 text-[#2C3E50]/90">
                  {program.description}
                </p>
                <Link
                  to={`/partnerships#${program.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center font-bold text-[#2C3E50] hover:text-[#2C3E50]/90 border-b-2 border-[#2C3E50] pb-1 transition-colors"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
