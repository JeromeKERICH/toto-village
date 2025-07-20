import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import ProblemSolution from './ProblemSolution';

const ImpactHero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full py-16 bg-[#f8f9fa]">
      <div className="container mx-auto max-w-5xl px-6 text-center">
        <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold mb-3 text-[#2C3E50] drop-shadow-sm text-center">
          Redefining Early Childhood <span className="text-[#FF9F1C]">Development</span> in Africa
        </h1>
        <p className="text-lg md:text-xl text-[#4a4a4a] max-w-2xl mx-auto mb-8">
          Through innovative childcare solutions, we're unlocking economic potential for families and transforming communities.
        </p>
        
      </div>

      {showModal && <ProblemSolution onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default ImpactHero;