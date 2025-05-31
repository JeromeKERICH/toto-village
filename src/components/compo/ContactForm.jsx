import React, { useState } from 'react';
import { supabase } from '../../services/supabaseClient'; // Adjust the import path

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const { data, error } = await supabase
        .from('contacts')
        .insert([{
          name: formData.name,
          email: formData.email,
          message: formData.message,
          created_at: new Date().toISOString()
        }])
        .select();

      if (error) throw error;

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#f6f4f1] py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get <span className="text-[#ff4848]">In Touch</span>
          </h2>
          <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto">
            Have questions or want to get involved? Reach out to us—we'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#2b2b2b] mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#fff7ec] p-3 rounded-full">
                    <svg className="w-5 h-5 text-[#f4cc15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2b2b2b]">Address</h4>
                    <p className="text-[#4a4a4a]">123 TotoVillage Lane, Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#fff7ec] p-3 rounded-full">
                    <svg className="w-5 h-5 text-[#f4cc15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2b2b2b]">Phone</h4>
                    <p className="text-[#4a4a4a]">(+254) 712 345 678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#fff7ec] p-3 rounded-full">
                    <svg className="w-5 h-5 text-[#f4cc15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2b2b2b]">Email</h4>
                    <p className="text-[#4a4a4a]">info@totovillage.org</p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/254712345678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-8 bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1da851] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29-3.429c-.545 1.492-1.189 2.925-2.144 4.01l-.167.146c-.129.1-.34.3-.45.35l-.104.035c-.182.06-.316.045-.435-.015-.116-.06-.68-.4-1.298-1.296-.49-.71-.82-1.5-.98-2.29-.08-.39.04-.76.18-1.06.14-.3.55-.8.55-.8.09-.1.1-.18.15-.31.05-.13.05-.23 0-.32l-.45-.9c-.13-.25-.35-.37-.6-.39-.25-.02-.5.16-.75.27-.25.11-1.08.54-1.2 1.61-.12 1.07.1 2.54.93 3.8.83 1.26 2.14 2.59 3.07 3.19l.47.32c1.15.76 2.47 1.04 3.57 1.59.39.19.85.33 1.3.43.45.1.97.14 1.48.07.51-.06 1.2-.28 1.7-.51.5-.23.9-.55 1.21-.96.32-.41.47-.81.5-1.22.03-.41-.04-.81-.2-1.21-.16-.4-.6-1.12-1.23-1.14-.63-.02-1.22.22-1.63.37-.41.15-.73.29-1.01.4-.28.11-.58.15-.88.05-.3-.1-.62-.35-.98-.65-.36-.3-1.21-1.18-1.36-1.28-.15-.1-.3-.15-.45.15-.15.3-.57 1.18-.7 1.41-.13.23-.26.3-.48.2l-.57-.26c-.24-.11-.5-.25-.7-.45-.21-.2-.42-.5-.63-.75-.21-.25-.17-.38.01-.63l.33-.41.7-.89c.75-.94.67-1.2-.02-2.19z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-[#2b2b2b] mb-6">Send Us a Message</h3>
            
            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#4a4a4a] mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4cc15] focus:border-transparent"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#4a4a4a] mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4cc15] focus:border-transparent"
                  placeholder="you@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#4a4a4a] mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4cc15] focus:border-transparent"
                  placeholder="Write your message here..."
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#ff4848] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e63e3e] transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;