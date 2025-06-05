import React from 'react';
import { FaBookReader, FaHandsHelping, FaChild } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Programs() {
  const programs = [
    {
      icon: <FaBookReader className="text-4xl text-[#E67E22] group-hover:text-white transition-colors" />,
      title: "Early Childhood Learning",
      description: "Structured and play-based learning experiences to help children thrive emotionally and intellectually.",
    },
    {
      icon: <FaHandsHelping className="text-4xl text-[#E67E22] group-hover:text-white transition-colors" />,
      title: "Parent Support Circles",
      description: "Safe, guided spaces for parents to connect, learn, and share experiences around caregiving.",
    },
    {
      icon: <FaChild className="text-4xl text-[#E67E22] group-hover:text-white transition-colors" />,
      title: "Weekend Enrichment Activities",
      description: "Fun, hands-on weekend programs for both parents and children to bond and grow together.",
    },
  ];

  return (
    <section className="bg-[#f6f6f6] py-[20px] md:py-[2%] px-[20px] md:px-[8%] text-[#2C3E50]">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Our <span className="text-[#E67E22]">Programs</span>
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-[#4a4a4a]">
          We walk with families, offering practical tools, heartfelt connection, and opportunities to grow together.
        </p>
      </div>

      {/* Program Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {programs.map((program, index) => (
          <div 
            key={index} 
            className="group bg-white rounded-xl p-8 text-left hover:shadow-lg transition-all duration-300 hover:bg-[#5B8C5A]"
          >
            <div className="mb-6 bg-[#F5E6CA] p-4 rounded-full w-max group-hover:bg-[#4a7a48] transition-colors">
              {program.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-white">{program.title}</h3>
            <p className="text-[#4a4a4a] group-hover:text-white/90">{program.description}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <Link
          to="/programs"
          className="inline-block bg-[#E67E22] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#4a7a48] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          Explore All Programs →
        </Link>
      </div>
    </section>
  );
}