import { FaHeart, FaRocket, FaFeatherAlt, FaBalanceScale, FaLightbulb, FaPeopleArrows } from "react-icons/fa";
import { motion } from "framer-motion";

const coreValues = [
  {
    icon: <FaHeart className="text-[#ff4848]" />,
    title: "Empathy First",
    desc: "We listen, we feel, and we serve with heart.",
    bg: "bg-[#fff0f0]"
  },
  {
    icon: <FaRocket className="text-[#f4cc15]" />,
    title: "Courage to Lead",
    desc: "We dare to go first, with bold solutions and fearless ideas.",
    bg: "bg-[#fff8e6]"
  },
  {
    icon: <FaFeatherAlt className="text-[#ff4848]" />,
    title: "Authenticity Always",
    desc: "We stay true to our purpose and our people.",
    bg: "bg-[#fff0f0]"
  },
  {
    icon: <FaBalanceScale className="text-[#f4cc15]" />,
    title: "Purpose Over Profit",
    desc: "Every action stems from meaning, not margins.",
    bg: "bg-[#fff8e6]"
  },
  {
    icon: <FaLightbulb className="text-[#ff4848]" />,
    title: "Simplicity & Clarity",
    desc: "We remove noise and keep things human and clear.",
    bg: "bg-[#fff0f0]"
  },
  {
    icon: <FaPeopleArrows className="text-[#f4cc15]" />,
    title: "Community Focused",
    desc: "We build connections that uplift and empower everyone.",
    bg: "bg-[#fff8e6]"
  }
];

const StoryMission = () => {
  return (
    <section className="bg-[#f6f4f1] py-[20px] md:py-[2%] px-[20px] md:px-[8%] text-[#2b2b2b] overflow-hidden">
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
            Our <span className="text-[#ff4848]">Mission</span>
          </h2>
          <p className="text-lg text-[#4a4a4a] leading-relaxed">
            To empower individuals and communities through transformative digital solutions,
            heartfelt storytelling, and compassionate support that inspires both personal and collective growth.
          </p>
        </div>
      </div>

      {/* Vision */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-20 max-w-6xl mx-auto">
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-[#f4cc15]">Vision</span>
          </h2>
          <p className="text-lg text-[#4a4a4a] leading-relaxed">
            To be a beacon of light and guidance for purpose-driven brands, families, and individuals—
            creating a world where tech serves humanity with empathy, creativity, and integrity.
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
          CORE <span className="text-[#ff4848]">VALUES</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, i) => (
            <div
              key={i}
              className={`${value.bg} rounded-xl p-8 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-transparent hover:border-[#ff4848]/20`}
            >
              <div className="text-4xl mb-5">{value.icon}</div>
              <h3 className="text-xl font-bold text-[#2b2b2b] mb-3">{value.title}</h3>
              <p className="text-[#4a4a4a] leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StoryMission;