import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is Toto Village?",
    answer: "Toto Village is a community-driven childcare model focused on empowering women and supporting early childhood development in low-income areas through affordable, safe, and nurturing care.",
  },
  {
    question: "Who are Toto Trainers?",
    answer: "Toto Trainers are trained local women who run home-based daycare centers as part of the Toto Village model. They offer quality care while building sustainable livelihoods.",
  },
  {
    question: "How does Toto Village support women?",
    answer: "We provide mothers with reliable childcare options so they can pursue education, careers, and income opportunities—while also empowering caregivers with training and income.",
  },
  {
    question: "Where is Toto Village based?",
    answer: "Our programs operate in middle- and low-income communities in Kenya, with a growing vision to expand across East Africa.",
  },
  {
    question: "How can I get involved or support Toto Village?",
    answer: "You can support us by donating, volunteering, or spreading the word about our mission. Visit our website for more information on how to contribute.",
  },
  {
    question: "What age groups do you cater to?",
    answer: "Toto Village primarily serves children aged 0-5 years, focusing on their early development and care needs.",
  },
  {
    question: "How can I find a Toto Village centre near me?",
    answer: "You can visit our website and use the center locator tool to find the nearest TotoCare center in your community.",
  },
  {
    question: "What makes Toto Village different from other childcare options?",
    answer: "Toto Village combines community engagement, caregiver empowerment, and a focus on early childhood development. We prioritize culturally relevant care that respects local values and needs.",
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const answerVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-5 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl lg:text-4xl font-light text-[#2C3E50] mb-6"
            variants={itemVariants}
          >
            Frequently Asked 
            <span className="text-[#E67E22]"> Questions</span>
          </motion.h2>
          <motion.div 
            className="w-16 h-0.5 bg-gradient-to-r from-[#E67E22] to-[#5B8C5A] mx-auto mb-8"
            variants={itemVariants}
          />
          <motion.p 
            className="text-xl text-[#2C3E50]/80 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Find answers to common questions about Toto Village and our childcare initiatives
          </motion.p>
        </motion.div>

        {/* FAQ Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-[#2C3E50]/10">
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left focus:outline-none"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <h3 className="text-lg lg:text-xl font-normal text-[#2C3E50] pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex-shrink-0 w-5 h-5 text-[#E67E22]"
                  >
                    <svg 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth={2} 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      variants={answerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="overflow-hidden"
                    >
                      <motion.div 
                        className="pt-4 border-t border-[#2C3E50]/10 mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <p className="text-[#2C3E50]/80 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
              Still Have Questions?
            </h3>
            <motion.div 
              className="w-12 h-0.5 bg-[#E67E22] mx-auto mb-6"
              variants={itemVariants}
            />
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with our team for more information about Toto Village and how you can get involved.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-white text-[#2C3E50] px-8 py-4 rounded-lg font-normal hover:bg-gray-50 transition-colors duration-300">
                Contact Us
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;