import React from 'react';
import { FaBuilding, FaBriefcase, FaUserGraduate, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Programs() {
  const programs = [
    {
      link: "partnership-program",
      icon: <FaBuilding className="text-4xl text-[#2C3E50] drop-shadow-lg" />,
      image: "assets/partnership.jpg",
      title: "Government Partnerships for Affordable Childcare",
      description: "We partner with Governments and Private Sector to create safe, nurturing, joyful spaces for children in everyday locations like markets and workplaces.",
    },
    {
      link: "on-site",
      icon: <FaBriefcase className="text-4xl text-[#2C3E50] drop-shadow-lg" />,
      image: "assets/g5.jpg",
      title: "Private Sector Partnerships for On-Site Childcare Centres",
      description: "Providing on-site childcare that supports working parents and drives organizational success.",
    },
    {
      link: "workforce-development",
      icon: <FaUserGraduate className="text-4xl text-[#2C3E50] drop-shadow-lg" />,
      image: "assets/train.jpg",
      title: "Workforce Development for Childcare Economy",
      description: "We recruit, train, and certify local caregivers in child development and business management.",
    },
    {
      link: "community-engagement",
      icon: <FaUsers className="text-4xl text-[#2C3E50] drop-shadow-lg" />,
      image: "assets/g4.jpg",
      title: "Community Engagement",
      description: "We bring childcare into the heart of communities where care becomes accessible and valued.",
    },
  ];

  return (
    <section className="py-5 px-4 md:px-12  bg-white">
      <div className="max-w-7xl mx-auto">
        

        {/* The Toto Village Difference Section */}
        <div className="mb-16 bg-[#2C3E50] text-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            The Toto Village Difference
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-[#E67E22] rounded-full p-2 mr-4 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p>Toto Village approaches childcare solutions as essential social and economic infrastructure, not just a private responsibility.</p>
              </div>
              <div className="flex items-start">
                <div className="bg-[#E67E22] rounded-full p-2 mr-4 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p> We partner with governments and corporations to design and scale community-embedded childcare 
                systems that are affordable, high-quality, and sustainable.</p>
                
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-[#E67E22] rounded-full p-2 mr-4 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p>Women Economic Empowerment through Training and Workforce Development for childcare economy workers.</p>
              </div>
              <div className="flex items-start">
                <div className="bg-[#E67E22] rounded-full p-2 mr-4 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p>Improving early childhood development outcomes and school preparedness.</p>
              </div>
              <div className="flex items-start">
                <div className="bg-[#E67E22] rounded-full p-2 mr-4 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p>Ensuring sustainability and growth of community based childcare centres.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {programs.map((program) => (
            <div 
              key={program.link} 
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
                  to={`/program/${program.link}`}
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