import React, { useEffect } from 'react';
import { FaChalkboardTeacher, FaFirstAid, FaUtensils, FaBusinessTime } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function WorkforceDevelopment() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on page load
    }, []);

    const trainingModules = [
        {
            icon: <FaChalkboardTeacher className="text-4xl text-[#E67E22]" />,
            title: "Child Development",
            description: "Comprehensive training in early childhood education best practices and developmental milestones",
            image: "assets/child-development.jpg",
            alt: "Caregivers learning child development"
        },
        {
            icon: <FaFirstAid className="text-4xl text-[#5B8C5A]" />,
            title: "Health & Safety",
            description: "Certification in pediatric first aid, sanitation protocols, and emergency response",
            image: "assets/health-safety.jpg",
            alt: "Caregiver practicing safety procedures"
        },
        {
            icon: <FaUtensils className="text-4xl text-[#2C3E50]" />,
            title: "Nutrition Planning",
            description: "Meal planning for optimal child growth and addressing nutritional deficiencies",
            image: "assets/nutrition-planning.jpg",
            alt: "Caregivers preparing healthy meals"
        },
        {
            icon: <FaBusinessTime className="text-4xl text-[#E67E22]" />,
            title: "Business Management",
            description: "Entrepreneurial skills including financial planning, marketing, and operations",
            image: "assets/business-management.jpg",
            alt: "Women learning business skills"
        }
    ];

    return (
        <section className="bg-white text-[#2C3E50] py-16 px-4 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                    <div className="lg:w-1/2 space-y-8">
                        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-6 text-[#2C3E50] drop-shadow-sm">
                            Workforce Development
                        </h1>
                        <div className="bg-[#5B8C5A]/10 p-6 rounded-2xl border border-[#5B8C5A]/20 shadow-sm">
                            <p className="text-lg md:text-xl">
                                We recruit, train, and certify local caregivers in child development and business management, 
                                creating a professional workforce that delivers quality early childhood education.
                            </p>
                        </div>
                        <ul className="space-y-3 text-lg">
                            <li className="flex items-start gap-2">
                                <span className="text-[#5B8C5A] font-bold">✓</span>
                                <span>2-month intensive training program</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#5B8C5A] font-bold">✓</span>
                                <span>Government-recognized certification</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#5B8C5A] font-bold">✓</span>
                                <span>Business incubation for graduates</span>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2">
                        <img 
                            src="/assets/co6.JPG" 
                            alt="Group of caregivers in training session" 
                            className="w-full rounded-2xl object-cover h-[400px] shadow-xl border-4 border-white"
                        />
                    </div>
                </div>

                {/* Program Impact */}
                <div className="mb-16 bg-[#F8F9FA] p-8 rounded-2xl">
                    <h2 className="md:text-3xl text-2xl font-bold mb-8 text-[#2C3E50] text-center">
                        Creating Professional Caregivers
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="bg-[#E67E22] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">210+</div>
                            <p>Caregivers trained and certified </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-[#5B8C5A] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">85%</div>
                            <p>Graduates employed after training</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-[#2C3E50] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2x</div>
                            <p>Average income increase for graduates</p>
                        </div>
                    </div>
                </div>

                {/* Training Curriculum */}
                <div className="mb-16">
                    <h2 className="md:text-3xl text-2xl font-bold mb-8 text-center text-[#2C3E50] drop-shadow-sm">
                        Comprehensive Training Curriculum
                    </h2>
                    <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
                        Combining early childhood expertise with entrepreneurial skills
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {trainingModules.map((module, index) => (
                            <div key={index} className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2C3E50]/10">
                                <div className="p-6 bg-white">
                                    <div className="flex justify-center mb-4">
                                        {module.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-center">{module.title}</h3>
                                    <p className="text-[#2C3E50]/90 text-center">{module.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Career Pathways */}
                <div className="mb-16">
                    <h2 className="md:text-3xl text-2xl font-bold mb-8 text-center text-[#2C3E50] drop-shadow-sm">
                        Career Pathways for Graduates
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-[#E67E22]/10 p-6 rounded-2xl">
                            <h3 className="font-bold text-lg mb-3">Center-Based Caregivers</h3>
                            <p>Employment in our network of childcare centers with competitive salaries</p>
                        </div>
                        <div className="bg-[#5B8C5A]/10 p-6 rounded-2xl">
                            <h3 className="font-bold text-lg mb-3">Home-Based Providers</h3>
                            <p>Support to establish licensed home daycare businesses</p>
                        </div>
                        <div className="bg-[#2C3E50]/10 p-6 rounded-2xl">
                            <h3 className="font-bold text-lg mb-3">ECD Entrepreneurs</h3>
                            <p>Opportunities to launch innovative early childhood services</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="relative bg-gradient-to-r from-[#5B8C5A] to-[#2C3E50] p-1 rounded-2xl">
                    <div className="bg-white rounded-xl p-8 md:p-12 text-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Invest in Quality Early Childhood Workforce</h3>
                        <p className="text-[#4a4a4a] mb-6 max-w-2xl mx-auto text-lg">
                            Partner with us to train the next generation of professional caregivers and childcare entrepreneurs.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link 
                                to="/contact" 
                                className="bg-[#E67E22] text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all duration-300"
                            >
                                Support Our Program
                            </Link>
                            <Link 
                                to="/apply" 
                                className="bg-white text-[#2C3E50] px-8 py-4 rounded-lg font-bold border border-[#2C3E50] hover:bg-[#2C3E50] hover:text-white transition-all duration-300"
                            >
                                Apply for Training
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}