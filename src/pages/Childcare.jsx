import React, { useEffect } from 'react';
import { FaHandshake, FaBuilding, FaUsers, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function PartnershipProgram() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);

  const partnershipModels = [
    {
      icon: <FaHandshake className="text-4xl text-[#E67E22]" />,
      title: "County Partnerships",
      description: "Collaborating with local governments to establish childcare hubs in high-traffic economic zones",
      image: "assets/county-partnership.jpg",
      alt: "Government officials signing agreement"
    },
    {
      icon: <FaBuilding className="text-4xl text-[#5B8C5A]" />,
      title: "Facility Identification",
      description: "Assessing and selecting optimal locations in markets, transport hubs and commercial centers",
      image: "assets/location-assessment.jpg",
      alt: "Team evaluating potential site"
    },
    {
      icon: <FaUsers className="text-4xl text-[#2C3E50]" />,
      title: "Community Engagement",
      description: "Working with local stakeholders to ensure solutions meet actual community needs",
      image: "assets/community-meeting.jpg",
      alt: "Community members in discussion"
    },
    {
      icon: <FaChartLine className="text-4xl text-[#E67E22]" />,
      title: "Sustainable Operations",
      description: "Developing financially viable models that keep care affordable while maintaining quality",
      image: "assets/sustainable-model.jpg",
      alt: "Financial planning session"
    }
  ];

  return (
    <section className="bg-white text-[#2C3E50] py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-[#2C3E50] drop-shadow-sm mb-6">
              Partnerships for Affordable Childcare
            </h1>
            <div className="bg-[#5B8C5A]/10 p-6 rounded-2xl border border-[#5B8C5A]/20 shadow-sm">
              <p className="text-lg md:text-xl">
                We work with counties to identify, upgrade, and manage childcare facilities in busy economic areas, 
                enabling working parents to thrive while their children receive quality care.
              </p>
            </div>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-2">
                <span className="text-[#5B8C5A] font-bold">✓</span>
                <span>Strategic locations in high-need commercial areas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#5B8C5A] font-bold">✓</span>
                <span>Public-private partnership models</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#5B8C5A] font-bold">✓</span>
                <span>Community-driven solutions</span>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="/assets/m2.jpg" 
              alt="Childcare center in busy market area" 
              className="w-full rounded-2xl object-cover h-[400px] shadow-xl border-4 border-white"
            />
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="mb-16 bg-[#F8F9FA] p-8 rounded-2xl">
          <h2 className="md:text-3xl text-2xl font-bold mb-8 text-[#2C3E50] text-center">
            Transforming Communities Through Childcare
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-[#E67E22] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">85%</div>
              <p>Reduction in children left unattended in market areas</p>
            </div>
            <div className="text-center">
              <div className="bg-[#5B8C5A] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2.5x</div>
              <p>Increase in vendor productivity with childcare support</p>
            </div>
            <div className="text-center">
              <div className="bg-[#2C3E50] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">40+</div>
              <p>Communities served through county partnerships</p>
            </div>
          </div>
        </div>

        {/* Partnership Models */}
        <div className="mb-16">
          <h2 className="md:text-3xl text-2xl font-bold text-[#2C3E50] drop-shadow-sm mb-6 text-center">
            Our Collaborative Approach
          </h2>
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
            Flexible partnership models tailored to local needs and resources
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipModels.map((model, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2C3E50]/10">
                <div className="p-6 bg-white">
                  <div className="flex justify-center mb-4">
                    {model.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">{model.title}</h3>
                  <p className="text-[#2C3E50]/90 text-center">{model.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h2 className="md:text-3xl text-2xl font-bold text-[#2C3E50] drop-shadow-sm mb-8 text-center">
            Partnership Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#E67E22]/10 p-8 rounded-2xl border border-[#E67E22]/20 shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-[#E67E22] text-white p-3 rounded-lg mr-4">
                  <FaBuilding className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Nakuru Market Transformation</h3>
                  <p className="text-sm text-[#2C3E50]/80">Established 3 centers serving 200+ vendors daily</p>
                </div>
              </div>
              <p className="text-lg mb-4">
                "Our partnership has created safe spaces for children while their parents work, significantly improving market cleanliness and security."
              </p>
              <p className="font-bold">Nakuru County Markets CEC</p>
            </div>
            <div className="bg-[#5B8C5A]/10 p-8 rounded-2xl border border-[#5B8C5A]/20 shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-[#5B8C5A] text-white p-3 rounded-lg mr-4">
                  <FaUsers className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Uthabiti Africa</h3>
                  <p className="text-sm text-[#2C3E50]/80">Women in childcare</p>
                </div>
              </div>
              <p className="text-lg mb-4">
                "The childcare center at our stage has reduced absenteeism among women workers by over 60% and created 15 new jobs."
              </p>
              <p className="font-bold">Uthabiti Africa</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-r from-[#5B8C5A] to-[#2C3E50] p-1 rounded-2xl">
          <div className="bg-white rounded-xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Partner With Us to Expand Affordable Childcare</h3>
            <p className="text-[#4a4a4a] mb-6 max-w-2xl mx-auto text-lg">
              Whether you're a county government, market association, or community organization, let's work together to support working families.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-[#E67E22] text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all duration-300"
              >
                Start a Conversation
              </Link>
              <Link 
                to="/partnership-models" 
                className="bg-white text-[#2C3E50] px-8 py-4 rounded-lg font-bold border border-[#2C3E50] hover:bg-[#2C3E50] hover:text-white transition-all duration-300"
              >
                View Partnership Options
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}