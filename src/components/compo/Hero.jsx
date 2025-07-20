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
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-extrabold mb-6 drop-shadow-sm text-start">
            <span className="text-[#FF8C00] bg-clip-text bg-gradient-to-r from-[#FF8C00] to-[#FFA500]">
              QUALITY AFFORDABLE CHILDCARE
            </span>
            <p className="text-xl italic mt-2 mb-2 text-[#5B8C5A]">is</p>
            
            <span className="text-3xl font-bold text-[#2C3E50] mt-2 block">
              The Foundation of Thriving Families <br/>and Vibrant Economies
            </span>
          </h1>
          <p className="text-lg text-[#4a4a4a] mb-8 md:text-start text-start leading-relaxed">
            At <span className="font-semibold text-[#FF8C00]">Toto Village</span>, we believe childcare should never be a private struggle. 
            It's a <span className="font-semibold">shared opportunity</span> to transform lives across generations.
            <br/><br/>
            We partner with County Governments to create <span className="font-semibold text-[#5B8C5A]">bright, joyful spaces </span>  
             for children in everyday locations like markets, transport hubs, and workplaces.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              to="/about-partners"
              className="bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white px-8 py-3 rounded-lg font-bold hover:from-[#FF7B00] hover:to-[#FF9500] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
            >
              Become a Partner
            </Link>
            
          </div>
        </div>

        {/* Image box */}
        <div className="w-full md:w-1/2">
          <img
            src="assets/hero4.jpg"
            alt="Happy children playing at TotoVillage"
            className="w-full rounded-xl shadow-2xl border-4 border-white transform hover:rotate-1 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}