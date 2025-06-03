import PageHeader from "@/components/page-header"

export default function PrivacyPolicyPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16">
      <PageHeader title="Privacy Policy" description="Effective Date: May 9, 2025" />

      <div className="max-w-4xl mx-auto mt-12 prose prose-slate">
        <p>
          SmallBizDefend.com ("we", "our", "us") values your privacy. This Privacy Policy explains how we collect, use,
          and protect your personal data across our global audience. By using our website and services, you agree to the
          practices described below.
        </p>

        <h2>1. Who We Are</h2>
        <p>
          SmallBizDefend.com is a cybersecurity consultancy serving clients worldwide. If you have any questions about
          this policy or your personal data, please contact us:
        </p>
        <ul>
          <li>Email: privacy@smallbizdefend.com</li>
        </ul>

        <h2>2. What Information We Collect</h2>
        <p>We may collect the following types of personal data:</p>

        <p>
          <strong>Information You Provide:</strong> Name, email address, business information, and payment details
          (collected via forms, email, or purchases).
        </p>

        <p>
          <strong>Automatically Collected Information:</strong> IP address, browser type, device info, pages visited,
          cookies, usage data.
        </p>

        <p>
          <strong>Third-Party Data:</strong> Information shared with us via integrated services (e.g., payment
          platforms, email providers).
        </p>

        <h2>3. Legal Bases for Processing (Where Applicable)</h2>
        <p>Depending on your location, we process your data under one or more of the following bases:</p>
        <ul>
          <li>Your consent</li>
          <li>To fulfill a contract or provide requested services</li>
          <li>To comply with legal obligations</li>
          <li>Based on our legitimate interests, provided these do not override your rights</li>
          <li>As required for legal claims or defense</li>
        </ul>

        <h2>4. How We Use Your Information</h2>
        <p>We use personal data for the following purposes:</p>
        <ul>
          <li>To provide, maintain, and improve our services</li>
          <li>To process transactions and fulfill orders</li>
          <li>To respond to inquiries or support requests</li>
          <li>To send updates, newsletters, or promotional emails (with your consent)</li>
          <li>To comply with legal and tax obligations</li>
          <li>To analyze usage and detect/prevent fraud or abuse</li>
        </ul>

        <h2>5. Data Retention</h2>
        <p>We retain personal data only as long as necessary for the purposes for which it was collected:</p>
        <ul>
          <li>Contact form submissions: up to 12 months</li>
          <li>Transaction data: up to 7 years (for legal and tax compliance)</li>
          <li>Email subscriptions: until you unsubscribe or request deletion</li>
          <li>Analytics and usage data: anonymized or deleted after 26 months (standard)</li>
        </ul>

        <h2>6. Sharing and Disclosure</h2>
        <p>We do not sell your personal information. We only share your data with:</p>
        <ul>
          <li>
            <strong>Service Providers:</strong> such as payment processors, email platforms, and hosting providers
            (e.g., Gumroad, Mailchimp, Vercel)
          </li>
          <li>
            <strong>Legal or Regulatory Authorities:</strong> when required to comply with the law or protect our rights
          </li>
          <li>
            <strong>Business Transfers:</strong> if we undergo a merger, acquisition, or asset sale
          </li>
        </ul>
        <p>All third parties are contractually bound to safeguard your information.</p>

        <h2>7. Cookies & Tracking Technologies</h2>
        <p>We use cookies and similar technologies to:</p>
        <ul>
          <li>Analyze traffic and usage</li>
          <li>Improve site performance</li>
          <li>Personalize your experience</li>
        </ul>
        <p>
          You may control or disable cookies via your browser or through our cookie banner (if shown). For more details,
          refer to our Cookie Policy.
        </p>

        <h2>8. Your Privacy Rights</h2>
        <p>Depending on your location, you may have the following rights:</p>

        <h3>General (Worldwide)</h3>
        <ul>
          <li>Right to access and receive a copy of your personal data</li>
          <li>Right to request correction or deletion</li>
          <li>Right to restrict or object to certain processing</li>
          <li>Right to data portability</li>
          <li>Right to withdraw consent</li>
        </ul>

        <h3>California Residents (CCPA)</h3>
        <ul>
          <li>Right to know what personal data we collect, use, disclose, or sell</li>
          <li>Right to opt-out of data sales (we do not sell your data)</li>
          <li>Right to request deletion of your personal data</li>
        </ul>

        <p>
          To exercise your rights, contact: privacy@smallbizdefend.com
          <br />
          We will respond within the legally required timeframe.
        </p>

        <h2>9. International Transfers</h2>
        <p>
          We may process your data outside your country of residence, including in the U.S. and EU. When we transfer
          data internationally, we use standard contractual clauses or other legally valid mechanisms to protect your
          data.
        </p>

        <h2>10. Data Security</h2>
        <p>We take data protection seriously. Security measures include:</p>
        <ul>
          <li>HTTPS encryption</li>
          <li>Access controls</li>
          <li>Secure data storage and processing environments</li>
          <li>Regular monitoring and threat prevention protocols</li>
        </ul>
        <p>
          However, no method of transmission over the internet is 100% secure. We encourage you to take your own
          precautions as well.
        </p>

        <h2>11. Children's Privacy</h2>
        <p>
          Our services are not directed at individuals under 16. We do not knowingly collect personal data from
          children. If we learn that we've collected data from a minor without appropriate consent, we will delete it.
        </p>

        <h2>12. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices or
          content of those sites. Please review their policies before providing personal data.
        </p>

        <h2>13. Changes to This Policy</h2>
        <p>
          We may update this policy periodically. We encourage you to review it regularly. Major changes will be
          notified on the site or by email if appropriate.
        </p>
        <p>Last Updated: May 9, 2025</p>

        <h2>14. Contact Us</h2>
        <p>If you have any questions, concerns, or requests related to this policy or your data:</p>
        <p>Email: privacy@smallbizdefend.com</p>
      </div>
    </div>
  )
}
