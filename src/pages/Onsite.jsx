import React, { useEffect } from 'react';
import { FaBriefcase, FaBaby, FaUserTie, FaChartPie } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function OnSiteChildcare() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on page load
    }
    , []);
  const services = [
    {
      icon: <FaBriefcase className="text-4xl text-[#E67E22]" />,
      title: "Needs Assessment",
      description: "Comprehensive evaluation of your workforce demographics and space requirements",
      image: "assets/needs-assessment.jpg",
      alt: "Team reviewing workplace plans"
    },
    {
      icon: <FaBaby className="text-4xl text-[#5B8C5A]" />,
      title: "Custom Design",
      description: "Tailored facility layouts that meet regulatory standards and employee needs",
      image: "/assets/g8.jpg",
      alt: "Architect reviewing childcare center plans"
    },
    {
      icon: <FaUserTie className="text-4xl text-[#2C3E50]" />,
      title: "Staffing Solutions",
      description: "Recruitment and training of qualified caregivers specific to your workforce",
      image: "assets/caregiver-training.jpg",
      alt: "Caregivers in training session"
    },
    {
      icon: <FaChartPie className="text-4xl text-[#E67E22]" />,
      title: "HR Integration",
      description: "Seamless incorporation into your benefits package and company policies",
      image: "assets/hr-integration.jpg",
      alt: "HR team meeting"
    }
  ];

  return (
    <section className="bg-white text-[#2C3E50] py-8 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="lg:text-4xl md:text-3xl text-3xl font-bold mb-6 text-[#2C3E50] drop-shadow-sm">
              Childcare at Work, for a Workforce That Works
            </h1>
            <div className="bg-[#5B8C5A]/10 p-6 rounded-2xl border border-[#5B8C5A]/20 shadow-sm">
              <p className="text-lg md:text-xl">
                We help companies install and operate on-site childcare centers, supporting parents and driving productivity. We create spaces where children thrive while parents focus on their careers.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="/assets/g8.jpg" 
              alt="Modern office with childcare center" 
              className="w-full rounded-2xl object-cover h-[400px] shadow-xl border-4 border-white"
            />
          </div>
        </div>

        {/* Program Overview */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#E67E22]/10 p-8 rounded-2xl border border-[#E67E22]/20 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                 The Workplace Challenge
              </h3>
              <p className="text-lg">
                Modern workplaces demand modern solutions. With more women in the workforce than ever before, organizations must adapt or lose talent.
              </p>
            </div>
            
            <div className="bg-[#5B8C5A]/10 p-8 rounded-2xl border border-[#5B8C5A]/20 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                 Our Corporate Solution
              </h3>
              <p className="text-lg">
                We install and manage fully functional, high-quality childcare centers within office parks and company compounds keeping parents productive while their children thrive nearby.
              </p>
            </div>
          </div>

          <h2 className="md:text-3xl text-2xl font-bold mb-6 text-[#2C3E50] drop-shadow-sm text-center">Our Comprehensive Services</h2>
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
            End-to-end solutions tailored to your organizational needs
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2C3E50]/10">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/70 to-transparent"></div>
                </div>
                <div className="p-6 bg-white">
                  
                  <h3 className="text-xl font-bold mb-3 text-center">{service.title}</h3>
                  <p className="text-[#2C3E50]/90 text-center">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="md:text-3xl text-2xl font-bold mb-8 text-[#2C3E50] drop-shadow-sm text-center">Proven Workplace Results</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#E67E22]/10 p-8 rounded-2xl border border-[#E67E22]/20 shadow-sm relative">
              
              <p className="text-lg italic mb-4">"Our female staff no longer have to choose between parenting and a paycheck. Retention rates improved by 30% in the first year."</p>
              <div className="flex items-center gap-4">
                <img 
                  src="assets/hr-manager.jpg" 
                  alt="HR Manager" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#E67E22]"
                />
                <div>
                  <p className="font-bold">James Mwangi</p>
                  <p className="text-sm">HR Manager, Prime Logistics</p>
                </div>
              </div>
            </div>
            <div className="bg-[#5B8C5A]/10 p-8 rounded-2xl border border-[#5B8C5A]/20 shadow-sm relative">
              
              <p className="text-lg italic mb-4">"I hear my son giggling two floors down—it gives me peace of mind and makes me love my job more. My productivity has doubled."</p>
              <div className="flex items-center gap-4">
                <img 
                  src="assets/esther-profile.jpg" 
                  alt="Esther" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#5B8C5A]"
                />
                <div>
                  <p className="font-bold">Esther Naliaka</p>
                  <p className="text-sm">Admin Assistant, Tech Solutions Ltd</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative bg-[#2C3E50] p-1 border rounded-lg">
          <div className="bg-white rounded-xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Want to retain top talent and support your working parents?</h3>
            <p className="text-[#4a4a4a] mb-6 max-w-2xl mx-auto text-lg">
              Discover how on-site childcare can transform your workplace culture and bottom line.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-[#E67E22] text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
              >
                Talk to Us Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}