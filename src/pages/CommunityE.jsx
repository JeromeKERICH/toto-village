import React, { useEffect } from 'react';
import { FaHandshake, FaUsers, FaChalkboardTeacher, FaChild, FaBuilding, FaUserTie, FaHome, FaUser, FaUserSecret, FaChartArea } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Community() {

    useEffect(() => {
        window.scrollTo(0, 0);

    }, []);
    
  // Core Community Groups
  const stakeholderGroups = [
    {
      category: "Caregivers",
      icon: <FaChalkboardTeacher className="text-4xl text-[#2980B9]" />,
      description: "Our trained professionals providing quality childcare services",
      link: "/community/caregivers",
      highlights: [
        "Rigorous training program",
        "Ongoing professional development",
        "Competitive compensation",
        "Career growth opportunities"
      ]
    },
    {
      category: "Government Partners",
      icon: <FaBuilding className="text-4xl text-[#2980B9]" />,
      description: "County governments collaborating on childcare infrastructure",
      link: "/partners/government",
      highlights: [
        "Policy development",
        "Public space utilization",
        "Subsidy programs",
        "Regulatory support"
      ]
    },
    {
      category: "Corporate Partners",
      icon: <FaUserTie className="text-4xl text-[#2980B9]" />,
      description: "Businesses investing in workforce childcare solutions",
      link: "/partners/corporate",
      highlights: [
        "Workplace childcare",
        "Employee benefits programs",
        "CSR initiatives",
        "Productivity partnerships"
      ]
    },
    {
      category: "Community Hosts",
      icon: <FaHome className="text-4xl text-[#2980B9]" />,
      description: "Local centers housing our childcare operations",
      link: "/community/hosts",
      highlights: [
        "Market associations",
        "Religious institutions",
        "Residential complexes",
        "Community centers"
      ]
    },
    {
      category: "Parent Community",
      icon: <FaChild className="text-4xl text-[#2980B9]" />,
      description: "Families benefiting from our childcare services",
      link: "/community/parents",
      highlights: [
        "Working parents",
        "Single mothers",
        "Low-income families",
        "Parent support networks"
      ]
    }
  ];

  

  // Caregiver Spotlight
  const caregiverSpotlight = {
    name: "Margaret Wanjiku",
    role: "Lead Caregiver",
    location: "Kawangware Center, Nairobi",
    quote: "Through Toto Village's training, I've transformed from a househelp to a professional caregiver earning a living wage while nurturing future generations.",
    stats: [
      "3 years with Toto Village",
      "Certified in ECDE",
      "Mentored 12 new caregivers"
    ]
  };

  return (
    <section className="py-12 px-4 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold mb-3 text-[#2C3E50] drop-shadow-sm text-center">
            The Toto Village Ecosystem
          </h1>
          <p className="text-xl max-w-4xl mx-auto text-[#4a4a4a] mb-8">
            A network of caregivers, partners, and communities working together to transform childcare in Kenya
          </p>
          <div className="bg-[#2C3E50] text-white p-6 rounded-xl shadow-lg max-w-4xl mx-auto">
            <p className="text-lg md:text-xl">
              "Our strength comes from the dedicated caregivers who form the heart of our centers, and the partners who make this work possible."
            </p>
          </div>
        </div>

        

        {/* Caregiver Spotlight */}
        <div className="mb-20 bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] p-8 rounded-xl">
          <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold mb-3 text-[#2C3E50] drop-shadow-sm text-center">
            Caregiver Spotlight
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-white p-2 rounded-full shadow-lg">
                <div className="w-40 h-40 bg-gray-300 rounded-full overflow-hidden">
                  {/* Placeholder for caregiver image */}
                  <div className="w-full h-full bg-[#E67E22] opacity-30"></div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="lg:text-2xl text-2xl font-bold mb-3 text-[#2C3E50] drop-shadow-sm text-center">{caregiverSpotlight.name}</h3>
              <p className="text-[#E67E22] font-medium mb-4">{caregiverSpotlight.role} | {caregiverSpotlight.location}</p>
              <p className="text-lg italic mb-6 text-[#4a4a4a]">"{caregiverSpotlight.quote}"</p>
              <div className="flex flex-wrap gap-4">
                {caregiverSpotlight.stats.map((stat, index) => (
                  <div key={index} className="bg-white px-4 py-2 rounded-lg shadow-sm">
                    <p className="text-sm text-[#2C3E50]">{stat}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/community/caregivers"
                className="inline-flex items-center mt-6 font-bold text-[#E67E22] hover:text-[#D35400] border-b-2 border-[#E67E22] pb-1 transition-colors"
              >
                Meet more caregivers
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Stakeholder Groups */}
        <div className="mb-20">
          <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold mb-10 text-[#2C3E50] drop-shadow-sm text-center">
            Our Community Members
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stakeholderGroups.map((group, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="mb-4">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#2C3E50]">{group.category}</h3>
                <p className="mb-4 text-[#4a4a4a]">{group.description}</p>
                <ul className="mb-6 pl-5 space-y-2">
                  {group.highlights.map((highlight, i) => (
                    <li key={i} className="relative before:content-['•'] before:absolute before:-left-5 before:text-[#E67E22] text-[#4a4a4a]">
                      {highlight}
                    </li>
                  ))}
                </ul>
                <Link
                  to={group.link}
                  className="inline-flex items-center font-bold text-[#E67E22] hover:text-[#D35400] transition-colors"
                >
                  Explore {group.category}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            ))}
            <div className="bg-[#E67E22] text-white p-6 rounded-xl shadow-lg">
              <h3 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-3 text-white drop-shadow-sm text-center">Join Our Community</h3>
              <p className="mb-6 opacity-90">
                Whether you want to become a caregiver, partner with us, or host a center, we're always looking to grow our network.
              </p>
              <Link
                to="/get-involved"
                className="inline-flex items-center font-bold bg-white text-[#E67E22] px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Involved
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Partnership Benefits Section */}
        <div className="mb-20 bg-[#2C3E50] text-white p-8 rounded-xl">
          <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold mb-10 text-white text-bold drop-shadow-sm text-center">Why Partner With Toto Village?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <FaHandshake className="mr-3 text-[#E67E22]" />
                For Governments
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#E67E22] mr-2">✓</span>
                  Achieve SDG targets on gender equality and education
                </li>
                <li className="flex items-start">
                  <span className="text-[#E67E22] mr-2">✓</span>
                  Boost local economic activity
                </li>
                <li className="flex items-start">
                  <span className="text-[#E67E22] mr-2">✓</span>
                  Improve early childhood development metrics
                </li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <FaBuilding className="mr-3 text-[#E67E22]" />
                For Corporations
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#E67E22] mr-2">✓</span>
                  Increase employee productivity and retention
                </li>
                <li className="flex items-start">
                  <span className="text-[#E67E22] mr-2">✓</span>
                  Enhance your ESG profile
                </li>
                <li className="flex items-start">
                  <span className="text-[#E67E22] mr-2">✓</span>
                  Support women in the workforce
                </li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <FaUsers className="mr-3 text-[#E67E22]" />
                For Caregivers
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#E67E22] mr-2">✓</span>
                  Professional training and certification
                </li>
                <li className="flex items-start">
                  <span className="text-[#E67E22] mr-2">✓</span>
                  Stable employment opportunities
                </li>
                <li className="flex items-start">
                  <span className="text-[#E67E22] mr-2">✓</span>
                  Career advancement pathways
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* New Impact Highlights Section */}
        

      </div>
    </section>
  );
}