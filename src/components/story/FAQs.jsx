import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is Toto Village?",
    answer:
      "Toto Village is a community-driven childcare model focused on empowering women and supporting early childhood development in low-income areas through affordable, safe, and nurturing care.",
  },
  {
    question: "Who are Toto Trainers?",
    answer:
      "Toto Trainers are trained local women who run home-based daycare centers as part of the Toto Village model. They offer quality care while building sustainable livelihoods.",
  },
  {
    question: "How does Toto Village support women?",
    answer:
      "We provide mothers with reliable childcare options so they can pursue education, careers, and income opportunities—while also empowering caregivers with training and income.",
  },
  {
    question: "Where is Toto Village based?",
    answer:
      "Our programs operate in middle- and low-income communities in Kenya, with a growing vision to expand across East Africa.",
  },
  {
    question: "How can I get involved or support Toto Village?",
    answer:
      "You can support us by donating, volunteering, or spreading the word about our mission. Visit our website for more information on how to contribute.",
  },
  {
    question: "What age groups do you cater to?",
    answer:
      "Toto Village primarily serves children aged 0-5 years, focusing on their early development and care needs.",
  },
  {
    question: "How can I find a Toto Village centre near me?",
    answer:
      "You can visit our website and use the center locator tool to find the nearest TotoCare center in your community.",
  },
  {
    question: "What makes Toto Village different from other childcare options?",
    answer:
      "Toto Village combines community engagement, caregiver empowerment, and a focus on early childhood development. We prioritize culturally relevant care that respects local values and needs.",
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 px-[4%] md:px-[10%] bg-[#f8fafc] text-[#1e293b]">
      <div className="max-w-6xl mx-auto">
        <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold mb-3 text-[#2C3E50] drop-shadow-sm text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left text-lg font-semibold focus:outline-none"
              >
                <span>{faq.question}</span>
                <FaChevronDown
                  className={`transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`mt-2 text-sm text-gray-600 leading-relaxed transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;