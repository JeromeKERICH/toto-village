import { motion } from "framer-motion";
import { FaBook, FaUtensils, FaHome, FaHeart } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { IoIosSchool } from "react-icons/io";

const WhyDonate = () => {
  const donationCards = [
    {
      title: "A child back to school",
      description: "KES 500 buys a child schoolbooks, shoes, and lunch for a week.",
      icon: <IoIosSchool className="text-[#FF4848] text-3xl" />,
      bgColor: "bg-[#FFF0F0]",
      borderColor: "border-[#FF4848]/30"
    },
    {
      title: "A warm meal served",
      description: "KES 200 provides a cooked meal for a family of 3 today.",
      icon: <FaUtensils className="text-[#F4CC15] text-3xl" />,
      bgColor: "bg-[#FFF8E6]",
      borderColor: "border-[#F4CC15]/30"
    },
    {
      title: "Shelter & dignity",
      description: "KES 1000 helps us restore dignity with clothing, bedding, and hygiene.",
      icon: <GiClothes className="text-[#457B9D] text-3xl" />,
      bgColor: "bg-[#F0F7FF]",
      borderColor: "border-[#457B9D]/30"
    }
  ];

  return (
    <section className="bg-[#f6f4f1] py-[20px] md:py-[2%] px-[20px] md:px-[8%] text-[#2b2b2b]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-[#FF4848]/10 px-4 py-2 rounded-full mb-4">
            <FaHeart className="text-[#FF4848] mr-2" />
            <span className="text-sm font-medium text-[#FF4848]">MAKE AN IMPACT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Your <span className="text-[#FF4848]">Donation</span> Matters
          </h2>
          <p className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto leading-relaxed">
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
              <h3 className="text-xl font-bold mb-3 text-[#1D3557]">{card.title}</h3>
              <p className="text-[#4B5563] leading-relaxed">{card.description}</p>
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
          <p className="text-lg text-[#4B5563] mb-6">
            Your support creates ripples of change that transform entire communities.
          </p>
          <button className="bg-[#FF4848] hover:bg-[#E53E3E] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center mx-auto">
            <FaHeart className="mr-2" />
            See More Impact Stories
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyDonate;