import React, { useState } from 'react';
import { supabase } from '../../services/supabaseClient';

const PartnershipModal = ({ setOpen }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    orgType: '',
    country: '',
    website: '',
    partnershipType: '',
    intent: '',
    timeline: '',
    message: '',
    proposal: null,
    submitMethod: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
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
      // Upload file if exists
      let proposalUrl = null;
      if (formData.proposal) {
        const fileExt = formData.proposal.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `proposals/${fileName}`;
        
        const { error: uploadError } = await supabase.storage
          .from('partnership-documents')
          .upload(filePath, formData.proposal);
        
        if (uploadError) throw uploadError;
        
        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('partnership-documents')
          .getPublicUrl(filePath);
        
        proposalUrl = publicUrl;
      }

      // Insert form data into partnerships table
      const { error: insertError } = await supabase
        .from('partnerships')
        .insert([{
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          organization: formData.organization,
          org_type: formData.orgType,
          country: formData.country,
          website: formData.website,
          partnership_type: formData.partnershipType,
          intent: formData.intent,
          timeline: formData.timeline,
          message: formData.message,
          proposal_url: proposalUrl,
          submit_method: formData.submitMethod,
          status: 'pending'
        }]);

      if (insertError) throw insertError;

      setStep(6);
    } catch (err) {
      console.error('Submission error:', err);
      setError(err.message || 'Failed to submit partnership request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 backdrop-blur-sm transition-all duration-300">
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl w-[95%] md:w-[70%] lg:w-[60%] p-6 md:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative border border-gray-100 animate-fade-in-up">
        <button
          className="absolute top-5 right-5 text-gray-400 hover:text-red-500 text-2xl transition-colors duration-200"
          onClick={() => setOpen(false)}
          aria-label="Close modal"
          disabled={loading}
        >
          &times;
        </button>

        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">Partnership Request</h2>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" 
              style={{ width: `${(step/6)*100}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Step {step} of 5</p>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <div className="animate-fade-in">
              <h3 className="text-xl font-semibold text-gray-700 mb-6 pb-2 border-b border-gray-200">Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name*</label>
                  <input 
                    type="text" 
                    name="fullName" 
                    value={formData.fullName}
                    onChange={handleChange} 
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
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone Number*</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    required 
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <h3 className="text-xl font-semibold text-gray-700 mb-6 pb-2 border-b border-gray-200">Organization Details</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Organization Name*</label>
                  <input 
                    type="text" 
                    name="organization" 
                    value={formData.organization}
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Organization Type*</label>
                  <select 
                    name="orgType" 
                    value={formData.orgType}
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiAjdjEwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
                    required
                  >
                    <option value="">Select Organization Type</option>
                    <option value="Nonprofit">Nonprofit</option>
                    <option value="Company">Company</option>
                    <option value="Church">Church</option>
                    <option value="Media">Media</option>
                    <option value="Educational">Educational</option>
                    <option value="Government">Government</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Country*</label>
                  <input 
                    type="text" 
                    name="country" 
                    value={formData.country}
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Website</label>
                  <input 
                    type="url" 
                    name="website" 
                    value={formData.website}
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder="https://example.com"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in">
              <h3 className="text-xl font-semibold text-gray-700 mb-6 pb-2 border-b border-gray-200">Partnership Intent</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Partnership Type*</label>
                  <select 
                    name="partnershipType" 
                    value={formData.partnershipType}
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiAjdjEwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
                    required
                  >
                    <option value="">Select Partnership Type</option>
                    <option value="Financial Support">Financial Support</option>
                    <option value="Volunteering">Volunteering</option>
                    <option value="Sponsorship">Sponsorship</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="In-Kind Donation">In-Kind Donation</option>
                    <option value="Event Partnership">Event Partnership</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">How do you intend to support?*</label>
                  <textarea 
                    name="intent" 
                    rows="3" 
                    value={formData.intent}
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    required 
                    placeholder="Describe how your organization plans to support our mission..."
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Timeline</label>
                  <input 
                    type="text" 
                    name="timeline" 
                    value={formData.timeline}
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder="e.g. January 2025 - December 2025"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-fade-in">
              <h3 className="text-xl font-semibold text-gray-700 mb-6 pb-2 border-b border-gray-200">Proposal Details</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    name="message" 
                    rows="4" 
                    value={formData.message}
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder="Tell us more about your proposal, goals, and expectations from this partnership..."
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Attach Proposal (Optional)</label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col w-full border-2 border-dashed border-gray-300 hover:border-blue-500 rounded-lg cursor-pointer transition-all hover:bg-blue-50">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6 px-4">
                        <svg className="w-8 h-8 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">
                          {formData.proposal ? formData.proposal.name : "PDF, DOC, DOCX (Max 5MB)"}
                        </p>
                      </div>
                      <input 
                        type="file" 
                        name="proposal" 
                        accept=".pdf,.doc,.docx" 
                        onChange={handleChange} 
                        className="hidden" 
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="animate-fade-in">
              <h3 className="text-xl font-semibold text-gray-700 mb-6 pb-2 border-b border-gray-200">Final Step</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">How would you like to proceed?*</label>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 cursor-pointer transition-all">
                      <input 
                        type="radio" 
                        name="submitMethod" 
                        value="Just Submit" 
                        checked={formData.submitMethod === "Just Submit"}
                        onChange={handleChange} 
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                        required
                      />
                      <div>
                        <p className="font-medium text-gray-800">Just Submit</p>
                        <p className="text-sm text-gray-500">We'll review your proposal and get back to you</p>
                      </div>
                    </label>
                    <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 cursor-pointer transition-all">
                      <input 
                        type="radio" 
                        name="submitMethod" 
                        value="Schedule a Call" 
                        checked={formData.submitMethod === "Schedule a Call"}
                        onChange={handleChange} 
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                      />
                      <div>
                        <p className="font-medium text-gray-800">Schedule a Call</p>
                        <p className="text-sm text-gray-500">Let's discuss this partnership in detail</p>
                      </div>
                    </label>
                    <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 cursor-pointer transition-all">
                      <input 
                        type="radio" 
                        name="submitMethod" 
                        value="Request Presentation" 
                        checked={formData.submitMethod === "Request Presentation"}
                        onChange={handleChange} 
                        className="h-5 w-5 text-blue-600 focus:ring-blue-500"
                      />
                      <div>
                        <p className="font-medium text-gray-800">Request Presentation</p>
                        <p className="text-sm text-gray-500">We'll prepare materials and schedule a meeting</p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="text-center py-8 animate-fade-in">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank you for your submission!</h2>
              <p className="text-gray-600 mb-6">We've received your partnership request and will review it shortly. Our team will reach out to you soon.</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Close
              </button>
            </div>
          )}

          {step < 6 && (
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
              {step < 5 ? (
                <button 
                  type="button" 
                  onClick={handleNext} 
                  className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center ml-auto"
                  disabled={loading}
                >
                  {loading ? 'Processing...' : 'Next'}
                  {!loading && (
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  )}
                </button>
              ) : (
                <button 
                  type="submit" 
                  className="px-6 py-2.5 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center ml-auto"
                  disabled={loading}
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