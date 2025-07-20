import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-[#2C3E50] text-white py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Content */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            <span className="text-[#E67E22]">We Provide Quality Childcare</span>
            <span className="block mt-3">For Working Families</span>
          </h1>
          <p className="text-lg text-white leading-relaxed">
            Affordable, community-based solutions that empower parents and nurture children's potential.
          </p>
          <div className="flex flex-row gap-2">
            <Link
              to="/locations"
              className="flex items-center gap-2 bg-[#E67E22] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#D46B1A] transition-all shadow-md"
            >
              Find a Center
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-2 border border-[#E67E22] text-[#E67E22] px-6 py-3 rounded-lg font-medium hover:bg-[#FFF0E5] transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2">
          <div className="relative rounded-xl overflow-hidden shadow-lg border-4 border-white">
            <img
              src="/assets/co2.JPG"
              alt="Children playing at daycare"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;