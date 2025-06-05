import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaChevronRight, FaHeart } from "react-icons/fa";

const EventsPage = () => {
  // Sample data - will be replaced with Supabase data later
  const upcomingEvents = [
    {
      id: 1,
      title: "Toto Village Launch in Nakuru",
      date: "2023-11-15",
      time: "10:00 AM - 2:00 PM",
      location: "Nakuru Town Hall",
      description: "Join us for the grand launch of Toto Village in Nakuru! This event will showcase our new childcare centers and feature guest speakers, activities for children, and networking opportunities.",
      image: "/event-nakuru.jpg",
      category: "Launch"
    },
    {
      id: 2,
      title: "Caregiver Training Workshop",
      date: "2023-11-22",
      time: "9:00 AM - 4:00 PM",
      location: "Nairobi Toto Center",
      description: "A comprehensive training session for new TotoCarers covering child development, safety protocols, and business management skills.",
      image: "/event-training.jpg",
      category: "Workshop"
    }
  ];

  const previousEvents = [
    {
      id: 3,
      title: "Toto Village Nairobi Launch",
      date: "2023-05-20",
      location: "Nairobi",
      image: "/event-nairobi.jpg"
    },
    {
      id: 4,
      title: "Community Awareness Day",
      date: "2023-03-10",
      location: "Kisumu",
      image: "/event-kisumu.jpg"
    },
    {
      id: 5,
      title: "Fundraising Gala",
      date: "2023-02-14",
      location: "Mombasa",
      image: "/event-gala.jpg"
    }
  ];

  const relatedEvents = [
    {
      id: 6,
      title: "Parenting Seminar",
      date: "2023-12-05",
      location: "Online",
      image: "/event-seminar.jpg"
    },
    {
      id: 7,
      title: "Children's Health Day",
      date: "2023-12-12",
      location: "All Centers",
      image: "/event-health.jpg"
    }
  ];

  return (
    <div className="bg-white text-[#2C3E50]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1D3557] to-[#2a4b6f] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="inline-flex items-center justify-center bg-[#E67E22] px-4 py-2 rounded-full mb-4">
            <FaHeart className="text-white mr-2" />
            <span className="text-sm font-medium text-white">UPCOMING EVENTS</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Toto Village <span className="text-[#E67E22]">Events</span></h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Join us in our mission to empower women and nurture children through community-driven childcare
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {upcomingEvents.map(event => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] border border-[#5B8C5A]/20">
                <div className="h-48 bg-gray-300 overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                    event.category === "Launch" 
                      ? "bg-[#F0F7EF] text-[#5B8C5A]" 
                      : "bg-[#FEF3E6] text-[#E67E22]"
                  }`}>
                    {event.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 text-[#2C3E50]">{event.title}</h3>
                  <div className="flex items-center text-[#4a4a4a] mb-2">
                    <FaCalendarAlt className="mr-2 text-[#E67E22]" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center text-[#4a4a4a] mb-2">
                    <FaClock className="mr-2 text-[#E67E22]" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-[#4a4a4a] mb-4">
                    <FaMapMarkerAlt className="mr-2 text-[#E67E22]" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-[#4a4a4a] mb-6">{event.description}</p>
                  <button className="px-6 py-2 bg-[#E67E22] text-white rounded-lg font-medium hover:bg-[#4A7B48] transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Events */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Previous Events</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {previousEvents.map(event => (
              <div key={event.id} className="bg-[#f6f4f1] rounded-lg shadow-md overflow-hidden border border-[#5B8C5A]/20">
                <div className="h-40 bg-gray-300 overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-[#2C3E50]">{event.title}</h3>
                  <div className="flex items-center text-[#4a4a4a] mb-2">
                    <FaCalendarAlt className="mr-2 text-[#E67E22]" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center text-[#4a4a4a] mb-4">
                    <FaMapMarkerAlt className="mr-2 text-[#E67E22]" />
                    <span>{event.location}</span>
                  </div>
                  <button className="flex items-center text-[#E67E22] font-medium">
                    Learn More<FaChevronRight className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Events */}
      <section className="py-16 px-4 md:px-6 bg-[#f6f4f1]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">You Might Be Interested In</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {relatedEvents.map(event => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden flex border border-[#5B8C5A]/20">
                <div className="w-1/3 bg-gray-300">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                </div>
                <div className="w-2/3 p-5">
                  <h3 className="text-xl font-bold mb-2 text-[#2C3E50]">{event.title}</h3>
                  <div className="flex items-center text-[#4a4a4a] mb-2">
                    <FaCalendarAlt className="mr-2 text-[#E67E22]" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center text-[#4a4a4a] mb-4">
                    <FaMapMarkerAlt className="mr-2 text-[#E67E22]" />
                    <span>{event.location}</span>
                  </div>
                  <button className="text-[#E67E22] font-medium text-sm">
                    Learn More <FaChevronRight className="ml-1 inline" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 bg-[#F5E6CA] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#2c3e50]">Want to Host a Toto Village Event?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#2C3E50]">
            Partner with us to bring quality childcare and women empowerment to your community
          </p>
          <button className="px-8 py-3  bg-[#2C3E50] text-white rounded-lg font-bold text-lg">
            Contact Our Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;