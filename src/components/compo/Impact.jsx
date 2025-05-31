import CountUp from 'react-countup';
import { Users, Smile, Handshake, Utensils, BookOpen, Home } from 'lucide-react';

export default function TheChangeSoFar() {
  const stats = [
    { 
      icon: <Utensils size={40} className="text-[#f4cc15]" />,
      value: 1200, 
      label: 'Meals Shared', 
      description: '...because no child should sleep hungry'
    },
    { 
      icon: <BookOpen size={40} className="text-[#f4cc15]" />,
      value: 450, 
      label: 'Kids Educated', 
      description: '...each step rewriting a future'
    },
    { 
      icon: <Home size={40} className="text-[#f4cc15]" />,
      value: 180, 
      label: 'Families Reached', 
      description: '...finding dignity and a reason to smile again'
    }
  ];

  return (
    <section className="bg-[#f6f4f1] py-[20px] md:py-[2%] px-[20px] md:px-[8%] text-[#2b2b2b]">
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          The <span className="text-[#ff4848]">Change</span> So Far
        </h2>
        <p className="text-lg md:text-xl text-[#4a4a4a]">
          Behind every number is a story of a child, a mother, or a family finding hope again. These are more than stats,
          they're lives transformed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-[#f6f4f1] hover:border-[#ff4848]/20"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-[#fff7ec] p-4 rounded-full group-hover:bg-[#ff4848]/10 transition-colors">
                {stat.icon}
              </div>
            </div>
            <h3 className="text-4xl font-bold text-center text-[#ff4848] mb-2">
              <CountUp 
                end={stat.value} 
                duration={2.5}
                separator=","
                suffix="+"
              />
            </h3>
            <p className="text-center text-xl font-semibold text-[#2b2b2b] mb-3">
              {stat.label}
            </p>
            <p className="text-center text-[#4a4a4a] italic">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}