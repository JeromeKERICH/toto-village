import PartnershipModal from '../components/partners/PartnershipModal';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const AboutPartners = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
    
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const partnershipTypes = [
    {
      title: "Donors & Funders",
      description: "Our donors and funders provide the financial resources that make our programs possible. Your contributions help us scale our impact and reach more communities in need.",
      benefits: [
        "Tax-deductible donations",
        "Regular impact reports",
        "Recognition in our annual report",
        "Opportunities to designate funds to specific programs"
      ]
    },
    {
      title: "Government institutions",
      description: "We collaborate with county governments to align our efforts with local priorities and ensure sustainable impact through policy support and resource sharing.",
      benefits: [
        "Data sharing for better decision making",
        "Joint program implementation",
        "Capacity building for local staff",
        "Advocacy support for community needs"
      ]
    },
    {
      title: "Private Sectors",
      description: "Businesses partner with us through financial support, employee volunteering, and in-kind donations to create shared value for communities and their organizations.",
      benefits: [
        "Employee engagement opportunities",
        "CSR fulfillment with measurable impact",
        "Brand association with positive change",
        "Customized partnership packages"
      ]
    },
    {
      title: "Individual Partners",
      description: "Individuals contribute through volunteering, fundraising, or monthly donations to support our mission and create personal connections with our work.",
      benefits: [
        "Volunteer opportunities",
        "Exclusive updates and events",
        "Personalized impact reports",
        "Recognition in our community"
      ]
    }
  ];

  return (
    <div className="px-[5%] py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        

        <h1 className="text-3xl md:text-4xl text-center font-bold mb-4 text-[#E67E22]">
          Our Partnership Models
        </h1>
        <p className="text-xl text-[#4a4a4a] mb-12 text-center max-w-6xl">
          We work with diverse partners who share our vision for community transformation. Each partnership is tailored to maximize impact and create mutual value.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {partnershipTypes.map((type, index) => (
            <div key={index} className="bg-[#f6f4f1] p-8 rounded-lg hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold mb-4 text-[#2b2b2b]">{type.title}</h2>
              <p className="mb-4 text-[#4a4a4a]">{type.description}</p>
              
              <h3 className="font-semibold mb-2 text-[#2b2b2b]">Partnership Benefits:</h3>
              <ul className="space-y-2">
                {type.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#ff4848] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#2b2b2b]">
            Ready to partner with us?
          </h2>
          <button
            className="bg-[#E67E22] text-white px-8 py-4 rounded-full hover:bg-[#e03e3e] transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            onClick={() => setOpen(true)}
          >
            Become a Partner
          </button>
        </div>
        {open && <PartnershipModal setOpen={setOpen} />}
      </div>

      
    </div>
  );
};

export default AboutPartners;