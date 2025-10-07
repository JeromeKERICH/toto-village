import React from 'react';
import { Link } from 'react-router-dom';

export default function MissionSection() {
  return (
    <section className="py-5 px-4  bg-gradient-to-br from-white to-gray-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
         
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-6 text-gray-800">
            Our Purpose
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed font-light">
            Creating localized, dual-generational childcare solutions that enable women to work, children to thrive, and communities to grow.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 relative overflow-hidden">
            <div className="absolute "></div>
            <div className="relative">
              <h3 className="text-2xl font-bold text-yellow-600 mb-4 flex items-center gap-3">
                
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                Inspired by the African proverb{' '}
                <span className="text-green-600 font-semibold italic">"It takes a village to raise a child,"</span>{' '}
                Toto Village is rooted in the belief that childcare is a{' '}
                <span className="text-green-600 font-semibold">shared responsibility.</span>
                <br /><br />
                Through a partnership model, we foster a thriving ecosystem where families, caregivers, professionals, and institutions work together to meet the childcare needs of the community.
              </p>
            </div>
          </div>
          
          <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 relative overflow-hidden">
            <div className="absolute "></div>
            <div className="relative">
              <h3 className="text-2xl font-bold text-yellow-600 mb-4 flex items-center gap-3">
                
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                We envision a world where accessible, quality childcare provision empowers women to excel in both career and motherhood, driving shared economic prosperity across their communities.
              </p>
            </div>
          </div>
        </div>

        {/* 2035 Goal */}
        <div className="bg-gradient-to-r from-orange-50 via-white to-green-50 rounded-2xl p-8 mb-16 text-center max-w-4xl mx-auto shadow-lg border border-orange-100 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-200 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-500"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-green-200 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-500"></div>
          
          <div className="relative">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our 2035 Goal
            </h3>
            <p className="text-gray-600 text-lg font-light">
              Enable 10,000 families to access quality childcare that supports{' '}
              <span className="text-green-600 font-semibold">economic participation</span> and{' '}
              <span className="text-green-600 font-semibold">child development</span>.
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
}