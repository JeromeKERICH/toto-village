import { useState } from "react";
import { FiX, FiCreditCard, FiDollarSign, FiCalendar, FiRepeat } from "react-icons/fi";
import { FaPaypal, FaMobileAlt } from "react-icons/fa";

const DonationHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [donationType, setDonationType] = useState("one-time"); // one-time, monthly, yearly
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const donationAmounts = [10, 50, 100, 500, 1000]; // USD amounts

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setIsModalOpen(false);
        setAmount("");
        setCustomAmount("");
      }, 3000);
    }, 2000);
  };

  return (
    <>
      <section className="relative bg-gradient-to-br from-[#1D3557] to-[#2a4b6f] py-20 md:py-28 px-6 text-white overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-1/4 left-1/5 w-32 h-32 rounded-full bg-[#ff4848] mix-blend-overlay"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-[#f4cc15] mix-blend-overlay"></div>
        </div>

        <div className="relative max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Make a Difference <span className="text-[#f4cc15]">Today</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#F1FAEE] leading-relaxed">
            Choose how you'd like to support our cause. Your contribution helps create lasting change.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#E67E22] hover:bg-[#e53e3e] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Donate Now
            </button>
          </div>
        </div>
      </section>

      {/* Donation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold text-[#2b2b2b]">Support Our Cause</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-[#ff4848]"
                disabled={isProcessing}
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    Your {donationType === "one-time" ? "one-time" : donationType} donation of ${(amount || customAmount).toLocaleString()} has been processed.
                  </p>
                  {donationType !== "one-time" && (
                    <p className="text-sm text-gray-500 mt-2">
                      Future {donationType} payments will be processed automatically.
                    </p>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Donation Type Selection */}
                  <div className="mb-6">
                    <label className="block text-[#4a4a4a] font-medium mb-3">Donation Type</label>
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => setDonationType("one-time")}
                        className={`flex flex-col items-center gap-1 p-3 rounded-lg border ${donationType === "one-time" ? "bg-[#fff0f0] border-[#ff4848] text-[#ff4848]" : "border-gray-300"}`}
                      >
                        <FiDollarSign size={20} />
                        <span>One-Time</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setDonationType("monthly")}
                        className={`flex flex-col items-center gap-1 p-3 rounded-lg border ${donationType === "monthly" ? "bg-[#fff0f0] border-[#ff4848] text-[#ff4848]" : "border-gray-300"}`}
                      >
                        <FiRepeat size={20} />
                        <span>Monthly</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setDonationType("yearly")}
                        className={`flex flex-col items-center gap-1 p-3 rounded-lg border ${donationType === "yearly" ? "bg-[#fff0f0] border-[#ff4848] text-[#ff4848]" : "border-gray-300"}`}
                      >
                        <FiCalendar size={20} />
                        <span>Yearly</span>
                      </button>
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div className="mb-6">
                    <label className="block text-[#4a4a4a] font-medium mb-3">Select Amount (USD)</label>
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
                          ${amt.toLocaleString()}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="number"
                        placeholder="Or enter custom amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setAmount("");
                        }}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-[#ff4848] focus:ring-1 focus:ring-[#ff4848]"
                        required={!amount}
                      />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="mb-6 space-y-4">
                    <div>
                      <label className="block text-[#4a4a4a] font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#ff4848] focus:ring-1 focus:ring-[#ff4848]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[#4a4a4a] font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="123-456-7890"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#ff4848] focus:ring-1 focus:ring-[#ff4848]"
                        required
                      />
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="mb-6">
                    <label className="block text-[#4a4a4a] font-medium mb-3">Payment Method</label>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        className="flex-1 flex flex-col items-center gap-1 p-3 rounded-lg border border-gray-300 hover:border-[#ff4848]"
                      >
                        <FiCreditCard size={20} />
                        <span>Card</span>
                      </button>
                      <button
                        type="button"
                        className="flex-1 flex flex-col items-center gap-1 p-3 rounded-lg border border-gray-300 hover:border-[#ff4848]"
                      >
                        <FaPaypal size={20} />
                        <span>PayPal</span>
                      </button>
                    </div>
                  </div>

                  {/* Recurring Donation Notice */}
                  {donationType !== "one-time" && (
                    <div className="bg-blue-50 text-blue-800 p-4 rounded-lg mb-6 text-sm">
                      <p>
                        By selecting {donationType} donation, you authorize us to automatically charge your payment method 
                        {donationType === "monthly" ? " every month" : " every year"} for the selected amount. 
                        You can cancel anytime by contacting us.
                      </p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isProcessing || (!amount && !customAmount)}
                    className="w-full bg-[#ff4848] hover:bg-[#e53e3e] text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <>
                        {donationType === "one-time" ? "Donate" : `Set Up ${donationType.charAt(0).toUpperCase() + donationType.slice(1)} Donation`} 
                        {(amount || customAmount) && ` $${(amount || customAmount).toLocaleString()}`}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DonationHero;