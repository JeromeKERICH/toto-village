import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="bg-[#f6f4f1] text-[#2b2b2b] py-[20px] md:py-[8%] px-[20px] md:px-[8%]">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-start">
            Nurturing Dreams,<br /> Empowering Futures
          </h1>
          <p className="text-lg text-[#4a4a4a] mb-8 md:text-center text-start">
            TotoVillage is a safe space for every child and caregiver where care, education, and community come together to build a better tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              to="/programs"
              className="bg-[#ff4848] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e63e3e] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Programs
            </Link>
            <Link
              to="/contact"
              className="bg-transparent text-[#2b2b2b] border-2 border-[#2b2b2b] px-8 py-3 rounded-lg font-semibold hover:bg-[#2b2b2b] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Join Our Community
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="assets/hero.jpg"
            alt="Happy children playing at TotoVillage"
            className="w-full rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}