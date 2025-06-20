import React from 'react';

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

const DataVisualization = () => (
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
            src="/assets/b1.jpg" 
            alt="Impact data visualization" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  </section>
);

export default DataVisualization;