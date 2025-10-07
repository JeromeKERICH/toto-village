import React, { useEffect, useState } from 'react';
import { FaHandshake, FaUsers, FaChalkboardTeacher, FaChild, FaBuilding, FaUserTie, FaHome, FaUser, FaUserSecret, FaChartArea } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Community() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isGetInvolvedModalOpen, setIsGetInvolvedModalOpen] = useState(false);

    const handleOptionSelect = (option) => {
        console.log("Selected option:", option);
        setIsGetInvolvedModalOpen(false);
    }

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

    // Core Community Groups
    const stakeholderGroups = [
        {
            category: "Caregivers",
            icon: <FaChalkboardTeacher className="text-4xl text-[#2980B9]" />,
            description: "Hundreds of trained professional Toto Founders providing quality childcare services at Home Based Centres and our Toto Villages",
            link: "/community/caregivers",
            highlights: [
                "NITA accredited curriculum on Child caregiving",
                "Business training and support with operational Toolkits",
                "Provision of starter-packs with essential childcare resources",
                "Pathway to employment in formal childcare roles"
            ]
        },
        {
            category: "Government Partnerships",
            icon: <FaBuilding className="text-4xl text-[#2980B9]" />,
            description: "Collaborating with governments to implement innovative solutions for childcare in public spaces",
            link: "/partners/government",
            highlights: [
                "Partnerships to establish affordable childcare centres in public spaces",
                "Integration to cross-departmental initiatives within government for seamless service",
                "Support policy integration and advocacy",
                "Ensure Quality Standards and impact reporting"
            ]
        },
        {
            category: "Corporate Partners",
            icon: <FaUserTie className="text-4xl text-[#2980B9]" />,
            description: "Become an employer of choice by investing in workforce childcare solutions",
            link: "/partners/corporate",
            highlights: [
                "Cost-effective solutions for on-site childcare creches",
                "Quality Standards and Impact Reporting",
                "Align with HR & Wellness policies that support working mothers",
                "CSR partnerships"
            ]
        },
        {
            category: "Community Hosts & Champions",
            icon: <FaHome className="text-4xl text-[#2980B9]" />,
            description: "Community Stakeholders that drive grassroots ownership of Local centres housing our childcare operations",
            link: "/community/hosts",
            highlights: [
                "Public market facilities",
                "Primary School classrooms",
                "Faith-based facilities (Church / Mosque / Temple Halls)",
                "Residential complexes"
            ]
        },
        {
            category: "Parent Community",
            icon: <FaChild className="text-4xl text-[#2980B9]" />,
            description: "Beneficiaries of Toto Village services and advocates for quality childcare in their communities",
            link: "/community/parents",
            highlights: [
                "Low-income families",
                "Working parents",
                "Parent support networks",
                "Community advocates"
            ]
        }
    ];

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
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#2980B9]/20 rounded-full blur-3xl"></div>
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
                                    
                                    <span className="text-white/80 text-sm font-light tracking-widest uppercase">Community Ecosystem</span>
                                </div>
                            </div>
                            
                            <h1 className="text-2xl lg:text-4xl xl:text-5xl font-light text-white tracking-tight leading-tight mr-10">
                                The Toto Village Ecosystem
                                    
                                
                            </h1>
                            
                            <motion.div 
                                className="w-24 h-0.5 bg-gradient-to-r from-[#2980B9] to-[#E67E22] mx-auto my-8"
                                initial={{ width: 0 }}
                                animate={{ width: 96 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            />
                        </motion.div>
                        
                        <motion.div variants={itemVariants}>
                            <p className="text-l lg:text-2xl text-white/80 leading-relaxed font-light max-w-3xl mx-auto">
                                Our strength is rooted in the dedicated caregivers at the heart of our centres, the communities 
                                that rally to sustain each Toto Village, and the partners who bring this vision to life.
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

            {/* Community Members Section */}
            <section className="py-5 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl font-light text-[#2C3E50] mb-4">
                            Our Community Members
                        </h2>
                        <motion.div 
                            className="w-16 h-0.5 bg-[#2980B9] mx-auto"
                            initial={{ width: 0 }}
                            whileInView={{ width: 64 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        />
                        <p className="text-lg text-[#2C3E50]/80 mt-6 max-w-3xl mx-auto">
                            A diverse network of stakeholders working together to transform early childhood care
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {stakeholderGroups.map((group, index) => (
                            <motion.div 
                                key={index}
                                variants={scaleIn}
                                whileHover={{ 
                                    y: -5,
                                    transition: { type: "spring", stiffness: 300 }
                                }}
                                className="bg-white p-8 rounded-2xl border border-[#2C3E50]/10 hover:shadow-md transition-shadow duration-300 h-full flex flex-col"
                            >
                                
                                <h3 className="text-xl font-normal text-[#2C3E50] mb-4">{group.category}</h3>
                                <p className="text-[#2C3E50]/70 mb-6 leading-relaxed flex-grow">{group.description}</p>
                                <ul className="space-y-3 mb-6">
                                    {group.highlights.map((highlight, i) => (
                                        <li key={i} className="flex items-start">
                                            <motion.div 
                                                className="w-2 h-2 bg-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"
                                                whileHover={{ scale: 1.5 }}
                                            />
                                            <span className="text-[#2C3E50]/80 text-sm leading-relaxed">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link 
                                        to={group.link}
                                        className="inline-block text-[#1a2f3a] font-medium hover:text-[#2471A3] transition-colors duration-300"
                                    >
                                        Learn more →
                                    </Link>
                                </motion.div>
                            </motion.div>
                        ))}
                        
                        {/* Join Our Community Card */}
                        <motion.div 
                            variants={scaleIn}
                            className="bg-gradient-to-br from-[#2C3E50] to-[#1a2f3a] text-white p-8 rounded-2xl shadow-lg flex flex-col justify-center"
                        >
                            <h3 className="text-2xl font-light mb-4 text-center">Join Our Community</h3>
                            <p className="mb-6 opacity-90 text-center">
                                Whether you want to become a caregiver, partner with us, or host a center, we're always looking to grow our network.
                            </p>
                            <motion.div 
                                whileHover={{ scale: 1.05 }} 
                                whileTap={{ scale: 0.95 }}
                                className="text-center"
                            >
                                <button
                                    onClick={() => setIsGetInvolvedModalOpen(true)}
                                    className="inline-flex items-center font-medium bg-white text-[#2980B9] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                                >
                                    Get Involved
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Partnership Benefits Section */}
            <section className="py-5 bg-gradient-to-br from-[#2C3E50] to-[#1a2f3a]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl font-light text-white mb-4">
                            Why Partner With Toto Village?
                        </h2>
                        <motion.div 
                            className="w-16 h-0.5 bg-[#E67E22] mx-auto"
                            initial={{ width: 0 }}
                            whileInView={{ width: 64 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        />
                    </motion.div>

                    <motion.div 
                        className="grid md:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <motion.div variants={scaleIn} className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
                            <h3 className="text-xl font-normal mb-4 flex items-center text-white">
                                
                                For Government Partnerships
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-[#E67E22] mr-3 mt-1">✓</span>
                                    <span className="text-white/80">Achieve SDG targets on gender equality and education</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#E67E22] mr-3 mt-1">✓</span>
                                    <span className="text-white/80">Boost local economic activity</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#E67E22] mr-3 mt-1">✓</span>
                                    <span className="text-white/80">Improve early childhood development metrics</span>
                                </li>
                            </ul>
                        </motion.div>
                        
                        <motion.div variants={scaleIn} className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
                            <h3 className="text-xl font-normal mb-4 flex items-center text-white">
                                
                                For Corporate Partners
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-[#E67E22] mr-3 mt-1">✓</span>
                                    <span className="text-white/80">Increase employee productivity and retention</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#E67E22] mr-3 mt-1">✓</span>
                                    <span className="text-white/80">Enhance your ESG profile</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#E67E22] mr-3 mt-1">✓</span>
                                    <span className="text-white/80">Support women in the workforce</span>
                                </li>
                            </ul>
                        </motion.div>
                        
                        <motion.div variants={scaleIn} className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
                            <h3 className="text-xl font-normal mb-4 flex items-center text-white">
                                
                                For Caregivers
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-[#E67E22] mr-3 mt-1">✓</span>
                                    <span className="text-white/80">Professional training and certification</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#E67E22] mr-3 mt-1">✓</span>
                                    <span className="text-white/80">Stable employment opportunities</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#E67E22] mr-3 mt-1">✓</span>
                                    <span className="text-white/80">Career advancement pathways</span>
                                </li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            
            {/* Get Involved Modal */}
            {isGetInvolvedModalOpen && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                >
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-white rounded-2xl max-w-md w-full p-6"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-normal text-gray-800">How would you like to get involved?</h3>
                            <button 
                                onClick={() => setIsGetInvolvedModalOpen(false)}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        
                        <div className="space-y-3">
                            {[
                                { key: 'caregivers', label: 'Caregivers', desc: 'Join our team of professional caregivers' },
                                { key: 'government', label: 'Government Partnership', desc: 'Explore collaboration with government entities' },
                                { key: 'corporate', label: 'Corporate Partners', desc: 'Partner with us as a business or organization' },
                                { key: 'community', label: 'Community Hosts & Champions', desc: 'Host a center or advocate in your community' },
                                { key: 'parent', label: 'Parent Community', desc: 'Join our network of parents and families' }
                            ].map((option) => (
                                <motion.button 
                                    key={option.key}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => handleOptionSelect(option.key)}
                                    className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-200"
                                >
                                    <span className="font-medium text-gray-800 block">{option.label}</span>
                                    <span className="text-sm text-gray-600 mt-1">{option.desc}</span>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}