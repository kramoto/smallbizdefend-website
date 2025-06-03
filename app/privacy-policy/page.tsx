import PageHeader from "@/components/page-header"

export default function PrivacyPolicyPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16">
      <PageHeader title="Privacy Policy" description="Effective Date: May 9, 2025" />

      <div className="max-w-3xl mx-auto mt-12">
        <p className="mb-6 text-muted-foreground">
          SmallBizDefend.com ("we", "our", "us") values your privacy. This Privacy Policy explains how we collect, use,
          and protect your personal data across our global audience. By using our website and services, you agree to the
          practices described below.
        </p>

        <h2 className="text-2xl font-bold tracking-tight mb-4 mt-8">1. Who We Are</h2>
        <p className="mb-4 text-muted-foreground">
          SmallBizDefend.com is a cybersecurity consultancy serving clients worldwide. If you have any questions about
          this policy or your personal data, please contact us:
        </p>
        <ul className="mb-6 text-muted-foreground">
          <li>Email: privacy@smallbizdefend.com</li>
        </ul>

        <h2 className="text-2xl font-bold tracking-tight mb-4 mt-8">2. What Information We Collect</h2>
        <p className="mb-4 text-muted-foreground">We may collect the following types of personal data:</p>

        <p className="mb-4 text-muted-foreground">
          <strong>Information You Provide:</strong> Name, email address, business information, and payment details
          (collected via forms, email, or purchases).
        </p>

        <p className="mb-4 text-muted-foreground">
          <strong>Automatically Collected Information:</strong> IP address, browser type, device info, pages visited,
          cookies, usage data.
        </p>

        <p className="mb-6 text-muted-foreground">
          <strong>Third-Party Data:</strong> Information shared with us via integrated services (e.g., payment
          platforms, email providers).
        </p>

        <h2 className="text-2xl font-bold tracking-tight mb-4 mt-8">
          3. Legal Bases for Processing (Where Applicable)
        </h2>
        <p className="mb-4 text-muted-foreground">
          Depending on your location, we process your data under one or more of the following bases:
        </p>
        <ul className="mb-6 space-y-2 text-muted-foreground">
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>Your consent</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>To fulfill a contract or provide requested services</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>To comply with legal obligations</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>Based on our legitimate interests, provided these do not override your rights</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>As required for legal claims or defense</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold tracking-tight mb-4 mt-8">4. How We Use Your Information</h2>
        <p className="mb-4 text-muted-foreground">We use personal data for the following purposes:</p>
        <ul className="mb-6 space-y-2 text-muted-foreground">
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>To provide, maintain, and improve our services</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>To process transactions and fulfill orders</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>To respond to inquiries or support requests</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>To send updates, newsletters, or promotional emails (with your consent)</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>To comply with legal and tax obligations</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>To analyze usage and detect/prevent fraud or abuse</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold tracking-tight mb-4 mt-8">5. Data Retention</h2>
        <p className="mb-4 text-muted-foreground">
          We retain personal data only as long as necessary for the purposes for which it was collected:
        </p>
        <ul className="mb-6 space-y-2 text-muted-foreground">
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>Contact form submissions: up to 12 months</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>Transaction data: up to 7 years (for legal and tax compliance)</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>Email subscriptions: until you unsubscribe or request deletion</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>Analytics and usage data: anonymized or deleted after 26 months (standard)</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold tracking-tight mb-4 mt-8">6. Sharing and Disclosure</h2>
        <p className="mb-4 text-muted-foreground">
          We do not sell your personal information. We only share your data with:
        </p>
        <ul className="mb-6 space-y-2 text-muted-foreground">
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>
              <strong>Service Providers:</strong> such as payment processors, email platforms, and hosting providers
              (e.g., Gumroad, Mailchimp, Vercel)
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>
              <strong>Legal or Regulatory Authorities:</strong> when required to comply with the law or protect our
              rights
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>
              <strong>Business Transfers:</strong> if we undergo a merger, acquisition, or asset sale
            </span>
          </li>
        </ul>
        <p className="mb-6 text-muted-foreground">
          All third parties are contractually bound to safeguard your information.
        </p>

        <h2 className="text-2xl font-bold tracking-tight mb-4 mt-8">7. Cookies & Tracking Technologies</h2>
        <p className="mb-4 text-muted-foreground">We use cookies and similar technologies to:</p>
        <ul className="mb-6 space-y-2 text-muted-foreground">
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>Analyze traffic and usage</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>Improve site performance</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>Personalize your experience</span>
          </li>
        </ul>
        <p className="mb-6 text-muted-foreground">
          You may control or disable cookies via your browser or through our cookie banner (if shown). For more details,
          refer to our Cookie Policy.
        </p>

        <h2 className="text-2xl font-bold tracking-tight mb-4 mt-8">8. Your Privacy Rights</h2>
        <p className="mb-4 text-muted-foreground">Depending on your location, you may have the following rights:</p>

        <h3 className="text-xl font-semibold mb-3 mt-6">General (Worldwide)</h3>
        <ul className="mb-6 space-y-2 text-muted-foreground">
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>Right to access and receive a copy of your personal data</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>Right to request correction or deletion</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>Right to restrict or object to certain processing</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>Right to data portability</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>Right to withdraw consent</span>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 mt-6">California Residents (CCPA)</h3>
        <ul className="mb-6 space-y-2 text-muted-foreground">
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>Right to know what personal data we collect, use, disclose, or sell</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>Right to opt-out of data sales (we do not sell your data)</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>Right to request deletion of your personal data</span>
          </li>
        </ul>

        <p className="mb-6 text-muted-foreground">
          To exercise your rights, contact: privacy@smallbizdefend.com
          <br />
          We will respond within the legally required timeframe.
        </p>

        <h2 className="text-2xl font-bold tracking-tight mb-4 mt-8">9. International Transfers</h2>
        <p className="mb-6 text-muted-foreground">
          We may process your data outside your country of residence, including in the U.S. and EU. When we transfer
          data internationally, we use standard contractual clauses or other legally valid mechanisms to protect your
          data.
        </p>

        <h2 className="text-2xl font-bold tracking-tight mb-4 mt-8">10. Data Security</h2>
        <p className="mb-4 text-muted-foreground">We take data protection seriously. Security measures include:</p>
        <ul className="mb-6 space-y-2 text-muted-foreground">
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>HTTPS encryption</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>Access controls</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>Secure data storage and processing environments</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">✅</span>
            <span>Regular monitoring and threat prevention protocols</span>
          </li>
        </ul>
        <p className="mb-6 text-muted-foreground">
          However, no method of transmission over the internet is 100% secure. We encourage you to take your own
          precautions as well.
        </p>

        <h2 className="text-2xl font-bold tracking-tight mb-4 mt-8">11. Children's Privacy</h2>
        <p className="mb-6 text-muted-foreground">
          Our services are not directed at individuals under 16. We do not knowingly collect personal data from
          children. If we learn that we've collected data from a minor without appropriate consent, we will delete it.
        </p>

        <h2 className="text-2xl font-bold tracking-tight mb-4 mt-8">12. Third-Party Links</h2>
        <p className="mb-6 text-muted-foreground">
          Our website may contain links to third-party websites. We are not responsible for the privacy practices or
          content of those sites. Please review their policies before providing personal data.
        </p>

        <h2 className="text-2xl font-bold tracking-tight mb-4 mt-8">13. Changes to This Policy</h2>
        <p className="mb-6 text-muted-foreground">
          We may update this policy periodically. We encourage you to review it regularly. Major changes will be
          notified on the site or by email if appropriate.
        </p>
        <p className="mb-6 text-muted-foreground">Last Updated: May 9, 2025</p>

        <h2 className="text-2xl font-bold tracking-tight mb-4 mt-8">14. Contact Us</h2>
        <p className="mb-6 text-muted-foreground">
          If you have any questions, concerns, or requests related to this policy or your data:
        </p>
        <p className="mb-6 text-muted-foreground">Email: privacy@smallbizdefend.com</p>
      </div>
    </div>
  )
}
