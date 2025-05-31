import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const podcastData = [
  {
    id: 1,
    title: 'Nurturing Young Minds',
    description: 'A thoughtful dive into supporting children\'s learning journeys.',
    thumbnail: 'assets/p2.jpg',
    audio_url: '#',
  },
  {
    id: 2,
    title: 'Parenting with Love',
    description: 'Conversations on how to raise emotionally intelligent kids.',
    thumbnail: 'assets/p4.jpg',
    audio_url: '#',
  },
  {
    id: 3,
    title: 'Village Talks: Community',
    description: 'How collective care and support shape our future.',
    thumbnail: 'assets/p3.jpg',
    audio_url: '#',
  },
  {
    id: 4,
    title: 'Kids and Creativity',
    description: 'Unlocking imagination through play and art.',
    thumbnail: 'assets/p2.jpg',
    audio_url: '#',
  },
  {
    id: 5,
    title: 'Safe Digital Spaces',
    description: 'How to keep kids safe and smart online.',
    thumbnail: 'assets/p1.jpg',
    audio_url: '#',
  },
];

const PodcastSlider = () => {
  return (
    <section className="bg-[#f6f4f1] py-[20px] md:py-[2%] px-[20px] md:px-[8%] text-[#2b2b2b]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-[#ff4848]">Toto Village</span> Podcast
        </h2>
        <p className="text-lg text-[#4a4a4a] text-center mb-12 max-w-2xl mx-auto">
          Listen to inspiring conversations about child development, parenting, and community building.
        </p>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ 
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {podcastData.map((podcast) => (
            <SwiperSlide key={podcast.id}>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col group border border-transparent hover:border-[#ff4848]/20">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={podcast.thumbnail}
                    alt={podcast.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2b2b2b]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium">Listen Now →</span>
                  </div>
                </div>
                
                <div className="flex-grow mb-6">
                  <h3 className="text-xl font-bold text-[#2b2b2b] mb-3">
                    {podcast.title}
                  </h3>
                  <p className="text-[#4a4a4a]">
                    {podcast.description}
                  </p>
                </div>

                <a
                  href={podcast.audio_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto bg-[#ff4848] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e63e3e] transition-all duration-300 shadow-md hover:shadow-lg text-center"
                >
                  Play Episode
                </a>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation */}
          <div className="swiper-button-next !text-[#ff4848] after:!text-2xl"></div>
          <div className="swiper-button-prev !text-[#ff4848] after:!text-2xl"></div>
          <div className="swiper-pagination !bottom-0 [&>.swiper-pagination-bullet-active]:!bg-[#ff4848]"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default PodcastSlider;