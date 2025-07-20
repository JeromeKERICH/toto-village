import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-[#1D3557] mb-2">Privacy Policy</h1>
        <p className="text-[#2a4b6f]">Last Updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="prose prose-lg text-gray-700">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#1D3557] mb-4">1. Introduction</h2>
          <p>
            TotoVillage ("we," "our," or "us") is committed to protecting your privacy. This policy explains how we collect, 
            use, and safeguard your personal information when you use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#1D3557] mb-4">2. Information We Collect</h2>
          <p>We may collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Personal identification information (name, email, phone number)</li>
            <li>Demographic information (for program eligibility)</li>
            <li>Child information (age, special needs for program participation)</li>
            <li>Payment information for donations (processed securely via third-party providers)</li>
            <li>Website usage data through cookies</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#1D3557] mb-4">3. How We Use Information</h2>
          <p>We use collected information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and improve our services</li>
            <li>Process donations and send receipts</li>
            <li>Communicate about programs and updates</li>
            <li>Ensure child safety and proper program placement</li>
            <li>Analyze website usage for improvement</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#1D3557] mb-4">4. Data Sharing & Disclosure</h2>
          <p>
            We do not sell your personal information. We may share data with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service providers who assist our operations (under confidentiality agreements)</li>
            <li>Government authorities when legally required</li>
            <li>Other organizations in case of program partnerships (with consent)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#1D3557] mb-4">5. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your information. However, no internet transmission is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#1D3557] mb-4">6. Children's Privacy</h2>
          <p>
            We take special care to protect children's privacy. Parental consent is required for collecting information about minors.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#1D3557] mb-4">7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal information we hold</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data (subject to legal requirements)</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#1D3557] mb-4">8. Cookies</h2>
          <p>
            Our website uses cookies to enhance user experience. You can disable cookies in your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#1D3557] mb-4">9. Changes to This Policy</h2>
          <p>
            We may update this policy periodically. We will notify users of significant changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#1D3557] mb-4">Contact Us</h2>
          <p>
            For privacy-related inquiries, contact our Data Protection Officer at <Link to="mailto:complaint@totovillage.org" className="text-[#E67E22]">complaint@totovillage.org</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}