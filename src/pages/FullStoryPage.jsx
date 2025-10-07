import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FullStoryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#faf9f7] to-[#f0ece4] text-[#1D3557] px-[4%] md:px-[8%] py-12 max-w-full mx-auto font-sans">

      {/* Back Button */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <Link
          to="/"
          className="text-[#1D3557] hover:text-[#ff4848] transition flex items-center gap-2 text-sm font-semibold group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Home
        </Link>
      </motion.div>

      {/* Title */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold mb-10 leading-tight"
      >
        The <span className="text-[#ff4848]">Story</span> of Toto Village
      </motion.h1>

      {/* Intro / Founder Quote */}
      <motion.blockquote 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative bg-white p-8 rounded-xl shadow-md mb-14 border-l-4 border-[#ff4848]"
      >
        <svg 
          className="absolute top-4 left-4 text-[#ff4848] opacity-20 w-12 h-12" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-lg md:text-xl text-[#4B5563] leading-relaxed italic relative z-10">
          “The Toto Village program emerged from deep introspection after a decade-long journey of running affordable schools in middle- and low-income communities in Kenya. Our years of serving school-going children revealed a stark reality: countless mothers with young children were left without viable childcare options, forcing them to abandon their career and economic growth ambitions. We could no longer ignore the prevailing childcare gaps in our communities.”
        </p>
        <p className="font-semibold mt-6 text-[#1D3557] flex items-center">
          <span className="w-8 h-0.5 bg-[#f4cc15] mr-3"></span>
          Prisca Muyodi, Founder
        </p>
      </motion.blockquote>
      <div>

      
        

        {/* Nyumbani Pack to Care Economy */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1D3557] flex items-center">
            <span className="w-6 h-1 bg-[#f4cc15] mr-3 mt-1"></span>
            From Nyumbani Pack to a Thriving Care Economy
          </h2>
          <div className="space-y-5 text-[#4B5563]">
            <p className="text-lg leading-relaxed">
            The initial service was a curated package to support families during the COVID pandemic: the Nyumbani Toto Pack - a home-care package designed to support families with in-home childcare. 

As the program grew, so did the vision. 

<br/>
<br/>

Toto Village evolved into a community-centred model that partners with government and private sector to scale community-embeded childcare villages; as well as empowering micro-daycare businesswomen (TotoFounders) to professionalise childcare-as-a-livelihood model. 

It's a powerful catalyst for multi-generational community empowerment.

            </p>
            
           
          </div>
        </motion.section>


        {/* Why Toto Village Matters */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow mt-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1D3557] flex items-center">
            <span className="w-6 h-1 bg-[#f4cc15] mr-3 mt-1"></span>
            Why Toto Village Matters, And Why It's Just the Beginning
          </h2>
          <div className="space-y-5 text-[#4B5563]">
            <p className="text-lg leading-relaxed">
            Toto Village is more than a program. It's a movement—a bold, hopeful answer to systemic problems faced by millions of families across East Africa.

It brings the authenticity of ubuntu back into the childcare conversation. It proves that innovative solutions can come from within the community and be tailored to its unique challenges.
</p>
            <p className="text-lg leading-relaxed">
              As Toto Village grows, it invites everyone—parents, caregivers, partners, and supporters—to join in shaping a future where:
            </p>
            <ul className="list-none space-y-3 mb-6">
              {[
                "Women don't have to choose between their career and motherhood.",
                "Children grow up safe, healthy, and loved.",
                "Communities build thriving economies around quality childcare and support."
                
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className={`text-${index % 2 === 0 ? '[#ff4848]' : '[#f4cc15]'} mr-3 mt-1`}>•</span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg leading-relaxed font-medium text-[#1D3557]">
              And this story? It's still unfolding.
            </p>
          </div>
        </motion.section>
      </div>

      {/* Closing Quote */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 bg-[#1D3557] text-white p-8 rounded-xl shadow-lg"
      >
        <svg 
          className="w-8 h-8 mb-4 text-[#f4cc15]" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          “Our journey started with a simple but powerful insight: no mother should have to give up her dreams because there's nowhere safe to leave her child. Through TotoCare, we've created a model that honors families, uplifts women, and nurtures the next generation. This is just the beginning, and we're excited to grow with our community every step of the way.”
        </p>
        <p className="font-semibold text-[#f4cc15]">
          — Prisca Muyodi, Founder
        </p>
      </motion.footer>
    </main>
  );
};

export default FullStoryPage;