import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FoundersBrief = () => {
  return (
    <section className="bg-white py-[20px] md:py-[2%] px-[20px] md:px-[8%] text-[#2C3E50]">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
        {/* Founder Image */}
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative group">
            <img
              src="assets/founder.jpg"
              alt="Prisca Muyodi - Founder"
              className="w-full rounded-2xl shadow-xl object-cover max-h-[500px] border-4 border-white transform group-hover:-rotate-1 transition duration-300"
            />
            <div className="absolute inset-0 bg-[#5B8C5A] opacity-0 group-hover:opacity-10 rounded-2xl transition duration-500"></div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          className="w-full md:w-1/2 space-y-8"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="space-y-2">
            <span className="text-[#5B8C5A] font-medium tracking-wider">THE FOUNDER'S STORY</span>
            <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold mb-3 text-[#2C3E50] drop-shadow-sm leading-tight">
              Meet The <span className="text-[#E67E22]">Visionary</span>
            </h2>
            <div className="w-20 h-1 bg-[#E67E22]"></div>
          </div>

          <p className="text-lg md:text-xl text-[#4a4a4a] leading-relaxed">
            Prisca Muyodi's decade-long work in low-income communities led to a powerful realization
            mothers were sacrificing their dreams due to lack of childcare. From this insight, Toto Village was born.
            Her vision? A care economy that uplifts women, nurtures children, and empowers communities from within.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/full-story"
              className="inline-block bg-[#2C3E50] hover:bg-[#1a2635] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
            >
              Read More About Us
            </Link>
            <button
            
              className="inline-block border-2 border-[#5B8C5A] text-[#5B8C5A] hover:bg-[#5B8C5A] hover:text-white px-8 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300 font-medium"
            >
              View Our Gallery
            </button>
          </div>

          <div className="pt-4 flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#F5E6CA] flex items-center justify-center border border-[#E67E22]">
              <svg className="w-6 h-6 text-[#E67E22]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-sm text-[#6B7280] italic">
              "Every mother deserves the chance to pursue her dreams while knowing her child is safe and loved."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FoundersBrief;