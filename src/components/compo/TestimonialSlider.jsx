import React from 'react';
import { Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: 'Grace M.',
    role: 'Mother & Market Vendor',
    quote: "Toto Village saved my family. I no longer worry about leaving my child while working. She's safe, happy, and learning every day.",
    
  },
  {
    name: 'Julius K.',
    role: 'Matatu Driver & Father',
    quote: "I used to drive with my daughter in the front seat. Now, thanks to Toto Village, she's in a safe space — and I can focus on work.",
    
  },
  {
    name: 'Esther W.',
    role: 'Caregiver, Trained by Toto Village',
    quote: "I never thought I could earn with dignity. Toto Village trained me and gave me a chance to love and earn by caring for children.",
    
  },
];

function Testimonial() {
  return (
    <section className="py-4 px-4 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold mb-3 text-[#2C3E50] drop-shadow-sm">
            Testimonials from Our Community
          </h2>
          <p className="text-lg lg:text-xl text-[#4a4a4a] max-w-3xl mx-auto">
            Hear from parents, caregivers, and community members about how Toto Village is transforming lives.
          </p>
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden relative">
          <Swiper 
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1.1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="pb-12 px-2"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-2xl p-8 flex flex-col hover:shadow-xl transition-all h-full border border-[#E67E22]/10 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#E67E22] to-[#5B8C5A]"></div>
                  <div className="flex items-start gap-4 mb-6">
                    <Quote className="flex-shrink-0 w-10 h-10 text-[#E67E22] p-2 bg-[#FFF7EC] rounded-full" />
                  </div>
                  <p className="text-[#4a4a4a] italic mb-8 text-lg leading-relaxed">"{t.quote}"</p>
                  <div className="mt-auto">
                    <div className="text-[#2C3E50] font-bold text-lg">{t.name}</div>
                    <div className="text-[#5B8C5A] font-medium mb-4">{t.role}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 flex flex-col hover:shadow-xl transition-all h-full border border-[#E67E22]/10 group relative overflow-hidden hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#E67E22] to-[#5B8C5A]"></div>
              <div className="flex items-start gap-4 mb-6">
               
                <Quote className="flex-shrink-0 w-10 h-10 text-[#E67E22] p-2 bg-[#FFF7EC] rounded-full" />
              </div>
              <p className="text-[#4a4a4a] italic mb-8 text-lg leading-relaxed">"{t.quote}"</p>
              <div className="mt-auto">
                <div className="text-[#2C3E50] font-bold text-lg">{t.name}</div>
                <div className="text-[#5B8C5A] font-medium mb-4">{t.role}</div>
                
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-8">
        
        </div>
      </div>
    </section>
  );
}

export default Testimonial;