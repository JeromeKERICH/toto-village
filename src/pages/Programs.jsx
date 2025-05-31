import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChild, FaHandsHelping, FaSchool, FaLeaf } from "react-icons/fa";

const programs = [
  {
    title: "On-site Childcare Centers",
    icon: <FaChild size={36} />,
    description:
      "Safe, affordable childcare centers located in everyday public spaces like markets and transport hubs.",
  },
  {
    title: "Caregiver Training",
    icon: <FaHandsHelping size={36} />,
    description:
      "We provide training and dignity to caregivers, equipping them with skills, purpose, and income.",
  },
  {
    title: "Early Childhood Development (ECD)",
    icon: <FaSchool size={36} />,
    description:
      "Children are nurtured during their most formative years, setting a strong foundation for lifelong growth.",
  },
  {
    title: "Community Engagement",
    icon: <FaLeaf size={36} />,
    description:
      "We bring childcare into the heart of communities, where care becomes visible, valued, and accessible.",
  },
  {
    title: "Weekend Enrichment Activities",
    icon: <FaChild size={36} />,
    description:
      "Fun, hands-on weekend programs for both parents and children to bond and grow together.",
  },
  {
    title: "Parent Support Circles",
    icon: <FaHandsHelping size={36} />,
    description:
      "Safe, guided spaces for parents to connect, learn, and share experiences around caregiving.",
  },
];

const ProgramsPage = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div className="py-12 px-[4%] sm:px-[10%] bg-[#f6f4f1]">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-[#2b2b2b]">Our Programs</h1>
        <p className="text-[#4a4a4a] max-w-2xl mx-auto">
          Discover how we're transforming childcare through innovative, community-centered solutions.
        </p>
      </div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {programs.map((program, index) => (
          <div
            key={index}
            className={`group bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-l-4 ${
              index % 4 === 0 || index % 4 === 3
                ? "border-[#ff4848] hover:bg-[#fff0f0]"
                : "border-[#f4cc15] hover:bg-[#fff8e6]"
            }`}
          >
            <div
              className={`mb-6 p-4 rounded-full w-max ${
                index % 4 === 0 || index % 4 === 3
                  ? "bg-[#ff4848]/10 text-[#ff4848]"
                  : "bg-[#f4cc15]/10 text-[#f4cc15]"
              }`}
            >
              {program.icon}
            </div>
            <h2 className="text-xl font-semibold mb-3 text-[#2b2b2b] group-hover:text-[#ff4848] transition-colors">
              {program.title}
            </h2>
            <p className="text-[#4a4a4a]">{program.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-20 bg-white p-10 rounded-xl text-center max-w-4xl mx-auto shadow-sm border border-[#f6f4f1]">
        <h2 className="text-2xl font-bold mb-4 text-[#2b2b2b]">
          Want to make a lasting impact?
        </h2>
        <p className="mb-6 text-[#4a4a4a] max-w-xl mx-auto">
          Join us in transforming childcare into essential infrastructure.
          Whether you're a donor, volunteer, or government partner — your
          support creates generational change.
        </p>
        <Link to="/partners">
          <button className="bg-[#ff4848] text-white px-8 py-3 rounded-full hover:bg-[#e03e3e] transition-all font-medium shadow-md hover:shadow-lg">
            Partner With Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProgramsPage;