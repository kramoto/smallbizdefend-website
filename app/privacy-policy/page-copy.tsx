import PageHeader from "@/components/page-header"

export default function PrivacyPolicyPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16">
      <PageHeader title="Privacy Policy" description="Effective Date: May 9, 2025" />

      <div className="max-w-4xl mx-auto mt-12 prose prose-slate">
        <p>
          Welcome to SmallBizDefend.com (the "Site"). We are committed to protecting your privacy and handling your
          personal data in an open and transparent manner. This Privacy Policy outlines how we collect, use, disclose,
          and safeguard your information when you visit our website, use our services (including the "Small Business
          Cybersecurity Awareness Starter Kit" and the "Securing Your Small Business: First Steps to Digital Safety"
          workshop), or otherwise interact with us.
        </p>

        <p>
          Please read this Privacy Policy carefully. If you do not agree with the terms of this privacy policy, please
          do not access the site or use our services.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We may collect information about you in a variety of ways. The information we may collect on the Site
          includes:
        </p>

        <h3>Personal Data You Provide to Us:</h3>
        <ul>
          <li>
            When you contact us via our contact form or email, we collect your name, email address, and the content of
            your message.
          </li>
          <li>
            When you register for our workshop or purchase our starter kit (potentially through third-party platforms
            like Gumroad), we or our third-party payment processors may collect your name, email address, billing
            address, and payment information. Please note that payment information is typically processed directly by
            secure third-party payment gateways, and we do not store your full credit card details.
          </li>
          <li>If you subscribe to our newsletter, we collect your email address.</li>
          <li>
            If you leave comments on our blog posts (where this feature is enabled), we may collect your name, email
            address, and website URL.
          </li>
        </ul>

        <h3>Data Collected Automatically (Usage Data):</h3>
        <ul>
          <li>
            <strong>Log and Usage Data:</strong> Like most websites, we automatically collect information your browser
            sends whenever you visit our Site. This may include your IP address, browser type and version, operating
            system, referring/exit pages, the pages of our Site that you visit, the time and date of your visit, the
            time spent on those pages, and other statistics.
          </li>
          <li>
            <strong>Cookies and Similar Tracking Technologies:</strong> We use cookies and similar tracking technologies
            (like web beacons and pixels) to access or store information. Cookies are small data files stored on your
            hard drive or in device memory that help us improve our Site and your experience, see which areas and
            features of our Site are popular, and count visits. You can instruct your browser to refuse all cookies or
            to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use
            some portions of our Site.
          </li>
        </ul>

        {/* More privacy policy content would go here */}

        <h2>11. Contact Us</h2>
        <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
        <p>
          SmallBizDefend.com
          <br />
          Email: privacy@smallbizdefend.com
        </p>
      </div>
    </div>
  )
}
