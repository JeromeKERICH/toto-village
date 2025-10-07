import React from 'react';
import { motion } from 'framer-motion';

const WhatWeDo = () => {
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

    const services = [
        {
            title: "Community-Based Centers of Excellence",
            description: "A social franchise ecosystem for Toto Founders embedded within LICS to ensure accessible and high quality childcare services within the community.",
            color: "from-[#E67E22] to-[#FFA500]"
        },
        {
            title: "Employer Supported Model",
            description: "Partnering with workplaces to establish site crenches, providing vital support to entry-level working parents with generating revenue to enhance the long-term sustainability of the Toto Village Program.",
            color: "from-[#5B8C5A] to-[#7CB083]"
        },
        {
            title: "County Public Facility COEs",
            description: "In collaboration with county governments, this cost-sharing model establishes childcare centres in public places such as markets and transport hubs, leveraging resources-sharing strategies as the scalable solution to expand success.",
            color: "from-[#2C3E50] to-[#4A5F7A]"
        }
    ];

    const stats = [
        { number: "5+", label: "Childcare Centers" },
        { number: "500+", label: "Toto Founders" },
        { number: "10,000+", label: "Children Under Care" },
        { number: "4+", label: "Scale Partners & Growing" }
    ];

    return (
        <section className="bg-gradient-to-br from-slate-50 to-white py-5 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                >
                    <motion.h2 
                        className="text-4xl lg:text-5xl font-light text-[#2C3E50] mb-6"
                        variants={itemVariants}
                    >
                        What <span className="text-[#E67E22]">We Do</span>
                    </motion.h2>
                    <motion.div 
                        className="w-16 h-0.5 bg-gradient-to-r from-[#E67E22] to-[#5B8C5A] mx-auto mb-8"
                        variants={itemVariants}
                    />
                    <motion.p 
                        className="text-xl text-[#2C3E50]/80 max-w-5xl mx-auto leading-relaxed"
                        variants={itemVariants}
                    >
                        Guided by the ethos of ubuntu, "together, we thrive", Toto Village frames childcare as a collective opportunity that delivers transformative, intergenerational impact. Our strength lies in our collaborative approach and partnerships with government, the private sector, and community members.
                    </motion.p>
                </motion.div>

                {/* Services Grid */}
                <motion.div 
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover="hover"
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#2C3E50]/10 h-full">
                                {/* Gradient Header */}
                                <div className={`bg-gradient-to-r  mb-6`}>
                                    <div className="bg-white rounded-lg p-4">
                                        <h3 className="text-xl font-normal text-[#2C3E50] text-center">
                                            {service.title}
                                        </h3>
                                    </div>
                                </div>
                                
                                <p className="text-[#2C3E50]/80 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Hover Indicator */}
                                <motion.div 
                                    className="w-0 h-0.5 bg-gradient-to-r from-transparent via-[#E67E22] to-transparent mt-6"
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Bar */}
                <motion.div 
                    className="bg-gradient-to-r from-[#5B8C5A] to-[#2C3E50] rounded-2xl p-8 shadow-2xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="text-white group"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="text-3xl lg:text-4xl font-light mb-2 group-hover:text-[#E67E22] transition-colors duration-300">
                                    {stat.number}
                                </div>
                                <div className="text-white/80 text-sm font-light tracking-wide">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom Philosophy */}
                <motion.div 
                    className="text-center mt-16 max-w-3xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                >
                    <motion.div 
                        className="bg-white rounded-2xl p-8 shadow-lg border border-[#2C3E50]/10"
                        variants={itemVariants}
                    >
                        <h3 className="text-2xl font-light text-[#2C3E50] mb-4">
                            Ubuntu Philosophy in Action
                        </h3>
                        <motion.div 
                            className="w-12 h-0.5 bg-[#E67E22] mx-auto mb-6"
                            variants={itemVariants}
                        />
                        <p className="text-[#2C3E50]/80 leading-relaxed text-lg">
                            Working hand in hand to uplift every family, transforming childcare from an individual challenge into a community strength.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhatWeDo;