import React from 'react';
import { motion } from 'framer-motion';

const ProblemSection = () => {
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
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const slideInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

   

    return (
        <section className="py-5 bg-gradient-to-br from-slate-50 to-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                >
                    <motion.h2 
                        className="text-4xl lg:text-5xl font-light text-[#2C3E50] mb-6"
                        variants={itemVariants}
                    >
                        The <span className="text-[#E67E22]">Childcare Crisis</span> in Africa
                    </motion.h2>
                    <motion.div 
                        className="w-24 h-0.5 bg-gradient-to-r from-[#E67E22] to-[#5B8C5A] mx-auto mb-8"
                        variants={itemVariants}
                    />
                    <motion.p 
                        className="text-xl text-[#2C3E50]/80 max-w-4xl mx-auto md:text-center text-start"
                        variants={itemVariants}
                    >
                        A structural barrier affecting children's development, women's economic participation, and community prosperity
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                    {/* Text Content */}
                    <motion.div 
                        className="space-y-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={slideInLeft}
                    >
                        <div className="space-y-6">
                            <motion.p 
                                className="text-lg lg:text-xl text-[#2C3E50]/80 leading-relaxed font-light"
                                variants={itemVariants}
                            >
                                In sub-Saharan Africa, <span className="font-semibold text-[#E67E22]">70% of households</span> in low-income communities lack reliable childcare. This isn't just an inconvenience, it's a structural barrier that stunts early childhood development, constrains women's workforce participation, and perpetuates intergenerational poverty and inequality.
                            </motion.p>

                            <motion.p
                                className="text-lg lg:text-xl text-[#2C3E50]/80 leading-relaxed font-light"
                                variants={itemVariants}
                            >
                                Without access to quality childcare, children miss out on critical early learning opportunities that shape their cognitive and social development. Mothers are forced to choose between earning a livelihood and caring for their children, leading to lost income and career advancement. Communities bear the economic burden of reduced productivity and increased social welfare needs.
                            </motion.p>
                        </div>

                        
                    </motion.div>

                    {/* Image Content */}
                    <motion.div 
                        className="relative"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={slideInRight}
                    >
                        <motion.div 
                            className="relative rounded-3xl overflow-hidden shadow-2xl"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <img 
                                src="/assets/preca.jpg" 
                                alt="Childcare in Africa"
                                className="w-full md:h-[400px] h-[250px] object-cover"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                        </motion.div>
                        
                        
                    </motion.div>
                </div>

               

                
            </div>
        </section>
    );
};

export default ProblemSection;