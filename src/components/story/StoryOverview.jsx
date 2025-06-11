import { Lightbulb, Heart, Sparkles } from 'lucide-react';

const StoryOverview = () => {
  return (
    <section className="bg-white py-[20px] md:py-[2%] px-[20px] md:px-[8%] text-[#2C3E50]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold mb-3 text-[#2C3E50] drop-shadow-sm text-center">
         HOW IT ALL STARTED
        </h2>
        <p className="text-lg text-[#4a4a4a] leading-relaxed">
          Born from a spark of compassion and the desire to create something truly meaningful,
          our journey began with a simple mission: to serve with heart, empower with wisdom,
          and inspire with intention. We're not just building a platform; we're nurturing a movement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Inception Card */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group border border-transparent hover:border-[#5B8C5A]/20">
          <div className="bg-[#F5E6CA] p-3 rounded-full w-max mb-6">
            <Lightbulb className="w-8 h-8 text-[#E67E22]" />
          </div>
          <h3 className="text-xl font-bold text-[#2C3E50] mb-3 group-hover:text-[#5B8C5A] transition-colors">
            Inception
          </h3>
          <p className="text-[#4a4a4a]">
            It all started with a simple idea to make a difference in the lives of those around us.
          </p>
        </div>

        {/* Compassion Card */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group border border-transparent hover:border-[#5B8C5A]/20">
          <div className="bg-[#F5E6CA] p-3 rounded-full w-max mb-6">
            <Heart className="w-8 h-8 text-[#E67E22]" />
          </div>
          <h3 className="text-xl font-bold text-[#2C3E50] mb-3 group-hover:text-[#5B8C5A] transition-colors">
            Compassion
          </h3>
          <p className="text-[#4a4a4a]">
            Driven by empathy, we set out to create a space where everyone feels valued and supported.
          </p>
        </div>

        {/* Empowerment Card */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group border border-transparent hover:border-[#5B8C5A]/20">
          <div className="bg-[#F5E6CA] p-3 rounded-full w-max mb-6">
            <Sparkles className="w-8 h-8 text-[#E67E22]" />
          </div>
          <h3 className="text-xl font-bold text-[#2C3E50] mb-3 group-hover:text-[#5B8C5A] transition-colors">
            Empowerment
          </h3>
          <p className="text-[#4a4a4a]">
            Our goal is to empower individuals and communities to thrive through innovation and collaboration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StoryOverview;