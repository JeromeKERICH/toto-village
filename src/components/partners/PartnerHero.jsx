import React, { useState } from 'react';
import PartnershipModal from './PartnershipModal';

const PartnershipHero = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="px-[5%] py-20 bg-[#f6f4f1] text-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-[#ff4848]"></div>
        <div className="absolute bottom-10 right-20 w-24 h-24 rounded-full bg-[#f4cc15]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 text-[#2b2b2b]">
          PARTNER WITH US FOR A BETTER FUTURE
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed">
          Join our movement to make a <span className="text-[#ff4848] font-medium">greater impact</span> in the community through meaningful collaboration.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <button
            className="bg-[#ff4848] text-white px-8 py-4 rounded-full hover:bg-[#e03e3e] transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            onClick={() => setOpen(true)}
          >
            Become a Member
          </button>
          <button
            className="border-2 border-[#2b2b2b] text-[#2b2b2b] px-8 py-4 rounded-full hover:bg-[#2b2b2b] hover:text-white transition-all duration-300 font-medium"
            onClick={() => setOpen(true)}
          >
            Learn More
          </button>
        </div>
      </div>

      {open && <PartnershipModal setOpen={setOpen} />}
    </section>
  );
};

export default PartnershipHero;