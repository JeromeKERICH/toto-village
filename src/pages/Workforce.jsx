import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function WorkforceDevelopment() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const trainingModules = [
        {
            title: "Child Development",
            description: "Comprehensive training in early childhood education best practices and developmental milestones"
        },
        {
            title: "Health & Safety",
            description: "Certification in pediatric first aid, sanitation protocols, and emergency response"
        },
        {
            title: "Nutrition Planning",
            description: "Meal planning for optimal child growth and addressing nutritional deficiencies"
        },
        {
            title: "Business Management",
            description: "Entrepreneurial skills including financial planning, marketing, and operations"
        }
    ];

    const careerPathways = [
        {
            title: "Center-Based Caregivers",
            description: "Employment in our network of childcare centers with competitive salaries"
        },
        {
            title: "Home-Based Providers",
            description: "Support to establish licensed home daycare businesses"
        },
        {
            title: "ECD Entrepreneurs",
            description: "Opportunities to launch innovative early childhood services"
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
            {/* Hero Section - Centered & Sleek */}
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
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div 
                        className="space-y-8"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants}>
                            <div className="flex justify-center mb-6">
                                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                                    
                                    <span className="text-white/80 text-sm font-light tracking-widest uppercase">Workforce Development</span>
                                </div>
                            </div>
                            
                            <h1 className="text-2xl lg:text-4xl xl:text-5xl font-light text-white tracking-tight leading-tight">
                                Building the Future of
                                <span className="block mt-4 text-4xl bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                                    Early Childhood Care
                                </span>
                            </h1>
                            
                            <motion.div 
                                className="w-24 h-0.5 bg-gradient-to-r from-[#5B8C5A] to-[#E67E22] mx-auto my-8"
                                initial={{ width: 0 }}
                                animate={{ width: 96 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            />
                        </motion.div>
                        
                        <motion.div variants={itemVariants}>
                            <p className="text-xl lg:text-2xl md:text-center text-start text-white/80 leading-relaxed font-light max-w-3xl mx-auto">
                                We transform passionate individuals into professional caregivers through intensive training, 
                                certification, and entrepreneurial support, creating sustainable careers in early childhood education.
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
                        
                        <motion.div 
                            className="w-4 h-4 border-r-2 border-b-2 border-white/60 rotate-45"
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </section>

            
            {/* Training Curriculum */}
            <section className="py-5 bg-[#F8F9FA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl font-light text-[#2C3E50] mb-4">
                            Comprehensive Training Curriculum
                        </h2>
                        <motion.div 
                            className="w-16 h-0.5 bg-[#5B8C5A] mx-auto"
                            initial={{ width: 0 }}
                            whileInView={{ width: 64 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        />
                        <p className="text-lg text-[#2C3E50]/80 mt-6 max-w-3xl mx-auto">
                            Combining early childhood expertise with entrepreneurial skills
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {trainingModules.map((module, index) => (
                            <motion.div 
                                key={index} 
                                variants={itemVariants}
                                whileHover={{ 
                                    y: -5,
                                    transition: { type: "spring", stiffness: 300 }
                                }}
                            >
                                <div className="p-3 bg-white border border-[#2C3E50]/10 rounded-2xl hover:shadow-md transition-shadow duration-300 h-full">
                                    <div className="mb-6">
                                        <motion.div 
                                            className="w-8 h-0.5 bg-[#E67E22]"
                                            whileHover={{ width: 40 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        />
                                    </div>
                                    <h3 className="text-xl font-normal text-[#2C3E50] mb-4">{module.title}</h3>
                                    <p className="text-[#2C3E50]/70 leading-relaxed">{module.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Career Pathways */}
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
                            Career Pathways for Graduates
                        </h2>
                        <motion.div 
                            className="w-16 h-0.5 bg-[#2C3E50] mx-auto"
                            initial={{ width: 0 }}
                            whileInView={{ width: 64 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        />
                    </motion.div>

                    <motion.div 
                        className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {careerPathways.map((pathway, index) => (
                            <motion.div 
                                key={index} 
                                variants={scaleIn}
                                className="p-8 rounded-2xl border border-[#2C3E50]/10 hover:shadow-md transition-shadow duration-300"
                            >
                                <h3 className="text-xl font-normal text-[#2C3E50] mb-4">{pathway.title}</h3>
                                <p className="text-[#2C3E50]/70 leading-relaxed">{pathway.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-[#5B8C5A] to-[#2C3E50]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div 
                        className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={scaleIn}
                    >
                        <h3 className="text-2xl lg:text-3xl font-light text-white mb-6">
                            Invest in Quality Early Childhood Workforce
                        </h3>
                        <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
                            Partner with us to train the next generation of professional caregivers and childcare entrepreneurs.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link 
                                    to="/contact" 
                                    className="block bg-white text-[#2C3E50] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
                                >
                                    Support Our Program
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link 
                                    to="/apply" 
                                    className="block bg-transparent text-white px-8 py-3 rounded-lg font-medium border border-white hover:bg-white hover:text-[#2C3E50] transition-all duration-300"
                                >
                                    Apply for Training
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}