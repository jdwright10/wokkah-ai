
import React from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import BreadcrumbNav from '@/components/BreadcrumbNav';

const CookiePolicy = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Cookie Policy', isCurrent: true }
  ];

  return (
    <MainLayout customBreadcrumbs={<BreadcrumbNav items={breadcrumbItems} className="mb-6" />}>
      <Helmet>
        <title>Cookie Policy | Wokkah</title>
        <meta name="description" content="Wokkah's Cookie Policy - Learn how we use cookies and similar technologies on our website." />
      </Helmet>

      <section className="pt-32 pb-16">
        <div className="container max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground"><strong>Last Updated:</strong> April 4, 2025</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>This Cookie Policy explains how Wokkah ("we," "our," or "us") uses cookies and similar technologies on our website. By using our website, you consent to the use of cookies as described in this policy.</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">2. What Are Cookies?</h2>
            <p>Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies help enhance your browsing experience by remembering your preferences and enabling certain website features.</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">3. Types of Cookies We Use</h2>
            <p>We use the following types of cookies on our website:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.</li>
              <li><strong>Performance Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us improve the functionality of our website.</li>
              <li><strong>Functionality Cookies:</strong> These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, more personal features.</li>
              <li><strong>Targeting/Advertising Cookies:</strong> These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.</li>
            </ul>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">4. Third-Party Cookies</h2>
            <p>In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements, and so on. These cookies may track your browsing habits across different websites and online services.</p>
            <p>Some of the third-party services we use include:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Google Analytics (for website usage analysis)</li>
              <li>Google AdSense (for advertising)</li>
              <li>Facebook Pixel (for advertising and tracking conversions)</li>
              <li>LinkedIn Insight Tag (for advertising and tracking conversions)</li>
            </ul>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">5. How to Control Cookies</h2>
            <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.</p>
            <p>Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.allaboutcookies.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.</p>
            <p>To opt out of being tracked by Google Analytics across all websites, visit <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a>.</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">6. Your Consent</h2>
            <p>By using our website, you consent to the use of cookies in accordance with this Cookie Policy. If you do not agree to our use of cookies, you can set your browser to reject cookies or to tell you when a website tries to put a cookie on your computer. However, some features of our website may not function properly if you disable cookies.</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">7. Changes to This Cookie Policy</h2>
            <p>We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date.</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
            <p>If you have any questions about this Cookie Policy, please contact us at:</p>
            <p>Email: jason@wokkah.com</p>
            <p>Address: Wokkah, 1775 Mentor Ave Suite 300, Cincinnati, OH 45212</p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CookiePolicy;
