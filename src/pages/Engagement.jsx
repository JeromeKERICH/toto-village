import React, { useEffect } from 'react';
import { FaUsers, FaHandsHelping, FaComments, FaChild } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function CommunityEngagement() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on page load
    }, []);

    const engagementPrograms = [
        {
            icon: <FaChild className="text-4xl text-[#E67E22]" />,
            title: "Neighborhood Hubs",
            description: "Establishing community-owned childcare spaces in central locations",
            image: "assets/neighborhood-hub.jpg",
            alt: "Community childcare center"
        },
        {
            icon: <FaUsers className="text-4xl text-[#5B8C5A]" />,
            title: "Parent Circles",
            description: "Peer support groups sharing childcare knowledge and resources",
            image: "assets/parent-circle.jpg",
            alt: "Parents in discussion circle"
        },
        {
            icon: <FaHandsHelping className="text-4xl text-[#2C3E50]" />,
            title: "Community Caregivers",
            description: "Training local residents to provide quality childcare services",
            image: "assets/community-caregivers.jpg",
            alt: "Community members learning childcare"
        },
        {
            icon: <FaComments className="text-4xl text-[#E67E22]" />,
            title: "Awareness Drives",
            description: "Campaigns promoting the value of early childhood development",
            image: "assets/awareness-drive.jpg",
            alt: "Community awareness event"
        }
    ];

    return (
        <section className="bg-white text-[#2C3E50] py-16 px-4 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                    <div className="lg:w-1/2 space-y-8">
                        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-6 text-[#2C3E50] drop-shadow-sm">
                            Community Engagement
                        </h1>
                        <div className="bg-[#5B8C5A]/10 p-6 rounded-2xl border border-[#5B8C5A]/20 shadow-sm">
                            <p className="text-lg md:text-xl">
                                We bring childcare into the heart of communities where care becomes accessible and valued,
                                creating local solutions that transform neighborhoods.
                            </p>
                        </div>
                        <ul className="space-y-3 text-lg">
                            <li className="flex items-start gap-2">
                                <span className="text-[#5B8C5A] font-bold">✓</span>
                                <span>Community-owned childcare solutions</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#5B8C5A] font-bold">✓</span>
                                <span>Local leadership engagement</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#5B8C5A] font-bold">✓</span>
                                <span>Sustainable neighborhood models</span>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2">
                        <img 
                            src="/assets/h1.jpg" 
                            alt="Village community caring for children together" 
                            className="w-full rounded-2xl object-cover h-[400px] shadow-xl border-4 border-white"
                        />
                    </div>
                </div>

                {/* Community Impact */}
                <div className="mb-16 bg-[#F8F9FA] p-8 rounded-2xl">
                    <h2 className="md:text-3xl text-2xl font-bold mb-8 text-[#2C3E50] text-center">
                        Strengthening Communities Through Childcare
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="bg-[#E67E22] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">20+</div>
                            <p>Neighborhood hubs established</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-[#5B8C5A] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">5000+</div>
                            <p>Parents & community members impacted</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-[#2C3E50] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">92%</div>
                            <p>Of parents report stronger community ties</p>
                        </div>
                    </div>
                </div>

                {/* Engagement Programs */}
                <div className="mb-16">
                    <h2 className="md:text-3xl text-2xl font-bold mb-6 text-[#2C3E50] drop-shadow-sm text-center">
                        Our Community Engagement Programs
                    </h2>
                    <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
                        Creating accessible childcare solutions rooted in local communities
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {engagementPrograms.map((program, index) => (
                            <div key={index} className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2C3E50]/10">
                                <div className="p-6 bg-white">
                                    <div className="flex justify-center mb-4">
                                        {program.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-center">{program.title}</h3>
                                    <p className="text-[#2C3E50]/90 text-center">{program.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                
                {/* CTA Section */}
                <div className="relative bg-gradient-to-r from-[#5B8C5A] to-[#2C3E50] p-1 rounded-2xl">
                    <div className="bg-white rounded-xl p-8 md:p-12 text-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Bring Childcare to Your Community?</h3>
                        <p className="text-[#4a4a4a] mb-6 max-w-2xl mx-auto text-lg">
                            Whether you're a community leader, neighborhood group, or local organization, we can help create childcare solutions that work for you.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link 
                                to="/contact" 
                                className="bg-[#E67E22] text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all duration-300"
                            >
                                Start a Community Program
                            </Link>
                            <Link 
                                to="/community-resources" 
                                className="bg-white text-[#2C3E50] px-8 py-4 rounded-lg font-bold border border-[#2C3E50] hover:bg-[#2C3E50] hover:text-white transition-all duration-300"
                            >
                                View Resources
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}