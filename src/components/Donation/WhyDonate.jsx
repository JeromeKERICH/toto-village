import { motion } from "framer-motion";
import { FaBook, FaUtensils, FaHome, FaHeart, FaBookOpen, FaArrowRight, FaUsers } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { IoIosSchool } from "react-icons/io";

const WhyDonate = () => {
  const donationCards = [
    {
      title: "A child's education",
      description: "It helps us provide necessary supplies for a child's education today.",
      icon: <IoIosSchool className="text-[#E67E22] text-3xl" />,
      bgColor: "bg-[#E67E22]/10",
      borderColor: "border-[#E67E22]/20"
    },
    {
      title: "A book for a child",
      description: "We help provide books and learning materials for children in need.",
      icon: <FaBookOpen className="text-[#E67E22] text-3xl" />,
      bgColor: "bg-[#E67E22]/10",
      borderColor: "border-[#E67E22]/20"
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-24 text-[#2C3E50]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-[#5B8C5A]/10 px-4 py-2 rounded-full mb-4">
            <FaHeart className="text-[#E67E22] mr-2" />
            <span className="text-sm font-medium text-[#E67E22]">MAKE AN IMPACT</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-sm">
            Why Your Donation Matters
          </h2>
          <div className="bg-[#5B8C5A]/10 p-6 rounded-2xl border border-[#5B8C5A]/20 shadow-sm max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-[#2C3E50] leading-relaxed">
              Every donation you make brings us closer to a world where no child goes to bed hungry, 
              no mother feels helpless, and every dream has a chance to flourish.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {donationCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${card.bgColor} p-8 rounded-2xl border ${card.borderColor} shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#2C3E50]">{card.title}</h3>
              <p className="text-[#2C3E50] leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Solid CTA Section - Matching CommunitySection style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="relative bg-[#2C3E50] p-1 border rounded-lg"
        >
          
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyDonate;