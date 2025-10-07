

import React from 'react';
import { motion } from 'framer-motion';

const GetInvolvedHero = () => {
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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="relative md:h-[400px] h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a2f3a] via-[#2C3E50] to-[#3a5c40]">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0">
                {/* Geometric Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
                    <div className="absolute bottom-32 right-20 w-24 h-24 border border-white rotate-45"></div>
                    <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
                    <div className="absolute top-40 right-40 w-20 h-20 border border-white rotate-12"></div>
                </div>
                
                {/* Subtle Gradient Orbs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#2980B9]/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E67E22]/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#5B8C5A]/15 rounded-full blur-3xl"></div>
            </div>

            {/* Centered Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div 
                    className="space-y-8"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        
                        
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-light text-white tracking-tight leading-[1.1] mb-8">
                        Support Our Mission to Transform  <span className="block mt-4 bg-gradient-to-r from-[#E67E22] via-[#FFA500] to-[#E67E22] bg-clip-text text-transparent">
                        Childcare Access
                            </span>
                            
                        </h1>
                        
                        <motion.div 
                            className="w-32 h-0.5 bg-gradient-to-r from-[#2980B9] to-[#E67E22] mx-auto my-8"
                            initial={{ width: 0 }}
                            animate={{ width: 128 }}
                            transition={{ delay: 0.4, duration: 1 }}
                        />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                        <p className="text-xl md:text-center  lg:text-2xl text-justify text-white/80 leading-relaxed font-light max-w-4xl mx-auto">
                        Join us in making a lasting impact on early childhood development in Africa. Your support helps us provide quality childcare, empower families, and build stronger communities. Together, we can create a brighter future for the next generation.
                        </p>
                    </motion.div>

                  </motion.div>
            </div>
            
            
        </section>
    );
};

export default GetInvolvedHero;