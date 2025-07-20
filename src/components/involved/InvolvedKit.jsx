import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';

export default function DonationCard() {
  const [activeKit, setActiveKit] = useState(null);
  const [donationAmount, setDonationAmount] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  // Static conversion rate
  const conversionRate = 130; // 1 USD = 130 KES

  const donationKits = [
    {
      id: 1,
      name: "Sponsor a Public Daycare Starter Kit",
      image: "assets/starter.jpg",
      amount: 25000, // USD
      displayAmount: "$25,000 USD",
      includes: [
        "Facilitates complete set-up and launch of a public daycare facility at one of our partner sites."
      ],
      impact: "Establishes a full community childcare hub, serving dozens of families and enabling parents to work with peace of mind"
    },
    {
      id: 2,
      name: "Support Childcare Practitioner Training",
      image: "assets/pu3.JPG",
      amount: 5500,
      displayAmount: "$5,500 USD (per cohort of 15 TotoFounders)",
      includes: [
        "Partner with us to upskill and certify local caregivers, driving sector-wide quality improvements"
      ],
      impact: "Enhances service delivery in micro-daycares, boosting child development outcomes and increasing incomes for our TotoFounders"
    },
    {
      id: 3,
      name: "Micro-daycare Business Starter Kit",
      image: "assets/centre.jpg",
      amount: 350,
      displayAmount: "$350 USD",
      includes: [
        "Equips a TotoFounder with startup essentials—furniture, learning materials, safety equipment—and launch their own micro-daycare."
      ],
      impact: "Empowers women entrepreneurs, creating sustainable livelihoods and expanding affordable childcare options in low-income communities"
    },
    {
      id: 4,
      name: "Sponsor a Child",
      image: "assets/training.jpg",
      amount: 60,
      displayAmount: "$60 USD/month or $720 USD/year",
      includes: [
        "Ensures a vulnerable child can attend a quality local daycare, giving them a safe, nurturing environment"
      ],
      impact: "Keeps a child in a safe and supportive daycare, allowing their parents to pursue income-earning opportunities without worry."
    }
  ];

  const generateReference = () =>
    `${new Date().getTime()}-${Math.floor(Math.random() * 1000)}`;

  const getAmountInCents = () => {
    const amountUSD = activeKit
      ? activeKit.amount
      : parseFloat(donationAmount || "0");
    const amountKES = amountUSD * conversionRate;
    return Math.round(amountKES * 100); // KES in cents for Paystack
  };

  const isCustomDonationValid = () =>
    parseFloat(donationAmount) > 0 && email.trim() !== "";

  const componentProps = {
    email,
    amount: getAmountInCents(),
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    reference: generateReference(),
    currency: "KES",
    channels: ["card"],
    text: activeKit
      ? `Donate ${activeKit.displayAmount}`
      : `Donate $${donationAmount || '0'} USD`,
    onSuccess: (reference) => {
      console.log(reference);
      alert("Thank you for your donation! A receipt has been sent to your email.");

      setActiveKit(null);
      setDonationAmount('');
      setEmail('');
      setName('');
    },
    onClose: () => {
      console.log("Payment closed");
    },

   
  };

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-2">
            With Your Support, We Can Make a Difference
          </h2>
          
        </div>

        {/* Donation Kits */}
        <div className="grid md:grid-cols-2 gap-8">
          {donationKits.map((kit) => (
            <div
              key={kit.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={kit.image}
                  alt={kit.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{kit.name}</h3>
                  <span className="bg-[#E67E22]/10 text-[#E67E22] font-semibold py-1 px-3 rounded-full text-sm">
                    {kit.displayAmount}
                  </span>
                </div>

                <div className="mb-5">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">INCLUDES:</h4>
                  <ul className="space-y-2">
                    {kit.includes.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#E67E22] mr-2 mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 mb-1">IMPACT:</h4>
                  <p className="text-gray-700">{kit.impact}</p>
                </div>

                <button
                  onClick={() => setActiveKit(kit)}
                  className="w-full bg-[#E67E22] hover:bg-[#D35400] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Donate
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Donation Form */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 max-w-2xl mx-auto mt-12">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Or enter a custom amount (USD)</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Amount (USD)</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                <input
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  className="pl-8 w-full rounded-md border-gray-300 shadow-sm focus:border-[#E67E22] focus:ring-[#E67E22] py-2"
                  placeholder="Enter amount"
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#E67E22] focus:ring-[#E67E22] py-2"
                placeholder="Your email address"
              />
            </div>
            <div className="flex items-end">
              <PaystackButton
                {...componentProps}
                className="w-full bg-[#E67E22] hover:bg-[#D35400] text-white font-medium py-2 px-6 rounded-lg transition-colors disabled:opacity-50"
                disabled={!isCustomDonationValid()}
              />
            </div>
          </div>
        </div>

        {/* Modal */}
        {activeKit && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-6 max-w-md w-full">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Confirm Your Donation</h3>
              <p className="mb-2">You're donating: <span className="font-bold">{activeKit.displayAmount}</span></p>
              <p className="mb-2">{activeKit.name}</p>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#E67E22] focus:ring-[#E67E22] py-2 px-3"
                  placeholder="Your email address"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#E67E22] focus:ring-[#E67E22] py-2 px-3"
                  placeholder="Your full name"
                />
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setActiveKit(null)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <PaystackButton
                  {...componentProps}
                  className="bg-[#E67E22] hover:bg-[#D35400] text-white font-medium py-2 px-6 rounded-lg transition-colors"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
