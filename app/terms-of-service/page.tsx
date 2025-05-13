import PageHeader from "@/components/page-header"

export default function TermsOfServicePage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16">
      <PageHeader title="Terms of Service" description="Effective Date: May 9, 2025" />

      <div className="max-w-4xl mx-auto mt-12 prose prose-slate">
        <p>
          Welcome to SmallBizDefend.com (the "Site"). These Terms of Service ("Terms") govern your access to and use of
          our website, including any content, functionality, and services offered on or through SmallBizDefend.com
          (collectively, the "Service").
        </p>

        <p>
          Please read these Terms carefully before you start to use the Service. By using the Service, you accept and
          agree to be bound and abide by these Terms and our Privacy Policy, incorporated herein by reference. If you do
          not want to agree to these Terms or the Privacy Policy, you must not access or use the Service.
        </p>

        <h2>1. Use of Our Service</h2>
        <h3>Eligibility:</h3>
        <p>
          The Service is offered and available to users who are 18 years of age or older, or the legal age to form a
          binding contract in your jurisdiction if that age is greater than 18. By using this Service, you represent and
          warrant that you meet all of the foregoing eligibility requirements.
        </p>

        <h3>Permitted Use:</h3>
        <p>
          You are granted a non-exclusive, non-transferable, revocable license to access and use the Service strictly in
          accordance with these Terms for your personal, non-commercial use (unless you are purchasing our services for
          your business use as intended).
        </p>

        <h3>Prohibited Uses:</h3>
        <p>You agree not to use the Service:</p>
        <ul>
          <li>In any way that violates any applicable national or international law or regulation.</li>
          <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
          <li>
            To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail,"
            "chain letter," "spam," or any other similar solicitation.
          </li>
          <li>
            To impersonate or attempt to impersonate SmallBizDefend.com, a SmallBizDefend.com employee, another user, or
            any other person or entity.
          </li>
          <li>
            To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or
            which, as determined by us, may harm SmallBizDefend.com or users of the Service or expose them to liability.
          </li>
          <li>
            To scrape, data mine, or otherwise extract data or content from the Service without our express written
            permission.
          </li>
        </ul>

        {/* More terms of service content would go here */}

        <h2>12. Contact Information</h2>
        <p>If you have any questions about these Terms of Service, please contact us at:</p>
        <p>
          SmallBizDefend.com
          <br />
          Email: legal@smallbizdefend.com
        </p>
      </div>
    </div>
  )
}
