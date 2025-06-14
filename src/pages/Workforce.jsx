import React, { useEffect } from 'react';
import { FaGraduationCap, FaHandsHelping, FaChartLine, FaUserGraduate } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function WorkforceDevelopment() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on page load

    }, []);
  const trainingModules = [
    {
      icon: <FaGraduationCap className="text-4xl text-[#E67E22]" />,
      title: "Early Childhood Development",
      description: "Comprehensive ECD training covering cognitive, social, and physical development milestones",
      image: "assets/ecd-training.jpg",
      alt: "Caregivers learning child development techniques"
    },
    {
      icon: <FaHandsHelping className="text-4xl text-[#5B8C5A]" />,
      title: "Health & Safety",
      description: "Certification in pediatric first aid, hygiene protocols, and emergency preparedness",
      image: "assets/health.jpg",
      alt: "Caregiver practicing first aid techniques"
    },
    {
      icon: <FaUserGraduate className="text-4xl text-[#2C3E50]" />,
      title: "Nutrition & Meals",
      description: "Planning balanced meals and addressing childhood malnutrition challenges",
      image: "assets/nutrition-training.jpg",
      alt: "Caregivers preparing healthy meals"
    },
    {
      icon: <FaChartLine className="text-4xl text-[#E67E22]" />,
      title: "Business Skills",
      description: "Entrepreneurship training including budgeting, marketing, and operations",
      image: "assets/business-training.jpg",
      alt: "Women learning business skills"
    }
  ];

  return (
    <section className="bg-white text-[#2C3E50] py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold mb-6 text-[#2C3E50] drop-shadow-sm">
              Training of Caregivers & Childcare Entrepreneurs
            </h1>
            <div className="bg-[#5B8C5A]/10 p-6 rounded-2xl border border-[#5B8C5A]/20 shadow-sm">
              <p className="text-lg md:text-xl">
                We recruit, train, and certify local women in early childhood development and small business skills. Our program transforms them into professional caregivers and childcare entrepreneurs, creating a sustainable workforce that uplifts entire communities.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="/assets/h2.jpg" 
              alt="Group of women in training session" 
              className="w-full rounded-2xl object-cover h-[400px] shadow-xl border-4 border-white"
            />
          </div>
        </div>

        {/* Program Overview */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#E67E22]/10 p-8 rounded-2xl border border-[#E67E22]/20 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                 The Workforce Challenge
              </h3>
              <p className="text-lg">
                Most caregivers in low-income areas are undertrained, underpaid, and undervalued limiting both their potential and children's outcomes.
              </p>
            </div>
            
            <div className="bg-[#5B8C5A]/10 p-8 rounded-2xl border border-[#5B8C5A]/20 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                 Our Transformation Program
              </h3>
              <p className="text-lg">
                We identify local women and equip them with professional skills creating certified caregivers and entrepreneurs who transform communities from within.
              </p>
            </div>
          </div>

          <h2 className="md:text-3xl text-2xl font-bold mb-8 text-center text-[#2C3E50] drop-shadow-sm">Our Comprehensive Training Curriculum</h2>
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
            Holistic development for professional caregivers and childcare entrepreneurs
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingModules.map((module, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2C3E50]/10">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={module.image} 
                    alt={module.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/70 to-transparent"></div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold mb-3 text-center">{module.title}</h3>
                  <p className="text-[#2C3E50]/90 text-center">{module.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Graduate Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#E67E22]/10 p-8 rounded-2xl border border-[#E67E22]/20 shadow-sm relative">
              
              <p className="text-lg italic mb-4">"Before this, I had no formal skills. Now, I run a childcare business supporting 15 families and my kids never go to bed hungry."</p>
              <div className="flex items-center gap-4">
                <img 
                  src="assets/josephine-profile.jpg" 
                  alt="Josephine" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#E67E22]"
                />
                <div>
                  <p className="font-bold">Josephine Atieno</p>
                  <p className="text-sm">Caregiver Graduate & Business Owner</p>
                </div>
              </div>
            </div>
            <div className="bg-[#5B8C5A]/10 p-8 rounded-2xl border border-[#5B8C5A]/20 shadow-sm relative">
              
              <p className="text-lg italic mb-4">"This training changed not only my job prospects, but how I raise my own children. I'm now a lead caregiver at a center supporting 30 kids."</p>
              <div className="flex items-center gap-4">
                <img 
                  src="assets/agnes-profile.jpg" 
                  alt="Agnes" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#5B8C5A]"
                />
                <div>
                  <p className="font-bold">Agnes Wambui</p>
                  <p className="text-sm">Mother of 3 & Certified Caregiver</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative bg-[#2C3E50] p-1 border rounded-lg">
          <div className="bg-white rounded-xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Looking to empower women while strengthening early childhood education?</h3>
            <p className="text-[#4a4a4a] mb-6 max-w-2xl mx-auto text-lg">
              Partner with us to train caregivers who will transform their communities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-[#E67E22] text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
              >
                Partner with Us
                
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}