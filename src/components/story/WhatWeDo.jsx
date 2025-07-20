import { Home, Users, Heart, BookOpen } from 'lucide-react';

const WhatWeDo = () => {
  return (
    <section className="bg-[#F9F9F9] py-5 px-6 md:px-12 md:px-15">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-2">
            <span className="text-[#E67E22]">What </span> We Do
          </h2>
          <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto">
            We create accessible childcare solutions that fit into the daily lives of working families.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-[#FFE8D6]">
            
            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">Toto Village Centers</h3>
            <p className="text-[#4a4a4a]">
              Safe, nurturing spaces in local communities with flexible hours for working parents.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-[#FFE8D6]">
           
            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">Workplace Programs</h3>
            <p className="text-[#4a4a4a]">
              On-site childcare solutions that help employees focus while their children thrive. 
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-[#FFE8D6]">
           
            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">Community Hubs</h3>
            <p className="text-[#4a4a4a]">
              Childcare integrated into markets and transport centers where parents need it most.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-[#FFE8D6]">
            
            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">Early Learning</h3>
            <p className="text-[#4a4a4a]">
              Play-based curriculum that prepares children for school while they have fun.
            </p>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-[#2C3E50] text-white p-6 rounded-xl shadow-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm">Childcare Centers</p>
            </div>
            <div>
              <p className="text-3xl font-bold">1,000+</p>
              <p className="text-sm">Children Served</p>
            </div>
            <div>
              <p className="text-3xl font-bold">89%</p>
              <p className="text-sm">Parent Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-sm">Extended Hours Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;