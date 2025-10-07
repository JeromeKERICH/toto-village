import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const DonationPage = () => {
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
        <div className="py-5 px-4 sm:px-6 lg:px-15 bg-white">
            {/* Donation CTA Section */}
            <motion.section 
                className="relative py-5 px-8 rounded-3xl overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
            >
                {/* Background with layered gradients */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFE6E6] via-[#FFF5F5] to-white"></div>
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
                    {/* Geometric elements */}
                    <div className="absolute top-10 left-10 w-32 h-32 bg-[#E67E22]/5 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#5B8C5A]/5 rounded-full blur-2xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#2C3E50]/5 rounded-full blur-2xl"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <motion.h2 
                        className="text-3xl lg:text-4xl xl:text-5xl font-light text-[#2C3E50] mb-6 leading-tight"
                        variants={gradientTextVariants}
                        style={{
                            background: 'linear-gradient(135deg, #E67E22 0%, #5B8C5A 25%, #2C3E50 50%, #E67E22 75%, #5B8C5A 100%)',
                            backgroundSize: '300% 300%',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        Support a Future
                    </motion.h2>

                    <motion.h3 
                        className="text-3xl lg:text-4xl font-light text-[#2C3E50] mb-8"
                        variants={itemVariants}
                    >
                        Shape a <span className="text-[#5B8C5A]">Generation</span>
                    </motion.h3>

                    <motion.div 
                        className="w-24 h-0.5 bg-gradient-to-r from-[#E67E22] to-[#5B8C5A] mx-auto mb-8"
                        variants={itemVariants}
                    />

                    <motion.p 
                        className="text-sm md:text-xl text-[#2C3E50]/80 leading-relaxed max-w-3xl mx-auto mb-12"
                        variants={itemVariants}
                    >
                        Your donation helps us provide safe, nurturing childcare environments, support women-led daycare businesses, and uplift entire communities.
                    </motion.p>

                    
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#E67E22] to-[#FFA500] group-hover:from-[#FFA500] group-hover:to-[#E67E22] transition-all duration-500"></div>
                            <Link
                                to="/get-involved"
                                className="relative block bg-gradient-to-r from-[#E67E22] to-[#FFA500] text-white px-12 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 group-hover:bg-gradient-to-l"
                            >
                                Donate Now
                            </Link>
                        </motion.div>
                        
                        <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                to="/impact"
                                className="block bg-white/80 backdrop-blur-sm text-[#2C3E50] px-8 py-4 rounded-xl font-semibold border border-[#2C3E50]/20 hover:border-[#5B8C5A] hover:bg-white hover:shadow-lg transition-all duration-300"
                            >
                                See Our Impact
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Trust indicators */}
                    <motion.div 
                        className="mt-12 pt-8 border-t border-[#2C3E50]/10"
                        variants={itemVariants}
                    >
                        <p className="text-sm text-[#2C3E50]/60 font-light">
                            Trusted by partners and communities across Kenya • 100% transparent impact reporting
                        </p>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default DonationPage;