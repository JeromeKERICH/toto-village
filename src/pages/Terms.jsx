import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function TermsOfService() {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-[#1D3557] mb-2">Terms of Service</h1>
        <p className="text-[#2a4b6f]">Last Updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="prose prose-lg text-gray-700">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#1D3557] mb-4">1. Introduction</h2>
          <p>
            Welcome to TotoVillage ("we," "our," or "us"). These Terms of Service govern your use of our website and services. 
            By accessing or using our services, you agree to be bound by these terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#1D3557] mb-4">2. Our Services</h2>
          <p>
            TotoVillage provides community-based childcare solutions, educational resources, and support services. 
            All services are subject to availability and may be modified or discontinued at our discretion.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#1D3557] mb-4">3. User Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You must provide accurate information when using our services</li>
            <li>You agree not to misuse our services or website</li>
            <li>Parents/guardians are responsible for providing accurate information about children</li>
            <li>You must comply with all applicable laws and regulations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#1D3557] mb-4">4. Donations & Payments</h2>
          <p>
            All donations are voluntary and non-refundable unless required by law. 
            We reserve the right to refuse or return any donation at our discretion.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#1D3557] mb-4">5. Intellectual Property</h2>
          <p>
            All content on our website, including text, graphics, logos, and images, is our property and protected by copyright laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#1D3557] mb-4">6. Limitation of Liability</h2>
          <p>
            TotoVillage shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#1D3557] mb-4">7. Changes to Terms</h2>
          <p>
            We may update these terms periodically. Continued use of our services after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#1D3557] mb-4">8. Governing Law</h2>
          <p>
            These terms shall be governed by the laws of Kenya. Any disputes shall be resolved in the courts of Nairobi.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#1D3557] mb-4">Contact Us</h2>
          <p>
            For questions about these Terms, please contact us at <Link to="mailto:wecare@totovillage.org" className="text-[#E67E22]">wecare@totovillage.org</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}