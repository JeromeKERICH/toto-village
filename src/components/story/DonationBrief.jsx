import { Link } from 'react-router-dom';
const DonationPage = () => {
    return (
    <div className="py-[5px] px-[4%] md:py-[20px] md:px-[8%] bg-white">
  
        {/* Other page content */}
  
        {/* Donation CTA Section */}
        <section className="mt-20 py-12 px-6 md:py-20 md:px-12 rounded-xl bg-gradient-to-br from-[#FFE6E6] via-[#FFF5F5] to-[#FFF] shadow-lg text-center">
          <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold mb-3 text-[#2C3E50] drop-shadow-sm text-center">
            Support a Future. Shape a Generation.
          </h2>
          <p className="text-lg md:text-xl text-[#4B5563] leading-relaxed max-w-3xl mx-auto mb-8">
            Your donation helps us provide safe, nurturing childcare environments,
            support women-led daycare businesses, and uplift entire communities.
            Every contribution big or small plants a seed of lasting impact in a child’s life.
          </p>
  
          <Link to="/donate"
            
            className="inline-block bg-[#E67E22] hover:bg-[#c9303e] text-white font-semibold px-8 py-4 rounded-full shadow-md transition duration-300"
          >
            Donate Now
          </Link>
        </section>
  
      
      </div>
    );
  };
  
  export default DonationPage;
  