import Image from "next/image"
import PageHeader from "@/components/page-header"

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16">
      <PageHeader title="Passionate About Protecting Small Businesses" description="Our Story" />

      <div className="max-w-4xl mx-auto mt-12">
        <p className="text-lg mb-6">
          Welcome to SmallBizDefend.com. We are driven by a singular, powerful mission: to empower small business owners
          like you with the knowledge, tools, and confidence to navigate the digital world securely. In an era where
          cyber threats are becoming increasingly sophisticated and prevalent, we believe that robust cybersecurity
          shouldn't be a complex, expensive luxury reserved for large corporations.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6">From Corporate Security to Championing Small Business Defense</h2>
        <div className="md:flex gap-8 items-start">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <div className="bg-slate-200 rounded-lg aspect-square flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Founder"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="mb-4">
              SmallBizDefend.com was founded by an IT Security Consultant and Auditor with over 15 years of dedicated
              experience in the cybersecurity field. My journey has taken me through diverse environments, from
              assessing the defenses of large enterprises to understanding the unique vulnerabilities faced by
              burgeoning startups.
            </p>
            <p className="mb-4">
              Through this extensive experience, a clear and pressing need became apparent: small businesses, the
              vibrant heart of our economy, were often underserved and disproportionately at risk. They faced the same
              threats as larger companies but frequently lacked the specialized staff, an extensive budget, or the time
              to implement comprehensive security measures.
            </p>
            <p>
              This realization sparked the creation of SmallBizDefend.com. It was born from a desire to bridge that gap,
              to translate complex security concepts into plain English, and to offer solutions that are not only
              effective but also realistic for the small business owner who is juggling countless responsibilities.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">
          Our Philosophy: Cybersecurity Made Simple, Practical, and Effective
        </h2>
        <p className="mb-4">
          At SmallBizDefend.com, our approach to your security is guided by several core principles:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            <strong>Simplicity and Clarity:</strong> We cut through the technical jargon. Our resources, guides, and
            services are designed to be easily understood, regardless of your technical background.
          </li>
          <li>
            <strong>Practical and Actionable Solutions:</strong> We focus on providing advice and tools that you can
            implement immediately to see tangible improvements in your security posture.
          </li>
          <li>
            <strong>Tailored for Small Businesses:</strong> We understand that small businesses have unique needs,
            constraints, and priorities. Our content and offerings are specifically designed with these in mind.
          </li>
          <li>
            <strong>Empowerment Through Knowledge:</strong> We believe in equipping you with the understanding to make
            informed decisions about your security, rather than just dictating solutions.
          </li>
          <li>
            <strong>Proactive Defense:</strong> We champion a proactive approach to cybersecurity, helping you build
            defenses to prevent incidents before they happen, rather than just reacting to them.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-6">Our Commitment to You</h2>
        <p className="mb-4">
          We are committed to being your trusted partner in cybersecurity. This means providing reliable, up-to-date
          information, offering high-value services, and always prioritizing your business's safety and success. We aim
          to build a community where small business owners can find the support and resources they need to protect what
          they've worked so hard to create.
        </p>
      </div>
    </div>
  )
}
