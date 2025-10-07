import PartnershipModal from '../components/partners/PartnershipModal';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AboutPartners = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
    
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const partnershipTypes = [
        {
            title: "Donors & Funders",
            description: "Our donors and funders provide the financial resources that make our programs possible. Your contributions help us scale our impact and reach more communities in need.",
            benefits: [
                "Tax-deductible donations",
                "Regular impact reports",
                "Recognition in our annual report",
                "Opportunities to designate funds to specific programs"
            ],
            color: "from-[#E67E22] to-[#FFA500]"
        },
        {
            title: "Government Institutions",
            description: "We collaborate with county governments to align our efforts with local priorities and ensure sustainable impact through policy support and resource sharing.",
            benefits: [
                "Data sharing for better decision making",
                "Joint program implementation",
                "Capacity building for local staff",
                "Advocacy support for community needs"
            ],
            color: "from-[#5B8C5A] to-[#7CB083]"
        },
        {
            title: "Private Sector",
            description: "Businesses partner with us through financial support, employee volunteering, and in-kind donations to create shared value for communities and their organizations.",
            benefits: [
                "Employee engagement opportunities",
                "CSR fulfillment with measurable impact",
                "Brand association with positive change",
                "Customized partnership packages"
            ],
            color: "from-[#2C3E50] to-[#4A5F7A]"
        },
        {
            title: "Individual Partners",
            description: "Individuals contribute through volunteering, fundraising, or monthly donations to support our mission and create personal connections with our work.",
            benefits: [
                "Volunteer opportunities",
                "Exclusive updates and events",
                "Personalized impact reports",
                "Recognition in our community"
            ],
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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div 
                    className="text-center mb-20"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h1 
                        className="text-4xl lg:text-5xl font-light text-[#2C3E50] mb-6"
                        variants={itemVariants}
                    >
                        Our Partnership 
                        <span className="text-[#5B8C5A]"> Models</span>
                    </motion.h1>
                    <motion.div 
                        className="w-16 h-0.5 bg-gradient-to-r from-[#E67E22] to-[#5B8C5A] mx-auto mb-8"
                        variants={itemVariants}
                    />
                    <motion.p 
                        className="text-xl text-[#2C3E50]/80 max-w-4xl mx-auto leading-relaxed"
                        variants={itemVariants}
                    >
                        We work with diverse partners who share our vision for community transformation. 
                        Each partnership is tailored to maximize impact and create mutual value.
                    </motion.p>
                </motion.div>

                {/* Partnership Cards */}
                <motion.div 
                    className="grid md:grid-cols-2 gap-8 mb-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {partnershipTypes.map((type, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover="hover"
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#2C3E50]/10 h-full">
                                {/* Gradient Header */}
                                <div className={`bg-gradient-to-r ${type.color}  mb-6`}>
                                    <div className="bg-white ">
                                        <h2 className="text-2xl font-normal text-[#2C3E50] text-center">
                                            {type.title}
                                        </h2>
                                    </div>
                                </div>
                                
                                <p className="text-[#2C3E50]/80 mb-6 leading-relaxed">
                                    {type.description}
                                </p>
                                
                                <div className="space-y-4">
                                    <h3 className="font-normal text-[#2C3E50] text-lg">Partnership Benefits</h3>
                                    <div className="space-y-3">
                                        {type.benefits.map((benefit, i) => (
                                            <div key={i} className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300">
                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${type.color} mt-2 flex-shrink-0`} />
                                                <span className="text-[#2C3E50]/80">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div 
                    className="text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.div 
                        className="bg-gradient-to-r from-[#5B8C5A] to-[#2C3E50] rounded-2xl p-12 text-white"
                        variants={itemVariants}
                    >
                        <h2 className="text-3xl lg:text-4xl font-light mb-6">
                            Ready to Partner With Us?
                        </h2>
                        <motion.div 
                            className="w-12 h-0.5 bg-[#E67E22] mx-auto mb-8"
                            variants={itemVariants}
                        />
                        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                            Join our network of changemakers and create lasting impact in communities together.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <button
                                className="bg-white text-[#2C3E50] px-8 py-4 rounded-lg font-normal hover:bg-gray-50 transition-colors duration-300 shadow-lg"
                                onClick={() => setOpen(true)}
                            >
                                Become a Partner
                            </button>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {open && <PartnershipModal setOpen={setOpen} />}
            </div>
        </div>
    );
};

export default AboutPartners;