import { FaHeart, FaRocket, FaFeatherAlt, FaBalanceScale, FaLightbulb, FaPeopleArrows } from "react-icons/fa";
import { motion } from "framer-motion";

const coreValues = [
  {
    icon: <FaHeart className="text-[#5B8C5A]" />,
    title: "Dignity for every mother",
    desc: "We believe every mother deserves respect, support, and the right to thrive.",
    bg: "bg-[#F0F7EF]"
  },
  {
    icon: <FaRocket className="text-[#E67E22]" />,
    title: "Community-centered solutions",
    desc: "We create local, sustainable childcare that empowers families and communities.",
    bg: "bg-[#FEF3E6]"
  },
  {
    icon: <FaFeatherAlt className="text-[#5B8C5A]" />,
    title: "Empowerment through education",
    desc: "We believe in the power of knowledge to uplift and transform lives.",
    bg: "bg-[#F0F7EF]"
  },
  {
    icon: <FaBalanceScale className="text-[#E67E22]" />,
    title: "•	Access and affordability",
    desc: "We ensure that quality childcare is accessible and affordable for all families.",
    bg: "bg-[#FEF3E6]"
  },
  {
    icon: <FaLightbulb className="text-[#5B8C5A]" />,
    title: "Simplicity & Clarity",
    desc: "We remove noise and keep things human and clear.",
    bg: "bg-[#F0F7EF]"
  },
  {
    icon: <FaPeopleArrows className="text-[#E67E22]" />,
    title: "Community Focused",
    desc: "We build connections that uplift and empower everyone.",
    bg: "bg-[#FEF3E6]"
  }
];

const StoryMission = () => {
  return (
    <section className="bg-[#f6f4f1] py-[20px] md:py-[2%] px-[20px] md:px-[8%] text-[#2C3E50] overflow-hidden">
      {/* Mission */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16 max-w-6xl mx-auto">
        <div className="w-full md:w-1/2">
          <img
            src="assets/mission.jpg"
            alt="Mission Illustration"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-[#E67E22]">Mission</span>
          </h2>
          <p className="text-lg text-[#4a4a4a] leading-relaxed">
          To provide safe, affordable, and nurturing childcare that empowers working mothers, supports early childhood development, and redefines care as essential community infrastructure, giving every child the right to a dignified start and every mother the freedom to thrive.
          </p>
        </div>
      </div>

      {/* Vision */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-20 max-w-6xl mx-auto">
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-[#E67E22]">Vision</span>
          </h2>
          <p className="text-lg text-[#4a4a4a] leading-relaxed">
          To build a future where no child is denied a safe place to grow and no mother is forced to choose between work and care, creating a network of community-rooted childcare centers that champion dignity, education, and opportunity for all.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="assets/vision.jpg"
            alt="Vision Illustration"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Core Values */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          CORE VALUES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, i) => (
            <div
              key={i}
              className={`${value.bg} rounded-xl p-8 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-transparent hover:border-[#5B8C5A]/20`}
            >
              <div className="text-4xl mb-5">{value.icon}</div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-3">{value.title}</h3>
              <p className="text-[#4a4a4a] leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StoryMission;