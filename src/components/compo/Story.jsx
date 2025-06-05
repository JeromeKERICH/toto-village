import React from 'react';
import { FaChild, FaHandsHelping, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function OurStory() {
  const iconStyles = "flex flex-col items-center transition-all duration-300";

  return (
    <section className="bg-white py-[20px] md:py-[2%] px-[20px] md:px-[8%] text-[#2C3E50]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Icon Triangle Layout */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative md:w-[350px] md:h-[320px] w-[280px] h-[240px]">
            {/* Top Icon */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <div className={`${iconStyles} bg-white p-5 rounded-full shadow-lg hover:bg-[#5B8C5A] group`}>
                <FaChild className="text-4xl text-[#E67E22] group-hover:text-white" />
              </div>
              <p className="mt-3 text-center text-md font-semibold text-[#2C3E50]">Growth</p>
            </div>

            {/* Bottom Left Icon */}
            <div className="absolute bottom-0 left-0">
              <div className={`${iconStyles} bg-white p-5 rounded-full shadow-lg hover:bg-[#5B8C5A] group`}>
                <FaHandsHelping className="text-4xl text-[#E67E22] group-hover:text-white" />
              </div>
              <p className="mt-3 text-center text-md font-semibold text-[#2C3E50]">Support</p>
            </div>

            {/* Bottom Right Icon */}
            <div className="absolute bottom-0 right-0">
              <div className={`${iconStyles} bg-white p-5 rounded-full shadow-lg hover:bg-[#5B8C5A] group`}>
                <FaHeart className="text-4xl text-[#E67E22] group-hover:text-white" />
              </div>
              <p className="mt-3 text-center text-md font-semibold text-[#2C3E50]">Love</p>
            </div>
          </div>
        </div>

        {/* Text Block */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
            Raising a Child Takes <span className="text-[#E67E22]">a Village</span>,<br /> Here's Ours
          </h2>
          <p className="text-lg leading-relaxed mb-8 text-[#4a4a4a]">
            At TotoVillage, we believe no parent should walk the journey of childcare alone.
            <br /><br />
            Born from the hearts of mothers, educators, and caregivers, we've built a haven where support, education, and love come together to nurture children and empower parents.
          </p>
          <Link
            to="/storypage"
            className="inline-block bg-[#E67E22]  text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#4a7a48] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Our Full Story →
          </Link>
        </div>
      </div>
    </section>
  );
}