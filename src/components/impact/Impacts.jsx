import React from 'react';

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

const ImpactStories = () => {
  const impactStories = [
    {
      image: '/assets/t1.JPG',
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
      image: "/assets/tr4.JPG",
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
    <section className="py-5 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
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
  );
};

export default ImpactStories;