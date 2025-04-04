
import React from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import BreadcrumbNav from '@/components/BreadcrumbNav';

const TermsOfService = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Terms of Service', isCurrent: true }
  ];

  return (
    <MainLayout customBreadcrumbs={<BreadcrumbNav items={breadcrumbItems} className="mb-6" />}>
      <Helmet>
        <title>Terms of Service | Wokkah</title>
        <meta name="description" content="Wokkah's Terms of Service - Guidelines and legal terms for using our platform and services." />
      </Helmet>

      <section className="pt-32 pb-16">
        <div className="container max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground"><strong>Last Updated:</strong> April 4, 2025</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using Wokkah's website and services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">2. Description of Services</h2>
            <p>Wokkah provides AI-powered business solutions designed to streamline operations, reduce costs, and boost productivity. Our services include but are not limited to business automation, AI integration, and digital transformation consulting.</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">3. User Accounts</h2>
            <p>When you create an account with us, you must provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">4. User Responsibilities</h2>
            <p>You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Use the Services in any way that violates any applicable law or regulation</li>
              <li>Attempt to gain unauthorized access to any part of the Services</li>
              <li>Interfere with or disrupt the Services or servers or networks connected to the Services</li>
              <li>Impersonate or attempt to impersonate Wokkah, a Wokkah employee, or another user</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Services</li>
              <li>Use the Services to send spam or other unsolicited communications</li>
            </ul>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">5. Intellectual Property Rights</h2>
            <p>The Services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Wokkah, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
            <p>You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services, except as follows:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials</li>
              <li>You may store files that are automatically cached by your Web browser for display enhancement purposes</li>
              <li>You may print or download one copy of a reasonable number of pages of the website for your own personal, non-commercial use and not for further reproduction, publication, or distribution</li>
            </ul>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">6. Data and Content</h2>
            <p>Any data or content you submit to or through the Services remains your property. However, by submitting data or content, you grant Wokkah a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute such data or content for the purpose of providing and improving our Services.</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">7. Payment Terms</h2>
            <p>Certain aspects of the Services may be provided for a fee. You agree to pay all fees associated with the Services you select. All fees are exclusive of taxes, which you are responsible for paying. Payment must be made using the payment method specified when you sign up for the Services. Subscription fees are billed in advance on a monthly or annual basis, as selected by you.</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">8. Termination</h2>
            <p>We may terminate or suspend your account and access to the Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use the Services will immediately cease.</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">9. Limitation of Liability</h2>
            <p>In no event shall Wokkah, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Services.</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">10. Disclaimer of Warranties</h2>
            <p>The Services are provided "as is" and "as available" without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">11. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the State of Ohio, without regard to its conflict of law provisions.</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">12. Changes to Terms</h2>
            <p>We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">13. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>Email: jason@wokkah.com</p>
            <p>Address: Wokkah, 1775 Mentor Ave Suite 300, Cincinnati, OH 45212</p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default TermsOfService;
