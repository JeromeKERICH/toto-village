import React, { useEffect } from 'react';
import { FaPlay, FaImages, FaMapMarkerAlt, FaUserFriends, FaHistory, FaChild } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function MediaPage() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts
    }, []);
  const mediaSections = [
    {
      title: "Our Story",
      icon: <FaHistory className="text-4xl text-[#E67E22]" />,
      description: "How Toto Village began and our mission to transform childcare in Kenya",
      media: [
        {
          type: "video",
          thumbnail: "assets/foundation-story.jpg",
          title: "Founding Story: The Need for Change",
          date: "2020"
        },
        {
          type: "gallery",
          thumbnail: "assets/early-days.jpg",
          title: "Early Days: Building the Vision",
          count: "12 photos"
        }
      ]
    },
    {
      title: "Community Impact",
      icon: <FaUserFriends className="text-4xl text-[#E67E22]" />,
      description: "How we're empowering women and transforming communities",
      media: [
        {
          type: "video",
          thumbnail: "assets/mother-testimonial.jpg",
          title: "Grace's Journey: From Market Vendor to Business Owner",
          date: "2023"
        },
        {
          type: "gallery",
          thumbnail: "assets/community-event.jpg",
          title: "Nakuru County Parent Gathering",
          count: "24 photos"
        }
      ]
    },
    {
      title: "Our Centers",
      icon: <FaMapMarkerAlt className="text-4xl text-[#E67E22]" />,
      description: "Explore our growing network of childcare hubs",
      media: [
        {
          type: "video",
          thumbnail: "assets/center-opening.jpg",
          title: "Kawangware Center Launch Ceremony",
          date: "2022"
        },
        {
          type: "interactive",
          thumbnail: "assets/map-centers.jpg",
          title: "Interactive Map: Our Locations",
          label: "Explore"
        }
      ]
    },
    {
      title: "Childcare Heroes",
      icon: <FaChild className="text-4xl text-[#E67E22]" />,
      description: "Meet the caregivers at the heart of our centers",
      media: [
        {
          type: "video",
          thumbnail: "assets/caregiver-training.jpg",
          title: "A Day in the Life of Caregiver Margaret",
          date: "2024"
        },
        {
          type: "gallery",
          thumbnail: "assets/caregiver-portraits.jpg",
          title: "Portraits of Our Caregivers",
          count: "8 profiles"
        }
      ]
    }
  ];

 

  return (
    <section className="bg-white">
      {/* Hero Banner */}
      <div className="relative h-60 bg-[#2C3E50] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold mb-4 text-white drop-shadow-sm text-center">Toto Village in Focus</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Visual stories of transformation, community, and early childhood impact
          </p>
        </div>
      </div>

      {/* Media Sections */}
      <div className="py-16 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {mediaSections.map((section, index) => (
            <div key={index} className="mb-20">
              <div className="flex items-center mb-8">
                <div className="mr-6">
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#2C3E50]">{section.title}</h2>
                  <p className="text-lg text-[#4a4a4a]">{section.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {section.media.map((item, i) => (
                  <div key={i} className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                    <div className="relative h-64">
                      <img 
                        src={item.thumbnail} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6 text-white">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <div className="flex items-center">
                          {item.type === "video" && (
                            <>
                              <FaPlay className="mr-2" />
                              <span>{item.date}</span>
                            </>
                          )}
                          {item.type === "gallery" && (
                            <>
                              <FaImages className="mr-2" />
                              <span>{item.count}</span>
                            </>
                          )}
                          {item.type === "interactive" && (
                            <span className="bg-[#E67E22] px-3 py-1 rounded-full text-sm font-medium">
                              {item.label}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      

      {/* CTA */}
      <div className="py-20 px-4 text-center bg-gradient-to-r from-[#2C3E50] to-[#4A6491] text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Share Our Story?</h2>
          <p className="text-xl mb-8">
            Media inquiries, partnership opportunities, or visit requests - we'd love to connect.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-[#2C3E50] font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Our Team
            </Link>
            <Link
              to="/press-kit"
              className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-[#2C3E50] transition-colors"
            >
              Download Press Kit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}