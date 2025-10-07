import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TeamSection = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts
    }, []);
    const [selectedMember, setSelectedMember] = useState(null);

    const teamMembers = [
        {
            id: 1,
            name: "Hiram Mwangi",
            role: "Programme Manager",
            shortDesc: "Passionate about equipping young learners with skills to become centers of influence.",
            fullBio: "Hiram Mwangi is passionate about equipping young learners with the best skills that will make them stand out in their world and eventually become a center of influence. With extensive experience in program management, Hiram drives our mission to create transformative educational experiences for children across communities.",
            image: "/assets/Hiram.jpeg"
        },
        {
            id: 2,
            name: "Sydney Mbuthia",
            role: "Finance Manager",
            shortDesc: "Dedicated accounting professional with over ten years of experience in finance systems.",
            fullBio: "Sydney Mbuthia is a dedicated and results-driven Accounting professional with over ten years of experience spanning accounting and finance. Committed to ensuring proficiency and improved working accounting systems through implementation of processes and policies. Sydney brings financial excellence and strategic oversight to our operations.",
            image: "/assets/Sydney.jpeg"
        },
        {
            id: 3,
            name: "Elizabeth Naisoi",
            role: "Training & Quality Lead",
            shortDesc: "Education professional with twelve years of experience in curriculum development and teacher training.",
            fullBio: "Elizabeth Naisoi is a self-directed, action-oriented professional with twelve years of experience in education and community service, experienced in curriculum development, teacher training and parenting programs. For Elizabeth, education should focus on the whole child, rather than on the content or the teacher. She is committed to the development of inspiring hands-on lessons that will capture a child's imagination and breed success in stimulating and encouraging classrooms, adaptive to the varied needs of learners.\n\nElizabeth earned a bachelor's degree in Early Childhood Studies and is currently pursuing a master degree in education leadership and management at Mount Kenya University. She has worked as a classroom teacher, head of department, headteacher, counselor, mentor, trainer, dorm mistress, C.U patron, among others.\n\nElizabeth is also a farmer and a business lady who ventures into different businesses depending on the market demands. Guided by love for the family unit, Elizabeth loves engagements on enhancing family cohesion and harmony.",
            image: "/assets/Eliza.jpeg"
        }
    ];

    const boardMembers = [
        {
            id: 1,
            name: "Dr. Esther Gacicio",
            role: "Board Member",
            shortDesc: "CEO and Co-Founder of eLearning Solutions, eminent EdTech expert with 25+ years experience.",
            fullBio: "Dr. Esther Gacicio is an eminent figure in the field of education technology, serving as the CEO and Co-Founder of eLearning Solutions (eLS). Dr. Gacicio's expertise extends globally, with consultancy roles at the World Bank, Results for Development, and the Commonwealth of Learning. She is a member of the Specialist Network of the EdTech Hub and an accomplished eLearning Specialist, Instructional and Curriculum Designer, and Trainer/Facilitator with 25+ years of experience.\n\nDr. Gacicio served as Senior Assistant Director at the Kenya Institute of Curriculum Development (KICD) and has been recognized through the Innovator of the Year by East Africa Women in Excellence Awards 2024; the Global Award for Excellence in eLearning at the World Education Congress Global and Awards and the Technology in Government in Africa Award by the UN Economic Commission for Africa (ECA).",
            image: "/assets/Gac.PNG"
        },
        {
            id: 2,
            name: "Dr. George Kogolla",
            role: "Board Member",
            shortDesc: "Leader and intrapreneur with 20+ years of development experience across public and private sectors.",
            fullBio: "George Kogolla is a leader, an intrapreneur, and an enabler. With 20+ years of development experience, his expertise covers leadership and strategy, partnerships and business development, project management, and organizational development. George is fascinated by the intersection between the public sector and business in the notion of public interest; a middle ground where both public resources and private efforts can work together for public good.",
            image: "/assets/George.jpeg"
        },
        {
            id: 3,
            name: "Sane Mdlalose",
            role: "Board Member",
            shortDesc: "Dynamic Chief Growth Officer with 23+ years of experience igniting business expansion across continents.",
            fullBio: "Sane Mdlalose is a dynamic Chief Growth Officer with 23+ years of experience igniting business expansion across diverse industries and continents. Her expertise is building winning growth plans across business pillars, seamlessly bridging strategy to execution and generating substantial revenue growth. A passionate Pan-African leader, Sane thrives on tackling complex challenges with clear, actionable solutions. Her approach fosters alignment and prioritizes skills development, maximizing collective impact and paving the way for future success.",
            image: "/assets/Sane.jpeg"
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

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Team Section */}
                <motion.section 
                    className="mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                >
                    <motion.div 
                        className="text-center mb-16"
                        variants={itemVariants}
                    >
                        <h2 className="text-4xl lg:text-5xl font-light text-[#2C3E50] mb-6">
                            Our <span className="text-[#E67E22]">Leadership Team</span>
                        </h2>
                        <motion.div 
                            className="w-24 h-0.5 bg-gradient-to-r from-[#E67E22] to-[#5B8C5A] mx-auto mb-8"
                            variants={itemVariants}
                        />
                        <p className="text-xl text-[#2C3E50]/80 max-w-3xl mx-auto leading-relaxed">
                            Meet the dedicated professionals driving our mission to transform childcare and early childhood education across communities.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                    >
                        {teamMembers.map((member) => (
                            <motion.div
                                key={member.id}
                                variants={cardVariants}
                                whileHover="hover"
                                className="group"
                            >
                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 border border-[#2C3E50]/10">
                                    {/* Image */}
                                    <div className="relative h-80 overflow-hidden">
                                        <img 
                                            src={member.image} 
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-2xl font-normal text-[#2C3E50] mb-2">
                                            {member.name}
                                        </h3>
                                        <div className="w-12 h-0.5 bg-gradient-to-r from-[#E67E22] to-[#5B8C5A] mb-4"></div>
                                        <p className="text-[#E67E22] font-medium mb-3">{member.role}</p>
                                        <p className="text-[#2C3E50]/80 mb-6 leading-relaxed">
                                            {member.shortDesc}
                                        </p>
                                        
                                        <motion.button
                                            onClick={() => setSelectedMember(member)}
                                            className="w-full bg-gradient-to-r from-[#E67E22] to-[#FFA500] text-white py-3 rounded-xl font-normal hover:shadow-lg transition-all duration-300"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Learn More
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>

                {/* Board Members Section */}
                <motion.section 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                >
                    <motion.div 
                        className="text-center mb-16"
                        variants={itemVariants}
                    >
                        <h2 className="text-4xl lg:text-5xl font-light text-[#2C3E50] mb-6">
                            Our <span className="text-[#5B8C5A]">Board of Directors</span>
                        </h2>
                        <motion.div 
                            className="w-24 h-0.5 bg-gradient-to-r from-[#5B8C5A] to-[#2C3E50] mx-auto mb-8"
                            variants={itemVariants}
                        />
                        <p className="text-xl text-[#2C3E50]/80 max-w-3xl mx-auto leading-relaxed">
                            Distinguished leaders and experts guiding our strategic direction and ensuring sustainable impact.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                    >
                        {boardMembers.map((member) => (
                            <motion.div
                                key={member.id}
                                variants={cardVariants}
                                whileHover="hover"
                                className="group"
                            >
                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 border border-[#2C3E50]/10">
                                    {/* Image */}
                                    <div className="relative h-80 overflow-hidden">
                                        <img 
                                            src={member.image} 
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-2xl font-normal text-[#2C3E50] mb-2">
                                            {member.name}
                                        </h3>
                                        <div className="w-12 h-0.5 bg-gradient-to-r from-[#5B8C5A] to-[#2C3E50] mb-4"></div>
                                        <p className="text-[#5B8C5A] font-medium mb-3">{member.role}</p>
                                        <p className="text-[#2C3E50]/80 mb-6 leading-relaxed">
                                            {member.shortDesc}
                                        </p>
                                        
                                        <motion.button
                                            onClick={() => setSelectedMember(member)}
                                            className="w-full bg-gradient-to-r from-[#5B8C5A] to-[#2C3E50] text-white py-3 rounded-xl font-normal hover:shadow-lg transition-all duration-300"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Learn More
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedMember && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMember(null)}
                    >
                        <motion.div
                            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative">
                                <button
                                    onClick={() => setSelectedMember(null)}
                                    className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors z-10"
                                >
                                    ×
                                </button>
                                
                                <div className="relative h-64">
                                    <img 
                                        src={selectedMember.image} 
                                        alt={selectedMember.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                </div>

                                <div className="p-8">
                                    <h3 className="text-3xl font-normal text-[#2C3E50] mb-2">
                                        {selectedMember.name}
                                    </h3>
                                    <div className="w-16 h-0.5 bg-gradient-to-r from-[#E67E22] to-[#5B8C5A] mb-4"></div>
                                    <p className="text-xl text-[#E67E22] font-medium mb-6">
                                        {selectedMember.role}
                                    </p>
                                    
                                    <div className="prose prose-lg max-w-none">
                                        {selectedMember.fullBio.split('\n\n').map((paragraph, index) => (
                                            <p key={index} className="text-[#2C3E50]/80 leading-relaxed mb-4">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TeamSection;