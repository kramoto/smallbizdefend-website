import PageHeader from "@/components/page-header"

export default function TermsOfServicePage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16">
      <PageHeader title="Terms of Service" description="Effective Date: May 9, 2025" />

      <div className="max-w-3xl mx-auto mt-12">
        <p className="mb-6 text-muted-foreground">
          Welcome to SmallBizDefend.com (the "Site"). These Terms of Service ("Terms") govern your access to and use of
          our website, services, and any related content (collectively, the "Service"), operated by SmallBizDefend.com
          ("we," "us," or "our").
        </p>

        <p className="mb-6 text-muted-foreground">
          By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy, which is
          incorporated by reference. If you do not agree to these Terms, do not access or use the Service.
        </p>

        <h2 className="text-2xl font-bold tracking-tight mb-4 mt-8">1. Eligibility</h2>
        <p className="mb-6 text-muted-foreground">
          The Service is intended for individuals who are at least 18 years old, or the legal age of majority in your
          jurisdiction. By using the Service, you represent and warrant that you meet these requirements.
        </p>

        <h2 className="text-2xl font-bold tracking-tight mb-4 mt-8">2. Use of the Service</h2>
        <h3 className="text-xl font-semibold mb-3 mt-6">License</h3>
        <p className="mb-6 text-muted-foreground">
          We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the Service
          for lawful purposes, whether for personal or legitimate business use.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">Prohibited Conduct</h3>
        <p className="mb-4 text-muted-foreground">You agree not to use the Service:</p>
        <ul className="mb-6 space-y-2 text-muted-foreground">
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>In violation of any applicable law or regulation.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>To exploit, harm, or attempt to harm minors.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>To transmit unauthorized advertising (spam, phishing, chain letters, etc.).</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>To impersonate any individual or entity, or misrepresent your affiliation.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>To interfere with or disrupt the Service or its infrastructure.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>
              To use automated tools (bots, scrapers, crawlers) to access or extract content, unless expressly permitted
              in writing.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>To engage in any activity that may harm our reputation or the experience of other users.</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold tracking-tight mb-4 mt-8">3. Intellectual Property</h2>
        <p className="mb-6 text-muted-foreground">
          All content, logos, graphics, text, software, and functionality on the Site are owned by or licensed to
          SmallBizDefend.com and protected under copyright, trademark, and other laws. You may not use, reproduce, or
          distribute any content without our express written consent, except for personal, non-commercial use.
        </p>

        <h2 className="text-2xl font-bold tracking-tight mb-4 mt-8">4. Third-Party Links and Services</h2>
        <p className="mb-6 text-muted-foreground">
          The Service may contain links to third-party websites or services (e.g., Gumroad, Mailchimp). We do not
          control or endorse these external sites and are not responsible for their content or privacy practices. You
          access them at your own risk.
        </p>

        <h2 className="text-2xl font-bold tracking-tight mb-4 mt-8">5. Purchases and Payments</h2>
        <p className="mb-4 text-muted-foreground">If you purchase products or services through the Site:</p>
        <ul className="mb-6 space-y-2 text-muted-foreground">
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>All payments are processed securely through third-party providers (e.g., Gumroad).</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>Prices, descriptions, and availability are subject to change without notice.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>You agree to provide current, complete, and accurate billing information.</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>Refunds (if applicable) are subject to our posted refund policy or terms on the purchase page.</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold tracking-tight mb-4 mt-8">6. Disclaimer of Warranties</h2>
        <p className="mb-6 text-muted-foreground">
          The Service is provided "as is" and "as available." We make no warranties, express or implied, regarding the
          operation of the Site or the content, including but not limited to warranties of merchantability, fitness for
          a particular purpose, or non-infringement.
        </p>
        <p className="mb-6 text-muted-foreground">
          We do not guarantee the Service will be uninterrupted, error-free, or free from viruses or harmful components.
        </p>

        <h2 className="text-2xl font-bold tracking-tight mb-4 mt-8">7. Limitation of Liability</h2>
        <p className="mb-6 text-muted-foreground">
          To the fullest extent permitted by law, SmallBizDefend.com shall not be liable for any indirect, incidental,
          special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from or
          related to your use or inability to use the Service.
        </p>
        <p className="mb-6 text-muted-foreground">
          Our total liability, in any case, shall not exceed the amount you paid to us, if any, in the 6 months
          preceding the claim.
        </p>

        <h2 className="text-2xl font-bold tracking-tight mb-4 mt-8">8. Indemnification</h2>
        <p className="mb-6 text-muted-foreground">
          You agree to indemnify, defend, and hold harmless SmallBizDefend.com and its affiliates, employees, and agents
          from any claims, liabilities, damages, judgments, and expenses arising from your violation of these Terms or
          your use of the Service.
        </p>

        <h2 className="text-2xl font-bold tracking-tight mb-4 mt-8">9. Termination</h2>
        <p className="mb-6 text-muted-foreground">
          We reserve the right to suspend or terminate your access to the Service, at our discretion, without notice,
          for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
        </p>

        <h2 className="text-2xl font-bold tracking-tight mb-4 mt-8">10. Changes to These Terms</h2>
        <p className="mb-6 text-muted-foreground">
          We may update these Terms from time to time. When we do, we will revise the "Effective Date" at the top.
          Continued use of the Service after changes constitutes your acceptance of the updated Terms.
        </p>

        <h2 className="text-2xl font-bold tracking-tight mb-4 mt-8">11. Governing Law</h2>
        <p className="mb-6 text-muted-foreground">
          These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict
          of law principles. Any disputes shall be resolved in the appropriate courts of jurisdiction.
        </p>

        <h2 className="text-2xl font-bold tracking-tight mb-4 mt-8">12. Contact Us</h2>
        <p className="mb-6 text-muted-foreground">If you have any questions about these Terms, please contact us:</p>
        <p className="mb-6 text-muted-foreground">
          SmallBizDefend.com
          <br />
          Email: legal@smallbizdefend.com
        </p>
      </div>
    </div>
  )
}
