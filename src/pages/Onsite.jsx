import React, { useEffect } from 'react';
import { FaBuilding, FaChild, FaUsers, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function OnSiteChildcare() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on page load
    }, []);

    const services = [
        {
            icon: <FaBuilding className="text-4xl text-[#E67E22]" />,
            title: "Turnkey Facility Setup",
            description: "Complete design and construction of on-site childcare centers tailored to your workplace",
            image: "assets/facility-setup.jpg",
            alt: "Modern childcare facility"
        },
        {
            icon: <FaChild className="text-4xl text-[#5B8C5A]" />,
            title: "Quality Childcare",
            description: "Developmentally appropriate programs for children aged 6 months to 5 years",
            image: "/assets/quality-care.jpg",
            alt: "Children engaged in learning activities"
        },
        {
            icon: <FaUsers className="text-4xl text-[#2C3E50]" />,
            title: "Trained Professionals",
            description: "Certified caregivers and early childhood education specialists",
            image: "assets/trained-staff.jpg",
            alt: "Caregivers with children"
        },
        {
            icon: <FaChartLine className="text-4xl text-[#E67E22]" />,
            title: "Performance Metrics",
            description: "Regular reporting on employee satisfaction and productivity impacts",
            image: "assets/metrics.jpg",
            alt: "HR analytics dashboard"
        }
    ];

    return (
        <section className="bg-white text-[#2C3E50] py-8 px-4 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                    <div className="lg:w-1/2 space-y-8">
                        <h1 className="lg:text-4xl md:text-3xl text-3xl font-bold mb-6 text-[#2C3E50] drop-shadow-sm">
                            On-site Childcare Centers
                        </h1>
                        <div className="bg-[#5B8C5A]/10 p-6 rounded-2xl border border-[#5B8C5A]/20 shadow-sm">
                            <p className="text-lg md:text-xl">
                                Providing on-site childcare that supports working parents and drives organizational success. 
                                Our centers create a win-win solution for employees and employers alike.
                            </p>
                        </div>
                        <ul className="space-y-3 text-lg">
                            <li className="flex items-start gap-2">
                                <span className="text-[#5B8C5A] font-bold">✓</span>
                                <span>Increase employee retention and productivity</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#5B8C5A] font-bold">✓</span>
                                <span>Reduce absenteeism and turnover costs</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#5B8C5A] font-bold">✓</span>
                                <span>Enhance your employer brand and corporate culture</span>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2">
                        <img 
                            src="/assets/hero2.jpg" 
                            alt="Modern on-site childcare center" 
                            className="w-full rounded-2xl object-cover h-[400px] shadow-xl border-4 border-white"
                        />
                    </div>
                </div>

                {/* Business Impact */}
                <div className="mb-16">
                    <h2 className="md:text-3xl text-2xl font-bold mb-8 text-[#2C3E50] drop-shadow-sm text-center">
                        The Business Case for On-site Childcare
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-[#E67E22]/10 p-6 rounded-2xl border border-[#E67E22]/20">
                            <h3 className="text-xl font-bold mb-3">72%</h3>
                            <p>Reduction in unscheduled absences among parents</p>
                        </div>
                        <div className="bg-[#5B8C5A]/10 p-6 rounded-2xl border border-[#5B8C5A]/20">
                            <h3 className="text-xl font-bold mb-3">40%</h3>
                            <p>Lower turnover rates for employees using the service</p>
                        </div>
                        <div className="bg-[#2C3E50]/10 p-6 rounded-2xl border border-[#2C3E50]/20">
                            <h3 className="text-xl font-bold mb-3">3.5x</h3>
                            <p>Return on investment through productivity gains</p>
                        </div>
                    </div>
                </div>

                {/* Services */}
                <div className="mb-16">
                    <h2 className="md:text-3xl text-2xl font-bold mb-6 text-[#2C3E50] drop-shadow-sm text-center">
                        Comprehensive On-site Solutions
                    </h2>
                    <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
                        We handle every aspect of creating and operating your workplace childcare center
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2C3E50]/10">
                                <div className="p-6 bg-white">
                                    <div className="flex justify-center mb-4">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-center">{service.title}</h3>
                                    <p className="text-[#2C3E50]/90 text-center">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Implementation Process */}
                <div className="mb-16 bg-[#F8F9FA] p-8 rounded-2xl">
                    <h2 className="md:text-3xl text-2xl font-bold mb-8 text-[#2C3E50] text-center">
                        Simple Implementation Process
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="bg-[#E67E22] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
                            <h3 className="font-bold mb-2">Needs Assessment</h3>
                            <p>Evaluate employee demand and space requirements</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-[#5B8C5A] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
                            <h3 className="font-bold mb-2">Facility Design</h3>
                            <p>Create custom layouts meeting all safety standards</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-[#2C3E50] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
                            <h3 className="font-bold mb-2">Staffing & Training</h3>
                            <p>Recruit and train qualified childcare professionals</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-[#E67E22] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
                            <h3 className="font-bold mb-2">Launch & Support</h3>
                            <p>Ongoing management and quality assurance</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="relative bg-gradient-to-r from-[#5B8C5A] to-[#2C3E50] p-1 rounded-2xl">
                    <div className="bg-white rounded-xl p-8 md:p-12 text-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Transform Your Workplace with On-site Childcare</h3>
                        <p className="text-[#4a4a4a] mb-6 max-w-2xl mx-auto text-lg">
                            Attract and retain top talent while supporting working parents in your organization.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link 
                                to="/contact" 
                                className="bg-[#E67E22] text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all duration-300"
                            >
                                Get Started Today
                            </Link>
                            <Link 
                                to="/case-studies" 
                                className="bg-white text-[#2C3E50] px-8 py-4 rounded-lg font-bold border border-[#2C3E50] hover:bg-[#2C3E50] hover:text-white transition-all duration-300"
                            >
                                View Case Studies
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}