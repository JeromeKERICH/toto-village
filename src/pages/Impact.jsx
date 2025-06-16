import React, { useEffect } from 'react';
import { FaArrowRight, FaChartLine, FaUserTie, FaBabyCarriage, FaHandshake } from 'react-icons/fa';
import PartnerCloud from '../components/compo/PartnerCloud';

// Hero Component
const ImpactHero = () => (
  <div className="w-full py-16 bg-[#f8f9fa]">
    <div className="container mx-auto px-6 text-center">
      <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold mb-3 text-[#2C3E50] drop-shadow-sm text-center">
        Redefining Early Childhood <span className="text-[#FF9F1C]">Development</span> in Africa
      </h1>
      <p className="text-lg md:text-xl text-[#4a4a4a] max-w-2xl mx-auto mb-8">
        Through innovative childcare solutions, we're unlocking economic potential for families and transforming communities.
      </p>
      <button className="bg-[#FF9F1C] hover:bg-[#FFBF69] text-[#2C3E50] font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 flex items-center mx-auto group">
        See Our Impact Report 
        <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  </div>
);



// Impact Story Card
const ImpactStory = ({ image, title, excerpt, stats }) => (
  <div className="bg-white rounded-xl shadow-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">
    <div className="h-64 bg-[#2C3E50] overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
      />
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-bold mb-4 text-[#2C3E50]">{title}</h3>
      <p className="text-[#4a4a4a] mb-6">{excerpt}</p>
      
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-[#f8f9fa] p-3 rounded-lg transition-colors duration-300 hover:bg-[#FF9F1C]/10">
            <div className="text-[#FF9F1C] font-bold">{stat.value}</div>
            <div className="text-sm text-[#4a4a4a]">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Partner Logo Cloud






// Data Visualization Bar
const DataBar = ({ label, percentage }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span>{label}</span>
      <span className="font-bold">+{percentage}%</span>
    </div>
    <div className="h-3 bg-[#4a4a4a] rounded-full overflow-hidden">
      <div 
        className="h-full bg-[#FF9F1C] rounded-full transition-all duration-1000 delay-300" 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

// Full Impact Page
const Impact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
}, [])
  const impactStories = [
    {
      image: './images/story-caregivers.jpg',
      title: 'Empowering Women Through Professional Caregiving',
      excerpt: 'Our training programs transform informal workers into certified early childhood professionals with living wages.',
      stats: [
        { value: '210+', label: 'Caregivers Trained' },
        { value: '80%', label: 'Income Increase' },
        { value: '3', label: 'Certification Levels' },
        { value: '25', label: 'Training Modules' }
      ]
    },
    {
      image: './images/story-mothers.jpg',
      title: 'Enabling Mothers to Rejoin the Workforce',
      excerpt: 'Quality childcare removes the #1 barrier to women\'s economic participation in urban areas.',
      stats: [
        { value: '5,000+', label: 'Parents Working' },
        { value: '520', label: 'Mothers Empowered' },
        { value: '3x', label: 'Income Multiplier' },
        { value: '92%', label: 'Satisfaction Rate' }
      ]
    }
  ];

  return (
    <div className="overflow-hidden">
      <ImpactHero />
      
      {/* Impact At Scale */}
      <section className="py-5 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-5">
            <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold mb-3 text-[#2C3E50] drop-shadow-sm text-center">
              Our Impact by The Numbers
            </h2>
            <p className="text-x text-[#4a4a4a] mx-auto">
              Measurable outcomes that demonstrate our model's effectiveness across multiple dimensions of impact.
            </p>
          </div>
          
         
          
          <div className="grid md:grid-cols-2 gap-12">
            {impactStories.map((story, index) => (
              <ImpactStory key={index} {...story} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Data Visualization Section */}
      <section className="py-5 bg-[#2C3E50] text-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold mb-3 text-[#f8f8f8] drop-shadow-sm text-center">
                Evidence-Based Results
              </h2>
              <p className="text-xl mb-8">
                Independent evaluations confirm our model delivers measurable improvements across key indicators:
              </p>
              
              <div className="space-y-6">
                <DataBar label="Child Development Outcomes" percentage="20" />
                <DataBar label="Maternal Employment" percentage="63" />
                <DataBar label="Caregiver Income" percentage="80" />
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-2xl transition-transform duration-300 hover:-translate-y-2">
              <img 
                src="./images/data-visualization.png" 
                alt="Impact data visualization" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <PartnerCloud/>
      
      
      {/* Impact Pillars */}
      <section className="py-5 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="lg:text-5xl md:text-3xl text-3xl font-bold mb-6 text-[#2C3E50] drop-shadow-sm text-center">
            Our Impact Pillars
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaChartLine className="text-4xl text-[#FF9F1C] mb-4" />,
                title: "Economic Empowerment",
                description: "Enabling parents, especially mothers, to participate in the workforce while creating professional opportunities for caregivers."
              },
              {
                icon: <FaBabyCarriage className="text-4xl text-[#FF9F1C] mb-4" />,
                title: "Child Development",
                description: "Providing quality early childhood education that sets the foundation for lifelong learning and success."
              },
              {
                icon: <FaHandshake className="text-4xl text-[#FF9F1C] mb-4" />,
                title: "Community Transformation",
                description: "Building sustainable ecosystems where childcare becomes a catalyst for broader community development."
              }
            ].map((pillar, index) => (
              <div 
                key={index}
                className="bg-[#f8f9fa] p-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:bg-white"
              >
                <div className="text-center">
                  {pillar.icon}
                  <h3 className="text-2xl font-bold mb-4 text-[#2C3E50]">{pillar.title}</h3>
                  <p className="text-[#4a4a4a]">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;