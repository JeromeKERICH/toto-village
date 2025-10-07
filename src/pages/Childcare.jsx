import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PartnershipProgram() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partnershipModels = [
    {
      title: "County Partnerships",
      description: "Collaborating with local governments to establish childcare hubs in high-traffic economic zones",
      color: "from-[#E67E22] to-[#FFA500]"
    },
    {
      title: "Facility Identification",
      description: "Assessing and selecting optimal locations in markets, transport hubs and commercial centers",
      color: "from-[#5B8C5A] to-[#7CB083]"
    },
    {
      title: "Community Engagement",
      description: "Working with local stakeholders to ensure solutions meet actual community needs",
      color: "from-[#2C3E50] to-[#4A5F7A]"
    },
    {
      title: "Sustainable Operations",
      description: "Developing financially viable models that keep care affordable while maintaining quality",
      color: "from-[#E67E22] to-[#5B8C5A]"
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative py-10 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-[#2C3E50] to-[#1a2f3a] text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#E67E22]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#5B8C5A]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#2C3E50]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                  <span className="text-white/80 text-sm font-light tracking-widest uppercase">Strategic Partnerships</span>
                </div>
                
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight leading-[1.1]">
                  Building
                  <span className="text-[#E67E22] block mt-2">Childcare Ecosystems</span>
                </h1>
                
                <motion.div 
                  className="w-24 h-0.5 bg-gradient-to-r from-[#E67E22] to-[#5B8C5A] my-8"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <p className="text-xl text-white/90 leading-relaxed">
                  We partner with counties to create sustainable childcare solutions in high-traffic economic areas, 
                  enabling working parents to thrive while their children receive quality care.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="flex items-center justify-center w-6 h-6 bg-[#5B8C5A]/20 rounded-full group-hover:bg-[#5B8C5A] transition-colors duration-300">
                    <div className="w-1.5 h-1.5 bg-[#5B8C5A] rounded-full group-hover:bg-white transition-colors duration-300"></div>
                  </div>
                  <span className="text-lg">Strategic locations in high-need commercial areas</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="flex items-center justify-center w-6 h-6 bg-[#5B8C5A]/20 rounded-full group-hover:bg-[#5B8C5A] transition-colors duration-300">
                    <div className="w-1.5 h-1.5 bg-[#5B8C5A] rounded-full group-hover:bg-white transition-colors duration-300"></div>
                  </div>
                  <span className="text-lg">Public-private partnership models</span>
                </div>
                
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-4 pt-4">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 bg-[#E67E22] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#D35400] transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Start Partnership
                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <motion.div 
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="/assets/m2.jpg" 
                  alt="Childcare center in busy market area" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </motion.div>
              
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of the content - Clean and Professional */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Impact Metrics */}
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl lg:text-4xl font-light text-[#2C3E50] mb-6"
              variants={itemVariants}
            >
              Measurable Impact
            </motion.h2>
            <motion.div 
              className="w-16 h-0.5 bg-gradient-to-r from-[#E67E22] to-[#5B8C5A] mx-auto mb-8"
              variants={itemVariants}
            />
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { value: "85%", label: "Reduction in unattended children", color: "text-[#E67E22]" },
                { value: "2.5x", label: "Increase in vendor productivity", color: "text-[#5B8C5A]" },
                { value: "40+", label: "Communities transformed", color: "text-[#2C3E50]" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className={`text-4xl font-light ${stat.color} mb-3`}>{stat.value}</div>
                  <p className="text-[#2C3E50]/80">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partnership Models */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              className="text-center mb-12"
              variants={itemVariants}
            >
              <h2 className="text-3xl lg:text-4xl font-light text-[#2C3E50] mb-6">Our Approach</h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-[#E67E22] to-[#5B8C5A] mx-auto mb-6"></div>
              <p className="text-xl text-[#2C3E50]/80 max-w-2xl mx-auto">
                Flexible partnership models tailored to local needs
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnershipModels.map((model, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl border border-[#2C3E50]/10 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-12 h-0.5 bg-gradient-to-r ${model.color} mb-4`}></div>
                  <h3 className="text-xl font-normal text-[#2C3E50] mb-3">{model.title}</h3>
                  <p className="text-[#2C3E50]/80 text-sm">{model.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Success Stories */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              className="text-center mb-12"
              variants={itemVariants}
            >
              <h2 className="text-5xl lg:text-4xl font-light text-[#2C3E50] mb-6">Success Stories</h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-[#E67E22] to-[#5B8C5A] mx-auto"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Nakuru Market Transformation",
                  quote: "Our partnership has created safe spaces for children while their parents work, significantly improving market cleanliness and security.",
                  author: "Nakuru County Markets CEC"
                },
                {
                  title: "Uthabiti Africa",
                  quote: "The childcare center at our stage has reduced absenteeism among women workers by over 60% and created 15 new jobs.",
                  author: "Uthabiti Africa"
                }
              ].map((story, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-8 rounded-xl border border-[#2C3E50]/10"
                >
                  <h3 className="text-xl font-normal text-[#2C3E50] mb-4">{story.title}</h3>
                  <p className="text-[#2C3E50]/80 mb-6 leading-relaxed">"{story.quote}"</p>
                  <p className="font-normal text-[#2C3E50]">{story.author}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          
        </div>
      </section>
    </div>
  );
}