import React, { useState } from 'react';

export default function DonationSection() {
  const [amount, setAmount] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const donateOptions = [20, 50, 100];

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
    <section className="bg-[#f6f4f1] py-12 md:py-20 px-6 md:px-16 flex justify-center">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg w-full max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Support <span className="text-[#ff4848]">Our Mission</span>
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
                  ? 'bg-[#ff4848] text-white shadow-md'
                  : 'bg-[#f4cc15] text-[#2b2b2b] hover:bg-[#ff4848] hover:text-white'
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
              className="border-2 border-[#e0e0e0] pl-8 pr-4 py-3 rounded-lg w-full focus:border-[#f4cc15] focus:outline-none"
              min="1"
            />
          </div>
          <button
            className="w-full sm:w-auto bg-[#ff4848] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e63e3e] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            onClick={handleDonate}
          >
            Donate Now
          </button>
        </div>

        <div className="bg-[#fff7ec] p-4 rounded-lg max-w-2xl mx-auto">
          <p className="text-[#2b2b2b] font-medium">
            <span className="text-[#ff4848] font-bold">100%</span> of your donation goes directly to the development of the organization.
          </p>
        </div>
      </div>
    </section>
  );
}