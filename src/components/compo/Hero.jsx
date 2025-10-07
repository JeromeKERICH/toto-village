import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const gradientTextVariants = {
    hidden: { 
      opacity: 0,
      backgroundPosition: '0% 50%'
    },
    visible: {
      opacity: 1,
      backgroundPosition: '100% 50%',
      transition: {
        opacity: { duration: 1, ease: "easeOut" },
        backgroundPosition: { 
          duration: 3, 
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with layered gradients */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50"></div>
        
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{
            x: [-100, 100],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            x: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            },
            opacity: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-500/10 to-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-teal-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h1 
                className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-[1.1]"
                variants={gradientTextVariants}
                style={{
                  background: 'linear-gradient(135deg, #E67E22 0%, #5B8C5A 25%, #2C3E50 50%, #E67E22 75%, #5B8C5A 100%)',
                  backgroundSize: '300% 300%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Quality Affordable Childcare
              </motion.h1>
              
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-[#E67E22] to-[#5B8C5A] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-xl lg:text-2xl font-light text-gray-700 leading-relaxed">
                The Foundation of <span className="font-semibold bg-gradient-to-r from-[#2C3E50] to-[#5B8C5A] bg-clip-text text-transparent">Thriving Families</span> and <span className="font-semibold bg-gradient-to-r from-[#E67E22] to-[#5B8C5A] bg-clip-text text-transparent">Vibrant Economies</span>
              </h2>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text- lg:text-lg text-gray-600 leading-relaxed">
                At <span className="font-semibold text-[#E67E22]">Toto Village</span>, we believe childcare should never be a private struggle. 
                It's a <span className="font-semibold bg-gradient-to-r from-[#E67E22] to-[#5B8C5A] bg-clip-text text-transparent">shared opportunity</span> to transform lives across generations.
              </p>
              <p className="text-sm lg:text-lg text-gray-600 leading-relaxed">
                We partner with County Governments to create <span className="font-semibold bg-gradient-to-r from-[#5B8C5A] to-[#2C3E50] bg-clip-text text-transparent">bright, joyful spaces</span>  
                for children in everyday locations like markets, transport hubs, and workplaces.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 "
            >
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#E67E22]  to-[#FFA500] group-hover:from-[#FFA500] group-hover:to-[#E67E22] transition-all duration-500"></div>
                <Link
                  to="/about-partners"
                  className="relative block text-center bg-gradient-to-r from-[#E67E22] to-[#FFA500] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 group-hover:bg-gradient-to-l"
                >
                  Become a Partner
                </Link>
              </motion.div>
              
              
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            className="relative"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Gradient border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#E67E22] via-[#5B8C5A] to-[#2C3E50] rounded-3xl opacity-20 blur-lg"></div>
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="assets/hero4.jpg"
                  alt="Happy children playing at TotoVillage"
                  className="w-full md:h-[400px] h-[300px] object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>
            </motion.div>
            
           

            
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-[#E67E22] to-[#5B8C5A] rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}