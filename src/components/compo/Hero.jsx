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
          <h1 className="lg:text-3xl md:text-3xl text-2xl font-extrabold mb-3 drop-shadow-sm text-start text-[#E67E22]">
          QUALITY AFFORDABLE CHILDCARE <br/> <br/> <span className='text-[#2C3E50] text-2xl'> Is the foundation of thriving families and fairer economies</span>
          </h1>
          <p className="text-lg text-[#4a4a4a] mb-8 md:text-start text-start">
          At Toto Village, we believe childcare should not be a private struggle. It’s a shared responsibility, and a powerful opportunity to transform lives across generations.

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
            src="assets/hero4.jpg"
            alt="Happy children playing at TotoVillage"
            className="w-full rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}