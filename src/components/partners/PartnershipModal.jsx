import React, { useState } from 'react';
import { supabase } from '../../services/supabaseClient';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const PartnershipModal = ({ setOpen }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    partnerType: ''
  });

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    setStep(step + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleBack = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error: insertError } = await supabase
        .from('partnerships')
        .insert([{
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          partner_type: formData.partnerType,
          status: 'pending'
        }]);

      if (insertError) throw insertError;

      setStep(3); // Success step
    } catch (err) {
      console.error('Submission error:', err);
      setError(err.message || 'Failed to submit partnership request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 backdrop-blur-sm transition-all duration-300">
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl w-[95%] md:w-[70%] lg:w-[50%] p-6 md:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative border border-gray-100 animate-fade-in-up">
        <button
          className="absolute top-5 right-5 text-gray-400 hover:text-red-500 text-2xl transition-colors duration-200"
          onClick={() => setOpen(false)}
          aria-label="Close modal"
          disabled={loading}
        >
          &times;
        </button>

        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">Become a Partner</h2>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" 
              style={{ width: step === 1 ? '50%' : '100%' }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Step {step} of 2</p>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <div className="animate-fade-in">
              <h3 className="text-xl font-semibold text-gray-700 mb-6 pb-2 border-b border-gray-200">Contact Information</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name*</label>
                  <input 
                    type="text" 
                    name="fullName" 
                    value={formData.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email Address*</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone Number*</label>
                  <PhoneInput
                    international
                    defaultCountry="US"
                    value={formData.phone}
                    onChange={(value) => handleChange('phone', value)}
                    className="phone-input-custom"
                    inputClassName="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    countrySelectProps={{
                      className: "country-select-custom",
                      dropdownClassName: "country-dropdown-custom"
                    }}
                    required
                  />
                  <style jsx global>{`
                    .phone-input-custom {
                      --PhoneInputCountryFlag-height: 1.5em;
                      --PhoneInputCountryFlag-width: 2em;
                      --PhoneInputCountrySelectArrow-color: #6b7280;
                      --PhoneInputCountrySelectArrow-opacity: 1;
                    }
                    .country-select-custom {
                      padding-right: 0.5rem;
                      margin-right: 0.5rem;
                      border-right: 1px solid #d1d5db;
                    }
                    .country-dropdown-custom {
                      z-index: 10;
                      background: white;
                      border-radius: 0.5rem;
                      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                    }
                  `}</style>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <h3 className="text-xl font-semibold text-gray-700 mb-6 pb-2 border-b border-gray-200">Partnership Type</h3>
              <div className="space-y-4">
                <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 cursor-pointer transition-all">
                  <input 
                    type="radio" 
                    name="partnerType" 
                    value="Donors & Funders" 
                    checked={formData.partnerType === "Donors & Funders"}
                    onChange={(e) => handleChange('partnerType', e.target.value)} 
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                    required
                  />
                  <div>
                    <p className="font-medium text-gray-800">Donors & Funders</p>
                    <p className="text-sm text-gray-500">Support our mission financially</p>
                  </div>
                </label>
                <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 cursor-pointer transition-all">
                  <input 
                    type="radio" 
                    name="partnerType" 
                    value="County Government Officials" 
                    checked={formData.partnerType === "County Government Officials"}
                    onChange={(e) => handleChange('partnerType', e.target.value)} 
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                  />
                  <div>
                    <p className="font-medium text-gray-800">County Government Officials</p>
                    <p className="text-sm text-gray-500">Collaborate on community projects</p>
                  </div>
                </label>
                <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 cursor-pointer transition-all">
                  <input 
                    type="radio" 
                    name="partnerType" 
                    value="Corporate Partners" 
                    checked={formData.partnerType === "Corporate Partners"}
                    onChange={(e) => handleChange('partnerType', e.target.value)} 
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                  />
                  <div>
                    <p className="font-medium text-gray-800">Corporate Partners</p>
                    <p className="text-sm text-gray-500">Business collaborations and sponsorships</p>
                  </div>
                </label>
                <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 cursor-pointer transition-all">
                  <input 
                    type="radio" 
                    name="partnerType" 
                    value="Individual Partner" 
                    checked={formData.partnerType === "Individual Partner"}
                    onChange={(e) => handleChange('partnerType', e.target.value)} 
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                  />
                  <div>
                    <p className="font-medium text-gray-800">Individual Partner</p>
                    <p className="text-sm text-gray-500">Volunteer or contribute as an individual</p>
                  </div>
                </label>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-8 animate-fade-in">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank you for your interest!</h2>
              <p className="text-gray-600 mb-6">We've received your partnership request and will contact you soon to discuss next steps.</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Close
              </button>
            </div>
          )}

          {step < 3 && (
            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
              {step > 1 ? (
                <button 
                  type="button" 
                  onClick={handleBack} 
                  className="px-6 py-2.5 text-gray-600 hover:text-gray-800 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center"
                  disabled={loading}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                  Back
                </button>
              ) : (
                <div></div>
              )}
              {step < 2 ? (
                <button 
                  type="button" 
                  onClick={handleNext} 
                  className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center ml-auto"
                  disabled={loading || !formData.fullName || !formData.email || !formData.phone}
                >
                  Next
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              ) : (
                <button 
                  type="submit" 
                  className="px-6 py-2.5 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center ml-auto"
                  disabled={loading || !formData.partnerType}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Submit
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </>
                  )}
                </button>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default PartnershipModal;