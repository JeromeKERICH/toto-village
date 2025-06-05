import React, { useState } from 'react';

export default function DonationSection() {
  const [amount, setAmount] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const donateOptions = [100, 500, 1000];

  const handleDonate = () => {
    if (!amount || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    alert(`Thank you for donating $${amount}!`);
    // Here you'd call Supabase function or redirect to a payment gateway
  };

  const handleOptionSelect = (val) => {
    setAmount(val);
    setSelectedOption(val);
  };

  return (
    <section className="bg-white py-12 md:py-20 px-6 md:px-16 flex justify-center">
      <div className="bg-[#F5E6CA] p-8 md:p-12 rounded-2xl shadow-lg w-full max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2C3E50]">
          Support <span className="text-[#E67E22]">Our Mission</span>
        </h2>
        <p className="mb-8 text-lg text-[#4a4a4a] max-w-2xl mx-auto">
          Every contribution makes a difference in the life of a child. Help us continue empowering families and building brighter futures.
        </p>

        {/* Donation Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {donateOptions.map((val) => (
            <button
              key={val}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedOption === val
                  ? 'bg-[#2C3E50] text-black shadow-md'
                  : 'bg-[#333] text-white hover:bg-[#5B8C5A]'
              }`}
              onClick={() => handleOptionSelect(val)}
            >
              ${val}
            </button>
          ))}
        </div>

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
              placeholder="Custom Amount"
              className="border-2 border-[#5B8C5A] pl-8 pr-4 py-3 rounded-lg w-full focus:border-[#333] focus:outline-none"
              min="1"
            />
          </div>
          <button
            className="w-full sm:w-auto bg-[#E67E22]  text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#4a7a48] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            onClick={handleDonate}
          >
            Donate Now
          </button>
        </div>

        <div className="bg-[#F5E6CA] p-4 rounded-lg max-w-2xl mx-auto">
          <p className="text-[#2C3E50] font-medium">
            <span className="text-[#5B8C5A] font-bold">100%</span> of your donation goes directly to the development of the organization.
          </p>
        </div>
      </div>
    </section>
  );
}