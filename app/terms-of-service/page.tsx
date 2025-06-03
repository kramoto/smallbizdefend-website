import PageHeader from "@/components/page-header"

export default function TermsOfServicePage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16">
      <PageHeader title="Terms of Service" description="Effective Date: May 9, 2025" />

      <div className="max-w-4xl mx-auto mt-12 prose prose-slate">
        <p>
          Welcome to SmallBizDefend.com (the "Site"). These Terms of Service ("Terms") govern your access to and use of
          our website, services, and any related content (collectively, the "Service"), operated by SmallBizDefend.com
          ("we," "us," or "our").
        </p>

        <p>
          By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy, which is
          incorporated by reference. If you do not agree to these Terms, do not access or use the Service.
        </p>

        <h2>1. Eligibility</h2>
        <p>
          The Service is intended for individuals who are at least 18 years old, or the legal age of majority in your
          jurisdiction. By using the Service, you represent and warrant that you meet these requirements.
        </p>

        <h2>2. Use of the Service</h2>
        <h3>License</h3>
        <p>
          We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the Service
          for lawful purposes, whether for personal or legitimate business use.
        </p>

        <h3>Prohibited Conduct</h3>
        <p>You agree not to use the Service:</p>
        <ul>
          <li>In violation of any applicable law or regulation.</li>
          <li>To exploit, harm, or attempt to harm minors.</li>
          <li>To transmit unauthorized advertising (spam, phishing, chain letters, etc.).</li>
          <li>To impersonate any individual or entity, or misrepresent your affiliation.</li>
          <li>To interfere with or disrupt the Service or its infrastructure.</li>
          <li>
            To use automated tools (bots, scrapers, crawlers) to access or extract content, unless expressly permitted
            in writing.
          </li>
          <li>To engage in any activity that may harm our reputation or the experience of other users.</li>
        </ul>

        <h2>3. Intellectual Property</h2>
        <p>
          All content, logos, graphics, text, software, and functionality on the Site are owned by or licensed to
          SmallBizDefend.com and protected under copyright, trademark, and other laws. You may not use, reproduce, or
          distribute any content without our express written consent, except for personal, non-commercial use.
        </p>

        <h2>4. Third-Party Links and Services</h2>
        <p>
          The Service may contain links to third-party websites or services (e.g., Gumroad, Mailchimp). We do not
          control or endorse these external sites and are not responsible for their content or privacy practices. You
          access them at your own risk.
        </p>

        <h2>5. Purchases and Payments</h2>
        <p>If you purchase products or services through the Site:</p>
        <ul>
          <li>All payments are processed securely through third-party providers (e.g., Gumroad).</li>
          <li>Prices, descriptions, and availability are subject to change without notice.</li>
          <li>You agree to provide current, complete, and accurate billing information.</li>
          <li>Refunds (if applicable) are subject to our posted refund policy or terms on the purchase page.</li>
        </ul>

        <h2>6. Disclaimer of Warranties</h2>
        <p>
          The Service is provided "as is" and "as available." We make no warranties, express or implied, regarding the
          operation of the Site or the content, including but not limited to warranties of merchantability, fitness for
          a particular purpose, or non-infringement.
        </p>
        <p>
          We do not guarantee the Service will be uninterrupted, error-free, or free from viruses or harmful components.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, SmallBizDefend.com shall not be liable for any indirect, incidental,
          special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from or
          related to your use or inability to use the Service.
        </p>
        <p>
          Our total liability, in any case, shall not exceed the amount you paid to us, if any, in the 6 months
          preceding the claim.
        </p>

        <h2>8. Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless SmallBizDefend.com and its affiliates, employees, and agents
          from any claims, liabilities, damages, judgments, and expenses arising from your violation of these Terms or
          your use of the Service.
        </p>

        <h2>9. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to the Service, at our discretion, without notice,
          for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
        </p>

        <h2>10. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. When we do, we will revise the "Effective Date" at the top.
          Continued use of the Service after changes constitutes your acceptance of the updated Terms.
        </p>

        <h2>11. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict
          of law principles. Any disputes shall be resolved in the appropriate courts of jurisdiction.
        </p>

        <h2>12. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us:</p>
        <p>
          SmallBizDefend.com
          <br />
          Email: legal@smallbizdefend.com
        </p>
      </div>
    </div>
  )
}
