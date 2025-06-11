import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative text-[#2C3E50] py-[20px] md:py-[8%] px-[20px] md:px-[8%] overflow-hidden">
      {/* Background image with gradient */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.9)), url('/assets/hero.jpg')`
          }}
        ></div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="lg:text-5xl md:text-3xl text-3xl font-extrabold mb-3 text-[#2C3E50] drop-shadow-sm text-start">
            Nurturing Dreams,<br /> Empowering Futures
          </h1>
          <p className="text-lg text-[#4a4a4a] mb-8 md:text-start text-start">
            In sub-Saharan Africa, 70% of households in low-income communities lack reliable childcare, a structural barrier that stunts early childhood development, constraints women’s workforce participation, and perpetuates intergenerational poverty and inequality
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              to="/partners"
              className="bg-[#E67E22] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#d1711f] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Become a Partner
            </Link>
            <Link
              to="/donation"
              className="bg-transparent text-[#2C3E50] border-2 border-[#5B8C5A] px-8 py-3 rounded-lg font-semibold hover:bg-[#5B8C5A] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Donate Now
            </Link>
          </div>
        </div>

        {/* Optional image box if you still want to show an image */}
        <div className="w-full md:w-1/2">
          <img
            src="assets/hero3.jpg"
            alt="Happy children playing at TotoVillage"
            className="w-full rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
