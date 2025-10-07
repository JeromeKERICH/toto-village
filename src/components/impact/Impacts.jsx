import React from 'react';
import { motion } from 'framer-motion';

const ImpactStory = ({ image, title, excerpt, stats, index }) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2
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

    const imageVariants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div 
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 border border-[#2C3E50]/10"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover="hover"
        >
            <motion.div 
                className="h-72 bg-[#2C3E50] overflow-hidden relative"
                variants={imageVariants}
            >
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover" 
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
            
            <div className="p-8">
                <h3 className="text-2xl font-normal text-[#2C3E50] mb-4 leading-tight">
                    {title}
                </h3>
                <p className="text-[#2C3E50]/80 mb-8 leading-relaxed">
                    {excerpt}
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                    {stats.map((stat, statIndex) => (
                        <motion.div 
                            key={statIndex}
                            className="bg-[#F8F9FA] p-4 rounded-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-[#E67E22]/10 hover:to-[#5B8C5A]/10 group/stat"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="text-2xl font-light text-[#E67E22] group-hover/stat:text-[#5B8C5A] transition-colors duration-300">
                                {stat.value}
                            </div>
                            <div className="text-sm text-[#2C3E50]/70 font-light mt-1">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const ImpactStories = () => {
    const impactStories = [
        {
            image: '/assets/t1.JPG',
            title: 'Empowering Women Through Professional Caregiving',
            excerpt: 'Our training programs transform informal workers into certified early childhood professionals with living wages.',
            stats: [
                { value: '210+', label: 'Caregivers Trained' },
                { value: '3', label: 'Certification Levels' },
                { value: '25', label: 'Training Modules' }
            ]
        },
        {
            image: "/assets/tr4.JPG",
            title: 'Enabling Mothers to Rejoin the Workforce',
            excerpt: 'Quality childcare removes the #1 barrier to women\'s economic participation in urban areas.',
            stats: [
                { value: '5,000+', label: 'Parents Working' },
                { value: '520', label: 'Mothers Empowered' },
                { value: '85%', label: 'Employment Rate' }
            ]
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
                duration: 0.8,
                ease: "easeOut"
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
                        className="text-3xl lg:text-5xl font-light text-[#2C3E50] mb-6"
                        variants={itemVariants}
                    >
                        Our Impact by 
                        <span className="text-[#E67E22]"> The Numbers</span>
                    </motion.h2>
                    <motion.div 
                        className="w-24 h-0.5 bg-gradient-to-r from-[#E67E22] to-[#5B8C5A] mx-auto mb-8"
                        variants={itemVariants}
                    />
                    <motion.p 
                        className="text-xl text-[#2C3E50]/80 max-w-3xl mx-auto leading-relaxed"
                        variants={itemVariants}
                    >
                        Measurable outcomes that demonstrate our model's effectiveness across multiple dimensions of impact.
                    </motion.p>
                </motion.div>
                
                {/* Impact Stories Grid */}
                <motion.div 
                    className="grid md:grid-cols-2 gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {impactStories.map((story, index) => (
                        <ImpactStory 
                            key={index} 
                            {...story} 
                            index={index}
                        />
                    ))}
                </motion.div>

             
            </div>
        </section>
    );
};

export default ImpactStories;