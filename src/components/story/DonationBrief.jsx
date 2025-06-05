const DonationPage = () => {
    return (
    <div className="py-[5px] px-[4%] md:py-[20px] md:px-[8%] bg-[#f6f4f1] text-[#1D3557]">
  
        {/* Other page content */}
  
        {/* Donation CTA Section */}
        <section className="mt-20 py-12 px-6 md:py-20 md:px-12 rounded-xl bg-gradient-to-br from-[#FFE6E6] via-[#FFF5F5] to-[#FFF] shadow-lg text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Support a Future. Shape a Generation.
          </h2>
          <p className="text-lg md:text-xl text-[#4B5563] leading-relaxed max-w-3xl mx-auto mb-8">
            Your donation helps us provide safe, nurturing childcare environments,
            support women-led daycare businesses, and uplift entire communities.
            Every contribution big or small plants a seed of lasting impact in a child’s life.
          </p>
  
          <a
            href="https://yourdonationpage.com"
            className="inline-block bg-[#E67E22] hover:bg-[#c9303e] text-white font-semibold px-8 py-4 rounded-full shadow-md transition duration-300"
          >
            Donate Now
          </a>
        </section>
  
      
      </div>
    );
  };
  
  export default DonationPage;
  