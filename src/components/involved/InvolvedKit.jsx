import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PaystackButton } from 'react-paystack';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function DonationCard() {
  const [donationAmount, setDonationAmount] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const conversionRate = 130;

  const donationKits = [
    {
      id: 4,
      name: "Sponsor a Child",
      image: "assets/training.jpg",
      amount: 60,
      displayAmount: "$60 USD/month",
      includes: [
        "Ensures a vulnerable child can attend a quality local daycare, giving them a safe, nurturing environment"
      ],
      impact: "Keeps a child in a safe and supportive daycare, allowing their parents to pursue income-earning opportunities without worry.",
      color: "from-[#E67E22] to-[#FFA500]"
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
      impact: "Empowers women entrepreneurs, creating sustainable livelihoods and expanding affordable childcare options in low-income communities",
      color: "from-[#E67E22] to-[#FFA500]"
    },
    {
      id: 1,
      name: "Sponsor a Public Daycare Starter Kit",
      image: "assets/starter.jpg",
      amount: 25000, 
      displayAmount: "$25,000 USD",
      includes: [
        "Facilitates complete set-up and launch of a public daycare facility at one of our partner sites."
      ],
      impact: "Establishes a full community childcare hub, serving dozens of families and enabling parents to work with peace of mind",
      color: "from-[#E67E22] to-[#FFA500]"
    },
    {
      id: 2,
      name: "Support Childcare Practitioner Training",
      image: "assets/pu3.JPG",
      amount: 5500,
      displayAmount: "$5,500 USD",
      includes: [
        "Partner with us to upskill and certify local caregivers, driving sector-wide quality improvements"
      ],
      impact: "Enhances service delivery in micro-daycares, boosting child development outcomes and increasing incomes for our TotoFounders",
      color: "from-[#E67E22] to-[#FFA500]"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  const handleKitSelection = (kit) => {
    navigate('/donate', {
      state: {
        selectedKit: kit,
        donationAmount: kit.amount,
        isCustom: false
      }
    });
  };

  const generateReference = () =>
    `${new Date().getTime()}-${Math.floor(Math.random() * 1000)}`;

  const getAmountInCents = () => {
    const amountUSD = parseFloat(donationAmount || "0");
    const amountKES = amountUSD * conversionRate;
    return Math.round(amountKES * 100);
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
    text: `Donate $${donationAmount || '0'} USD`,
    onSuccess: (reference) => {
      console.log(reference);
      alert("Thank you for your donation! A receipt has been sent to your email.");
      setDonationAmount('');
      setEmail('');
    },
    onClose: () => {
      console.log("Payment closed");
    },
  };

  return (
    <section className="py-5 bg-gradient-to-br from-slate-50 to-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl lg:text-4xl font-light text-[#2C3E50] mb-6"
            variants={itemVariants}
          >
            With Your Support, We 
            <span className="text-[#E67E22]"> Make a Difference</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-0.5 bg-gradient-to-r from-[#E67E22] to-[#5B8C5A] mx-auto mb-8"
            variants={itemVariants}
          />
          <motion.p 
            className="text-xl text-[#2C3E50]/80 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Choose from our carefully designed donation kits to create lasting impact in communities across Kenya
          </motion.p>
        </motion.div>

        {/* Donation Kits Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {donationKits.map((kit) => (
            <motion.div
              key={kit.id}
              variants={cardVariants}
              whileHover="hover"
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 border border-[#2C3E50]/10 h-full">
                {/* Image with Gradient Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={kit.image}
                    alt={kit.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Amount Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`bg-gradient-to-r ${kit.color} text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg`}>
                      {kit.displayAmount}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-normal text-[#2C3E50] mb-4">
                    {kit.name}
                  </h3>

                  {/* Includes Section */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${kit.color}`}></div>
                      <h4 className="text-sm font-normal text-[#2C3E50]/70 uppercase tracking-wide">What Your Support Provides</h4>
                    </div>
                    <ul className="space-y-3">
                      {kit.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${kit.color} mt-2 flex-shrink-0`}></div>
                          <span className="text-[#2C3E50]/80 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact Section */}
                  <div className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl border border-[#2C3E50]/5 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${kit.color}`}></div>
                      <h4 className="text-sm font-normal text-[#2C3E50]/70 uppercase tracking-wide">Impact Created</h4>
                    </div>
                    <p className="text-[#2C3E50]/80 leading-relaxed">{kit.impact}</p>
                  </div>

                  {/* Donate Button */}
                  <motion.button
                    onClick={() => handleKitSelection(kit)}
                    className={`w-full bg-gradient-to-r ${kit.color} text-white font-normal py-4 px-6 rounded-xl hover:shadow-xl transition-all duration-300 group/btn`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Donate Now
                      <span className="text-lg transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="bg-gradient-to-r from-[#5B8C5A] to-[#2C3E50] rounded-2xl p-12 text-white"
            variants={itemVariants}
          >
            <h3 className="text-2xl lg:text-3xl font-light mb-6">
              Every Contribution Creates Change
            </h3>
            <motion.div 
              className="w-16 h-0.5 bg-[#E67E22] mx-auto mb-6"
              variants={itemVariants}
            />
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Your support transforms lives, empowers communities, and builds a brighter future for children and families across Kenya.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/impact" className="bg-white text-[#2C3E50] px-8 py-4 rounded-lg font-normal hover:bg-gray-50 transition-colors duration-300">
                Learn More About Our Impact
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}