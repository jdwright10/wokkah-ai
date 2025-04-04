
import React from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Privacy Policy', isCurrent: true }
  ];

  return (
    <MainLayout customBreadcrumbs={<BreadcrumbNav items={breadcrumbItems} className="mb-6" />}>
      <Helmet>
        <title>Privacy Policy | Wokkah</title>
        <meta name="description" content="Wokkah's Privacy Policy - Learn how we collect, use, and protect your personal information." />
      </Helmet>

      <section className="pt-32 pb-16">
        <div className="container max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground"><strong>Last Updated:</strong> April 4, 2025</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>Welcome to Wokkah ("we," "our," or "us"). We are committed to protecting your privacy and handling your data in an open and transparent manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our AI-powered business solutions.</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            <p>We collect the following types of information:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, company information, and other details you provide when filling out forms, signing up for services, or contacting us.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and actions taken.</li>
              <li><strong>Business Information:</strong> Data related to your business operations when you use our AI solutions, which may include operational workflows, performance metrics, and other business-specific information.</li>
              <li><strong>Device Information:</strong> IP address, browser type, operating system, and other technical details about your device.</li>
            </ul>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use the collected information for various purposes, including:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Providing, operating, and maintaining our services</li>
              <li>Improving, personalizing, and expanding our services</li>
              <li>Understanding and analyzing how you use our website and services</li>
              <li>Developing new products, services, features, and functionality</li>
              <li>Communicating with you, including for customer service, updates, and marketing purposes</li>
              <li>Processing transactions and sending related information</li>
              <li>Protecting against fraud and unauthorized transactions</li>
              <li>Complying with legal obligations</li>
            </ul>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">4. Data Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Service Providers:</strong> Third-party vendors who provide services on our behalf, such as hosting, data analysis, payment processing, and customer service.</li>
              <li><strong>Business Partners:</strong> Companies we partner with to offer joint products or services.</li>
              <li><strong>Legal Requirements:</strong> When required by law, such as to comply with a subpoena or similar legal process.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of all or a portion of our assets.</li>
            </ul>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate or incomplete data</li>
              <li>Deletion of your personal information</li>
              <li>Restriction of processing of your personal information</li>
              <li>Data portability</li>
              <li>Objection to processing of your personal information</li>
            </ul>
            <p>To exercise these rights, please <Link to="/contact" className="text-primary hover:underline">contact us</Link>.</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">7. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information. For more information about how we use cookies, please see our <a href="/cookies" className="text-primary hover:underline">Cookie Policy</a>.</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">8. Children's Privacy</h2>
            <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">9. Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please visit our <Link to="/contact" className="text-primary hover:underline">Contact Us</Link> page.</p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PrivacyPolicy;
