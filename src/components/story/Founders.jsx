import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FoundersBrief = () => {
  return (
    <section className="bg-[#f6f4f1] py-[20px] md:py-[2%] px-[20px] md:px-[8%] text-[#1D3557]]">
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
            <div className="absolute inset-0 bg-[#ff4848] opacity-0 group-hover:opacity-10 rounded-2xl transition duration-500"></div>
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
            <span className="text-[#ff4848] font-medium tracking-wider">THE FOUNDER'S STORY</span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Meet The <span className="text-[#ff4848]">Visionary</span>
            </h2>
            <div className="w-20 h-1 bg-[#f4cc15]"></div>
          </div>

          <p className="text-lg md:text-xl text-[#4B5563] leading-relaxed">
            Prisca Muyodi's decade-long work in low-income communities led to a powerful realization—
            mothers were sacrificing their dreams due to lack of childcare. From this insight, Toto Village was born.
            Her vision? A care economy that uplifts women, nurtures children, and empowers communities from within.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/full-story"
              className="inline-block bg-[#1D3557] hover:bg-[#12243f] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
            >
              Read Our Full Story
            </Link>
            <Link
              to="/gallery"
              className="inline-block border-2 border-[#1D3557] text-[#1D3557] hover:bg-[#1D3557] hover:text-white px-8 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300 font-medium"
            >
              View Our Gallery
            </Link>
          </div>

          <div className="pt-4 flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#fff0f0] flex items-center justify-center">
              <svg className="w-6 h-6 text-[#ff4848]" fill="currentColor" viewBox="0 0 20 20">
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