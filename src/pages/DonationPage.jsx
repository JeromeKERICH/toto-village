// DonationPage.jsx
import React, { useEffect } from 'react';
import { PaystackButton } from 'react-paystack';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function DonationPage() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on page load
    }
    , []);
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedKit, donationAmount, isCustom } = location.state || {};
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  
  // Static conversion rate
  const conversionRate = 130; // 1 USD = 130 KES

  const generateReference = () =>
    `${new Date().getTime()}-${Math.floor(Math.random() * 1000)}`;

  const getAmountInCents = () => {
    const amountKES = donationAmount * conversionRate;
    return Math.round(amountKES * 100); // KES in cents for Paystack
  };

  const componentProps = {
    email,
    amount: getAmountInCents(),
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    reference: generateReference(),
    currency: "KES",
    channels: ["card"],
    text: isCustom 
      ? `Donate $${donationAmount} USD` 
      : `Donate ${selectedKit.displayAmount}`,
    onSuccess: (reference) => {
      console.log(reference);
      alert("Thank you for your donation! A receipt has been sent to your email.");
      navigate('/');
    },
    onClose: () => {
      console.log("Payment closed");
    },
  };

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-[#2C3E50] mb-6">Complete Your Donation</h2>
        
        {selectedKit && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">You're donating:</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-bold">{selectedKit.displayAmount}</p>
              <p className="text-gray-700">{selectedKit.name}</p>
            </div>
          </div>
        )}

        {isCustom && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Custom Donation:</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-bold">${donationAmount} USD</p>
              <p className="text-gray-700">Custom donation amount</p>
            </div>
          </div>
        )}

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#E67E22] focus:ring-[#E67E22] py-2 px-3"
            placeholder="Your full name"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#E67E22] focus:ring-[#E67E22] py-2 px-3"
            placeholder="Your email address"
            required
          />
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Back
          </button>
          <div className="text-right">
            <p className="text-sm text-gray-500 mb-1">Amount in KES: {(donationAmount * conversionRate).toFixed(2)}</p>
            <PaystackButton
              {...componentProps}
              className="bg-[#E67E22] hover:bg-[#D35400] text-white font-medium py-2 px-6 rounded-lg transition-colors disabled:opacity-50"
              disabled={!email || !name}
            />
          </div>
        </div>
      </div>
    </section>
  );
}