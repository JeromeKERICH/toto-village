import React, { useState } from 'react';
import { FaHandHoldingHeart, FaArrowRight } from 'react-icons/fa';

export default function DonationSection() {
  const [amount, setAmount] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [isMonthly, setIsMonthly] = useState(false);

  const donateOptions = [100, 500, 1000];

  const handleDonate = () => {
    if (!amount || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    alert(`Thank you for your ${isMonthly ? 'monthly ' : ''}donation of $${amount}!`);
    // Here you'd call Supabase function or redirect to a payment gateway
  };

 

  return (
    <section className="py-5 md:py-10 lg:py-15 px-4 md:px-12 lg:px-24 flex justify-center">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl w-full max-w-6xl mx-auto text-center border border-[#E67E22]/20">
        
        <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold mb-3 text-[#2C3E50] drop-shadow-sm">
          Support Our Mission
        </h2>
        <p className="mb-8 text-lg text-[#4a4a4a] max-w-2xl mx-auto">
          Every contribution makes a difference in the life of a child. Help us continue empowering families and building brighter futures.
        </p>

        

        {/* Custom Amount Input */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 max-w-md mx-auto">
          <div className="relative w-full sm:w-auto">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#4a4a4a]">$</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
                setSelectedOption(null);
              }}
              placeholder="Other amount"
              className="border-2 border-[#2C3E50]/50 pl-8 pr-4 py-3 rounded-lg w-full focus:border-[#E67E22] focus:outline-none focus:ring-2 focus:ring-[#E67E22]/30"
              min="1"
            />
          </div>
          <button
            className="w-full sm:w-auto bg-[#E67E22] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
            onClick={handleDonate}
          >
            Donate Now
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="bg-[#f8f8f8]/50 p-4 rounded-lg max-w-2xl mx-auto border border-[#2C3E50]/20">
          <p className="text-[#2C3E50] font-medium">
            <span className="text-[#2C3E50]">100%</span> of your donation goes directly to supporting families in need.
          </p>
        </div>
      </div>
    </section>
  );
}