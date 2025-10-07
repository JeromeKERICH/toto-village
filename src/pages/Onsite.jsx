import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function OnSiteChildcare() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            title: "Turnkey Facility Setup",
            description: "Complete design and construction of on-site childcare centers tailored to your workplace"
        },
        {
            title: "Quality Childcare",
            description: "Developmentally appropriate programs for children aged 6 months to 5 years"
        },
        {
            title: "Trained Professionals",
            description: "Certified caregivers and early childhood education specialists"
        },
        {
            title: "Performance Metrics",
            description: "Regular reporting on employee satisfaction and productivity impacts"
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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

    const fadeInUp = {
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

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Redesigned */}
            <section className="relative h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a2f3a] via-[#2C3E50] to-[#3a5c40]">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 z-0">
                    {/* Geometric Pattern Overlay */}
                    <div className="absolute inset-0 opacity-[0.03]">
                        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
                        <div className="absolute bottom-32 right-20 w-24 h-24 border border-white rotate-45"></div>
                        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
                    </div>
                    
                    {/* Subtle Gradient Orbs */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#5B8C5A]/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E67E22]/10 rounded-full blur-3xl"></div>
                </div>

                {/* Centered Content */}
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div 
                        className="space-y-8"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants}>
                            <div className="flex justify-center mb-6">
                                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                                    
                                    <span className="text-white/80 text-sm font-light tracking-widest uppercase">On-Site Childcare</span>
                                </div>
                            </div>
                            
                            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-light text-white tracking-tight leading-tight">
                                Workplace Childcare
                                <span className="block mt-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                                    Solutions
                                </span>
                            </h1>
                            
                            <motion.div 
                                className="w-24 h-0.5 bg-gradient-to-r from-[#E67E22] to-[#5B8C5A] mx-auto my-8"
                                initial={{ width: 0 }}
                                animate={{ width: 96 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            />
                        </motion.div>
                        
                        <motion.div variants={itemVariants}>
                            <p className="text-sm lg:text-xl text-white/80 leading-relaxed font-light max-w-3xl mx-auto">
                                Providing on-site childcare that supports working parents and drives organizational success. 
                                Our centers create a win-win solution for employees and employers alike.
                            </p>
                        </motion.div>

                        

                        
                    </motion.div>
                </div>
                
                {/* Scroll Indicator */}
                <motion.div 
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-white/60 text-sm font-light">Scroll to explore</span>
                        <motion.div 
                            className="w-4 h-4 border-r-2 border-b-2 border-white/60 rotate-45"
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl font-light text-[#2C3E50] mb-4">
                            Comprehensive On-site Solutions
                        </h2>
                        <motion.div 
                            className="w-16 h-0.5 bg-[#E67E22] mx-auto"
                            initial={{ width: 0 }}
                            whileInView={{ width: 64 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        />
                        <p className="text-lg text-[#2C3E50]/80 mt-6 max-w-3xl mx-auto">
                            We handle every aspect of creating and operating your workplace childcare center
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {services.map((service, index) => (
                            <motion.div 
                                key={index} 
                                variants={itemVariants}
                                whileHover={{ 
                                    y: -5,
                                    transition: { type: "spring", stiffness: 300 }
                                }}
                            >
                                <div className="p-8 bg-white border border-[#2C3E50]/10 rounded-2xl hover:shadow-md transition-shadow duration-300 h-full">
                                    <div className="mb-6">
                                        <motion.div 
                                            className="w-8 h-0.5 bg-[#E67E22]"
                                            whileHover={{ width: 40 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        />
                                    </div>
                                    <h3 className="text-xl font-normal text-[#2C3E50] mb-4">{service.title}</h3>
                                    <p className="text-[#2C3E50]/70 leading-relaxed">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            

            
        </div>
    );
}