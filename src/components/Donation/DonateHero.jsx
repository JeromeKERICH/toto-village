import { motion } from "framer-motion";
import { useState } from "react";
import { FiX, FiCreditCard, FiDollarSign, FiGlobe } from "react-icons/fi";
import { FaPaypal, FaMobileAlt } from "react-icons/fa";

const DonationHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("mpesa");
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");

  const donationAmounts = [500, 1000, 2000, 5000, 10000];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission based on activeTab
    console.log(`Donating ${amount || customAmount} via ${activeTab}`);
    // Close modal after submission
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="relative bg-gradient-to-br from-[#1D3557] to-[#2a4b6f] py-20 md:py-28 px-6 text-white overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-1/4 left-1/5 w-32 h-32 rounded-full bg-[#ff4848] mix-blend-overlay"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-[#f4cc15] mix-blend-overlay"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-3xl mx-auto text-center space-y-6"
        >
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Change a Life <span className="text-[#f4cc15]">Today</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-[#F1FAEE] leading-relaxed"
          >
            Your support creates opportunities for children and families in need. 
            Every contribution makes a lasting impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#ff4848] hover:bg-[#e53e3e] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Donate Now
            </button>
            <button className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-semibold px-8 py-3 rounded-full shadow hover:shadow-md transition-all duration-300">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Donation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold text-[#2b2b2b]">Make a Donation</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-[#ff4848]"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Payment Method Tabs */}
              <div className="flex border-b mb-6">
                <button
                  onClick={() => setActiveTab("mpesa")}
                  className={`flex items-center gap-2 px-4 py-2 font-medium ${activeTab === "mpesa" ? "text-[#ff4848] border-b-2 border-[#ff4848]" : "text-gray-500"}`}
                >
                  <FaMobileAlt /> M-Pesa
                </button>
                <button
                  onClick={() => setActiveTab("card")}
                  className={`flex items-center gap-2 px-4 py-2 font-medium ${activeTab === "card" ? "text-[#ff4848] border-b-2 border-[#ff4848]" : "text-gray-500"}`}
                >
                  <FiCreditCard /> Card
                </button>
                <button
                  onClick={() => setActiveTab("paypal")}
                  className={`flex items-center gap-2 px-4 py-2 font-medium ${activeTab === "paypal" ? "text-[#ff4848] border-b-2 border-[#ff4848]" : "text-gray-500"}`}
                >
                  <FaPaypal /> PayPal
                </button>
                <button
                  onClick={() => setActiveTab("international")}
                  className={`flex items-center gap-2 px-4 py-2 font-medium ${activeTab === "international" ? "text-[#ff4848] border-b-2 border-[#ff4848]" : "text-gray-500"}`}
                >
                  <FiGlobe /> International
                </button>
              </div>

              {/* Donation Form */}
              <form onSubmit={handleSubmit}>
                {/* Amount Selection */}
                <div className="mb-6">
                  <label className="block text-[#4a4a4a] font-medium mb-3">Select Amount (KES)</label>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {donationAmounts.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => {
                          setAmount(amt);
                          setCustomAmount("");
                        }}
                        className={`py-2 rounded-lg border ${amount === amt ? "bg-[#fff0f0] border-[#ff4848] text-[#ff4848]" : "border-gray-300"}`}
                      >
                        {amt.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">KES</span>
                    <input
                      type="number"
                      placeholder="Or enter custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setAmount("");
                      }}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-[#ff4848] focus:ring-1 focus:ring-[#ff4848]"
                    />
                  </div>
                </div>

                {/* Payment Method Specific Fields */}
                {activeTab === "mpesa" && (
                  <div className="mb-6">
                    <label className="block text-[#4a4a4a] font-medium mb-2">M-Pesa Phone Number</label>
                    <input
                      type="tel"
                      placeholder="e.g. 07XX XXX XXX"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#ff4848] focus:ring-1 focus:ring-[#ff4848]"
                      required
                    />
                    <p className="text-sm text-gray-500 mt-2">You'll receive a payment request on your phone</p>
                  </div>
                )}

                {activeTab === "card" && (
                  <div className="mb-6 space-y-4">
                    <div>
                      <label className="block text-[#4a4a4a] font-medium mb-2">Card Number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#ff4848] focus:ring-1 focus:ring-[#ff4848]"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#4a4a4a] font-medium mb-2">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#ff4848] focus:ring-1 focus:ring-[#ff4848]"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[#4a4a4a] font-medium mb-2">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#ff4848] focus:ring-1 focus:ring-[#ff4848]"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "paypal" && (
                  <div className="mb-6 text-center py-4 bg-[#f6f4f1] rounded-lg">
                    <p className="text-[#4a4a4a] mb-4">You'll be redirected to PayPal to complete your donation</p>
                    <button
                      type="button"
                      className="bg-[#003087] hover:bg-[#002366] text-white px-6 py-2 rounded-lg inline-flex items-center gap-2"
                    >
                      <FaPaypal size={20} /> Continue with PayPal
                    </button>
                  </div>
                )}

                {activeTab === "international" && (
                  <div className="mb-6">
                    <label className="block text-[#4a4a4a] font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#ff4848] focus:ring-1 focus:ring-[#ff4848]"
                      required
                    />
                    <p className="text-sm text-gray-500 mt-2">We'll send you payment instructions</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#ff4848] hover:bg-[#e53e3e] text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-300"
                >
                  Donate {(amount || customAmount) && `KES ${(amount || customAmount).toLocaleString()}`}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default DonationHero;