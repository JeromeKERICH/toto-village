import Logo1 from '/assets/l1.png';
import Logo2 from '/assets/global.png';
import Logo3 from '/assets/l3.png';
import Logo4 from '/assets/l4.png';

const PartnerCloud = () => {
  const partners = [
    { logo: Logo1, alt: 'Gates Foundation' },
    { logo: Logo2, alt: 'Global Schools Forum' },
    { logo: Logo3, alt: 'Nakuru County Government' },
    { logo: Logo4, alt: 'Uthabiti Africa' },
    // Duplicate for seamless looping (optional)
    { logo: Logo1, alt: 'Gates Foundation' },
    { logo: Logo2, alt: 'Global Schools Forum' },
    { logo: Logo3, alt: 'Nakuru County Government' },
    { logo: Logo4, alt: 'Uthabiti Africa' }
  ];

  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-3 text-[#2C3E50] drop-shadow-sm text-center">
          Our Trusted Partners
        </h2>
        <p className="text-x text-center text-[#4a4a4a] mb-10">
          Partnering with world-class organizations to deliver transformative impact
        </p>
        
        {/* Desktop - Grid Layout */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-16">
          {partners.slice(0, 4).map((partner, index) => (
            <div key={`desktop-${index}`} className="group relative">
              <div className="absolute inset-0 bg-[#FF9F1C] opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300 -z-10"></div>
              <img 
                src={partner.logo} 
                alt={partner.alt} 
                className="h-24 object-contain opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
        
        {/* Mobile - Continuous Scroll */}
        <div className="md:hidden overflow-hidden relative">
          <div className="animate-scrollHorizontally flex gap-16 py-4">
            {partners.map((partner, index) => (
              <div key={`mobile-${index}`} className="flex-shrink-0">
                <img 
                  src={partner.logo} 
                  alt={partner.alt} 
                  className="h-20 object-contain opacity-90"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Add this to your global CSS or CSS-in-JS */}
      <style jsx>{`
        @keyframes scrollHorizontally {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scrollHorizontally {
          animation: scrollHorizontally 20s linear infinite;
          width: max-content;
        }
        .animate-scrollHorizontally:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default PartnerCloud