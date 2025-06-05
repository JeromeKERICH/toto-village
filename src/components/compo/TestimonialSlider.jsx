import React from 'react';
import { Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: 'Grace M.',
    role: 'Mother & Market Vendor',
    quote: "Toto Village saved my family. I no longer worry about leaving my child while working. She's safe, happy, and learning every day.",
    link: '/testimonials/grace',
  },
  {
    name: 'Julius K.',
    role: 'Matatu Driver & Father',
    quote: "I used to drive with my daughter in the front seat. Now, thanks to Toto Village, she's in a safe space — and I can focus on work.",
    link: '/testimonials/julius',
  },
  {
    name: 'Esther W.',
    role: 'Caregiver, Trained by Toto Village',
    quote: "I never thought I could earn with dignity. Toto Village trained me and gave me a chance to love and earn by caring for children.",
    link: '/testimonials/esther',
  },
];

function Testimonials() {
  return (
    <section className="bg-[#f6f4f1] py-[20px] md:py-[2%] px-[20px] md:px-[8%] text-[#2b2b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#E67E22]">What They're</span> Saying
          </h2>
          <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto">
            Parents, caregivers, and community members share how Toto Village is transforming lives every day.
          </p>
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper 
            spaceBetween={16} 
            slidesPerView={1.1}
            className="pb-8"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-xl p-8 flex flex-col hover:shadow-lg transition-all h-full border border-[#f6f4f1] hover:border-[#ff4848]/20 group">
                  <Quote className="w-10 h-10 text-[#f4cc15] mb-6 p-2 bg-[#fff7ec] rounded-full" />
                  <p className="text-[#4a4a4a] italic mb-6 text-lg">"{t.quote}"</p>
                  <div className="mt-auto">
                    <div className="text-[#2b2b2b] font-bold">{t.name}</div>
                    <div className="text-[#4a4a4a] mb-4">{t.role}</div>
                    <Link
                      to={t.link}
                      className="text-[#ff4848] font-semibold hover:text-[#e63e3e] transition-colors inline-flex items-center group/link"
                    >
                      Read Full Story
                      <span className="ml-2 group-hover/link:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 flex flex-col hover:shadow-lg transition-all h-full border border-[#f6f4f1] hover:border-[#ff4848]/20 group"
            >
              <Quote className="w-10 h-10 text-[#f4cc15] mb-6 p-2 bg-[#fff7ec] rounded-full" />
              <p className="text-[#4a4a4a] italic mb-6 text-lg">"{t.quote}"</p>
              <div className="mt-auto">
                <div className="text-[#2b2b2b] font-bold">{t.name}</div>
                <div className="text-[#4a4a4a] mb-4">{t.role}</div>
                <Link
                  to={t.link}
                  className="text-[#E67E22] font-semibold  transition-colors inline-flex items-center group/link"
                >
                  Read Full Story
                  <span className="ml-2 group-hover/link:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;