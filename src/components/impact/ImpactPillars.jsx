import React from 'react';
import { motion } from 'framer-motion';

const ImpactPillars = () => {
    const pillars = [
        {
            title: "Economic Empowerment",
            description: "Enabling parents, especially mothers, to participate in the workforce while creating professional opportunities for caregivers.",
            color: "from-[#E67E22] to-[#FFA500]",
            stats: "85% workforce participation"
        },
        {
            title: "Child Development",
            description: "Providing quality early childhood education that sets the foundation for lifelong learning and success.",
            color: "from-[#5B8C5A] to-[#7CB083]",
            stats: "98% developmental milestones"
        },
        {
            title: "Community Transformation",
            description: "Building sustainable ecosystems where childcare becomes a catalyst for broader community development.",
            color: "from-[#2C3E50] to-[#4A5F7A]",
            stats: "50+ communities served"
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

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            y: -8,
            transition: {
                type: "spring",
                stiffness: 300
            }
        }
    };

    return (
        <section className="py-5 bg-gradient-to-br from-slate-50 to-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
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
                        Our Impact 
                        <span className="text-[#E67E22]"> Pillars</span>
                    </motion.h2>
                    <motion.div 
                        className="w-24 h-0.5 bg-gradient-to-r from-[#E67E22] to-[#5B8C5A] mx-auto mb-8"
                        variants={itemVariants}
                    />
                    <motion.p 
                        className="text-xl text-[#2C3E50]/80 max-w-3xl mx-auto leading-relaxed"
                        variants={itemVariants}
                    >
                        Three interconnected pillars that drive sustainable change and create lasting impact in communities
                    </motion.p>
                </motion.div>

                {/* Pillars Grid */}
                <motion.div 
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover="hover"
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#2C3E50]/10 h-full">
                                {/* Gradient Number Indicator */}
                                <div className={`bg-gradient-to-r mb-6`}>
                                    <div className="bg-white rounded-lg p-4 text-center">
                                        <div className="text-3xl font-light text-[#2C3E50]">
                                            0{index + 1}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Content */}
                                <h3 className="text-2xl font-normal text-[#2C3E50] mb-4 text-center">
                                    {pillar.title}
                                </h3>
                                
                                <p className="text-[#2C3E50]/80 leading-relaxed mb-6 text-center">
                                    {pillar.description}
                                </p>

                                {/* Stats Indicator */}
                                <div className="text-center">
                                    <div className={`text-sm font-light bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent`}>
                                        {pillar.stats}
                                    </div>
                                </div>

                                {/* Hover Line Indicator */}
                                <motion.div 
                                    className="w-0 h-0.5 bg-gradient-to-r from-transparent via-[#E67E22] to-transparent mt-6 mx-auto"
                                    whileHover={{ width: "80%" }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

               
            </div>
        </section>
    );
};

export default ImpactPillars;