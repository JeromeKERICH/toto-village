import { motion } from "framer-motion";
import { FaBook, FaUtensils, FaHome, FaHeart, FaBookOpen } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { IoIosSchool } from "react-icons/io";

const WhyDonate = () => {
  const donationCards = [
    {
      title: "A child’s education",
      description: "It helps us provide neccesary supplies for a child’s education today.",
      icon: <IoIosSchool className="text-[#5B8C5A] text-3xl" />,
      bgColor: "bg-[#F0F7EF]",
      borderColor: "border-[#5B8C5A]/30"
    },
    {
      title: "A book for a child",
      description: "We help provide books and learning materials for children in need.",
      icon: <FaBookOpen className="text-[#E67E22] text-3xl" />,
      bgColor: "bg-[#FEF3E6]",
      borderColor: "border-[#E67E22]/30"
    },
  ];

  return (
    <section className="bg-[#f6f4f1] py-[20px] md:py-[2%] px-[20px] md:px-[8%] text-[#2C3E50]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-[#5B8C5A]/10 px-4 py-2 rounded-full mb-4">
            <FaHeart className="text-[#E67E22] mr-2" />
            <span className="text-sm font-medium text-[#E67E22]">MAKE AN IMPACT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Your <span className="text-[#E67E22]">Donation</span> Matters
          </h2>
          <p className="text-lg md:text-xl text-[#4a4a4a] max-w-3xl mx-auto leading-relaxed">
            Every donation you make brings us closer to a world where no child goes to bed hungry, 
            no mother feels helpless, and every dream has a chance to flourish.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {donationCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${card.bgColor} p-8 rounded-xl border ${card.borderColor} shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#2C3E50]">{card.title}</h3>
              <p className="text-[#4a4a4a] leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-[#4a4a4a] mb-6">
            Your support creates ripples of change that transform entire communities.
          </p>
          <button className="bg-[#E67E22] hover:bg-[#4A7B48] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center mx-auto">
            <FaHeart className="mr-2" />
            See More Impact Stories
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyDonate;