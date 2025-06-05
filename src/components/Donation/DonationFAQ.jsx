import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const faqs = [
  {
    question: "How is my donation used?",
    answer:
      "Your donation goes directly toward providing essentials like food, shelter, education, and healthcare to those in need. We ensure transparency and accountability at every step.",
  },
  {
    question: "Is my payment secure?",
    answer:
      "Absolutely. All donations are processed using encrypted, secure payment gateways to protect your financial information.",
  },
  {
    question: "Can I donate monthly or set up recurring donations?",
    answer:
      "Yes! You can choose to make a one-time donation or support us monthly. Recurring donations help us plan long-term solutions for those we serve.",
  },
  {
    question: "Will I get a receipt for my donation?",
    answer:
      "Yes. You'll receive an instant email confirmation and receipt after your donation is processed.",
  },
  {
    question: "Can I donate in someone's name?",
    answer:
      "Of course! You can dedicate your donation in honor or memory of someone special. We'll send you a shareable certificate.",
  },
  {
    question: "Are donations tax-deductible?",
    answer:
      "Depending on your country's laws, your donation may be eligible for a tax deduction. Please consult your local tax guidelines.",
  },
];

const DonationFAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-16 px-[4%] md:px-[10%] bg-[#f6f4f1]">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center bg-[#5B8C5A]/10 px-4 py-2 rounded-full mb-4">
          <FaHeart className="text-[#E67E22] mr-2" />
          <span className="text-sm font-medium text-[#E67E22]">COMMON QUESTIONS</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
          Learn More About Donations
        </h2>
        <p className="text-[#4a4a4a] max-w-2xl mx-auto">
          Find answers to common questions about how your support makes a difference.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`rounded-xl shadow-sm transition-all duration-300 overflow-hidden border ${
              i % 2 === 0 ? "bg-[#F0F7EF] border-[#5B8C5A]/30" : "bg-[#FEF3E6] border-[#E67E22]/30"
            }`}
          >
            <button
              onClick={() => toggle(i)}
              className={`w-full text-left px-6 py-5 flex justify-between items-center transition-colors ${
                openIndex === i
                  ? i % 2 === 0 
                    ? "bg-[#5B8C5A]/10"
                    : "bg-[#E67E22]/10"
                  : "hover:bg-white/30"
              }`}
            >
              <span className="font-semibold text-[#2C3E50] text-lg">
                {faq.question}
              </span>
              <span
                className={`text-2xl font-bold ${
                  i % 2 === 0 ? "text-[#5B8C5A]" : "text-[#E67E22]"
                }`}
              >
                {openIndex === i ? "-" : "+"}
              </span>
            </button>
            {openIndex === i && (
              <div className="px-6 pb-5 text-[#4a4a4a] animate-fadeIn">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DonationFAQs;