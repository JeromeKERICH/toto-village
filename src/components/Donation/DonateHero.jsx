import { useState } from "react";
import { PaystackConsumer } from "react-paystack";
import { FiX, FiCreditCard, FiDollarSign, FiCheckCircle } from "react-icons/fi";

const DonationHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

  const donationAmounts = [50, 100, 500, 1000]; // USD options

  const getAmount = () => parseFloat(amount || customAmount || "0");
  const getAmountInKobo = () => Math.round(getAmount() * 100 * 130); // Assuming 1 USD = 160 KES

  const generateReference = () =>
    `donate-${new Date().getTime()}-${Math.floor(Math.random() * 1000)}`;

  const config = {
    reference: generateReference(),
    email,
    amount: getAmountInKobo(),
    publicKey,
    currency: "KES",
    metadata: {
      phone,
      donationType: "one-time",
    },
  };

  const handleSuccess = () => {
    setIsSuccess(true);
    setTimeout(() => {
      handleCloseModal();
    }, 3000); // Reduced from 5s to 3s for better UX
  };

  const handleCloseModal = () => {
    resetForm();
    setIsModalOpen(false);
  };

  const resetForm = () => {
    setAmount("");
    setCustomAmount("");
    setEmail("");
    setPhone("");
    setIsProcessing(false);
    setIsSuccess(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1D3557] to-[#2a4b6f] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Make a Difference Today</h1>
          <p className="text-lg md:text-xl mb-8">
            Your generous support helps us create lasting change in our community.
            Every contribution makes an impact.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#E67E22] hover:bg-[#D35400] px-8 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-opacity-50"
          >
            Donate Now
          </button>
        </div>
      </section>

      {/* Donation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4 py-8">
          <div className="bg-white rounded-lg w-full max-w-lg shadow-xl overflow-y-auto max-h-full animate-fade-in">
            <div className="flex justify-between items-center border-b px-6 py-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {isSuccess ? "Thank You!" : "Donate to Support Us"}
              </h2>
              <button 
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-red-500"
              >
                <FiX size={24} />
              </button>
            </div>

            <div className="p-6">
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="flex justify-center mb-6">
                    <div className="bg-green-100 p-4 rounded-full">
                      <FiCheckCircle className="text-green-600" size={48} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Donation Successful!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your generous donation of <span className="font-semibold">${getAmount()}</span>.
                    A receipt has been sent to <span className="font-semibold">{email}</span>.
                  </p>
                  <p className="text-sm text-gray-500 animate-pulse">
                    Closing...
                  </p>
                </div>
              ) : (
                <form className="space-y-5">
                  {/* Amount */}
                  <div>
                    <label className="font-semibold block mb-2 text-sm text-gray-700">Amount (USD)</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                      {donationAmounts.map((amt) => (
                        <button
                          type="button"
                          key={amt}
                          onClick={() => {
                            setAmount(amt);
                            setCustomAmount("");
                          }}
                          className={`border rounded-md py-3 transition-all ${
                            parseFloat(amount) === amt
                              ? "bg-orange-100 border-orange-500 text-orange-700 font-medium shadow-inner"
                              : "border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          ${amt}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">$</span>
                      <input
                        type="number"
                        placeholder="Other amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setAmount("");
                        }}
                        className="w-full border rounded-md pl-8 pr-3 py-2 border-gray-300 focus:border-orange-400 focus:ring-1 focus:ring-orange-200"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="font-semibold block mb-2 text-sm text-gray-700">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border rounded-md px-3 py-2 border-gray-300 focus:border-orange-400 focus:ring-1 focus:ring-orange-200"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="font-semibold block mb-2 text-sm text-gray-700">Phone</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full border rounded-md px-3 py-2 border-gray-300 focus:border-orange-400 focus:ring-1 focus:ring-orange-200"
                      required
                    />
                  </div>

                  {/* Payment Button */}
                  <PaystackConsumer {...config}>
                    {({ initializePayment }) => (
                      <button
                        type="button"
                        onClick={() => {
                          if (!email || !getAmount()) return;
                          setIsProcessing(true);
                          initializePayment(handleSuccess, handleCloseModal);
                        }}
                        disabled={!email || !getAmount() || isProcessing}
                        className={`w-full bg-[#E67E22] hover:bg-[#D35400] text-white font-semibold py-3 px-4 rounded-lg transition-all ${
                          isProcessing ? "opacity-80" : "hover:shadow-md"
                        } disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
                      >
                        {isProcessing ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            <FiCreditCard />
                            Donate ${getAmount()}
                          </>
                        )}
                      </button>
                    )}
                  </PaystackConsumer>
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