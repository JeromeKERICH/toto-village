import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CommunityEngagement() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const engagementPrograms = [
        {
            title: "Neighborhood Hubs",
            description: "Establishing community-owned childcare spaces in central locations",
            color: "from-[#E67E22] to-[#FFA500]"
        },
        {
            title: "Parent Circles",
            description: "Peer support groups sharing childcare knowledge and resources",
            color: "from-[#5B8C5A] to-[#7CB083]"
        },
        {
            title: "Community Caregivers",
            description: "Training local residents to provide quality childcare services",
            color: "from-[#2C3E50] to-[#4A5F7A]"
        },
        {
            title: "Awareness Drives",
            description: "Campaigns promoting the value of early childhood development",
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
            <section className="relative py-10 lg:py-15 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-[#2C3E50] to-[#1a2f3a] text-white overflow-hidden">
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
                                    <span className="text-white/80 text-sm font-light tracking-widest uppercase">Community Driven</span>
                                </div>
                                
                                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight leading-[1.1]">
                                    Community <span className="text-[#E67E22]">Engagement</span>
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
                                    We bring childcare into the heart of communities where care becomes accessible and valued,
                                    creating local solutions that transform neighborhoods.
                                </p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="space-y-4">
                                <div className="flex items-center gap-4 group">
                                    <div className="flex items-center justify-center w-6 h-6 bg-[#5B8C5A]/20 rounded-full group-hover:bg-[#5B8C5A] transition-colors duration-300">
                                        <div className="w-1.5 h-1.5 bg-[#5B8C5A] rounded-full group-hover:bg-white transition-colors duration-300"></div>
                                    </div>
                                    <span className="text-lg">Community-owned childcare solutions</span>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="flex items-center justify-center w-6 h-6 bg-[#5B8C5A]/20 rounded-full group-hover:bg-[#5B8C5A] transition-colors duration-300">
                                        <div className="w-1.5 h-1.5 bg-[#5B8C5A] rounded-full group-hover:bg-white transition-colors duration-300"></div>
                                    </div>
                                    <span className="text-lg">Local leadership engagement</span>
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
                                        Start in Your Community
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
                                    src="/assets/h1.jpg" 
                                    alt="Village community caring for children together" 
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
                    {/* Community Impact */}
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
                            Strengthening Communities
                        </motion.h2>
                        <motion.div 
                            className="w-16 h-0.5 bg-gradient-to-r from-[#E67E22] to-[#5B8C5A] mx-auto mb-8"
                            variants={itemVariants}
                        />
                        
                        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {[
                                { value: "20+", label: "Neighborhood hubs established", color: "text-[#E67E22]" },
                                { value: "5000+", label: "Parents & community members impacted", color: "text-[#5B8C5A]" },
                                { value: "92%", label: "Report stronger community ties", color: "text-[#2C3E50]" }
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

                    {/* Engagement Programs */}
                    <motion.div 
                        className="mb-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.div 
                            className="text-center mb-12"
                            variants={itemVariants}
                        >
                            <h2 className="text-3xl lg:text-4xl font-light text-[#2C3E50] mb-6">Engagement Programs</h2>
                            <div className="w-16 h-0.5 bg-gradient-to-r from-[#E67E22] to-[#5B8C5A] mx-auto mb-6"></div>
                            <p className="text-xl text-[#2C3E50]/80 max-w-2xl mx-auto">
                                Creating accessible childcare solutions rooted in local communities
                            </p>
                        </motion.div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {engagementPrograms.map((program, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white p-6 rounded-xl border border-[#2C3E50]/10 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className={`w-12 h-0.5 bg-gradient-to-r ${program.color} mb-4`}></div>
                                    <h3 className="text-xl font-normal text-[#2C3E50] mb-3">{program.title}</h3>
                                    <p className="text-[#2C3E50]/80 text-sm">{program.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div 
                        className="text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <div className="bg-gradient-to-r from-[#5B8C5A] to-[#2C3E50] rounded-2xl p-12 text-white">
                            <h3 className="text-2xl lg:text-3xl font-light mb-6">Bring Childcare to Your Community</h3>
                            <div className="w-12 h-0.5 bg-[#E67E22] mx-auto mb-6"></div>
                            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                                Whether you're a community leader, neighborhood group, or local organization, we can help create childcare solutions that work for you.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link 
                                    to="/contact" 
                                    className="bg-white text-[#2C3E50] px-8 py-4 rounded-lg font-normal hover:bg-gray-50 transition-colors duration-300"
                                >
                                    Start a Community Program
                                </Link>
                                <Link 
                                    to="/media" 
                                    className="bg-transparent text-white px-8 py-4 rounded-lg font-normal border border-white hover:bg-white/10 transition-all duration-300"
                                >
                                    View Resources
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}