import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React from "react";

const stories = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "CEO, BrightFuture Foundation",
    quote: "Our partnership has enabled us to reach 3x more children than we could have alone. The collaborative approach is truly transformative.",
    impact: "Helped build 5 new childcare centers in underserved areas",
    logo: "brightfuture-logo.png" // Replace with actual logo path
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Director, Community First Bank",
    quote: "The transparency and measurable outcomes made this our most rewarding corporate partnership. We're seeing real change in our communities.",
    impact: "Funded education for 200+ caregivers last year",
    logo: "communitybank-logo.png" // Replace with actual logo path
  },
  {
    id: 3,
    name: "Amina Diallo",
    title: "Founder, Women Rise Collective",
    quote: "This partnership empowered 50 women in our collective to become certified caregivers, creating sustainable livelihoods.",
    impact: "Created 50 new jobs for women in the community",
    logo: "womenrise-logo.png" // Replace with actual logo path
  }
];

const PartnerStories = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextStory = () => {
    setCurrentIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  return (
    <section className="bg-[#f6f4f1] py-[20px] md:py-[2%] px-[20px] md:px-[8%] text-[#2b2b2b]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2b2b2b] mb-3">PARTNER SUCCESS STORIES</h2>
          <p className="text-xl text-[#4a4a4a] max-w-2xl mx-auto">
            Hear from organizations who've transformed communities through collaboration
          </p>
        </div>

        <div className="relative bg-white rounded-xl shadow-md p-8 md:p-12">
          {/* Quote Icon */}
          <FaQuoteLeft className="text-[#ff4848] text-4xl mb-6 opacity-20" />
          
          {/* Story Content */}
          <div className="mb-8">
            <p className="text-2xl md:text-3xl text-[#2b2b2b] font-medium leading-relaxed mb-6">
              "{stories[currentIndex].quote}"
            </p>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#f6f4f1] flex items-center justify-center overflow-hidden">
                <img 
                  src={stories[currentIndex].logo} 
                  alt={stories[currentIndex].name} 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#2b2b2b]">{stories[currentIndex].name}</h4>
                <p className="text-[#4a4a4a]">{stories[currentIndex].title}</p>
              </div>
            </div>
            <div className="bg-[#fff0f0] px-4 py-3 rounded-lg inline-block">
              <p className="text-[#ff4848] font-medium">Impact: {stories[currentIndex].impact}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between mt-6">
            <button 
              onClick={prevStory}
              className="p-3 rounded-full bg-[#f6f4f1] text-[#2b2b2b] hover:bg-[#ff4848] hover:text-white transition"
            >
              <FaChevronLeft />
            </button>
            <div className="flex gap-2">
              {stories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full ${currentIndex === idx ? 'bg-[#ff4848]' : 'bg-[#f6f4f1]'}`}
                />
              ))}
            </div>
            <button 
              onClick={nextStory}
              className="p-3 rounded-full bg-[#f6f4f1] text-[#2b2b2b] hover:bg-[#ff4848] hover:text-white transition"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerStories;