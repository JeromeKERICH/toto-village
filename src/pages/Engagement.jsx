import React, { useEffect } from 'react';
import { FaUsers, FaHandshake, FaBullhorn, FaComments } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function CommunityEngagement() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on page load
    }, []);
  const programHighlights = [
    {
      icon: <FaComments className="text-4xl text-[#E67E22]" />,
      title: "Parenting Forums",
      description: "Community dialogues that break down childcare myths and share best practices",
      image: "assets/parenting-forum.jpg",
      alt: "Community members in discussion"
    },
    {
      icon: <FaHandshake className="text-4xl text-[#5B8C5A]" />,
      title: "Volunteer Training",
      description: "Equipping local volunteers with basic childcare skills and first aid knowledge",
      image: "assets/volunteer-training.jpg",
      alt: "Volunteers practicing childcare skills"
    },
    {
      icon: <FaUsers className="text-4xl text-[#2C3E50]" />,
      title: "Leader Workshops",
      description: "Engaging elders and local leaders as childcare champions in their communities",
      image: "assets/leader-workshop.jpg",
      alt: "Community leaders in training"
    },
    {
      icon: <FaBullhorn className="text-4xl text-[#E67E22]" />,
      title: "Awareness Campaigns",
      description: "Public events that make early childhood development a community priority",
      image: "assets/awareness-event.jpg",
      alt: "Community awareness event"
    }
  ];

  return (
    <section className="bg-white text-[#2C3E50] py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold mb-6 text-[#2C3E50] drop-shadow-sm">
              Making Childcare a Community Priority
            </h1>
            <div className="bg-[#5B8C5A]/10 p-6 rounded-2xl border border-[#5B8C5A]/20 shadow-sm">
              <p className="text-lg md:text-xl">
                We bring childcare into neighborhoods, villages, and marketplaces where it becomes part of daily life. We empower communities to take ownership of early childhood development, ensuring every child has the support they need to thrive.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="/assets/h3.jpg" 
              alt="Village community meeting" 
              className="w-full rounded-2xl object-cover h-[400px] shadow-xl border-4 border-white"
            />
          </div>
        </div>

        {/* Program Overview */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#E67E22]/10 p-8 rounded-2xl border border-[#E67E22]/20 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                 The Community Challenge
              </h3>
              <p className="text-lg">
                Childcare is often seen as solely a mother's responsibility, limiting community support and shared knowledge.
              </p>
            </div>
            
            <div className="bg-[#5B8C5A]/10 p-8 rounded-2xl border border-[#5B8C5A]/20 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                 Our Grassroots Approach
              </h3>
              <p className="text-lg">
                We embed childcare in local networks training volunteers, engaging leaders, and creating community ownership of early childhood development.
              </p>
            </div>
          </div>

          <h2 className="md:text-3xl text-2xl font-bold mb-6 text-[#2C3E50] drop-shadow-sm text-center">Our Community Program Highlights</h2>
          <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
            Building village-wide support systems for children's development
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programHighlights.map((highlight, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2C3E50]/10">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={highlight.image} 
                    alt={highlight.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/70 to-transparent"></div>
                </div>
                <div className="p-6 bg-white">
                  
                  <h3 className="text-xl font-bold mb-3 text-center">{highlight.title}</h3>
                  <p className="text-[#2C3E50]/90 text-center">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="md:text-3xl text-2xl font-bold mb-8 text-[#2C3E50] drop-shadow-sm text-center">Community Voices</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#E67E22]/10 p-8 rounded-2xl border border-[#E67E22]/20 shadow-sm relative">
              
              <p className="text-lg italic mb-4">"I never thought I'd see men discussing diapers and nutrition. Toto Village is shifting mindsets in ways we couldn't imagine."</p>
              <div className="flex items-center gap-4">
                <img 
                  src="assets/elder-profile.jpg" 
                  alt="Village Elder" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#E67E22]"
                />
                <div>
                  <p className="font-bold">Mzee Juma</p>
                  <p className="text-sm">Village Elder, Mombasa</p>
                </div>
              </div>
            </div>
            <div className="bg-[#5B8C5A]/10 p-8 rounded-2xl border border-[#5B8C5A]/20 shadow-sm relative">
              
              <p className="text-lg italic mb-4">"Now I know that raising a child is not just a mother's job—it's all of ours. I'm proud to be a 'Father in Care' volunteer."</p>
              <div className="flex items-center gap-4">
                <img 
                  src="assets/father-profile.jpg" 
                  alt="Michael" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#5B8C5A]"
                />
                <div>
                  <p className="font-bold">Michael Otieno</p>
                  <p className="text-sm">Father of 2 & Community Volunteer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative bg-[#2C3E50] p-1 border rounded-lg">
          <div className="bg-white rounded-xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Want to ignite childcare advocacy in your community?</h3>
            <p className="text-[#4a4a4a] mb-6 max-w-2xl mx-auto text-lg">
              Let's work together to make early childhood development a shared community responsibility.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-[#E67E22] text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
              >
                Let's Make It Happen
                <FaHandshake className="group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}