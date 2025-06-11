import React from 'react';
import { FaImages, FaSearch, FaTags } from 'react-icons/fa';

export function GalleryOverview() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold mb-3 text-[#2C3E50] drop-shadow-sm text-center mb-10">
            Our Visual Story
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore moments of impact, community connections, and our journey through these curated images.
          </p>
        </div>

        <div className="bg-gradient-to-r from-[#5B8C5A] to-[#E67E22] rounded-xl p-0.5">
          <div className="bg-white rounded-[11px] p-5 text-center">
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-3">
              Explore Our Gallery
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Scroll down to discover different ways to view our collection.
            </p>
            <div className="animate-bounce text-[#5B8C5A] text-2xl">↓</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GalleryOverview;