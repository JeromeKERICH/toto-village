import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CommunitySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-white text-[#2C3E50] py-5 px-4 sm:px-6 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl lg:text-5xl font-light text-[#2C3E50] mb-6"
            variants={itemVariants}
          >
            Join Our Community
          </motion.h2>
          <motion.div 
            className="w-16 h-0.5 bg-[#E67E22] mx-auto mb-6"
            variants={itemVariants}
          />
          <motion.p 
            className="text-lg text-[#2C3E50]/80 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            A collaborative ecosystem driving real change for families and communities
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            className="lg:w-1/2 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Main Feature Card */}
            <motion.div 
              className="group bg-white rounded-2xl p-8 border border-[#2C3E50]/10 hover:shadow-lg transition-all duration-500"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6">
                <div className="w-12 h-0.5 bg-[#E67E22] mb-4"></div>
                <h3 className="text-2xl font-normal text-[#2C3E50] mb-4">Together We Thrive</h3>
                <p className="text-[#2C3E50]/80 leading-relaxed">
                  A collaborative ecosystem of diverse stakeholders working together to drive economic empowerment for women and thriving childhoods for children. 
                </p>
              </div>
              
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  to="/community-extended" 
                  className="inline-flex items-center gap-3 bg-[#E67E22] text-white px-8 py-4 rounded-lg font-normal hover:bg-[#D35400] transition-colors duration-300"
                >
                  Join Our Community
                  <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="assets/community.jpg" 
                alt="Diverse community members collaborating and smiling in a bright, modern space" 
                className="w-full rounded-2xl object-cover h-[300px] shadow-sm border border-[#2C3E50]/10"
              />
              
              {/* Floating stat cards */}
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-white shadow-lg rounded-xl p-4 border border-[#2C3E50]/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-2xl font-light text-[#5B8C5A]">2,000+</div>
                <div className="text-sm text-[#2C3E50]/70">Community Members</div>
              </motion.div>

            
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div 
            className="bg-[#F8F9FA] rounded-2xl p-12 border border-[#2C3E50]/10"
            variants={itemVariants}
          >
            <h3 className="text-2xl lg:text-3xl font-light text-[#2C3E50] mb-4">
              Ready to Make a Difference?
            </h3>
            <motion.div 
              className="w-12 h-0.5 bg-[#5B8C5A] mx-auto mb-6"
              variants={itemVariants}
            />
            <p className="text-[#2C3E50]/80 mb-8 max-w-2xl mx-auto text-lg">
              Join thousands of members who are transforming childcare and creating opportunities for women and children in our communities. 
              </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/community-extended" 
                  className="inline-block bg-white text-[#2C3E50] px-8 py-4 rounded-lg font-normal border border-[#2C3E50] hover:bg-[#2C3E50] hover:text-white transition-all duration-300"
                >
                  Learn More
                </Link>
              </motion.div>
              
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}