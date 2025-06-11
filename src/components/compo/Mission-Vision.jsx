import React from 'react';
import { Link } from 'react-router-dom';

export default function MissionSection() {
  return (
    <section className="py-4 px-4 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold mb-3 text-[#2C3E50] drop-shadow-sm">
            Our Purpose
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Building a future where every family has access to quality childcare
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white border rounded-lg p-6 ">
            <h3 className="text-2xl font-semibold text-[#5B8C5A] drop-shadow-sm mb-3 flex items-center gap-2">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We empower low-income families by training caregivers and delivering affordable, high-quality childcare, supporting children’s development and women’s economic participation.
            </p>
          </div>
          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-[#5B8C5A] drop-shadow-sm mb-3 flex items-center gap-2">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              A world where every community thrives through accessible, quality childcare that fuels economic growth and nurtures children.
            </p>
          </div>
        </div>

        {/* 2035 Goal */}
        <div className="bg-[#FFF] border rounded-lg p-8 mb-16 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-[#5B8C5A] drop-shadow-sm mb-3">
            Our Goal
          </h3>
          <p className="text-gray-700">
          By 2035, enable 10,000 families to access quality child care that supports economic participation and child peace of mind.

          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/storypage" className="bg-[#E67E22] hover:bg-[#cf681c] text-white px-6 py-3 rounded-md font-medium">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
