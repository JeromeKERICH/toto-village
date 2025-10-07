import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function MediaPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const mediaSections = [
        {
            title: "Our Story",
            description: "How Toto Village began and our mission to transform childcare in Kenya",
            media: [
                {
                    type: "video",
                    thumbnail: "assets/h3.jpg",
                    title: "Founding Story: The Need for Change",
                    date: "2023"
                },
                {
                    type: "gallery",
                    thumbnail: "assets/tr4.JPG",
                    title: "Early Days: Building the Vision",
                    count: "12 photos"
                }
            ],
            color: "from-[#E67E22] to-[#FFA500]"
        },
        {
            title: "Community Impact",
            description: "How we're empowering women and transforming communities",
            media: [
                {
                    type: "video",
                    thumbnail: "assets/m5.jpg",
                    title: "Grace's Journey: From Market Vendor to Business Owner",
                    date: "2023"
                },
                {
                    type: "gallery",
                    thumbnail: "assets/m4.jpeg",
                    title: "Nakuru County Parent Gathering",
                    count: "24 photos"
                }
            ],
            color: "from-[#5B8C5A] to-[#7CB083]"
        },
        {
            title: "Our Centers",
            description: "Explore our growing network of childcare hubs",
            media: [
                {
                    type: "video",
                    thumbnail: "assets/m1.jpg",
                    title: "Mashiara Park Launch Ceremony",
                    date: "2025"
                },
                {
                    type: "interactive",
                    thumbnail: "assets/maps.png",
                    title: "Interactive Map: Our Locations",
                    label: "Explore"
                }
            ],
            color: "from-[#2C3E50] to-[#4A5F7A]"
        },
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

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
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
        <div className="min-h-screen bg-white">
            {/* Hero Banner */}
            <section className="relative h-80  bg-gradient-to-br from-[#1a2f3a] via-[#2C3E50] to-[#3a5c40] flex items-center justify-center overflow-hidden">
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
                
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.h1 
                        className="text-4xl lg:text-6xl font-light text-white mb-6 leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Toto Village in 
                        <span className="text-[#E67E22]"> Focus</span>
                    </motion.h1>
                    <motion.div 
                        className="w-24 h-0.5 bg-gradient-to-r from-[#E67E22] to-[#5B8C5A] mx-auto mb-6"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    />
                    <motion.p 
                        className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        Visual stories of transformation, community, and early childhood impact
                    </motion.p>
                </div>
            </section>

            {/* Media Sections */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {mediaSections.map((section, index) => (
                        <motion.div 
                            key={index}
                            className="mb-20"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={containerVariants}
                        >
                            {/* Section Header */}
                            <motion.div 
                                className="flex items-start mb-12"
                                variants={itemVariants}
                            >
                                <div className="mr-8">
                                    <div className={`bg-gradient-to-r ${section.color} rounded-xl p-1`}>
                                        <div className="bg-white rounded-lg p-4">
                                            <div className="text-2xl font-light text-[#2C3E50]">
                                                0{index + 1}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-3xl lg:text-4xl font-light text-[#2C3E50] mb-4">
                                        {section.title}
                                    </h2>
                                    <div className="w-16 h-0.5 bg-gradient-to-r from-[#E67E22] to-[#5B8C5A] mb-4"></div>
                                    <p className="text-xl text-[#2C3E50]/80 leading-relaxed">
                                        {section.description}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Media Grid */}
                            <motion.div 
                                className="grid md:grid-cols-2 gap-8"
                                variants={containerVariants}
                            >
                                {section.media.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        variants={cardVariants}
                                        whileHover="hover"
                                        className="group"
                                    >
                                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 border border-[#2C3E50]/10">
                                            {/* Image */}
                                            <div className="relative h-64 overflow-hidden">
                                                <img 
                                                    src={item.thumbnail} 
                                                    alt={item.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                                
                                                {/* Media Type Badge */}
                                                <div className="absolute top-4 left-4">
                                                    <div className={`bg-gradient-to-r ${section.color} text-white px-3 py-1 rounded-full text-sm font-light`}>
                                                        {item.type === 'video' && 'Video'}
                                                        {item.type === 'gallery' && 'Gallery'}
                                                        {item.type === 'interactive' && 'Interactive'}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-6">
                                                <h3 className="text-xl font-normal text-[#2C3E50] mb-3">
                                                    {item.title}
                                                </h3>
                                                
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-4">
                                                        {item.type === "video" && (
                                                            <span className="text-[#2C3E50]/70 text-sm">{item.date}</span>
                                                        )}
                                                        {item.type === "gallery" && (
                                                            <span className="text-[#2C3E50]/70 text-sm">{item.count}</span>
                                                        )}
                                                        {item.type === "interactive" && (
                                                            <span className="text-[#2C3E50]/70 text-sm">Interactive Experience</span>
                                                        )}
                                                    </div>
                                                    
                                                    <motion.div
                                                        whileHover={{ x: 4 }}
                                                        className="text-[#E67E22] font-medium text-sm"
                                                    >
                                                        View {item.type === 'interactive' ? '→' : '↗'}
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </section>

            
        </div>
    );
}