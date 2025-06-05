import { FaHandshake, FaSearchDollar, FaRocket } from "react-icons/fa";

const features = [
  {
    title: "Shared Vision",
    desc: "We align with partners who care deeply about people and purpose.",
    icon: <FaHandshake size={32} />,
    color: "bg-[#fff0f0] text-[#E67E22]"
  },
  {
    title: "Transparency",
    desc: "Every coin is accounted for. You see where your support goes.",
    icon: <FaSearchDollar size={32} />,
    color: "bg-[#fff0f0] text-[#E67E22]"
  },
  {
    title: "Mutual Growth",
    desc: "We promote your brand as you help us amplify our mission.",
    icon: <FaRocket size={32} />,
    color: "bg-[#fff0f0] text-[#E67E22]"
  },
];

const WhyPartner = () => {
  return (
    <section className="bg-[#f6f4f1] py-[20px] md:py-[2%] px-[20px] md:px-[8%] text-[#2b2b2b]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-[#2b2b2b] mb-4">WHY PARTNER WITH US</h2>
          <p className="text-xl text-[#4a4a4a] max-w-2xl mx-auto">
            Discover how our partnerships create meaningful change together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div 
              key={idx} 
              className="group p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`flex justify-center items-center w-20 h-20 mx-auto mb-6 rounded-full ${item.color} group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[#2b2b2b]">{item.title}</h3>
              <p className="text-[#4a4a4a]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;