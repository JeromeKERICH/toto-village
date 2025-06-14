import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PartnershipProgram() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }
  , []);
  const partnershipModels = [
    {
      title: "Facility Development",
     
      description: "End-to-end solutions from site identification to construction of purpose-built childcare facilities in high-need locations.",
      image: "assets/facility-development.jpg",
      alt: "New childcare center construction"
    },
    {
      title: "Center Renovation",
      
      description: "Transforming existing underutilized spaces into vibrant, safe learning environments for children.",
      image: "assets/center-renovation.jpg",
      alt: "Renovated childcare space"
    },
    {
      title: "Caregiver Training",
     
      description: "Comprehensive training programs that equip local women with professional childcare skills and ECD certification.",
      image: "assets/caregiver-training.jpg",
      alt: "Caregivers in training session"
    },
    {
      title: "Ongoing Management",
      description: "Long-term operational support including quality assurance, curriculum development, and community engagement.",
      image: "assets/management-support.jpg",
      alt: "Team reviewing center operations"
    }
  ];

  return (
    <section className="bg-white text-[#2C3E50] py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-[#2C3E50] drop-shadow-sm mb-6">
              Bringing Childcare to the Heart of Local Economies
            </h1>
            <div className="bg-[#5B8C5A]/10 p-6 rounded-2xl border border-[#5B8C5A]/20 shadow-sm">
              <p className="text-lg md:text-xl">
                We partner with local governments to identify, upgrade, and manage childcare centers where they matter most, markets, transport hubs, and underserved communities.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="/assets/g2.jpg" 
              alt="Busy market with childcare center entrance" 
              className="w-full rounded-2xl object-cover h-[400px] shadow-xl border-4 border-white"
            />
          </div>
        </div>

        {/* Partnership Models */}
        <div className="mb-16">
          <h2 className="md:text-3xl text-2xl font-bold text-[#2C3E50] drop-shadow-sm mb-6 text-center">Our Partnership Models</h2>
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
            Custom solutions designed to meet community needs while ensuring sustainability and quality standards
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipModels.map((model, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2C3E50]/10">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={model.image} 
                    alt={model.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/70 to-transparent"></div>
                </div>
                <div className="p-6 bg-white">
                  
                  <h3 className="text-xl font-bold mb-3 text-center">{model.title}</h3>
                  <p className="text-[#2C3E50]/90 text-center">{model.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="md:text-3xl text-2xl font-bold text-[#2C3E50] drop-shadow-sm mb-6 text-center">Community Voices</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#E67E22]/10 p-8 rounded-2xl border border-[#E67E22]/20 shadow-sm relative">
             
              <p className="text-lg italic mb-4">"Before the center, I had to lock my daughter in a room while I went to work. Now she learns, eats, and even teaches me new songs!"</p>
              <div className="flex items-center gap-4">
                <img 
                  src="assets/asha-profile.jpg" 
                  alt="Asha" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#E67E22]"
                />
                <div>
                  <p className="font-bold">Asha Mwamba</p>
                  <p className="text-sm">Vendor at Nakuru Market</p>
                </div>
              </div>
            </div>
            <div className="bg-[#5B8C5A]/10 p-8 rounded-2xl border border-[#5B8C5A]/20 shadow-sm relative">
              
              <p className="text-lg italic mb-4">"Partnering with Toto Village has helped us deliver real services where our people need them most. The centers have transformed market areas."</p>
              <div className="flex items-center gap-4">
                <img 
                  src="assets/governor-profile.jpg" 
                  alt="Governor" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#5B8C5A]"
                />
                <div>
                  <p className="font-bold">County Rep</p>
                  <p className="text-sm">Nakuru County Government</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative bg-[#2C3E50] p-1 border rounded-lg">
          <div className="bg-white rounded-xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Bring Quality Childcare to Your Community?</h3>
            <p className="text-[#4a4a4a] mb-6 max-w-2xl mx-auto text-lg">
              Whether you're a government official, market association, or community leader, we can build the perfect solution together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-[#E67E22] text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
              >
                Book a Partnership Consultation
                
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}